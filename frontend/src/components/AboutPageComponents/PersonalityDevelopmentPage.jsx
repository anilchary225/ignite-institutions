import React from "react";
import {
  MessageCircle,
  Users,
  ShieldCheck,
  Sparkles,
  Mic2,
  Target,
  Check,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";
import Hero from "./AboutPage/Hero";
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, defaultViewport } from "../../animations/variants";

/* ============================================================
   ABSTRACT BACKGROUNDS — a distinct pattern per section
============================================================ */

// Concentric rings + arc — used in IntroSplit
function AbstractRings({ position = "top-right" }) {
  const pos = position === "top-right" ? "-top-14 -right-14" : "-bottom-14 -left-14";
  return (
    <svg
      viewBox="0 0 220 220"
      className={`pointer-events-none absolute h-56 w-56 opacity-40 dark:opacity-70 ${pos}`}
      aria-hidden="true">
      <circle cx="110" cy="110" r="90" fill="none" className="stroke-blue-300 dark:stroke-blue-600" strokeWidth="1" />
      <circle cx="110" cy="110" r="60" fill="none" className="stroke-blue-400 dark:stroke-blue-500" strokeWidth="1" />
      <path d="M20 150 Q 90 60 200 100" fill="none" className="stroke-blue-500 dark:stroke-blue-400" strokeWidth="1" />
    </svg>
  );
}

// Dot grid fading out — used in ApproachGrid cards
function AbstractDots({ position = "top-right" }) {
  const pos = position === "top-right" ? "-top-6 -right-6" : "-bottom-6 -left-6";
  const dots = [];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      dots.push(
        <circle
          key={`${row}-${col}`}
          cx={8 + col * 14}
          cy={8 + row * 14}
          r="1.6"
          className="fill-blue-300 dark:fill-blue-600"
          opacity={1 - (row + col) * 0.09}
        />
      );
    }
  }
  return (
    <svg viewBox="0 0 70 70" className={`pointer-events-none absolute h-20 w-20 opacity-70 dark:opacity-80 ${pos}`} aria-hidden="true">
      {dots}
    </svg>
  );
}

// Soft wave lines — used in GainList
function AbstractWaves() {
  return (
    <svg
      viewBox="0 0 400 200"
      className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-96 opacity-30 dark:opacity-50"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path d="M0 140 Q 100 90 200 130 T 400 110" fill="none" className="stroke-blue-400 dark:stroke-blue-500" strokeWidth="1.2" />
      <path d="M0 170 Q 100 120 200 160 T 400 140" fill="none" className="stroke-blue-300 dark:stroke-blue-600" strokeWidth="1.2" />
      <path d="M0 200 Q 100 150 200 190 T 400 170" fill="none" className="stroke-blue-500 dark:stroke-blue-400" strokeWidth="1.2" />
    </svg>
  );
}

// Single soft blob + ring — used in QuoteBanner
function AbstractBlob() {
  return (
    <svg
      viewBox="0 0 300 300"
      className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 opacity-25 dark:opacity-40"
      aria-hidden="true"
    >
      <circle cx="150" cy="150" r="120" className="fill-blue-500" />
      <circle cx="150" cy="150" r="150" fill="none" className="stroke-blue-300 dark:stroke-blue-500" strokeWidth="1" />
    </svg>
  );
}

