import { useRef } from "react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

const images = [
  { id: 1,  src: "https://placehold.co/400x260/f59e0b/ffffff?text=Intensive+Class",     alt: "Intensive classroom session" },
  { id: 2,  src: "https://placehold.co/400x260/ea580c/ffffff?text=Mock+Test+Hall",      alt: "Mock test hall" },
  { id: 3,  src: "https://placehold.co/400x260/dc2626/ffffff?text=Result+Ceremony",     alt: "Result ceremony" },
  { id: 4,  src: "https://placehold.co/400x260/d97706/ffffff?text=Doubt+Session",       alt: "Doubt clearing session" },
  { id: 5,  src: "https://placehold.co/400x260/f59e0b/ffffff?text=Study+Room",          alt: "Study room" },
  { id: 6,  src: "https://placehold.co/400x260/ea580c/ffffff?text=Mentor+Talk",         alt: "Mentor interaction" },
  { id: 7,  src: "https://placehold.co/400x260/dc2626/ffffff?text=Lab+Work",            alt: "Laboratory session" },
  { id: 8,  src: "https://placehold.co/400x260/d97706/ffffff?text=Award+Ceremony",      alt: "Award ceremony" },
];

export default function JSTGalleryScroll() {
  const scrollRef = useRef(null);
  const scroll = (dir) => scrollRef.current?.scrollBy({ left: dir * 440, behavior: "smooth" });

  return (
    <section className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl">

        <div className="flex items-end justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 dark:bg-amber-950/40">
              <Camera size={13} className="text-amber-600 dark:text-amber-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">Campus Moments</span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">Where Rank-Holders Are Made</h2>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">The environment, the people, the energy — see it for yourself.</p>
          </div>
          <div className="hidden shrink-0 gap-2 sm:flex">
            <button onClick={() => scroll(-1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition hover:border-amber-400 hover:text-amber-600 dark:border-neutral-700 dark:bg-neutral-900" aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => scroll(1)} className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition hover:border-amber-400 hover:text-amber-600 dark:border-neutral-700 dark:bg-neutral-900" aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="mt-8 flex gap-4 overflow-x-auto scroll-smooth pb-3" style={{ scrollbarWidth: "none" }}>
          {images.map((img, i) => (
            <div
              key={img.id}
              className={`group relative shrink-0 overflow-hidden rounded-2xl shadow-sm ${i % 3 === 1 ? "mt-5" : ""}`}
              style={{ width: 340 }}
            >
              <img src={img.src} alt={img.alt} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs font-semibold text-white">{img.alt}</p>
              </div>
              {/* top label */}
              <div className="absolute left-3 top-3 rounded-full bg-amber-500 px-2.5 py-0.5 text-[10px] font-black text-white">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-center text-xs text-neutral-400">Real photos from Ignite Academy. Updated each semester.</p>
      </div>
    </section>
  );
}
