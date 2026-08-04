import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function CircleInsetImage({
  mainImage,
  mainAlt = "",
  insetImage,
  insetAlt = "",
  borderColor = "border-orange-500",
}) {
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.set(".cii-main", { opacity: 0, scale: 0.94 });
      gsap.set(".cii-inset", { scale: 0, opacity: 0 });

      ScrollTrigger.create({
        trigger: scope.current,
        start: "top 82%",
        once: true,
        onEnter: () => {
          gsap
            .timeline({ defaults: { ease: "power3.out" } })
            .to(".cii-main", { opacity: 1, scale: 1, duration: 0.8 })
            .to(".cii-inset", { scale: 1, opacity: 1, duration: 0.7, ease: "back.out(1.7)" }, "-=0.25");
        },
      });
    },
    { scope }
  );

  return (
    <div ref={scope} className={`relative rounded-lg overflow-visible border-4 ${borderColor}`}>
      <img src={mainImage} alt={mainAlt} className="cii-main w-full rounded-md object-cover aspect-[4/3]" />
      {insetImage && (
        <div className="cii-inset absolute inset-0 m-auto w-[46%] aspect-square rounded-full overflow-hidden border-4 border-white shadow-xl">
          <img src={insetImage} alt={insetAlt} className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
}
