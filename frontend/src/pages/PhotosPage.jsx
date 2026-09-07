import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Camera,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Heart,
  Images,
  Leaf,
  MapPin,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { RouteLink } from "../router/BrowserRouter";
import { EVENT_PHOTO_SECTIONS } from "../data/eventGalleryData";

const categories = [{ id: "all", label: "All albums" }, ...EVENT_PHOTO_SECTIONS.map((section) => ({ id: section.id, label: section.label }))];

const photoSections = EVENT_PHOTO_SECTIONS;

const allPhotos = photoSections.flatMap((section) =>
  section.photos.map((photo) => ({ ...photo, sectionLabel: section.label, accent: section.accent })),
);

const accentStyles = {
  green: {
    icon: "bg-green-600",
    badge: "bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-300",
    glow: "from-green-500/15",
    line: "bg-green-500",
  },
  emerald: {
    icon: "bg-emerald-600",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
    glow: "from-emerald-500/15",
    line: "bg-emerald-500",
  },
  rose: {
    icon: "bg-rose-600",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",
    glow: "from-rose-500/15",
    line: "bg-rose-500",
  },
  amber: {
    icon: "bg-amber-600",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
    glow: "from-amber-500/15",
    line: "bg-amber-500",
  },
  blue: {
    icon: "bg-blue-600",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300",
    glow: "from-blue-500/15",
    line: "bg-blue-500",
  },
  indigo: {
    icon: "bg-indigo-600",
    badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300",
    glow: "from-indigo-500/15",
    line: "bg-indigo-500",
  },
};

