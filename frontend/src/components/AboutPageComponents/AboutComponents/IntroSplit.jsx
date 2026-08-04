import React from "react";
import { useReveal } from "../hooks/useReveal";

/**
 * IntroSplit — a text block next to an image, either order via `reverse`.
 * Use for intro copy, "What is X", "Why it matters", etc.
 */
export default function IntroSplit({
  heading,
  headingColor = "text-slate-900",
  paragraphs = [],
  imageSrc,
  imageAlt = "",
  imageSrcSecondary, // optional stacked second image (like the group photos)
  reverse = false,
}) {
  const scope = useReveal([paragraphs, imageSrc]);

  return (
    <section ref={scope} className="max-w-6xl mx-auto px-6 py-16">
      <div
        className={`grid md:grid-cols-2 gap-12 items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div data-reveal className={imageSrcSecondary ? "flex flex-col gap-4" : ""}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full rounded-lg object-cover aspect-[4/3]"
          />
          {imageSrcSecondary && (
            <img
              src={imageSrcSecondary}
              alt={imageAlt}
              className="w-full rounded-lg object-cover aspect-[4/3]"
            />
          )}
        </div>

        <div data-reveal>
          {heading && (
            <h2 className={`font-display font-extrabold text-3xl sm:text-4xl mb-5 ${headingColor}`}>
              {heading}
            </h2>
          )}
          <div className="space-y-4 ">
            {paragraphs.map((p, i) => (
              <p key={i} className="text-neutral-900 dark:text-white leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
