import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function IntroDual({ imageSrc, imageAlt = "", paragraphs = [] }) {
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.set(".id-image", { opacity: 0, y: 24 });
      gsap.set(".id-para", { opacity: 0, y: 16 });

      ScrollTrigger.create({
        trigger: scope.current,
        start: "top 82%",
        once: true,
        onEnter: () => {
          gsap
            .timeline({ defaults: { ease: "power3.out" } })
            .to(".id-image", { opacity: 1, y: 0, duration: 0.8 })
            .to(".id-para", { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 }, "-=0.4");
        },
      });
    },
    { scope, dependencies: [paragraphs, imageSrc] }
  );

  return (
    <section ref={scope} className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="id-image w-full rounded-lg object-cover aspect-[16/10]"
        />
        <div className="space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="id-para text-slate-600 dark:text-white leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
