import { useState } from "react";
import { Leaf, FlaskConical, Atom, CheckCircle2 } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    title: "NCERT Deep Dive",
    duration: "Months 1–3",
    color: "green",
    desc: "Rapid but thorough coverage of all Class 11 Biology, Chemistry & Physics. Every NCERT line treated as exam material - nothing skipped.",
    points: [
      "Complete Class 11 syllabus in condensed, focused modules",
      "NCERT line-by-line Biology annotation sessions",
      "Chapter diagnostic tests after every topic",
    ],
  },
  {
    phase: "Phase 2",
    title: "NEET-Level Problem Solving",
    duration: "Months 4–7",
    color: "green",
    desc: "Class 12 syllabus with NEET difficulty. High-weightage chapters get extra time. Previous paper analysis becomes a weekly ritual.",
    points: [
      "Class 12 full syllabus with NEET-level question banks",
      "15 years of NEET paper analysis by chapter and frequency",
      "Assertion–Reason & diagram-based question mastery",
    ],
  },
  {
    phase: "Phase 3",
    title: "Full-Syllabus Mock Mode",
    duration: "Months 8–10",
    color: "emerald",
    desc: "One full 720-mark NEET mock every day. Detailed post-paper analysis. Rank projections updated weekly. No wasted days.",
    points: [
      "Daily full-length NEET mocks (180 questions · 200 minutes)",
      "Post-test analysis and percentile tracking",
      "Weak chapter revision sprints between mocks",
    ],
  },
  {
    phase: "Phase 4",
    title: "Final 60-Day Revision Blitz",
    duration: "Months 11–12",
    color: "green",
    desc: "High-speed final revision - Biology flowcharts, Chemistry reaction maps, Physics formula drills, and full exam conditioning.",
    points: [
      "Biology quick-recall cards: all diagrams and cycles",
      "10 full mocks in the final 2 weeks with review",
      "NEET exam-day strategy and time-management coaching",
    ],
  },
];

const colorMap = {
  green:    { dot: "bg-green-500",    pill: "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400",       border: "border-green-200 dark:border-green-900",     bg: "bg-green-50 dark:bg-green-950/10"    },
  green:    { dot: "bg-green-500",    pill: "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400",       border: "border-green-200 dark:border-green-900",     bg: "bg-green-50 dark:bg-green-950/10"    },
  emerald: { dot: "bg-emerald-500", pill: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400", border: "border-emerald-200 dark:border-emerald-900", bg: "bg-emerald-50 dark:bg-emerald-950/10" },
  green:   { dot: "bg-green-600",   pill: "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400",   border: "border-green-200 dark:border-green-900",   bg: "bg-green-50 dark:bg-green-950/10"  },
};

const subjects = [
  { icon: Leaf,         label: "Biology",   desc: "Botany + Zoology - NCERT mastery then NEET assertion, diagram & MCQ drills" },
  { icon: FlaskConical, label: "Chemistry", desc: "Physical numericals, Organic reactions, Inorganic NCERT - all three treated equally" },
  { icon: Atom,         label: "Physics",   desc: "Mechanics to Modern Physics - concept clarity with NEET-tempo speed practice" },
];

export default function NSTCourseOverview() {
  const [active, setActive] = useState(0);
  const ph = phases[active];
  const c = colorMap[ph.color];

  return (
    <section id="course" className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl">

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <span className="rounded-full bg-green-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-700 dark:bg-green-950/40 dark:text-green-400">
            Course Overview
          </span>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="mx-auto mt-6 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            A Year Built Around One Exam
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Every month serves a specific purpose. Four precision phases - zero wasted time.
          </p>
        </div>

        {/* subjects */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {subjects.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex gap-4 rounded-2xl border border-green-100 bg-white p-5 dark:border-green-900/30 dark:bg-neutral-900">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600 dark:bg-green-950/40 dark:text-green-400">
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
        <div className="mt-8 overflow-hidden rounded-3xl bg-linear-to-r from-green-600 via-green-500 to-green-600 p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-100">Programme Structure</p>
              <h3 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">12-Month Intensive · Class 12 & Droppers</h3>
              <p className="mt-2 text-sm text-green-100 leading-6 max-w-lg">
                Four laser-focused phases from NCERT deep dive to daily full-mock blitz - built
                for students who need AIIMS-level results in a single year.
              </p>
            </div>
            <div className="flex shrink-0 flex-col items-center gap-1 rounded-2xl bg-white/20 px-7 py-5 text-center backdrop-blur-sm">
              <p className="text-3xl font-black text-white">720</p>
              <p className="text-xs font-bold uppercase tracking-widest text-green-100">Marks</p>
              <p className="mt-1 text-xs text-green-200">4 Phases · 3 Subjects</p>
            </div>
          </div>
        </div>

        {/* interactive timeline */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[220px_1fr]">
          <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:overflow-x-visible">
            {phases.map((p, i) => {
              const cc = colorMap[p.color];
              const isActive = active === i;
              return (
                <button
                  key={p.phase}
                  onClick={() => setActive(i)}
                  className={`flex shrink-0 flex-col rounded-2xl border px-4 py-4 text-left transition lg:w-full
                    ${isActive ? `${cc.bg} ${cc.border}` : "border-transparent bg-white hover:bg-neutral-50 dark:bg-neutral-900 dark:hover:bg-neutral-800"}`}
                >
                  <span className={`text-xs font-black uppercase tracking-widest ${isActive ? cc.dot.replace("bg-", "text-") : "text-neutral-400"}`}>
                    {p.phase}
                  </span>
                  <span className={`mt-0.5 text-sm font-extrabold ${isActive ? "text-neutral-950 dark:text-white" : "text-neutral-600 dark:text-neutral-400"}`}>
                    {p.title}
                  </span>
                  <span className="mt-0.5 text-xs text-neutral-400">{p.duration}</span>
                </button>
              );
            })}
          </div>

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
                  <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${c.dot.replace("bg-", "text-")}`} />
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
