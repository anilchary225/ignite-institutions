import React, { useState, useMemo } from "react";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  CheckCircle2,
  GraduationCap,
  HeartPulse,
  CalendarCheck,
  MonitorPlay,
  ClipboardCheck,
  Dumbbell,
  Bus,
  PartyPopper,
  Building2,
  Library,
  School,
  Scale,
  Cake,
  Cpu,
  UserCheck,
  Wind,
  Salad,
} from "lucide-react";

import { RouteLink } from "../router/BrowserRouter";
import Hero from "../components/AboutPageComponents/AboutPage/Hero";
import AboutInfoCards from "../components/AboutPageComponents/AboutPage/AboutInfoCards";
import CampusFeatures from "../components/AboutPageComponents/AboutPage/CampusFeatures";
import OurOfferings from "../components/AboutPageComponents/AboutPage/OurOfferings";
import VisionMission from "../components/AboutPageComponents/AboutPage/VisionMission";
import WhyChooseUs from "../components/AboutPageComponents/AboutPage/WhyChooseUs";

/* ============================================================
   ABSTRACT BACKGROUNDS — one motif per section, all one palette
============================================================ */

/* ============================================================
   ABSTRACT CIRCLES — for the tab content wrapper
============================================================ */
function AbstractCircles() {
  return (
    <>
      <svg
        viewBox="0 0 240 240"
        className="pointer-events-none absolute -top-16 -left-16 h-60 w-60 opacity-30 dark:opacity-60"
        aria-hidden="true"
      >
        <circle cx="120" cy="120" r="100" fill="none" className="stroke-blue-300 dark:stroke-blue-600" strokeWidth="1" />
        <circle cx="120" cy="120" r="70" fill="none" className="stroke-blue-400 dark:stroke-blue-500" strokeWidth="1" />
        <circle cx="120" cy="120" r="40" fill="none" className="stroke-blue-500 dark:stroke-blue-400" strokeWidth="1" />
      </svg>
      <svg
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -bottom-14 -right-14 h-52 w-52 opacity-25 dark:opacity-50"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="85" fill="none" className="stroke-blue-300 dark:stroke-blue-600" strokeWidth="1" />
        <circle cx="100" cy="100" r="55" className="fill-blue-50 dark:fill-blue-500/10" />
      </svg>
    </>
  );
}

// Concentric rings + arc — "our story" unfolding. Used in Welcome.
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

// A single node radiating into a small cluster — mentorship/leadership. Used in FounderCard.
function AbstractCluster({ position = "bottom-right" }) {
  const pos = position === "bottom-right" ? "-bottom-10 -right-10" : "-top-10 -left-10";
  return (
    <svg
    data-aos="fade-up"
      viewBox="0 0 200 200"
      className={`pointer-events-none absolute h-48 w-48 opacity-40 dark:opacity-70 ${pos}`}
      aria-hidden="true"
    >
      <g stroke="currentColor" className="text-blue-400 dark:text-blue-500" strokeWidth="1" opacity="0.6">
        <line x1="100" y1="100" x2="150" y2="60" />
        <line x1="100" y1="100" x2="160" y2="110" />
        <line x1="100" y1="100" x2="140" y2="150" />
        <line x1="100" y1="100" x2="60" y2="140" />
      </g>
      <circle cx="100" cy="100" r="6" className="fill-blue-500 dark:fill-blue-400" />
      <circle cx="150" cy="60" r="3" className="fill-blue-400 dark:fill-blue-500" />
      <circle cx="160" cy="110" r="3" className="fill-blue-400 dark:fill-blue-500" />
      <circle cx="140" cy="150" r="3" className="fill-blue-400 dark:fill-blue-500" />
      <circle cx="60" cy="140" r="3" className="fill-blue-400 dark:fill-blue-500" />
    </svg>
  );
}

// Fading dot grid — ideas/philosophy. Used in TeachingInspires quote cards.
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

// Soft wave lines — people/community. Used in OurTeam.
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

