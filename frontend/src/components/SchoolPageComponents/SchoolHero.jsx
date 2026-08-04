import { useRef } from "react";
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
  const scrollRef = useRef(null);

  function scrollBy(dir) {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
    }
  }

  return (
    <section className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl">
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

          {/* RIGHT — horizontal image scroller */}
          <div className="relative">
            {/* scroll buttons */}
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-neutral-100 transition hover:bg-violet-600 hover:text-white dark:bg-neutral-900 dark:ring-neutral-800 dark:hover:bg-violet-600"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-neutral-100 transition hover:bg-violet-600 hover:text-white dark:bg-neutral-900 dark:ring-neutral-800 dark:hover:bg-violet-600"
            >
              <ChevronRight size={18} />
            </button>

            {/* scrollable strip */}
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scroll-smooth rounded-3xl pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {images.map((img) => (
                <div
                  key={img.caption}
                  className="shrink-0 w-[280px] overflow-hidden rounded-2xl shadow-sm ring-1 ring-neutral-100 dark:ring-neutral-800"
                >
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="bg-neutral-50 px-4 py-3 dark:bg-neutral-900">
                    <p className="text-xs font-bold text-neutral-700 dark:text-neutral-300">
                      {img.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* scroll indicator dots */}
            <div className="mt-4 flex justify-center gap-1.5">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full bg-violet-300 transition-all dark:bg-violet-700 ${
                    i === 0 ? "w-5 bg-violet-600 dark:bg-violet-500" : "w-2"
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
