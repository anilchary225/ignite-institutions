import { BookOpen, FlaskConical, Trophy, Users, Clock, Star } from "lucide-react";

const courses = [
  {
    id: "mpc",
    badge: "IIT JEE & Advanced",
    title: "MPC Stream",
    subtitle: "Mathematics · Physics · Chemistry",
    description:
      "Rigorous dual-preparation curriculum combining Intermediate board excellence with IIT JEE Main & Advanced coaching. Taught by IIT/NIT alumni faculty.",
    highlights: ["IIT JEE Main", "IIT JEE Advanced", "Board Excellence"],
    icon: FlaskConical,
    accent: "violet",
    details: [
      { icon: Clock, text: "2-Year Program (Class 11 & 12)" },
      { icon: Users, text: "Small batch sizes (≤ 30 students)" },
      { icon: Trophy, text: "Proven IIT selections every year" },
      { icon: Star, text: "Rank booster & doubt sessions" },
    ],
  },
  {
    id: "bipc",
    badge: "NEET",
    title: "BiPC Stream",
    subtitle: "Biology · Physics · Chemistry",
    description:
      "Integrated NEET preparation alongside Intermediate board. Deep conceptual focus on Biology, Physics & Chemistry with regular mock NTs.",
    highlights: ["NEET UG", "AIIMS", "Board Excellence"],
    icon: BookOpen,
    accent: "indigo",
    details: [
      { icon: Clock, text: "2-Year Program (Class 11 & 12)" },
      { icon: Users, text: "Small batch sizes (≤ 30 students)" },
      { icon: Trophy, text: "Top NEET ranks from Ignite" },
      { icon: Star, text: "Biology lab & NCERT mastery" },
    ],
  },
];

const accentMap = {
  violet: {
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300",
    iconBg: "bg-violet-600",
    border: "border-violet-100 dark:border-violet-900",
    highlight: "bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300",
    dot: "bg-violet-500",
  },
  indigo: {
    badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300",
    iconBg: "bg-indigo-600",
    border: "border-indigo-100 dark:border-indigo-900",
    highlight: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300",
    dot: "bg-indigo-500",
  },
};

function CourseCard({ course }) {
  const a = accentMap[course.accent];
  const Icon = course.icon;

  return (
    <div
      className={`relative flex flex-col rounded-3xl border bg-white p-8 shadow-sm transition hover:shadow-md dark:bg-neutral-900 dark:hover:shadow-neutral-800 ${a.border}`}
    >
      {/* top badge */}
      <span className={`self-start rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${a.badge}`}>
        {course.badge}
      </span>

      {/* icon + title */}
      <div className="mt-6 flex items-start gap-4">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${a.iconBg}`}>
          <Icon size={22} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-extrabold text-neutral-950 dark:text-white">
            {course.title}
          </h3>
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            {course.subtitle}
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
        {course.description}
      </p>

      {/* highlight pills */}
      <div className="mt-5 flex flex-wrap gap-2">
        {course.highlights.map((h) => (
          <span key={h} className={`rounded-full px-3 py-1 text-xs font-semibold ${a.highlight}`}>
            {h}
          </span>
        ))}
      </div>

      {/* detail rows */}
      <ul className="mt-6 space-y-2.5 border-t pt-6 dark:border-neutral-800">
        {course.details.map(({ icon: DIcon, text }) => (
          <li key={text} className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
            <DIcon size={15} className="shrink-0 text-neutral-400 dark:text-neutral-500" />
            {text}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#"
        className={`mt-8 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold text-white transition ${course.accent === "violet" ? "bg-violet-600 hover:bg-violet-700" : "bg-indigo-600 hover:bg-indigo-700"}`}
      >
        Enquire about {course.title}
      </a>
    </div>
  );
}

export default function InterStream() {
  return (
    <section id="inter" className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-5xl">
        {/* section header */}
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
          <span className="rounded-full bg-violet-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-violet-700 dark:bg-violet-950/50 dark:text-violet-300">
            Junior College — Inter
          </span>
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            Intermediate + IIT JEE / NEET
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Classes 11 & 12 with fully integrated entrance exam coaching. Board
            marks and rank — both, together.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
