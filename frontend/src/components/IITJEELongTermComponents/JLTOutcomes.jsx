import { TrendingUp, Medal, BookMarked, UserCheck, School, Laptop, Globe, Star } from "lucide-react";

const outcomes = [
  {
    icon: Medal,
    title: "Top All-India Ranks",
    desc: "Our students consistently appear in IIT JEE Advanced Top 500 AIR — year after year.",
    stat: "AIR 23",
    statLabel: "Best rank 2024",
    color: "amber",
  },
  {
    icon: School,
    title: "Seats at IITs & NITs",
    desc: "600+ students from Ignite have earned seats at IIT Bombay, Delhi, Madras, Kharagpur, and top NITs.",
    stat: "600+",
    statLabel: "Total selections",
    color: "indigo",
  },
  {
    icon: BookMarked,
    title: "Board Excellence",
    desc: "93% of our students score above 90% in Intermediate boards — JEE prep doesn't come at the cost of boards.",
    stat: "93%",
    statLabel: "Score 90%+ in boards",
    color: "violet",
  },
  {
    icon: UserCheck,
    title: "Personalised Mentorship",
    desc: "Every student gets a dedicated academic mentor who tracks progress and adapts the plan throughout 2 years.",
    stat: "1 : 8",
    statLabel: "Mentor-to-student ratio",
    color: "sky",
  },
  {
    icon: TrendingUp,
    title: "Measurable Growth",
    desc: "Monthly assessments show average score growth of 35% between the first and final year mock tests.",
    stat: "35%",
    statLabel: "Avg. score growth",
    color: "emerald",
  },
  {
    icon: Laptop,
    title: "Digital Learning Support",
    desc: "Access to recorded lectures, doubt portals, and JEE problem banks — available 24/7.",
    stat: "24/7",
    statLabel: "Digital access",
    color: "rose",
  },
  {
    icon: Globe,
    title: "College Counselling",
    desc: "After results, our experts guide every student through JoSAA counselling — branch selection, cutoffs, and decisions.",
    stat: "Free",
    statLabel: "Counselling included",
    color: "violet",
  },
  {
    icon: Star,
    title: "Scholarship Opportunities",
    desc: "Merit-based fee waivers available for qualifying students — talent should never be stopped by finances.",
    stat: "Up to 50%",
    statLabel: "Fee waiver available",
    color: "amber",
  },
];

const colorMap = {
  amber:   { bg: "bg-amber-50 dark:bg-amber-950/20",   icon: "bg-amber-100 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400",   stat: "text-amber-600 dark:text-amber-400",   border: "border-amber-200 dark:border-amber-900" },
  indigo:  { bg: "bg-indigo-50 dark:bg-indigo-950/20", icon: "bg-indigo-100 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400", stat: "text-indigo-600 dark:text-indigo-400", border: "border-indigo-200 dark:border-indigo-900" },
  violet:  { bg: "bg-violet-50 dark:bg-violet-950/20", icon: "bg-violet-100 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400", stat: "text-violet-600 dark:text-violet-400", border: "border-violet-200 dark:border-violet-900" },
  sky:     { bg: "bg-sky-50 dark:bg-sky-950/20",       icon: "bg-sky-100 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400",             stat: "text-sky-600 dark:text-sky-400",       border: "border-sky-200 dark:border-sky-900" },
  emerald: { bg: "bg-emerald-50 dark:bg-emerald-950/20",icon:"bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400",stat:"text-emerald-600 dark:text-emerald-400",border:"border-emerald-200 dark:border-emerald-900"},
  rose:    { bg: "bg-rose-50 dark:bg-rose-950/20",     icon: "bg-rose-100 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400",         stat: "text-rose-600 dark:text-rose-400",     border: "border-rose-200 dark:border-rose-900" },
};

export default function JLTOutcomes() {
  return (
    <section className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl">

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <span className="rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400">
            Outcomes & Benefits
          </span>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="mx-auto mt-6 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            What You Walk Away With
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            The IIT JEE Long-Term programme isn't just about a rank — it shapes how you
            think, study, and perform under pressure for the rest of your life.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map(({ icon: Icon, title, desc, stat, statLabel, color }) => {
            const c = colorMap[color];
            return (
              <div key={title} className={`flex flex-col rounded-3xl border p-6 ${c.bg} ${c.border}`}>
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${c.icon}`}>
                  <Icon size={20} />
                </div>
                <div className="mt-4">
                  <p className={`text-2xl font-black leading-none ${c.stat}`}>{stat}</p>
                  <p className="mt-0.5 text-xs font-semibold text-neutral-400">{statLabel}</p>
                </div>
                <h3 className="mt-3 text-sm font-extrabold text-neutral-950 dark:text-white">{title}</h3>
                <p className="mt-1.5 flex-1 text-xs leading-5 text-neutral-500 dark:text-neutral-400">{desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
