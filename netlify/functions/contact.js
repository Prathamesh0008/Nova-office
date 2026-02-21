import nodemailer from "nodemailer";

const REQUIRED_ENV_KEYS = ["SMTP_USER", "SMTP_PASSWORD", "ADMIN_EMAIL"];
const MAIL_SOURCE = "Nova Techscience";

const json = (statusCode, payload) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
});

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const buildTransport = () => {
  const user = process.env.SMTP_USER;
  const pass = String(process.env.SMTP_PASSWORD || "").replace(/\s+/g, "");
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT || 465);
  const secure =
    process.env.SMTP_SECURE != null
      ? process.env.SMTP_SECURE === "true"
      : port === 465;

  if (host) {
    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
};

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return json(405, { message: "Method not allowed." });
  }

  const missingKeys = REQUIRED_ENV_KEYS.filter((key) => !process.env[key]);
  if (missingKeys.length > 0) {
    return json(500, {
      message: `Server email config missing: ${missingKeys.join(", ")}`,
    });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { message: "Invalid JSON payload." });
  }

  const name = String(payload?.name || "").trim();
  const email = String(payload?.email || "").trim();
  const phone = String(payload?.phone || "").trim();
  const website = String(payload?.website || "").trim();
  const message = String(payload?.message || "").trim();

  if (!name || !email || !phone || !message) {
    return json(400, {
      message: "Missing required fields: name, email, phone, message.",
    });
  }

  const transporter = buildTransport();
  const subject = `New contact form message from ${name}`;
  const text = [
    `Source: ${MAIL_SOURCE}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Website: ${website || "-"}`,
    "",
    "Message:",
    message,
  ].join("\n");

const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
      .container { max-width: 600px; margin: 0 auto; padding: 20px; }
      .header { background: linear-gradient(to right, #314977, #3386BC); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
      .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 10px 10px; }
      .field { margin-bottom: 15px; }
      .label { font-weight: bold; color: #314977; }
      .value { margin-top: 5px; padding: 8px; background: white; border-radius: 5px; }
      hr { border: none; border-top: 1px solid #ddd; margin: 20px 0; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1 style="margin:0;">New Contact Form Submission</h1>
        <p style="margin:10px 0 0; opacity:0.9;">${escapeHtml(MAIL_SOURCE)}</p>
      </div>
      <div class="content">
        <div class="field">
          <div class="label">📋 From:</div>
          <div class="value">${escapeHtml(name)}</div>
        </div>
        
        <div class="field">
          <div class="label">📧 Email:</div>
          <div class="value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></div>
        </div>
        
        <div class="field">
          <div class="label">📞 Phone:</div>
          <div class="value"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></div>
        </div>
        
        ${website ? `
        <div class="field">
          <div class="label">🌐 Website:</div>
          <div class="value"><a href="${escapeHtml(website)}" target="_blank">${escapeHtml(website)}</a></div>
        </div>
        ` : ''}
        
        <hr>
        
        <div class="field">
          <div class="label">💬 Message:</div>
          <div class="value" style="white-space: pre-wrap;">${escapeHtml(message).replaceAll("\n", "<br/>")}</div>
        </div>
      </div>
    </div>
  </body>
  </html>
  `;

  try {
    await transporter.sendMail({
      from: `"Nova Techscience" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject,
      text,
      html,
    });

    return json(200, { message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact email send failed:", error);
    return json(500, {
      message: "Email send failed. Check SMTP settings and try again.",
    });
  }
}
