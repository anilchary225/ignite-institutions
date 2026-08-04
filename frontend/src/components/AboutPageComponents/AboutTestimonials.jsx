import React, { useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Hero from "./AboutComponents/Hero";

const parentTestimonials = [
  {
    name: "Ravi Kumar",
    child: "Father of Sanjana, MPC 2nd Year",
    quote:
      "The faculty at Ignite genuinely care about every student's progress. My daughter's confidence in Physics and Maths has grown tremendously since she joined.",
    rating: 5,
    image: "https://placehold.co/100x100/f97316/ffffff?text=RK",
  },
  {
    name: "Lakshmi Prasanna",
    child: "Mother of Arjun, BiPC 1st Year",
    quote:
      "What stood out to us was how approachable the teachers are. Any concern we had about our son's preparation was addressed quickly and clearly.",
    rating: 5,
    image: "https://placehold.co/100x100/16a34a/ffffff?text=LP",
  },
  {
    name: "Srinivas Rao",
    child: "Father of Meghana, MPC 2nd Year",
    quote:
      "From admissions to results, the communication has been transparent throughout. We always know how our daughter is performing.",
    rating: 5,
    image: "https://placehold.co/100x100/f97316/ffffff?text=SR",
  },
];

const studentTestimonials = [
  {
    name: "Sanjana Reddy",
    child: "MPC, Batch 2025-27",
    quote:
      "The doubt-clearing sessions and weekly tests kept me consistent throughout the year. I finally feel ready and confident for JEE.",
    rating: 5,
    image: "https://placehold.co/100x100/2563eb/ffffff?text=SR",
  },
  {
    name: "Arjun Varma",
    child: "BiPC, Batch 2025-27",
    quote:
      "Ignite's NEET-focused biology classes are extremely detailed. The study material and regular mock tests really made a difference for me.",
    rating: 4,
    image: "https://placehold.co/100x100/9333ea/ffffff?text=AV",
  },
  {
    name: "Meghana Chowdary",
    child: "MPC, Batch 2024-26",
    quote:
      "The campus environment pushed me to perform better every single day. My rank improved a lot after joining the long-term JEE batch here.",
    rating: 5,
    image: "https://placehold.co/100x100/2563eb/ffffff?text=MC",
  },
];

function TestimonialSlide({ t, accent, role }) {
  return (
    <div className="w-full shrink-0 px-2">
      <div className="relative bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-8 sm:p-10 shadow-sm max-w-xl mx-auto">
        <Quote className="absolute top-6 right-6 text-slate-100 dark:text-slate-700" size={40} />

        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < t.rating
                  ? "fill-amber-400 text-amber-400"
                  : "fill-slate-200 text-slate-200 dark:fill-slate-600 dark:text-slate-600"
              }
            />
          ))}
        </div>

        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px] relative z-10 min-h-[80px]">
          "{t.quote}"
        </p>

        <div className="mt-6 flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-700">
          <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <p className="font-semibold text-slate-900 dark:text-white text-sm">{t.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{t.child}</p>
          </div>
          <span
            className={`ml-auto text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full ${accent}`}
          >
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}

function TestimonialCarousel({ title, subtitle, data, accent, role }) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const dir = useRef(1);

  useGSAP(
    () => {
      gsap.to(trackRef.current, {
        xPercent: -100 * index,
        duration: 0.7,
        ease: "power3.inOut",
      });
    },
    { dependencies: [index] }
  );

  const go = (next) => {
    dir.current = next > index || (index === data.length - 1 && next === 0) ? 1 : -1;
    setIndex(((next % data.length) + data.length) % data.length);
  };

  return (
    <div className="mt-16 first:mt-0">
      
      <div className="flex items-baseline justify-between gap-4 mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div ref={trackRef} className="flex">
            {data.map((t, i) => (
              <TestimonialSlide key={i} t={t} accent={accent} role={role} />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous testimonial"
          className="absolute left-0 sm:-left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
        >
          <ChevronLeft size={18} className="text-slate-700 dark:text-slate-200" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next testimonial"
          className="absolute right-0 sm:-right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
        >
          <ChevronRight size={18} className="text-slate-700 dark:text-slate-200" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {data.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-orange-500" : "w-2 bg-slate-300 dark:bg-slate-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function AboutTestimonials() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="mb-6">
            <Hero
                    title="Testimonials"
                    imageSrc="/images/pd-hero.jpg"
                  />
        </div>
      <div className="max-w-6xl mx-auto">
       

        <TestimonialCarousel
          title="From Our Parents"
          subtitle="Trusted by families across Hyderabad"
          data={parentTestimonials}
          accent="bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400"
          role="Parent"
        />

        <TestimonialCarousel
          title="From Our Students"
          subtitle="Voices from MPC & BiPC batches"
          data={studentTestimonials}
          accent="bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
          role="Student"
        />
      </div>
    </section>
  );
}