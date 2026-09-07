import React, { useEffect, useRef, useState, useCallback } from "react";
import { MapPin, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export const campusData = {
  Colleges: [
    { name: "Aditya Campus", location: "Kukatpally, Hyderabad", tag: "College", image: "/assets/images/college campuses/Aditya.webp" },
    { name: "Bharathi Bhavan Campus", location: "Kukatpally, Hyderabad", tag: "College", image: "/assets/images/college campuses/Bharathi_Bhavan_block.webp" },
    { name: "Newton Campus", location: "Kukatpally, Hyderabad", tag: "College", image: "/assets/images/college campuses/Newton_block.webp" },
    { name: "Patanjali Campus", location: "Kukatpally, Hyderabad", tag: "College", image: "/assets/images/college campuses/Patanjali_block.webp" },
    { name: "Saraswathi Campus", location: "Kukatpally, Hyderabad", tag: "College", image: "/assets/images/college campuses/Saraswathi_Block.webp" },
    { name: "Sindhura Campus", location: "Kukatpally, Hyderabad", tag: "College", image: "/assets/images/college campuses/Sindhura_block.webp" },
    { name: "Vagdevi Campus", location: "Kukatpally, Hyderabad", tag: "College", image: "/assets/images/college campuses/Vagdevi_block.webp" },
    { name: "Kalam Campus", location: "Kukatpally, Hyderabad", tag: "College", image: "/assets/images/college campuses/kalam_block.webp" },
  ],
  Schools: [
    { name: "Ignite High School", location: "Kukatpally, Hyderabad", tag: "School", image: "/assets/images/school campus/Ignite School.webp" },
  ],
};

function FocusCarousel({ items }) {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);

  const scrollToIndex = useCallback((index) => {
    const clamped = Math.max(0, Math.min(index, items.length - 1));
    const card = cardRefs.current[clamped];
    if (!card) return;
    card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    setActive(clamped);
  }, [items.length]);

  useEffect(() => {
    setActive(0);
    const track = trackRef.current;
    if (track) track.scrollTo({ left: 0 });
  }, [items]);

  // Still track which card is nearest center, just for the dot indicator —
  // no scale/opacity changes are applied anymore.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf;

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const trackCenter = track.scrollLeft + track.clientWidth / 2;
        let closest = 0;
        let closestDist = Infinity;
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const cardCenter = card.offsetLeft + card.clientWidth / 2;
          const dist = Math.abs(cardCenter - trackCenter);
          if (dist < closestDist) {
            closestDist = dist;
            closest = i;
          }
        });
        setActive(closest);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [items]);

  return (
    <div data-aos="fade-up" className="relative">
      <div
        ref={trackRef}
        onWheel={(event) => {
          if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
            event.preventDefault();
            event.currentTarget.scrollLeft += event.deltaY;
          }
        }}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 pl-[2%] pr-[10%] [-ms-overflow-style:none] [scrollbar-width:none] sm:pl-[4%] sm:pr-[10%] lg:pl-[6%] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((campus, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            onClick={() => i !== active && scrollToIndex(i)}
            data-motion-card
            className="group relative flex h-96 w-[78%] shrink-0 cursor-pointer snap-center flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white text-left dark:border-neutral-800 dark:bg-neutral-900 sm:w-[46%] lg:w-[28%]"
          >
            {/* Photo — always shrunk on mobile, shrinks on hover for sm+ */}
            <div className="relative h-[70%] w-full shrink-0 overflow-hidden transition-[height] duration-500 ease-out sm:h-full sm:group-hover:h-[70%]">
              <img
                src={campus.image}
                alt={campus.name}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              {/* Overlay text — only shown on desktop's resting (non-hover) state */}
              <div className="absolute inset-0 hidden bg-gradient-to-t from-black/80 via-black/20 to-transparent sm:block sm:opacity-100 sm:transition-opacity sm:duration-300 sm:group-hover:opacity-0" />
              <div className="absolute bottom-0 left-0 right-0 hidden p-4 sm:block sm:opacity-100 sm:transition-opacity sm:duration-200 sm:group-hover:opacity-0">
                <p className="text-sm font-semibold text-white">{campus.name}</p>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-white/80">
                  <MapPin size={12} />
                  <span>{campus.location}</span>
                </div>
              </div>
            </div>

            {/* Info panel — always visible on mobile, revealed on hover for sm+ */}
            <div className="flex flex-1 flex-col justify-between overflow-hidden px-5 py-4 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:delay-0 sm:group-hover:opacity-100 sm:group-hover:delay-150">
              <div>
                <p className="text-base font-semibold text-neutral-900 dark:text-white">
                  {campus.name}
                </p>
                <div className="mt-1.5 flex items-center gap-1.5 text-sm text-neutral-500 dark:text-neutral-400">
                  <MapPin size={13} />
                  <span>{campus.location}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
                  {campus.tag}
                </span>
                {/* <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-600 dark:bg-white dark:text-neutral-900"
                >
                  View campus
                  <ArrowRight size={13} />
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => scrollToIndex(active - 1)}
            disabled={active === 0}
            aria-label="Previous campus"
            className="absolute left-1 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white p-2 disabled:opacity-30 dark:border-neutral-800 dark:bg-neutral-900 sm:flex"
          >
            <ChevronLeft size={16} className="text-neutral-600 dark:text-neutral-300" />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(active + 1)}
            disabled={active === items.length - 1}
            aria-label="Next campus"
            className="absolute right-1 top-1/2 z-20 flex -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white p-2 disabled:opacity-30 dark:border-neutral-800 dark:bg-neutral-900 sm:flex"
          >
            <ChevronRight size={16} className="text-neutral-600 dark:text-neutral-300" />
          </button>

          <div className="mt-5 flex justify-center gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to campus ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-blue-600" : "w-1.5 bg-neutral-300 dark:bg-neutral-700"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Campuses() {
  const [activeTab, setActiveTab] = useState("Colleges");
  const tabs = Object.keys(campusData);

  return (
    <section className="py-14 px-4 sm:px-8 sm:py-16 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span data-aos="fade-up" className="inline-block text-xs font-medium tracking-[0.25em] text-blue-600 dark:text-blue-400 uppercase mb-2">
            Campuses
          </span>
          <h2 data-aos="fade-up" className="text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">
            Our Branches
          </h2>
          <p data-aos="fade-up" className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            Explore Ignite branches across Hyderabad
          </p>
        </div>

        <div data-aos="fade-up" className="flex justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-blue-50 dark:hover:bg-blue-500/10 hover:text-blue-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <FocusCarousel key={activeTab} items={campusData[activeTab]} />
      </div>
    </section>
  );
}
