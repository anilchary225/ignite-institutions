import express from "express";
import rateLimit from "express-rate-limit";
import crypto from "crypto";
import { Admin } from "../models/Admin.js";
import { comparePassword, hashPassword, passwordRules, signAdminToken } from "../utils/security.js";
import { requireAdmin } from "../middleware/auth.js";
import { sendPasswordResetEmail } from "../services/emailService.js";

const router = express.Router();
const loginLimit = rateLimit({ windowMs: 15 * 60 * 1000, max: 5 });
const resetRequestLimit = rateLimit({ windowMs: 15 * 60 * 1000, max: 5 });
const adminCookieOptions = { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/" };

router.post("/login", loginLimit, async (req, res) => {
  const { email, password } = req.body || {};
  const admin = await Admin.findOne({ email: String(email || "").toLowerCase().trim() });
  if (!admin) return res.status(401).json({ message: "Invalid credentials" });
  const ok = await comparePassword(String(password || ""), admin.passwordHash);
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });
  const token = signAdminToken(admin);
  res.cookie("adminToken", token, adminCookieOptions);
  res.json({ mustChangePassword: admin.mustChangePassword, admin: { email: admin.email, name: admin.name } });
});

router.get("/me", requireAdmin, (req, res) => res.json({ admin: req.admin }));

router.post("/change-password", requireAdmin, async (req, res) => {
  const { currentPassword, newPassword } = req.body || {};
  if (!passwordRules.test(String(newPassword || ""))) {
    return res.status(400).json({ message: "Password must be 12+ chars with upper, lower, number, symbol" });
  }
  const admin = await Admin.findById(req.admin._id);
  const needsCurrentPassword = !admin.mustChangePassword;
  if (needsCurrentPassword) {
    const ok = await comparePassword(String(currentPassword || ""), admin.passwordHash);
    if (!ok) return res.status(401).json({ message: "Invalid credentials" });
  }
  admin.passwordHash = await hashPassword(newPassword);
  admin.mustChangePassword = false;
  admin.passwordResetTokenHash = null;
  admin.passwordResetTokenExpiresAt = null;
  await admin.save();
  res.json({ message: "Password updated" });
});

router.post("/forgot-password", resetRequestLimit, async (req, res) => {
  const { email } = req.body || {};
  const normalizedEmail = String(email || "").toLowerCase().trim();
  const admin = await Admin.findOne({ email: normalizedEmail });
  if (!admin) {
    return res.json({ message: "If the account exists, a reset link has been sent." });
  }

  const resetToken = crypto.randomBytes(32).toString("hex");
  admin.passwordResetTokenHash = crypto.createHash("sha256").update(resetToken).digest("hex");
  admin.passwordResetTokenExpiresAt = new Date(Date.now() + 60 * 60 * 1000);
  await admin.save();

  const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
  const resetUrl = `${frontendUrl}/admin/reset-password?token=${resetToken}&email=${encodeURIComponent(admin.email)}`;
  await sendPasswordResetEmail({ to: admin.email, name: admin.name, resetUrl });

  return res.json({ message: "If the account exists, a reset link has been sent." });
});

router.post("/reset-password", async (req, res) => {
  const { email, token, newPassword } = req.body || {};
  if (!passwordRules.test(String(newPassword || ""))) {
    return res.status(400).json({ message: "Password must be 12+ chars with upper, lower, number, symbol" });
  }

  const admin = await Admin.findOne({ email: String(email || "").toLowerCase().trim() });
  if (!admin || !admin.passwordResetTokenHash || !admin.passwordResetTokenExpiresAt) {
    return res.status(400).json({ message: "Invalid or expired reset token" });
  }

  const tokenHash = crypto.createHash("sha256").update(String(token || "")).digest("hex");
  if (tokenHash !== admin.passwordResetTokenHash || admin.passwordResetTokenExpiresAt < new Date()) {
    return res.status(400).json({ message: "Invalid or expired reset token" });
  }

  admin.passwordHash = await hashPassword(newPassword);
  admin.mustChangePassword = false;
  admin.passwordResetTokenHash = null;
  admin.passwordResetTokenExpiresAt = null;
  await admin.save();

  return res.json({ message: "Password reset successful" });
});

router.post("/logout", (req, res) => {
  res.clearCookie("adminToken", adminCookieOptions);
  res.json({ message: "Logged out" });
});

export default router;
