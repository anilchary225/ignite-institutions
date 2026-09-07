import React, { useState } from "react";
import {
  Sparkles,
  Users,
  Brain,
  Heart,
  Trophy,
  Smile,
  Activity,
} from "lucide-react";
import Hero from "./AboutPage/Hero";

/* -------------------------------------------------------------------------- */
/*  Placeholder art — inline base64 SVG data URIs (no external image calls)   */
/* -------------------------------------------------------------------------- */

const toDataUri = (svg) =>
  `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;

/**
 * Generates a soft linear tile with a big centered glyph.
 * `variant` picks the green/blue mix so every category reads as part of
 * one family while still feeling distinct.
 */
function placeholder(glyph, variant = "green") {
  const stops = {
    green: ["#0f5132", "#16a34a", "#86efac"],
    blue: ["#1e3a8a", "#2563eb", "#93c5fd"],
    teal: ["#0f5132", "#0d9488", "#5eead4"],
    indigo: ["#1e3a8a", "#4f46e5", "#a5b4fc"],
  }[variant];

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${stops[0]}"/>
        <stop offset="55%" stop-color="${stops[1]}"/>
        <stop offset="100%" stop-color="${stops[2]}"/>
      </linearGradient>
    </defs>
    <rect width="800" height="600" fill="url(#g)"/>
    <circle cx="90" cy="510" r="140" fill="#ffffff" opacity="0.07"/>
    <circle cx="740" cy="70" r="180" fill="#ffffff" opacity="0.06"/>
    <text x="400" y="345" font-size="200" text-anchor="middle" font-family="Segoe UI Emoji, Apple Color Emoji, sans-serif">${glyph}</text>
  </svg>`;
  return toDataUri(svg);
}

/**
 * Wide banner background for the page hero — a green/blue campus-life
 * collage stand-in (soft diagonal field + scattered activity glyphs).
 * Swap HERO_IMAGE for a real photo whenever one is ready.
 */
