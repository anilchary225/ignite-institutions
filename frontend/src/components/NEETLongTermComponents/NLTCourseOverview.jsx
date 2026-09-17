import { Leaf, FlaskConical, Atom, Brain, Target, BarChart3, Layers, Clock4 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "../../animations/variants";

const subjects = [
  { icon: Leaf,         label: "Biology",   desc: "Botany & Zoology - every chapter NCERT-deep and NEET-sharp", color: "emerald" },
  { icon: FlaskConical, label: "Chemistry", desc: "Physical, Organic & Inorganic at NEET-level mastery",        color: "green"   },
  { icon: Atom,         label: "Physics",   desc: "Mechanics to Modern Physics - concept-first, formula-second", color: "teal"    },
];

const highlights = [
  { icon: Brain,     title: "NCERT-First, NEET-Always",       desc: "Every concept anchored in NCERT then extended to NEET difficulty level." },
  { icon: Target,    title: "12,000+ NEET Question Bank",     desc: "Chapter-wise, difficulty-graded questions pulled from 15 years of NEET papers." },
  { icon: BarChart3, title: "Monthly Progress Reports",       desc: "Subject-wise and chapter-wise performance tracked and shared every month." },
  { icon: Layers,    title: "Board + NEET Dual Mastery",      desc: "Syllabus synced - BiPC board and NEET preparation run in parallel, never at odds." },
  { icon: Clock4,    title: "Revision Built Into Calendar",   desc: "Structured revision cycles designed into the 2-year plan - not an afterthought." },
  { icon: Leaf,      title: "AIIMS/JIPMER Alumni Faculty",    desc: "Biology faculty trained at AIIMS; Chemistry and Physics from top medical colleges." },
];

const colorMap = {
  emerald: { bg: "bg-emerald-50 dark:bg-emerald-950/20", icon: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400", border: "border-emerald-200 dark:border-emerald-800" },
  green:   { bg: "bg-green-50 dark:bg-green-950/20",     icon: "bg-green-100 text-green-600 dark:bg-green-950/40 dark:text-green-400",         border: "border-green-200 dark:border-green-800"     },
  teal:    { bg: "bg-teal-50 dark:bg-teal-950/20",       icon: "bg-teal-100 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400",             border: "border-teal-200 dark:border-teal-800"       },
};

export default function NLTCourseOverview() {
  return (
    <section id="course" className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
            Course Overview
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
            What the Programme Delivers
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            A rigorous 2-year curriculum across Biology, Chemistry, and Physics - built for
            board excellence and NEET mastery at the same time.
          </p>
        </motion.div>

        {/* 3 subject cards */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-5 sm:grid-cols-3"
        >
          {subjects.map(({ icon: Icon, label, desc, color }) => {
            const c = colorMap[color];
            return (
              <motion.div
                key={label}
                variants={scaleIn}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`rounded-3xl border p-7 ${c.bg} ${c.border}`}
              >
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${c.icon}`}>
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-neutral-950 dark:text-white">{label}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* horizontal programme banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 overflow-hidden rounded-3xl bg-linear-to-r from-emerald-700 via-green-600 to-teal-700 p-8"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">Programme Structure</p>
              <h3 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
                2-Year Integrated Track · Class 11 & 12
              </h3>
              <p className="mt-2 text-sm text-emerald-100 leading-6 max-w-lg">
                Year 1 builds strong conceptual foundations in Biology, Chemistry & Physics while completing the
                Class 11 board syllabus. Year 2 intensifies with advanced NEET-level problem solving, full
                syllabus revision, and weekly full-length NEET mock tests.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3">
              {[
                ["Year 1", "Foundation + Class 11 Boards"],
                ["Year 2", "Advanced + Class 12 + Full Mocks"],
              ].map(([yr, label]) => (
                <motion.div
                  key={yr}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 rounded-xl bg-white/15 px-5 py-3 backdrop-blur-sm"
                >
                  <span className="rounded-lg bg-white/20 px-3 py-1 text-sm font-black text-white">{yr}</span>
                  <span className="text-sm font-semibold text-white/90">{label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 6 highlight cards */}
        <motion.div
          variants={staggerContainer(0.07, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {highlights.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="flex items-start gap-4 rounded-2xl bg-neutral-50 p-5 dark:bg-neutral-900"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                <Icon size={18} />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-neutral-950 dark:text-white">{title}</h4>
                <p className="mt-1 text-xs leading-5 text-neutral-500 dark:text-neutral-400">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
