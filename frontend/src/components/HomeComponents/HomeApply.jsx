import React from "react";

/**
 * HomeApply — admissions section for Ignite Junior College.
 * Simple two-column layout: content on the left, image on the right (placeholder).
 */
export default function HomeApply() {
  const highlights = [
    "Admissions open for MPC and BiPC programs.",
    "Experienced faculty with proven results in IIT-JEE, NEET & EAPCET.",
    "Modern classrooms, labs, and student-friendly campus.",
    "Focus on academics, personal growth, and career success.",
  ];

  return (
    <section className="bg-white px-6 py-20 transition-colors dark:bg-neutral-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

        {/* Text content */}
        <div>
          <span className="inline-block text-xs font-bold tracking-[0.2em] text-orange-500 uppercase mb-3">
            Admissions 2026-28
          </span>
          <h2 className="text-4xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-5xl">
            Apply for Admission
          </h2>
          <p className="mt-2 text-lg font-semibold text-slate-500 dark:text-slate-300">
            For the current academic year..
          </p>

          <p className="mt-5 leading-relaxed text-slate-600 dark:text-slate-300">
            We give our students not only the education but also the experiences
            that set them up for success in their career.
          </p>

          <ul className="mt-6 space-y-3">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-white text-xs mt-0.5 shrink-0">
                  ✓
                </span>
                <span className="text-slate-700 dark:text-slate-300">{item}</span>
              </li>
            ))}
          </ul>

          <button className="mt-8 border-2 border-orange-500 text-orange-600 font-semibold px-8 py-3 rounded-md hover:bg-orange-500 hover:text-white transition-colors">
            Apply Now
          </button>
        </div>

        {/* Placeholder image */}
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src="https://placehold.co/600x450/e2e8f0/64748b?text=College+Photo"
            alt="Ignite Junior College"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
