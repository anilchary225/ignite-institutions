import React from "react";
import { useReveal } from "../hooks/useReveal";

export default function QuoteBanner({
  heading = "At IGNITE, every lesson goes beyond the textbook",
  subheading = "We shape students into strong individuals, ready for the future.",
  bgColor = "bg-orange-500",
}) {
  const scope = useReveal([heading, subheading]);

  return (
    <section ref={scope} className={`${bgColor} py-20 px-6 text-center sm:mb-20`}>
      <div className="max-w-4xl mx-auto">
        <h2 data-reveal className="font-display font-extrabold text-white text-3xl sm:text-4xl leading-snug">
          {heading}
        </h2>
        <p data-reveal className="mt-5 text-white/90 italic text-base sm:text-lg">
          {subheading}
        </p>
      </div>
    </section>
  );
}
