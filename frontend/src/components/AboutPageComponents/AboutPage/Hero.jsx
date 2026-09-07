import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Hero({
  title,
  subtitle,
  eyebrow,
  backgroundImage,
  imageSrc,
  abstract,
}) {
  const scope = useRef(null);
  const heroImage = backgroundImage || imageSrc;

  useGSAP(
    () => {
      gsap.set(".ach-bg", { scale: 1.12 });
      gsap.set(".ach-title", { y: "115%" });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(".ach-bg", { scale: 1, duration: 1.6 }).to(
        ".ach-title",
        { y: "0%", duration: 1, stagger: 0.1 },
        "-=1.1"
      );
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      className="relative h-[380px] w-full overflow-hidden sm:h-[480px]">
      {/* Background photo */}
      <div
        className="ach-bg absolute inset-0 bg-cover bg-center blur-xs"
        style={{ backgroundImage: heroImage ? `url("${heroImage}")` : undefined }}
      />

      {/* Green-to-blue wash so the title stays legible over any photo */}
      <div
        className="absolute inset-0 bg-linear-to-br from-emerald-950/75 via-neutral-900/50 to-blue-950/75"
        aria-hidden="true"
      />

      {/* Optional abstract decoration, passed in from the page using this Hero */}
      {abstract && (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {abstract}
        </div>
      )}

      {/* Title centered on the image */}
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-xl sm:text-sm">
          {eyebrow}
        </span>
        <h1 className="font-display mt-5 text-4xl font-black tracking-tight text-white drop-shadow-sm sm:text-6xl overflow-hidden">
          <span className="ach-title block">{title}</span>
        </h1>
        <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export default Hero;
