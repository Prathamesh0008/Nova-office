import React from "react";

export default function Pricing() {
  const plans = [
    {
      title: "Starter",
      price: "₹4,999",
      period: "/month",
      desc: "Perfect for small businesses testing the digital waters.",
      features: [
        "Landing page setup",
        "Basic SEO optimization",
        "Monthly performance report",
        "Email support",
      ],
      highlight: false,
    },
    {
      title: "Growth",
      price: "₹14,999",
      period: "/month",
      desc: "Best for brands ready to scale with performance marketing.",
      features: [
        "Full website optimization",
        "Google + Meta Ads",
        "Monthly A/B testing",
        "Weekly performance insights",
        "Priority support",
      ],
      highlight: true,
    },
    {
      title: "Enterprise",
      price: "₹39,999",
      period: "/month",
      desc: "For serious companies needing aggressive growth & automation.",
      features: [
        "End-to-end digital marketing",
        "Automation pipelines",
        "Dedicated strategy manager",
        "Custom dashboards",
        "24/7 priority support",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Pricing that scales with your ambition
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Simple. Transparent. Designed to grow with your brand, not complicate it.
        </p>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 shadow-lg border transition-all duration-300 
                ${
                  plan.highlight
                    ? "bg-white border-[#FF7A00] scale-105 shadow-2xl"
                    : "bg-white border-gray-200 hover:scale-105"
                }
              `}
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-gray-600 text-sm mb-6">{plan.desc}</p>

              <div className="text-4xl font-bold text-[#FF7A00] mb-6">
                {plan.price}
                <span className="text-lg text-gray-500">{plan.period}</span>
              </div>

              <ul className="text-left space-y-3 mb-8">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-600 text-xl">✓</span>
                    <span className="text-gray-700">{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-200
                  ${
                    plan.highlight
                      ? "bg-[#FF7A00] text-white hover:bg-[#e56c00]"
                      : "bg-gray-900 text-white hover:bg-gray-700"
                  }
                `}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
