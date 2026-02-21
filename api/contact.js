import nodemailer from "nodemailer";

const MAIL_SOURCE = "Nova Techscience";

const escapeHtml = (value = "") =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const getConfig = () => {
  const smtpUser = String(process.env.SMTP_USER || "").trim();
  const smtpPassword = String(process.env.SMTP_PASSWORD || "").replace(
    /\s+/g,
    ""
  );
  const adminEmails = String(process.env.ADMIN_EMAIL || "")
    .split(/[;,]/)
    .map((v) => v.trim())
    .filter(Boolean);

  const smtpHost = String(process.env.SMTP_HOST || "").trim();
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpSecure =
    process.env.SMTP_SECURE != null
      ? process.env.SMTP_SECURE === "true"
      : smtpPort === 465;

  return {
    smtpUser,
    smtpPassword,
    adminEmails,
    smtpHost,
    smtpPort,
    smtpSecure,
  };
};

const buildTransport = (config) => {
  if (config.smtpHost) {
    return nodemailer.createTransport({
      host: config.smtpHost,
      port: config.smtpPort,
      secure: config.smtpSecure,
      auth: {
        user: config.smtpUser,
        pass: config.smtpPassword,
      },
    });
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.smtpUser,
      pass: config.smtpPassword,
    },
  });
};

const json = (res, status, payload) => {
  res.status(status).setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(payload));
};

const parsePayload = (reqBody) => {
  if (!reqBody) return {};
  if (typeof reqBody === "string") {
    try {
      return JSON.parse(reqBody);
    } catch {
      return null;
    }
  }
  if (typeof reqBody === "object") return reqBody;
  return null;
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return json(res, 405, { message: "Method not allowed." });
  }

  const config = getConfig();
  const missingKeys = [];

  if (!config.smtpUser) missingKeys.push("SMTP_USER");
  if (!config.smtpPassword) missingKeys.push("SMTP_PASSWORD");
  if (config.adminEmails.length === 0) missingKeys.push("ADMIN_EMAIL");

  if (missingKeys.length > 0) {
    return json(res, 500, {
      message: `Server email config missing: ${missingKeys.join(", ")}`,
    });
  }

  const payload = parsePayload(req.body);
  if (payload == null) {
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

  const transporter = buildTransport(config);
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
        <meta charset="utf-8" />
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(to right, #314977, #3386BC); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #314977; }
          .value { margin-top: 5px; padding: 8px; background: white; border-radius: 5px; }
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
              <div class="label">Name</div>
              <div class="value">${escapeHtml(name)}</div>
            </div>
            <div class="field">
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></div>
            </div>
            <div class="field">
              <div class="label">Phone</div>
              <div class="value"><a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a></div>
            </div>
            <div class="field">
              <div class="label">Website</div>
              <div class="value">${escapeHtml(website || "-")}</div>
            </div>
            <div class="field">
              <div class="label">Message</div>
              <div class="value" style="white-space: pre-wrap;">${escapeHtml(message).replaceAll("\n", "<br/>")}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const info = await transporter.sendMail({
      from: `"Nova Techscience" <${config.smtpUser}>`,
      to: config.adminEmails,
      replyTo: email,
      subject,
      text,
      html,
      headers: {
        "X-Mail-Source": MAIL_SOURCE,
      },
    });

    const rejected = Array.isArray(info.rejected) ? info.rejected : [];
    const accepted = Array.isArray(info.accepted) ? info.accepted : [];

    if (accepted.length === 0 || rejected.length === config.adminEmails.length) {
      console.error("Contact email rejected by SMTP provider", {
        rejected,
        accepted,
        response: info.response,
      });
      return json(res, 502, {
        message: "Email was not accepted by SMTP provider.",
      });
    }

    console.log("Contact email accepted", {
      accepted,
      rejected,
      messageId: info.messageId,
      response: info.response,
    });

    return json(res, 200, { message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact email send failed:", error);
    return json(res, 500, {
      message: "Email send failed. Check SMTP settings and try again.",
    });
  }
}
