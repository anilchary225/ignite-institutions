import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function DualImageHero({
  title = "Campus Hostel Facility",
  imageLeft,
  imageRight,
  imageAltLeft = "",
  imageAltRight = "",
}) {
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.set(".dih-clip", { clipPath: "inset(0 0 100% 0)" });
      gsap.set(".dih-title", { opacity: 0, letterSpacing: "0.3em" });

      gsap
        .timeline({ defaults: { ease: "power4.inOut" } })
        .to(".dih-clip", { clipPath: "inset(0 0 0% 0)", duration: 1.2, stagger: 0.15 })
        .to(
          ".dih-title",
          { opacity: 1, letterSpacing: "0em", duration: 1, ease: "power3.out" },
          "-=0.5"
        );
    },
    { scope }
  );

  return (
    <section ref={scope} className="relative h-[460px] overflow-hidden grid grid-cols-2">
      <div className="dih-clip relative h-full overflow-hidden">
        <img src={imageLeft} alt={imageAltLeft} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/25" />
      </div>
      <div className="dih-clip relative h-full overflow-hidden">
        <img src={imageRight} alt={imageAltRight} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <h1 className="dih-title font-display font-extrabold text-white text-3xl sm:text-5xl text-center drop-shadow-lg">
          {title}
        </h1>
      </div>
    </section>
  );
}
