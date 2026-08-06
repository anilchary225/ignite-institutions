import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const highlights = [
  "Admissions open for MPC and BiPC programs.",
  "Experienced faculty with proven results in IIT-JEE, NEET & EAPCET.",
  "Modern classrooms, labs, and student-friendly campus.",
  "Focus on academics, personal growth, and career success.",
];

const tags = [
  { label: "IIT-JEE", color: "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400" },
  { label: "NEET", color: "bg-green-100 text-green-700 dark:bg-green-700/10 dark:text-green-400" },
  { label: "EAPCET", color: "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400" },
  { label: "Foundation", color: "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400" },
];

export default function HomeApply() {
  return (
    <section className="bg-orange-50 dark:bg-neutral-900 px-4 py-14 sm:px-8 sm:py-16 transition-colors">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">

        {/* Text content */}
        <div>
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-3">
            Admissions 2026–28
          </span>
          <h2 className="text-2xl font-extrabold leading-tight text-neutral-900 dark:text-white sm:text-3xl">
            Apply for Admission
          </h2>
          <p className="mt-1 text-base font-medium text-neutral-500 dark:text-neutral-400">
            For the current academic year
          </p>

          <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
            We give our students not only the education but also the experiences
            that set them up for lifelong success in their career.
          </p>

          <ul className="mt-5 space-y-3">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 size={17} className="shrink-0 mt-0.5 text-orange-500" />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t.label} className={`px-3 py-1 rounded-full text-xs font-bold ${t.color}`}>
                {t.label}
              </span>
            ))}
          </div>

          <button className="mt-7 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-xl text-sm shadow-sm shadow-orange-500/30 transition-colors">
            Apply Now
            <ArrowRight size={15} />
          </button>
        </div>

        {/* Image — hidden on mobile to avoid layout break */}
        <div className="hidden md:block overflow-hidden rounded-2xl shadow-md border-4 border-orange-200 dark:border-orange-500/20">
          <img
            src="https://placehold.co/600x450/fff7ed/ea580c?text=College+Photo"
            alt="Ignite Junior College"
            className="w-full h-72 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
