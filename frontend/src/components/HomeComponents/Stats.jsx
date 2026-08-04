import React, { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20, suffix: "+", label: "years of Excellence" },
  { value: 150, suffix: "+", label: "Staff members" },
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
      // ease-out for a natural deceleration near the end
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [active, target, duration]);

  return count;
}

function StatItem({ value, suffix, label, active }) {
  const count = useCountUp(value, active);

  return (
    <div className="relative text-center rounded-2xl px-6 py-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg shadow-black/10 overflow-hidden">
      {/* glossy diagonal sheen */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-white/5 to-transparent" />
      {/* subtle top highlight edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />

      <p className="relative text-5xl sm:text-6xl font-light text-white tabular-nums drop-shadow-sm">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="relative mt-3 text-sm sm:text-base font-bold text-white/90">
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
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 px-6 overflow-hidden bg-gradient-to-br from-emerald-400 via-emerald-600 to-emerald-800"
    >
      {/* ambient glass highlights across the whole section */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 w-96 h-96 rounded-full bg-emerald-300/30 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/10" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
        {stats.map((stat, i) => (
          <StatItem key={i} {...stat} active={inView} />
        ))}
      </div>
    </section>
  );
}