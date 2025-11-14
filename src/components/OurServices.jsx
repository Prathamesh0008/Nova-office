// // src/pages/OurServices.jsx
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { services } from "../data/services.jsx";

// // Icons per service
// const ICONS = {
//   "brand-strategy": "🎯",
//   "website-development": "💻",
//   "digital-marketing": "📣",
//   "seo-optimization": "📈",
//   "client-relationship": "🤝",
// };

// /** Single service card */
// function ServiceCard({ slug, title, description }) {
//   const icon = ICONS[slug] || "⭐";

//   return (
//     <Link to={`/service/${slug}`} className="group block h-full">
//       {/* Card WITHOUT blue/gradient border */}
//       <div className="h-full rounded-2xl bg-white shadow-md hover:shadow-xl transition-transform duration-200 group-hover:-translate-y-1">
//         <div className="h-full rounded-2xl p-7 flex flex-col justify-between">
//           <div>
//             {/* Icon bubble */}
//             <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#eef3f8] mb-5 transition">
//               <span className="text-3xl">{icon}</span>
//             </div>

//             {/* Title */}
//             <h2 className="text-3xl font-extrabold text-slate-900">
//               {title}
//             </h2>

//             {/* Description */}
//             <p className="mt-3 text-lg text-slate-600 leading-relaxed">
//               {description}
//             </p>
//           </div>

//           {/* CTA bottom */}
//           <div className="mt-7 flex items-center justify-between text-lg font-semibold">
//             <span className="text-slate-900">Show details</span>
//             <span className="text-sky-600 group-hover:translate-x-1 inline-flex items-center transition-transform">
//               View service →
//             </span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }

// /** Main Page: Our Services */
// export default function OurServices() {
//   const navigate = useNavigate();

//   const handleSelectChange = (e) => {
//     const slug = e.target.value;
//     if (slug) navigate(`/service/${slug}`);
//   };

//   return (
//     <main className="bg-white min-h-screen">
//       {/* Page Header + Dropdown */}
//       <header className="mx-auto max-w-7xl px-6 pt-14 pb-8">
//         <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
//           {/* Title */}
//           <div>
//             <h1 className="text-5xl font-extrabold text-slate-900">
//               Our Services
//             </h1>
//             <p className="mt-4 text-lg text-slate-600 max-w-2xl">
//               Explore our complete suite of digital solutions crafted to help
//               your business grow.
//             </p>
//           </div>

//           {/* Dropdown */}
//           <div className="w-full md:w-64">
//             <label
//               htmlFor="service-select"
//               className="block text-sm font-semibold text-slate-700 mb-2"
//             >
//               Quick jump to a service
//             </label>

//             <select
//               id="service-select"
//               onChange={handleSelectChange}
//               defaultValue=""
//               className="w-full rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm font-semibold text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
//             >
//               <option value="" disabled>
//                 Select a service
//               </option>
//               {services.map((svc) => (
//                 <option key={svc.slug} value={svc.slug}>
//                   {svc.title}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </header>

//       {/* Cards Section */}
//       <section className="mx-auto max-w-7xl px-6 pb-14">
//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((svc) => (
//             <ServiceCard
//               key={svc.slug}
//               slug={svc.slug}
//               title={svc.title}
//               description={svc.description}
//             />
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }
