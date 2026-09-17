import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations/variants";

const highlights = [
  { color: "green", icon: "🎯", title: "Focused NEET Coaching",           desc: "Covering core concepts and exam strategies aligned to NTA's NEET pattern." },
  { color: "indigo",  icon: "📖", title: "Simplified Study Material",        desc: "Biology, Physics & Chemistry notes designed for quick understanding and long retention." },
  { color: "teal",    icon: "📝", title: "Frequent Mock Tests",              desc: "Build speed and accuracy with timed full-length and sectional mock tests." },
  { color: "violet",  icon: "💬", title: "Interactive Doubt Sessions",       desc: "Every doubt answered in live sessions - no question too small, no concept left unclear." },
  { color: "sky",     icon: "⚖️", title: "Balanced Preparation",            desc: "Board exams and NEET preparation managed simultaneously without overloading students." },
  { color: "rose",    icon: "🧬", title: "Continuous Biology Drilling",      desc: "Strengthen conceptual understanding and improve retention through daily Bio practice." },
];

const colorMap = {
  green: "border-green-200 bg-green-50 dark:border-green-900/50 dark:bg-green-950/20",
  indigo:  "border-indigo-200 bg-indigo-50 dark:border-indigo-900/50 dark:bg-indigo-950/20",
  teal:    "border-teal-200 bg-teal-50 dark:border-teal-900/50 dark:bg-teal-950/20",
  violet:  "border-violet-200 bg-violet-50 dark:border-violet-900/50 dark:bg-violet-950/20",
  sky:     "border-sky-200 bg-sky-50 dark:border-sky-900/50 dark:bg-sky-950/20",
  rose:    "border-rose-200 bg-rose-50 dark:border-rose-900/50 dark:bg-rose-950/20",
};

const phases = [
  { phase: "Phase 1", label: "NCERT Foundations",    period: "Class 11 · Term 1", color: "green", items: ["Full Biology (Botany + Zoology)", "Physics mechanics & optics basics", "Basic Organic & Inorganic Chemistry", "Board syllabus coverage", "Weekly chapter MCQ tests"] },
  { phase: "Phase 2", label: "Concept Deepening",    period: "Class 11 · Term 2", color: "teal",    items: ["Human physiology & genetics", "Electricity & magnetism", "Chemical bonding & thermodynamics", "NEET-level MCQ practice", "Unit test + error analysis"] },
  { phase: "Phase 3", label: "NEET Integration",     period: "Class 12 · Term 1", color: "indigo",  items: ["Reproduction & ecology (Bio)", "Modern Physics & waves", "Solutions, equilibria & electrochemistry", "Full-length NEET mocks monthly", "Board + NEET dual prep schedule"] },
  { phase: "Phase 4", label: "Rank Maximisation",    period: "Class 12 · Final",  color: "violet",  items: ["All-India NEET mock test series", "Speed & accuracy intensive drills", "NEET rank predictor sessions", "Board revision intensive", "Counselling for college selection"] },
];

const phaseColors = {
  green: { badge: "bg-green-600 text-white", check: "text-green-500" },
  teal:    { badge: "bg-teal-600 text-white",    check: "text-teal-500" },
  indigo:  { badge: "bg-indigo-600 text-white",  check: "text-indigo-500" },
  violet:  { badge: "bg-violet-600 text-white",  check: "text-violet-500" },
};

export default function BIPCProgram() {
  return (
    <section id="program" className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl">
        {/* HIGHLIGHTS */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <span className="rounded-full bg-green-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-green-700 dark:bg-green-950/50 dark:text-green-300">
            Programme Highlights
          </span>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 max-w-2xl"
        >
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            What you get at Ignite BiPC
          </h2>
          <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
            Our approach has made Ignite one of the Best BiPC Colleges in Hyderabad with NEET Coaching.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {highlights.map((h) => (
            <motion.div
              key={h.title}
              variants={fadeUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`flex gap-4 rounded-3xl border p-6 transition-shadow hover:shadow-lg ${colorMap[h.color]}`}
            >
              <span className="text-3xl shrink-0">{h.icon}</span>
              <div>
                <p className="font-extrabold text-neutral-950 dark:text-white">{h.title}</p>
                <p className="mt-1.5 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{h.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* PHASES */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex items-center gap-3"
        >
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <span className="rounded-full bg-indigo-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300">
            2-Year Roadmap
          </span>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {phases.map((ph) => {
            const c = phaseColors[ph.color];
            return (
              <motion.div
                key={ph.phase}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-neutral-100 transition-shadow hover:shadow-xl dark:bg-neutral-900 dark:ring-neutral-800"
              >
                <span className={`self-start rounded-full px-3 py-1 text-xs font-black uppercase ${c.badge}`}>{ph.phase}</span>
                <h3 className="mt-4 text-base font-extrabold text-neutral-950 dark:text-white">{ph.label}</h3>
                <p className="mt-0.5 text-xs font-semibold text-neutral-400">{ph.period}</p>
                <ul className="mt-5 space-y-2.5">
                  {ph.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                      <CheckCircle2 size={14} className={`mt-0.5 shrink-0 ${c.check}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* closing statement */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 rounded-3xl bg-green-700 p-8 text-center shadow-lg"
        >
          <p className="mx-auto max-w-2xl text-base leading-7 text-white/90">
            Ignite Academy is more than just a college - it's a foundation for future doctors and life science professionals. As one of the best BiPC junior colleges in Hyderabad, we provide the right mix of guidance, discipline, and motivation to help you succeed in NEET and beyond.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="mt-6 inline-flex items-center rounded-xl bg-white px-7 py-3.5 text-sm font-black text-green-700 transition hover:bg-green-50 shadow"
          >
            Take the Next Step →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
