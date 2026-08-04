import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function SplitHero({
  title = "Day At IGNITE",
  imageLeft,
  imageRight,
  imageAltLeft = "",
  imageAltRight = "",
}) {
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.set(".split-hero-left", { xPercent: -8, opacity: 0 });
      gsap.set(".split-hero-right", { xPercent: 8, opacity: 0 });
      gsap.set(".split-hero-title", { y: 40, opacity: 0 });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(".split-hero-left", { xPercent: 0, opacity: 1, duration: 1 })
        .to(".split-hero-right", { xPercent: 0, opacity: 1, duration: 1 }, "<")
        .to(".split-hero-title", { y: 0, opacity: 1, duration: 0.8 }, "-=0.4");
    },
    { scope }
  );

  return (
    <section ref={scope} className="relative h-[480px] overflow-hidden grid grid-cols-2">
      <div className="split-hero-left relative h-full overflow-hidden">
        <img src={imageLeft} alt={imageAltLeft} className="w-full h-full object-cover" />
      </div>
      <div className="split-hero-right relative h-full overflow-hidden">
        <img src={imageRight} alt={imageAltRight} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-slate-900/45" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <div className="split-hero-title absolute bottom-10 left-6 sm:left-10">
        <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl drop-shadow">
          {title}
        </h1>
      </div>
    </section>
  );
}
