import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import adminRoutes from "./routes/adminRoutes.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import { isDatabaseReady } from "./config/db.js";

export function createApp() {
  const app = express();
  if (process.env.NODE_ENV === "production") app.set("trust proxy", 1);
  app.use(helmet());
  const allowedOrigins = new Set(
    [
      ...String(process.env.FRONTEND_URLS || process.env.FRONTEND_URL || "")
        .split(",")
        .map((url) => url.trim())
        .filter(Boolean),
      ...(process.env.NODE_ENV === "production"
        ? []
        : ["http://localhost:5000", "http://localhost:5001", "http://localhost:5173"]),
    ]
  );
  app.use(
    cors({
      origin(origin, callback) {
        if (!origin || allowedOrigins.has(origin)) return callback(null, true);
        return callback(new Error(`CORS blocked for origin ${origin}`));
      },
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
      optionsSuccessStatus: 204,
    })
  );
  app.use(express.json({ limit: "1mb" }));
  app.use(cookieParser());

  // Return a useful response if MongoDB disconnects after the service has
  // started. Without this, Mongoose can leave admin requests pending.
  app.use("/api", (req, res, next) => {
    if (req.path === "/health" || isDatabaseReady()) return next();
    return res.status(503).json({ message: "Service is temporarily unavailable. Please try again shortly." });
  });
  app.use("/api/admin", adminRoutes);
  app.use("/api/enquiries", enquiryRoutes);
  app.get("/api/health", (_req, res) => res.status(isDatabaseReady() ? 200 : 503).json({ ok: isDatabaseReady() }));
  app.use((error, _req, res, _next) => {
    console.error("Unhandled API error:", error);
    if (res.headersSent) return;
    res.status(500).json({ message: "An unexpected server error occurred." });
  });
  return app;
}
