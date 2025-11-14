import React, { useState } from "react";
import { Link } from "react-router-dom"; // 👈 IMPORTANT
import logo from "../assets/White logo.png";

export default function Navbar({ logoSrc = "/logo.png" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "/" },
    {
      label: "SERVICES",
      href: "/services",              // main services page
      hasDropdown: true,
      children: [
        { label: "Branding", href: "/services/branding" },
        { label: "Web Development", href: "/services/web-development" },
        { label: "SEO Optimization", href: "/services/seo-optimization" },
        { label: "Client Relations", href: "/services/client-relationship" },
      ],
    },
    { label: "PORTFOLIOS", href: "/portfolios" },
    { label: "ABOUT US", href: "/about" },
    { label: "BLOG", href: "/blog" },
    { label: "CONTACT US", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-gradient-to-r from-[#314977] to-[#3386BC] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-9 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.label} className="relative group">
                  {/* CLICK = go /services, HOVER = show dropdown */}
                  <Link
                    to={item.href}
                    className="text-sm font-semibold tracking-wide flex items-center gap-1 hover:text-[#FFB347] transition"
                  >
                    {item.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  <div className="absolute left-0 mt-3 w-52 rounded-lg bg-white text-gray-800 shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="block px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-[#314977]/10 hover:to-[#3386BC]/10"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-sm font-semibold hover:text-[#FFB347] transition"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/get-started"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white bg-[#314977] hover:bg-[#26385E] transition"
            >
              Get Started
            </Link>

            {/* Mobile toggle button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-md bg-white/20 hover:bg-white/30 transition"
            >
              {!mobileOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/20 bg-gradient-to-r from-[#314977] to-[#3386BC] text-white">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.label}>
                    <div className="flex justify-between items-center w-full px-3 py-2">
                      <Link
                        to={item.href}
                        className="text-sm font-semibold"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={() =>
                          setMobileServicesOpen((v) => !v)
                        }
                        className="p-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className={`w-4 h-4 transition-transform ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>

                    {mobileServicesOpen && (
                      <div className="mt-1 bg-white/10 rounded-lg">
                        <Link
                          to={item.href}
                          className="block px-5 py-2 text-sm font-semibold hover:bg-white/20"
                          onClick={() => setMobileOpen(false)}
                        >
                          All Services
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-5 py-2 text-sm hover:bg-white/20"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block px-3 py-2 text-sm font-semibold hover:bg-white/20"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}

              <Link
                to="/get-started"
                className="block mt-2 text-center bg-[#314977] px-4 py-2 rounded-lg font-semibold hover:bg-[#26385E] transition"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
