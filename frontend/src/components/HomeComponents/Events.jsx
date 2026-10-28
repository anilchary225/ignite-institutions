import React, { useEffect, useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, defaultViewport } from "../../animations/variants";
import { RouteLink } from "../../router/BrowserRouter";

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
    title: "Sankalpa 2026",
    date: "4–5 October 2026",
    location: "IGNITE",
    href: "/gallery/events/sankalpa-2026",
    tag: "Cultural",
    tagColor: "bg-red-100 dark:bg-red-500/10 text-red-700 dark:text-red-400",
    description:
      "Two days of celebration, bringing together lamp-lighting, student performances, and shared moments with the IGNITE community.",
    images: [
      "/assets/images/events/sankalpa_2026/sankalpa_2026_02.webp",
      "/assets/images/events/sankalpa_2026/sankalpa_2026_45.webp",
      "/assets/images/events/sankalpa_2026/sankalpa_2026_52.webp",
      "/assets/images/events/sankalpa_2026/sankalpa_2026_57.webp",
    ],
  },
  {
    title: "Investiture Day 2026",
    date: "31 August 2026",
    location: "Ignite Junior College",
    href: "/gallery/events/investiture-ceremony",
    tag: "Leadership",
    tagColor: "bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400",
    description:
      "Celebrating student leadership and responsibility through the investiture ceremony, with student leaders, staff, and memorable moments from the day.",
    images: [
      "/assets/images/events/investiture-ceremony_webp/investiture-ceremony_01.webp",
      "/assets/images/events/investiture-ceremony_webp/investiture-ceremony_09.webp",
      "/assets/images/events/investiture-ceremony_webp/investiture-ceremony_12.webp",
      "/assets/images/events/investiture-ceremony_webp/investiture-ceremony_15.webp",
    ],
  },
  {
    title: "Sports Fest 2026",
    date: "2026",
    location: "IGNITE",
    href: "/gallery/events/sports-fest-2026",
    tag: "Sports",
    tagColor: "bg-green-100 dark:bg-green-700/10 text-green-700 dark:text-green-400",
    description: "A celebration of sports and teamwork, featuring kabaddi, volleyball, chess, and prize-giving moments from Sports Fest 2026.",
    images: [
      "/assets/images/sports_2026/sports_2026_46.webp",
      "/assets/images/sports_2026/sports_2026_68.webp",
      "/assets/images/sports_2026/sports_2026_70.webp",
      "/assets/images/sports_2026/sports_2026_73.webp",
    ],
  },
];

function PhotoStack({ images, eventTitle, autoShuffleMs = 2200 }) {
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
            alt={`${eventTitle} — photo ${imgIndex + 1}`}
            loading="lazy"
            decoding="async"
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
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={`grid items-center gap-8 md:grid-cols-[0.8fr_1fr] md:gap-12`}
    >
      <div className={reverse ? "md:order-2" : ""}>
        <PhotoStack images={event.images} eventTitle={event.title} />
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
        <RouteLink to={event.href} className="mt-4 inline-flex text-sm font-semibold text-blue-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-blue-300">
          View {event.title} album →
        </RouteLink>
      </div>
    </motion.div>
  );
}

export default function Events() {
  return (
    <section className="px-4 py-14 transition-colors sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <span className="mb-2 inline-block text-xs font-medium uppercase tracking-[0.25em] text-red-500">
            Events
          </span>
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">
            Life at IGNITE
          </h2>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            A glimpse into the moments, milestones, and memories made across campus.
          </p>
        </motion.div>

        <div className="space-y-16">
          {eventsData.map((event, i) => (
            <EventCard key={i} event={event} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
