import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero({
  title = "Personality Development",
  imageSrc,
  imageAlt = "Students in a classroom session",
}) {
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.set(".pd-hero-title", { y: "115%" });
      gsap.set(".pd-hero-bg", { scale: 1.12 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(".pd-hero-bg", { scale: 1, duration: 1.6 }).to(
        ".pd-hero-title",
        { y: "0%", duration: 1, stagger: 0.1 },
        "-=1.1"
      );
    },
    { scope }
  );

  return (
    <section ref={scope} className="relative h-[420px] overflow-hidden">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="pd-hero-bg absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-slate-900/30" />
      <div className="relative h-full max-w-6xl mx-auto px-6 flex items-center">
        <h1 className="font-display font-extrabold text-white text-4xl sm:text-5xl overflow-hidden">
          <span className="pd-hero-title block">{title}</span>
        </h1>
      </div>
    </section>
  );
}
