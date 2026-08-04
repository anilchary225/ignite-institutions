import React, { useEffect, useRef, useState } from "react";
import { Calendar, MapPin } from "lucide-react";

// Inline SVG placeholder for event photos — no network request needed.
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

/**
 * PhotoStack — a reusable stacked-card photo widget.
 * Cards sit fanned out behind one another; every few seconds the back-most
 * card animates smoothly up to the front, looping continuously.
 */
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
            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white transition-all duration-700 ease-in-out"
          />
        );
      })}
    </div>
  );
}

function EventCard({ event, reverse }) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
        reverse ? "md:[direction:rtl]" : ""
      }`}
    >
      <div className={reverse ? "md:[direction:ltr]" : ""}>
        <PhotoStack images={event.images} />
      </div>

      <div className={reverse ? "md:[direction:ltr]" : ""}>
        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
          <Calendar size={16} />
          <span>{event.date}</span>
        </div>
        <h3 className="mt-3 text-2xl md:text-3xl font-extrabold text-slate-900">
          {event.title}
        </h3>
        <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
          <MapPin size={14} />
          <span>{event.location}</span>
        </div>
        <p className="mt-4 text-slate-600 leading-relaxed">{event.description}</p>
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-[0.3em] text-emerald-600 uppercase">
            Events
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">
            Life at Ignite
          </h2>
          <p className="mt-3 text-slate-500">
            A glimpse into the moments, milestones, and memories made across campus.
          </p>
        </div>

        <div className="mt-16 space-y-24">
          {eventsData.map((event, i) => (
            <EventCard key={i} event={event} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}