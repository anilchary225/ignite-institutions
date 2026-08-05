import { ArrowRight, BookOpen, FlaskConical, Atom } from "lucide-react";

export default function MPCHero() {
  return (
    <section className="overflow-hidden bg-white px-6 pt-16 pb-0 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT — content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 dark:bg-violet-950/40">
              <Atom size={14} className="text-violet-600 dark:text-violet-400" />
              <span className="text-xs font-black uppercase tracking-widest text-violet-700 dark:text-violet-400">
                MPC · IIT JEE Coaching
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-neutral-950 sm:text-5xl dark:text-white">
              Crack IIT JEE.{" "}
              <span className="text-violet-600 dark:text-violet-400">Excel in Boards.</span>{" "}
              Do both.
            </h1>

            <p className="mt-5 text-base leading-7 text-neutral-600 dark:text-neutral-400">
              Ignite's MPC programme is Hyderabad's most trusted integrated coaching
              track — Maths, Physics & Chemistry taught for both Intermediate
              board excellence and IIT JEE Main & Advanced, under one roof.
            </p>

            {/* subject pills */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { icon: Atom, label: "Mathematics" },
                { icon: FlaskConical, label: "Physics" },
                { icon: BookOpen, label: "Chemistry" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700 dark:border-violet-800 dark:bg-violet-950/30 dark:text-violet-300"
                >
                  <Icon size={14} /> {label}
                </div>
              ))}
            </div>

            {/* key facts */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { value: "2 Years", label: "Integrated Programme" },
                { value: "Class 11–12", label: "Intermediate + JEE" },
                { value: "≤ 30", label: "Students per batch" },
              ].map(({ value, label }) => (
                <div key={label} className="rounded-2xl bg-neutral-50 px-4 py-4 dark:bg-neutral-900">
                  <p className="text-xl font-black text-violet-700 dark:text-violet-400">{value}</p>
                  <p className="mt-0.5 text-xs font-semibold text-neutral-500">{label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-black text-white transition hover:bg-violet-700"
              >
                Apply Now <ArrowRight size={16} />
              </a>
              <a
                href="#program"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-3.5 text-sm font-bold text-neutral-700 transition hover:border-violet-300 hover:text-violet-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
              >
                View Programme Details
              </a>
            </div>
          </div>

          {/* RIGHT — image with apply CTA */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://placehold.co/640x520/7c3aed/ffffff?text=MPC+IIT+Classroom"
                alt="MPC IIT Classroom at Ignite"
                className="h-full w-full object-cover"
              />
              {/* overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-violet-900/70 via-transparent to-transparent" />

              {/* bottom apply card */}
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/90 p-5 backdrop-blur-sm dark:bg-neutral-900/90">
                <p className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                  Admissions Open · 2025–26
                </p>
                <p className="mt-1 text-lg font-extrabold text-neutral-950 dark:text-white">
                  MPC — IIT JEE Integrated Batch
                </p>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                  Limited seats. Hostel facility available.
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 text-sm font-black text-white transition hover:bg-violet-700"
                >
                  Apply for Admission <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* floating badge */}
            <div className="absolute -right-4 -top-4 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-amber-400 shadow-lg">
              <p className="text-lg font-black text-white leading-none">500+</p>
              <p className="text-[9px] font-bold text-white/90 text-center leading-tight">IIT Selections</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
