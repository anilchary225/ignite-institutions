import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function CenteredStatement({
  heading,
  headingColor = "text-emerald-600",
  text,
}) {
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.set(".cs-heading", { opacity: 0, scale: 0.9 });
      gsap.set(".cs-text", { opacity: 0, y: 16 });

      ScrollTrigger.create({
        trigger: scope.current,
        start: "top 82%",
        once: true,
        onEnter: () => {
          gsap
            .timeline({ defaults: { ease: "power3.out" } })
            .to(".cs-heading", { opacity: 1, scale: 1, duration: 0.7 })
            .to(".cs-text", { opacity: 1, y: 0, duration: 0.6 }, "-=0.3");
        },
      });
    },
    { scope, dependencies: [heading, text] }
  );

  return (
    <section ref={scope} className="max-w-3xl mx-auto px-6 py-16 text-center">
      <h2 className={`cs-heading font-display font-extrabold text-3xl sm:text-4xl mb-6 ${headingColor}`}>
        {heading}
      </h2>
      <p className="cs-text text-slate-600 dark:text-white leading-relaxed">{text}</p>
    </section>
  );
}