function PhotosIntro() {
  return (
    <section className="bg-white px-6 pb-10 pt-12 dark:bg-neutral-950 sm:pt-20">
      <div className="mx-auto grid max-w-7xl items-end gap-10 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="mt-10 text-xs font-black uppercase tracking-[0.24em] text-green-700 dark:text-green-400">
            Ignite photo journal
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl dark:text-white">
            Every picture has a{" "}
            <span className="text-green-600 dark:text-green-400">story.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Take a closer look at the people, places, and experiences that make
            Ignite Academy more than a campus. Browse by chapter and see school
            life through the eyes of our students and faculty.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-neutral-900 p-7 text-white sm:p-9">
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-green-500/40 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10">
                <Images size={20} className="text-green-200" />
              </span>
              <span className="text-xs font-black uppercase tracking-[0.18em] text-white/60">
                The year in frames
              </span>
            </div>
            <p className="mt-8 text-4xl font-extrabold">15+</p>
            <p className="mt-1 text-sm text-white/65">moments from campus life</p>
            <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-5">
              <CalendarDays size={16} className="text-green-200" />
              <span className="text-sm text-white/75">Updated throughout the year</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhotoNav({ activeCategory, setActiveCategory }) {
  return (
    <section className="sticky top-4 z-30 px-4 py-5 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto rounded-2xl border border-neutral-200 bg-white/90 p-2 shadow-[0_12px_40px_rgba(15,23,42,0.1)] backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/90">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActiveCategory(category.id)}
            className={`shrink-0 rounded-xl px-4 py-2.5 text-sm font-bold transition ${
              activeCategory === category.id
                ? "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
                : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-900"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </section>
  );
}

function FeaturedPhoto({ photo, href }) {
  return (
    <RouteLink
      to={href}
      className="group relative block h-full min-h-[300px] w-full overflow-hidden rounded-[1.75rem] bg-neutral-200 text-left dark:bg-neutral-800"
    >
      <img
        src={photo.image}
        alt={photo.title}
        loading="lazy"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
      <span className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
          {photo.caption}
        </span>
        <span className="mt-2 block text-xl font-extrabold">{photo.title}</span>
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-white/80 transition group-hover:text-white">
          Open photo <ArrowRight size={14} />
        </span>
      </span>
    </RouteLink>
  );
}

function SmallPhoto({ photo, href }) {
  return (
    <RouteLink
      to={href}
      className="group relative block min-h-[210px] overflow-hidden rounded-[1.5rem] bg-neutral-200 text-left dark:bg-neutral-800"
    >
      <img
        src={photo.image}
        alt={photo.title}
        loading="lazy"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
      <span className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">
          {photo.caption}
        </span>
        <span className="mt-1 block text-base font-extrabold">{photo.title}</span>
      </span>
    </RouteLink>
  );
}

function PhotoSection({ section }) {
  const Icon = section.icon ?? Camera;
  const styles = accentStyles[section.accent] ?? accentStyles.green;
  const visiblePhotos = section.photos.slice(0, 3);
  const [featured, ...supporting] = visiblePhotos;

  return (
    <section id={section.id} className="scroll-mt-28 border-t border-neutral-200 py-16 dark:border-neutral-800 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div>
          <div className="flex items-center gap-3">
            <span className={`grid h-10 w-10 place-items-center rounded-xl ${styles.icon}`}>
              <Icon size={18} className="text-white" />
            </span>
            <span className={`rounded-full px-3 py-1.5 text-xs font-black uppercase tracking-wider ${styles.badge}`}>
              {section.label}
            </span>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-neutral-950 sm:text-4xl dark:text-white">
            {section.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            {section.description}
          </p>

          <div className={`relative mt-8 overflow-hidden rounded-2xl bg-linear-to-br ${styles.glow} to-neutral-50 p-5 dark:to-neutral-900`}>
            <div className={`absolute left-0 top-0 h-full w-1 ${styles.line}`} />
            <p className="pl-3 text-xs font-black uppercase tracking-[0.16em] text-neutral-500">
              The Ignite experience
            </p>
            <p className="mt-3 pl-3 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
              {section.experience}
            </p>
          </div>
        </div>

        <div className="grid min-h-[520px] gap-4 sm:grid-cols-2">
          <div className="sm:row-span-2">
            <FeaturedPhoto photo={featured} href={`/gallery/photos/${section.id}`} />
          </div>
          {supporting.map((photo) => (
            <SmallPhoto key={photo.title} photo={photo} href={`/gallery/photos/${section.id}`} />
          ))}
          <div className="sm:col-span-2">
            <RouteLink
              to={`/gallery/photos/${section.id}`}
              className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-600 dark:bg-white dark:text-neutral-950 dark:hover:bg-green-200"
            >
              Show more
              <ArrowRight size={16} />
            </RouteLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function Lightbox({ photo, onClose, onNext, onPrevious }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrevious();
    }
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrevious]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/95 p-4 backdrop-blur-sm">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close photo viewer"
        className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-neutral-950"
      >
        <X size={20} />
      </button>
      <button
        type="button"
        onClick={onPrevious}
        aria-label="Previous photo"
        className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-neutral-950 sm:left-8"
      >
        <ChevronLeft size={22} />
      </button>
      <div className="max-h-[90vh] max-w-5xl">
        <img src={photo.image} alt={photo.title} className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl" />
        <div className="mt-4 text-center text-white">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/50">{photo.caption}</p>
          <p className="mt-2 text-xl font-extrabold">{photo.title}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next photo"
        className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-neutral-950 sm:right-8"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}

export default function PhotosPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const visibleSections = useMemo(
    () =>
      activeCategory === "all"
        ? photoSections
        : photoSections.filter((section) => section.id === activeCategory),
    [activeCategory],
  );

  const selectedIndex = selectedPhoto
    ? allPhotos.findIndex((photo) => photo.title === selectedPhoto.title)
    : -1;

  function selectCategory(category) {
    setActiveCategory(category);
    if (category !== "all") {
      window.setTimeout(() => document.getElementById(category)?.scrollIntoView({ behavior: "smooth" }), 0);
    }
  }

  function showNext() {
    setSelectedPhoto(allPhotos[(selectedIndex + 1) % allPhotos.length]);
  }

  function showPrevious() {
    setSelectedPhoto(allPhotos[(selectedIndex - 1 + allPhotos.length) % allPhotos.length]);
  }

  return (
    <div className="min-h-screen bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      <PhotosIntro />
      <PhotoNav activeCategory={activeCategory} setActiveCategory={selectCategory} />
      <main className="mx-auto max-w-7xl px-6 pb-20">
        {visibleSections.map((section) => (
          <PhotoSection key={section.id} section={section} />
        ))}
      </main>
      <section className="border-t border-neutral-200 bg-neutral-50 px-6 py-16 dark:border-neutral-800 dark:bg-neutral-900/50">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-green-700 dark:text-green-400">
              Keep exploring
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-neutral-950 dark:text-white">
              More stories from Ignite are waiting.
            </h2>
          </div>
          <RouteLink
            to="/gallery/events"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-600 dark:bg-white dark:text-neutral-950 dark:hover:bg-green-200"
          >
            Explore events
            <ArrowRight size={16} />
          </RouteLink>
        </div>
      </section>
      {/* {selectedPhoto ? (
        <Lightbox
          photo={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          onNext={showNext}
          onPrevious={showPrevious}
        />
      ) : null} */}
    </div>
  );
}
