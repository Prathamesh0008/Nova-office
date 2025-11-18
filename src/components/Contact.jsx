
import React, { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // TODO: hook to EmailJS / Formspree / API route
    await new Promise((r) => setTimeout(r, 900));

    setLoading(false);
    setSent(true);
    e.currentTarget.reset();
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
            There's no designer like nature – just look at a branch or a leaf.
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
                href="mailto:contact@address.com"
                className="mt-3 inline-block font-medium underline underline-offset-4"
              >
                contact@address.com
              </a>
            </div>

            {/* Address */}
            <div className="rounded-2xl bg-white/10 p-6 text-white ring-1 ring-white/15 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/20">
                  {/* map pin icon */}
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Address</h3>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block font-medium underline underline-offset-4"
              >
                New Street, Babinham, NY
              </a>
            </div>
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
                Fill out the form and we’ll get back within 1–2 business days.
              </p>

              {sent && (
                <div className="mt-4 rounded-lg bg-green-50 p-3 text-green-700 ring-1 ring-green-200">
                  Thank you! Your message has been sent.
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
                  href="mailto:contact@address.com"
                  className="text-sm font-medium text-[#314977] underline underline-offset-4"
                >
                  or email contact@address.com
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
