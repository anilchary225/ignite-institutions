import React, { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Years of Excellence" },
  { value: 150, suffix: "+", label: "Staff Members" },
  { value: 8, suffix: "+", label: "Branches" },
  { value: 6000, suffix: "+", label: "Students" },
];

function useCountUp(target, active, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let startTime = null;
    let frameId;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frameId = requestAnimationFrame(step);
      else setCount(target);
    };
    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [active, target, duration]);

  return count;
}

function StatItem({ value, suffix, label, active }) {
  const count = useCountUp(value, active);
  return (
    <div className="relative text-center rounded-2xl px-6 py-7 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-white/5 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      <p className="relative text-4xl sm:text-5xl font-black text-white tabular-nums drop-shadow-sm">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="relative mt-2 text-xs sm:text-sm font-semibold text-white/90 uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-14 px-4 sm:px-8 overflow-hidden bg-gradient-to-br from-green-700 via-green-600 to-green-800"
    >
      <div className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-12 w-80 h-80 rounded-full bg-green-300/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-white/70 uppercase mb-2">Our Impact</span>
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">IGNITE by the Numbers</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} active={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
