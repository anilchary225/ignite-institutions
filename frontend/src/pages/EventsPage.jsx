import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Flame,
  Play,
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
import { EVENT_FEATURED_CARDS, EVENT_GALLERY_IMAGES, EVENT_ALBUMS } from "../data/eventGalleryData";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  staggerItem,
  cardReveal,
  defaultViewport,
  scaleIn,
} from "../animations/variants";

/* ─────────────────────────── DATA ─────────────────────────── */

let heroEvents = [
  {
    id: "h1",
    image:
      "/assets/images/events/Udbhava/3X7A3494.webp",
    eyebrow: "Udbava · March 2025",
    title: "Udbava 2025 - A Celebration of Beginnings",
    description:
      "A vibrant gathering filled with energy, creativity, and student performances that marked a memorable celebration of culture and community.",
    tag: "Udbava",
    tagColor: "blue",
    date: "March 20, 2025",
    venue: "Ignite Main Auditorium",
    attendees: "2 000+",
  },
  {
    id: "h2",
    image:
      "/assets/images/events/Ullaas/_NNR7439.webp",
    eyebrow: "Ullas · February 2025",
    title: "Ullas 2025 - Joy in Every Moment",
    description:
      "An evening of music, dance, and celebration where students came together to showcase talent and shared school spirit.",
    tag: "Ullas",
    tagColor: "amber",
    date: "February 14, 2025",
    venue: "Open-Air Amphitheatre",
    attendees: "1 500+",
  },
  {
    id: "h3",
    image: "/assets/images/events/Vybhava/ARM02891.webp",
    eyebrow: "Vybhava · January 2025",
    title: "Vybhava 2025 - A Celebration of Expression",
    description:
      "A vibrant celebration of creativity, culture, and student talent, bringing together performances and moments that reflected the spirit of Vybhava.",
    tag: "Vybhava",
    tagColor: "sky",
    date: "January 28, 2025",
    venue: "Campus Wellness Lawn",
    attendees: "800+",
  }
];

// The first cards are the most recently added albums, so keep the hero current too.
heroEvents = EVENT_FEATURED_CARDS.slice(0, 3).map((event, index) => ({
  id: event.id,
  image: event.image,
  eyebrow: `${event.title} · Latest event`,
  title: event.title,
  description: event.description,
  tag: event.title,
  tagColor: ["blue", "amber", "sky"][index],
  date: "Latest gallery",
  venue: "Ignite campus",
  attendees: event.count,
}));

const eventTypes = EVENT_FEATURED_CARDS.map((card, index) => {
  const iconList = [Trophy, Music, FlaskConical, Dumbbell, Mic2, Lightbulb];
  const colorList = ["blue", "amber", "sky", "emerald", "rose", "indigo"];
  return {
    icon: iconList[index] ?? Trophy,
    label: card.title,
    count: card.count,
    color: colorList[index] ?? "blue",
    image: card.image,
    description: card.description,
  };
});

const galleryImages = EVENT_GALLERY_IMAGES;

