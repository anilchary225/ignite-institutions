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

function TestimonialSlide({ t, accentClass, role, roleColor }) {
  return (
    <div className="w-full shrink-0 px-2">
      <div className="relative bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl p-6 sm:p-8 shadow-sm max-w-xl mx-auto">
        <Quote className="absolute top-5 right-5 text-neutral-100 dark:text-neutral-700" size={36} />

        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={14}
              className={
                i < t.rating
                  ? "fill-orange-400 text-orange-400"
                  : "fill-neutral-200 text-neutral-200 dark:fill-neutral-600 dark:text-neutral-600"
              }
            />
          ))}
        </div>

        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm relative z-10 min-h-[72px]">
          "{t.quote}"
        </p>

        <div className="mt-5 flex items-center gap-3 pt-5 border-t border-neutral-100 dark:border-neutral-700">
          <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-neutral-900 dark:text-white text-sm">{t.name}</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">{t.child}</p>
          </div>
          <span className={`text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shrink-0 ${accentClass}`}>
            {role}
          </span>
        </div>
      </div>
    </div>
  );
}

function TestimonialCarousel({ title, subtitle, data, accentClass, dotColor, role }) {
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(trackRef.current, {
        xPercent: -100 * index,
        duration: 0.6,
        ease: "power3.inOut",
      });
    },
    { dependencies: [index] }
  );

  const go = (next) => {
    setIndex(((next % data.length) + data.length) % data.length);
  };

  return (
    <div className="mt-12 first:mt-0">
      <div className="flex items-baseline justify-between gap-4 mb-6">
        <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{title}</h3>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 hidden sm:block">{subtitle}</p>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div ref={trackRef} className="flex">
            {data.map((t, i) => (
              <TestimonialSlide key={i} t={t} accentClass={accentClass} role={role} />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous testimonial"
          className="absolute left-0 sm:-left-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
        >
          <ChevronLeft size={16} className="text-neutral-700 dark:text-neutral-200" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next testimonial"
          className="absolute right-0 sm:-right-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow flex items-center justify-center hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
        >
          <ChevronRight size={16} className="text-neutral-700 dark:text-neutral-200" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-5">
        {data.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? `w-6 ${dotColor}` : "w-2 bg-neutral-300 dark:bg-neutral-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function AboutTestimonials() {
  return (
    <section className="bg-white dark:bg-neutral-950 transition-colors duration-300">
      <Hero
        title="Testimonials"
        imageSrc="/images/pd-hero.jpg"
      />

      {/* Parents — light orange bg */}
      <div className="bg-orange-50 dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-2">
              Parent Voices
            </span>
            <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
              What Families Say
            </h2>
          </div>
          <TestimonialCarousel
            title="From Our Parents"
            subtitle="Trusted by families across Hyderabad"
            data={parentTestimonials}
            accentClass="bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400"
            dotColor="bg-orange-500"
            role="Parent"
          />
        </div>
      </div>

      {/* Students — light blue bg */}
      <div className="bg-blue-50 dark:bg-neutral-900">
        <div className="max-w-4xl mx-auto px-6 py-14">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-blue-500 uppercase mb-2">
              Student Voices
            </span>
            <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
              What Our Students Say
            </h2>
          </div>
          <TestimonialCarousel
            title="From Our Students"
            subtitle="Voices from MPC & BiPC batches"
            data={studentTestimonials}
            accentClass="bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
            dotColor="bg-blue-500"
            role="Student"
          />
        </div>
      </div>
    </section>
  );
}
