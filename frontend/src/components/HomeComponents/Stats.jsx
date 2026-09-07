import React, { useEffect, useRef, useState } from "react";
import ScrollRevealText from "./ScrollRevealText";

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

function StatItem({ value, suffix, label, active, index, isLast }) {
  const count = useCountUp(value, active);

  return (
    <div
      className={`relative flex flex-col items-center px-6 py-6 text-center transition-all duration-700 ease-out sm:py-2 ${
        !isLast ? "border-b border-neutral-200 dark:border-neutral-800 sm:border-b-0 sm:border-r" : ""
      }`}
      style={{
        transitionDelay: `${index * 120}ms`,
        opacity: active ? 1 : 0,
        filter: active ? "blur(0px)" : "blur(6px)",
        transform: active ? "translateY(0px)" : "translateY(14px)",
      }}>
      <p className="text-4xl font-semibold tabular-nums text-neutral-900 dark:text-white sm:text-5xl">
        {count.toLocaleString()}
        <span className="text-blue-600 dark:text-blue-400">{suffix}</span>
      </p>
      <p className="mt-2 text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400 sm:text-sm">
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
      className="border-y border-neutral-200 bg-white px-4 py-14 dark:border-neutral-800 dark:bg-neutral-950 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block text-xs font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Our Impact
          </span>
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">
            <ScrollRevealText as="span" text="IGNITE by the Numbers" className="inline-block" />
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem
              key={i}
              {...stat}
              active={inView}
              index={i}
              isLast={i === stats.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}