function heroPlaceholder() {
  const glyphs = ["🏏", "♟️", "🏸", "💃", "🏓", "🕹️"];
  const positions = [
    [140, 130],
    [1460, 150],
    [230, 560],
    [1380, 590],
    [760, 110],
    [820, 610],
  ];
  const scattered = glyphs
    .map(
      (g, i) =>
        `<text x="${positions[i][0]}" y="${positions[i][1]}" font-size="80" opacity="0.16" text-anchor="middle" font-family="Segoe UI Emoji, Apple Color Emoji, sans-serif">${g}</text>`
    )
    .join("");

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="700" viewBox="0 0 1600 700">
    <defs>
      <linearGradient id="hero-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#0f5132"/>
        <stop offset="45%" stop-color="#0d9488"/>
        <stop offset="100%" stop-color="#1e3a8a"/>
      </linearGradient>
    </defs>
    <rect width="1600" height="700" fill="url(#hero-g)"/>
    <circle cx="1500" cy="80" r="260" fill="#ffffff" opacity="0.05"/>
    <circle cx="60" cy="640" r="220" fill="#ffffff" opacity="0.05"/>
    ${scattered}
  </svg>`;
  return toDataUri(svg);
}

const HERO_IMAGE = heroPlaceholder();

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const FITNESS = {
  title: "Zumba",
  copy:
    "Energize your day with fun and engaging Zumba sessions. It's a great way to stay active, improve fitness, and enjoy exercise with friends.",
  img: "/assets/images/events/Zumba/DSC05031.webp",
};

const OUTDOOR = [
  {
    title: "Cricket",
    copy:
      "Enjoy competitive and friendly cricket sessions while developing teamwork, coordination, and sportsmanship.",
    img: "/assets/images/events/sports/sports4.webp",
  },
  {
    title: "Volleyball",
    copy: "Build communication, teamwork, and agility through exciting volleyball games.",
    img: "/assets/images/events/sports/sports9.webp",
  },
  {
    title: "Badminton",
    copy:
      "Our outdoor badminton facilities give students an opportunity to stay active while improving speed, reflexes, and coordination.",
    img: "/assets/images/events/Sports Meet/DSC00474.webp",
  },
  {
    title: "Pickleball",
    copy:
      "Try one of the fastest-growing racket sports. Pickleball combines fun, fitness, quick reactions, and friendly competition.",
    img: "/assets/images/events/sports/sports5.webp",
  },
  {
    title: "Football",
    copy: "Build coordination, stamina, and teamwork through energetic football matches.",
    img: "/assets/images/events/Sports Meet/DSC05170.webp",
  },
  {
    title: "Handball",
    copy: "Improve speed, passing, and teamwork through fast-paced handball games.",
    img: "/assets/images/events/Sports Meet/DSC04791.webp",
  },
];

const INDOOR = [
  {
    title: "Chess",
    copy: "Challenge your mind, develop strategic thinking, and sharpen concentration through chess.",
    img: "/assets/images/events/sports/IMG_9648.webp",
  },
  {
    title: "Table Tennis",
    copy: "Enjoy fast-paced table tennis while improving coordination, reflexes, and focus.",
    img: "/assets/images/events/sports/DSC05602.webp",
  },
  {
    title: "Foosball",
    copy: "Take a quick break and enjoy competitive foosball matches with friends.",
    img: "/assets/images/events/sports/DSC00137.webp",
  },
  {
    title: "Carroms",
    copy:
      "A classic indoor favorite that brings students together for friendly competition, precision, and fun.",
    img: "/assets/images/events/sports/DSC00213.webp",
  },
];

const TECH = [
  {
    title: "Air Hockey & Arcade",
    copy:
      "Enjoy our arcade and air hockey zone for fast-paced entertainment and friendly challenges between study sessions.",
    img: "/assets/images/events/sports/IMG_9664.webp",
  },
  {
    title: "VR Cricket",
    copy:
      "Experience cricket in an exciting virtual environment. VR cricket combines technology, entertainment, and sport for a unique recreational experience.",
    img: "/assets/images/events/Vybhava/ARM02855.webp",
  },
];

const CHILDREN_GAMES = [
  {
    title: "Ring Toss",
    copy:
      "A fun precision game that helps children improve focus, hand-eye coordination, and patience while enjoying friendly play.",
    img: "/assets/images/events/Outdoor exhibits/DSC00875.webp",
  },
  {
    title: "Ball Catch",
    copy:
      "An active group game that builds reaction time, teamwork, and confidence through simple, engaging play.",
    img: "/assets/images/events/Outdoor exhibits/DSC00877.webp",
  },
  {
    title: "Mini Hurdles",
    copy:
      "Kids can enjoy light physical movement with mini hurdles that support balance, agility, and coordination.",
    img: "/assets/images/events/Outdoor exhibits/DSC00882.webp",
  },
  {
    title: "Target Throw",
    copy:
      "A playful target game that encourages aim, focus, and steady movement in a child-friendly format.",
    img: "/assets/images/events/Outdoor exhibits/DSC00887.webp",
  },
];

const BENEFITS = [
  { icon: Activity, text: "Stay physically active" },
  { icon: Sparkles, text: "Refresh and recharge between studies" },
  { icon: Users, text: "Develop teamwork and communication" },
  { icon: Brain, text: "Improve concentration and coordination" },
  { icon: Heart, text: "Build friendships and social connections" },
  { icon: Trophy, text: "Develop sportsmanship and a healthy competitive spirit" },
  { icon: Smile, text: "Maintain a balanced lifestyle" },
];

/* -------------------------------------------------------------------------- */
/*  Section 1 — Hero / Fitness & Wellness (split reveal on hover)             */
/* -------------------------------------------------------------------------- */

function FitnessWellness() {
  const [active, setActive] = useState(false);

  return (
    <section data-aos="fade-up" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <SectionEyebrow data-aos="fade-up" icon="🏃" label="Fitness & Wellness" tone="green" />

      <div
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className="group relative mt-8 grid overflow-hidden rounded-[28px] border border-emerald-900/10 bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)] dark:border-emerald-400/10 dark:bg-neutral-900 md:grid-cols-2"
      >
        <div data-aos="fade-in" className="relative h-64 overflow-hidden md:h-full">
          <img
            src={FITNESS.img}
            alt={FITNESS.title}
            className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
              active ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-linear-to-t from-emerald-950/40 via-transparent to-transparent" />
        </div>

        <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
          <h3
            className={`font-display text-3xl font-semibold tracking-tight transition-colors duration-300 md:text-4xl ${
              active
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-neutral-900 dark:text-neutral-50"
            }`}
          >
            {FITNESS.title}
          </h3>

          <div
            className={`grid transition-all duration-500 ease-out ${
              active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <p className="overflow-hidden text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
              {FITNESS.copy}
            </p>
          </div>

          {!active && (
            <p className="text-sm text-neutral-400 dark:text-neutral-500">
              Explore the details
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section 2 — Outdoor Sports (tab list, hover swaps the showcase image)     */
/* -------------------------------------------------------------------------- */

function OutdoorSports() {
  const [active, setActive] = useState(0);
  const current = OUTDOOR[active];

  return (
    <section data-aos="fade-in" className="border-y border-sky-900/5 bg-sky-50/60 dark:border-sky-400/10 dark:bg-sky-950/20">
      <div data-aos="fade-up" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionEyebrow icon="🏏" label="Outdoor Sports" tone="blue" />

        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1.3fr] md:gap-4">
          <ul className="flex flex-col divide-y divide-sky-900/10 overflow-hidden rounded-2xl border border-sky-900/10 bg-white dark:divide-sky-400/10 dark:border-sky-400/10 dark:bg-neutral-900">
            {OUTDOOR.map((item, i) => (
              <li data-aos="fade-up" key={item.title}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-200 ${
                    active === i
                      ? "bg-blue-600 text-white"
                      : "text-neutral-700 hover:bg-sky-100/70 dark:text-neutral-300 dark:hover:bg-sky-400/5"
                  }`}
                >
                  <span className="font-display text-lg font-medium">
                    {item.title}
                  </span>
                  <span
                    className={`text-xs uppercase tracking-widest transition-opacity ${
                      active === i ? "opacity-80" : "opacity-0"
                    }`}
                  >
                    viewing
                  </span>
                </button>
                <div
                  className={`grid px-6 transition-all duration-300 ease-out ${
                    active === i
                      ? "grid-rows-[1fr] pb-5 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  } md:hidden`}
                >
                  <p className="overflow-hidden pt-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {item.copy}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="relative hidden h-[420px] flex-col overflow-hidden rounded-2xl border border-sky-900/10 bg-white shadow-sm dark:border-sky-400/10 dark:bg-neutral-900 md:flex">
            <div className="relative h-64 shrink-0">
              <img
                key={current.img}
                src={current.img}
                alt={current.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1 overflow-hidden p-6">
              <h4 data-aos="fade-up" className="font-display text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                {current.title}
              </h4>
              <p data-aos="fade-up" className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
                {current.copy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section 3 — Indoor Games (grid, each card expands in place on hover)      */
/* -------------------------------------------------------------------------- */

function IndoorGameCard({ item }) {
  const [active, setActive] = useState(false);
  return (
    <div
      data-aos="fade-up"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="group flex flex-col overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-emerald-400/10 dark:bg-neutral-900"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className={`h-full w-full object-cover transition-all duration-500 ${
            active ? "scale-110 brightness-105" : "scale-100 brightness-90"
          }`}
        />
      </div>
      <div className="flex flex-col gap-2 p-5">
        <h4
          className={`font-display text-lg font-semibold transition-colors duration-300 ${
            active ? "text-teal-600 dark:text-teal-400" : "text-neutral-900 dark:text-neutral-50"
          }`}
        >
          {item.title}
        </h4>
        <div
          className={`grid transition-all duration-400 ease-out ${
            active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <p className="overflow-hidden text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {item.copy}
          </p>
        </div>
      </div>
    </div>
  );
}

function IndoorGames() {
  return (
    <section data-aos="fade-up" className="mx-auto  max-w-6xl px-6 py-16 md:py-24">
      <SectionEyebrow icon="♟️" label="Indoor Games" tone="teal" />
      <div className="mt-8 grid grid-cols-2 items-start gap-4 md:grid-cols-4">
        {INDOOR.map((item) => (
          <IndoorGameCard  key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section 4 — Technology & Recreation (large panels, overlay reveal)        */
/* -------------------------------------------------------------------------- */

function TechPanel({ item }) {
  const [active, setActive] = useState(false);
  return (
    <div
      
      data-aos="fade-up"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      className="relative h-72 overflow-hidden rounded-2xl border border-indigo-900/10 dark:border-indigo-400/10"
    >
      <img
        src={item.img}
        alt={item.title}
        className={`h-full w-full object-cover transition-transform duration-700 ${
          active ? "scale-110" : "scale-100"
        }`}
      />
      <div
        className={`absolute inset-0 flex flex-col justify-end bg-linear-to-t from-indigo-950/90 via-indigo-950/30 to-transparent p-6 transition-all duration-300 ${
          active ? "from-indigo-950/95" : ""
        }`}
      >
        <h4 data-aos="fade-up" className="font-display text-xl font-semibold text-white">
          {item.title}
        </h4>
        <div
          className={`grid transition-all duration-400 ease-out ${
            active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <p data-aos="fade-up" className="overflow-hidden pt-2 text-sm leading-relaxed text-indigo-100">
            {item.copy}
          </p>
        </div>
      </div>
    </div>
  );
}

function TechRecreation() {
  return (
    <section data-aos="fade-in" className="border-y border-indigo-900/5 bg-indigo-50/50 dark:border-indigo-400/10 dark:bg-indigo-950/20">
      <div data-aos="fade-up" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionEyebrow icon="🎮" label="Technology & Recreation" tone="indigo" />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {TECH.map((item) => (
            <TechPanel key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChildrenGames() {
  return (
    <section data-aos="fade-in" className="border-y border-amber-900/5 bg-amber-50/50 dark:border-amber-400/10 dark:bg-amber-950/20">
      <div data-aos="fade-up" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionEyebrow icon="🧒" label="Children Games" tone="teal" />
        <div data-aos="fade-up" className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-300">
          A child-focused game area using images from the Outdoor exhibits folder, designed with the same card UI.
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {CHILDREN_GAMES.map((item) => (
            <TechPanel key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Small shared bits                                                         */
/* -------------------------------------------------------------------------- */

function SectionEyebrow({ icon, label, tone }) {
  const tones = {
    green: "border-emerald-600/20 bg-emerald-600/10 text-emerald-700 dark:text-emerald-400",
    blue: "border-blue-600/20 bg-blue-600/10 text-blue-700 dark:text-blue-400",
    teal: "border-teal-600/20 bg-teal-600/10 text-teal-700 dark:text-teal-400",
    indigo: "border-indigo-600/20 bg-indigo-600/10 text-indigo-700 dark:text-indigo-400",
  }[tone];

  return (
    <span data-aos="fade-right"
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium ${tones}`}
    >
      <span data-aos="zoom-in" className="text-base leading-none">{icon}</span>
      {label}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero — full-bleed background image, title centered on top of it           */
/* -------------------------------------------------------------------------- */

// function ActivitiesHero({
//   title = "Extra Curricular Activities",
//   eyebrow = "Ignite Beyond the Classroom",
//   backgroundImage = HERO_IMAGE,
// }) {
//   return (
//     <section className="relative h-[380px] w-full overflow-hidden sm:h-[480px]">
//       {/* Background photo */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       />

//       {/* Green-to-blue wash so the title stays legible over any photo */}
//       <div
//         className="absolute inset-0 bg-linear-to-br from-emerald-950/75 via-neutral-900/50 to-blue-950/75"
//         aria-hidden="true"
//       />

//       {/* Title centered on the image */}
//       <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
//         <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:text-sm">
//           {eyebrow}
//         </span>
//         <h1 className="font-display mt-5 text-4xl font-black tracking-tight text-white drop-shadow-sm sm:text-6xl">
//           {title}
//         </h1>
//         <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
//           Sports, fitness, indoor games & recreation for a well-rounded
//           campus life.
//         </p>
//       </div>
//     </section>
//   );
// }

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function ExtraCurricularPage() {
  return (
    <div className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      {/* <ActivitiesHero /> */}
      <Hero
      title = "Extra Curricular Activities"
      eyebrow = "Ignite Beyond the Classroom"
      backgroundImage = "/assets/images/events/Sports Meet/SPORTS MEET ASSEMBLE (2).webp"
      subtitle={'Sports, fitness, indoor games & recreation for a well-rounded campus life.'}
      />

      {/* Beyond Academics intro */}
      <section className="mx-auto max-w-6xl px-6 pt-16 md:pb-4">
        <span data-aos="fade-up" className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
          Campus Life
        </span>
        <h1 data-aos="fade-up" className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
          Beyond academics
        </h1>
        <p data-aos="fade-up" className="mt-3 text-lg font-medium text-neutral-500 dark:text-neutral-400 md:text-xl">
          Learn. Play. Connect. Grow.
        </p>

        <p data-aos="fade-up" className="mt-6 text-[17px] leading-relaxed text-neutral-600 dark:text-neutral-300">
          We believe education is about more than academics. A healthy and engaging
          campus environment helps students{" "}
          <span className="font-medium text-neutral-900 dark:text-white">
            stay active, reduce stress, build confidence, develop teamwork, and
            enjoy their time outside the classroom
          </span>
          .
        </p>
        <p data-aos="fade-up" className="mt-4 text-[17px] leading-relaxed text-neutral-600 dark:text-neutral-300">
          Our institution provides a wide range of{" "}
          <span className="font-medium text-neutral-900 dark:text-white">
            sports, fitness, indoor games, and recreational activities
          </span>
          , giving students plenty of opportunities to refresh their minds and stay
          active.
        </p>
      </section>

      <FitnessWellness />
      <OutdoorSports />
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <IndoorGames />
      </section>
      <TechRecreation />
      <ChildrenGames />

      {/* Thrive summary */}
      <section data-aos="fade-in" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 data-aos="fade-up" className="font-display text-center text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 md:text-4xl">
          🌟 A Campus Where Students Can Thrive
        </h2>
        <p data-aos="fade-up" className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-relaxed text-neutral-600 dark:text-neutral-400">
          From{" "}
          <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
            cricket and badminton to chess and carroms, from Zumba and
            pickleball to VR cricket and arcade games
          </strong>
          , our extracurricular facilities offer something for everyone.
        </p>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2">
          {BENEFITS.map(({ icon: Icon, text }) => (
            <div
              data-aos="fade-up"
              key={text}
              className="flex items-center gap-3 rounded-xl border border-neutral-900/5 bg-linear-to-r from-emerald-600/5 to-blue-600/5 px-4 py-3 dark:border-white/5"
            >
              <span data-aos="zoom-in" className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-linear-to-br from-blue-200 to-blue-600 text-white">
                <Icon size={16} strokeWidth={2.25} />
              </span>
              <span data-aos="zoom-in" className="text-[15px] text-neutral-700 dark:text-neutral-300">
                {text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Closing banner */}
      <section data-aos="fade-in" className="relative overflow-hidden bg-linear-to-br from-blue-400 to-blue-700 px-6 py-16 text-center md:py-20">
        <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-16 -right-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <h2 data-aos="fade-up" className="font-display relative text-2xl font-bold text-white md:text-4xl">
          Balance Your Studies With Life
        </h2>
        <p data-aos="fade-up" className="relative mx-auto mt-4 max-w-2xl text-[17px] leading-relaxed text-emerald-50">
          Study hard. Play hard. Stay active. Stay connected. Our
          extracurricular facilities are designed to create a vibrant campus
          experience where students can{" "}
          <strong className="font-semibold text-white">
            learn, relax, compete, have fun, and grow beyond the classroom.
          </strong>
        </p>
      </section>
    </div>
  );
}