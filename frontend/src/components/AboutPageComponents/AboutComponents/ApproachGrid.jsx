import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_CARDS = [
  {
    title: "Building Confidence",
    desc: "We encourage students to express their thoughts clearly and participate actively in discussions, presentations, and group work.",
  },
  {
    title: "Emotional Growth",
    desc: "With the right mentorship, students learn how to manage stress, handle challenges, and bounce back stronger.",
  },
  {
    title: "Values & Integrity",
    desc: "We emphasize honesty, respect, and empathy — qualities that define character as much as achievements.",
  },
  {
    title: "Leadership Skills",
    desc: "Through both academic and co-curricular activities, we give students opportunities to take initiative, collaborate, and inspire others.",
  },
];

export default function ApproachGrid({
  heading = "Our Approach",
  headingColor = "text-emerald-600",
  cards = DEFAULT_CARDS,
}) {
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.set(".approach-heading", { y: 24, opacity: 0 });
      gsap.set(".approach-card", { y: 40, opacity: 0, scale: 0.96 });

      ScrollTrigger.create({
        trigger: scope.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap
            .timeline({ defaults: { ease: "power3.out" } })
            .to(".approach-heading", { y: 0, opacity: 1, duration: 0.7 })
            .to(
              ".approach-card",
              { y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.12 },
              "-=0.35"
            );
        },
      });
    },
    { scope, dependencies: [cards] }
  );

  return (
    <section ref={scope} className="max-w-6xl mx-auto px-6 py-16">
      <h2
        className={`approach-heading font-display font-extrabold text-3xl sm:text-4xl text-center mb-12 ${headingColor}`}
      >
        {heading}
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {cards.map((card) => (
          <div
            key={card.title}
            className="approach-card rounded-xl border border-slate-200 hover:border-emerald-700 p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="font-display font-bold text-emerald-700 text-lg mb-3">
              {card.title}
            </h3>
            <p className="text-slate-900 dark:text-white scale-3d  text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
