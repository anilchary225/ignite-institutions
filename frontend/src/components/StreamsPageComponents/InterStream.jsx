import { motion } from "framer-motion";
import { BookOpen, FlaskConical, Trophy, Users, Clock, Star } from "lucide-react";
import { fadeUp, staggerContainer, cardReveal, defaultViewport } from "../../animations/variants";
import { CourseDetailsButton } from "../CourseDialog";

const courses = [
  {
    id: "mpc",
    badge: "IIT JEE & Advanced",
    title: "MPC Stream",
    subtitle: "Mathematics · Physics · Chemistry",
    description:
      "Rigorous dual-preparation curriculum combining Intermediate board excellence with IIT JEE Main & Advanced coaching. Taught by IIT/NIT alumni faculty.",
    highlights: ["IIT JEE Main", "IIT JEE Advanced", "Board Excellence"],
    icon: FlaskConical,
    accent: "orange",
    details: [
      { icon: Clock, text: "2-Year Program (Class 11 & 12)" },
      { icon: Users, text: "Small batch sizes (≤ 30 students)" },
      { icon: Trophy, text: "Proven IIT selections every year" },
      { icon: Star, text: "Rank booster & doubt sessions" },
    ],
  },
  {
    id: "bipc",
    badge: "NEET",
    title: "BiPC Stream",
    subtitle: "Biology · Physics · Chemistry",
    description:
      "Integrated NEET preparation alongside Intermediate board. Deep conceptual focus on Biology, Physics & Chemistry with regular mock NTs.",
    highlights: ["NEET UG", "AIIMS", "Board Excellence"],
    icon: BookOpen,
    accent: "blue",
    details: [
      { icon: Clock, text: "2-Year Program (Class 11 & 12)" },
      { icon: Users, text: "Small batch sizes (≤ 30 students)" },
      { icon: Trophy, text: "Top NEET ranks from Ignite" },
      { icon: Star, text: "Biology lab & NCERT mastery" },
    ],
  },
];

const accentMap = {
  orange: {
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-950/40 dark:text-orange-300",
    iconBg: "bg-orange-500",
    border: "border-orange-100 dark:border-orange-900",
    highlight: "bg-orange-50 text-orange-700 dark:bg-orange-950/30 dark:text-orange-300",
    cta: "bg-orange-500 hover:bg-orange-600",
  },
  blue: {
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
    iconBg: "bg-blue-500",
    border: "border-blue-100 dark:border-blue-900",
    highlight: "bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-300",
    cta: "bg-blue-500 hover:bg-blue-600",
  },
};

function CourseCard({ course }) {
  const a = accentMap[course.accent] || accentMap.orange;
  const Icon = course.icon;

  return (
    <motion.div
      variants={cardReveal}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={`relative flex flex-col rounded-3xl border bg-white p-8 shadow-sm transition hover:shadow-xl dark:bg-neutral-900 dark:hover:shadow-neutral-800 ${a.border}`}
    >
      <span className={`self-start rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${a.badge}`}>
        {course.badge}
      </span>

      <div className="mt-6 flex items-start gap-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${a.iconBg}`}
        >
          <Icon size={22} className="text-white" />
        </motion.div>
        <div>
          <h3 className="text-xl font-extrabold text-neutral-950 dark:text-white">
            {course.title}
          </h3>
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
            {course.subtitle}
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
        {course.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {course.highlights.map((h) => (
          <span key={h} className={`rounded-full px-3 py-1 text-xs font-semibold ${a.highlight}`}>
            {h}
          </span>
        ))}
      </div>

      <ul className="mt-6 space-y-2.5 border-t pt-6 dark:border-neutral-800">
        {course.details.map(({ icon: DIcon, text }) => (
          <li key={text} className="flex items-center gap-3 text-sm text-neutral-600 dark:text-neutral-400">
            <DIcon size={15} className="shrink-0 text-neutral-400 dark:text-neutral-500" />
            {text}
          </li>
        ))}
      </ul>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <CourseDetailsButton courseId={course.id} className="inline-flex items-center justify-center rounded-xl border border-neutral-200 px-5 py-3 text-sm font-bold text-neutral-800 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800" />
        <motion.a href="/contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold text-white transition ${a.cta}`}>
          Enquire now
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function InterStream() {
  return (
    <section id="inter" className="bg-white px-6 py-20 dark:bg-neutral-950 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUp}
          className="flex items-center gap-3"
        >
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
          <span className="rounded-full bg-orange-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-orange-700 dark:bg-orange-950/40 dark:text-orange-300">
            Junior College - Inter
          </span>
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUp}
          className="mt-8 max-w-2xl"
        >
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            Intermediate + IIT JEE / NEET
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Classes 11 & 12 with fully integrated entrance exam coaching. Board
            marks and rank - both, together.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="mt-10 grid gap-6 sm:grid-cols-2"
        >
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
