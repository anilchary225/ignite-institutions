import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, defaultViewport } from "../../animations/variants";

const stats = [
  { value: 6000,  suffix: "+", label: "Students Trained",       color: "violet" },
  { value: 2800,  suffix: "+", label: "Board Toppers",          color: "indigo" },
  { value: 600,   suffix: "+", label: "IIT Selections",         color: "rose" },
  { value: 900,  suffix: "+", label: "EAPCET Qualifiers",      color: "emerald" },
  { value: 100,    suffix: "%", label: "Board Pass Rate",        color: "amber" },
  { value: 20,    suffix: "+", label: "Years of Excellence",    color: "sky" },
];

const colorMap = {
  violet:  { bg: "bg-violet-600",  light: "bg-violet-100 dark:bg-violet-950/40",  text: "text-violet-700 dark:text-violet-300" },
  indigo:  { bg: "bg-indigo-600",  light: "bg-indigo-100 dark:bg-indigo-950/40",  text: "text-indigo-700 dark:text-indigo-300" },
  rose:    { bg: "bg-rose-600",    light: "bg-rose-100 dark:bg-rose-950/40",      text: "text-rose-700 dark:text-rose-300" },
  emerald: { bg: "bg-emerald-600", light: "bg-emerald-100 dark:bg-emerald-950/40",text: "text-emerald-700 dark:text-emerald-300" },
  amber:   { bg: "bg-amber-500",   light: "bg-amber-100 dark:bg-amber-950/40",    text: "text-amber-700 dark:text-amber-300" },
  sky:     { bg: "bg-sky-500",     light: "bg-sky-100 dark:bg-sky-950/40",        text: "text-sky-700 dark:text-sky-300" },
};

function useCountUp(target, active, duration = 1600) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = null;
    let id;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * target));
      if (p < 1) id = requestAnimationFrame(step);
      else setCount(target);
    };
    id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [active, target, duration]);
  return count;
}

function StatItem({ stat, active }) {
  const count = useCountUp(stat.value, active);
  const c = colorMap[stat.color] || colorMap.violet;
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={`flex flex-col items-center rounded-2xl px-6 py-7 text-center ${c.light}`}
    >
      <p className={`text-4xl font-black tabular-nums ${c.text}`}>
        {count.toLocaleString()}{stat.suffix}
      </p>
      <p className="mt-2 text-xs font-bold text-neutral-600 dark:text-neutral-400">{stat.label}</p>
    </motion.div>
  );
}

export default function MPCStats() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-neutral-950 px-6 py-14 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
          Ignite by the numbers
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {stats.map((s) => <StatItem key={s.label} stat={s} active={inView} />)}
        </motion.div>
      </div>
    </section>
  );
}
