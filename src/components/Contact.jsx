import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "novatechscience@gmail.com";
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() || "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() || "";
const EMAILJS_AUTOREPLY_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID?.trim() || "";
const EMAILJS_AUTOREPLY_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_AUTOREPLY_SERVICE_ID?.trim() || EMAILJS_SERVICE_ID;
const PHONE_ALLOWED_CHARS_REGEX = /^\+?[0-9\s\-()]+$/;
const COMPANY_NAME = "Nova Techscience";

// Address components
const ADDRESS_LINE1 = "Office no-2, 1st Floor, Sector-4, Palm Beach Rd";
const ADDRESS_LINE2 = "near PALM BEACH RESIDENCY, Nerul West";
const ADDRESS_CITY = "Maharashtra 400706 Nerul";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setSent(false);
    setErrorMessage("");
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const name = String(payload.name || "").trim();
    const email = String(payload.email || "").trim();
    const phone = String(payload.phone || "").trim();
    const website = String(payload.website || "").trim();
    const message = String(payload.message || "").trim();

    try {
      const phoneDigits = phone.replace(/\D/g, "");
      const isPhoneFormatValid =
        PHONE_ALLOWED_CHARS_REGEX.test(phone) &&
        phoneDigits.length >= 10 &&
        phoneDigits.length <= 15;

      if (!isPhoneFormatValid) {
        throw new Error(
          "Please enter a valid contact number (10-15 digits, numbers with optional +, space, -, or parentheses)."
        );
      }

      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error(
          "Email service is not configured. Set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY."
        );
      }

      const normalizedSubmitterEmail = email.toLowerCase();
      const normalizedContactEmail = CONTACT_EMAIL.toLowerCase();
      const shouldSendAutoReply =
        Boolean(EMAILJS_AUTOREPLY_TEMPLATE_ID) &&
        normalizedSubmitterEmail !== normalizedContactEmail;

      const sharedTemplateParams = {
        name,
        user_name: name,
        from_name: name,
        to_name: name,
        email,
        user_email: email,
        from_email: email,
        reply_to: email,
        phone,
        website,
        message,
        submitted_message: message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          ...sharedTemplateParams,
          to_email: CONTACT_EMAIL,
          contact_email: CONTACT_EMAIL,
          admin_email: CONTACT_EMAIL,
          company_email: CONTACT_EMAIL,
          company_name: COMPANY_NAME,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      if (shouldSendAutoReply) {
        await emailjs.send(
          EMAILJS_AUTOREPLY_SERVICE_ID,
          EMAILJS_AUTOREPLY_TEMPLATE_ID,
          {
            ...sharedTemplateParams,
            to_email: email,
            from_name: COMPANY_NAME,
            from_email: CONTACT_EMAIL,
            reply_to: CONTACT_EMAIL,
            company_email: CONTACT_EMAIL,
            company_name: COMPANY_NAME,
          },
          {
            publicKey: EMAILJS_PUBLIC_KEY,
          }
        );
      }

      setSent(true);
      setSuccessMessage(
        shouldSendAutoReply
          ? "Thank you! Your message has been sent. We have also emailed a confirmation to you."
          : "Thank you! Your message has been sent."
      );
      form.reset();
    } catch (error) {
      setErrorMessage(
        error?.message ||
          "We could not send your message. Please try again or email us directly."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#314977] to-[#3386BC]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header - Reduced spacing */}
        <header className="text-center lg:text-left mb-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Send Us A Message
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-white/80 mx-auto lg:mx-0">
            There's design, and there's art. Good design is total harmony.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left: contact info - More compact */}
          <aside className="space-y-4">
            {/* Email */}
            <div className="rounded-xl bg-white/10 p-4 text-white ring-1 ring-white/15 backdrop-blur">
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/20">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20 4H4a2 2 0 00-2 2v.4l10 6.25L22 6.4V6a2 2 0 00-2-2zm0 4.15l-8 5-8-5V18a2 2 0 002 2h12a2 2 0 002-2V8.15z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold">Email</h3>
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-2 inline-block text-sm font-medium underline underline-offset-4 break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            {/* Address - More compact */}
            <div className="rounded-xl bg-white/10 p-4 text-white ring-1 ring-white/15 backdrop-blur">
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/20">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold">Office</h3>
              </div>
              <address className="mt-2 not-italic text-sm">
                <p>{ADDRESS_LINE1}</p>
                <p>{ADDRESS_LINE2}</p>
                <p>{ADDRESS_CITY}</p>
                <a
                  href="https://maps.google.com/?q=Office+no-2+1st+Floor+Sector-4+Palm+Beach+Rd+Nerul+West+Maharashtra+400706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-xs underline underline-offset-4 hover:text-white/80"
                >
                  View on Maps →
                </a>
              </address>
            </div>
          </aside>

          {/* Right: form - More compact */}
          <section className="lg:col-span-2">
            <form
              onSubmit={onSubmit}
              className="rounded-xl bg-white p-5 shadow-lg ring-1 ring-black/5"
            >
              <h2 className="text-xl font-bold text-[#314977]">Send Message</h2>
              <p className="mt-0.5 text-xs text-slate-600">
                We'll get back within 1-2 business days.
              </p>

              {(sent || errorMessage) && (
                <div className={`mt-3 rounded-lg p-2 text-sm ${
                  sent 
                    ? "bg-green-50 text-green-700 ring-1 ring-green-200" 
                    : "bg-red-50 text-red-700 ring-1 ring-red-200"
                }`}>
                  {sent ? successMessage : errorMessage}
                </div>
              )}

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-xs font-medium text-slate-700">
                    Name*
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Full name"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm focus:border-[#3386BC] focus:outline-none focus:ring-1 focus:ring-[#3386BC]/30"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs font-medium text-slate-700">
                    Email*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm focus:border-[#3386BC] focus:outline-none focus:ring-1 focus:ring-[#3386BC]/30"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="text-xs font-medium text-slate-700">
                    Website
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    placeholder="Your website"
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm focus:border-[#3386BC] focus:outline-none focus:ring-1 focus:ring-[#3386BC]/30"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-xs font-medium text-slate-700">
                    Phone*
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    inputMode="tel"
                    autoComplete="tel"
                    pattern="^\+?[0-9\s\-()]+$"
                    minLength={10}
                    maxLength={20}
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm focus:border-[#3386BC] focus:outline-none focus:ring-1 focus:ring-[#3386BC]/30"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-xs font-medium text-slate-700">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Your message"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm focus:border-[#3386BC] focus:outline-none focus:ring-1 focus:ring-[#3386BC]/30"
                  ></textarea>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-lg bg-[#314977] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#2b3f6a] focus:outline-none focus:ring-2 focus:ring-[#3386BC]/40 disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-xs font-medium text-[#314977] underline underline-offset-4"
                >
                  or email us
                </a>
              </div>
            </form>
          </section>
        </div>

        {/* Map - Compact height */}
        <div className="mt-6 overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5 bg-white h-48">
          <iframe
            title="Google Map - Nerul Office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6540736989335!2d73.015271!3d19.035283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3f3e3f3e3f3%3A0x3e3f3e3f3e3f3e3f!2sNerul%2C%20Navi%20Mumbai%2C%20Maharashtra%20400706!5e0!3m2!1sen!2sin!4v1616161616161!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}