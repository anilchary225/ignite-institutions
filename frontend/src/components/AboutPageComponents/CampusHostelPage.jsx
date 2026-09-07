import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Home, Key, Heart } from "lucide-react";

import Hero from "./AboutPage/Hero";

gsap.registerPlugin(ScrollTrigger);

/* ============================================================
   ABSTRACT BACKGROUND
============================================================ */
function AbstractBg({ position = "top-right", size = 240 }) {
  const isTopRight = position === "top-right";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      className={`absolute pointer-events-none opacity-40 dark:opacity-70 ${
        isTopRight ? "-top-16 -right-16" : "-bottom-16 -left-16"
      }`}
      aria-hidden="true">
      <circle cx="120" cy="120" r="100" fill="none" className="stroke-blue-300 dark:stroke-blue-600" strokeWidth="1" />
      <circle cx="120" cy="120" r="65" fill="none" className="stroke-blue-400 dark:stroke-blue-500" strokeWidth="1" />
      <path d="M20 170 Q 100 70 220 110" fill="none" className="stroke-blue-500 dark:stroke-blue-400" strokeWidth="1" />
    </svg>
  );
}

/* ============================================================
   ICON BADGE
============================================================ */
function IconBadge({ icon: Icon }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 dark:bg-blue-500/10">
      <Icon size={20} className="text-blue-700 dark:text-blue-400" strokeWidth={1.75} />
    </div>
  );
}

/* ============================================================
   NUMBER BADGE (for AltRow)
============================================================ */
function NumberBadge({ index }) {
  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-500/10">
      <span className="text-xs font-medium text-blue-700 dark:text-blue-400">
        {String(index).padStart(2, "0")}
      </span>
    </div>
  );
}

