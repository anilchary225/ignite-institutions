import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { RouteLink } from "../../router/BrowserRouter";

const cards = [
  {
    eyebrow: "Life at Ignite",
    title: "Hostel Accommodation",
    date: "Comfortable stay for outstation students",
    image: "https://placehold.co/600x400/f97316/ffffff?text=Hostel",
    href: "/about/campus-hostel-facilities",
    accent: "text-orange-500",
    tagBg: "bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400",
  },
  {
    eyebrow: "Life at Ignite",
    title: "Campus Facilities",
    date: "Modern labs, classrooms & smart boards",
    image: "https://placehold.co/600x400/16a34a/ffffff?text=Campus",
    href: "/about",
    accent: "text-green-700",
    tagBg: "bg-green-100 dark:bg-green-700/10 text-green-700 dark:text-green-400",
  },
  {
    eyebrow: "Life at Ignite",
    title: "Extra Curricular Activities",
    date: "Sports, fitness & recreational clubs",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Activities",
    href: "/about/daya-at-ignite",
    accent: "text-blue-500",
    tagBg: "bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400",
  },
  {
    eyebrow: "Life at Ignite",
    title: "Personality Development",
    date: "Workshops & seminars for holistic growth",
    image: "https://placehold.co/600x400/dc2626/ffffff?text=Personality",
    href: "/about/personality-development",
    accent: "text-red-500",
    tagBg: "bg-red-100 dark:bg-red-500/10 text-red-700 dark:text-red-400",
  },
];

function Card({ card }) {
  const [hovered, setHovered] = useState(false);

  return (
    <RouteLink
      to={card.href}
      className="group block cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
        <img
          src={card.image}
          alt={card.title}
          className={`w-full h-44 sm:h-52 object-cover transition-transform duration-500 ease-out ${
            hovered ? "scale-105" : "scale-100"
          }`}
        />
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`} />
      </div>

      <div className="mt-3 px-1">
        <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${card.tagBg} mb-2`}>
          {card.eyebrow}
        </span>

        <h3 className={`text-sm font-bold leading-snug transition-colors duration-200 ${hovered ? card.accent : "text-neutral-900 dark:text-white"}`}>
          {card.title}
        </h3>

        <div className="mt-2 flex items-center justify-between">
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            {card.date}
          </p>
          <span className={`inline-flex items-center gap-1 text-xs font-bold ${card.accent} transition-all duration-300 ${hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"}`}>
            Explore <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </RouteLink>
  );
}

export default function CardsHover() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-14 px-4 sm:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-2">
            Campus Life
          </span>
          <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
            Life at IGNITE
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {cards.map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
