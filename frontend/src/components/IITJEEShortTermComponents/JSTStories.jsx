import { Flame, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations/variants";

const stories = [
  {
    name: "Vivaan Shah",
    rank: "AIR 52",
    exam: "IIT JEE Main 2024",
    college: "IIT Bombay - Electrical Engineering",
    batch: "2023–24 Short-Term",
    avatar: "https://placehold.co/180x180/f59e0b/ffffff?text=VS",
    quote: "I was a dropper who'd wasted one year with the wrong institute. At Ignite I found structure, mentorship, and a plan. The daily mock test regime was brutal - and that's exactly what I needed.",
    improvement: "81 → AIR 52",
    improvementLabel: "Rank jump in 12 months",
    color: "amber",
  },
  {
    name: "Ananya Iyer",
    rank: "AIR 118",
    exam: "IIT JEE Advanced 2024",
    college: "IIT Delhi - Computer Science",
    batch: "2023–24 Short-Term",
    avatar: "https://placehold.co/180x180/ea580c/ffffff?text=AI",
    quote: "I joined the short-term batch in Class 12 alongside my boards. The way Ignite structures the 12 months means boards and JEE prep genuinely reinforce each other - I didn't have to choose.",
    improvement: "92% → AIR 118",
    improvementLabel: "Boards to IIT in one year",
    color: "orange",
  },
  {
    name: "Karan Gupta",
    rank: "AIR 234",
    exam: "IIT JEE Main 2024",
    college: "NIT Warangal - CS",
    batch: "2023–24 Short-Term",
    avatar: "https://placehold.co/180x180/dc2626/ffffff?text=KG",
    quote: "Phase 3 at Ignite changed my relationship with exams. Writing a full 3-hour JEE paper every single day for 3 months builds a calm that no coaching centre teaches. I was unshakeable on exam day.",
    improvement: "72%ile → AIR 234",
    improvementLabel: "Score jump via mock mode",
    color: "red",
  },
];

const colorMap = {
  amber:  { bar: "bg-amber-500",  ring: "ring-amber-300 dark:ring-amber-700",  pill: "bg-amber-500", text: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-950/10" },
  orange: { bar: "bg-orange-500", ring: "ring-orange-300 dark:ring-orange-700",pill: "bg-orange-500",text: "text-orange-600 dark:text-orange-400",bg: "bg-orange-50 dark:bg-orange-950/10" },
  red:    { bar: "bg-red-500",    ring: "ring-red-300 dark:ring-red-700",      pill: "bg-red-500",   text: "text-red-600 dark:text-red-400",    bg: "bg-red-50 dark:bg-red-950/10" },
};

export default function JSTStories() {
  return (
    <section className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <div className="flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 dark:bg-amber-950/40">
            <Flame size={13} className="text-amber-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">Inspiring Stories</span>
          </div>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-2xl text-center"
        >
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">One Year Changed Everything</h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            These students walked in uncertain. They walked out with IIT offers.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 space-y-5"
        >
          {stories.map((s) => {
            const c = colorMap[s.color];
            return (
              <motion.div
                key={s.name}
                variants={fadeUp}
                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-neutral-100 transition hover:shadow-md dark:bg-neutral-900 dark:ring-neutral-800"
              >
                {/* top accent bar */}
                <div className={`h-1 w-full ${c.bar}`} />

                <div className="flex flex-col gap-6 p-7 sm:flex-row sm:items-center">
                  {/* avatar + rank */}
                  <div className="flex shrink-0 flex-col items-center gap-3">
                    <div className={`h-20 w-20 overflow-hidden rounded-2xl ring-4 ${c.ring}`}>
                      <img src={s.avatar} alt={s.name} className="h-full w-full object-cover" />
                    </div>
                    <div className={`rounded-xl px-3 py-1.5 text-center ${c.pill}`}>
                      <p className="text-sm font-black text-white leading-none">{s.rank}</p>
                      <p className="text-[9px] text-white/70">{s.exam.split(" ").slice(-1)[0]}</p>
                    </div>
                  </div>

                  {/* quote + detail */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-400 italic">"{s.quote}"</p>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <div>
                        <p className="text-sm font-extrabold text-neutral-950 dark:text-white">{s.name}</p>
                        <p className="text-xs text-neutral-500">{s.exam} · {s.batch}</p>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-bold ${c.bg} ${c.text}`}>{s.college}</span>
                    </div>
                  </div>

                  {/* stat block */}
                  <div className={`flex shrink-0 flex-col items-center justify-center rounded-2xl px-5 py-4 text-center ${c.bg}`}>
                    <p className={`text-xl font-black ${c.text}`}>{s.improvement}</p>
                    <p className="mt-0.5 max-w-[110px] text-center text-[10px] text-neutral-500 leading-tight">{s.improvementLabel}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
