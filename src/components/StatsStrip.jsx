import React, { useEffect, useRef, useState } from "react";
import { FiUserCheck, FiFileText, FiAward, FiUsers } from "react-icons/fi";

function CountUp({ end }) {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let start = 0;
          const duration = 500; // 1.5 seconds
          const increment = end / (duration / 16);

          const step = () => {
            start += increment;
            if (start < end) {
              setValue(Math.floor(start));
              requestAnimationFrame(step);
            } else {
              setValue(end); // Ensure exact final value
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <span ref={ref}>{value.toLocaleString()}</span>
  );
}

function Stat({ icon: Icon, value, label }) {
  return (
    <div className="flex flex-col items-center text-center px-4">
      <Icon className="w-16 h-16 md:w-20 md:h-20 text-[#314977]" />

      <div className="text-3xl md:text-4xl font-bold text-[#0d2d47] mt-4">
        <CountUp end={value} />
      </div>

      <p className="mt-2 text-sm text-[#314977] font-medium">{label}</p>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section className="w-full bg-[#f5f6fa] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          <Stat icon={FiUserCheck} value={1200} label="Satisfied Clients" />
          <Stat icon={FiFileText} value={2000} label="Completed Projects" />
          <Stat icon={FiAward} value={50} label="Awards" />
          <Stat icon={FiUsers} value={100} label="Meetings" />

        </div>
      </div>
    </section>
  );
}
