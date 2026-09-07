import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { reducedMotionQuery } from "../animations/gsapConfig";
import { revealUp, staggerReveal } from "../animations/gsapAnimations";

gsap.registerPlugin(ScrollTrigger);

function animateMotionSections(root) {
  const sections = gsap.utils.toArray(
    "section:not([data-motion-skip]):not([data-ignite-motion-ready])",
    root
  );
  sections.forEach((section) => {
    section.setAttribute("data-ignite-motion-ready", "true");
    revealUp(section, {
      scrollTrigger: {
        id: "ignite-motion-section",
        trigger: section,
        start: "top 88%",
        once: true,
      },
    });

    const cards = section.querySelectorAll("[data-motion-card]");
    if (cards.length) {
      gsap.set(cards, { autoAlpha: 0, y: 28, scale: 0.98 });
      staggerReveal(cards, {
        scrollTrigger: {
          id: "ignite-motion-cards",
          trigger: section,
          start: "top 82%",
          once: true,
        },
        duration: 0.7,
      });
    }
  });

  gsap
    .utils
    .toArray(
      "section h2:not([data-motion-skip]):not([data-ignite-motion-ready]), [data-motion-heading]:not([data-ignite-motion-ready])",
      root
    )
    .forEach((heading) => {
      heading.setAttribute("data-ignite-motion-ready", "true");
      revealUp(heading, {
        scrollTrigger: {
          id: "ignite-motion-heading",
          trigger: heading,
          start: "top 88%",
          once: true,
        },
      });
  });
}

export function useGsapMotion(scopeRef) {
  useLayoutEffect(() => {
    const root = scopeRef.current;
    if (!root) return undefined;
    const reduceMotion = window.matchMedia(reducedMotionQuery).matches;
    if (reduceMotion) {
      gsap.set(
        root.querySelectorAll(
          "section:not([data-motion-skip]), section h2, [data-motion-heading], [data-motion-card]"
        ),
        { clearProps: "all" }
      );
      return undefined;
    }

    const context = gsap.context(() => {
      animateMotionSections(root);
    }, root);
    const run = () => {
      context.add(() => {
        animateMotionSections(root);
        ScrollTrigger.refresh();
      });
    };
    const observer = new MutationObserver(run);
    observer.observe(root, { childList: true, subtree: true });
    context.add(() => observer.disconnect());
    return () => context.revert();
  }, [scopeRef]);
}
