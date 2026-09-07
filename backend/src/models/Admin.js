import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  name: { type: String, required: true, trim: true },
  passwordHash: { type: String, required: true },
  mustChangePassword: { type: Boolean, default: true },
  passwordResetTokenHash: { type: String, default: null },
  passwordResetTokenExpiresAt: { type: Date, default: null },
}, { timestamps: true });

export const Admin = mongoose.model("Admin", adminSchema);
