// import React from "react";

// const year = new Date().getFullYear();

// const cols = [
//   {
//     title: "",
//     links: [
//       { label: "Investors", href: "/investors" },
//       { label: "Media", href: "/media" },
//       { label: "Careers", href: "/careers" },
//       { label: "Partners", href: "/partners" },
//     ],
//   },
//   {
//     title: "",
//     links: [
//       { label: "PfizerForAll", href: "/forall" },
//       { label: "Healthcare Professionals", href: "/hcp" },
//       { label: "Grant Seekers", href: "/grants" },
//       { label: "Business to Business", href: "/b2b" },
//     ],
//   },
//   {
//     title: "",
//     links: [
//       { label: "Privacy Statement", href: "/privacy" },
//       { label: "Accessibility Statement", href: "/accessibility" },
//       { label: "Terms of Use", href: "/terms" },
//       { label: "Contact Us", href: "/contact" },
//     ],
//   },
// ];

// const Social = ({ href, label, path }) => (
//   <a
//     href={href}
//     aria-label={label}
//     className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-[#fff] text-[#fff] hover:bg-white hover:text-[#314977] transition"
//   >
//     <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
//       <path d={path} />
//     </svg>
//   </a>
// );

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-r from-[#314977] to-[#3386BC] text-white">
//       {/* Top: logo + link columns */}
//       <div className="mx-auto max-w-7xl px-4 pt-10 pb-8 sm:px-6 lg:px-8">
//         <div className="grid gap-8 md:grid-cols-4">
//           {/* Logo */}
//           <a href="/" className="flex items-center gap-3">
//             <span className="inline-flex h-10 w-10 items-center justify-center rounded-md ring-1 ring-white text-white">
//               <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
//                 <path fill="currentColor" d="M10 2h4v20h-4zM2 10h20v4H2z" />
//               </svg>
//             </span>
//             <span className="text-xl font-semibold text-white">Your Pharma</span>
//           </a>

//           {/* Link columns */}
//           {cols.map((col, i) => (
//             <nav key={i} aria-label={`Footer column ${i + 1}`}>
//               <ul className="space-y-4">
//                 {col.links.map((l) => (
//                   <li key={l.label}>
//                     <a
//                       href={l.href}
//                       className="text-lg font-medium leading-6 text-white hover:underline underline-offset-4"
//                     >
//                       {l.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </nav>
//           ))}
//         </div>

//         {/* Divider line */}
//         <div className="mt-8 h-px w-full bg-white/40" />
//       </div>

//       {/* Bottom: locale + copyright + disclaimer + socials */}
//       <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
//         <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
//           {/* Left block */}
//           <div className="space-y-3">
//             <div className="flex items-center gap-3">
//               <span className="inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-white text-white">
//                 <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
//                   <path d="M12 2a10 10 0 100 20 10 10 0 000-20Zm8 10a7.96 7.96 0 01-1.53 4.64A15.8 15.8 0 0015 12h5Zm-2.03-5.64A13.8 13.8 0 0015 10h5a7.96 7.96 0 00-2.03-3.64ZM9 12c0-1.56.22-3.05.62-4.36A13.8 13.8 0 006 12h3Zm0 0H6a13.8 13.8 0 003.62 4.36A12.9 12.9 0 019 12Zm6 0c0 1.56-.22 3.05-.62 4.36A13.8 13.8 0 0018 12h-3Zm-3 8a12.9 12.9 0 01-2.38-4.36C9.22 14.95 9 13.56 9 12s.22-2.95.62-4.36A12.9 12.9 0 0112 4c1.02 0 1.99.3 2.88.82A15.8 15.8 0 0015 12c0 2.81.72 5.42 1.88 7.18A6.97 6.97 0 0112 20Z" />
//                 </svg>
//               </span>
//               <a href="/location" className="text-sm font-medium text-white hover:underline">
//                 United States
//               </a>
//               <span className="text-white/70">•</span>
//               <span className="text-sm text-white/70">© {year} Your Pharma Inc. All rights reserved</span>
//             </div>

//             <p className="max-w-3xl text-sm text-white/70">
//               This information—including product information—is intended only for residents of the United States.
//             </p>
//             <p className="max-w-3xl text-sm text-white/70">
//               The products discussed herein may have different labeling in different countries.
//             </p>
//           </div>

//           {/* Socials */}
//           <div className="flex items-center gap-3">
//             <Social
//               href="https://x.com"
//               label="X"
//               path="M18.9 2H22l-8 9.2L22.7 22H16l-5-6.3L5 22H2l8.7-9.9L2.6 2H9l4.6 5.8L18.9 2z"
//             />
//             <Social
//               href="https://facebook.com"
//               label="Facebook"
//               path="M15 3h-3a5 5 0 00-5 5v3H4v4h3v7h4v-7h3l1-4h-4V8a1 1 0 011-1h3V3z"
//             />
//             <Social
//               href="https://linkedin.com"
//               label="LinkedIn"
//               path="M4.98 3.5A2.5 2.5 0 115 8.5a2.5 2.5 0 01-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.65 4.77 6.08V21H19v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H11V9z"
//             />
//             <Social
//               href="https://instagram.com"
//               label="Instagram"
//               path="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.6.6.3 1 .7 1.5 1.2.5.5.9.9 1.2 1.5.3.5.5 1.2.6 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.4-.3.6-.7 1-1.2 1.5-.5.5-.9.9-1.5 1.2-.5.3-1.2.5-2.4.6-1.3.1-1.7.1-4.9.1s-3.4 0-4.7-.1c-1-.1-1.5-.2-1.9-.4-.5-.2-.8-.4-1.1-.8-.3-.3-.6-.6-.8-1.1-.2-.4-.3-.9-.4-1.9-.1-1.3-.1-1.6-.1-4.7s0-3.4.1-4.7c.1-1 .2-1.5.4-1.9.2-.5.4-.8.8-1.1.3-.3.6-.6 1.1-.8.4-.2.9-.3 1.9-.4 1.3-.1 1.6-.1 4.7-.1zm0 5a5 5 0 100 10 5 5 0 000-10zm6.2-3a1.3 1.3 0 11-2.6 0 1.3 1.3 0 012.6 0z"
//             />
//             <Social
//               href="https://youtube.com"
//               label="YouTube"
//               path="M23.5 6.2a3 3 0 00-2.1-2.2C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.5A3 3 0 00.5 6.2 31.2 31.2 0 000 12a31.2 31.2 0 00.5 5.8 3 3 0 002.1 2.2c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 002.1-2.2A31.2 31.2 0 0024 12a31.2 31.2 0 00-.5-5.8zM9.8 15.6V8.4L16 12l-6.2 3.6z"
//             />
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
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