/* ============================================================
   INTRO SPLIT
============================================================ */
function IntroSplit({
  heading,
  paragraphs = [],
  imageSrc,
  imageSrcSecondary,
  imageAlt = "",
  reverse = false,
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16 lg:py-20">
      <div
        className={`grid items-center gap-12 md:grid-cols-2 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          variants={reverse ? fadeLeft : fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className={`relative ${imageSrcSecondary ? "grid grid-cols-2 gap-3" : ""}`}
        >
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.35 }}
            src={imageSrc}
            alt={imageAlt}
            className={`rounded-2xl border border-neutral-200 object-cover dark:border-neutral-800 ${
              imageSrcSecondary ? "aspect-[3/4] h-full w-full" : "w-full"
            }`}
          />
          {imageSrcSecondary && (
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.35 }}
              src={imageSrcSecondary}
              alt={imageAlt}
              className="mt-8 aspect-[3/4] h-full w-full rounded-2xl border border-neutral-200 object-cover dark:border-neutral-800"
            />
          )}
        </motion.div>

        <motion.div
          variants={reverse ? fadeRight : fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="relative overflow-hidden rounded-2xl"
        >
          <AbstractRings position={reverse ? "bottom-left" : "top-right"} />
          <div className="relative z-10">
            {heading && (
              <h2 className="mb-4 text-2xl font-semibold text-blue-600 dark:text-blue-400 sm:text-3xl">
                {heading}
              </h2>
            )}
            {paragraphs.map((p, i) => (
              <p key={i} className="mb-4 leading-relaxed text-neutral-600 last:mb-0 dark:text-neutral-300">
                {p}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   APPROACH GRID
============================================================ */
const approaches = [
  {
    icon: MessageCircle,
    title: "Communication skills",
    text: "Structured speaking sessions, group discussions, and presentations build clarity and confidence in expression.",
  },
  {
    icon: Users,
    title: "Team and leadership",
    text: "Club activities and peer-led projects give students real practice at leading, listening, and collaborating.",
  },
  {
    icon: ShieldCheck,
    title: "Values and integrity",
    text: "Daily mentoring reinforces honesty, respect, and responsibility as part of everyday campus life.",
  },
  {
    icon: Sparkles,
    title: "Creativity and expression",
    text: "Art, music, and cultural events give students space to explore interests beyond academics.",
  },
  {
    icon: Mic2,
    title: "Public speaking",
    text: "Regular assemblies, debates, and elocution events help students grow comfortable speaking to a crowd.",
  },
  {
    icon: Target,
    title: "Goal setting",
    text: "Mentors help students set realistic, personal goals and track progress beyond just exam results.",
  },
];

function ApproachGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16 lg:py-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="max-w-2xl"
      >
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
          Our approach
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">
          Six areas we build every day
        </h2>
      </motion.div>

      <motion.div
        variants={staggerContainer(0.08, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {approaches.map(({ icon: Icon, title, text }) => (
          <motion.article
            key={title}
            variants={scaleIn}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900 shadow-sm hover:shadow-md transition-shadow"
          >
            <AbstractDots />
            <div className="relative z-10">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/10">
                <Icon size={18} className="text-blue-700 dark:text-blue-400" strokeWidth={1.75} />
              </div>
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{text}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

/* ============================================================
   GAIN LIST
============================================================ */
const gains = [
  "Stronger self-confidence in and out of the classroom",
  "Clear, structured communication in speech and writing",
  "Comfort working in teams and taking initiative",
  "A stronger sense of discipline and personal responsibility",
  "Practical exposure to leadership and public speaking",
  "A well-rounded profile beyond academic scores",
];

function GainList({ imageSrc, imageAlt = "" }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16 lg:py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.img
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.35 }}
            src={imageSrc}
            alt={imageAlt}
            className="w-full rounded-2xl border border-neutral-200 object-cover dark:border-neutral-800"
          />
        </motion.div>

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="relative overflow-hidden rounded-2xl"
        >
          <AbstractWaves />
          <div className="relative z-10">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              What students gain
            </p>
            <h2 className="mt-3 mb-6 text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">
              Skills that carry beyond the classroom
            </h2>
            <ul className="space-y-3">
              {gains.map((gain) => (
                <li key={gain} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-500/10">
                    <Check size={12} className="text-blue-700 dark:text-blue-400" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm leading-6 text-neutral-600 dark:text-neutral-300">{gain}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   QUOTE BANNER
============================================================ */
function QuoteBanner({ bgColor = "bg-blue-700" }) {
  return (
    <section className={`relative overflow-hidden px-6 py-20 text-center ${bgColor}`}>
      <AbstractBlob />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="relative z-10 mx-auto max-w-2xl"
      >
        <div className="mb-6 flex justify-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
            <Quote size={20} className="text-white" strokeWidth={1.75} />
          </div>
        </div>
        <p className="text-xl font-medium leading-relaxed text-white sm:text-2xl">
          Every student who walks out of IGNITE should carry not just marks, but the
          character and confidence to lead their own life.
        </p>
      </motion.div>
    </section>
  );
}
function PDHeroOrbAbstract() {
  return (
    <svg
      viewBox="0 0 640 280"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="pd-orb-1" cx="35%" cy="20%" r="75%">
          <stop offset="0%" stopColor="#3730a3" />
          <stop offset="55%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#050510" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pd-orb-2" cx="70%" cy="90%" r="70%">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="55%" stopColor="#172554" />
          <stop offset="100%" stopColor="#050510" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pd-orb-rim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93c5fd" stopOpacity="0" />
          <stop offset="50%" stopColor="#c7d2fe" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#93c5fd" stopOpacity="0" />
        </linearGradient>
      </defs>

      <circle cx="140" cy="-40" r="260" fill="url(#pd-orb-1)" opacity="0.8" />
      <circle cx="140" cy="-40" r="260" fill="none" stroke="url(#pd-orb-rim)" strokeWidth="2" />

      <circle cx="560" cy="330" r="240" fill="url(#pd-orb-2)" opacity="0.8" />
      <circle cx="560" cy="330" r="240" fill="none" stroke="url(#pd-orb-rim)" strokeWidth="2" />
    </svg>
  );
}

/* ============================================================
   MAIN PAGE
============================================================ */
export default function PersonalityDevelopmentPage() {
  return (
    <main className="bg-white pt-5 dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Hero
        title="Personality Development"
        subtitle="At IGNITE Junior College, we believe education is not just about marks and ranks-it's about shaping personalities that stand out with confidence, values, and resilience."
        eyebrow="Ignite Junior College"
        backgroundImage="/assets/images/events/Yoga/yoga12.webp"
        abstract={<PDHeroOrbAbstract />}
      />

      <div className="bg-white dark:bg-neutral-950">
        <IntroSplit
          paragraphs={[
            "At IGNITE Junior College, we believe education is not just about marks and ranks-it's about shaping personalities that stand out with confidence, values, and resilience.",
            "Personality development at IGNITE is not a separate subject; it is an integral part of how we teach, mentor, and guide our students every day.",
          ]}
          imageSrc="/assets/images/events/ADVAITHA/VIJ02685.webp"
          imageAlt="Student receiving recognition on stage"
        />
      </div>

      <div className="bg-neutral-50 dark:bg-neutral-900">
        <IntroSplit
          heading="What is Personality Development?"
          paragraphs={[
            "Personality development is the conscious growth of a student's character, communication, and confidence alongside their academics.",
          ]}
          imageSrc="/assets/images/events/sports/DSC00172.webp"
          imageAlt="Students in an activity session"
          reverse
        />
      </div>

      <div className="bg-white dark:bg-neutral-950">
        <ApproachGrid />
      </div>

      <div className="bg-neutral-50 dark:bg-neutral-900">
        <GainList
          imageSrc="/assets/images/events/School kids in science lab/IMG_9596.webp"
          imageAlt="Students working at a hands-on session"
        />
      </div>

      <div className="bg-white dark:bg-neutral-950">
        <IntroSplit
          heading="Why It Matters"
          paragraphs={[
            "The world today values well-rounded individuals-those who can think critically, communicate effectively, and act with integrity. By weaving personality development into our culture, IGNITE ensures that students walk out not only as achievers in IIT-JEE, NEET, or boards, but also as individuals ready to succeed in life with confidence and character.",
          ]}
          imageSrc="/assets/images/events/School kids in science lab/IMG_9628.webp"
          imageAlt="Group of students posing together"
          imageSrcSecondary="/assets/images/events/School kids in science lab/IMG_9621.webp"
          reverse
        />
      </div>

      <QuoteBanner bgColor="bg-blue-700" />
    </main>
  );
}