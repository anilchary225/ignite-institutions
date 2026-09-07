import { Admin } from "../models/Admin.js";
import { verifyToken } from "../utils/security.js";

export async function requireAdmin(req, res, next) {
  const token = req.cookies?.adminToken || req.headers.authorization?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const payload = verifyToken(token);
    const admin = await Admin.findById(payload.sub).lean();
    if (!admin) return res.status(401).json({ message: "Unauthorized" });
    req.admin = admin;
    next();
  } catch {
    res.status(401).json({ message: "Unauthorized" });
  }
}
