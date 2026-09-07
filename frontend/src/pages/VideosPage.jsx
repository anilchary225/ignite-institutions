import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Eye,
  Flame,
  GraduationCap,
  Heart,
  MapPin,
  Mic2,
  Play,
  Star,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import { RouteLink } from "../router/BrowserRouter";

/* ─────────────────────────── DATA ─────────────────────────── */

const featuredVideos = [
  {
    id: "v1",
    thumb: "/assets/videos/CELEBRATIONS VID.webm",
    eyebrow: "Annual Day · 2025",
    title: "Celebrations - Annual Day Highlights",
    description:
      "A grand Annual Day showcase featuring student performances, stage moments, awards, and celebrations across the campus.",
    duration: "18 min",
    date: "March 20, 2025",
    views: "12.4K",
    tag: "Annual Day",
    tagColor: "orange",
    youtubeId: null,
  },
  {
    id: "v2",
    thumb: "/assets/videos/COMMUNITY REACH PROGRAMS BY IGNITE.webm",
    eyebrow: "Community Reach Programs · 2025",
    title: "Community Reach Programs by Ignite",
    description:
      "A look at Ignite’s outreach initiatives, student involvement, and community-focused programs that extend learning beyond the classroom.",
    duration: "24 min",
    date: "February 14, 2025",
    views: "9.1K",
    tag: "Community",
    tagColor: "amber",
    youtubeId: null,
  },
  {
    id: "v3",
    thumb: "/assets/videos/FACILITIES VID.webm",
    eyebrow: "Facilities · 2025",
    title: "Facilities Video - Campus Infrastructure Tour",
    description:
      "A guided tour of Ignite’s campus facilities, highlighting classrooms, labs, activity spaces, and student-friendly infrastructure.",
    duration: "15 min",
    date: "January 28, 2025",
    views: "7.8K",
    tag: "Facilities",
    tagColor: "sky",
    youtubeId: null,
  },
];

const scrollVideos = [
  {
    id: "s1",
    thumb: "/assets/videos/CELEBRATIONS VID.webm",
    title: "Celebrations",
    duration: "18 min",
    views: "12.4K",
    date: "Mar 20, 2025",
  },
  {
    id: "s2",
    thumb: "/assets/videos/COMMUNITY REACH PROGRAMS BY IGNITE.webm",
    title: "Community Reach Programs by Ignite",
    duration: "24 min",
    views: "9.1K",
    date: "Feb 14, 2025",
  },
  {
    id: "s3",
    thumb: "/assets/videos/FACILITIES VID.webm",
    title: "Facilities",
    duration: "15 min",
    views: "7.8K",
    date: "Jan 28, 2025",
  },
  {
    id: "s4",
    thumb: "/assets/videos/EVENTS @ IGNITE.webm",
    title: "Events at Ignite",
    duration: "20 min",
    views: "5.2K",
    date: "2025",
  },
  {
    id: "s5",
    thumb: "/assets/videos/FORMATION DAY VID.webm",
    title: "Formation Day",
    duration: "20 min",
    views: "3.4K",
    date: "2025",
  },
  {
    id: "s6",
    thumb: "/assets/videos/JULY EVENTS VIDEO.webm",
    title: "July Events",
    duration: "30 min",
    views: "14K",
    date: "2025",
  },
  {
    id: "s7",
    thumb: "/assets/videos/madam's sports video.webm",
    title: "Madam's Sports",
    duration: "11 min",
    views: "6.3K",
    date: "2025",
  },
  {
    id: "s8",
    thumb: "/assets/videos/swatchrunvideo.webm",
    title: "Swachh Run",
    duration: "8 min",
    views: "2.9K",
    date: "2025",
  },
];

const statsData = [
  { value: "500+", label: "Events Hosted", icon: CalendarDays, color: "orange" },
  { value: "12 000+", label: "Students Reached", icon: Users, color: "sky" },
  { value: "200+", label: "Expert Speakers", icon: Mic2, color: "amber" },
  { value: "98%", label: "Satisfaction Rate", icon: Heart, color: "rose" },
  { value: "150+", label: "Awards Won", icon: Trophy, color: "emerald" },
  { value: "18 yrs", label: "Of Excellence", icon: Star, color: "indigo" },
];

