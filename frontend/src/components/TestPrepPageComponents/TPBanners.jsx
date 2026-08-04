import { useEffect, useRef } from "react";

const banners = [
  { bg: "bg-violet-600",   emoji: "🎯", title: "IIT JEE 2025 Batch Forming", sub: "Long Term & Crash batches — seats limited" },
  { bg: "bg-indigo-600",   emoji: "🧬", title: "NEET 2025 Admissions Open",  sub: "2-Year & Short Term crash available" },
  { bg: "bg-orange-500",   emoji: "🏆", title: "EAPCET Integrated Batch",    sub: "Start alongside your Intermediate" },
  { bg: "bg-sky-500",      emoji: "⚡", title: "BITSAT Crash — 3 Months",    sub: "Score 360+ with our focused prep" },
  { bg: "bg-emerald-600",  emoji: "📈", title: "AIR Under 1000 — JEE Advanced", sub: "Join our advanced ranker batch" },
  { bg: "bg-rose-600",     emoji: "🩺", title: "720/720 NEET Target Batch",  sub: "Full marks strategy with Ignite" },
  { bg: "bg-amber-500",    emoji: "🌟", title: "Scholarship Test — Register Now", sub: "Up to 100% fee waiver for toppers" },
  { bg: "bg-violet-700",   emoji: "🏠", title: "Residential Facility Available", sub: "Hostel + coaching at all branches" },
];

// duplicate for seamless loop
const allBanners = [...banners, ...banners];

export default function TPBanners() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animId;
    let pos = 0;
    const speed = 0.6; // px per frame

    function tick() {
      pos += speed;
      // reset when first half scrolled
      if (pos >= track.scrollWidth / 2) pos = 0;
      track.style.transform = `translateX(-${pos}px)`;
      animId = requestAnimationFrame(tick);
    }
    animId = requestAnimationFrame(tick);

    // pause on hover
    const pause = () => cancelAnimationFrame(animId);
    const resume = () => { animId = requestAnimationFrame(tick); };
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animId);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section className="overflow-hidden bg-neutral-950 py-10 dark:bg-neutral-900">
      {/* heading */}
      <p className="mb-6 text-center text-xs font-bold uppercase tracking-[0.25em] text-neutral-500">
        Latest Updates & Programmes
      </p>

      <div className="overflow-hidden">
        <div ref={trackRef} className="flex gap-4 will-change-transform" style={{ width: "max-content" }}>
          {allBanners.map((b, i) => (
            <div
              key={i}
              className={`flex shrink-0 items-center gap-4 rounded-2xl px-6 py-5 ${b.bg} shadow-md min-w-[280px]`}
            >
              <span className="text-3xl">{b.emoji}</span>
              <div>
                <p className="text-sm font-extrabold text-white leading-tight">{b.title}</p>
                <p className="mt-0.5 text-xs text-white/70">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
