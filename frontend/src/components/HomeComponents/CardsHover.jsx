import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { RouteLink } from "../../router/BrowserRouter";
import ScrollRevealText from "./ScrollRevealText";
import { staggerContainer, cardReveal, defaultViewport } from "../../animations/variants";

const cards = [
  {
    eyebrow: "Life at Ignite",
    title: "Campus Facilities",
    date: "Modern labs, classrooms & smart boards",
    image: "/assets/images/events/Classrooms/DSC02172.webp",
    href: "/about",
    accent: "text-green-700",
    tagBg: "bg-green-100 dark:bg-green-700/10 text-green-700 dark:text-green-400",
  },
  {
    eyebrow: "Life at Ignite",
    title: "Extra Curricular Activities",
    date: "Sports, fitness & recreational clubs",
    image: "/assets/images/events/sports/sports4.webp",
    href: "/about/daya-at-ignite",
    accent: "text-blue-500",
    tagBg: "bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400",
  },
  {
    eyebrow: "Life at Ignite",
    title: "Personality Development",
    date: "Workshops & seminars for holistic growth",
    image: "/assets/images/events/Yoga/yoga13.webp",
    href: "/about/personality-development",
    accent: "text-red-500",
    tagBg: "bg-red-100 dark:bg-red-500/10 text-red-700 dark:text-red-400",
  },
  {
    eyebrow: "Life at Ignite",
    title: "Hostel Accommodation",
    date: "Comfortable stay for outstation students",
    image: "/assets/images/events/DINNING/MESS  (3).webp",
    href: "/about/campus-hostel-facilities",
    accent: "text-orange-500",
    tagBg: "bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400",
  },
];

function Card({ card }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardReveal}
      whileHover={{ y: -6, transition: { duration: 0.28 } }}
      className="h-full"
    >
      <RouteLink
        to={card.href}
        className="group block cursor-pointer h-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/20 bg-white/35 shadow-[0_18px_50px_rgba(15,23,42,0.14)] backdrop-blur-2xl transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-white/5 h-full flex flex-col justify-between">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70" />

          <div className="relative h-52 sm:h-56 overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
                hovered ? "scale-110" : "scale-100"
              }`}
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/20 to-transparent transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-70"}`} />
          </div>

          <div className="relative -mt-8 px-4 pb-5">
            <div className="rounded-[1.5rem] border border-white/25 bg-white/70 p-4 shadow-[0_12px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/40">
              <span className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${card.tagBg} mb-3`}>
                {card.eyebrow}
              </span>

              <h3 className={`text-sm font-bold leading-snug transition-colors duration-200 ${hovered ? card.accent : "text-neutral-900 dark:text-white"}`}>
                {card.title}
              </h3>

              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="text-xs text-neutral-600 dark:text-neutral-300">
                  {card.date}
                </p>
                <span className={`inline-flex items-center gap-1 text-xs font-bold ${card.accent} transition-all duration-300 ${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}`}>
                  Explore <ArrowRight size={12} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </RouteLink>
    </motion.div>
  );
}

export default function CardsHover() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-14 px-4 sm:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-2">
            <ScrollRevealText text="Campus Life" className="inline-block" />
          </span>
          <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
            <ScrollRevealText as="span" text="Life at IGNITE" className="inline-block" />
          </h2>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
