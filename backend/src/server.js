import dotenv from "dotenv";
dotenv.config();

import { connectDatabase } from "./config/db.js";
import { createApp } from "./app.js";
import { Admin } from "./models/Admin.js";
import { hashPassword } from "./utils/security.js";

const port = Number(process.env.PORT || 5000);
await connectDatabase(process.env.MONGODB_URI);

const existingAdmin = await Admin.findOne({ email: String(process.env.ADMIN_EMAIL || "").toLowerCase() });
if (!existingAdmin && process.env.ADMIN_EMAIL && process.env.ADMIN_INITIAL_PASSWORD) {
  await Admin.create({
    email: process.env.ADMIN_EMAIL,
    name: process.env.ADMIN_INITIAL_NAME || "Admin",
    passwordHash: await hashPassword(process.env.ADMIN_INITIAL_PASSWORD),
    mustChangePassword: true,
  });
}

createApp().listen(port, () => console.log(`Backend listening on ${port}`));