const statsData = [
  { value: "500+", label: "Events Hosted", icon: CalendarDays, color: "blue" },
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
      "The Annual Day was absolutely breathtaking. Watching my son perform on that grand stage filled with 2000 people was something I'll cherish forever. Ignite doesn't just teach - it transforms.",
    event: "Annual Day 2025",
    rating: 5,
  },
  {
    id: "p2",
    name: "Mr. Suresh Kumar",
    role: "Parent of Class-10 Student",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
    quote:
      "I attended the Science Expo with very high expectations - and Ignite still managed to exceed them. My daughter's project on renewable energy showed a depth of thinking I didn't realise she had.",
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
      "Both my children have been shaped by events at Ignite - from the sports day discipline to the cultural fest confidence. No other institution invests so deeply in the whole child.",
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
      "Utsav was the night I stopped being shy. I'd never performed on stage before. My friends pushed me, the teachers believed in me - and the crowd gave me a standing ovation. That moment rewired me.",
    event: "Utsav Cultural Fest",
    rating: 5,
  },
  {
    id: "s2",
    name: "Arjun Mehta",
    role: "Class-11, BIPC · NEET Aspirant",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    quote:
      "The guest lecture by last year's NEET AIR-12 ranker was a turning point for me. He broke down exactly how he studied, what mistakes to avoid - real, honest advice that no coaching book gives you.",
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
  blue: {
    icon: "bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-300",
    badge: "bg-blue-600 text-white",
    ring: "ring-blue-500",
    glow: "shadow-blue-500/20",
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
  blue: "bg-blue-600 text-white",
  amber: "bg-amber-500 text-white",
  sky: "bg-sky-500 text-white",
};

const eventAlbumLinks = Object.fromEntries(EVENT_ALBUMS.map((album) => [album.title, `/gallery/events/${album.id}`]));

/* ─────────────────────── LIGHTBOX ─────────────────────────── */

function Lightbox({ image, onClose }) {
  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") onClose(); }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-white hover:text-neutral-950"
          aria-label="Close image"
        >
          <X size={16} />
        </motion.button>
        <img src={image.src} alt={image.label} className="w-full object-cover" />
        <div className="bg-neutral-950 px-5 py-4">
          <p className="font-extrabold text-white">{image.label}</p>
          <p className="mt-0.5 text-sm text-neutral-400">{image.event}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ──────────────── SECTION 1 - HERO ─────────────────────────── */

function EventHero() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ev = heroEvents[active];
  const currentAlbum = EVENT_ALBUMS[active]?.id ?? EVENT_ALBUMS[0]?.id ?? "annual-day-2025";

  useEffect(() => {
    if (isPaused) return undefined;
    const t = window.setInterval(() => setActive((i) => (i + 1) % heroEvents.length), 6000);
    return () => window.clearInterval(t);
  }, [isPaused]);

  return (
    <section className="px-4 pb-10 pt-5 sm:px-6 sm:pt-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
          <div className="absolute inset-0 bg-linear-to-r from-neutral-950/95 via-neutral-950/65 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-neutral-950/60 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-12 lg:p-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              {/* Left */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={ev.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="max-w-2xl"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-widest ${tagColorMap[ev.tagColor]}`}>
                      {ev.tag}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-white/60">{ev.eyebrow}</span>
                  </div>
                  <h1 className="mt-5 text-2xl font-extrabold leading-[1.05] text-white sm:text-3xl lg:text-4xl">
                    {ev.title}
                  </h1>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">{ev.description}</p>
                  <div className="mt-5 flex flex-wrap gap-5 text-xs font-semibold text-white/60">
                    <span className="flex items-center gap-1.5"><CalendarDays size={13} />{ev.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={13} />{ev.venue}</span>
                    <span className="flex items-center gap-1.5"><Users size={13} />{ev.attendees} attendees</span>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                      <RouteLink
                        to='/gallery/photos'
                        className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-900/40 transition hover:bg-blue-500 hover:gap-4"
                      >
                        <Camera size={15} />
                        View Photo Gallery
                      </RouteLink>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
                      <RouteLink
                        to="/gallery/videos"
                        className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-black text-white transition hover:bg-white hover:text-neutral-950"
                      >
                        <Play size={15} />
                        More Videos
                      </RouteLink>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Right - event strip */}
              <div className="hidden shrink-0 flex-col gap-3 lg:flex">
                {heroEvents.map((e, i) => (
                  <motion.button
                    key={e.id}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
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
                  </motion.button>
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
      </motion.div>
    </section>
  );
}

/* ──────────────── SECTION 2 - EVENT TYPES ──────────────────── */

function EventTypes() {
  return (
    <section className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="h-px w-10 bg-blue-500" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
                What We Celebrate
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
              Every event, every student
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-2 max-w-xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              From grand award nights to quiet afternoon workshops - Ignite builds a calendar around every interest.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {eventTypes.map((et) => {
            const Icon = et.icon;
            const c = colorMap[et.color];
            return (
              <motion.div
                key={et.label}
                variants={cardReveal}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group overflow-hidden rounded-3xl bg-white ring-1 ring-neutral-100 shadow-sm transition hover:shadow-xl dark:bg-neutral-900 dark:ring-neutral-800"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={et.image}
                    alt={et.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────── SECTION 3 - IMAGE GALLERY SCROLL ─────────── */

function EventGallery() {
  const trackRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  function scroll(dir) {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  }

  return (
    <>
      <AnimatePresence>
        {lightbox && <Lightbox image={lightbox} onClose={() => setLightbox(null)} />}
      </AnimatePresence>

      <section className="bg-neutral-950 py-20 overflow-hidden">
        <div className="px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="mx-auto flex max-w-7xl items-end justify-between gap-6"
          >
            <div>
              <motion.div variants={fadeUp} className="flex items-center gap-3">
                <span className="h-px w-10 bg-blue-500" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                  Captured Moments
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                Snapshots from our events
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-2 max-w-lg text-sm leading-6 text-neutral-400">
                Every event tells a story. Scroll through the moments that made our campus come alive.
              </motion.p>
            </div>
            <div className="hidden shrink-0 items-center gap-2 sm:flex">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={() => scroll(-1)}
                aria-label="Scroll left"
                className="grid h-11 w-11 place-items-center rounded-full border border-neutral-700 text-neutral-400 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <ChevronLeft size={19} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="button"
                onClick={() => scroll(1)}
                aria-label="Scroll right"
                className="grid h-11 w-11 place-items-center rounded-full border border-neutral-700 text-neutral-400 transition hover:border-blue-500 hover:bg-blue-600 hover:text-white"
              >
                <ChevronRight size={19} />
              </motion.button>
            </div>
          </motion.div>

          {/* Track */}
          <div
            ref={trackRef}
            className="mx-auto mt-8 flex max-w-7xl gap-4 overflow-x-auto pb-4"
            style={{ scrollbarWidth: "none" }}
          >
            {galleryImages.map((img) => (
              <motion.button
                key={img.id}
                type="button"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setLightbox(img)}
                className="group relative shrink-0 w-56 sm:w-64 overflow-hidden rounded-2xl bg-neutral-800 ring-1 ring-neutral-700 transition hover:shadow-xl focus:outline-none"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
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
              </motion.button>
            ))}
          </div>

          <p className="mx-auto mt-2 max-w-7xl text-center text-xs text-neutral-700 sm:hidden">← Swipe to explore →</p>
        </div>
      </section>
    </>
  );
}

/* ──────────────── SECTION 4 - STATS STRIP ──────────────────── */

function StatsStrip() {
  return (
    <section className="bg-linear-to-r from-blue-700 via-blue-600 to-indigo-600 px-6 py-14 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-10 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-white">
            <Zap size={13} fill="white" />
            Events by the Numbers
          </span>
          <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
            500+ successful events and counting
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {statsData.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={cardReveal}
                whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.22)" }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center gap-3 rounded-2xl bg-white/15 p-5 text-center backdrop-blur-sm ring-1 ring-white/20"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20">
                  <Icon size={18} className="text-white" />
                </span>
                <span className="text-2xl font-black text-white">{stat.value}</span>
                <span className="text-xs font-semibold text-white/70">{stat.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────── SECTION 5 - REACTIONS ────────────────────── */

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
    <motion.div
      variants={cardReveal}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="relative flex flex-col gap-5 rounded-3xl bg-white p-6 ring-1 ring-neutral-100 shadow-sm dark:bg-neutral-900 border-2 border-neutral-100 hover:shadow-2xl dark:ring-neutral-800"
    >
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
            className="h-10 w-10 rounded-full object-cover ring-2 ring-blue-100 dark:ring-blue-950/50"
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
    </motion.div>
  );
}

function Reactions() {
  const [tab, setTab] = useState("parents");

  const reactions = tab === "parents" ? parentReactions : studentReactions;
  const accentClass = tab === "parents" ? "text-rose-400" : "text-blue-400";

  return (
    <section className="bg-white px-6 py-20 dark:bg-neutral-950 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="flex flex-col items-center gap-5 text-center"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-blue-700 dark:bg-blue-950/40 dark:text-blue-400">
            <Heart size={12} />
            What People Say
          </motion.span>
          <motion.h2 variants={fadeUp} className="max-w-2xl text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            Reactions that warm our hearts
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
            From parents who cheered from the gallery to students who found themselves on the stage - the events at Ignite leave a lasting impression.
          </motion.p>

          {/* Toggle */}
          <motion.div variants={fadeUp} className="flex rounded-full bg-neutral-100 p-1 dark:bg-neutral-800">
            <button
              type="button"
              onClick={() => setTab("parents")}
              className={`rounded-full px-5 py-2 text-sm font-bold transition duration-200 ${
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
              className={`rounded-full px-5 py-2 text-sm font-bold transition duration-200 ${
                tab === "students"
                  ? "bg-white text-neutral-950 shadow-sm dark:bg-neutral-950 dark:text-white"
                  : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
              }`}
            >
              🎓 Student Reactions
            </button>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit="hidden"
            viewport={defaultViewport}
            className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {reactions.map((p) => (
              <ReactionCard key={p.id} person={p} accent={accentClass} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Divider quote */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-14 flex flex-col items-center gap-4 rounded-3xl bg-linear-to-br from-blue-600 to-indigo-700 px-8 py-10 text-center shadow-lg"
        >
          <Quote size={32} className="text-blue-200 opacity-50" />
          <p className="max-w-2xl text-xl font-extrabold italic leading-snug text-white sm:text-2xl">
            "Every event at Ignite is designed with one purpose - to give students a memory they will build upon for the rest of their lives."
          </p>
          <p className="text-sm font-bold text-blue-200">- The Ignite Faculty</p>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────── SECTION 6 - ABOUT IGNITE ─────────────────── */

function AboutIgnite() {
  const pillars = [
    {
      icon: Flame,
      title: "Igniting Potential",
      text: "We believe every student carries extraordinary ability. Our role is to create the right spark - through world-class teachers, structured programs, and a culture of excellence.",
      color: "blue",
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
    <section className="bg-neutral-50 px-6 py-24 dark:bg-neutral-900/40 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="flex flex-col items-center gap-5 text-center"
        >
          <motion.span variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-blue-700 dark:bg-blue-950/40 dark:text-blue-400">
            <Sparkles size={13} />
            About Ignite
          </motion.span>
          <motion.h2 variants={fadeUp} className="max-w-3xl text-4xl font-extrabold leading-tight text-neutral-950 sm:text-5xl dark:text-white">
            Building India's next generation of scholars and leaders
          </motion.h2>
          <motion.p variants={fadeUp} className="max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Ignite Academy, Hyderabad, is a premium Junior College & School that has shaped over
            12 000 students across 18 years. Our campus combines rigorous academics with a vibrant
            co-curricular life, residential facilities, and a faculty of experienced educators
            dedicated to making every student succeed.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((p) => {
            const Icon = p.icon;
            const c = colorMap[p.color];
            return (
              <motion.div
                key={p.title}
                variants={cardReveal}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm hover:border-blue-500 hover:shadow-2xl dark:border-neutral-800 dark:bg-neutral-900 transition"
              >
                <span className={`grid h-11 w-11 place-items-center rounded-2xl ${c.icon}`}>
                  <Icon size={20} />
                </span>
                <h3 className="text-base font-extrabold text-neutral-950 dark:text-white">{p.title}</h3>
                <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">{p.text}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-14 flex flex-col items-center justify-between gap-8 rounded-3xl bg-linear-to-br from-blue-600 to-indigo-700 p-8 text-center sm:flex-row sm:rounded-full sm:px-10 sm:text-left shadow-lg"
        >
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-blue-200">Come visit us</p>
            <h3 className="mt-2 text-xl font-extrabold text-white">
              See Ignite firsthand - schedule a campus tour.
            </h3>
          </div>
          <div className="flex shrink-0 flex-wrap justify-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <RouteLink
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-blue-700 transition hover:bg-blue-50"
              >
                Contact Us <ArrowRight size={14} />
              </RouteLink>
            </motion.div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/20">
              <MapPin size={13} /> Hyderabad
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function EventsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen pt-16 bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white"
    >
      <EventHero />
      <EventTypes />
      <EventGallery />
      <StatsStrip />
      <Reactions />
      <AboutIgnite />
    </motion.div>
  );
}
