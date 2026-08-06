import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Flame,
  GraduationCap,
  Heart,
  MapPin,
  Mic2,
  Music,
  Quote,
  Sparkles,
  Star,
  Trophy,
  Users,
  X,
  Zap,
  Camera,
  Dumbbell,
  FlaskConical,
  Lightbulb,
} from "lucide-react";
import { RouteLink } from "../router/BrowserRouter";

/* ─────────────────────────── DATA ─────────────────────────── */

const heroEvents = [
  {
    id: "h1",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1800&q=85",
    eyebrow: "Annual Day · March 2025",
    title: "A Night of Stars — Annual Day 2025",
    description:
      "2 000+ students, parents and staff celebrated excellence across academics, arts, and sport in an evening that united the entire Ignite family.",
    tag: "Annual Day",
    tagColor: "violet",
    date: "March 20, 2025",
    venue: "Ignite Main Auditorium",
    attendees: "2 000+",
  },
  {
    id: "h2",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1800&q=85",
    eyebrow: "Cultural Fest · February 2025",
    title: "Utsav 2025 — Culture in Full Bloom",
    description:
      "Three stages, 60+ acts and one unforgettable evening. Utsav brought alive classical, folk and contemporary performances, entirely student-organised from stage design to sound.",
    tag: "Cultural",
    tagColor: "amber",
    date: "February 14, 2025",
    venue: "Open-Air Amphitheatre",
    attendees: "1 500+",
  },
  {
    id: "h3",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=85",
    eyebrow: "Science Expo · January 2025",
    title: "Ignite Science Fair — Curious Minds",
    description:
      "Hundreds of experiments, models and innovations built by Ignite learners from Class 6 to JC 2. The annual expo celebrates curiosity as the foundation of education.",
    tag: "Science",
    tagColor: "sky",
    date: "January 28, 2025",
    venue: "Campus Exhibition Hall",
    attendees: "800+",
  },
];

const eventTypes = [
  {
    icon: Trophy,
    label: "Annual Day",
    count: "18 editions",
    color: "violet",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
    description: "Grand year-end celebrations recognising academic and co-curricular excellence.",
  },
  {
    icon: Music,
    label: "Cultural Fests",
    count: "12 per year",
    color: "amber",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    description: "Music, dance, drama and art events that showcase student creativity.",
  },
  {
    icon: FlaskConical,
    label: "Science Expos",
    count: "Annual",
    color: "sky",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=600&q=80",
    description: "Innovation fairs where students present research, models and experiments.",
  },
  {
    icon: Dumbbell,
    label: "Sports Day",
    count: "Bi-annual",
    color: "emerald",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80",
    description: "Track, field and team sports across all age groups and classes.",
  },
  {
    icon: Mic2,
    label: "Guest Lectures",
    count: "30+ per year",
    color: "rose",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80",
    description: "IIT/NEET toppers, alumni and industry leaders share their journeys.",
  },
  {
    icon: Lightbulb,
    label: "Workshops",
    count: "50+ per year",
    color: "indigo",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
    description: "Hands-on skill-building sessions on academics, personality and leadership.",
  },
];

const galleryImages = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=800&q=80",
    label: "Prize Distribution",
    event: "Annual Day 2025",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80",
    label: "Dance Performance",
    event: "Utsav 2025",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    label: "Opening Ceremony",
    event: "Sports Day",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80",
    label: "Campus Gathering",
    event: "Orientation 2025",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    label: "Robotics Workshop",
    event: "Science Expo 2025",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    label: "Alumni Talk",
    event: "Guest Lecture Series",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    label: "Group Discussion",
    event: "Leadership Camp",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
    label: "Classroom Quiz",
    event: "Ignite Olympiad",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80",
    label: "Study Group",
    event: "Foundation Batch",
  },
];

const statsData = [
  { value: "500+", label: "Events Hosted", icon: CalendarDays, color: "violet" },
  { value: "12 000+", label: "Students Participated", icon: Users, color: "sky" },
  { value: "200+", label: "Expert Speakers", icon: Mic2, color: "amber" },
  { value: "98%", label: "Parent Satisfaction", icon: Heart, color: "rose" },
  { value: "150+", label: "Awards Won", icon: Trophy, color: "emerald" },
  { value: "18 yrs", label: "Of Excellence", icon: Star, color: "indigo" },
];

