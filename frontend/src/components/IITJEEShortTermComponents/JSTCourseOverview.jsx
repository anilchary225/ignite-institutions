import { useState } from "react";
import { Atom, FlaskConical, BookOpen, CheckCircle2 } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation Sprint",
    duration: "Months 1–3",
    color: "amber",
    desc: "Rapid but thorough recap of all Class 11 concepts. Focus on identifying and eliminating conceptual gaps before advancing.",
    points: ["Full Class 11 syllabus revisited in condensed modules", "Topic-wise diagnostic tests after each chapter", "Doubt clearing twice weekly"],
  },
  {
    phase: "Phase 2",
    title: "Advanced Problem Solving",
    duration: "Months 4–7",
    color: "orange",
    desc: "Deep dive into Class 12 syllabus and high-weightage JEE chapters. Problem-solving speed and pattern recognition.",
    points: ["Class 12 full coverage with JEE-level problem banks", "Previous year paper analysis — 10 years of JEE", "Speed drills: 100 problems in 60 minutes"],
  },
  {
    phase: "Phase 3",
    title: "Full-Syllabus Mock Mode",
    duration: "Months 8–10",
    color: "red",
    desc: "Complete JEE simulation. One full mock test every day. Deep review after every paper with personalised feedback.",
    points: ["Daily full-length mock tests (3-hour papers)", "Post-test analysis and rank projection", "Weak-area revision plans updated weekly"],
  },
  {
    phase: "Phase 4",
    title: "Final 60-Day Blitz",
    duration: "Months 11–12",
    color: "rose",
    desc: "High-velocity last stretch — formula revision, quickfire problem sets, and complete mental conditioning for exam day.",
    points: ["Rapid-fire formula and concept revision cards", "10 full mocks in final 2 weeks", "Exam-day strategy and mental conditioning"],
  },
];

const colorMap = {
  amber:  { dot: "bg-amber-500",  line: "bg-amber-200 dark:bg-amber-900", pill: "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400", border: "border-amber-200 dark:border-amber-900", bg: "bg-amber-50 dark:bg-amber-950/10" },
  orange: { dot: "bg-orange-500", line: "bg-orange-200 dark:bg-orange-900",pill: "bg-orange-100 text-orange-700 dark:bg-orange-950/40 dark:text-orange-400",border: "border-orange-200 dark:border-orange-900",bg: "bg-orange-50 dark:bg-orange-950/10" },
  red:    { dot: "bg-red-500",    line: "bg-red-200 dark:bg-red-900",     pill: "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400",           border: "border-red-200 dark:border-red-900",   bg: "bg-red-50 dark:bg-red-950/10" },
  rose:   { dot: "bg-rose-500",   line: "bg-rose-200 dark:bg-rose-900",   pill: "bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400",         border: "border-rose-200 dark:border-rose-900", bg: "bg-rose-50 dark:bg-rose-950/10" },
};

const subjects = [
  { icon: Atom,         label: "Physics",     desc: "Mechanics, Waves, Optics, Electrostatics, Modern Physics — JEE-first approach" },
  { icon: FlaskConical, label: "Chemistry",   desc: "Organic reactions, Physical chem numericals, Inorganic NCERT mastery" },
  { icon: BookOpen,     label: "Mathematics", desc: "Calculus, Vectors, Coordinate Geometry, Permutations — exam-tempo practice" },
];

export default function JSTCourseOverview() {
  const [active, setActive] = useState(0);
  const ph = phases[active];
  const c = colorMap[ph.color];

  return (
    <section id="course" className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl">

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-700 dark:bg-amber-950/40 dark:text-amber-400">
            Course Overview
          </span>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="mx-auto mt-6 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            A Year Engineered for One Outcome
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Every month of the Short-Term programme has a precise purpose. Four phases, zero filler.
          </p>
        </div>

        {/* subjects row */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {subjects.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex gap-4 rounded-2xl border border-amber-100 bg-white p-5 dark:border-amber-900/30 dark:bg-neutral-900">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-sm font-extrabold text-neutral-950 dark:text-white">{label}</p>
                <p className="mt-1 text-xs leading-5 text-neutral-500 dark:text-neutral-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* wide banner */}
        <div className="mt-8 overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-100">Programme Structure</p>
              <h3 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">12-Month Intensive · Class 12 & Droppers</h3>
              <p className="mt-2 text-sm text-amber-100 leading-6 max-w-lg">
                Structured in 4 laser-focused phases — from foundation sprint to full-mock blitz — with no wasted time.
                Built specifically for students who need results in one year.
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-1 rounded-2xl bg-white/20 px-7 py-5 text-center backdrop-blur-sm">
              <p className="text-3xl font-black text-white">12</p>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-100">Months</p>
              <p className="mt-1 text-xs text-amber-200">4 Phases · 3 Subjects</p>
            </div>
          </div>
        </div>

        {/* interactive timeline */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[220px_1fr]">
          {/* phase tabs */}
          <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:overflow-x-visible">
            {phases.map((p, i) => {
              const cc = colorMap[p.color];
              return (
                <button
                  key={p.phase}
                  onClick={() => setActive(i)}
                  className={`flex shrink-0 flex-col rounded-2xl border px-4 py-4 text-left transition lg:w-full ${
                    active === i
                      ? `${cc.bg} ${cc.border}`
                      : "border-transparent bg-white hover:bg-neutral-50 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                  }`}
                >
                  <span className={`text-xs font-black uppercase tracking-widest ${active === i ? `text-${p.color}-600 dark:text-${p.color}-400` : "text-neutral-400"}`}>{p.phase}</span>
                  <span className={`mt-0.5 text-sm font-extrabold ${active === i ? "text-neutral-950 dark:text-white" : "text-neutral-600 dark:text-neutral-400"}`}>{p.title}</span>
                  <span className="mt-0.5 text-xs text-neutral-400">{p.duration}</span>
                </button>
              );
            })}
          </div>

          {/* phase detail */}
          <div className={`rounded-3xl border p-8 ${c.bg} ${c.border}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className={`rounded-full px-3 py-1 text-xs font-black ${c.pill}`}>{ph.phase} · {ph.duration}</span>
                <h3 className="mt-3 text-2xl font-extrabold text-neutral-950 dark:text-white">{ph.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{ph.desc}</p>
              </div>
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl font-black text-white ${c.dot}`}>
                {active + 1}
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {ph.points.map(pt => (
                <li key={pt} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 size={16} className={`mt-0.5 shrink-0 text-${ph.color}-500`} />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
