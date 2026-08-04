import React from "react";
import { useReveal } from "../hooks/useReveal";

export default function StatementBanner({
  heading = "Why It Matters",
  text,
  gradient = "bg-gradient-to-br from-emerald-500 to-emerald-800",
}) {
  const scope = useReveal([heading, text]);

  return (
    <section ref={scope} className={`${gradient} py-20 px-6 text-center`}>
      <div className="max-w-3xl mx-auto">
        <h2 data-reveal className="font-display font-extrabold text-white text-3xl sm:text-4xl mb-6">
          {heading}
        </h2>
        <p data-reveal className="text-white/90 leading-relaxed text-base sm:text-lg">
          {text}
        </p>
      </div>
    </section>
  );
}
