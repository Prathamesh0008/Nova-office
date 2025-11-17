// src/pages/Portfolio.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { portfolioProjects } from "../data/portfolioProjects.js";

export default function Portfolio() {
  const navigate = useNavigate();
  const primary = "#314977";
  const accent = "#3386BC";

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 pt-10 pb-8 text-center">
        <p
          className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-2"
          style={{ color: accent }}
        >
          Portfolio
        </p>

        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
          E-commerce marketing that{" "}
          <span style={{ color: primary }}>turns clicks into customers.</span>
        </h1>

        <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
          We help online stores launch products, stabilize acquisition and grow
          lifetime value. Click any project to see the full case overview.
        </p>
      </section>

      {/* Alternating sections */}
      <section className="mx-auto max-w-6xl px-4 pb-20 space-y-24">
        {portfolioProjects.map((project, index) => {
          const imageOrder = index % 2 === 0 ? "md:order-1" : "md:order-2";
          const textOrder = index % 2 === 0 ? "md:order-2" : "md:order-1";
          const textAlign =
            index % 2 === 0 ? "md:text-left" : "md:text-right";

          const handleClick = () => {
            navigate(`/portfolio/${project.slug}`);
          };

          return (
            <div
              key={project.slug}
              className="grid md:grid-cols-2 items-center gap-10 cursor-pointer"
              onClick={handleClick}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleClick()}
            >
              {/* Image side */}
              <div className={`flex justify-center ${imageOrder}`}>
                <div
                  className="inline-block rounded-[32px] p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: "#E9F2FA" }}
                >
                  <div className="overflow-hidden rounded-2xl bg-white">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="block w-[520px] max-w-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div
                className={`${textOrder} ${textAlign} text-center md:text-inherit`}
              >
                <h2
                  className="text-2xl md:text-3xl font-semibold mb-2"
                  style={{ color: primary }}
                >
                  {project.title}
                </h2>
                <p className="text-sm md:text-base text-slate-600">
                  {project.subtitle}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-400">
                  View case study →
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}