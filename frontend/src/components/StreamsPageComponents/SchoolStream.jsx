import { GraduationCap, BookMarked, Atom, Microscope, Star, Users } from "lucide-react";

const programs = [
  {
    id: "nursery10",
    eyebrow: "Nursery to Class 10",
    title: "School Education",
    description:
      "A strong academic foundation from early childhood through secondary school. Emphasis on conceptual clarity, strong language skills, and character building across all classes.",
    icon: GraduationCap,
    color: "sky",
    grades: [
      { range: "Nursery – KG", note: "Play-based, early learning" },
      { range: "Class 1 – 5", note: "Core subjects & language" },
      { range: "Class 6 – 8", note: "Science, Maths, Social" },
      { range: "Class 9 – 10", note: "Board preparation" },
    ],
  },
  {
    id: "foundation",
    eyebrow: "Classes 6 – 10",
    title: "IIT & NEET Foundation",
    description:
      "Early-start competitive exam preparation woven into the regular school curriculum. Students develop problem-solving habits well before appearing for JEE or NEET.",
    icon: Atom,
    color: "amber",
    grades: [
      { range: "Class 6 – 8", note: "Foundation level — Maths & Science" },
      { range: "Class 9 – 10", note: "Pre-Foundation IIT / NEET" },
    ],
    features: ["IIT JEE Foundation", "NEET Foundation", "Olympiad Prep", "NTSE / KVPY"],
  },
];

const colorMap = {
  sky: {
    section: "bg-sky-50 dark:bg-sky-950/20",
    badge: "bg-sky-100 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300",
    iconBg: "bg-sky-500",
    gradeBorder: "border-sky-100 dark:border-sky-900",
    gradeLabel: "text-sky-700 dark:text-sky-400",
    cta: "bg-sky-600 hover:bg-sky-700",
  },
  amber: {
    section: "bg-amber-50 dark:bg-amber-950/20",
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
    iconBg: "bg-amber-500",
    gradeBorder: "border-amber-100 dark:border-amber-900",
    gradeLabel: "text-amber-700 dark:text-amber-400",
    cta: "bg-amber-500 hover:bg-amber-600",
  },
};

function GradeRow({ range, note, color }) {
  const c = colorMap[color];
  return (
    <div className={`flex items-center justify-between rounded-xl border px-4 py-3 ${c.gradeBorder} bg-white dark:bg-neutral-900`}>
      <span className={`text-sm font-bold ${c.gradeLabel}`}>{range}</span>
      <span className="text-xs text-neutral-500 dark:text-neutral-500">{note}</span>
    </div>
  );
}

function ProgramCard({ program }) {
  const c = colorMap[program.color];
  const Icon = program.icon;

  return (
    <div className={`rounded-3xl p-8 ${c.section}`}>
      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${c.badge}`}>
        {program.eyebrow}
      </span>

      <div className="mt-6 flex items-center gap-4">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${c.iconBg}`}>
          <Icon size={22} className="text-white" />
        </div>
        <h3 className="text-xl font-extrabold text-neutral-950 dark:text-white">
          {program.title}
        </h3>
      </div>

      <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
        {program.description}
      </p>

      {/* grades */}
      <div className="mt-6 space-y-2">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
          Classes covered
        </p>
        {program.grades.map((g) => (
          <GradeRow key={g.range} {...g} color={program.color} />
        ))}
      </div>

      {/* feature pills for foundation */}
      {program.features && (
        <div className="mt-5 flex flex-wrap gap-2">
          {program.features.map((f) => (
            <span
              key={f}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${c.badge}`}
            >
              {f}
            </span>
          ))}
        </div>
      )}

      <a
        href="#"
        className={`mt-8 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold text-white transition ${c.cta}`}
      >
        Enquire Now
      </a>
    </div>
  );
}

export default function SchoolStream() {
  return (
    <section id="school" className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-7xl">
        {/* section header */}
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <span className="rounded-full bg-sky-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-sky-700 dark:bg-sky-950/50 dark:text-sky-300">
            School Programs
          </span>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            School — Nursery to Class 10
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Build the right habits early. Our school programs give students a
            competitive edge from day one — with a foundation track that grooms
            future IIT & NEET aspirants from Class 6 itself.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {programs.map((p) => (
            <ProgramCard key={p.id} program={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
