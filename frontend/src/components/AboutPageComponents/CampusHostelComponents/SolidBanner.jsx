import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function SolidBanner({ text, bgColor = "bg-orange-500" }) {
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.set(".sb-text", { clipPath: "inset(0 100% 0 0)" });

      ScrollTrigger.create({
        trigger: scope.current,
        start: "top 75%",
        once: true,
        onEnter: () => {
          gsap.to(".sb-text", {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.4,
            ease: "power4.inOut",
          });
        },
      });
    },
    { scope, dependencies: [text] }
  );

  return (
    <section ref={scope} className={`${bgColor} py-20 px-6`}>
      <p className="sb-text max-w-3xl mx-auto text-center text-white text-lg sm:text-xl leading-relaxed">
        {text}
      </p>
    </section>
  );
}