const parentReactions = [
  {
    id: "p1",
    name: "Mrs. Lakshmi Ravi",
    role: "Parent of JC-2 Student",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=120&q=80",
    quote:
      "The Annual Day was absolutely breathtaking. Watching my son perform on that grand stage filled with 2000 people was something I'll cherish forever. Ignite doesn't just teach — it transforms.",
    event: "Annual Day 2025",
    rating: 5,
  },
  {
    id: "p2",
    name: "Mr. Suresh Kumar",
    role: "Parent of Class-10 Student",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
    quote:
      "I attended the Science Expo with very high expectations — and Ignite still managed to exceed them. My daughter's project on renewable energy showed a depth of thinking I didn't realise she had.",
    event: "Science Expo 2025",
    rating: 5,
  },
  {
    id: "p3",
    name: "Mrs. Anitha Reddy",
    role: "Parent of Foundation Batch",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
    quote:
      "The Parent Orientation Day gave us such a clear picture of how well Ignite plans every aspect of a student's growth. The faculty's passion is genuinely visible.",
    event: "Parent Orientation",
    rating: 5,
  },
  {
    id: "p4",
    name: "Mr. Venkat Narayana",
    role: "Parent of Two Ignite Students",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    quote:
      "Both my children have been shaped by events at Ignite — from the sports day discipline to the cultural fest confidence. No other institution invests so deeply in the whole child.",
    event: "Sports Day 2025",
    rating: 5,
  },
];

const studentReactions = [
  {
    id: "s1",
    name: "Priya Sharma",
    role: "JC-2, MPC · IIT Aspirant",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80",
    quote:
      "Utsav was the night I stopped being shy. I'd never performed on stage before. My friends pushed me, the teachers believed in me — and the crowd gave me a standing ovation. That moment rewired me.",
    event: "Utsav Cultural Fest",
    rating: 5,
  },
  {
    id: "s2",
    name: "Arjun Mehta",
    role: "Class-11, BIPC · NEET Aspirant",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    quote:
      "The guest lecture by last year's NEET AIR-12 ranker was a turning point for me. He broke down exactly how he studied, what mistakes to avoid — real, honest advice that no coaching book gives you.",
    event: "Guest Lecture Series",
    rating: 5,
  },
  {
    id: "s3",
    name: "Deepika Nair",
    role: "Class-9, Foundation",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?auto=format&fit=crop&w=120&q=80",
    quote:
      "Sports Day is my favourite day of the year. I won the 400m sprint and got the trophy on the main stage. My parents were in the crowd. I still have that photo on my desk.",
    event: "Sports Day 2025",
    rating: 5,
  },
  {
    id: "s4",
    name: "Karthik Rao",
    role: "JC-1, MPC",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=120&q=80",
    quote:
      "The robotics workshop at the Science Expo opened my eyes to engineering in a completely different way. We built a working line-follower in one afternoon. I'm now certain I want to do CSE at IIT.",
    event: "Science Expo 2025",
    rating: 5,
  },
];

const colorMap = {
  violet: {
    icon: "bg-violet-100 text-violet-600 dark:bg-violet-950/50 dark:text-violet-300",
    badge: "bg-violet-600 text-white",
    ring: "ring-violet-500",
    glow: "shadow-violet-500/20",
  },
  amber: {
    icon: "bg-amber-100 text-amber-600 dark:bg-amber-950/50 dark:text-amber-300",
    badge: "bg-amber-500 text-white",
    ring: "ring-amber-400",
    glow: "shadow-amber-500/20",
  },
  sky: {
    icon: "bg-sky-100 text-sky-600 dark:bg-sky-950/50 dark:text-sky-300",
    badge: "bg-sky-500 text-white",
    ring: "ring-sky-400",
    glow: "shadow-sky-500/20",
  },
  emerald: {
    icon: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-300",
    badge: "bg-emerald-500 text-white",
    ring: "ring-emerald-400",
    glow: "shadow-emerald-500/20",
  },
  rose: {
    icon: "bg-rose-100 text-rose-600 dark:bg-rose-950/50 dark:text-rose-300",
    badge: "bg-rose-500 text-white",
    ring: "ring-rose-400",
    glow: "shadow-rose-500/20",
  },
  indigo: {
    icon: "bg-indigo-100 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-300",
    badge: "bg-indigo-500 text-white",
    ring: "ring-indigo-400",
    glow: "shadow-indigo-500/20",
  },
};

