// src/pages/ServiceDetail.jsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { serviceBySlug, services } from "../data/Services.jsx"; // ✅ lowercase
export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const svc = serviceBySlug[slug];

  if (!svc) {
    return (
      <main className="min-h-screen flex items-center justify-center p-8 bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2 text-slate-900">
            Service not found
          </h1>
          <p className="text-slate-600 mb-6">
            We couldn&apos;t find that service. It might be renamed or moved.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold bg-[#314977] text-white hover:bg-[#26365b] transition"
          >
            ← Back to all services
          </Link>
        </div>
      </main>
    );
  }

  const pricingTiers = [
    {
      id: "starter",
      name: "Starter",
      badge: "For early-stage",
      price: "€499+",
      description: `Essentials to launch your ${svc.title.toLowerCase()} with strong foundations.`,
      features: [
        "Basic strategy & setup",
        "1 core delivery module",
        "Email & chat support",
        "Performance recap",
      ],
    },
    {
      id: "growth",
      name: "Growth",
      badge: "Most popular",
      price: "€1.200+",
      description: `Ideal for growing brands that want continuous ${svc.title.toLowerCase()} execution.`,
      features: [
        "Full strategy & implementation",
        "Monthly deliverables",
        "Performance review call",
        "Priority support",
      ],
    },
    {
      id: "scale",
      name: "Scale",
      badge: "For serious scaling",
      price: "Custom",
      description: `Custom ${svc.title.toLowerCase()} roadmap aligned to your revenue goals.`,
      features: [
        "Senior strategy team",
        "High-volume output",
        "Weekly dashboards",
        "Long-term roadmap",
      ],
    },
  ];

  const handleSelectChange = (e) => {
    const newSlug = e.target.value;
    if (newSlug) navigate(`/service/${newSlug}`);
  };

  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Header + dropdown */}
      <header className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 pb-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-3xl">
            <nav className="text-xs sm:text-sm text-slate-600 mb-3 flex items-center gap-1 flex-wrap">
              <Link
                to="/services"
                className="text-sky-600 hover:underline font-medium"
              >
                Services
              </Link>
              <span className="text-slate-400">›</span>
              <span className="text-slate-700">{svc.title}</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              {svc.title}
            </h1>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
              {svc.description}
            </p>
          </div>

          {/* Dropdown list to switch service */}
          <div className="w-full md:w-72">
            <label
              htmlFor="service-detail-select"
              className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wide"
            >
              Switch service
            </label>
            <div className="relative">
              <select
                id="service-detail-select"
                onChange={handleSelectChange}
                value={slug}
                className="
                  w-full rounded-xl border border-slate-300 bg-white 
                  px-3 pr-9 py-2.5 
                  text-sm font-medium text-slate-800 
                  shadow-sm 
                  focus:outline-none focus:ring-2 focus:ring-[#314977] focus:border-[#314977]
                "
              >
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                ▾
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Big image */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-10">
        <div className="max-w-4xl mx-auto">
          <figure
            className="rounded-2xl shadow-lg p-4 md:p-6 border border-slate-200/70"
            style={{ backgroundColor: svc.frameColor }}
          >
            <div className="overflow-hidden rounded-xl bg-white border border-slate-200/60">
              <div className="aspect-video w-full">
                <img
                  src={svc.img}
                  alt={svc.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </figure>
        </div>
      </section>

      {/* Details + Facts */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">
        <div className="grid lg:grid-cols-[1.1fr,1.3fr] gap-10 lg:gap-14 items-start">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              What&apos;s included
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
              {svc.details}
            </p>

            <div className="mt-6 inline-flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-slate-900 text-white text-xs font-semibold px-3 py-1 uppercase tracking-wide">
                {svc.title}
              </span>
              <span className="inline-flex items-center rounded-full bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1">
                Tailored for your stage
              </span>
            </div>
          </div>

          <div>
            <div className="grid sm:grid-cols-2 gap-4">
              {svc.facts?.map((fact, idx) => (
                <div
                  key={idx}
                  className="
                    rounded-xl border border-slate-200 bg-white 
                    p-4 sm:p-5 shadow-sm 
                    text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed
                  "
                >
                  {fact}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-to-r from-[#314977] to-[#3386BC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
              Pricing for {svc.title}
            </h2>
            <p className="text-sky-100/85 mt-4 text-sm sm:text-base leading-relaxed">
              Flexible models based on your goals: launch, grow, or scale. We
              typically start with a strategy call and then propose the right
              tier or a custom mix.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7 mt-10">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.id}
                className={`rounded-2xl bg-white/95 p-6 md:p-7 shadow-lg flex flex-col border ${
                  index === 1
                    ? "border-[#314977] ring-2 ring-[#314977]/10"
                    : "border-slate-200"
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900">
                    {tier.name}
                  </h3>
                  <span className="text-[10px] sm:text-[11px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 uppercase tracking-wide">
                    {tier.badge}
                  </span>
                </div>

                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                  {tier.price}
                </div>

                <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-5 leading-relaxed">
                  {tier.description}
                </p>

                <ul className="text-xs sm:text-sm md:text-base text-slate-700 space-y-2.5 mb-6">
                  {tier.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>

                <button
                  className="mt-auto rounded-lg px-4 py-2.5 text-sm md:text-base font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  Request {tier.name} Plan
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm md:text-base font-semibold bg-white/10 text-sky-50 hover:bg-white/20 transition"
            >
              ← Back to all services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

