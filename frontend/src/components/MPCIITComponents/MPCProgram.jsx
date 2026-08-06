import { CheckCircle2 } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    label: "Foundation Building",
    classes: "Class 11 — Term 1",
    color: "violet",
    items: [
      "Core concept classes in Maths, Physics, Chemistry",
      "NCERT + JEE Level 1 problems daily",
      "Weekly chapter tests",
      "Introduction to JEE pattern",
      "Board syllabus coverage in parallel",
    ],
  },
  {
    phase: "Phase 2",
    label: "Concept Mastery",
    classes: "Class 11 — Term 2",
    color: "indigo",
    items: [
      "Advance problem solving sessions",
      "JEE Level 2 & 3 problem sets",
      "Bi-weekly full-chapter mock tests",
      "Doubt clearing workshops",
      "Class 11 board exam preparation",
    ],
  },
  {
    phase: "Phase 3",
    label: "Integration & Speed",
    classes: "Class 12 — Term 1",
    color: "sky",
    items: [
      "Full Class 12 syllabus coverage",
      "JEE Main pattern full-length mocks monthly",
      "Speed & accuracy drills",
      "Rank analysis and personalised study plans",
      "Board + JEE time management strategy",
    ],
  },
  {
    phase: "Phase 4",
    label: "Rank Maximisation",
    classes: "Class 12 — Final Push",
    color: "rose",
    items: [
      "JEE Advanced level problem practice",
      "All-India mock test series",
      "Rank predictor & college counselling",
      "Board exam revision intensive",
      "1-on-1 mentor review sessions",
    ],
  },
];

const colorMap = {
  violet: { phase: "bg-violet-600 text-white", dot: "bg-violet-600", line: "bg-violet-200 dark:bg-violet-900", check: "text-violet-500", border: "border-violet-100 dark:border-violet-900/40" },
  indigo: { phase: "bg-indigo-600 text-white", dot: "bg-indigo-600", line: "bg-indigo-200 dark:bg-indigo-900", check: "text-indigo-500", border: "border-indigo-100 dark:border-indigo-900/40" },
  sky:    { phase: "bg-sky-500 text-white",    dot: "bg-sky-500",    line: "bg-sky-200 dark:bg-sky-900",       check: "text-sky-500",    border: "border-sky-100 dark:border-sky-900/40" },
  rose:   { phase: "bg-rose-600 text-white",   dot: "bg-rose-600",   line: "bg-rose-200 dark:bg-rose-900",     check: "text-rose-500",   border: "border-rose-100 dark:border-rose-900/40" },
};

export default function MPCProgram() {
  return (
    <section id="program" className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
          <span className="rounded-full bg-violet-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-violet-700 dark:bg-violet-950/50 dark:text-violet-300">
            Programme Structure
          </span>
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            Your 2-year roadmap to <span className="text-violet-600 dark:text-violet-400">IIT</span>
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            A phased, structured programme that builds concept, speed, and confidence quarter by quarter.
          </p>
        </div>

        {/* timeline grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((ph) => {
            const c = colorMap[ph.color];
            return (
              <div key={ph.phase} className={`relative flex flex-col rounded-3xl border bg-white p-7 shadow-sm dark:bg-neutral-900 ${c.border}`}>
                {/* phase badge */}
                <span className={`self-start rounded-full px-3 py-1 text-xs font-black uppercase tracking-wide ${c.phase}`}>
                  {ph.phase}
                </span>
                <h3 className="mt-4 text-base font-extrabold text-neutral-950 dark:text-white">{ph.label}</h3>
                <p className="mt-0.5 text-xs font-semibold text-neutral-400">{ph.classes}</p>

                <ul className="mt-5 space-y-2.5">
                  {ph.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <CheckCircle2 size={14} className={`mt-0.5 shrink-0 ${c.check}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* programme overview strip */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 rounded-3xl overflow-hidden">
          {[
            { label: "Daily Classes", value: "6 hrs" },
            { label: "Mock Tests / Month", value: "4+" },
            { label: "Doubt Sessions / Week", value: "Daily" },
            { label: "DPPs per Chapter", value: "50+" },
          ].map(({ label, value }) => (
            <div key={label} className="bg-violet-600 px-6 py-5 text-center">
              <p className="text-2xl font-black text-white">{value}</p>
              <p className="mt-0.5 text-xs font-semibold text-violet-200">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
