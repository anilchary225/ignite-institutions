import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Images,
  MapPin,
  Play,
} from "lucide-react";
import { RouteLink } from "../router/BrowserRouter";
import { EVENT_ALBUMS, getEventImage } from "../data/eventGalleryData";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  staggerItem,
  cardReveal,
  imageReveal,
  defaultViewport,
  scaleIn,
} from "../animations/variants";

// Keep gallery highlights and album links in sync with the shared event collection.
const heroSlides = EVENT_ALBUMS.slice(0, 3).map((album) => ({
  image: getEventImage(album, "galleryHero"),
  eyebrow: album.dateLabel ? `${album.title} · ${album.dateLabel}` : album.title,
  title: album.title,
  description: album.paragraph || album.description,
  tone: "from-blue-950/95 via-blue-950/55 to-transparent",
}));

const recentPrograms = EVENT_ALBUMS.slice(0, 9).map((album) => ({
  image: getEventImage(album, "galleryCard"),
  category: album.title,
  date: album.dateLabel || `${album.photos.length} photos`,
  title: album.title,
  description: album.description,
  icon: Images,
  color: "blue",
  path: `/gallery/events/${album.id}`,
}));

const colorStyles = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
  amber: "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
  sky: "bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300",
  emerald: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
  green: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
  rose: "bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300",
  indigo: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300",
  purple: "bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300",
  yellow: "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
  gold: "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
  orange: "bg-orange-100 text-orange-700 dark:bg-orange-950/40 dark:text-orange-300",
};

