import React from "react";
import { Star, Quote } from "lucide-react";

const parentTestimonials = [
  {
    name: "Ravi Kumar",
    child: "Father of Sanjana, MPC 2nd Year",
    quote: "The faculty at Ignite genuinely care about every student's progress. My daughter's confidence in Physics and Maths has grown tremendously since she joined.",
    rating: 5,
    image: "https://placehold.co/100x100/f97316/ffffff?text=RK",
  },
  {
    name: "Lakshmi Prasanna",
    child: "Mother of Arjun, BiPC 1st Year",
    quote: "What stood out to us was how approachable the teachers are. Any concern we had about our son's preparation was addressed quickly and clearly.",
    rating: 5,
    image: "https://placehold.co/100x100/16a34a/ffffff?text=LP",
  },
  {
    name: "Srinivas Rao",
    child: "Father of Meghana, MPC 2nd Year",
    quote: "From admissions to results, the communication has been transparent throughout. We always know how our daughter is performing.",
    rating: 5,
    image: "https://placehold.co/100x100/f97316/ffffff?text=SR",
  },
];

const studentTestimonials = [
  {
    name: "Sanjana Reddy",
    child: "MPC, Batch 2025-27",
    quote: "The doubt-clearing sessions and weekly tests kept me consistent throughout the year. I finally feel ready and confident for JEE.",
    rating: 5,
    image: "https://placehold.co/100x100/2563eb/ffffff?text=SR",
  },
  {
    name: "Arjun Varma",
    child: "BiPC, Batch 2025-27",
    quote: "Ignite's NEET-focused biology classes are extremely detailed. The study material and regular mock tests really made a difference for me.",
    rating: 4,
    image: "https://placehold.co/100x100/9333ea/ffffff?text=AV",
  },
  {
    name: "Meghana Chowdary",
    child: "MPC, Batch 2024-26",
    quote: "The campus environment pushed me to perform better every single day. My rank improved a lot after joining the long-term JEE batch here.",
    rating: 5,
    image: "https://placehold.co/100x100/2563eb/ffffff?text=MC",
  },
];

function TestimonialCard({ t, accent, role }) {
  return (
    <div className="relative bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
      <Quote className="absolute top-4 right-4 text-neutral-100 dark:text-neutral-700" size={32} />

      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={13}
            className={i < t.rating ? "fill-orange-400 text-orange-400" : "fill-neutral-200 text-neutral-200 dark:fill-neutral-600 dark:text-neutral-600"}
          />
        ))}
      </div>

      <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm relative z-10">
        "{t.quote}"
      </p>

      <div className="mt-4 flex items-center gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-700">
        <img src={t.image} alt={t.name} className="w-9 h-9 rounded-full object-cover shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-neutral-900 dark:text-white text-xs">{t.name}</p>
          <p className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate">{t.child}</p>
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full shrink-0 ${accent}`}>
          {role}
        </span>
      </div>
    </div>
  );
}

function TestimonialGroup({ title, subtitle, data, accent, role, accentLabel }) {
  return (
    <div className="mt-10 first:mt-0">
      <div className="flex items-center gap-3 mb-5">
        <span className={`h-7 w-1 rounded-full ${accentLabel}`} />
        <div>
          <h3 className="text-base font-bold text-neutral-900 dark:text-white">{title}</h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">{subtitle}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((t, i) => (
          <TestimonialCard key={i} t={t} accent={accent} role={role} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-14 px-4 sm:px-8 sm:py-16 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-2">
            Testimonials
          </span>
          <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
            What Parents & Students Say
          </h2>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            Real experiences from the Ignite family.
          </p>
        </div>

        <TestimonialGroup
          title="From Our Parents"
          subtitle="Trusted by families across Hyderabad"
          data={parentTestimonials}
          accent="bg-orange-100 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400"
          accentLabel="bg-orange-500"
          role="Parent"
        />

        <TestimonialGroup
          title="From Our Students"
          subtitle="Voices from MPC & BiPC batches"
          data={studentTestimonials}
          accent="bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
          accentLabel="bg-blue-500"
          role="Student"
        />
      </div>
    </section>
  );
}
