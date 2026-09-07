import { TrendingUp, Timer, Medal, Users, BookOpen, BarChart2, Star, Shield } from "lucide-react";

const outcomes = [
  { icon: Medal,     title: "Top NEET Ranks in 12 Months",         stat: "AIR 31",    statLabel: "Best 2024 short-term rank",    desc: "Short-term students at Ignite regularly break into the Top 100 AIR - structured intensity produces AIIMS-level results.", color: "green"    },
  { icon: Users,     title: "450+ NEET Qualifiers - 2024",          stat: "450+",      statLabel: "Qualifiers in one year",        desc: "The biggest single-year NEET cohort from Ignite's short-term batch - qualifying for AIIMS, JIPMER, Maulana Azad and top state colleges.", color: "green"    },
  { icon: TrendingUp,title: "Average Score Jump of 65+ Marks",      stat: "+65 marks", statLabel: "Average improvement",          desc: "Students who join with 630–650 consistently exit with 700+ scores. The daily mock regimen is the primary driver of this jump.", color: "green"    },
  { icon: Timer,     title: "NEET Exam Stamina Through Daily Mocks", stat: "180 Qs",    statLabel: "Daily mock questions",         desc: "By Phase 3 every student writes 180 questions in 200 minutes with 80%+ accuracy. Exam day is just another day.", color: "green"    },
  { icon: BookOpen,  title: "Board Performance Maintained",          stat: "90%",       statLabel: "Score 80%+ in boards",         desc: "NEET and board syllabi overlap heavily at Class 12. Our calendar ensures both targets are hit - no compromises.", color: "green"    },
  { icon: BarChart2, title: "Percentile Projections Every Week",     stat: "Weekly",    statLabel: "Updated rank projections",     desc: "Each student gets a projected NEET percentile every week based on mock scores - no guesswork, just data.", color: "green"    },
  { icon: Star,      title: "Personalised Dropper Re-Analysis",      stat: "Free",      statLabel: "For dropper students",         desc: "Droppers get a free performance audit of their previous NEET attempt - every wrong answer mapped to a chapter gap before coaching begins.", color: "green"    },
  { icon: Shield,    title: "NEET Counselling Support",              stat: "Included",  statLabel: "MCC + state counselling help", desc: "After NEET results, our counsellors walk you through MCC rounds, college cutoffs, and branch decisions - no extra charge.", color: "green"    },
];

const colorMap = {
  green: { card: "bg-green-50 border-green-200 dark:bg-green-950/10 dark:border-green-900", icon: "bg-green-100 text-green-600 dark:bg-green-950/30 dark:text-green-400", stat: "text-green-600 dark:text-green-400" },
  green: { card: "bg-green-50 border-green-200 dark:bg-green-950/10 dark:border-green-900", icon: "bg-green-100 text-green-600 dark:bg-green-950/30 dark:text-green-400", stat: "text-green-600 dark:text-green-400" },
};

export default function NSTOutcomes() {
  return (
    <section className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl">

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <span className="rounded-full bg-green-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-700 dark:bg-green-950/40 dark:text-green-400">
            Outcomes & Benefits
          </span>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="mx-auto mt-6 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            Twelve Months, Measurable NEET Results
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Every number below is backed by real student data from our 2024 NEET batch.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map(({ icon: Icon, title, stat, statLabel, desc, color }) => {
            const c = colorMap[color];
            return (
              <div key={title} className={`flex flex-col rounded-3xl border p-6 ${c.card}`}>
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${c.icon}`}>
                  <Icon size={18} />
                </div>
                <p className={`mt-4 text-2xl font-black leading-none ${c.stat}`}>{stat}</p>
                <p className="mt-0.5 text-xs font-semibold text-neutral-400">{statLabel}</p>
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
