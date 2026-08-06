import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";

const placeholderPhoto = (bg) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="360"><rect width="300" height="360" fill="${bg}"/><circle cx="150" cy="140" r="52" fill="#94a3b8"/><path d="M150 200c-55 0-95 35-95 90v70h190v-70c0-55-40-90-95-90z" fill="#94a3b8"/></svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

const jeeStudents = [
  { name: "A Haniketh", line1: "AIR 4078", line2: "Roll No: 256192066", image: placeholderPhoto("#1e293b") },
  { name: "M V Hrishikesh Reddy", line1: "AIR 3955", line2: "Roll No: 256134196", image: placeholderPhoto("#273449") },
  { name: "Yamini Tejaswi", line1: "AIR 3919", line2: "Roll No: 256127049", image: placeholderPhoto("#1e293b") },
  { name: "S Prasanna Sai", line1: "AIR 3757", line2: "Roll No: 256142080", image: placeholderPhoto("#273449") },
  { name: "Susheel Reddy", line1: "AIR 2270", line2: "Roll No: 256129284", image: placeholderPhoto("#1e293b") },
  { name: "K Bhargav", line1: "AIR 1980", line2: "Roll No: 256118820", image: placeholderPhoto("#273449") },
  { name: "P Nikhil", line1: "AIR 1745", line2: "Roll No: 256109432", image: placeholderPhoto("#1e293b") },
];

const neetStudents = [
  { name: "Shashank", line1: "Bhadradri Kothagudem Govt College", image: placeholderPhoto("#1e293b") },
  { name: "Shaik Sameer", line1: "Bhadradri Kothagudem Govt College", image: placeholderPhoto("#273449") },
  { name: "S Jashmi", line1: "Sangareddy Govt College", image: placeholderPhoto("#1e293b") },
  { name: "P Sree Teja", line1: "Nalgonda Govt College", image: placeholderPhoto("#273449") },
  { name: "C Bhuvaneswari", line1: "Nalgonda Govt College", image: placeholderPhoto("#1e293b") },
  { name: "R Manasa", line1: "Warangal Govt College", image: placeholderPhoto("#273449") },
];

function AchievementCarousel({ students, accent, renderDetails, speed = 40 }) {
  const loopedStudents = [...students, ...students, ...students];
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const rafRef = useRef(null);
  const pausedRef = useRef(false);
  const centerIndexRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    let lastTime = null;

    const findCenterCard = () => {
      const track = trackRef.current;
      if (!track) return;
      const trackCenter = track.scrollLeft + track.clientWidth / 2;
      let closestIndex = null;
      let closestDistance = Infinity;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const cardCenter = el.offsetLeft + el.offsetWidth / 2;
        const distance = Math.abs(cardCenter - trackCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });
      if (closestIndex !== centerIndexRef.current) {
        centerIndexRef.current = closestIndex;
        setCenterIndex(closestIndex);
      }
    };

    const step = (time) => {
      const track = trackRef.current;
      if (track) {
        if (lastTime === null) lastTime = time;
        const dt = (time - lastTime) / 1000;
        lastTime = time;
        if (!pausedRef.current) {
          track.scrollLeft += speed * dt;
          const oneSetWidth = track.scrollWidth / 3;
          if (track.scrollLeft >= oneSetWidth * 2) track.scrollLeft -= oneSetWidth;
        }
        findCenterCard();
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    if (trackRef.current) trackRef.current.scrollLeft = trackRef.current.scrollWidth / 3;
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed]);

  const pause = () => (pausedRef.current = true);
  const resume = () => (pausedRef.current = false);

  return (
    <div className="relative" onMouseEnter={pause} onMouseLeave={resume}>
      <button
        type="button"
        onClick={() => trackRef.current?.scrollBy({ left: -260, behavior: "smooth" })}
        aria-label="Previous"
        className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 items-center justify-center rounded-full bg-white dark:bg-neutral-700 shadow-lg text-neutral-500 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:scale-110 transition-all"
      >
        <ChevronLeft size={18} />
      </button>

      <div
        ref={trackRef}
        onTouchStart={pause}
        onTouchEnd={resume}
        onPointerDown={pause}
        onPointerUp={resume}
        className="flex gap-4 overflow-x-auto px-2 py-4 cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {loopedStudents.map((s, i) => {
          const isFocused = i === centerIndex || i === hoveredIndex;
          return (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative shrink-0 w-[150px] sm:w-[180px] h-[190px] sm:h-[230px] cursor-pointer rounded-2xl overflow-hidden bg-neutral-700 transition-all duration-300 ease-out ${
                isFocused ? `shadow-2xl ${accent.glow}` : "opacity-80"
              }`}
            >
              <img
                src={s.image}
                alt={s.name}
                className={`absolute inset-0 w-full h-full object-cover origin-center transition-transform duration-300 ${isFocused ? "scale-110" : "scale-100"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className={`absolute top-2.5 left-2.5 flex items-center justify-center w-7 h-7 rounded-full text-white ${accent.badge} ${isFocused ? "opacity-100" : "opacity-0"} transition-opacity`}>
                <Award size={13} />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-xs font-bold leading-tight line-clamp-2">{s.name}</p>
                <div className={`mt-1 h-[2px] w-5 rounded-full ${accent.line}`} />
                {renderDetails(s)}
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => trackRef.current?.scrollBy({ left: 260, behavior: "smooth" })}
        aria-label="Next"
        className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 items-center justify-center rounded-full bg-white dark:bg-neutral-700 shadow-lg text-neutral-500 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:scale-110 transition-all"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

export default function Achievements() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-14 px-4 sm:px-8 sm:py-16 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* JEE */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-8 w-1.5 rounded-full bg-red-500" />
            <div>
              <span className="text-xs font-bold tracking-widest text-red-500 uppercase">Top Rankers</span>
              <h2 className="text-xl font-extrabold text-neutral-900 dark:text-white sm:text-2xl">IIT JEE Achievements</h2>
            </div>
          </div>
          <AchievementCarousel
            students={jeeStudents}
            accent={{ glow: "ring-2 ring-red-500/40", badge: "bg-red-600", line: "bg-red-500" }}
            renderDetails={(s) => (
              <>
                <p className="text-white/80 text-[11px] font-semibold mt-1">{s.line1}</p>
                <p className="text-white/60 text-[10px]">{s.line2}</p>
              </>
            )}
          />
        </div>

        {/* NEET */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-8 w-1.5 rounded-full bg-orange-500" />
            <div>
              <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">Top Rankers</span>
              <h2 className="text-xl font-extrabold text-neutral-900 dark:text-white sm:text-2xl">NEET Achievements</h2>
            </div>
          </div>
          <AchievementCarousel
            students={neetStudents}
            accent={{ glow: "ring-2 ring-orange-500/40", badge: "bg-orange-500", line: "bg-orange-400" }}
            renderDetails={(s) => (
              <p className="text-white/80 text-[11px] font-semibold mt-1 line-clamp-2">{s.line1}</p>
            )}
          />
        </div>

        <div className="mt-10 text-center">
          <button className="inline-flex items-center gap-2 bg-neutral-900 dark:bg-white hover:bg-neutral-700 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 font-semibold px-6 py-2.5 rounded-full shadow-sm transition-all text-sm">
            View All Results
          </button>
        </div>
      </div>
    </section>
  );
}
