import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    eyebrow: "Life at Ignite",
    title: "Hostel Accommodation",
    date: "Comfortable stay for outstation students",
    image: "https://placehold.co/600x400/f97316/ffffff?text=Hostel",
  },
  {
    eyebrow: "Life at Ignite",
    title: "Campus Facilities",
    date: "Modern labs, classrooms & smart boards",
    image: "https://placehold.co/600x400/16a34a/ffffff?text=Campus",
  },
  {
    eyebrow: "Life at Ignite",
    title: "Extra Curricular Activities",
    date: "Sports, fitness & recreational clubs",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Activities",
  },
  {
    eyebrow: "Life at Ignite",
    title: "Personality Development",
    date: "Workshops & seminars for holistic growth",
    image: "https://placehold.co/600x400/9333ea/ffffff?text=Personality",
  },
];

function Card({ card }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative overflow-hidden rounded-lg transition-all duration-300 ease-out"
      >
        <img
          src={card.image}
          alt={card.title}
          className={`w-full h-56 object-cover transition-transform duration-500 ease-out ${
            hovered ? "scale-105" : "scale-100"
          }`}
        />
      </div>

      <p className="mt-4 text-xs font-bold tracking-wide text-blue-600 uppercase">
        {card.eyebrow}
      </p>

      <h3 className="mt-2 text-lg font-semibold text-slate-900 leading-snug">
        {card.title}
      </h3>

      <div className="mt-2 flex items-center justify-between">
        <p className="text-xs font-medium text-slate-500 uppercase">
          {card.date}
        </p>

        <button
          type="button"
          className={`inline-flex items-center gap-1 text-sm font-bold text-blue-600 transition-all duration-500 ease-out ${
            hovered
              ? "opacity-100 translate-x-0 pointer-events-auto"
              : "opacity-0 translate-x-2 pointer-events-none"
          }`}
          aria-label={`Open ${card.title}`}
        >
          <span>Open</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default function CardsHover() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </div>
    </section>
  );
}