/* ============================================================
   INTRO DUAL
============================================================ */
function IntroDual({ imageSrc, imageAlt = "", paragraphs = [] }) {
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.set(".id-photo", { opacity: 0, y: 24 });
      gsap.set(".id-tag", { opacity: 0, scale: 0.7 });
      gsap.set(".id-para", { opacity: 0, y: 16 });

      ScrollTrigger.create({
        trigger: scope.current,
        start: "top 82%",
        once: true,
        onEnter: () => {
          gsap
            .timeline({ defaults: { ease: "power3.out" } })
            .to(".id-photo", { opacity: 1, y: 0, duration: 0.8 })
            .to(".id-tag", { opacity: 1, scale: 1, duration: 0.4 }, "-=.3")
            .to(".id-para", { opacity: 1, y: 0, duration: 0.6, stagger: 0.15 }, "-=.3");
        },
      });
    },
    { scope }
  );

  return (
    <section ref={scope} className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="id-photo aspect-4/5 w-full rounded-2xl object-cover"
          />
          <div data-aos="zoom-in" className="id-tag absolute -bottom-4 -right-4 flex items-center gap-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-3 py-2.5">
            <IconBadge icon={Home} />
            <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
              Welcome home
            </span>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-8">
          <AbstractBg />
          <div className="relative z-10">
            {paragraphs.map((p, i) => (
              <p key={i} className="id-para mb-4 leading-relaxed text-neutral-600 dark:text-neutral-300 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ALT ROW
============================================================ */
function AltRow({ heading, text, imageSrc, reverse = false, index }) {
  const scope = useRef(null);

  useGSAP(
    () => {
      gsap.set(".row-img", { opacity: 0, x: reverse ? 40 : -40 });
      gsap.set(".row-content", { opacity: 0, y: 20 });

      ScrollTrigger.create({
        trigger: scope.current,
        start: "top 82%",
        once: true,
        onEnter: () => {
          gsap
            .timeline()
            .to(".row-img", { opacity: 1, x: 0, duration: 0.8 })
            .to(".row-content", { opacity: 1, y: 0, duration: 0.6 }, "-=.3");
        },
      });
    },
    { scope }
  );

  return (
    <section ref={scope} className="mx-auto max-w-6xl px-6 py-14">
      <div
        className={`grid items-center gap-12 md:grid-cols-2 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <img src={imageSrc} className="row-img rounded-2xl" />

        <div className="row-content">
          <NumberBadge index={index} />
          <h2 className="my-4 text-3xl font-semibold text-neutral-900 dark:text-white">
            {heading}
          </h2>
          <p className="leading-relaxed text-neutral-600 dark:text-neutral-300">{text}</p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CENTERED STATEMENT
============================================================ */
function CenteredStatement({ heading, text }) {
  return (
    <section data-aos="fade-in" className="bg-neutral-50 dark:bg-neutral-950 px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-10 text-center">
          <AbstractBg position="bottom-left" />
          <div className="relative z-10">
            <div data-aos="zoom-in" className="mb-6 flex justify-center">
              <IconBadge icon={Key} />
            </div>
            <h2 data-aos="fade-up" className="mb-4 text-3xl font-semibold text-neutral-900 dark:text-white">{heading}</h2>
            <p data-aos="fade-up" className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SOLID BANNER
============================================================ */
function SolidBanner({ text }) {
  return (
    <section data-aos="fade-in" className="bg-blue-700 px-6 py-20 text-center">
      <div className="mx-auto max-w-3xl">
        <div data-aos="fade-up" className="mb-6 flex justify-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
            <Heart size={20} className="text-white" strokeWidth={1.75} />
          </div>
        </div>
        <p data-aos="fade-up" className="text-lg sm:text-xl leading-relaxed text-white/90">{text}</p>
      </div>
    </section>
  );
}


function PDHeroOrbAbstractV2() {
  return (
    <svg
      viewBox="0 0 640 280"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="pd-orb-a" cx="80%" cy="15%" r="65%">
          <stop offset="0%" stopColor="#4c1d95" />
          <stop offset="55%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#050510" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pd-orb-b" cx="15%" cy="60%" r="70%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="55%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#050510" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="pd-orb-c" cx="60%" cy="100%" r="60%">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="55%" stopColor="#111827" />
          <stop offset="100%" stopColor="#050510" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="pd-orb-rim-a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0" />
          <stop offset="50%" stopColor="#ddd6fe" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0" />
        </linearGradient>
      </defs>

      <circle cx="520" cy="10" r="220" fill="url(#pd-orb-a)" opacity="0.85" />
      <circle cx="520" cy="10" r="220" fill="none" stroke="url(#pd-orb-rim-a)" strokeWidth="2" />

      <circle cx="60" cy="220" r="260" fill="url(#pd-orb-b)" opacity="0.8" />
      <circle cx="60" cy="220" r="260" fill="none" stroke="url(#pd-orb-rim-a)" strokeWidth="2" />

      <circle cx="380" cy="300" r="180" fill="url(#pd-orb-c)" opacity="0.7" />
      <circle cx="380" cy="300" r="180" fill="none" stroke="url(#pd-orb-rim-a)" strokeWidth="1.5" />
    </svg>
  );
}
/* ============================================================
   MAIN PAGE
============================================================ */
export default function CampusHostelPage() {
  return (
    <main>
      <Hero
        title="Campus hostel facilities"
        eyebrow="A home away from home"
        subtitle="Safe, comfortable, and well-equipped residences designed to support student life beyond the classroom."
        imageSrc="/abouthostelfacilitiesbg.webp"
        abstract={<PDHeroOrbAbstractV2/>}
      />

      <IntroDual
        imageSrc="/assets/images/events/DINNING/MESS  (3).webp"
        imageAlt="Dining hall"
        paragraphs={[
          "At IGNITE Junior College, our campus isn't just a place to stay — it's a home away from home.",
          "Our hostel facilities are designed to comfort, support, and inspire students as they navigate a pivotal stage of their academic journey.",
        ]}
      />

      <AltRow
        index={1}
        heading="Comfortable living, thoughtfully designed"
        text="Our hostels offer separate, hygienic accommodations for boys and girls, ensuring safe and respectful living environments."
        imageSrc="/assets/images/events/DINNING/DSC09078.webp"
      />

      <AltRow
        index={2}
        heading="Healthy meals and nurturing care"
        reverse
        text="Nutritious vegetarian and non-vegetarian food is served in spacious dining areas where students build friendships and community."
        imageSrc="/assets/images/events/DINNING/MNR09521.webp"
      />

      <CenteredStatement
        heading="Safety, compassion and peace of mind"
        text="Our hostel team provides daily supervision, emotional support, and guidance, bringing the warmth of home to campus living."
      />

      <SolidBanner text="At IGNITE, success starts with a balanced environment — a safe place to study, rest, and grow. Our hostel is more than rooms and meals; it is where students find friendship, support, and encouragement." />
    </main>
  );
}