import { BookOpen, FlaskConical, Atom, Brain, Target, BarChart3, Layers, Clock4 } from "lucide-react";

const subjects = [
  { icon: Atom,         label: "Physics",     desc: "Mechanics to Modern Physics — every concept exam-ready", color: "violet" },
  { icon: FlaskConical, label: "Chemistry",   desc: "Physical, Organic & Inorganic treated equally deeply",  color: "indigo" },
  { icon: BookOpen,     label: "Mathematics", desc: "Calculus, Algebra, Coordinate & beyond",                color: "sky"    },
];

const highlights = [
  { icon: Brain,    title: "Concept-First Teaching",      desc: "Every topic built from fundamentals before problem-solving begins." },
  { icon: Target,   title: "JEE Pattern Problem Banks",   desc: "10,000+ curated problems graded by difficulty and JEE frequency." },
  { icon: BarChart3,title: "Progress Analytics",          desc: "Monthly report cards tracking chapter-wise performance trends." },
  { icon: Layers,   title: "Board + JEE Dual Mastery",    desc: "Syllabus synced so students never sacrifice one for the other." },
  { icon: Clock4,   title: "Scheduled Revision Cycles",   desc: "Structured revision built into the annual calendar — not an afterthought." },
  { icon: Atom,     title: "IIT/NIT Alumni Mentors",      desc: "Every faculty member is a product of the very exam they teach." },
];

const colorMap = {
  violet: { bg: "bg-violet-50 dark:bg-violet-950/20", icon: "bg-violet-100 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400", border: "border-violet-200 dark:border-violet-800" },
  indigo: { bg: "bg-indigo-50 dark:bg-indigo-950/20", icon: "bg-indigo-100 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400", border: "border-indigo-200 dark:border-indigo-800" },
  sky:    { bg: "bg-sky-50 dark:bg-sky-950/20",       icon: "bg-sky-100 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400",             border: "border-sky-200 dark:border-sky-800" },
};

export default function JLTCourseOverview() {
  return (
    <section id="course" className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl">

        {/* section label */}
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <span className="rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400">
            Course Overview
          </span>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="mx-auto mt-6 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            What the Programme Delivers
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            A rigorous, structured 2-year curriculum covering three core subjects — balanced
            for board excellence and JEE mastery simultaneously.
          </p>
        </div>

        {/* 3 subject cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {subjects.map(({ icon: Icon, label, desc, color }) => {
            const c = colorMap[color];
            return (
              <div key={label} className={`rounded-3xl border p-7 ${c.bg} ${c.border}`}>
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${c.icon}`}>
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-neutral-950 dark:text-white">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{desc}</p>
              </div>
            );
          })}
        </div>

        {/* horizontal programme banner */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-700 p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-200">Programme Structure</p>
              <h3 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
                2-Year Integrated Track · Class 11 & 12
              </h3>
              <p className="mt-2 text-sm text-indigo-200 leading-6 max-w-lg">
                Year 1 builds conceptual foundations across all three subjects while completing Class 11 board
                syllabus. Year 2 intensifies with advanced problem-solving, full syllabus revision, and weekly
                full-length mock JEE tests.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3">
              {[
                ["Year 1",  "Foundation + Class 11 Boards"],
                ["Year 2",  "Advanced + Class 12 + Full Mocks"],
              ].map(([yr, label]) => (
                <div key={yr} className="flex items-center gap-3 rounded-xl bg-white/15 px-5 py-3 backdrop-blur-sm">
                  <span className="rounded-lg bg-white/20 px-3 py-1 text-sm font-black text-white">{yr}</span>
                  <span className="text-sm font-semibold text-white/90">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6 highlight cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4 rounded-2xl bg-neutral-50 p-5 dark:bg-neutral-900">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400">
                <Icon size={18} />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-neutral-950 dark:text-white">{title}</h4>
                <p className="mt-1 text-xs leading-5 text-neutral-500 dark:text-neutral-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
