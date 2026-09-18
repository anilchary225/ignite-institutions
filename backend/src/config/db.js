import mongoose from "mongoose";

export async function connectDatabase(uri) {
  if (!uri) throw new Error("MONGODB_URI is required");
  await mongoose.connect(uri, {
    // Do not leave authentication and dashboard queries waiting forever when
    // the database service is unreachable or loses its connection.
    connectTimeoutMS: 10_000,
    serverSelectionTimeoutMS: 10_000,
    socketTimeoutMS: 15_000,
    bufferCommands: false,
  });
  console.log("Connected to database");
}

export function isDatabaseReady() {
  return mongoose.connection.readyState === 1;
}