const tagColorMap = {
  violet: "bg-violet-600 text-white",
  amber: "bg-amber-500 text-white",
  sky: "bg-sky-500 text-white",
};

/* ─────────────────────── LIGHTBOX ─────────────────────────── */

function Lightbox({ image, onClose }) {
  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-white hover:text-neutral-950"
          aria-label="Close image"
        >
          <X size={16} />
        </button>
        <img src={image.src} alt={image.label} className="w-full object-cover" />
        <div className="bg-neutral-950 px-5 py-4">
          <p className="font-extrabold text-white">{image.label}</p>
          <p className="mt-0.5 text-sm text-neutral-400">{image.event}</p>
        </div>
      </div>
    </div>
  );
}

/* ──────────────── SECTION 1 — HERO ─────────────────────────── */

function EventHero() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ev = heroEvents[active];

  useEffect(() => {
    if (isPaused) return undefined;
    const t = window.setInterval(() => setActive((i) => (i + 1) % heroEvents.length), 6000);
    return () => window.clearInterval(t);
  }, [isPaused]);

  return (
    <section className="px-4 pb-10 pt-5 sm:px-6 sm:pt-8">
      <div
        className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-neutral-950 shadow-[0_24px_80px_rgba(42,25,86,0.25)]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="relative h-[620px] sm:h-[680px] transition-all duration-1000"
          style={{
            backgroundImage: `url(${ev.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-12 lg:p-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              {/* Left */}
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-widest ${tagColorMap[ev.tagColor]}`}>
                    {ev.tag}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/60">{ev.eyebrow}</span>
                </div>
                <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
                  {ev.title}
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">{ev.description}</p>
                <div className="mt-5 flex flex-wrap gap-5 text-xs font-semibold text-white/60">
                  <span className="flex items-center gap-1.5"><CalendarDays size={13} />{ev.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={13} />{ev.venue}</span>
                  <span className="flex items-center gap-1.5"><Users size={13} />{ev.attendees} attendees</span>
                </div>
                <RouteLink
                  to="/gallery/photos"
                  className="mt-7 inline-flex items-center gap-3 rounded-full bg-violet-600 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-violet-900/40 transition hover:bg-violet-500 hover:gap-4"
                >
                  <Camera size={15} />
                  View Photo Gallery
                </RouteLink>
              </div>

              {/* Right — event strip */}
              <div className="hidden shrink-0 flex-col gap-3 lg:flex">
                {heroEvents.map((e, i) => (
                  <button
                    key={e.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`flex items-center gap-3 rounded-xl p-2.5 pr-4 text-left transition ${
                      i === active ? "bg-white/15 ring-1 ring-white/30" : "bg-black/30 hover:bg-white/10"
                    }`}
                  >
                    <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg">
                      <img src={e.image} alt={e.title} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div>
                      <p className="max-w-[160px] truncate text-xs font-extrabold text-white">{e.title}</p>
                      <p className="mt-0.5 text-[10px] text-white/55">{e.date}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="mt-6 flex gap-1.5 lg:hidden">
              {heroEvents.map((e, i) => (
                <button
                  key={e.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${i === active ? "w-9 bg-white" : "w-2 bg-white/40"}`}
                  aria-label={`Show event ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── SECTION 2 — EVENT TYPES ──────────────────── */

function EventTypes() {
  return (
    <section className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-violet-500" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-violet-700 dark:text-violet-400">
                What We Celebrate
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
              Every kind of event, every kind of student
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              From grand award nights to quiet afternoon workshops — Ignite builds a calendar around every interest.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {eventTypes.map((et) => {
            const Icon = et.icon;
            const c = colorMap[et.color];
            return (
              <div
                key={et.label}
                className="group overflow-hidden rounded-3xl bg-white ring-1 ring-neutral-100 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:bg-neutral-900 dark:ring-neutral-800"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={et.image}
                    alt={et.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className={`absolute bottom-3 left-3 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider ${c.badge}`}>
                    {et.count}
                  </span>
                </div>
                <div className="p-5">
                  <span className={`grid h-10 w-10 place-items-center rounded-xl ${c.icon}`}>
                    <Icon size={18} />
                  </span>
                  <h3 className="mt-3 text-base font-extrabold text-neutral-950 dark:text-white">{et.label}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{et.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── SECTION 3 — IMAGE GALLERY SCROLL ─────────── */

function EventGallery() {
  const trackRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  function scroll(dir) {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  }

  return (
    <>
      {lightbox && <Lightbox image={lightbox} onClose={() => setLightbox(null)} />}

      <section className="bg-neutral-950 py-20">
        <div className="px-6 lg:px-10">
          <div className="mx-auto flex max-w-7xl items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-violet-500" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-violet-400">
                  Captured Moments
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                Snapshots from our events
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-6 text-neutral-400">
                Every event tells a story. Scroll through the moments that made our campus come alive.
              </p>
            </div>
            <div className="hidden shrink-0 items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scroll(-1)}
                aria-label="Scroll left"
                className="grid h-11 w-11 place-items-center rounded-full border border-neutral-700 text-neutral-400 transition hover:border-violet-500 hover:bg-violet-600 hover:text-white"
              >
                <ChevronLeft size={19} />
              </button>
              <button
                type="button"
                onClick={() => scroll(1)}
                aria-label="Scroll right"
                className="grid h-11 w-11 place-items-center rounded-full border border-neutral-700 text-neutral-400 transition hover:border-violet-500 hover:bg-violet-600 hover:text-white"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>

          {/* Track */}
          <div
            ref={trackRef}
            className="mx-auto mt-8 flex max-w-7xl gap-4 overflow-x-auto pb-4"
            style={{ scrollbarWidth: "none" }}
          >
            {galleryImages.map((img) => (
              <button
                key={img.id}
                type="button"
                onClick={() => setLightbox(img)}
                className="group relative shrink-0 w-56 sm:w-64 overflow-hidden rounded-2xl bg-neutral-800 ring-1 ring-neutral-700 transition hover:-translate-y-1 hover:shadow-xl focus:outline-none"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-white/25 backdrop-blur-md ring-1 ring-white/40">
                      <Camera size={16} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-3.5 text-left">
                  <p className="truncate text-sm font-extrabold text-white">{img.label}</p>
                  <p className="mt-0.5 text-[11px] text-neutral-500">{img.event}</p>
                </div>
              </button>
            ))}
          </div>

          <p className="mx-auto mt-2 max-w-7xl text-center text-xs text-neutral-700 sm:hidden">← Swipe to explore →</p>
        </div>
      </section>
    </>
  );
}

/* ──────────────── SECTION 4 — STATS STRIP ──────────────────── */

function StatsStrip() {
  return (
    <section className="bg-gradient-to-r from-violet-700 via-violet-600 to-indigo-600 px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-white">
            <Zap size={13} fill="white" />
            Events by the Numbers
          </span>
          <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
            500+ successful events and counting
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {statsData.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white/15 p-5 text-center backdrop-blur-sm ring-1 ring-white/20 transition hover:bg-white/20"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20">
                  <Icon size={18} className="text-white" />
                </span>
                <span className="text-2xl font-black text-white">{stat.value}</span>
                <span className="text-xs font-semibold text-white/70">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── SECTION 5 — REACTIONS ────────────────────── */

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

function ReactionCard({ person, accent }) {
  return (
    <div className={`relative flex flex-col gap-5 rounded-3xl bg-white p-6 ring-1 ring-neutral-100 shadow-sm dark:bg-neutral-900 dark:ring-neutral-800`}>
      {/* Quote icon */}
      <Quote size={28} className={`shrink-0 ${accent}`} />
      <p className="flex-1 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
        "{person.quote}"
      </p>
      <div className="flex items-center justify-between gap-4 border-t border-neutral-100 pt-4 dark:border-neutral-800">
        <div className="flex items-center gap-3">
          <img
            src={person.avatar}
            alt={person.name}
            className="h-10 w-10 rounded-full object-cover ring-2 ring-violet-100 dark:ring-violet-950/50"
          />
          <div>
            <p className="text-sm font-extrabold text-neutral-950 dark:text-white">{person.name}</p>
            <p className="text-[11px] text-neutral-500">{person.role}</p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <StarRating count={person.rating} />
          <p className="mt-1 text-[10px] font-semibold text-neutral-400">{person.event}</p>
        </div>
      </div>
    </div>
  );
}

function Reactions() {
  const [tab, setTab] = useState("parents");

  const reactions = tab === "parents" ? parentReactions : studentReactions;
  const accentClass = tab === "parents" ? "text-rose-400" : "text-violet-400";

  return (
    <section className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-violet-700 dark:bg-violet-950/40 dark:text-violet-400">
            <Heart size={12} />
            What People Say
          </span>
          <h2 className="max-w-2xl text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            Reactions that warm our hearts
          </h2>
          <p className="max-w-xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
            From parents who cheered from the gallery to students who found themselves on the stage — the events at Ignite leave a lasting impression.
          </p>

          {/* Toggle */}
          <div className="flex rounded-full bg-neutral-100 p-1 dark:bg-neutral-800">
            <button
              type="button"
              onClick={() => setTab("parents")}
              className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                tab === "parents"
                  ? "bg-white text-neutral-950 shadow-sm dark:bg-neutral-950 dark:text-white"
                  : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
              }`}
            >
              👨‍👩‍👧 Parent Reactions
            </button>
            <button
              type="button"
              onClick={() => setTab("students")}
              className={`rounded-full px-5 py-2 text-sm font-bold transition ${
                tab === "students"
                  ? "bg-white text-neutral-950 shadow-sm dark:bg-neutral-950 dark:text-white"
                  : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
              }`}
            >
              🎓 Student Reactions
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reactions.map((p) => (
            <ReactionCard key={p.id} person={p} accent={accentClass} />
          ))}
        </div>

        {/* Divider quote */}
        <div className="mt-14 flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-700 px-8 py-10 text-center">
          <Quote size={32} className="text-violet-200 opacity-50" />
          <p className="max-w-2xl text-xl font-extrabold italic leading-snug text-white sm:text-2xl">
            "Every event at Ignite is designed with one purpose — to give students a memory they will build upon for the rest of their lives."
          </p>
          <p className="text-sm font-bold text-violet-200">— The Ignite Faculty</p>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── SECTION 6 — ABOUT IGNITE ─────────────────── */

function AboutIgnite() {
  const pillars = [
    {
      icon: Flame,
      title: "Igniting Potential",
      text: "We believe every student carries extraordinary ability. Our role is to create the right spark — through world-class teachers, structured programs, and a culture of excellence.",
      color: "violet",
    },
    {
      icon: GraduationCap,
      title: "Academic Rigour",
      text: "From Foundation to JC 2, our curriculum blends conceptual depth with exam readiness, preparing students for IIT-JEE, NEET, boards and beyond.",
      color: "sky",
    },
    {
      icon: Heart,
      title: "Holistic Growth",
      text: "Academics are just one part. Sports, arts, personality development and community events ensure our students grow into confident, well-rounded individuals.",
      color: "rose",
    },
    {
      icon: Trophy,
      title: "A Legacy of Results",
      text: "18+ years of top ranks, national selections and board toppers. Our results speak for the consistency and commitment we bring to every batch.",
      color: "amber",
    },
  ];

  return (
    <section className="bg-neutral-50 px-6 py-24 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-violet-700 dark:bg-violet-950/40 dark:text-violet-400">
            <Sparkles size={13} />
            About Ignite
          </span>
          <h2 className="max-w-3xl text-4xl font-extrabold leading-tight text-neutral-950 sm:text-5xl dark:text-white">
            Building India's next generation of scholars and leaders
          </h2>
          <p className="max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Ignite Academy, Hyderabad, is a premium Junior College & School that has shaped over
            12 000 students across 18 years. Our campus combines rigorous academics with a vibrant
            co-curricular life, residential facilities, and a faculty of experienced educators
            dedicated to making every student succeed.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            const c = colorMap[p.color];
            return (
              <div
                key={p.title}
                className="flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <span className={`grid h-11 w-11 place-items-center rounded-2xl ${c.icon}`}>
                  <Icon size={20} />
                </span>
                <h3 className="text-base font-extrabold text-neutral-950 dark:text-white">{p.title}</h3>
                <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">{p.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-8 rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-700 p-8 text-center sm:flex-row sm:rounded-full sm:px-10 sm:text-left">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-violet-200">Come visit us</p>
            <h3 className="mt-2 text-xl font-extrabold text-white">
              See Ignite firsthand — schedule a campus tour.
            </h3>
          </div>
          <div className="flex shrink-0 flex-wrap justify-center gap-3">
            <RouteLink
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-violet-700 transition hover:bg-violet-50"
            >
              Contact Us <ArrowRight size={14} />
            </RouteLink>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/20">
              <MapPin size={13} /> Hyderabad
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────── PAGE ──────────────────────────────────────── */

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      <EventHero />
      <EventTypes />
      <EventGallery />
      <StatsStrip />
      <Reactions />
      <AboutIgnite />
    </div>
  );
}
