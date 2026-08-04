import React from "react";
import { useReveal } from "../hooks/useReveal";

export default function TwoColFeature({
  heading = "A Balanced Routine",
  headingColor = "text-emerald-600",
  columns = [],
}) {
  const scope = useReveal([columns]);

  return (
    <section ref={scope} className="max-w-6xl mx-auto px-6 py-16">
      <h2
        data-reveal
        className={`font-display font-extrabold text-3xl sm:text-4xl text-center mb-14 ${headingColor}`}
      >
        {heading}
      </h2>

      <div className="grid sm:grid-cols-2 gap-10">
        {columns.map((col) => (
          <div key={col.title} data-reveal>
            <h3 className="font-display font-extrabold text-orange-500 text-2xl mb-3">
              {col.title}
            </h3>
            <p className="text-slate-600 dark:text-white leading-relaxed">{col.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