// Wireframe wave mesh — used behind the Hero.
function AboutHeroAbstract() {
  const paths = useMemo(() => {
    const w = 640;
    const h = 280;
    const rows = 20;
    const result = [];
    for (let i = 0; i < rows; i++) {
      const t = i / (rows - 1);
      const yBase = 130 + t * 170;
      const amp = 80 - t * 8;
      const freq = 0.006 + t * 0.0015;
      let d = `M -20 ${yBase}`;
      for (let x = -20; x <= w + 20; x += 20) {
        const y = yBase - Math.sin(x * freq + t * 2) * amp * Math.sin((x / w) * Math.PI);
        d += ` L ${x} ${y.toFixed(1)}`;
      }
      result.push(d);
    }
    return result;
  }, []);

  return (
    <svg
      viewBox="0 0 640 280"
      className="absolute inset-0 h-full w-full opacity-50"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="about-hero-fade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0.03" />
          <stop offset="50%" stopColor="white" stopOpacity="0.3" />
          <stop offset="100%" stopColor="white" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {paths.map((d, i) => (
        <path key={i} d={d} fill="none" stroke="url(#about-hero-fade)" strokeWidth="0.7" />
      ))}
    </svg>
  );
}

/* ============================================================
   WELCOME SECTION
============================================================ */
function getTagIcon(tag) {
  const value = tag.toLowerCase();
  if (value.includes("year")) return Award;
  if (value.includes("jee") || value.includes("eapcet")) return GraduationCap;
  if (value.includes("neet")) return HeartPulse;
  if (value.includes("foundation") || value.includes("school")) return BookOpenCheck;
  return CheckCircle2;
}

