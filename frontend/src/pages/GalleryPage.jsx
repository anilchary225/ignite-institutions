import { useEffect, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Images,
  MapPin,
  Play,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { RouteLink } from "../router/BrowserRouter";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=85",
    eyebrow: "Annual Fest · 2025",
    title: "A campus full of energy, ideas, and unforgettable moments.",
    description:
      "From stage lights to cheering crowds, every Ignite celebration gives students a chance to find their voice.",
    tone: "from-violet-950/95 via-violet-950/55 to-transparent",
  },
  {
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1800&q=85",
    eyebrow: "Student Life · Every Day",
    title: "Learning continues long after the classroom bell.",
    description:
      "Explore the activities, collaborations, and friendships that make life at Ignite memorable.",
    tone: "from-sky-950/95 via-sky-950/55 to-transparent",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1800&q=85",
    eyebrow: "Ignite Programs · Together",
    title: "Big experiences that build confident young leaders.",
    description:
      "Our workshops, competitions, and community programs turn curiosity into action.",
    tone: "from-amber-950/95 via-amber-950/55 to-transparent",
  },
];

const recentPrograms = [
  {
    image:
      "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1000&q=85",
    category: "Cultural Fest",
    date: "March 15, 2025",
    title: "Ignite Utsav: A celebration of talent",
    description:
      "Music, dance, theatre, and art came together for an evening led entirely by our students.",
    icon: Sparkles,
    color: "violet",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85",
    category: "Student Activities",
    date: "February 28, 2025",
    title: "Ideas that turn into action",
    description:
      "Teams presented creative solutions, experiments, and community projects at our annual showcase.",
    icon: Trophy,
    color: "amber",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=85",
    category: "Campus Life",
    date: "February 12, 2025",
    title: "Making memories between lessons",
    description:
      "Games, clubs, and shared moments help our students build friendships that last beyond school.",
    icon: Users,
    color: "sky",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=85",
    category: "Special Program",
    date: "January 26, 2025",
    title: "Learning from inspiring voices",
    description:
      "Guest sessions and mentorship programs connect students with new ideas, experiences, and possibilities.",
    icon: Sparkles,
    color: "emerald",
  },
  {
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=85",
    category: "Annual Day",
    date: "January 10, 2025",
    title: "Every achievement deserves a spotlight",
    description:
      "We celebrated academic milestones, sporting achievements, and the everyday progress of our learners.",
    icon: Trophy,
    color: "rose",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85",
    category: "Learning Program",
    date: "December 18, 2024",
    title: "Curiosity in every corner",
    description:
      "Hands-on workshops make complex ideas approachable and encourage students to keep asking why.",
    icon: Images,
    color: "indigo",
  },
];

const colorStyles = {
  violet: "bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300",
  amber: "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
  sky: "bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300",
  emerald: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
  rose: "bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300",
  indigo: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300",
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
    <section className="px-4 pb-10 pt-5 sm:px-6 sm:pt-8">
      <div
        className="group relative mx-auto h-[620px] max-w-[1440px] overflow-hidden rounded-[2rem] bg-neutral-900 shadow-[0_24px_80px_rgba(42,25,86,0.2)] sm:h-[680px]"
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
              <div className={`absolute inset-0 bg-gradient-to-t ${slide.tone}`} />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-8 p-7 sm:p-12 lg:p-16">
          <div className="max-w-2xl text-white">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-200">
              {heroSlides[current].eyebrow}
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              {heroSlides[current].title}
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              {heroSlides[current].description}
            </p>
            <RouteLink
              to="/gallery/events"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-neutral-950 transition hover:bg-violet-100"
            >
              Explore our events
              <ArrowRight size={16} />
            </RouteLink>
          </div>

          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => moveSlide(-1)}
              aria-label="Previous gallery slide"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-neutral-950"
            >
              <ChevronLeft size={19} />
            </button>
            <button
              type="button"
              onClick={() => moveSlide(1)}
              aria-label="Next gallery slide"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-neutral-950"
            >
              <ChevronRight size={19} />
            </button>
          </div>
        </div>

        <div className="absolute bottom-7 right-7 flex gap-1.5 sm:bottom-12 sm:left-12 sm:right-auto lg:bottom-16 lg:left-16">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Show gallery slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                current === index ? "w-9 bg-white" : "w-2 bg-white/45"
              }`}
            />
          ))}
        </div>
      </div>
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
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-5 rounded-3xl border border-neutral-200 bg-white p-3 shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:flex-row sm:rounded-full sm:pl-6 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-center gap-3 px-3 text-center sm:text-left">
          <span className="hidden h-9 w-9 place-items-center rounded-full bg-violet-100 text-violet-700 sm:grid dark:bg-violet-950/50 dark:text-violet-300">
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
            <RouteLink
              key={label}
              to={href}
              className="flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold text-neutral-600 transition hover:bg-violet-600 hover:text-white sm:flex-none dark:text-neutral-300"
            >
              <Icon size={15} />
              {label}
            </RouteLink>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ program }) {
  const Icon = program.icon;
  return (
    <article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-neutral-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-neutral-900 dark:ring-neutral-800">
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        <img
          src={program.image}
          alt={program.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent opacity-70" />
        <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-neutral-800 backdrop-blur-sm">
          {program.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
          <CalendarDays size={14} className="text-violet-500" />
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
            to="/gallery/events"
            className="inline-flex items-center gap-1.5 text-sm font-extrabold text-violet-700 transition hover:gap-2.5 dark:text-violet-400"
          >
            View event
            <ArrowRight size={15} />
          </RouteLink>
        </div>
      </div>
    </article>
  );
}

function RecentPrograms() {
  return (
    <section className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-violet-500" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-violet-700 dark:text-violet-400">
                From the campus
              </span>
            </div>
            <h2 className="mt-5 text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
              Recent programs & moments
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
              A closer look at the fests, activities, events, and programs that
              keep Ignite growing beyond the classroom.
            </p>
          </div>
          <RouteLink
            to="/gallery/photos"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-extrabold text-neutral-950 transition hover:text-violet-700 dark:text-white dark:hover:text-violet-400"
          >
            View all photos
            <ArrowRight size={16} />
          </RouteLink>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentPrograms.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryNote() {
  return (
    <section className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-3xl bg-violet-50 p-8 sm:flex-row sm:items-center sm:p-10 dark:bg-violet-950/20">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-700 dark:text-violet-400">
            Keep exploring
          </p>
          <h2 className="mt-3 text-2xl font-extrabold text-neutral-950 dark:text-white">
            Every day at Ignite has a story worth sharing.
          </h2>
          <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
            Visit our gallery again for new snapshots from campus life.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3 text-xs font-bold text-violet-700 dark:text-violet-300">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 dark:bg-neutral-900">
            <Clock3 size={14} /> Always something new
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 dark:bg-neutral-900">
            <MapPin size={14} /> Hyderabad
          </span>
        </div>
      </div>
    </section>
  );
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      <GalleryHero />
      <GalleryStrap />
      <RecentPrograms />
      <GalleryNote />
    </div>
  );
}