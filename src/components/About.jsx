import React from "react";
import workspace from "../assets/workspace.jpg";
import planning from "../assets/planning.jpg";
import brand from "../assets/brand-promotion.png";
// import video from "../assets/video.webp";
import social from "../assets/social.jpg";
import smm from "../assets/smm.jpg";
import seo from "../assets/seo.webp";
import site from "../assets/site.webp";
import team from "../assets/tt.jpg";
import dd from "../assets/dd.jpg";
import ss from "../assets/ss.jpg";
import depend from "../assets/depend.jpg";
import t1 from "../assets/t1.avif";

/** ======= CONTENT (your requested text) ======= */
const services = [
  {
    title: "Brand Promotion",
    desc:
      "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
    img: brand,
  },
  {
    title: "Video Marketing",
    desc:
      "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
    img: "",
  },
  {
    title: "Site Analysis",
    desc:
      "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
    img: site,
  },
  {
    title: "Social Media Marketing",
    desc:
      "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
    img: social,
  },
  {
    title: "SEO Optimization",
    desc:
      "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
    img: seo,
  },
  {
    title: "SMM Report",
    desc:
      "A brand for a company is like a reputation for a person. You earn reputation by trying to do hard things well.",
    img: smm,
  },
];

export default function About() {
  return (
    <div className="text-slate-800">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#314977] to-[#3386BC] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight mb-4 font-playfair">
            About <span className="text-white/90">Us</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-white/90 font-inter">
            We help brands grow with strategy, content, and performance
            marketing that actually moves the needle.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#314977] mb-4 font-poppins">
              Our Mission
            </h2>
            <p className="text-slate-700 leading-relaxed font-inter">
              Build brands people trust. We combine research, design, and
              distribution to create campaigns that convert and identities that
              last.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed font-inter">
              From brand foundations to full-funnel execution, we operate with
              clarity, consistency, and measurable outcomes.
            </p>
          </div>
          <img
            src={workspace}
            alt="Creative workspace"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Vision */}
      <section className="bg-gradient-to-r from-[#314977] to-[#3386BC] py-16 text-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <img
            src={planning}
            alt="Strategy planning"
            className="rounded-2xl shadow-2xl"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 font-playfair">
              Our Vision
            </h2>
            <p className="text-white/90 leading-relaxed font-inter">
              Be the go-to growth partner for ambitious brands—where strategy
              meets storytelling and data drives decisions.
            </p>
            <ul className="mt-6 space-y-3 font-inter">
              <li className="flex items-center gap-3">
                <span className="inline-block h-2 w-2 rounded-full bg-white"></span>
                <span>Build distinct, durable brand equity</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block h-2 w-2 rounded-full bg-white"></span>
                <span>Pair creativity with measurable performance</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block h-2 w-2 rounded-full bg-white"></span>
                <span>Operate transparently with compounding learnings</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What Make Us Best (your six items) */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#314977] font-poppins">
              What Makes Us Best
            </h2>
            <p className="mt-3 text-slate-700 font-inter">
              Clear strategy. Clean design. Consistent execution. We turn
              attention into traction.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <article
                key={i}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition p-6"
              >
                <div className="relative h-28 w-full mb-4 overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-100">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 font-poppins">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 font-inter">
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team (generic) */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#314977] mb-3 font-poppins">
              About The Team
            </h2>
            <p className="max-w-3xl mx-auto text-slate-700 font-inter">
              Craft-first, data-led, low-ego. We collaborate tightly across
              strategy, design, content, and growth.
            </p>
            <p className="text-slate-700 leading-relaxed mt-3 font-inter">
              We believe in momentum over perfection. Small, sharp iterations
              compound into big results. Our playbooks are living
              documents—updated by what we learn in the field.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "A Great Team",
                    desc: "Multi-disciplinary, battle-tested, built for speed.",
                    img: team,
                  },
                  {
                    title: "We Are Dedicated",
                    desc: "Focused on outcomes, not vanity metrics.",
                    img: dd,
                  },
                  {
                    title: "Life Time Support",
                    desc: "Partnership mindset—before and after launch.",
                    img: ss,
                  },
                  {
                    title: "Dependable Team",
                    desc: "Clear comms, clear timelines, clear accountability.",
                    img: depend,
                  },
                ].map((f, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 p-5 hover:shadow-md transition bg-white"
                  >
                    <div className="h-12 w-12 mb-3 rounded-xl bg-slate-50 ring-1 ring-slate-100 overflow-hidden grid place-items-center">
                      <img
                        src={f.img}
                        alt={f.title}
                        className="h-10 w-10 object-cover"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="font-semibold text-slate-900 font-poppins">
                      {f.title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-600 font-inter">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <img
              src={t1}
              alt="Our Team"
              className="rounded-2xl shadow-lg mt-8"
            />
          </div>
        </div>
      </section>

      {/* Presence (generic, not pharma) */}
      <section className="bg-gradient-to-r from-[#314977] to-[#3386BC] py-20 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 font-playfair">
            Global Presence
          </h2>
          <p className="max-w-3xl mx-auto text-white/90 mb-8 font-inter">
            Remote-first and borderless. Built to serve clients across time
            zones with always-on delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-white/80 font-inter">
            <span className="px-5 py-2 rounded-full bg-white/10 ring-1 ring-white/20">
              India 🇮🇳
            </span>
            <span className="px-5 py-2 rounded-full bg-white/10 ring-1 ring-white/20">
              Netherlands 🇳🇱
            </span>
            <span className="px-5 py-2 rounded-full bg-white/10 ring-1 ring-white/20">
              Colombia 🇨🇴
            </span>
            <span className="px-5 py-2 rounded-full bg-white/10 ring-1 ring-white/20">
              Finland 🇫🇮
            </span>
            <span className="px-5 py-2 rounded-full bg-white/10 ring-1 ring-white/20">
              Spain 🇪🇸
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