function GalleryHero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;
    const timer = window.setInterval(() => {
      setCurrent((index) => (index + 1) % heroSlides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  function moveSlide(direction) {
    setCurrent((index) => (index + direction + heroSlides.length) % heroSlides.length);
  }

  return (
    <section className="px-4 pb-10 pt-5 sm:px-6 sm:pt-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="group relative mx-auto h-[620px] max-w-7xl overflow-hidden rounded-[2rem] bg-neutral-900 shadow-[0_24px_80px_rgba(42,25,86,0.2)] sm:h-[680px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {heroSlides.map((slide) => (
            <div key={slide.title} className="relative h-full min-w-full shrink-0">
              <img
                src={slide.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className={`absolute inset-0 bg-linear-to-t ${slide.tone}`} />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-8 p-7 sm:p-12 lg:p-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-2xl text-white"
            >
              <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-200">
                {heroSlides[current].eyebrow}
              </p>
              <h1 className="mt-4 max-w-2xl text-xl font-extrabold leading-[1.05] sm:text-3xl lg:text-4xl">
                {heroSlides[current].title}
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                {heroSlides[current].description}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-block"
              >
                <RouteLink
                  to="/gallery/events"
                  className="my-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[10px] font-black text-neutral-950 transition hover:bg-blue-100"
                >
                  Explore our events
                  <ArrowRight size={16} />
                </RouteLink>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={() => moveSlide(-1)}
              aria-label="Previous gallery slide"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-neutral-950"
            >
              <ChevronLeft size={19} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={() => moveSlide(1)}
              aria-label="Next gallery slide"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-neutral-950"
            >
              <ChevronRight size={19} />
            </motion.button>
          </div>
        </div>

        <div className="absolute bottom-7 right-7 flex gap-1.5 sm:bottom-12 sm:left-12 sm:right-auto lg:bottom-16 lg:left-16">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Show gallery slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === index ? "w-9 bg-white" : "w-2 bg-white/45"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function GalleryStrap() {
  const links = [
    { label: "Photos", href: "/gallery/photos", icon: Images },
    { label: "Videos", href: "/gallery/videos", icon: Play },
    { label: "Events", href: "/gallery/events", icon: CalendarDays },
  ];

  return (
    <section className="relative z-10 -mt-1 px-6 pb-16">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-5 rounded-3xl border border-neutral-200 bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:flex-row sm:rounded-full sm:pl-6 dark:border-neutral-800 dark:bg-neutral-900"
      >
        <div className="flex items-center gap-3 px-3 text-center sm:text-left">
          <span className="hidden h-9 w-9 place-items-center rounded-full bg-blue-100 text-blue-700 sm:grid dark:bg-blue-950/50 dark:text-blue-300">
            <Images size={17} />
          </span>
          <div>
            <p className="text-sm font-extrabold text-neutral-950 dark:text-white">
              See Ignite in action
            </p>
            <p className="text-xs text-neutral-500">Browse our campus stories</p>
          </div>
        </div>
        <div className="flex w-full gap-2 sm:w-auto">
          {links.map(({ label, href, icon: Icon }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="flex-1 sm:flex-none"
            >
              <RouteLink
                to={href}
                className="flex w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold text-neutral-600 transition hover:bg-blue-600 hover:text-white dark:text-neutral-300"
              >
                <Icon size={15} />
                {label}
              </RouteLink>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProgramCard({ program }) {
  const Icon = program.icon;
  return (
    <motion.article
      variants={cardReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: "some" }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-neutral-100 transition duration-300 hover:shadow-xl dark:bg-neutral-900 dark:ring-neutral-800"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        <img
          src={program.image}
          alt={program.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/45 to-transparent opacity-70" />
        <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-neutral-800 backdrop-blur-sm">
          {program.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
          <CalendarDays size={14} className="text-blue-500" />
          {program.date}
        </div>
        <h3 className="mt-4 text-xl font-extrabold leading-tight text-neutral-950 dark:text-white">
          {program.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
          {program.description}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <span className={`grid h-9 w-9 place-items-center rounded-xl ${colorStyles[program.color]}`}>
            <Icon size={16} />
          </span>
          <RouteLink
            to={program.path}
            className="inline-flex items-center gap-1.5 text-sm font-extrabold text-blue-700 transition hover:gap-2.5 dark:text-blue-400"
          >
            View images
            <ArrowRight size={15} />
          </RouteLink>
        </div>
      </div>
    </motion.article>
  );
}

function RecentPrograms() {
  return (
    <section className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: "some" }}
          className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="h-px w-12 bg-blue-500" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
                From the campus
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="mt-5 text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
              Recent programs & moments
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
              A closer look at the fests, activities, events, and programs that
              keep Ignite growing beyond the classroom.
            </motion.p>
          </div>
          <motion.div variants={fadeUp}>
            <RouteLink
              to="/gallery/photos"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-extrabold text-neutral-950 transition hover:text-blue-700 dark:text-white dark:hover:text-blue-400"
            >
              View all photos
              <ArrowRight size={16} />
            </RouteLink>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: "some" }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {recentPrograms.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <RouteLink to='/gallery/photos' className="mt-10 inline-flex items-center gap-2 text-sm font-extrabold text-neutral-950 border-2 border-blue-500 hover:bg-blue-600 hover:text-white rounded-4xl px-5 py-3 transition dark:text-white dark:hover:bg-blue-600 dark:hover:text-white">
              View more
            </RouteLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function GalleryNote() {
  return (
    <section className="bg-white px-6 py-20 dark:bg-neutral-950 overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-3xl bg-blue-50 p-8 sm:flex-row sm:items-center sm:p-10 dark:bg-blue-950/20"
      >
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
            Keep exploring
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-neutral-950 dark:text-white">
            Every day at Ignite has a story worth sharing.
          </h2>
          <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
            Visit our gallery again for new snapshots from campus life.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3 text-xs font-bold text-blue-700 dark:text-blue-300">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 dark:bg-neutral-900 cursor-default shadow-xs"
          >
            <Clock3 size={14} /> Always something new
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 dark:bg-neutral-900 cursor-default shadow-xs"
          >
            <MapPin size={14} /> Hyderabad
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}

export default function GalleryPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen pt-16 bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white"
    >
      <GalleryHero />
      <GalleryStrap />
      <RecentPrograms />
      <GalleryNote />
    </motion.div>
  );
}
