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
    <div className="min-h-dvh bg-gradient-to-r from-[#314977] to-[#3386BC]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header (content from ContactUs.js) */}
        <header className="text-white">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Send Us A Message Now
          </h1>
          <p className="mt-3 max-w-2xl text-white/90">
            There's design, and there's art. Good design is total harmony.
            There's no designer like nature - just look at a branch or a leaf.
          </p>
        </header>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Left: contact info boxes (content from ContactUs.js) */}
          <aside className="space-y-6">
            {/* Phone */}
            {/* <div className="rounded-2xl bg-white/10 p-6 text-white ring-1 ring-white/15 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/20"> */}
            {/* phone icon */}
            {/* <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l1.82-1.82a1 1 0 011.02-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C11.4 22 2 12.6 2 1a1 1 0 011-1h3.11a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.02l-1.82 1.82z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Call Us</h3>
              </div>
              <a
                href="tel:+880176000000"
                className="mt-3 inline-block font-medium underline underline-offset-4"
              >
                +8801760-00000
              </a>
            </div> */}

            {/* Email */}
            <div className="rounded-2xl bg-white/10 p-6 text-white ring-1 ring-white/15 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/20">
                  {/* envelope icon */}
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20 4H4a2 2 0 00-2 2v.4l10 6.25L22 6.4V6a2 2 0 00-2-2zm0 4.15l-8 5-8-5V18a2 2 0 002 2h12a2 2 0 002-2V8.15z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Email</h3>
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-3 inline-block font-medium underline underline-offset-4"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            {/* Address */}
          
          </aside>

          {/* Right: form (fields & placeholders from ContactUs.js) */}
          <section className="lg:col-span-2">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5"
            >
              <h2 className="text-2xl font-bold text-[#314977]">
                Send Message
              </h2>
              <p className="mt-1 text-slate-600">
                Fill out the form and we'll get back within 1-2 business days.
              </p>

              {sent && (
                <div className="mt-4 rounded-lg bg-green-50 p-3 text-green-700 ring-1 ring-green-200">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="mt-4 rounded-lg bg-red-50 p-3 text-red-700 ring-1 ring-red-200">
                  {errorMessage}
                </div>
              )}

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-slate-700"
                  >
                    Your Name*
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-[#3386BC] focus:outline-none focus:ring-2 focus:ring-[#3386BC]/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700"
                  >
                    Your E-Mail*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-[#3386BC] focus:outline-none focus:ring-2 focus:ring-[#3386BC]/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="website"
                    className="text-sm font-medium text-slate-700"
                  >
                    Website
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    placeholder="Enter your subject"
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-[#3386BC] focus:outline-none focus:ring-2 focus:ring-[#3386BC]/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-slate-700"
                  >
                    Contact No*
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    inputMode="tel"
                    autoComplete="tel"
                    pattern="^\+?[0-9\s\-()]+$"
                    minLength={10}
                    maxLength={20}
                    title="Enter a valid phone number using 10-15 digits (you can include +, spaces, dashes, or parentheses)."
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-[#3386BC] focus:outline-none focus:ring-2 focus:ring-[#3386BC]/30"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-700"
                  >
                    Your Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Enter your message"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-[#3386BC] focus:outline-none focus:ring-2 focus:ring-[#3386BC]/30"
                  ></textarea>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-lg bg-[#314977] px-5 py-2.5 font-semibold text-white shadow-sm hover:bg-[#2b3f6a] focus:outline-none focus:ring-2 focus:ring-[#3386BC]/40 disabled:opacity-70"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm font-medium text-[#314977] underline underline-offset-4"
                >
                  or email {CONTACT_EMAIL}
                </a>
              </div>
            </form>
          </section>
        </div>

        {/* Map (from ContactUs.js) */}
        {/* <div className="mt-12 overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 bg-white">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7074960125717!2d-74.0060150845937!3d40.71277577933002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316d21c451%3A0x1a68d6760c4db07f!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div> */}
      </div>
    </div>
  );
}
