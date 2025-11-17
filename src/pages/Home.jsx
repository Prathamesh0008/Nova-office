import React from "react";
import web from "../assets/web2.jpg"
import seo from "../assets/seo.png"
import wr from "../assets/dm1.jpg"
import t1 from "../assets/t1.avif"
import dmt from "../assets/dmt.png"
import StatsStrip from "../components/StatsStrip";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#314977] to-[#3386BC] text-white">
      {/* === Hero Section === */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-32 md:py-44">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-5xl md:text-6xl  leading-tight tracking-tight drop-shadow-lg">
            Build, Rank & Scale with Nova Digital
          </h1>
          <p className="text-xl text-gray-100/90 leading-relaxed">
            We craft powerful websites, drive organic traffic with precision SEO,
            and amplify your reach through strategic digital marketing.
          </p>
          <a
            href="/contact"
            className="inline-block mt-6 bg-white text-[#314977] px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:bg-[#FFB347] hover:text-white transition-all duration-300"
          >
            Let’s Grow Together
          </a>
        </div>

        <div className="md:w-1/2 mt-14 md:mt-0 flex justify-center">
          <img
            src={dmt}
            alt="Digital Marketing Team"
            className="rounded-3xl shadow-2xl border-4 border-white/20"
          />
        </div>
      </section>

      {/* === Services Section === */}
      <section className="bg-white text-gray-800 py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#314977] mb-20">
            We Turn Clicks into Clients
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* SEO */}
            <div className="bg-gradient-to-b from-[#314977]/10 to-[#3386BC]/10 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-2">
              <img
                src={seo}
                className="rounded-lg mb-6 rounded-lg mb-6  object-cover shrink-0"
              />
              <h3 className="text-2xl font-semibold mb-3 text-[#314977]">
                Search Engine Optimization (SEO)
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                Increase visibility and dominate Google rankings with
                data-driven SEO strategies that put your business in front of
                the right audience.
              </p>
            </div>

            {/* Web Development */}
            <div className="bg-gradient-to-b from-[#314977]/10 to-[#3386BC]/10 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-2">
              <img
                src={web}
                alt="Web Development"
                className="rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-[#314977]">
                Web Design & Development
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                We design lightning-fast, mobile-friendly, and SEO-optimized
                websites that capture attention and convert visitors into loyal
                customers.
              </p>
            </div>
{/* https://api.deepai.org/job-view-file/6f3d113e-bdfe-4ef8-b8f9-99257742b990/outputs/output.jpg */}
            {/* Digital Marketing */}
            <div className="bg-gradient-to-b from-[#314977]/10 to-[#3386BC]/10 rounded-2xl p-10 shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-2">
              <img
                src={wr}
                alt="Digital Marketing"
                className="rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold mb-3 text-[#314977]">
                Digital Marketing Strategy
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                From social media to paid ads, we create full-funnel campaigns
                that amplify your message, boost ROI, and strengthen your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Why Choose Us Section === */}
      <section className="bg-gradient-to-r from-[#314977] to-[#3386BC] text-white py-28 md:py-36">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Why Brands Choose Nova
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left md:text-center">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">📈 Proven Results</h3>
              <p className="text-gray-100/90 leading-relaxed">
                Our strategies are ROI-driven and performance-tracked to ensure
                your investment pays off.
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">⚙️ Modern Technology</h3>
              <p className="text-gray-100/90 leading-relaxed">
                We build using next-gen tools and frameworks that guarantee speed,
                scalability, and reliability.
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">🌍 Global Expertise</h3>
              <p className="text-gray-100/90 leading-relaxed">
                From startups to enterprises — we’ve scaled brands across 10+
                countries with localized marketing insight.
              </p>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3">💬 Transparent Workflow</h3>
              <p className="text-gray-100/90 leading-relaxed">
                Real-time reports, clear communication, and a partner-first
                mindset define how we work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="bg-white text-center py-28 md:py-36">
        <h2 className="text-4xl md:text-5xl font-bold text-[#314977] mb-8">
          Let’s Build Something Great Together
        </h2>
        <p className="text-xl mb-10 text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Whether you’re starting from scratch or scaling globally — Nova helps
          you grow smarter, faster, and stronger in the digital world.
        </p>
        <a
          href="/contact"
          className="bg-[#314977] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-[#26385E] transition-all duration-300"
        >
          Contact Us
        </a>
      </section>
      <StatsStrip></StatsStrip>
    </div>
  );
}
