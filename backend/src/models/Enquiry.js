import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
  category: { type: String, required: true, index: true },
  source: { type: String, required: true },
  name: String,
  email: String,
  phone: String,
  userType: { type: String, enum: ["parent", "student"], index: true },
  parentName: String,
  studentName: String,
  studentClass: String,
  courseCategory: String,
  courseType: String,
  requirement: String,
  status: { type: String, default: "new", index: true },
  payload: { type: Object, required: true },
}, { timestamps: true });

export const Enquiry = mongoose.model("Enquiry", enquirySchema);
