import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

/**
 * AltRow — image and text side by side, alternating which side the image
 * sits on. Image slides in from its own side; text fades up right after.
 */
export default function AltRow({
  heading,
  headingColor = "text-emerald-600",
  text,
  imageNode, // pass a rendered image/inset component instead of a bare <img>
  imageSrc,
  imageAlt = "",
  reverse = false,
}) {
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.set(".altrow-image", { x: reverse ? 40 : -40, opacity: 0 });
      gsap.set(".altrow-text", { y: 24, opacity: 0 });

      ScrollTrigger.create({
        trigger: scope.current,
        start: "top 82%",
        once: true,
        onEnter: () => {
          gsap
            .timeline({ defaults: { ease: "power3.out" } })
            .to(".altrow-image", { x: 0, opacity: 1, duration: 0.8 })
            .to(".altrow-text", { y: 0, opacity: 1, duration: 0.7 }, "-=0.45");
        },
      });
    },
    { scope, dependencies: [text, imageSrc, reverse] }
  );

  return (
    <section ref={scope} className="max-w-6xl mx-auto px-6 py-14">
      <div
        className={`grid md:grid-cols-2 gap-12 items-center ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="altrow-image">
          {imageNode || (
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full rounded-lg object-cover aspect-[4/3]"
            />
          )}
        </div>

        <div className="altrow-text">
          <h2 className={`font-display font-extrabold text-3xl sm:text-4xl mb-4 ${headingColor}`}>
            {heading}
          </h2>
          <p className="text-slate-600 dark:text-white leading-relaxed">{text}</p>
        </div>
      </div>
    </section>
  );
}
