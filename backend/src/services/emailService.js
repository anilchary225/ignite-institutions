import { createMailTransport } from "../config/mail.js";
import { fileURLToPath } from "node:url";

const BRAND = {
  name: "Ignite Institutions",
  tagline: "IIT-JEE | NEET | FOUNDATION | EAPCET ",
  primary: "#0B3D91",   // deep institutional blue
  accent: "#F5A623",    // ignite orange/gold
  bg: "#F4F6F9",
  text: "#1F2937",
  muted: "#6B7280",
  website: process.env.SITE_URL || "https://igniteacademy.co.in",
};
BRAND.logo = "cid:ignite-logo";
const logoPath = fileURLToPath(new URL("../../assets/Ignite_logo_main.png", import.meta.url));

function emailAttachments() {
  return [{
    filename: "ignite-logo.webp",
    path: logoPath,
    cid: "ignite-logo",
  }];
}

/**
 * Wraps any inner HTML content in a shared, professional email shell
 * with header, footer, and consistent brand styling.
 */
function renderEmailShell({ preheader = "", title, bodyHtml }) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
  </head>
  <body style="margin:0; padding:0; background-color:${BRAND.bg}; font-family:'Segoe UI', Arial, sans-serif; color:${BRAND.text};">
    <!-- Preheader (hidden preview text) -->
    <div style="display:none; max-height:0; overflow:hidden; opacity:0;">
      ${preheader}
    </div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.bg}; padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:600px; background:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 2px 10px rgba(0,0,0,0.06);">

            <!-- Header -->
            <tr>
              <td style="background-color:${BRAND.primary}; padding:28px 32px; text-align:center;">
                <img src="${BRAND.logo}" alt="${BRAND.name}" width="96" style="display:block; width:96px; height:auto; margin:0 auto 16px; border:0;" />
                <h1 style="margin:0; color:#ffffff; font-size:22px; letter-spacing:0.5px;">
                  ${BRAND.name}
                </h1>
                <p style="margin:6px 0 0; color:${BRAND.accent}; font-size:13px; font-weight:600; letter-spacing:0.4px; text-transform:uppercase;">
                  ${BRAND.tagline}
                </p>
              </td>
            </tr>

            <!-- Accent bar -->
            <tr>
              <td style="background-color:${BRAND.accent}; height:4px; line-height:4px; font-size:0;">&nbsp;</td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:36px 32px;">
                ${bodyHtml}
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background-color:#F9FAFB; padding:20px 32px; text-align:center; border-top:1px solid #EAECEF;">
                <p style="margin:0; font-size:12px; color:${BRAND.muted};">
                  ${BRAND.name} &middot; Hyderabad, Telangana
                </p>
                <p style="margin:6px 0 0; font-size:12px;">
                  <a href="${BRAND.website}" style="color:${BRAND.primary}; text-decoration:none;">${BRAND.website.replace(/^https?:\/\//, "")}</a>
                </p>
                <p style="margin:10px 0 0; font-size:11px; color:#9CA3AF;">
                  This is an automated message. Please do not reply directly to this email.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function renderInfoRow(label, value) {
  return `
    <tr>
      <td style="padding:8px 0; font-size:14px; color:${BRAND.muted}; width:140px; vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:8px 0; font-size:14px; color:${BRAND.text}; font-weight:600; white-space:pre-wrap;">${escapeHtml(value ?? "-")}</td>
    </tr>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatFieldLabel(key) {
  return key
    .replaceAll(/([a-z])([A-Z])/g, "$1 $2")
    .replaceAll(/[_-]+/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());
}

function formatFieldValue(value) {
  if (Array.isArray(value)) return value.join(", ");
  if (value && typeof value === "object") return JSON.stringify(value, null, 2);
  return value;
}

function formatDate(value) {
  if (!value) return "-";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return String(value);
  return d.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });
}

/**
 * Normalizes the enquiry document (Mongo doc with a nested Payload,
 * or a flat object) into a predictable set of display fields.
 */
function extractEnquiryFields(enquiry) {
  const payload = enquiry.Payload || enquiry.payload || enquiry;

  const fullName = payload.name || payload.fullName || [payload.firstName, payload.lastName]
    .filter(Boolean)
    .join(" ")
    .trim() || enquiry.name;

  const fields = {
    "Name": fullName,
    "Email": payload.email || enquiry.email,
    "Phone": payload.phone || enquiry.phone,
    "Category": enquiry.category,
    "Source": enquiry.source,
  };

  Object.entries(payload).forEach(([key, value]) => {
    if (["name", "fullName", "firstName", "lastName", "email", "phone"].includes(key)) return;
    fields[formatFieldLabel(key)] = formatFieldValue(value);
  });

  fields["Submitted On"] = formatDate(enquiry.createdAt || enquiry["Created At"]);
  return fields;
}

export async function sendEnquiryEmail(enquiry) {
  const transport = createMailTransport();
  if (!transport || !process.env.MAIL_FROM) return;

  const fields = extractEnquiryFields(enquiry);
  const payload = enquiry.Payload || enquiry.payload || enquiry;

  const rows = Object.entries(fields)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(([label, value]) => renderInfoRow(label, value))
    .join("");

  const bodyHtml = `
    <h2 style="margin:0 0 8px; font-size:18px; color:${BRAND.primary};">New Admission Enquiry</h2>
    <p style="margin:0 0 24px; font-size:14px; color:${BRAND.muted};">
      A new enquiry has been submitted through the Ignite Junior College website. Details are below.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #EAECEF;">
      ${rows}
    </table>
  `;

  const subjectStreams = Array.isArray(payload.interests) ? payload.interests[0] : payload.interests;
  const subjectLine = `New Enquiry${subjectStreams ? `: ${subjectStreams}` : ""} — ${BRAND.name}`;

  const plainText = Object.entries(fields)
    .filter(([, value]) => value !== undefined && value !== null && value !== "")
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  const html = renderEmailShell({
    title: subjectLine,
    preheader: `New enquiry from ${fields["Name"]}`,
    bodyHtml,
  });

  await transport.sendMail({
    from: `"${BRAND.name}" <${process.env.MAIL_FROM}>`,
    to: process.env.MAIL_TO || process.env.MAIL_FROM,
    subject: subjectLine,
    text: plainText,
    html,
    attachments: emailAttachments(),
  });
}

export async function sendPasswordResetEmail({ to, name, resetUrl }) {
  const transport = createMailTransport();
  if (!transport || !process.env.MAIL_FROM) return false;

  const bodyHtml = `
    <h2 style="margin:0 0 8px; font-size:18px; color:${BRAND.primary};">Reset Your Admin Password</h2>
    <p style="margin:0 0 20px; font-size:14px; line-height:1.6; color:${BRAND.text};">
      Hello ${name || "Admin"},<br/><br/>
      We received a request to reset the password for your ${BRAND.name} admin account.
      Click the button below to choose a new password. This link will expire shortly for your security.
    </p>

    <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
      <tr>
        <td align="center" style="border-radius:6px; background-color:${BRAND.primary};">
          <a href="${resetUrl}"
             style="display:inline-block; padding:12px 28px; font-size:14px; font-weight:600; color:#ffffff; text-decoration:none; border-radius:6px;">
            Reset Password
          </a>
        </td>
      </tr>
    </table>

    <p style="margin:0 0 8px; font-size:13px; color:${BRAND.muted};">
      Or copy and paste this link into your browser:
    </p>
    <p style="margin:0 0 24px; font-size:13px; word-break:break-all;">
      <a href="${resetUrl}" style="color:${BRAND.primary};">${resetUrl}</a>
    </p>

    <p style="margin:0; font-size:13px; color:${BRAND.muted}; line-height:1.6;">
      If you did not request this password reset, you can safely ignore this email —
      your password will remain unchanged.
    </p>
  `;

  const html = renderEmailShell({
    title: "Reset your admin password",
    preheader: "Reset your Ignite Junior College admin password",
    bodyHtml,
  });

  await transport.sendMail({
    from: `"${BRAND.name}" <${process.env.MAIL_FROM}>`,
    to,
    subject: `Reset Your Admin Password — ${BRAND.name}`,
    text: `Hello ${name || "Admin"},\n\nUse this link to reset your password:\n${resetUrl}\n\nIf you did not request this, ignore this email.`,
    html,
    attachments: emailAttachments(),
  });

  return true;
}
