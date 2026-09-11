import express from "express";
import { z } from "zod";
import mongoose from "mongoose";
import { Enquiry } from "../models/Enquiry.js";
import { sendEnquiryEmail } from "../services/emailService.js";
import { requireAdmin } from "../middleware/auth.js";
import rateLimit from "express-rate-limit";

const router = express.Router();
const enquiryLimit = rateLimit({ windowMs: 15 * 60 * 1000, max: 20 });
const schema = z.object({
  category: z.string().min(2),
  source: z.string().min(2),
  payload: z.record(z.any()),
});
const indianPhone = /^(?:\+91[6-9]\d{9}|[6-9]\d{9})$/;
const chatPayloadSchema = z.object({
  userType: z.enum(["parent", "student"]),
  parentName: z.string().trim().optional().default(""),
  studentName: z.string().trim().min(2),
  studentClass: z.string().trim().min(1),
  courseCategory: z.string().trim().min(2),
  courseType: z.string().trim().min(1),
  campus: z.string().trim().optional().default(""),
  phone: z.string().trim().regex(indianPhone, "Enter a valid Indian phone number"),
  email: z.string().trim().email().optional().or(z.literal("")),
  requirement: z.string().trim().min(2),
}).superRefine((payload, context) => {
  if (payload.userType === "parent" && payload.parentName.length < 2) {
    context.addIssue({ code: z.ZodIssueCode.custom, path: ["parentName"], message: "Parent name is required" });
  }
});

router.post("/", enquiryLimit, async (req, res) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ message: "Invalid enquiry payload" });
  const payload = parsed.data.payload;
  const chatParsed = parsed.data.source === "chat" ? chatPayloadSchema.safeParse(payload) : null;
  if (chatParsed && !chatParsed.success) {
    return res.status(400).json({ message: chatParsed.error.issues[0]?.message || "Invalid chat enquiry" });
  }
  const safePayload = chatParsed?.data || payload;
  const name = payload.name
    || payload.fullName
    || [payload.firstName, payload.lastName].filter(Boolean).join(" ").trim();
  const enquiry = await Enquiry.create({
    category: parsed.data.category,
    source: parsed.data.source,
    name: name || safePayload.parentName || safePayload.studentName || "",
    email: safePayload.email || "",
    phone: safePayload.phone || "",
    ...(chatParsed ? {
      userType: safePayload.userType,
      parentName: safePayload.parentName,
      studentName: safePayload.studentName,
      studentClass: safePayload.studentClass,
      courseCategory: safePayload.courseCategory,
      courseType: safePayload.courseType,
      campus: safePayload.campus,
      requirement: safePayload.requirement,
    } : {}),
    payload: safePayload,
  });
  sendEnquiryEmail(enquiry.toObject()).catch((error) => {
    console.error("Enquiry email failed:", error);
  });

  res.status(201).json({ message: "Enquiry saved", id: enquiry._id });
});

router.get("/admin/summary", requireAdmin, async (_req, res) => {
  const [total, completed, pending, byCategory] = await Promise.all([
    Enquiry.countDocuments(),
    Enquiry.countDocuments({ status: "completed" }),
    Enquiry.countDocuments({ status: { $ne: "completed" } }),
    Enquiry.aggregate([{ $group: { _id: "$category", count: { $sum: 1 } } }]),
  ]);
  res.json({ total, completed, pending, byCategory });
});

router.get("/admin", requireAdmin, async (req, res) => {
  const { from, to, category, source, userType, status, q } = req.query;
  const filter = {};
  if (category) filter.category = category;
  if (source === "website-form") filter.source = { $ne: "chat" };
  else if (source) filter.source = source;
  if (userType) filter.userType = userType;
  if (status) filter.status = status;
  if (from || to) filter.createdAt = {};
  if (from) filter.createdAt.$gte = new Date(from);
  if (to) filter.createdAt.$lte = new Date(to);
  if (q) {
    filter.$or = [
      { name: { $regex: q, $options: "i" } },
      { email: { $regex: q, $options: "i" } },
      { phone: { $regex: q, $options: "i" } },
      { source: { $regex: q, $options: "i" } },
      { category: { $regex: q, $options: "i" } },
      { userType: { $regex: q, $options: "i" } },
      { courseCategory: { $regex: q, $options: "i" } },
      { courseType: { $regex: q, $options: "i" } },
    ];
  }
  const enquiries = await Enquiry.find(filter).sort({ createdAt: -1 }).lean();
  res.json({ enquiries });
});