const categoryVideos = {
  Celebrations: [
    {
      id: "celebrations-1",
      thumb: "/assets/videos/CELEBRATIONS VID.webm",
    },
  ],
  Community: [
    {
      id: "community-1",
      thumb: "/assets/videos/COMMUNITY REACH PROGRAMS BY IGNITE.webm",
    },
  ],
  Facilities: [
    {
      id: "facilities-1",
      thumb: "/assets/videos/FACILITIES VID.webm",
    },
  ],
  Events: [
    {
      id: "events-1",
      thumb: "/assets/videos/EVENTS @ IGNITE.webm",
    },
  ],
  Formation: [
    {
      id: "formation-1",
      thumb: "/assets/videos/FORMATION DAY VID.webm",
    },
  ],
  July: [
    {
      id: "july-1",
      thumb: "/assets/videos/JULY EVENTS VIDEO.webm",
    },
  ],
  Sports: [
    {
      id: "sports-1",
      thumb: "/assets/videos/madam's sports video.webm",
    },
  ],
  "Swachh Run": [
    {
      id: "swachh-run-1",
      thumb: "/assets/videos/swatchrunvideo.webm",
    },
  ],
  Mango: [
    {
      id: "mango-1",
      thumb: "/assets/videos/DVR sirMangoDistribution.webm",
    },
  ],
  "Plantation Run": [
    {
      id: "plantation-1",
      thumb: "/assets/videos/palntationrun1.webm",
    },
    {
      id: "plantation-2",
      thumb: "/assets/videos/palntationrun2.webm",
    },
    {
      id: "plantation-3",
      thumb: "/assets/videos/palntationrun3.webm",
    },
    {
      id: "plantation-4",
      thumb: "/assets/videos/palntationrun4.webm",
    },
    {
      id: "plantation-5",
      thumb: "/assets/videos/palntationrun5.webm",
    },
    {
      id: "plantation-6",
      thumb: "/assets/videos/platationrun6.webm",
    },
    {
      id: "plantation-7",
      thumb: "/assets/videos/plantation7.webm",
    },
    {
      id: "plantation-8",
      thumb: "/assets/videos/palntationrun8.webm",
    },
    {
      id: "plantation-9",
      thumb: "/assets/videos/palntationrun9.webm",
    },
  ],
  "Miyapur Run": [
    {
      id: "miyapur-1",
      thumb: "/assets/videos/miyapur_run1.webm",
    },
    {
      id: "miyapur-2",
      thumb: "/assets/videos/miyapur_run2.webm",
    },
    {
      id: "miyapur-3",
      thumb: "/assets/videos/miyapur_run3.webm",
    },
  ],
};

const colorMap = {
  orange: {
    icon: "bg-orange-100 text-orange-600 dark:bg-orange-950/50 dark:text-orange-300",
    tab: "bg-orange-600 text-white shadow-orange-500/25 shadow-lg",
    ring: "ring-orange-500",
  },
  sky: {
    icon: "bg-sky-100 text-sky-600 dark:bg-sky-950/50 dark:text-sky-300",
    tab: "bg-sky-500 text-white shadow-sky-500/25 shadow-lg",
    ring: "ring-sky-500",
  },
  amber: {
    icon: "bg-amber-100 text-amber-600 dark:bg-amber-950/50 dark:text-amber-300",
    tab: "bg-amber-500 text-white shadow-amber-500/25 shadow-lg",
    ring: "ring-amber-500",
  },
  rose: {
    icon: "bg-rose-100 text-rose-600 dark:bg-rose-950/50 dark:text-rose-300",
    tab: "bg-rose-500 text-white shadow-rose-500/25 shadow-lg",
    ring: "ring-rose-500",
  },
  emerald: {
    icon: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-300",
    tab: "bg-emerald-500 text-white shadow-emerald-500/25 shadow-lg",
    ring: "ring-emerald-500",
  },
  indigo: {
    icon: "bg-indigo-100 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-300",
    tab: "bg-indigo-500 text-white shadow-indigo-500/25 shadow-lg",
    ring: "ring-indigo-500",
  },
};

