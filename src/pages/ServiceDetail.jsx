// src/pages/ServiceDetail.jsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { serviceBySlug, services } from "../data/services.jsx";

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const svc = serviceBySlug[slug];

  if (!svc) {
    return (
      <main className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Not found</h1>
          <p className="text-slate-600 mb-6">We couldn’t find that service.</p>
          <Link
            to="/services"
            className="text-sky-600 font-semibold hover:underline"
          >
            Back to services
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
    if (newSlug) {
      navigate(`/service/${newSlug}`);
    }
  };

  return (
    <main className="bg-white min-h-screen">
      {/* Header + dropdown */}
      <header className="mx-auto max-w-7xl px-6 pt-14 pb-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <nav className="text-sm text-slate-600 mb-3">
              <Link to="/services" className="text-sky-600 hover:underline">
                Services
              </Link>
              <span className="mx-2">›</span>
              <span>{svc.title}</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              {svc.title}
            </h1>

            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-3xl">
              {svc.description}
            </p>
          </div>

          {/* Dropdown list to switch service */}
          <div className="w-full md:w-64">
            <label
              htmlFor="service-detail-select"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              Switch service
            </label>
            <select
              id="service-detail-select"
              onChange={handleSelectChange}
              value={slug}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm font-medium text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            >
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>

      {/* Big image - smaller width & centered */}
      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <figure
            className="rounded-2xl shadow-lg p-4 md:p-6"
            style={{ backgroundColor: svc.frameColor }}
          >
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
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

      {/* Details + Facts - “services table” bigger */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
          What’s included
        </h2>

        <p className="text-base md:text-lg text-slate-700 mb-7 leading-relaxed max-w-4xl">
          {svc.details}
        </p>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {svc.facts?.map((fact) => (
            <li
              key={fact}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm text-base md:text-lg text-slate-700 leading-relaxed"
            >
              {fact}
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-to-r from-[#314977] to-[#3386BC]">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Pricing for {svc.title}
          </h2>
          <p className="text-sky-100/80 mt-4 max-w-2xl text-sm md:text-base">
            Flexible models based on your goals: launch, grow, or scale.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className="rounded-2xl bg-white/95 p-7 shadow-lg flex flex-col border"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{tier.name}</h3>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 uppercase tracking-wide">
                    {tier.badge}
                  </span>
                </div>

                <div className="text-3xl font-extrabold text-slate-900 mb-3">
                  {tier.price}
                </div>

                <p className="text-sm md:text-base text-slate-600 mb-5">
                  {tier.description}
                </p>

                <ul className="text-sm md:text-base text-slate-700 space-y-2.5 mb-6">
                  {tier.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>

                <button
                  className="mt-auto rounded-lg px-4 py-2.5 text-sm md:text-base font-semibold shadow-sm 
                             bg-slate-100 text-slate-900 hover:bg-white 
                             transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  Request {tier.name} Plan
                </button>
              </div>
            ))}
          </div>

          {/* Back bottom */}
          <div className="text-center mt-10">
            <Link
              to="/services"
              className="text-sky-100 hover:text-white font-semibold text-sm md:text-base"
            >
              ← Back to all services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
