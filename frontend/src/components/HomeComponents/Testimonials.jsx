import React from "react";
import { Star, Quote } from "lucide-react";

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

function TestimonialCard({ t, accent, role }) {
  return (
    <div className="relative bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out">
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

      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px] relative z-10">
        “{t.quote}”
      </p>

      <div className="mt-6 flex items-center gap-4 pt-6 border-t border-slate-100 dark:border-slate-700">
        <img
          src={t.image}
          alt={t.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-slate-900 dark:text-white text-sm">
            {t.name}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">{t.child}</p>
        </div>
        <span
          className={`ml-auto text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full ${accent}`}
        >
          {role}
        </span>
      </div>
    </div>
  );
}

function TestimonialGroup({ title, subtitle, data, accent, role }) {
  return (
    <div className="mt-16 first:mt-0">
      <div className="flex items-baseline justify-between gap-4 mb-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((t, i) => (
          <TestimonialCard key={i} t={t} accent={accent} role={role} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-20 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-[0.2em] text-orange-500 uppercase">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
            What Parents & Students Say
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400">
            Real experiences from the Ignite family, shared by the people who matter most.
          </p>
        </div>

        <TestimonialGroup
          title="From Our Parents"
          subtitle="Trusted by families across Hyderabad"
          data={parentTestimonials}
          accent="bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400"
          role="Parent"
        />

        <TestimonialGroup
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