router.get("/admin/export", requireAdmin, async (_req, res) => {
  const enquiries = await Enquiry.find().sort({ createdAt: -1 }).lean();
  const header = ["createdAt", "category", "source", "name", "email", "phone", "message"];
  const rows = enquiries.map((item) => [
    item.createdAt,
    item.category,
    item.source,
    item.name || "",
    item.email || "",
    item.phone || "",
    item.payload?.message || "",
  ]);
  const csv = [header, ...rows]
    .map((row) => row.map((value) => `"${String(value ?? "").replaceAll('"', '""')}"`).join(","))
    .join("\n");
  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", "attachment; filename=enquiries.csv");
  res.send(csv);
});

router.get("/admin/analytics/monthly", requireAdmin, async (_req, res) => {
  const data = await Enquiry.aggregate([
    {
      $group: {
        _id: {
          year: { $year: "$createdAt" },
          month: { $month: "$createdAt" },
        },
        total: { $sum: 1 },
        completed: {
          $sum: { $cond: [{ $eq: ["$status", "completed"] }, 1, 0] },
        },
      },
    },
    { $sort: { "_id.year": 1, "_id.month": 1 } },
  ]);
  res.json({ data });
});

router.get("/admin/analytics/daily", requireAdmin, async (_req, res) => {
  const data = await Enquiry.aggregate([
    {
      $group: {
        _id: {
          year: { $year: "$createdAt" },
          month: { $month: "$createdAt" },
          day: { $dayOfMonth: "$createdAt" },
        },
        total: { $sum: 1 },
        completed: {
          $sum: { $cond: [{ $eq: ["$status", "completed"] }, 1, 0] },
        },
      },
    },
    { $sort: { "_id.year": 1, "_id.month": 1, "_id.day": 1 } },
  ]);
  res.json({ data });
});

router.get("/admin/analytics/by-category", requireAdmin, async (_req, res) => {
  const data = await Enquiry.aggregate([
    {
      $group: {
        _id: "$category",
        total: { $sum: 1 },
        completed: { $sum: { $cond: [{ $eq: ["$status", "completed"] }, 1, 0] } },
        pending: { $sum: { $cond: [{ $ne: ["$status", "completed"] }, 1, 0] } },
      },
    },
    { $sort: { total: -1 } },
  ]);
  res.json({ data });
});

router.get("/admin/:id", requireAdmin, async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ message: "Invalid enquiry id" });
  const enquiry = await Enquiry.findById(req.params.id).lean();
  if (!enquiry) return res.status(404).json({ message: "Enquiry not found" });
  res.json({ enquiry });
});

router.patch("/admin/:id", requireAdmin, async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ message: "Invalid enquiry id" });
  const { status, notes, assignedTo, category } = req.body || {};
  const update = {};
  if (status) update.status = status;
  if (notes !== undefined) update.notes = notes;
  if (assignedTo !== undefined) update.assignedTo = assignedTo;
  if (category) update.category = category;
  const enquiry = await Enquiry.findByIdAndUpdate(req.params.id, update, { new: true }).lean();
  if (!enquiry) return res.status(404).json({ message: "Enquiry not found" });
  res.json({ enquiry });
});

router.delete("/admin/:id", requireAdmin, async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ message: "Invalid enquiry id" });
  const deleted = await Enquiry.findByIdAndDelete(req.params.id).lean();
  if (!deleted) return res.status(404).json({ message: "Enquiry not found" });
  res.json({ message: "Enquiry deleted" });
});

export default router;
