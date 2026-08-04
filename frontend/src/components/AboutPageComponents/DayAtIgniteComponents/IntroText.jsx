import React from "react";
import { useReveal } from "../hooks/useReveal";

export default function IntroText({ imageSrc, imageAlt = "", paragraphs = [] }) {
  const scope = useReveal([paragraphs, imageSrc]);

  return (
    <section ref={scope} className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          data-reveal
          src={imageSrc}
          alt={imageAlt}
          className="w-full rounded-lg object-cover aspect-[4/3]"
        />
        <div data-reveal className="space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-slate-600 dark:text-white leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