const tagColorMap = {
  orange: "bg-orange-600 text-white",
  amber: "bg-amber-500 text-white",
  sky: "bg-sky-500 text-white",
};

const categoryIcons = {
  Academic: BookOpen,
  Events: CalendarDays,
  "Student Life": Users,
  Results: Award,
};

/* Hover-to-preview video (muted, plays only on hover/focus) */
function HoverVideo({ src, className = "", onClick, poster }) {
  const videoRef = useRef(null);

  function play() {
    videoRef.current?.play().catch(() => {});
  }

  function pause() {
    if (videoRef.current) videoRef.current.pause();
  }

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className={className}
      muted
      loop
      playsInline
      preload="metadata"
      onMouseEnter={play}
      onMouseLeave={pause}
      onFocus={play}
      onBlur={pause}
      onClick={onClick}
    />
  );
}

/* Autoplay-on-load video (muted, loops immediately, used for Hero background) */
function AutoPlayVideo({ src, className = "", onClick }) {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      muted
      loop
      autoPlay
      playsInline
      preload="auto"
      onClick={onClick}
    />
  );
}

/* ─────────────────────────── MODAL ─────────────────────────── */

function VideoModal({ video, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}>
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-neutral-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-white hover:text-neutral-950"
          aria-label="Close video"
        >
          <X size={16} />
        </button>
        <div className="relative aspect-video w-full bg-neutral-900">
          <video
            key={video.id}
            src={video.thumb}
            className="h-full w-full object-cover"
            autoPlay
            controls
            playsInline
            preload="auto"
          />
        </div>
        <div className="p-5">
          <p className="text-xs font-black uppercase tracking-widest text-orange-400">
            {video.eyebrow ?? video.date}
          </p>
          <h3 className="mt-2 text-lg font-extrabold text-white">{video.title}</h3>
          {video.description && (
            <p className="mt-2 text-sm leading-6 text-neutral-400">{video.description}</p>
          )}
          <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-neutral-500">
            <span className="flex items-center gap-1.5"><Clock3 size={13} />{video.duration}</span>
            <span className="flex items-center gap-1.5"><Eye size={13} />{video.views} views</span>
            <span className="flex items-center gap-1.5"><CalendarDays size={13} />{video.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── SECTION 1 - HERO CAPTION ─────────────────── */

function VideoHero() {
  const [active, setActive] = useState(0);
  const [modal, setModal] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;
    const t = window.setInterval(
      () => setActive((i) => (i + 1) % featuredVideos.length),
      6000
    );
    return () => window.clearInterval(t);
  }, [isPaused]);

  useEffect(() => {
    if (modal) {
      setIsPaused(true);
    }
  }, [modal]);

  const video = featuredVideos[active];

  return (
    <>
      <section className="px-4 pb-10 pt-5 sm:px-6 sm:pt-8">
        <div
          className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-neutral-950 shadow-[0_24px_80px_rgba(42,25,86,0.25)]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slide strip */}
          <div className="flex transition-none">
            <div className="relative min-w-full">
              {/* Background video - autoplays */}
              <div className="relative h-[620px] w-full overflow-hidden transition-all duration-1000 sm:h-[680px]">
                <AutoPlayVideo
                  key={video.id}
                  src={video.thumb}
                  className="absolute inset-0 h-full w-full object-cover"
                  onClick={() => {
                    setIsPaused(true);
                    setModal(video);
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-neutral-950/95 via-neutral-950/65 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-neutral-950/60 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-12 lg:p-16">
                  <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    {/* Left text */}
                    <div className="max-w-2xl">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-widest ${tagColorMap[video.tagColor]}`}>
                          {video.tag}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                          {video.eyebrow}
                        </span>
                      </div>
                      <h1 className="mt-5 text-xl font-extrabold leading-[1.05] text-white sm:text-2xl lg:text-4xl">
                        {video.title}
                      </h1>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
                        {video.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-4 text-xs font-semibold text-white/60">
                        {/* <span className="flex items-center gap-1.5"><Clock3 size={13} />{video.duration}</span>
                        <span className="flex items-center gap-1.5"><Eye size={13} />{video.views} views</span> */}
                        <span className="flex items-center gap-1.5"><CalendarDays size={13} />{video.date}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setIsPaused(true);
                          setModal(video);
                        }}
                        className="mt-7 inline-flex items-center gap-3 rounded-full bg-orange-600 px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-orange-900/40 transition hover:bg-orange-500 hover:gap-4"
                      >
                        <Play size={15} fill="white" />
                        Watch Now
                      </button>
                    </div>

                    {/* Right - thumbnail strip (hover-preview) */}
                    <div className="hidden shrink-0 flex-col gap-3 lg:flex">
                      {featuredVideos.map((v, i) => (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => setActive(i)}
                          className={`flex items-center gap-3 rounded-xl p-2.5 pr-4 text-left transition ${
                            i === active
                              ? "bg-white/15 ring-1 ring-white/30"
                              : "bg-black/30 hover:bg-white/10"
                          }`}
                        >
                          <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg">
                            <HoverVideo
                              src={v.thumb}
                              className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                              <Play size={12} fill="white" className="text-white" />
                            </div>
                          </div>
                          <div>
                            <p className="max-w-[160px] truncate text-xs font-extrabold text-white">{v.title}</p>
                            <p className="mt-0.5 text-[10px] text-white/55">{v.duration} · {v.views} views</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dots */}
                  <div className="mt-6 flex gap-1.5 lg:hidden">
                    {featuredVideos.map((v, i) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setActive(i)}
                        className={`h-1.5 rounded-full transition-all ${i === active ? "w-9 bg-white" : "w-2 bg-white/40"}`}
                        aria-label={`Show video ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {modal && <VideoModal video={modal} onClose={() => setModal(null)} />}
    </>
  );
}

/* ─────────────────── SECTION 2 - HORIZONTAL SCROLL ─────────────────── */

function ScrollVideoCard({ video, onPlay }) {
  return (
    <button
      type="button"
      onClick={() => onPlay(video)}
      className="group relative block shrink-0 w-64 sm:w-72 overflow-hidden rounded-2xl bg-neutral-900 shadow-md ring-1 ring-neutral-800 transition hover:-translate-y-1 hover:shadow-xl focus:outline-none text-left"
    >
      <div className="relative aspect-video overflow-hidden">
        <HoverVideo
          src={video.thumb}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-white/20 backdrop-blur-md ring-2 ring-white/30 transition duration-300 group-hover:scale-110 group-hover:bg-orange-600 group-hover:ring-orange-500">
            <Play size={16} fill="white" className="translate-x-0.5 text-white" />
          </div>
        </div>
        {/* Duration badge */}
        <span className="absolute bottom-2.5 right-2.5 rounded-md bg-black/70 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur-sm">
          {video.duration}
        </span>
      </div>
      <div className="p-4 text-left">
        <p className="truncate text-sm font-extrabold text-white">{video.title}</p>
        {/* <div className="mt-1.5 flex gap-3 text-[11px] font-semibold text-neutral-500">
          <span className="flex items-center gap-1"><Eye size={10} />{video.views}</span>
          <span className="flex items-center gap-1"><CalendarDays size={10} />{video.date}</span>
        </div> */}
      </div>
    </button>
  );
}

function HorizontalScrollVideos() {
  const trackRef = useRef(null);
  const [modal, setModal] = useState(null);

  function scroll(dir) {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
    }
  }

  return (
    <>
      <section className="bg-neutral-950 py-20">
        <div className="px-6 lg:px-10">
          {/* Header */}
          <div className="mx-auto flex max-w-7xl items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-orange-500" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">
                  Highlights Reel
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                Popular campus videos
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-6 text-neutral-400">
                Scroll through our most-watched moments - from classroom sessions to grand event stages.
              </p>
            </div>
            <div className="hidden shrink-0 items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={() => scroll(-1)}
                aria-label="Scroll left"
                className="grid h-11 w-11 place-items-center rounded-full border border-neutral-700 text-neutral-400 transition hover:border-orange-500 hover:bg-orange-600 hover:text-white"
              >
                <ChevronLeft size={19} />
              </button>
              <button
                type="button"
                onClick={() => scroll(1)}
                aria-label="Scroll right"
                className="grid h-11 w-11 place-items-center rounded-full border border-neutral-700 text-neutral-400 transition hover:border-orange-500 hover:bg-orange-600 hover:text-white"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>

          {/* Scroll track */}
          <div
            ref={trackRef}
            className="mx-auto mt-8 flex max-w-7xl gap-4 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {scrollVideos.map((v) => (
              <ScrollVideoCard key={v.id} video={v} onPlay={setModal} />
            ))}
          </div>

          {/* Mobile scroll hint */}
          <p className="mx-auto mt-2 max-w-7xl text-center text-xs text-neutral-600 sm:hidden">
            ← Swipe to explore →
          </p>
        </div>
      </section>

      {modal && <VideoModal video={modal} onClose={() => setModal(null)} />}
    </>
  );
}

