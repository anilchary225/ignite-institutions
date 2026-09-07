import nodemailer from "nodemailer";

export function createMailTransport() {
  const { MAIL_HOST, MAIL_PORT, MAIL_SECURE, MAIL_USER, MAIL_PASS } = process.env;
  if (!MAIL_HOST || !MAIL_PORT) return null;

  return nodemailer.createTransport({
    host: MAIL_HOST,
    port: Number(MAIL_PORT),
    secure: String(MAIL_SECURE) === "true",
    auth: MAIL_USER ? { user: MAIL_USER, pass: MAIL_PASS } : undefined,
  });
}
