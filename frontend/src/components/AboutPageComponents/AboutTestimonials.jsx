import React, { useMemo, useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Hero from "./AboutPage/Hero";
import { parentTestimonials,studentTestimonials } from "../../data_results/testimonial_data";

// Generates a lightweight inline SVG avatar (initials on a soft blue field)
// as a base64 data URI. Used as a fallback until a real photo is supplied
// via each testimonial's `image` field.
function placeholderAvatar(initials, seed = 0) {
  const hues = ["#DBEAFE", "#E0E7FF", "#DCFCE7", "#FEF3C7"];
  const bg = hues[seed % hues.length];
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">
      <rect width="240" height="240" fill="${bg}"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="80" font-weight="600"
            fill="#1D4ED8" text-anchor="middle" dominant-baseline="central">${initials}</text>
    </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}



function TestimonialSlide({ t, role, seed = 0 }) {
  const imgSrc = t.image || placeholderAvatar(t.initials, seed);

  return (
    <div className="w-full shrink-0 px-2">
      <div className="relative flex flex-col sm:flex-row bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl max-w-4xl sm:h-300 md:h-100  mx-auto overflow-hidden">

        {/* Left-side image */}
        <div className="w-full h-auto  sm:w-52  lg:w-80 shrink-0 relative">
          <img
            src={imgSrc}
            alt={t.name}
            className="w-full h-full object-cover"
          />
          {/* subtle overlay so the role badge/linear reads well on any photo */}
          <div className="absolute inset-0 bg-linear-to-t from-black/10 sm:bg-linear-to-r sm:from-black/5 to-transparent pointer-events-none" />
        </div>

        {/* Right-side content */}
        <div className="relative  flex-1 p-8 sm:p-10 overflow-hidden">

          {/* Abstract decorative background */}
          <svg
            className="absolute -top-16 -right-16 w-56 h-56 opacity-40 dark:opacity-90 pointer-events-none"
            viewBox="0 0 220 220"
            aria-hidden="true"
          >
            <circle cx="110" cy="110" r="90" fill="none" className="stroke-blue-300 dark:stroke-blue-600" strokeWidth="1.2" />
            <circle cx="110" cy="110" r="60" fill="none" className="stroke-blue-400 dark:stroke-blue-500" strokeWidth="1.2" />
            <path d="M20 150 Q 90 60 200 100" fill="none" className="stroke-blue-500 dark:stroke-blue-400" strokeWidth="1.2" />
          </svg>
          <svg
            className="absolute -bottom-10 -left-10 w-36 h-36 opacity-30 dark:opacity-50 pointer-events-none"
            viewBox="0 0 140 140"
            aria-hidden="true"
          >
            <circle cx="70" cy="70" r="50" className="fill-blue-100 dark:fill-blue-900" />
          </svg>

          {/* Content sits above the background */}
          <div className="relative z-10">
            <Quote className="absolute -top-1 right-0 text-blue-50 dark:text-neutral-800" size={28} strokeWidth={1.5} />

            <div data-aos="fade-left" className="flex gap-0.5 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  className={
                    i < t.rating
                      ? "fill-blue-600 text-blue-600"
                      : "fill-neutral-200 text-neutral-200 dark:fill-neutral-700 dark:text-neutral-700"
                  }
                />
              ))}
            </div>

            <p data-aos="fade-up" className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-[15px] sm:text-base min-h-[96px]">
              {t.quote}
            </p>

            <div className="mt-6 flex items-center gap-3 pt-5 border-t border-neutral-100 dark:border-neutral-800">
              <div className="flex-1 min-w-0">
                <p data-aos="zoom-in" className="font-medium text-neutral-900 dark:text-white text-sm">{t.name}</p>
                <p data-aos="zoom-in" className="text-xs text-neutral-500 dark:text-neutral-400 truncate">{t.child}</p>
              </div>
              <span data-aos="fade-in" className="text-[11px] font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-2.5 py-1 rounded-full shrink-0">
                {role}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCarousel({ data, role }) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(trackRef.current, {
        xPercent: -100 * index,
        duration: 0.5,
        ease: "power2.inOut",
      });
    },
    { dependencies: [index] }
  );

  const go = (next) => {
    setIndex(((next % data.length) + data.length) % data.length);
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div ref={trackRef} className="flex">
          {data.map((t, i) => (
            <TestimonialSlide key={i} t={t} role={role} seed={i} />
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Previous testimonial"
        className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 dark:hover:border-blue-800 dark:hover:bg-blue-500/10 transition-colors"
      >
        <ChevronLeft size={15} className="text-neutral-500 dark:text-neutral-400" />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Next testimonial"
        className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 dark:hover:border-blue-800 dark:hover:bg-blue-500/10 transition-colors"
      >
        <ChevronRight size={15} className="text-neutral-500 dark:text-neutral-400" />
      </button>

      <div className="flex justify-center gap-1.5 mt-6">
        {data.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === index ? "w-5 bg-blue-600" : "w-1 bg-neutral-300 dark:bg-neutral-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
}


function PDHeroWaveGrid() {
  const paths = useMemo(() => {
    const w = 640;
    const h = 280;
    const rows = 26;
    const result = [];

    for (let i = 0; i < rows; i++) {
      const t = i / (rows - 1);
      const yBase = 150 + t * 160;
      const amp = 90 - t * 10;
      const freq = 0.006 + t * 0.0015;

      let d = `M -20 ${yBase}`;
      for (let x = -20; x <= w + 20; x += 20) {
        const y = yBase - Math.sin(x * freq + t * 2) * amp * Math.sin((x / w) * Math.PI);
        d += ` L ${x} ${y.toFixed(1)}`;
      }
      result.push(d);
    }
    return result;
  }, []);

  return (
    <svg
      viewBox="0 0 640 280"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pd-wave-fade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0.03" />
          <stop offset="50%" stopColor="white" stopOpacity="0.35" />
          <stop offset="100%" stopColor="white" stopOpacity="0.75" />
        </linearGradient>
      </defs>

      {paths.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="url(#pd-wave-fade)"
          strokeWidth="0.7"
        />
      ))}
    </svg>
  );
}

export default function AboutTestimonials() {
  const [tab, setTab] = useState("parents");

  return (
    <section className="bg-white dark:bg-neutral-950">
      <Hero
  title="Testimonials"
  subtitle="Real experiences from the students and parents who've been part of the Ignite journey."
  eyebrow="Success Stories"
  imageSrc="/assets/images/testimonial_bg.webp"
  abstract={<PDHeroWaveGrid/>}
/>
      <div className="max-w-7xl my-10 mx-auto px-6">
        

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-neutral-100 dark:bg-neutral-900 rounded-full p-1">
            <button
              type="button"
              onClick={() => setTab("parents")}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                tab === "parents"
                  ? "bg-white dark:bg-neutral-800 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
            >
              Parents
            </button>
            <button
              type="button"
              onClick={() => setTab("students")}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                tab === "students"
                  ? "bg-white dark:bg-neutral-800 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
            >
              Students
            </button>
          </div>
        </div>

        {tab === "parents" ? (
          <TestimonialCarousel data={parentTestimonials} role="Parent" />
        ) : (
          <TestimonialCarousel data={studentTestimonials} role="Student" />
        )}
      </div>
    </section>
  );
}