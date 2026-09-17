import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { motion } from "framer-motion";
import { RouteLink } from "../../router/BrowserRouter";
import { fadeUp, defaultViewport } from "../../animations/variants";

const placeholderPhoto = (bg) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="360"><rect width="300" height="360" fill="${bg}"/><circle cx="150" cy="140" r="52" fill="#94a3b8"/><path d="M150 200c-55 0-95 35-95 90v70h190v-70c0-55-40-90-95-90z" fill="#94a3b8"/></svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

const normalizeName = (value) =>
  value
    .replace(/\.(?=\s|$)/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

const JEE_TOPPER_IMAGES = {
  "A. CHARITH": "/assets/JEE_TOPPER_2026/A. CHARITH.webp",
  "B. GOWTHAM": "/assets/JEE_TOPPER_2026/B. GOWTHAM.webp",
  "BHANU SRIKAR": "/assets/JEE_TOPPER_2026/BHANU SRIKAR.webp",
  "DEVA SAKETH": "/assets/JEE_TOPPER_2026/DEVA SAKETH.webp",
  "G. RISHITHA REDDY": "/assets/JEE_TOPPER_2026/G. RISHITHA REDDY.webp",
  "M. JAGAN MOHAN REDDY": "/assets/JEE_TOPPER_2026/M. JAGAN MOHAN REDDY.webp",
  "R. ADI PRANAV": "/assets/JEE_TOPPER_2026/R. ADI PRANAV.webp",
  "G. RAHUL REDDY": "/assets/JEE_TOPPER_2026/G. rahul REDDY.webp",
  "K. SIDDARTHA": "/assets/JEE_TOPPER_2026/K. SIDDARTHA.webp",
  "P. KRISHNA CHAITANYA": "/assets/JEE_TOPPER_2026/P. KRISHNA CHAITANYA.webp",
  "CHIDURP": "/assets/JEE_TOPPER_2026/CHIDURP.webp",
  "RAHUL": "/assets/JEE_TOPPER_2026/RAHUL.webp",
  "SK RIYAN KAMAL": "/assets/JEE_TOPPER_2026/SK RIYAN KAMAL.webp",
};

const NEET_RESULT_IMAGES = {
  "A. ARCHITHA": "/assets/NEET_RESULTS_2026/A. Architha.webp",
  "A. HARSHITHA": "/assets/NEET_RESULTS_2026/A. Harshitha.webp",
  "B. DEEKSHITHA": "/assets/NEET_RESULTS_2026/B. Deekshitha.webp",
  "BEGARI NAVADEEP": "/assets/NEET_RESULTS_2026/Begari Navadeep.webp",
  "D. MEGANA SAI SREE": "/assets/NEET_RESULTS_2026/D. Megana Sai Sree.webp",
  "D. SINDHU PRIYA": "/assets/NEET_RESULTS_2026/D. Sindhu Priya.webp",
  "E. SAHASRA": "/assets/NEET_RESULTS_2026/E. Sahasra.webp",
  "G. YASWANTH SAI": "/assets/NEET_RESULTS_2026/G. Yaswanth Sai.webp",
  "GREESHMA": "/assets/NEET_RESULTS_2026/GREESHMA.webp",
  "I. KHYTHI SAI SRI": "/assets/NEET_RESULTS_2026/I. Khythi Sai Sri.webp",
  "JADAV GOPAL": "/assets/NEET_RESULTS_2026/Jadav Gopal.webp",
  "K. ASMITHA PRIYA": "/assets/NEET_RESULTS_2026/K. Asmitha Priya.webp",
  "K. SATHISH": "/assets/NEET_RESULTS_2026/K. Sathish.webp",
  "KETHAVATH AKHILA": "/assets/NEET_RESULTS_2026/Kethavath Akhila.webp",
  "M. KALYANI": "/assets/NEET_RESULTS_2026/M. KALYANI.webp",
  "M. MANASA": "/assets/NEET_RESULTS_2026/M. Manasa.webp",
  "M.M. VISWANATH REDDY": "/assets/NEET_RESULTS_2026/M.M. VISWANATH REDDY.webp",
  "MAMIDI ABHILASH": "/assets/NEET_RESULTS_2026/Mamidi Abhilash.webp",
  "N. SANTHOSH": "/assets/NEET_RESULTS_2026/N. Santhosh.webp",
  "P CHARITHA": "/assets/NEET_RESULTS_2026/P CHARITHA .webp",
  "PALLE SUSANTH": "/assets/NEET_RESULTS_2026/Palle Susanth.webp",
  "R. CHAKRIKA REDDY": "/assets/NEET_RESULTS_2026/R. Chakrika Reddy.webp",
  "R. JASWANTH REDDY": "/assets/NEET_RESULTS_2026/R. JASWANTH REDDY.webp",
  "RATHOD BALAJI": "/assets/NEET_RESULTS_2026/Rathod Balaji.webp",
  "S. SOMA SRI LAKSHMI": "/assets/NEET_RESULTS_2026/S. Soma Sri Lakshmi.webp",
  "T. PRAVANTH REDDY": "/assets/NEET_RESULTS_2026/T. Pravanth Reddy.webp",
  "U. TARUN TEJA": "/assets/NEET_RESULTS_2026/U. Tarun Teja.webp",
  "V. RAHUL": "/assets/NEET_RESULTS_2026/V. RAHUL.webp",
};

function resolveImage(name, map, fallback = placeholderPhoto("#f8fafc")) {
  return map[normalizeName(name).toUpperCase()] ?? map[name] ?? fallback;
}

const jeeStudents = [
  { name: "A. CHARITH", line1: "2026 Topper", line2: "", image: resolveImage("A. CHARITH", JEE_TOPPER_IMAGES) },
  { name: "B. GOWTHAM", line1: "2026 Topper", line2: "", image: resolveImage("B. GOWTHAM", JEE_TOPPER_IMAGES) },
  { name: "BHANU SRIKAR", line1: "2026 Topper", line2: "", image: resolveImage("BHANU SRIKAR", JEE_TOPPER_IMAGES) },
  { name: "DEVA SAKETH", line1: "2026 Topper", line2: "", image: resolveImage("DEVA SAKETH", JEE_TOPPER_IMAGES) },
  { name: "G. RISHITHA REDDY", line1: "2026 Topper", line2: "", image: resolveImage("G. RISHITHA REDDY", JEE_TOPPER_IMAGES) },
  { name: "M. JAGAN MOHAN REDDY", line1: "2026 Topper", line2: "", image: resolveImage("M. JAGAN MOHAN REDDY", JEE_TOPPER_IMAGES) },
  { name: "R. ADI PRANAV", line1: "2026 Topper", line2: "", image: resolveImage("R. ADI PRANAV", JEE_TOPPER_IMAGES) },
];

const neetStudents = [
  { name: "M.M. VISWANATH REDDY", line1: "691/720", image: resolveImage("M.M. VISWANATH REDDY", NEET_RESULT_IMAGES) },
  { name: "V. RAHUL", line1: "686/720", image: resolveImage("V. RAHUL", NEET_RESULT_IMAGES) },
  { name: "R. JASWANTH REDDY", line1: "685/720", image: resolveImage("R. JASWANTH REDDY", NEET_RESULT_IMAGES) },
  { name: "M. KALYANI", line1: "525/720", image: resolveImage("M. KALYANI", NEET_RESULT_IMAGES) },
  { name: "P. Venkata Sai", line1: "509/720", image: placeholderPhoto("#eef2ff") },
  { name: "S. Soma Sri Lakshmi", line1: "518/720", image: resolveImage("S. SOMA SRI LAKSHMI", NEET_RESULT_IMAGES) },
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
        className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 items-center justify-center rounded-full bg-white dark:bg-neutral-700 shadow-lg text-neutral-500 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all"
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
              className={`relative shrink-0 w-[190px] sm:w-[170px] h-[310px] sm:h-[250px] cursor-pointer rounded-[2rem] border border-green-500 bg-white px-5 py-6 text-center transition-all duration-300 ease-out dark:bg-neutral-950 ${
                "opacity-90"
              }`}
            >
              <div className="mx-auto flex h-[106px] w-full items-center justify-center rounded-[1.35rem] bg-white p-2.5 sm:h-[120px] dark:bg-white">
                <img
                  src={s.image}
                  alt={s.name}
                  className="h-full w-full rounded-[0.9rem] object-contain object-center"
                />
              </div>
              <div className="mt-6 flex flex-col items-center">
                <p className="text-[0.54rem] font-extrabold uppercase tracking-wide text-neutral-900 dark:text-white sm:text-[0.66rem]">
                  {s.name}
                </p>
                <div className="mt-3.5 h-px w-10 bg-neutral-200 dark:bg-white" />
                <div className="mt-2.5 text-neutral-500 dark:text-white">
                  {renderDetails(s)}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        type="button"
        onClick={() => trackRef.current?.scrollBy({ left: 260, behavior: "smooth" })}
        aria-label="Next"
        className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 items-center justify-center rounded-full bg-white dark:bg-neutral-700 shadow-lg text-neutral-500 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all"
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
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-8 w-1.5 rounded-full bg-red-500" />
            <div>
              <span className="text-xs font-bold tracking-widest text-red-500 uppercase">Top Rankers</span>
              <h2 className="text-xl font-extrabold text-neutral-900 dark:text-white sm:text-2xl">IIT-JEE Achievements</h2>
            </div>
          </motion.div>
          <AchievementCarousel
            students={jeeStudents}
            accent={{ glow: "ring-2 ring-red-500/40", badge: "bg-red-600", line: "bg-red-500" }}
            renderDetails={(s) => (
              <>
                <p className="text-black dark:text-white text-[9px] font-semibold mt-0.5">{s.line1}</p>
                <p className="text-black/70 dark:text-white text-[8px]">{s.line2}</p>
              </>
            )}
          />
        </div>

        {/* NEET */}
        <div className="mt-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-8 w-1.5 rounded-full bg-orange-500" />
            <div>
              <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">Top Rankers</span>
              <h2 className="text-xl font-extrabold text-neutral-900 dark:text-white sm:text-2xl">NEET Achievements</h2>
            </div>
          </motion.div>
          <AchievementCarousel
            students={neetStudents}
            accent={{ glow: "ring-2 ring-orange-500/40", badge: "bg-orange-500", line: "bg-orange-400" }}
            renderDetails={(s) => (
              <p className="text-black dark:text-white text-[9px] font-semibold mt-0.5 line-clamp-2">{s.line1}</p>
            )}
          />
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-10 text-center"
        >
          <RouteLink
            to="/results"
            className="inline-flex items-center gap-2 bg-neutral-900 dark:bg-white hover:bg-neutral-700 dark:hover:bg-neutral-200 text-white dark:text-neutral-900 font-semibold px-6 py-2.5 rounded-full shadow-sm transition-all hover:scale-105 active:scale-95 text-sm"
          >
            View All Results
          </RouteLink>
        </motion.div>
      </div>
    </section>
  );
}
