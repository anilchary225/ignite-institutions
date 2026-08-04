import React from "react";
import { Check } from "lucide-react";
import { useReveal } from "../hooks/useReveal";

export default function IconFeatureRow({
  heading,
  headingColor = "text-emerald-600",
  subheading,
  subheadingColor = "text-slate-900",
  text,
  imageSrc,
  imageAlt = "",
  reverse = false,
}) {
  const scope = useReveal([text, imageSrc]);

  return (
    <section ref={scope} className="max-w-6xl mx-auto px-6 py-16">
      <div
        className={`grid md:grid-cols-2 gap-12 items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div data-reveal>
          <h2 className={`font-display font-extrabold text-3xl sm:text-4xl mb-8 ${headingColor}`}>
            {heading}
          </h2>

          {subheading && (
            <h3 className={`font-display dark:text-emerald-500 font-bold text-lg mb-3 ${subheadingColor}`}>
              {subheading}
            </h3>
          )}

          <div className="flex gap-3">
            <span className="icon-pop shrink-0 w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mt-1">
              <Check size={13} className="text-white" strokeWidth={3} />
            </span>
            <p className="text-slate-600 dark:text-white leading-relaxed">{text}</p>
          </div>
        </div>

        <img
          data-reveal
          src={imageSrc}
          alt={imageAlt}
          className="w-full rounded-lg object-cover aspect-[4/3]"
        />
      </div>
    </section>
  );
}
