import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import nodemailer from "nodemailer";

const MAIL_SOURCE = "Nova Techscience";

const json = (res, statusCode, payload) => {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(payload));
};

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const readJsonBody = async (req) => {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  const body = Buffer.concat(chunks).toString("utf8");
  if (!body) return {};
  return JSON.parse(body);
};

const buildTransport = (env) => {
  const smtpUser = String(env.SMTP_USER || "").trim();
  const smtpPassword = String(env.SMTP_PASSWORD || "").replace(/\s+/g, "");
  const smtpHost = String(env.SMTP_HOST || "").trim();
  const smtpPort = Number(env.SMTP_PORT || 465);
  const smtpSecure =
    env.SMTP_SECURE != null ? env.SMTP_SECURE === "true" : smtpPort === 465;

  if (smtpHost) {
    return nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: { user: smtpUser, pass: smtpPassword },
    });
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user: smtpUser, pass: smtpPassword },
  });
};

const localContactApiPlugin = () => ({
  name: "local-contact-api",
  configureServer(server) {
    server.middlewares.use("/api/contact", async (req, res) => {
      if (req.method !== "POST") {
        return json(res, 405, { message: "Method not allowed." });
      }

      const env = loadEnv(server.config.mode, process.cwd(), "");
      const smtpUser = String(env.SMTP_USER || "").trim();
      const smtpPassword = String(env.SMTP_PASSWORD || "").replace(/\s+/g, "");
      const adminEmails = String(env.ADMIN_EMAIL || "")
        .split(/[;,]/)
        .map((v) => v.trim())
        .filter(Boolean);

      const missingKeys = [];
      if (!smtpUser) missingKeys.push("SMTP_USER");
      if (!smtpPassword) missingKeys.push("SMTP_PASSWORD");
      if (adminEmails.length === 0) missingKeys.push("ADMIN_EMAIL");

      if (missingKeys.length > 0) {
        return json(res, 500, {
          message: `Server email config missing: ${missingKeys.join(", ")}`,
        });
      }

      let payload;
      try {
        payload = await readJsonBody(req);
      } catch {
        return json(res, 400, { message: "Invalid JSON payload." });
      }

      const name = String(payload?.name || "").trim();
      const email = String(payload?.email || "").trim();
      const phone = String(payload?.phone || "").trim();
      const website = String(payload?.website || "").trim();
      const message = String(payload?.message || "").trim();

      if (!name || !email || !phone || !message) {
        return json(res, 400, {
          message: "Missing required fields: name, email, phone, message.",
        });
      }

      const transporter = buildTransport(env);
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
        <h2>New Contact Form Submission</h2>
        <p><strong>Source:</strong> ${escapeHtml(MAIL_SOURCE)}</p>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Website:</strong> ${escapeHtml(website || "-")}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message).replaceAll("\n", "<br/>")}</p>
      `;

      try {
        const info = await transporter.sendMail({
          from: `"Nova Techscience" <${smtpUser}>`,
          to: adminEmails,
          replyTo: email,
          subject,
          text,
          html,
          headers: { "X-Mail-Source": MAIL_SOURCE },
        });

        const rejected = Array.isArray(info.rejected) ? info.rejected : [];
        const accepted = Array.isArray(info.accepted) ? info.accepted : [];

        if (accepted.length === 0 || rejected.length === adminEmails.length) {
          return json(res, 502, {
            message: "Email was not accepted by SMTP provider.",
          });
        }

        return json(res, 200, { message: "Message sent successfully." });
      } catch (error) {
        console.error("Local contact send failed:", error);
        return json(res, 500, {
          message: "Email send failed. Check SMTP settings and try again.",
        });
      }
    });
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), localContactApiPlugin()],
});
