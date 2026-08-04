import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";

// Inline SVG placeholder — no network request needed, always renders.
// Swap `image:` values below with real student photos when available.
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

/**
 * Reusable auto-scrolling horizontal carousel — modern glass/gradient card style.
 * Shared between the IIT JEE and NEET sections below.
 */
function AchievementCarousel({ students, accent, renderDetails, speed = 40 }) {
  // Triple the list so the marquee can loop seamlessly with no visible seam.
  const loopedStudents = [...students, ...students, ...students];

  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const rafRef = useRef(null);
  const pausedRef = useRef(false);
  const centerIndexRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Continuous smooth auto-scroll using requestAnimationFrame (pixels/second),
  // while also tracking whichever card is currently nearest the center so it
  // can scale up as it passes through the middle of the viewport.
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

          // Once we've scrolled past the first copy, jump back by exactly
          // one copy's width — since copy 1 and copy 2 are identical, this
          // reset is visually invisible and the loop feels infinite.
          const oneSetWidth = track.scrollWidth / 3;
          if (track.scrollLeft >= oneSetWidth * 2) {
            track.scrollLeft -= oneSetWidth;
          }
        }
        findCenterCard();
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    // Start centered in the middle copy.
    if (trackRef.current) {
      trackRef.current.scrollLeft = trackRef.current.scrollWidth / 3;
    }

    return () => cancelAnimationFrame(rafRef.current);
  }, [speed]);

  const pause = () => (pausedRef.current = true);
  const resume = () => (pausedRef.current = false);

  return (
    <div
      className="relative"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <button
        type="button"
        onClick={() => trackRef.current?.scrollBy({ left: -260, behavior: "smooth" })}
        aria-label="Previous"
        className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 items-center justify-center rounded-full bg-white shadow-lg text-slate-500 hover:text-slate-900 hover:scale-110 transition-all duration-200"
      >
        <ChevronLeft size={20} />
      </button>

      <div
        ref={trackRef}
        onTouchStart={pause}
        onTouchEnd={resume}
        onPointerDown={pause}
        onPointerUp={resume}
        className="flex gap-4 sm:gap-5 overflow-x-auto px-2 py-4 cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {loopedStudents.map((s, i) => {
          const isFocused = i === centerIndex || i === hoveredIndex;
          return (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative shrink-0 w-[150px] sm:w-[190px] h-[190px] sm:h-[240px] cursor-pointer rounded-2xl overflow-hidden bg-slate-700 transition-all duration-300 ease-out ${
                isFocused ? `shadow-2xl ${accent.glow}` : "opacity-80"
              }`}
            >
              <img
                src={s.image}
                alt={s.name}
                className={`absolute inset-0 w-full h-full object-cover object-center origin-center transition-transform duration-300 ease-out ${
                  isFocused ? "scale-110" : "scale-100"
                }`}
              />

              {/* gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* rank badge */}
              <div
                className={`absolute top-2.5 left-2.5 flex items-center justify-center w-7 h-7 rounded-full text-white transition-opacity duration-300 ${
                  accent.badge
                } ${isFocused ? "opacity-100" : "opacity-0"}`}
              >
                <Award size={14} />
              </div>

              {/* text */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-[13px] sm:text-sm font-bold leading-tight line-clamp-2">
                  {s.name}
                </p>
                <div className={`mt-1 h-[2px] w-6 rounded-full ${accent.line}`} />
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
        className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 items-center justify-center rounded-full bg-white shadow-lg text-slate-500 hover:text-slate-900 hover:scale-110 transition-all duration-200"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

export default function Achievements() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <span className="text-xs font-bold tracking-[0.3em] text-red-600 uppercase">
            Top Rankers
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-slate-900">
            IIT JEE Student Achievements
          </h2>
        </div>
        <div className="mt-8 sm:mt-10">
          <AchievementCarousel
            students={jeeStudents}
            accent={{
              glow: "ring-4 ring-red-500/40",
              badge: "bg-red-600",
              line: "bg-red-500",
              dot: "bg-red-600",
            }}
            renderDetails={(s) => (
              <>
                <p className="text-white/80 text-[11px] font-semibold mt-1">{s.line1}</p>
                <p className="text-white/60 text-[10px]">{s.line2}</p>
              </>
            )}
          />
        </div>

        <div className="text-center mt-16 sm:mt-24">
          <span className="text-xs font-bold tracking-[0.3em] text-orange-500 uppercase">
            Top Rankers
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-extrabold text-slate-900">
            NEET Student Achievements
          </h2>
        </div>
        <div className="mt-8 sm:mt-10">
          <AchievementCarousel
            students={neetStudents}
            accent={{
              glow: "ring-4 ring-orange-500/40",
              badge: "bg-orange-500",
              line: "bg-orange-400",
              dot: "bg-orange-500",
            }}
            renderDetails={(s) => (
              <p className="text-white/80 text-[11px] font-semibold mt-1 line-clamp-2">{s.line1}</p>
            )}
          />
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <button className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-7 sm:px-8 py-3 rounded-full shadow-lg shadow-slate-900/20 transition-all duration-300 text-sm sm:text-base">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}