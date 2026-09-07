import React, { useEffect, useState } from "react";
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
      "/assets/images/events/Udbhava/3X7A3707.webp",
      "/assets/images/events/Vybhava/al29471_DSC03685.webp",
      "/assets/images/events/Vybhava/ARM02900.webp",
      "/assets/images/events/ADVAITHA/VIJ01873.webp",
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
      "/assets/images/events/sports/sports4.webp",
      "/assets/images/events/Sports Prize/DSC08103.webp",
      "/assets/images/events/sports/sports2.webp",
      "/assets/images/events/sports/sports5.webp",
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
      "/assets/images/events/falicitates_with_awards/iphone 2025/M Jagan Mohan Reddy3.webp",
      "/assets/images/events/falicitates_with_awards/iphone 2025/Neetu Abhishek.webp",
      "/assets/images/events/Vybhava/Copy of DSC01917.webp",
      "/assets/images/events/ADVAITHA/PRA00835.webp",
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
      { transform: "translate(8px, 7px) rotate(-2.5deg) scale(0.96)", zIndex: 30, opacity: 1 },
      { transform: "translate(15px, 14px) rotate(2.5deg) scale(0.92)", zIndex: 20, opacity: 0.95 },
      { transform: "translate(21px, 21px) rotate(-1.5deg) scale(0.88)", zIndex: 10, opacity: 0.85 },
    ];
    return styles[position] || styles[styles.length - 1];
  };

  return (
    <div
      className="relative mx-auto w-full max-w-[260px] aspect-[4/3] sm:max-w-[300px]"
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
            className="absolute inset-0 h-full w-full rounded-xl border border-neutral-200 object-cover transition-all duration-700 ease-in-out dark:border-neutral-800"
          />
        );
      })}
    </div>
  );
}

function EventCard({ event, reverse }) {
  return (
    <div data-aos="fade-up"
      className={`grid items-center gap-8 md:grid-cols-[0.8fr_1fr] md:gap-12`}
    >
      <div className={reverse ? "md:order-2" : ""}>
        <PhotoStack images={event.images} />
      </div>

      <div className={reverse ? "md:order-1" : ""}>
        <span className={`mb-3 inline-block rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest ${event.tagColor}`}>
          {event.tag}
        </span>
        <div className="mb-2 flex items-center gap-2 text-xs font-medium text-orange-500">
          <Calendar size={13} />
          <span>{event.date}</span>
        </div>
        <h3 className="text-xl font-semibold leading-snug text-neutral-900 dark:text-white">
          {event.title}
        </h3>
        <div className="mt-2 flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
          <MapPin size={12} />
          <span>{event.location}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">{event.description}</p>
      </div>
    </div>
  );
}

export default function Events() {
  return (
    <section className="px-4 py-14 transition-colors sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span data-aos="fade-up" className="mb-2 inline-block text-xs font-medium uppercase tracking-[0.25em] text-red-500">
            Events
          </span>
          <h2 data-aos="fade-up" className="text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">
            Life at IGNITE
          </h2>
          <p data-aos="fade-up" className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
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