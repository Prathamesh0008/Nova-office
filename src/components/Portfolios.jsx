import React, { useState } from "react";

const projects = [
  {
    title: "Product Launch for a D2C Skincare Brand",
    subtitle:
      "Grew a fresh skincare line with a single hero product strategy supported by launch ads, landing pages and email automation.",
    image: "/images/ecom-skincare-launch.jpg",
    client: "GlowSkin Labs",
    details:
      "We designed the full launch journey: pre-launch waitlist, Meta ads, landing page, email flows and post-purchase education. The focus was on one clear hero product and a simple, repeatable funnel.",
    gallery: [
      "/images/ecom-skincare-launch.jpg",
      "/images/ecom-international.jpg",
      "/images/ecom-fashion-ads.jpg",
    ],
  },
  {
    title: "Always-On Acquisition for Fashion Store",
    subtitle:
      "Created a daily sales engine using Meta + Google Ads with consistent, scalable acquisition instead of random sales spikes.",
    image: "/images/ecom-fashion-ads.jpg",
    client: "UrbanWear Co.",
    details:
      "We simplified the account structure, aligned creatives to best-sellers and built a clear separation between testing and scaling campaigns. Weekly creative testing kept performance stable.",
    gallery: [
      "/images/ecom-skincare-launch.jpg",
      "/images/ecom-international.jpg",
      "/images/ecom-fashion-ads.jpg",
    ],
  },
  {
    title: "Cart Recovery & Post-Purchase Flows",
    subtitle:
      "Set up automated email + SMS flows recovering abandoned carts and increasing repeat customers for a multi-brand store.",
    image: "/images/ecom-retension-flows.jpg",
    client: "MultiBrand Hub",
    details:
      "We mapped the full lifecycle: browse abandonment, cart recovery, post-purchase, winbacks and VIP flows. The result: higher recovery rates and more repeat orders without extra ad spend.",
    gallery: [
      "/images/ecom-skincare-launch.jpg",
      "/images/ecom-international.jpg",
      "/images/ecom-fashion-ads.jpg",
    ],
  },
  {
    title: "AOV Boost Through Bundles & Upsells",
    subtitle:
      "Built high-converting bundles and intelligent upsells to increase average order value without using big discounts.",
    image: "/images/ecom-aov-bundles.jpg",
    client: "PrimeSupps",
    details:
      "We restructured product bundles and upsell logic based on real buying behavior, highlighting value stacks instead of price cuts. AOV went up while margin stayed healthy.",
    gallery: [
      "/images/ecom-skincare-launch.jpg",
      "/images/ecom-international.jpg",
      "/images/ecom-fashion-ads.jpg",
    ],
  },
  {
    title: "International Scaling for Niche Store",
    subtitle:
      "Expanded into new markets by adapting creatives, currencies, shipping messaging and localized landing pages.",
    image: "/images/ecom-international.jpg",
    client: "Nomad Gear",
    details:
      "We tested new regions with lightweight campaigns, localized copy and country-specific offers. Once we saw traction, we scaled budgets with clear KPIs per market.",
    gallery: [
      "/images/ecom-skincare-launch.jpg",
      "/images/ecom-international.jpg",
      "/images/ecom-fashion-ads.jpg",
    ],
  },
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);

  const primary = "#314977";
  const accent = "#3386BC";

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 pt-12 pb-10 text-center">
        <p className="inline-flex items-center rounded-full bg-[#E9F2FA] px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#314977]">
          Portfolio
        </p>

        <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-slate-900">
          E-commerce marketing that{" "}
          <span className="bg-gradient-to-r from-[#314977] to-[#3386BC] bg-clip-text text-transparent">
            turns clicks into customers.
          </span>
        </h1>

        <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
          We help online stores launch products, stabilize acquisition and grow
          lifetime value. These case snapshots show how we use ads, offers and
          retention systems to grow revenue — not just traffic.
        </p>
      </section>

      {/* Alternating project rows */}
      <section className="mx-auto max-w-6xl px-4 pb-24 space-y-16 md:space-y-20">
        {projects.map((project, index) => {
          const imageOrder = index % 2 === 0 ? "md:order-1" : "md:order-2";
          const textOrder = index % 2 === 0 ? "md:order-2" : "md:order-1";
          const textAlign =
            index % 2 === 0 ? "md:text-left" : "md:text-right";

          return (
            <div
              key={project.title}
              className="grid md:grid-cols-2 items-center gap-10 rounded-[32px] bg-[#FFF8F5] px-4 py-8 md:px-10 md:py-10 shadow-sm"
            >
              {/* Image side */}
              <div className={`flex justify-center ${imageOrder}`}>
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="inline-block rounded-[32px] bg-gradient-to-br from-white via-[#E9F2FA] to-white p-[3px] shadow-xl focus:outline-none focus:ring-4 focus:ring-[#3386BC]/30"
                >
                  <div className="overflow-hidden rounded-[26px] bg-white">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="block w-[520px] max-w-full cursor-pointer transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </button>
              </div>

              {/* Text side */}
              <div
                className={`${textOrder} ${textAlign} text-center md:text-inherit space-y-3`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3386BC]">
                  {project.client}
                </p>
                <h2
                  className="text-2xl md:text-3xl font-semibold"
                  style={{ color: primary }}
                >
                  {project.title}
                </h2>
                <p className="text-sm md:text-base text-slate-600">
                  {project.subtitle}
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#314977] to-[#3386BC] px-5 py-2 text-xs md:text-sm font-semibold text-white shadow-md hover:shadow-lg transition"
                  >
                    View project details
                    <span className="text-base leading-none">↗</span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-3xl rounded-3xl bg-white shadow-2xl p-6 md:p-8">
            {/* Close (X) */}
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-700 text-xl leading-none"
              aria-label="Close"
            >
              ×
            </button>

            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-center text-[#3386BC] mb-1">
              Case Study
            </p>

            <h2
              className="text-2xl md:text-3xl font-semibold text-center mb-2"
              style={{ color: primary }}
            >
              {activeProject.title}
            </h2>

            <p className="text-sm text-center mb-4 text-slate-600">
              <span className="font-semibold" style={{ color: primary }}>
                Client:
              </span>{" "}
              {activeProject.client}
            </p>

            {/* Gallery */}
            <div className="grid gap-4 md:grid-cols-3 justify-items-center mb-6">
              {activeProject.gallery?.map((img, idx) => (
                <div
                  key={idx}
                  className="w-full max-w-xs rounded-xl overflow-hidden bg-slate-100 shadow-sm"
                >
                  <img
                    src={img}
                    alt={`${activeProject.title} preview ${idx + 1}`}
                    className="block w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-slate-600 text-center max-w-2xl mx-auto">
              {activeProject.details}
            </p>

            {/* Close button */}
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="px-6 py-2 rounded-full text-sm font-semibold text-white shadow-md hover:shadow-lg transition bg-gradient-to-r from-[#314977] to-[#3386BC]"
              >
              Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
