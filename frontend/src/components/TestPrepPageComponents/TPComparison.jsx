import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { fadeUp, defaultViewport } from "../../animations/variants";

const ROWS = [
  {
    feature: "Who is it for?",
    inter: "Class 10 passouts entering Inter",
    crash: "Students finishing / done with Inter",
    longTerm: "Repeaters and students needing extended preparation",
    bitsat: "Students targeting BITS Pilani admission",
    eapcet: "Students aiming for TS/AP EAPCET engineering colleges",
  },
  {
    feature: "Duration",
    inter: "2 Years",
    crash: "3 to 6 Months",
    longTerm: "1 Year",
    bitsat: "3 Months",
    eapcet: "With Intermediate Board Exams",
  },
  {
    feature: "Board Exam Prep",
    inter: "check",
    crash: "dash",
    longTerm: "dash",
    bitsat: "dash",
    eapcet: "dash",
  },
  {
    feature: "JEE / NEET Coaching",
    inter: "Integrated from Day 1",
    crash: "Intensive crash prep",
    longTerm: "Complete syllabus + rank improvement",
    bitsat: "BITSAT-focused preparation",
    eapcet: "EAPCET-focused preparation",
  },
  {
    feature: "Residential Option",
    inter: "check",
    crash: "check",
    longTerm: "check",
    bitsat: "check",
    eapcet: "check",
  },
  {
    feature: "Regular Mock Tests",
    inter: "check",
    crash: "check",
    longTerm: "check",
    bitsat: "check",
    eapcet: "check",
  },
  {
    feature: "Personal Mentor",
    inter: "check",
    crash: "check",
    longTerm: "check",
    bitsat: "check",
    eapcet: "check",
  },
  {
    feature: "Best For",
    inter: "Building foundation + rank from scratch",
    crash: "Final rank improvement push",
    longTerm: "Strong revision and a full-year rank improvement plan",
    bitsat: "Students targeting top BITS campuses",
    eapcet: "Students aiming for top TS/AP engineering colleges",
  },
];

const cols = [
  { key: "inter",    label: "Intermediate (2 Yr)", color: "blue" },
  { key: "crash",    label: "Short Term Crash",    color: "rose" },
  { key: "longTerm", label: "Long Term (1 Yr)",    color: "indigo" },
  { key: "bitsat",   label: "BITSAT",              color: "sky" },
  { key: "eapcet",   label: "EAPCET",              color: "orange" },
];

const checkColors = {
  blue: "text-blue-600 dark:text-blue-400",
  rose:   "text-rose-600 dark:text-rose-400",
  indigo: "text-indigo-600 dark:text-indigo-400",
  sky:    "text-sky-500 dark:text-sky-400",
  orange: "text-orange-500 dark:text-orange-400",
};

function Cell({ value, color }) {
  if (value === "check") return (
    <div className="flex justify-center">
      <div className={`flex h-7 w-7 items-center justify-center rounded-full bg-current/10 ${checkColors[color]}`}>
        <Check size={14} strokeWidth={3} />
      </div>
    </div>
  );
  if (value === "dash") return (
    <div className="flex justify-center">
      <Minus size={16} className="text-neutral-300 dark:text-neutral-700" />
    </div>
  );
  return <span className="text-sm text-neutral-600 dark:text-neutral-400">{value}</span>;
}

export default function TPComparison() {
  return (
    <section id="compare" className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUp}
          className="flex items-center gap-3"
        >
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <span className="rounded-full bg-neutral-200 px-4 py-1 text-xs font-bold uppercase tracking-widest text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
            Programme Comparison
          </span>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUp}
          className="mt-8 max-w-2xl"
        >
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            Which programme is right for you?
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Compare all five programmes side by side to find the one that fits your timeline and goal.
          </p>
        </motion.div>

        {/* table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.6 }}
          className="mt-10 overflow-x-auto rounded-3xl shadow-sm ring-1 ring-neutral-200 dark:ring-neutral-800"
        >
          <table className="w-full min-w-[800px] border-collapse bg-white dark:bg-neutral-900">
            <thead>
              <tr>
                {/* feature label col */}
                <th className="w-44 bg-neutral-50 px-6 py-5 text-left text-xs font-bold uppercase tracking-widest text-neutral-500 dark:bg-neutral-950 dark:text-neutral-500">
                  Feature
                </th>
                {cols.map((col) => (
                  <th key={col.key} className="px-6 py-4 text-center">
                    <span className="text-sm font-extrabold text-black dark:text-white">{col.label}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, ri) => (
                <tr
                  key={row.feature}
                  className={`border-t border-neutral-100 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-800/40 ${
                    ri % 2 === 0 ? "" : "bg-neutral-50/50 dark:bg-neutral-900/50"
                  }`}
                >
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-neutral-950 dark:text-white">
                      {row.feature}
                    </span>
                  </td>
                  {cols.map((col) => (
                    <td key={col.key} className="px-6 py-4 text-center">
                      <Cell value={row[col.key]} color={col.color} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
