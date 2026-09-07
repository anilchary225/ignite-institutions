import React from "react";
import { Star, Quote } from "lucide-react";

import { parentTestimonials } from "../../data_results/testimonial_data";
import { studentTestimonials } from "../../data_results/testimonial_data";

function TestimonialCard({ t, accent, role }) {
  return (
    <div data-motion-card className="relative w-full h-full bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
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

      <div className="flex flex-col justify-between h-full p-5">
      <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm relative z-10">
        "{t.quote}"
      </p>

      <div className="mt-4 flex items-center gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-700">
        <img src={t.image} alt={t.name} className="w-12 h-auto rounded-2xl object-cover shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-neutral-900 dark:text-white text-xs">{t.name}</p>
          <p className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate">{t.child}</p>
        </div>
        <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full shrink-0 ${accent}`}>
          {role}
        </span>
      </div>
      </div>
    </div>
  );
}

function TestimonialGroup({ title, subtitle, data, accent, role, accentLabel }) {
  return (
    <div className="mt-10 first:mt-0">
      <div className="flex items-center gap-3 mb-5">
        <span data-aos="fade-up" className={`h-7 w-1 rounded-full ${accentLabel}`} />
        <div>
          <h3 data-aos="fade-up" className="text-base font-bold text-neutral-900 dark:text-white">{title}</h3>
          <p data-aos="fade-up" className="text-xs text-neutral-500 dark:text-neutral-400">{subtitle}</p>
        </div>
      </div>
      <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((t, i) => (
          <div data-aos="fade-up">
            <TestimonialCard   key={i} t={t} accent={accent} role={role} />
          </div>
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
          <span data-aos="fade-up" className="inline-block text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-2">
            Testimonials
          </span>
          <h2 data-aos="fade-up" className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
            What Parents & Students Say
          </h2>
          <p data-aos="fade-up" className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
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
