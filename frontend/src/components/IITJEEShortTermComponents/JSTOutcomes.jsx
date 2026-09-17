import { TrendingUp, Timer, Medal, Users, BookOpen, BarChart2, Star, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "../../animations/variants";

const outcomes = [
  { icon: Medal,     title: "Top JEE Ranks in 12 Months",       stat: "AIR 52",   statLabel: "Best 2026 short-term rank",   desc: "Short-term students consistently punch above their weight - structured intensity produces results faster than prolonged unfocused prep.", color: "amber" },
  { icon: Users,     title: "400+ JEE Qualifiers - 2026 Alone", stat: "400+",     statLabel: "Qualifiers in one year",       desc: "The largest single-year cohort of JEE qualifiers in Ignite's history came from the Short-Term 2026 batch.", color: "orange" },
  { icon: TrendingUp,title: "Average Percentile Gain of 18+",    stat: "+18 %ile", statLabel: "Average improvement",         desc: "Students who join with 80th percentile in their first mock leave consistently above 98th percentile in the final mock series.", color: "red" },
  { icon: Timer,     title: "JEE Exam-Day Speed & Accuracy",     stat: "100+",     statLabel: "Problems solved per mock",    desc: "By Phase 3, our students solve 100+ problems in 3 hours with 78%+ accuracy - JEE-qualifying speed built through daily reps.", color: "rose" },
  { icon: BookOpen,  title: "Board + JEE, Never a Compromise",   stat: "91%",      statLabel: "Score 85%+ in boards",        desc: "Short-Term students maintain strong board performance. Our calendar synchronises board and JEE deadlines so neither suffers.", color: "amber" },
  { icon: BarChart2, title: "Weekly Rank Projections",           stat: "Weekly",   statLabel: "Personalised report cards",   desc: "Every student sees their all-India rank projection updated weekly based on mock performance - no surprises on results day.", color: "orange" },
  { icon: Star,      title: "1-on-1 Mentorship Included",        stat: "1 : 6",    statLabel: "Mentor-to-student ratio",     desc: "A dedicated mentor reviews each student's mock analysis and adjusts their 4-week study plan fortnightly.", color: "red" },
  { icon: Shield,    title: "Post-Result Counselling",           stat: "Free",     statLabel: "JoSAA counselling support",   desc: "After results, our counsellors guide you through college choice, branch selection, and JoSAA rounds - included in the programme.", color: "rose" },
];

const colorMap = {
  amber:  { card: "bg-amber-50 border-amber-200 dark:bg-amber-950/10 dark:border-amber-900",  icon: "bg-amber-100 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400",  stat: "text-amber-600 dark:text-amber-400" },
  orange: { card: "bg-orange-50 border-orange-200 dark:bg-orange-950/10 dark:border-orange-900",icon:"bg-orange-100 text-orange-600 dark:bg-orange-950/30 dark:text-orange-400",stat:"text-orange-600 dark:text-orange-400"},
  red:    { card: "bg-red-50 border-red-200 dark:bg-red-950/10 dark:border-red-900",          icon: "bg-red-100 text-red-600 dark:bg-red-950/30 dark:text-red-400",          stat: "text-red-600 dark:text-red-400" },
  rose:   { card: "bg-rose-50 border-rose-200 dark:bg-rose-950/10 dark:border-rose-900",      icon: "bg-rose-100 text-rose-600 dark:bg-rose-950/30 dark:text-rose-400",      stat: "text-rose-600 dark:text-rose-400" },
};

export default function JSTOutcomes() {
  return (
    <section className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-700 dark:bg-amber-950/40 dark:text-amber-400">
            Outcomes & Benefits
          </span>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            Twelve Months, Measurable Results
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Every outcome below is backed by student data from our 2024 batch.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.07, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {outcomes.map(({ icon: Icon, title, stat, statLabel, desc, color }) => {
            const c = colorMap[color];
            return (
              <motion.div
                key={title}
                variants={scaleIn}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`flex flex-col rounded-3xl border p-6 ${c.card}`}
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${c.icon}`}>
                  <Icon size={18} />
                </div>
                <p className={`mt-4 text-2xl font-black leading-none ${c.stat}`}>{stat}</p>
                <p className="mt-0.5 text-xs font-semibold text-neutral-400">{statLabel}</p>
                <h3 className="mt-3 text-sm font-extrabold text-neutral-950 dark:text-white">{title}</h3>
                <p className="mt-1.5 flex-1 text-xs leading-5 text-neutral-500 dark:text-neutral-400">{desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
