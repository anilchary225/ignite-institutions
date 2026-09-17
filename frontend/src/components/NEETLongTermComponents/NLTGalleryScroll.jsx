import { useRef } from "react";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants";

const images = [
  { id: 1, src: "/assets/images/events/Science Lab/DSC09986.webp",        alt: "Biology laboratory session" },
  { id: 2, src: "/assets/images/events/Classrooms/DSC00002.webp",      alt: "NEET mock test day" },
  { id: 3, src: "/assets/images/events/Classrooms/DSC02152.webp",  alt: "Classroom session" },
  { id: 6, src: "/assets/images/events/Classrooms/DSC00013.webp",     alt: "1-on-1 mentor session" },
  { id: 7, src: "/assets/images/events/Classrooms/DSC02145.webp",         alt: "Study hall" },
  { id: 8, src: "/assets/images/events/falicitates_with_awards/iphone 2025/Neetu Abhishek1.webp",     alt: "Award ceremony" },
];

export default function NLTGalleryScroll() {
  const scrollRef = useRef(null);
  const scroll = (dir) => scrollRef.current?.scrollBy({ left: dir * 440, behavior: "smooth" });

  return (
    <section className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-end justify-between"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 dark:bg-emerald-950/40">
              <ImageIcon size={13} className="text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                Life at Ignite
              </span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
              Inside Our Labs & Classrooms
            </h2>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              Where AIIMS rankers study, practice, and grow - every single day.
            </p>
          </div>

          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => scroll(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-neutral-700 dark:bg-neutral-900"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => scroll(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-neutral-700 dark:bg-neutral-900"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </motion.button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          className="mt-8 flex gap-4 overflow-x-auto scroll-smooth pb-3"
          style={{ scrollbarWidth: "none" }}
        >
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              whileHover={{ y: -4 }}
              className={`group relative shrink-0 w-[340px] sm:w-[400px] overflow-hidden rounded-2xl shadow-sm ${i % 3 === 1 ? "mt-5" : ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <p className="absolute bottom-3 left-3 right-3 text-xs font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {img.alt}
              </p>
              {/* index label */}
              <div className="absolute left-3 top-3 rounded-full bg-emerald-500 px-2.5 py-0.5 text-[10px] font-black text-white">
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-neutral-400">
          Real photos of Ignite Academy campus - updated every semester.
        </p>
      </div>
    </section>
  );
}
