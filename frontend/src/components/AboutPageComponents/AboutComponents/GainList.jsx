import React, { useRef } from "react";
import { Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_ITEMS = [
  "Self-awareness to recognize strengths and areas for improvement.",
  "Effective communication skills to confidently interact with peers and mentors.",
  "Emotional balance to face academic pressure with calm and clarity.",
  "Strong ethical grounding to make choices rooted in responsibility and integrity.",
  "Leadership qualities that prepare them for higher education, careers, and life beyond.",
];

export default function GainList({
  heading = "What Students Gain",
  headingColor = "text-emerald-600",
  items = DEFAULT_ITEMS,
  imageSrc,
  imageAlt = "",
}) {
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.set(".gain-heading", { y: 24, opacity: 0 });
      gsap.set(".gain-line", { scaleY: 0, transformOrigin: "top" });
      gsap.set(".gain-dot", { scale: 0 });
      gsap.set(".gain-text", { x: -16, opacity: 0 });
      gsap.set(".gain-image", { opacity: 0, x: 24 });

      ScrollTrigger.create({
        trigger: scope.current,
        start: "top 78%",
        once: true,
        onEnter: () => {
          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
          tl.to(".gain-heading", { y: 0, opacity: 1, duration: 0.6 })
            .to(".gain-line", { scaleY: 1, duration: items.length * 0.35, ease: "none" }, "-=0.1")
            .to(
              ".gain-dot",
              { scale: 1, duration: 0.4, stagger: items.length * 0.35 * 0.7 },
              "<"
            )
            .to(
              ".gain-text",
              { x: 0, opacity: 1, duration: 0.5, stagger: items.length * 0.35 * 0.7 },
              "<"
            )
            .to(".gain-image", { opacity: 1, x: 0, duration: 0.9 }, "-=0.6");
        },
      });
    },
    { scope, dependencies: [items] }
  );

  return (
    <section ref={scope} className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className={`gain-heading font-display font-extrabold text-3xl sm:text-4xl mb-10 ${headingColor}`}>
            {heading}
          </h2>

          <div className="relative pl-9">
            <div className="gain-line absolute left-[7px] top-1 bottom-1 w-0.5 bg-orange-300" />
            <ul className="space-y-7">
              {items.map((item, i) => (
                <li key={i} className="relative">
                  <span className="gain-dot absolute -left-9 top-0.5 w-4 h-4 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center">
                    <Check size={10} className="text-orange-500" strokeWidth={3} />
                  </span>
                  <p className="gain-text text-slate-700 dark:text-white leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <img
          src={imageSrc}
          alt={imageAlt}
          className="gain-image w-full rounded-lg object-cover aspect-[4/3]"
        />
      </div>
    </section>
  );
}
