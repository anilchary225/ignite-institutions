import { Users, BookOpen, FileText, ClipboardList, Sparkles } from "lucide-react";

const points = [
  {
    icon: Users,
    color: "violet",
    title: "Expert Faculty & Personalized Mentorship",
    desc: "Learn from seasoned educators who bring clarity and encouragement to every classroom. With small group sizes, each student benefits from individualized guidance and support.",
  },
  {
    icon: BookOpen,
    color: "indigo",
    title: "Integrated Curriculum for Boards & JEE",
    desc: "As one of the best intermediate colleges in Hyderabad for MPC, we've structured our syllabus to cover both board requirements and JEE exam patterns seamlessly — saving time and stress while maximising performance.",
  },
  {
    icon: FileText,
    color: "sky",
    title: "Strategically Designed Study Material",
    desc: "Our study resources are customised to meet the needs of MPC students targeting IIT coaching — focused, insightful, and exam-aligned.",
  },
  {
    icon: ClipboardList,
    color: "emerald",
    title: "Regular Assessments & Mock Tests",
    desc: "Frequent evaluations help you track progress, build exam confidence, and fine-tune your preparation strategy for both JEE Mains & Advanced.",
  },
  {
    icon: Sparkles,
    color: "rose",
    title: "Holistic Development & Campus Life",
    desc: "Beyond academics, Ignite nurtures leadership, communication, and self-confidence — making us one of the best junior colleges in Hyderabad for MPC IIT preparation. Our state-of-the-art campus supports a balanced, enriching learning experience.",
  },
];

const colorMap = {
  violet:  { iconBg: "bg-violet-100 dark:bg-violet-950/40", icon: "text-violet-600 dark:text-violet-400", num: "text-violet-200 dark:text-violet-900", border: "border-violet-100 dark:border-violet-900/40" },
  indigo:  { iconBg: "bg-indigo-100 dark:bg-indigo-950/40", icon: "text-indigo-600 dark:text-indigo-400", num: "text-indigo-200 dark:text-indigo-900", border: "border-indigo-100 dark:border-indigo-900/40" },
  sky:     { iconBg: "bg-sky-100 dark:bg-sky-950/40",       icon: "text-sky-600 dark:text-sky-400",       num: "text-sky-200 dark:text-sky-900",       border: "border-sky-100 dark:border-sky-900/40" },
  emerald: { iconBg: "bg-emerald-100 dark:bg-emerald-950/40",icon:"text-emerald-600 dark:text-emerald-400",num:"text-emerald-200 dark:text-emerald-900",border:"border-emerald-100 dark:border-emerald-900/40"},
  rose:    { iconBg: "bg-rose-100 dark:bg-rose-950/40",     icon: "text-rose-600 dark:text-rose-400",     num: "text-rose-200 dark:text-rose-900",     border: "border-rose-100 dark:border-rose-900/40" },
};

export default function MPCStandOut() {
  return (
    <section id="standout" className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
          <span className="rounded-full bg-violet-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-violet-700 dark:bg-violet-950/50 dark:text-violet-300">
            Why We're Different
          </span>
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            What Makes Our Program <span className="text-violet-600 dark:text-violet-400">Stand Out</span>
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Five pillars that set Ignite MPC apart from every other coaching programme in Hyderabad.
          </p>
        </div>

        {/* first two — wide cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {points.slice(0, 2).map((p, i) => {
            const c = colorMap[p.color];
            const Icon = p.icon;
            return (
              <div key={p.title} className={`relative overflow-hidden rounded-3xl border bg-white p-8 shadow-sm dark:bg-neutral-900 ${c.border}`}>
                <span className={`absolute right-6 top-4 text-8xl font-black leading-none select-none ${c.num}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className={`relative flex h-12 w-12 items-center justify-center rounded-2xl ${c.iconBg}`}>
                  <Icon size={22} className={c.icon} />
                </div>
                <h3 className="relative mt-5 text-xl font-extrabold text-neutral-950 dark:text-white">{p.title}</h3>
                <p className="relative mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-400">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* last three — 3-col */}
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {points.slice(2).map((p, i) => {
            const c = colorMap[p.color];
            const Icon = p.icon;
            return (
              <div key={p.title} className={`relative overflow-hidden rounded-3xl border bg-white p-7 shadow-sm dark:bg-neutral-900 ${c.border}`}>
                <span className={`absolute right-5 top-3 text-7xl font-black leading-none select-none ${c.num}`}>
                  {String(i + 3).padStart(2, "0")}
                </span>
                <div className={`relative flex h-11 w-11 items-center justify-center rounded-2xl ${c.iconBg}`}>
                  <Icon size={20} className={c.icon} />
                </div>
                <h3 className="relative mt-4 text-base font-extrabold text-neutral-950 dark:text-white">{p.title}</h3>
                <p className="relative mt-2 text-sm leading-7 text-neutral-600 dark:text-neutral-400">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
