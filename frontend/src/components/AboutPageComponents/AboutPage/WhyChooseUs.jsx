import { useState } from "react";

const defaultReasons = [
  {
    title: "Proven Expertise",
    description: "Years of excellence in IIT-JEE and NEET coaching.",
  },
  {
    title: "Student-Centered Focus",
    description: "Small classes and tailored schedules for personalized guidance.",
  },
  {
    title: "Holistic Growth",
    description: "Equal emphasis on academics and extracurriculars for balanced development.",
  },
  {
    title: "World-Class Faculty",
    description: "Experienced educators committed to fostering student success.",
  },
];

export default function WhyChooseUs({
  heading = "Why Choose IGNITE Junior College?",
  reasons = defaultReasons,
  defaultHighlighted = 1,
}) {
  const [activeIndex, setActiveIndex] = useState(defaultHighlighted);

  return (
    <section className="bg-white px-6 py-16 text-center dark:bg-neutral-950 sm:px-12">
      <h2 className="text-4xl font-black text-emerald-600 sm:text-5xl">
        {heading}
      </h2>

      <div className="mx-auto mt-10 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, index) => {
          const active = index === activeIndex;
          return (
            <button
              key={reason.title}
              type="button"
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              className={`group relative overflow-hidden rounded-2xl border p-8 text-left shadow-sm transition-all duration-300 ${
                active
                  ? "border-orange-500 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30"
                  : "border-neutral-200 bg-gradient-to-br from-white to-neutral-100 text-neutral-900 dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-800 dark:text-white"
              }`}
            >
              {/* Diagonal shine sweep, top-left to bottom-right */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-[120%] -translate-y-[120%] rotate-45 bg-gradient-to-br from-transparent via-white/60 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:translate-x-[20%] group-hover:translate-y-[20%] group-hover:opacity-100"
                style={{ width: "60%", height: "220%" }}
              />

              <h3 className="relative text-xl font-bold">{reason.title}</h3>
              <p
                className={`relative mt-3 text-sm ${
                  active ? "text-white/90" : "text-neutral-600 dark:text-neutral-400"
                }`}
              >
                {reason.description}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}