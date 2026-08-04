import React, { useRef } from "react";
import { Heart, Users } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ICONS = { heart: Heart, users: Users };

const DEFAULT_ITEMS = [
  {
    icon: "heart",
    title: "Respect for Beliefs",
    text: "At IGNITE, we celebrate diversity and honor all beliefs. During special festivals and occasions, students are welcomed to observe their religious practices with respect and ease.",
  },
  {
    icon: "users",
    title: "Moments That Matter",
    text: "From birthday celebrations to shared laughter and lifelong friendships, IGNITE is a place where you will Live, Laugh, Love — and form memories that last long after you've carved your path forward.",
  },
];

export default function TimelineBanner({
  heading = "Embracing Tradition & Togetherness",
  bgColor = "bg-orange-500",
  items = DEFAULT_ITEMS,
}) {
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.set(".tl-heading", { y: 24, opacity: 0 });
      gsap.set(".tl-line", { scaleY: 0, transformOrigin: "top" });
      gsap.set(".tl-dot", { scale: 0 });
      gsap.set(".tl-card", { x: -24, opacity: 0 });

      ScrollTrigger.create({
        trigger: scope.current,
        start: "top 78%",
        once: true,
        onEnter: () => {
          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
          tl.to(".tl-heading", { y: 0, opacity: 1, duration: 0.6 })
            .to(".tl-line", { scaleY: 1, duration: items.length * 0.5, ease: "none" }, "-=0.1")
            .to(".tl-dot", { scale: 1, duration: 0.4, stagger: items.length * 0.5 * 0.7 }, "<")
            .to(".tl-card", { x: 0, opacity: 1, duration: 0.6, stagger: items.length * 0.5 * 0.7 }, "<");
        },
      });
    },
    { scope, dependencies: [items] }
  );

  return (
    <section ref={scope} className={`${bgColor} py-20 px-6`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="tl-heading font-display font-extrabold text-white text-3xl sm:text-4xl text-center mb-14">
          {heading}
        </h2>

        <div className="relative pl-14">
          <div className="tl-line absolute left-[23px] top-2 bottom-2 w-0.5 bg-white/60" />

          <div className="space-y-8">
            {items.map((item) => {
              const Icon = ICONS[item.icon] || Heart;
              return (
                <div key={item.title} className="relative">
                  <span className="tl-dot absolute -left-14 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow">
                    <Icon size={18} className="text-orange-500" />
                  </span>
                  <div className="tl-card bg-white rounded-xl p-6 sm:p-7">
                    <h3 className="font-display font-bold text-slate-900 text-xl mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
