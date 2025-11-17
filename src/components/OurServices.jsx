// src/pages/OurServices.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { services } from "../data/services.jsx";

import brandImg from "../assets/B_S.jpg";
import webImg from "../assets/SEO1.jpg";
import digitalImg from "../assets/D_M1.jpg";
import seoImg from "../assets/SEO1.jpg";
import clientImg from "../assets/Client1.png";

const SERVICE_IMAGES = {
  "brand-strategy": brandImg,
  "website-development": webImg,
  "digital-marketing": digitalImg,
  "seo-optimization": seoImg,
  "client-relationship": clientImg,
};

const CARD_BG = "from-[#E9F2FF] to-[#F6FAFF]";

function ServiceCard({ svc, index, mounted }) {
  const image = SERVICE_IMAGES[svc.slug];
  const reverse = index % 2 === 1;

  return (
    <Link
      to={`/service/${svc.slug}`}
      className="group block w-full"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    >
      <article
        style={{ transitionDelay: `${index * 90}ms` }}
        className={`
          w-full rounded-3xl border border-[#c9d7ee] 
          bg-gradient-to-br ${CARD_BG}
          shadow-md
          transform scale-[1.10]
          min-h-[340px]
          transition-all duration-500 ease-out
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
          group-hover:-translate-y-1 group-hover:shadow-xl
        `}
      >
        <div
          className={`
            p-8 flex flex-col sm:flex-row items-stretch gap-10
            ${reverse ? "sm:flex-row-reverse" : ""}
          `}
        >
          {/* IMAGE */}
          <div className="w-full sm:w-72 flex-shrink-0">
            <img
              src={image}
              alt={svc.title}
              className="w-full h-48 object-cover rounded-2xl shadow"
            />
          </div>

          {/* TEXT */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center mb-3 px-3 py-1 rounded-full bg-white/90 text-[10px] font-semibold uppercase tracking-wide text-[#314977]">
                Core service
              </span>

              {/* title */}
              <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#314977] to-[#3386BC] bg-clip-text text-transparent opacity-90">
                {svc.title}
              </h2>

              {/* description */}
              <p className="mt-3 text-sm md:text-base leading-relaxed bg-gradient-to-r from-[#314977] to-[#3386BC] bg-clip-text text-transparent opacity-70">
                {svc.description}
              </p>
            </div>

            {/* CTA */}
            <div
              className={`mt-5 flex items-center justify-between text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#314977] to-[#3386BC] bg-clip-text text-transparent opacity-80 ${
                reverse ? "sm:flex-row-reverse" : ""
              }`}
            >
              <span>Show details</span>
              <span className="inline-flex items-center gap-1 transition-transform group-hover:translate-x-1">
                View service →
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function OurServices() {
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleSelectChange = (e) => {
    const slug = e.target.value;
    if (slug) navigate(`/service/${slug}`);
  };

  return (
    <main className="bg-[#f4f6fb] min-h-screen">
      {/* HEADER */}
      <header className="mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold tracking-[0.22em] bg-gradient-to-r from-[#314977] to-[#3386BC] bg-clip-text text-transparent uppercase">
              Services
            </p>

            <h1 className="mt-3 text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#314977] to-[#3386BC] bg-clip-text text-transparent opacity-90">
              Our Services
            </h1>

            <p className="mt-4 text-sm sm:text-base leading-relaxed bg-gradient-to-r from-[#314977] to-[#3386BC] bg-clip-text text-transparent opacity-70">
              Explore our complete suite of digital solutions crafted to help your business grow.
            </p>
          </div>

          {/* DROPDOWN */}
          <div className="w-full md:w-64">
            <label className="block text-[10px] font-semibold mb-2 bg-gradient-to-r from-[#314977] to-[#3386BC] bg-clip-text text-transparent uppercase tracking-wide">
              Quick jump to a service
            </label>

            <div className="relative">
              <select
                onChange={handleSelectChange}
                defaultValue=""
                className="w-full rounded-2xl border border-slate-300 bg-white px-3 pr-9 py-2 text-sm font-semibold text-[#314977] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#314977]"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((svc) => (
                  <option key={svc.slug} value={svc.slug}>
                    {svc.title}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400 text-xs">
                ▾
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* SERVICES LIST */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-24">
        <div className="flex flex-col gap-14">
          {services.map((svc, index) => (
            <ServiceCard key={svc.slug} svc={svc} index={index} mounted={mounted} />
          ))}
        </div>
      </section>
    </main>
  );
}