/* ─────────────────── SECTION 3 - STATS STRIP ─────────────────── */

function StatsStrip() {
  return (
    <section className="bg-linear-to-r from-orange-700 via-orange-600 to-indigo-600 px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-white">
            <Zap size={13} fill="white" />
            Our Impact in Numbers
          </span>
          <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
            Events that shaped thousands of futures
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

/* ─────────────────── SECTION 4 - CATEGORY VIDEOS ─────────────────── */

function CategoryVideoCard({ video, onPlay }) {
  return (
    <button
      type="button"
      onClick={() => onPlay(video)}
      className="group block text-left w-full overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none dark:bg-neutral-900 dark:ring-neutral-800"
    >
      <div className="relative aspect-video overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        <HoverVideo
          src={video.thumb}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-orange-600 shadow-lg shadow-orange-900/50">
            <Play size={16} fill="white" className="translate-x-0.5 text-white" />
          </div>
        </div>
        <span className="absolute bottom-2.5 right-2.5 rounded-md bg-black/70 px-2 py-0.5 text-[10px] font-bold text-white">
          {video.duration}
        </span>
      </div>
      {/* <div className="p-4">
        <p className="text-sm font-extrabold leading-snug text-neutral-950 line-clamp-2 dark:text-white">
          {video.title}
        </p>
        <div className="mt-2 flex gap-3 text-[11px] font-semibold text-neutral-500">
          <span className="flex items-center gap-1"><Eye size={10} />{video.views} views</span>
          <span className="flex items-center gap-1"><CalendarDays size={10} />{video.date}</span>
        </div>
      </div> */}
    </button>
  );
}

function CategoryVideos() {
  const categories = Object.keys(categoryVideos);
  const [active, setActive] = useState(categories[0] ?? "");
  const [modal, setModal] = useState(null);
  const activeVideos = categoryVideos[active] ?? [];
  const Icon = categoryIcons[active] ?? BookOpen;

  useEffect(() => {
    if (categories.length && !categoryVideos[active]) {
      setActive(categories[0]);
    }
  }, [active, categories]);

  return (
    <>
      <section className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-orange-500" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-700 dark:text-orange-400">
                  Browse by Category
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
                Find videos that matter to you
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                Academic sessions, event highlights, student life diaries, and result celebrations - all in one place.
              </p>
            </div>
          </div>

          {/* Tab bar */}
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => {
              const CatIcon = categoryIcons[cat] ?? BookOpen;
              const isActive = cat === active;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition ${
                    isActive
                      ? "bg-orange-600 text-white shadow-lg shadow-orange-500/25"
                      : "bg-white text-neutral-600 ring-1 ring-neutral-200 hover:ring-orange-300 hover:text-orange-700 dark:bg-neutral-800 dark:text-neutral-300 dark:ring-neutral-700"
                  }`}
                >
                  <CatIcon size={14} />
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {activeVideos.map((v) => (
              <CategoryVideoCard key={v.id} video={v} onPlay={setModal} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <RouteLink
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-bold text-neutral-700 transition hover:border-orange-500 hover:text-orange-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
            >
              Back to Gallery
              <ArrowRight size={14} />
            </RouteLink>
          </div>
        </div>
      </section>

      {modal && <VideoModal video={modal} onClose={() => setModal(null)} />}
    </>
  );
}

/* ─────────────────── SECTION 5 - ABOUT IGNITE ─────────────────── */

function AboutIgnite() {
  const pillars = [
    {
      icon: Flame,
      title: "Igniting Potential",
      text: "We believe every student carries extraordinary ability. Our role is to create the right spark - through world-class teachers, structured programs, and a culture of excellence.",
      color: "orange",
    },
    {
      icon: GraduationCap,
      title: "Academic Rigour",
      text: "From Foundation to JC 2, our curriculum blends conceptual depth with exam readiness, preparing students for IIT-JEE, NEET, boards, and beyond.",
      color: "sky",
    },
    {
      icon: Heart,
      title: "Holistic Growth",
      text: "Academics are just one part. Sports, arts, personality development, and community events ensure our students grow into confident, well-rounded individuals.",
      color: "rose",
    },
    {
      icon: Trophy,
      title: "A Legacy of Results",
      text: "18+ years of top ranks, national selections, and board toppers. Our results speak for the consistency and commitment we bring to every batch.",
      color: "amber",
    },
  ];

  return (
    <section className="bg-white px-6 py-24 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl">
        {/* Top band */}
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-orange-700 dark:bg-orange-950/40 dark:text-orange-400">
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

        {/* Pillars */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => {
            const Icon = p.icon;
            const c = colorMap[p.color];
            return (
              <div
                key={p.title}
                className="flex flex-col gap-4 rounded-3xl border border-neutral-100 hover:shadow-2xl hover:border-orange-600 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <span className={`grid h-11 w-11 place-items-center rounded-2xl ${c.icon}`}>
                  <Icon size={20} />
                </span>
                <h3 className="text-base font-extrabold text-neutral-950 dark:text-white">
                  {p.title}
                </h3>
                <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-400">{p.text}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center justify-between gap-8 rounded-3xl border-2 border-orange-600 p-8 text-center sm:flex-row sm:rounded-full sm:px-10 sm:text-left">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-orange-600">
              Come visit us
            </p>
            <h3 className="mt-2 text-xl font-extrabold text-black dark:text-white">
              See Ignite firsthand - schedule a campus tour.
            </h3>
          </div>
          <div className="flex shrink-0 flex-wrap justify-center gap-3">
            <RouteLink
              to="/gallery/all-videos"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-orange-700 border-2 border-orange-600 transition hover:bg-orange-600 hover:text-white dark:bg-orange-600 dark:text-white dark:hover:bg-orange-700"
            >
              View All
              <ArrowRight size={14} />
            </RouteLink>
            <RouteLink
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-orange-700 border-2 border-orange-600 hover:text-white transition hover:bg-orange-600 dark:bg-orange-600 dark:text-white dark:hover:bg-orange-700"
            >
              Contact Us
              <ArrowRight size={14} />
            </RouteLink>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-5 py-3 text-sm font-bold text-black dark:text-white ring-1 ring-white/20">
              <MapPin size={13} />
              Hyderabad
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── SPARKLES IMPORT ─────────────────────────── */

function Sparkles(props) {
  return <Star {...props} />;
}

/* ─────────────────────────── PAGE ─────────────────────────── */

export default function VideosPage() {
  return (
    <div className="min-h-screen pt-16 bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      <VideoHero />
      <HorizontalScrollVideos />
      <StatsStrip />
      <CategoryVideos />
      <AboutIgnite />
    </div>
  );
}