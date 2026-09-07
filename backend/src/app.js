import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import adminRoutes from "./routes/adminRoutes.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";

export function createApp() {
  const app = express();
  if (process.env.NODE_ENV === "production") app.set("trust proxy", 1);
  app.use(helmet());
  const allowedOrigins = new Set(
    [process.env.FRONTEND_URL, ...(process.env.NODE_ENV === "production" ? [] : ["http://localhost:5001", "http://localhost:5173"])].filter(Boolean)
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
  app.use("/api/admin", adminRoutes);
  app.use("/api/enquiries", enquiryRoutes);
  app.get("/api/health", (_req, res) => res.json({ ok: true }));
  return app;
}