function WelcomeSection({
  image = "/assets/images/college campuses/Vagdevi_block.webp",
  heading = "Welcome to IGNITE Junior College",
  paragraphs = [
    "At IGNITE Junior College, we believe education is more than just preparing for exams - it's about shaping confident, capable, and compassionate individuals. For over 8 years, we have been a trusted name in IIT-JEE and NEET coaching, guiding students not only to excel academically but also to discover their true potential.",
    "We understand that every parent aspires to give their child the best future. That's why we've built a learning ecosystem where academic excellence meets holistic growth. Our focus goes beyond textbooks and tests, nurturing values, skills, and resilience that last a lifetime.",
  ],
  tags = ["8+ Years", "IIT-JEE", "NEET", "EAPCET"],
}) {
  const [heroStat, ...credentials] = tags;

  return (
    <section className="bg-white px-4 py-16 dark:bg-neutral-950 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center md:gap-12">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <img
              src={image}
              alt="Students at IGNITE Junior College"
              className="h-full w-full object-cover "
            />
          </div>

          {heroStat ? (
            <div data-aos="zoom-in" className="absolute -bottom-5 -right-4 flex w-40 items-center gap-3 rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900 sm:-right-6 sm:w-44">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-500/10">
                <Award size={18} className="text-blue-700 dark:text-blue-400" strokeWidth={1.75} />
              </div>
              <div className="leading-tight">
                <p className="text-lg font-semibold text-neutral-900 dark:text-white">{heroStat}</p>
                <p className="text-[11px] font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  of results
                </p>
              </div>
            </div>
          ) : null}
        </div>

        <div className="relative overflow-hidden rounded-2xl md:pt-2">
          <AbstractRings />
          <div className="relative z-10">
            <span data-aos="fade-up" className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              <span data-aos="fade-up" className="h-px w-6 bg-blue-500" aria-hidden="true" />
              About us
            </span>

            <h2 data-aos="fade-up" className="text-3xl font-semibold leading-tight text-neutral-900 dark:text-white sm:text-4xl">
              {heading}
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              {paragraphs.map((p, i) => (
                <p data-aos="fade-up" key={i}>{p}</p>
              ))}
            </div>

            {credentials.length > 0 ? (
              <div className="mt-8 border-t border-neutral-200 pt-5 dark:border-neutral-800">
                <p data-aos="fade-up" className="mb-3 text-[11px] font-medium uppercase tracking-wide text-neutral-400 dark:text-neutral-500">
                  Programs we coach for
                </p>
                <div className="flex flex-wrap">
                  {credentials.map((tag, index) => {
                    const Icon = getTagIcon(tag);
                    return (
                      <div
                      data-aos="zoom-in"
                        key={tag}
                        className={`flex items-center gap-2 py-1.5 pr-5 text-sm font-medium text-neutral-800 dark:text-neutral-100 ${
                          index > 0 ? "border-l border-neutral-200 pl-5 dark:border-neutral-800" : ""
                        }`}
                      >
                        <Icon size={16} className="text-blue-600 dark:text-blue-400" />
                        {tag}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOUNDER CARD
============================================================ */
function FounderCard({
  name = "Mr. K. Ramesh",
  role = "Founding Director & Chemistry Faculty",
  photo = "/assets/images/Ramesh sir/VIJ06254.webp",
  paragraphs = [
    "Founder-Chairman and Senior Faculty in Chemistry. He has over two decades of teaching excellence and leadership in shaping young minds. With a strong vision for quality education, he has mentored countless students who went on to become IITians, NITians, and medical professionals.",
    "Known for his balanced and student-friendly approach, Mr. Ramesh believes in stress-free, holistic learning that goes beyond academics. His commitment to nurturing both intellectual and personal growth continues to inspire students and educators alike.",
  ],
  founderPath = "/about/founder",
}) {
  return (
    <section className="bg-white px-4 py-16 dark:bg-neutral-950 sm:px-8 sm:py-20">
      <div data-aos="fade-up" className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-neutral-200 p-8 dark:border-neutral-800 sm:p-10">
        <AbstractCluster />
        <div className="relative z-10">
          <span data-aos="fade-up" className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            <span data-aos="fade-up" className="h-px w-6 bg-blue-500" aria-hidden="true" />
            Leadership
          </span>

          <div className="grid gap-10 sm:grid-cols-[220px_1fr] sm:items-center sm:gap-12">
            <div data-aos="fade-up" className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
              <img src={photo} alt={name} className="h-64 w-full object-cover sm:h-72" />
            </div>

            <div>
              <h2 data-aos="fade-up" className="text-2xl font-semibold leading-tight text-neutral-900 dark:text-white sm:text-3xl">
                {name}
              </h2>
              <p data-aos="fade-up" className="mt-1 text-sm font-medium text-blue-600 dark:text-blue-400">{role}</p>

              <div className="mt-5 space-y-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                {paragraphs.map((p, i) => (
                  <p data-aos="fade-up" key={i}>{p}</p>
                ))}
              </div>

              <RouteLink
                data-aos="fade-up"
                to={founderPath}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Explore more about founder
                <ArrowRight size={16} />
              </RouteLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TEACHING INSPIRES
============================================================ */
function TeachingInspires({
  heading = "Teaching that inspires",
  quotes = [
    { text: "Learning gives creativity, creativity leads to thinking, thinking provides knowledge, and knowledge makes you great.", author: "Dr. A P J Abdul Kalam" },
    { text: "The true teacher is he who can immediately come down to the level of the student, and transfer his soul to the student's soul and see through and understand through his mind. Such a teacher can really teach and none else.", author: "Swami Vivekananda" },
  ],
}) {
  return (
    <section className="px-4 py-14 dark:bg-neutral-950 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-4xl text-center">
        <span data-aos="fade-up" className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
          Our philosophy
        </span>
        <h2 data-aos="fade-up" className="text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">{heading}</h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {quotes.map((quote, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 text-left dark:border-neutral-800 dark:bg-neutral-900"
            >
              <AbstractDots position={index === 0 ? "top-right" : "bottom-left"} />
              <div className="relative z-10">
                <p className="text-sm italic leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {quote.text}
                </p>
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-blue-600 dark:text-blue-400">
                  — {quote.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   OUR TEAM
============================================================ */
function OurTeam({
  heading = "Our team",
  description = "Our administrative wing is the unseen backbone of IGNITE-dedicated faculty who also serve in leadership roles, ensuring seamless academic and institutional support. Coordinators, wardens, and administrators work alongside teachers to maintain our high standards and support student success.",
  photo = "/images/about/team-photo.jpg",
}) {
  return (
    <section className="px-4 py-14 dark:bg-neutral-950 sm:px-8 sm:py-16">
      <div data-aos="fade-up" className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl text-center">
        <AbstractWaves />
        <div className="relative z-10">
          <span data-aos="fade-up" className="mb-2 inline-block text-xs font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            The people behind IGNITE
          </span>
          <h2 data-aos="fade-up" className="text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">{heading}</h2>
          <p data-aos="fade-up" className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            {description}
          </p>

        </div>
      </div>
    </section>
  );
}

/* ============================================================
   WHY IGNITE
============================================================ */
const whyIgniteFeatures = [
  {
    icon: CalendarCheck,
    title: "Structured Academic Planning",
    text: "A planned daily academic schedule that keeps every student's progress consistent and on track.",
  },
  {
    icon: MonitorPlay,
    title: "Smart Learning with Technology",
    text: "Supervised study sessions and concept visualisation using digital boards.",
  },
  {
    icon: ClipboardCheck,
    title: "Performance Tracking",
    text: "Daily assessments, topic-wise tests, and continuous individual monitoring.",
  },
  {
    icon: Building2,
    title: "Premium Infrastructure",
    text: "AC classrooms with intentional design, along with dedicated Biology, Physics, and Chemistry labs.",
  },
  {
    icon: Library,
    title: "Fully Sourced Comprehensive Library",
    text: "A well-stocked library supporting every stream and subject.",
  },
  {
    icon: School,
    title: "Resource-Rich Campus",
    text: "Well-equipped library, computer labs, a dedicated game zone, and badminton courts.",
  },
  {
    icon: Cpu,
    title: "Advanced Computer Lab",
    text: "Modern computer lab facilities supporting smart, technology-enabled learning.",
  },
  {
    icon: UserCheck,
    title: "Expert Faculty",
    text: "Dedicated and experienced teachers focused entirely on student success.",
  },
  {
    icon: Wind,
    title: "Peaceful Learning Environment",
    text: "A calm, green campus setting built for focus, balance, and well-being.",
  },
  {
    icon: Dumbbell,
    title: "Recreation & Fitness Facilities",
    text: "Table tennis, badminton, foosball, air hockey, chess, carrom, Zumba, volleyball, indoor and outdoor cricket with nets, yoga, and meditation.",
  },
  {
    icon: Bus,
    title: "Transport Facility Available",
    text: "Safe, reliable transport connecting students across the city.",
  },
  {
    icon: PartyPopper,
    title: "Events & Engagement",
    text: "Academic fests and community outreach programs throughout the year.",
  },
  {
    icon: Scale,
    title: "Balanced Approach",
    text: "Equal focus on academic discipline and all-round personality growth.",
  },
  {
    icon: Cake,
    title: "Student-Centered Care",
    text: "Special birthday celebrations that make students feel at home — a unique Ignite highlight.",
  },
  {
    icon: GraduationCap,
    title: "Comprehensive Programs",
    text: "Long-term, short-term, and foundation courses for IIT-JEE, NEET, and EAMCET.",
  },
  {
    icon: Salad,
    title: "Nutritious Organic Food & Alkaline Water",
    text: "Wholesome, organic meals and alkaline water supporting student health every day.",
  },
];

function WhyIgnite({
  heading = "Why Ignite",
  intro = "Every detail at Ignite — from daily academic planning to nutrition, recreation, and personal mentorship — is designed to help students perform at their best while feeling supported, cared for, and at home.",
  image = "/assets/images/events/Classrooms/DSC00002.webp",
}) {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 dark:bg-neutral-950 sm:px-8 sm:py-20">
      <AbstractDots position="top-right" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div data-aos="fade-up" className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <img
              src={image}
              alt="Students learning at Ignite Junior College"
              className="h-72 w-full object-cover sm:h-96"
            />
          </div>

          <div>
            <span data-aos="fade-up" className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              <span className="h-px w-6 bg-blue-500" aria-hidden="true" />
              What sets us apart
            </span>
            <h2 data-aos="fade-up" className="text-3xl font-semibold leading-tight text-neutral-900 dark:text-white sm:text-4xl">
              {heading}
            </h2>
            <p data-aos="fade-up" className="mt-5 max-w-2xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              {intro}
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyIgniteFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                data-aos="fade-up"
                key={feature.title}
                className="rounded-2xl border border-neutral-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-blue-900"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-500/10">
                  <Icon size={18} className="text-blue-700 dark:text-blue-400" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-neutral-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Personal supervision highlight */}
        <div data-aos="zoom-in" className="mt-6 flex flex-col items-center gap-4 rounded-2xl border border-blue-100 bg-blue-50/60 p-6 dark:border-blue-900/40 dark:bg-blue-500/5 sm:flex-row sm:justify-center">
          <div data-aos="zoom-in" className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-blue-600">
            <img
              src="/assets/images/Ramesh sir/VIJ06254.webp"
              alt="Mr. K. Ramesh Garu, Founder and Chairman"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="text-center sm:text-left">
            <p data-aos="fade-left" className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Personal Supervision by
            </p>
            <p data-aos="fade-left" className="text-base font-semibold text-neutral-900 dark:text-white">
              Mr. K. Ramesh Garu
            </p>
            <p data-aos="fade-left" className="text-xs text-blue-600 dark:text-blue-400">Founder &amp; Chairman</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MAIN PAGE
============================================================ */
export default function AboutPage() {
  const [activeSection, setActiveSection] = useState("campus");

  const sections = [
    { id: "campus", label: "Campus Features", component: <CampusFeatures /> },
    { id: "offerings", label: "Our Offerings", component: <OurOfferings /> },
    { id: "why-us", label: "Why Choose Us", component: <WhyChooseUs /> },
    { id: "vision", label: "Vision & Mission", component: <VisionMission /> },
    { id: "info", label: "Info", component: <AboutInfoCards /> },
  ];

  const activeComponent = sections.find((section) => section.id === activeSection);

  return (
    <main className="bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white lg:h-1/2">
      {/* Hero */}
      <Hero
        title="About IGNITE"
        subtitle="Shaping confident, capable, and compassionate students for over 8 years."
        eyebrow="Our Story"
        backgroundImage="/aboutus-bg.webp"
        abstract={<AboutHeroAbstract />}
      />

      {/* Welcome */}
      <div className="bg-white dark:bg-neutral-950">
        <WelcomeSection />
      </div>

      {/* Founder */}
      <div className="bg-neutral-50 dark:bg-neutral-900">
        <FounderCard />
      </div>

      {/* Teaching Inspires */}
      <div className="bg-white dark:bg-neutral-950">
        <TeachingInspires />
      </div>

      {/* Our Team */}
      <div className="bg-neutral-50 dark:bg-neutral-900">
        <OurTeam />
      </div>

      {/* Why Ignite */}
      <div className="bg-white dark:bg-neutral-950">
        <WhyIgnite />
      </div>

            {/* =========================================
          DYNAMIC SECTION TABS
          ========================================= */}
      <div className="border-y border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 py-5">
          <div className="flex flex-wrap justify-center gap-2">
            {sections.map((section) => (
              <button
              data-aos="zoom-in"
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`
                  rounded-full px-5 py-2.5
                  text-sm font-medium
                  transition-colors duration-200

                  ${
                    activeSection === section.id
                      ? "bg-blue-600 text-white"
                      : "bg-neutral-100 text-neutral-600 hover:bg-blue-50 hover:text-blue-600 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-blue-500/10 dark:hover:text-blue-400"
                  }
                `}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          ACTIVE SECTION
          Only ONE section is rendered at a time
          ========================================= */}
      <div className="relative overflow-hidden bg-white dark:bg-neutral-950">
        <AbstractCircles />
        <div className="relative z-10 min-h-[500px]">
          {activeComponent?.component}
        </div>
      </div>
    </main>
  );
}