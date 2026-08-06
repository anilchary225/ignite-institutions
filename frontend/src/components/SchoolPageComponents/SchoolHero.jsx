import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "https://placehold.co/480x320/7c3aed/ffffff?text=Science+Lab",
    caption: "Modern Science Labs",
  },
  {
    src: "https://placehold.co/480x320/4f46e5/ffffff?text=Smart+Classrooms",
    caption: "Smart Classrooms",
  },
  {
    src: "https://placehold.co/480x320/0284c7/ffffff?text=Sports+Ground",
    caption: "Sports & Play Ground",
  },
  {
    src: "https://placehold.co/480x320/059669/ffffff?text=Art+Room",
    caption: "Art & Craft Room",
  },
  {
    src: "https://placehold.co/480x320/d97706/ffffff?text=Library",
    caption: "Student Library",
  },
  {
    src: "https://placehold.co/480x320/e11d48/ffffff?text=Computer+Lab",
    caption: "Computer Lab",
  },
];

const highlights = [
  { emoji: "🎓", label: "Experienced Faculty" },
  { emoji: "🧪", label: "Modern Labs" },
  { emoji: "📚", label: "Rich Library" },
  { emoji: "🏅", label: "Award-Winning" },
  { emoji: "🌱", label: "Value Education" },
  { emoji: "🏟️", label: "Sports Facilities" },
];

export default function SchoolHero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  function goTo(idx) {
    setCurrent((idx + images.length) % images.length);
  }

  function resetTimer() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
  }

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timerRef.current);
  }, []);

  function handleNav(dir) {
    goTo(current + dir);
    resetTimer();
  }

  return (
    <section className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT — about school */}
          <div>
            {/* fun label */}
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 dark:bg-amber-950/40">
              <span className="text-lg">🏫</span>
              <span className="text-xs font-black uppercase tracking-widest text-amber-700 dark:text-amber-400">
                Ignite School
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-neutral-950 sm:text-5xl dark:text-white">
              Where every child{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-violet-600 dark:text-violet-400">
                  discovers
                </span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded bg-violet-100 dark:bg-violet-900/40" />
              </span>{" "}
              their spark ✨
            </h1>

            <p className="mt-5 text-base leading-7 text-neutral-600 dark:text-neutral-400">
              Ignite School offers a nurturing, activity-rich environment from
              Nursery through Class 10. We blend world-class academics with
              creative exploration — shaping curious, confident, and
              compassionate learners.
            </p>

            {/* highlights grid */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {highlights.map(({ emoji, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1.5 rounded-2xl bg-neutral-50 py-4 text-center dark:bg-neutral-900"
                >
                  <span className="text-2xl">{emoji}</span>
                  <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* quick stats */}
            <div className="mt-8 flex flex-wrap gap-6">
              {[
                { value: "Nursery", extra: "to Class 10" },
                { value: "8+", extra: "Campuses" },
                { value: "20+", extra: "Years of Trust" },
              ].map(({ value, extra }) => (
                <div key={extra}>
                  <p className="text-2xl font-black text-violet-700 dark:text-violet-400">
                    {value}
                  </p>
                  <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-500">
                    {extra}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — single-image auto carousel, full height of left */}
          <div className="flex flex-col self-stretch">
            <div className="relative flex-1 overflow-hidden rounded-3xl shadow-md">
              {/* slides */}
              {images.map((img, i) => (
                <div
                  key={img.caption}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    i === current ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="h-full w-full object-cover"
                  />
                  {/* caption overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-6 pb-5 pt-12">
                    <p className="text-sm font-bold text-white">{img.caption}</p>
                  </div>
                </div>
              ))}

              {/* prev / next buttons */}
              <button
                onClick={() => handleNav(-1)}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow backdrop-blur-sm transition hover:bg-violet-600 hover:text-white dark:bg-neutral-900/80"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => handleNav(1)}
                aria-label="Next image"
                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow backdrop-blur-sm transition hover:bg-violet-600 hover:text-white dark:bg-neutral-900/80"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* dot indicators */}
            <div className="mt-4 flex justify-center gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { goTo(i); resetTimer(); }}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 bg-violet-600 dark:bg-violet-500"
                      : "w-2 bg-violet-200 dark:bg-violet-800"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
