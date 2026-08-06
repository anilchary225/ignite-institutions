import { TrendingUp, Medal, BookMarked, UserCheck, School, Laptop, Globe, Star } from "lucide-react";

const outcomes = [
  { icon: Medal,      title: "Top All-India NEET Ranks",         stat: "AIR 18",    statLabel: "Best rank 2024",           desc: "Ignite NEET students consistently appear in the Top 100 AIR, earning seats at AIIMS across India.", color: "emerald" },
  { icon: School,     title: "Seats at AIIMS & Top Med Colleges", stat: "700+",      statLabel: "Total NEET qualifiers",    desc: "700+ students have earned MBBS seats at AIIMS Delhi, JIPMER, Maulana Azad, KGMC, and other premier institutes.", color: "green" },
  { icon: BookMarked, title: "Board Excellence Alongside NEET",   stat: "94%",       statLabel: "Score 90%+ in boards",     desc: "94% of our students score above 90% in Intermediate boards — NEET prep and board prep go hand in hand at Ignite.", color: "teal" },
  { icon: UserCheck,  title: "Personalised Mentorship",           stat: "1 : 8",     statLabel: "Mentor-to-student ratio",  desc: "Each student has a dedicated mentor who tracks subject-wise performance and adjusts study plans monthly.", color: "emerald" },
  { icon: TrendingUp, title: "Measurable Score Growth",           stat: "38%",       statLabel: "Avg. score growth",        desc: "Average NEET mock score grows 38% between the first Year 1 mock and the final pre-NEET mock series.", color: "green" },
  { icon: Laptop,     title: "Digital Learning Resources",        stat: "24/7",      statLabel: "Online access included",   desc: "Recorded Biology, Chemistry and Physics lectures, NCERT annotations, and question banks — available around the clock.", color: "teal" },
  { icon: Globe,      title: "NEET Counselling Support",          stat: "Free",      statLabel: "MCC counselling guidance", desc: "After results, Ignite's counsellors guide students through MCC and state counselling rounds, college selection, and cutoffs.", color: "emerald" },
  { icon: Star,       title: "Merit Scholarships Available",      stat: "Up to 50%", statLabel: "Fee waiver for toppers",   desc: "Talent should never be stopped by finances. Merit-based scholarships available for qualifying students on application.", color: "green" },
];

const colorMap = {
  emerald: { bg: "bg-emerald-50 dark:bg-emerald-950/20", icon: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400", stat: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-200 dark:border-emerald-900" },
  green:   { bg: "bg-green-50 dark:bg-green-950/20",     icon: "bg-green-100 text-green-600 dark:bg-green-950/40 dark:text-green-400",         stat: "text-green-600 dark:text-green-400",     border: "border-green-200 dark:border-green-900" },
  teal:    { bg: "bg-teal-50 dark:bg-teal-950/20",       icon: "bg-teal-100 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400",             stat: "text-teal-600 dark:text-teal-400",       border: "border-teal-200 dark:border-teal-900" },
};

export default function NLTOutcomes() {
  return (
    <section className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl">

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
            Outcomes & Benefits
          </span>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="mx-auto mt-6 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            What You Walk Away With
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Two years at Ignite doesn't just prepare you for NEET — it shapes the kind of
            doctor you'll become.
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
