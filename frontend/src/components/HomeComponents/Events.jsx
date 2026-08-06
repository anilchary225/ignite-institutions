import React, { useEffect, useRef, useState } from "react";
import { Calendar, MapPin } from "lucide-react";

const placeholderEventPhoto = (bg, label) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="380">
    <rect width="500" height="380" fill="${bg}"/>
    <rect x="0" y="0" width="500" height="380" fill="black" opacity="0.08"/>
    <text x="250" y="200" font-family="Arial, sans-serif" font-size="28" fill="#ffffff" text-anchor="middle" opacity="0.85">${label}</text>
  </svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

const eventsData = [
  {
    title: "Annual Day Celebrations",
    date: "15 Dec 2025",
    location: "Main Auditorium, Ignite Campus",
    tag: "Cultural",
    tagColor: "bg-red-100 dark:bg-red-500/10 text-red-700 dark:text-red-400",
    description:
      "A vibrant evening of performances, felicitations, and cultural showcases celebrating the achievements of our students over the year.",
    images: [
      placeholderEventPhoto("#dc2626", "Photo 1"),
      placeholderEventPhoto("#ea580c", "Photo 2"),
      placeholderEventPhoto("#c2410c", "Photo 3"),
      placeholderEventPhoto("#9a3412", "Photo 4"),
    ],
  },
  {
    title: "Inter-College Sports Meet",
    date: "3 Jan 2026",
    location: "Ignite Sports Complex",
    tag: "Sports",
    tagColor: "bg-green-100 dark:bg-green-700/10 text-green-700 dark:text-green-400",
    description:
      "Students competed across athletics, cricket, and volleyball in a day full of energy, teamwork, and school spirit.",
    images: [
      placeholderEventPhoto("#16a34a", "Photo 1"),
      placeholderEventPhoto("#15803d", "Photo 2"),
      placeholderEventPhoto("#166534", "Photo 3"),
      placeholderEventPhoto("#14532d", "Photo 4"),
    ],
  },
  {
    title: "Investiture Ceremony",
    date: "20 Jun 2026",
    location: "Ignite Junior College",
    tag: "Leadership",
    tagColor: "bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400",
    description:
      "Newly elected student council members were sworn in, marking the start of a year of leadership and responsibility.",
    images: [
      placeholderEventPhoto("#2563eb", "Photo 1"),
      placeholderEventPhoto("#1d4ed8", "Photo 2"),
      placeholderEventPhoto("#1e40af", "Photo 3"),
      placeholderEventPhoto("#1e3a8a", "Photo 4"),
    ],
  },
];

function PhotoStack({ images, autoShuffleMs = 2200 }) {
  const [order, setOrder] = useState(images.map((_, i) => i));
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setOrder((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    }, autoShuffleMs);
    return () => clearInterval(timer);
  }, [paused, autoShuffleMs]);

  const positionStyle = (position) => {
    const styles = [
      { transform: "translate(0px, 0px) rotate(0deg) scale(1)", zIndex: 40, opacity: 1 },
      { transform: "translate(14px, 12px) rotate(-4deg) scale(0.96)", zIndex: 30, opacity: 1 },
      { transform: "translate(26px, 24px) rotate(4deg) scale(0.92)", zIndex: 20, opacity: 1 },
      { transform: "translate(36px, 36px) rotate(-2deg) scale(0.88)", zIndex: 10, opacity: 0.9 },
    ];
    return styles[position] || styles[styles.length - 1];
  };

  return (
    <div
      className="relative w-full aspect-[4/3]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, imgIndex) => {
        const position = order.indexOf(imgIndex);
        const style = positionStyle(position);
        return (
          <img
            key={imgIndex}
            src={src}
            alt={`Event photo ${imgIndex + 1}`}
            style={{ transform: style.transform, zIndex: style.zIndex, opacity: style.opacity }}
            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white dark:border-neutral-800 transition-all duration-700 ease-in-out"
          />
        );
      })}
    </div>
  );
}

function EventCard({ event, reverse }) {
  return (
    <div
      className={`grid gap-8 md:gap-14 items-center ${
        reverse ? "md:grid-cols-[1fr_1fr]" : "md:grid-cols-[1fr_1fr]"
      }`}
    >
      <div className={reverse ? "md:order-2" : ""}>
        <PhotoStack images={event.images} />
      </div>

      <div className={reverse ? "md:order-1" : ""}>
        <span className={`inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${event.tagColor} mb-3`}>
          {event.tag}
        </span>
        <div className="flex items-center gap-2 text-xs font-semibold text-orange-500 mb-2">
          <Calendar size={13} />
          <span>{event.date}</span>
        </div>
        <h3 className="text-xl font-extrabold text-neutral-900 dark:text-white leading-snug">
          {event.title}
        </h3>
        <div className="mt-2 flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
          <MapPin size={12} />
          <span>{event.location}</span>
        </div>
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{event.description}</p>
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <section className="py-14 px-4 sm:px-8 sm:py-16 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-red-500 uppercase mb-2">
            Events
          </span>
          <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
            Life at IGNITE
          </h2>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            A glimpse into the moments, milestones, and memories made across campus.
          </p>
        </div>

        <div className="space-y-16">
          {eventsData.map((event, i) => (
            <EventCard key={i} event={event} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
