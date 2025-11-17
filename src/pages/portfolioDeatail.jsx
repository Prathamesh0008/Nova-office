// src/pages/PortfolioDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { portfolioProjects } from "../data/portfolioProjects.js";

export default function PortfolioDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const primary = "#314977";
  const accent = "#3386BC";

  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-3">
          <p className="text-lg font-semibold text-slate-800">
            Project not found
          </p>
          <button
            onClick={() => navigate("/portfolio")}
            className="px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: accent }}
          >
            Back to portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <section className="mx-auto max-w-4xl px-4 pt-8 pb-6">
        {/* Top back button (mobile-friendly) */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          ← Back
        </button>

        <h1
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2"
          style={{ color: primary }}
        >
          {project.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 mb-4">
          <span className="font-semibold" style={{ color: primary }}>
            Client:
          </span>{" "}
          {project.client}
        </p>

        <p className="text-sm sm:text-base text-slate-700 mb-6">
          {project.details}
        </p>
      </section>

      {/* Gallery – responsive, scrollable */}
      <section className="mx-auto max-w-4xl px-4 pb-10">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {project.gallery.map((img, idx) => (
            <div
              key={idx}
              className="w-full rounded-xl overflow-hidden bg-slate-100"
            >
              <img
                src={img}
                alt={`${project.title} preview ${idx + 1}`}
                className="block w-full h-auto"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom close/back button */}
      <section className="mx-auto max-w-4xl px-4 pb-12 flex justify-center">
        <button
          onClick={() => navigate("/portfolio")}
          className="px-6 py-2 rounded-full text-sm sm:text-base font-semibold text-white shadow-md hover:shadow-lg transition"
          style={{ backgroundColor: accent }}
        >
          Close case study
        </button>
      </section>
    </div>
  );
}