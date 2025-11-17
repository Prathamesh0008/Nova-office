
import React from "react";
import { FiSend } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link, useInRouterContext } from "react-router-dom";
import logo from "../assets/White logo.png"; // ✅ correct import from assets

// SmartLink: works with or without BrowserRouter
function SmartLink({ to, children, ...props }) {
  const inRouter =
    typeof useInRouterContext === "function" ? useInRouterContext() : false;
  const isExternal = /^https?:\/\//i.test(to);
  if (!inRouter || isExternal) return <a href={to} {...props}>{children}</a>;
  return <Link to={to} {...props}>{children}</Link>;
}

export default function Footer() {
  const locations = ["Mumbai", "Navi Mumbai", "Delhi", "Bangalore", "Hyderabad"];

  return (
    <footer className="text-white">
      {/* Main footer */}
      <div className="bg-gradient-to-r from-[#314977] to-[#3386BC]">
        <div className="h-1 w-full bg-white/20" />

        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-10 lg:grid-cols-4">
            {/* Col 1 — Logo + description */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <a href="/" className="inline-flex items-center">
                  <img
                    src={logo}
                    alt="Nova Logo"
                    className="h-12  object-contain"
                  />
                </a>
              </div>
              <div className="text-sm/6 text-white/90 space-y-2">
                <p>
                  Because advertising and marketing is an art, each new
                  problem or challenge should begin with a blank canvas and
                  an open mind.
                </p>
                <p>
                  Borrowings of other people's mediocrities. The what: trends
                  are — a search for something unique.
                </p>
              </div>
            </div>

            {/* Col 2 — BASIC LINKS */}
            <div>
              <h3 className="text-sm font-semibold tracking-wide">BASIC LINKS</h3>
              <ul className="mt-4 grid gap-3 text-white">
                <li><SmartLink to="/" className="inline-block text-base hover:underline underline-offset-4">Home</SmartLink></li>
                <li><SmartLink to="/about-us" className="inline-block text-base hover:underline underline-offset-4">About</SmartLink></li>
                <li><SmartLink to="/services" className="inline-block text-base hover:underline underline-offset-4">Services</SmartLink></li>
                <li><SmartLink to="/portfolio" className="inline-block text-base hover:underline underline-offset-4">Portfolio</SmartLink></li>
                <li><SmartLink to="/blogs" className="inline-block text-base hover:underline underline-offset-4">Blog</SmartLink></li>
                <li><SmartLink to="/contact" className="inline-block text-base hover:underline underline-offset-4">Contact</SmartLink></li>
              </ul>
            </div>

            {/* Col 3 — CONTACT DETAILS */}
            <div>
              <h3 className="text-sm font-semibold tracking-wide">CONTACT DETAILS</h3>
              <div className="mt-4 grid gap-2 text-white">
                <div className="text-xs/6 text-white/80">Mobile:</div>
                <a href="tel:+4484848585" className="text-base hover:underline underline-offset-4">+44 84 84 85 85</a>
                <a href="tel:+9494848688" className="text-base hover:underline underline-offset-4">+94 94 84 86 88</a>

                <div className="mt-2 text-xs/6 text-white/80">Email:</div>
                <a href="mailto:domain@support.com" className="text-base hover:underline underline-offset-4">domain@support.com</a>

                <div className="mt-2 text-xs/6 text-white/80">Address:</div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base hover:underline underline-offset-4"
                >
                  10/2, Middle Street, New York
                </a>
              </div>
            </div>

            {/* Col 4 — NEWSLETTER */}
            <div>
              <h3 className="text-sm font-semibold tracking-wide">NEWSLETTER</h3>
              <p className="mt-4 text-sm text-white/90">
                A newsletter is a printed report containing news and updates
                about the activities of your business.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex gap-2">
                <label htmlFor="newsletter-email" className="sr-only">
                  Your Email Address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-white/25 bg-white/10 px-3 py-2 placeholder-white/70 text-white outline-none focus:border-white focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="grid h-11 w-11 place-items-center rounded-lg bg-white text-[#314977] ring-1 ring-white/60 hover:bg-white/90"
                  aria-label="Subscribe"
                >
                  <FiSend className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Locations strip */}
      <div className="bg-white text-[#314977]">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8">
            {locations.map((city) => (
              <div key={city} className="inline-flex items-center gap-2 text-sm font-medium">
                <FaMapMarkerAlt className="h-4 w-4" />
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-slate-50 text-slate-700">
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full bg-slate-200" />
          <p className="flex items-center justify-center gap-2 py-4 text-sm">
            <FaRegCopyright className="h-4 w-4" />
            All Rights Reserved By <strong>Nova</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
