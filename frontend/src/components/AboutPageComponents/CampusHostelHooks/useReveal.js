import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * useReveal — fades/slides up every [data-reveal] child of the returned
 * ref as it scrolls into view, in DOM order, once.
 */
export function useReveal(deps = []) {
  const scope = useRef(null);

  useGSAP(
    () => {
      const targets = gsap.utils.toArray("[data-reveal]", scope.current);
      if (!targets.length) return;

      gsap.set(targets, { y: 36, opacity: 0 });

      ScrollTrigger.batch(targets, {
        start: "top 85%",
        onEnter: (batch) =>
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.12,
          }),
        once: true,
      });
    },
    { scope, dependencies: deps }
  );

  return scope;
}
