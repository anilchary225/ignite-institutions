import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



const RoadmapCard = ({ phase, position, expanded, onToggle, colors }) => {
  const color = colors[phase.color];

  const isTop = position === "top";

  return (
    <div className="relative">
      <div
        className={`
relative z-20
h-40
w-full
rounded-[28px]
border-2
${color.border}
bg-white
shadow-[0_15px_40px_rgba(15,23,42,0.10)]
`}
      >
        {/* ICON */}

        <div
          className={`
absolute
left-1/2
-translate-x-1/2
${isTop ? "-top-7" : "-bottom-7"}
z-30
flex
h-14
w-14
items-center
justify-center
rounded-full
border-4
border-white
${color.bg}
text-2xl
shadow-lg
`}
        >
          {phase.icon}
        </div>

        {/* TEXT */}

        <div
          className="
flex
h-full
flex-col
items-center
justify-center
px-8
"
        >
          <p
            className={`
text-[11px]
font-black
uppercase
tracking-[0.28em]
${color.text}
`}
          >
            {phase.phase}
          </p>

          <h3
            className="
mt-3
max-w-[240px]
text-center
text-xl
font-black
leading-tight
text-neutral-900
"
          >
            {phase.shortTitle}
          </h3>
        </div>

        {/* EXPAND BUTTON */}

        <button
          onClick={onToggle}
          className={`
absolute
right-[-17px]
top-1/2
z-50
flex
h-9
w-9
-translate-y-1/2
items-center
justify-center
rounded-full
border-4
border-white
${color.bg}
text-white
font-black
shadow-lg
transition
hover:scale-110
${expanded ? "rotate-180" : ""}
`}
        >
          ↓
        </button>

        {/* ROAD POINT */}

        <div
          className={`
absolute
left-1/2
z-20
flex
h-7
w-7
-translate-x-1/2
items-center
justify-center
rounded-full
border-[5px]
border-white
${color.bg}
shadow-lg

${isTop ? "-bottom-[14px]" : "-top-[14px]"}

`}
        >
          <div className="h-1.5 w-1.5 rounded-full bg-white" />
        </div>

        {/* EXPANDED CONTENT */}

        {expanded && (
          <div
            className={`
absolute
left-1/2
z-50
w-[calc(100%+20px)]
-translate-x-1/2
rounded-2xl
border
border-neutral-200
bg-white
p-5
shadow-2xl


${isTop ? "top-[calc(50%+25px)]" : "bottom-[calc(100%+25px)]"}

`}
          >
            <p
              className={`
mb-3
text-xs
font-black
uppercase
${color.text}
`}
            >
              What you'll achieve
            </p>

            <ul className="space-y-2">
              {phase.items.map((item, i) => (
                <li
                  key={i}
                  className="
flex
gap-2
text-xs
leading-5
text-neutral-600
"
                >
                  <span
                    className={`
mt-1.5
h-1.5
w-1.5
rounded-full
${color.bg}
`}
                  />

                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
const IITRoadmap = ({ phases, title, course, colors, heading, subheading }) => {
  const [activePhase, setActivePhase] = useState(null);

  const roadmapRef = useRef(null);
  const busRef = useRef(null);

  const togglePhase = (index) => {
    setActivePhase((current) => (current === index ? null : index));
  };

  // ===============================
  // GSAP BUS SCROLL ANIMATION
  // ===============================

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        busRef.current,

        {
          x: 0,
        },

        {
          x: -1050,

          ease: "none",

          scrollTrigger: {
            trigger: roadmapRef.current,

            start: "top 70%",

            end: "bottom 40%",

            scrub: 1,

            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, roadmapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="
  w-full
  overflow-hidden
  py-10
  "
      style={{
        backgroundImage: "url(/assets/schoolsketch.jpeg)",

        backgroundSize: "cover",

        backgroundPosition: "center",
      }}
    >
      {/* HEADER */}

      <div
        className="
  mx-auto
  mb-8
  max-w-3xl
  px-6
  text-center
  "
      >
        <p
          className="
  text-sm
  font-black
  uppercase
  tracking-[0.3em]
  text-blue-600
  "
        >
          {heading}
        </p>

        <h2
          className="
  mt-3
  text-3xl
  font-black
  text-neutral-900
  sm:text-5xl
  "
        >
          {title}
        </h2>

        <p
          className="
  mx-auto
  mt-4
  max-w-2xl
  text-sm
  leading-7
  text-neutral-500
  sm:text-base
  "
        >
          {subheading}
        </p>
      </div>

      {/* ========================= */}
      {/* DESKTOP */}
      {/* ========================= */}

      <div
        ref={roadmapRef}
        className="
  relative
  mx-auto
  hidden
  h-[1000px]
  max-w-[1550px]
  px-8
  lg:block
  "
      >
        {/* START */}

        <div
          className="
  absolute
  left-5
  top-[205px]
  z-30
  w-[150px]
  text-center
  "
        >
          <div className="text-4xl">📚</div>

          <h3
            className="
  mt-2
  text-xl
  font-black
  "
          >
            START
          </h3>

          <p
            className="
  mt-2
  text-xs
  font-semibold
  text-neutral-500
  "
          >
            Begin your {course} journey
          </p>
        </div>

        {/* DESTINATION */}

        <div
          className="
  absolute
  right-3
  bottom-[500px]
  z-30
  w-[160px]
  text-center
  "
        >
          <div className="text-5xl">🎓</div>

          <h3
            className="
            mt-2
            text-xl
            font-black
            "
          >
            DESTINATION
          </h3>

          <p
            className="
            mt-1
            text-sm
            font-black
            text-blue-600
            "
          >
            {course} SUCCESS
          </p>
        </div>

        {/* ========================= */}
        {/* SVG ROAD */}
        {/* ========================= */}

        <svg
          className="
  pointer-events-none
  absolute
  inset-0
  z-0
  h-full
  w-full
  "
          viewBox="
  0 0 1550 1080
  "
          preserveAspectRatio="none"
        >
          <path
            d="
  
  M 145 265
  
  L 1400 265
  
  
  C 1460 265 1480 300 1480 340
  
  
  C 1480 380 1450 420 1380 420
  
  
  L 150 420
  
  
  C 80 420 60 450 70 450
  
  
  C 60 470 100 470 180 470
  
  
  L 1400 470
  
  "
            fill="none"
            stroke="#172554"
            strokeWidth="5"
            strokeDasharray="2 14"
            strokeLinecap="round"
          />
        </svg>

        {/* ========================= */}
        {/* BUS */}
        {/* ========================= */}

        <div
          ref={busRef}
          className="
  absolute
  right-[5%]
  top-[290px]
  z-10
  flex
  items-center
  gap-2
  "
        >
          <img
            src="/assets/images/bus.webp"
            alt="college bus"
            className="
  w-[180px]
  select-none
  "
          />

          <span
            className="
  rounded-full
  bg-white
  px-4
  py-2
  text-[10px]
  font-black
  uppercase
  tracking-wide
  text-blue-900
  shadow-lg
  "
          >
            {course} Journey
          </span>
        </div>

        {/* ========================= */}
        {/* CARDS */}
        {/* ========================= */}

        <div
          className="
  absolute
  left-[240px]
  right-[220px]
  top-0
  grid
  grid-cols-3
  gap-x-[78px]
  "
        >
          {/* TOP ROW */}

          <div className="pt-[80px]">
            <RoadmapCard
              colors={colors}
              phase={phases[0]}
              position="top"
              expanded={activePhase === 0}
              onToggle={() => togglePhase(0)}
            />
          </div>

          <div className="pt-[80px]">
            <RoadmapCard
              colors={colors}
              phase={phases[1]}
              position="top"
              expanded={activePhase === 1}
              onToggle={() => togglePhase(1)}
            />
          </div>

          <div className="pt-[80px]">
            <RoadmapCard
              colors={colors}
              phase={phases[3]}
              position="top"
              expanded={activePhase === 3}
              onToggle={() => togglePhase(3)}
            />
          </div>

          {/* BOTTOM ROW */}

          <div className="mt-[200px]">
            <RoadmapCard
              colors={colors}
              phase={phases[2]}
              position="bottom"
              expanded={activePhase === 2}
              onToggle={() => togglePhase(2)}
            />
          </div>

          <div className="mt-[200px]">
            <RoadmapCard
              colors={colors}
              phase={phases[4]}
              position="bottom"
              expanded={activePhase === 4}
              onToggle={() => togglePhase(4)}
            />
          </div>

          <div className="mt-[200px]">
            <RoadmapCard
              colors={colors}
              phase={phases[5]}
              position="bottom"
              expanded={activePhase === 5}
              onToggle={() => togglePhase(5)}
            />
          </div>
        </div>
      </div>
      {/* =============================== */}
      {/* MOBILE */}
      {/* =============================== */}

      <div className="mx-auto max-w-xl px-6 lg:hidden">
        {/* START */}

        <div className="mb-10 text-center">
          <div className="text-4xl">📚</div>

          <h3
            className="
            mt-2
            text-2xl
            font-black
            "
          >
            START
          </h3>

          <p
            className="
            mt-1
            text-sm
            text-neutral-500
            "
          >
            {heading}
          </p>
        </div>

        {/* MOBILE ROAD */}

        <div className="relative pl-8">
          {/* Vertical dotted line */}

          <div
            className="
          absolute
          left-[15px]
          top-0
          bottom-0
          border-l-[4px]
          border-dotted
          border-blue-950
          "
          />

          <div className="space-y-10">
            {phases.map((phase, index) => (
              <div
                key={phase.phase}
                className="
              relative
              "
              >
                {/* ROAD POINT */}

                <div
                  className={`
                absolute
                -left-[32px]
                top-1/2
                z-50
                h-7
                w-7
                -translate-y-1/2
                rounded-full
                border-[5px]
                border-white
                ${colors[phase.color].bg}
                shadow-lg
                `}
                ></div>

                <RoadmapCard
                  colors={colors}
                  phase={phase}
                  position="top"
                  expanded={activePhase === index}
                  onToggle={() => togglePhase(index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* DESTINATION */}

        <div
          className="
        mt-16
        text-center
        "
        >
          <div className="text-5xl">🎓</div>

          <h3
            className="
          mt-2
          text-2xl
          font-black
          "
          >
            DESTINATION
          </h3>

          <p
            className="
          mt-1
          text-sm
          font-black
          text-blue-600
          "
          >
            {course} SUCCESS
          </p>

          <div
            className="
          mx-auto
          mt-3
          inline-flex
          rounded-full
          bg-blue-900
          px-6
          py-2
          text-xs
          font-black
          uppercase
          tracking-wider
          text-white
          "
          >
            Dream Achieved
          </div>
        </div>
      </div>
    </section>
  );
};

export default IITRoadmap;
