import { CheckCircle2, ArrowRight } from "lucide-react";

const courses = [
  {
    id: "mpc-jee",
    stream: "MPC",
    color: "orange",
    title: "MPC - IIT-JEE (Main & Advanced)",
    duration: "2 Years · Class 11 & 12",
    targets: ["IIT-JEE Main", "IIT-JEE Advanced", "EAPCET", "BITSAT"],
    features: [
      "Daily 6-hour structured classes",
      "Weekly mock tests with rank analysis",
      "IIT/NIT alumni faculty",
      "Doubt-clearing sessions (morning & evening)",
      "Chapter-wise DPPs (Daily Practice Problems)",
      "Full-length JEE pattern tests every month",
    ],
  },
  {
    id: "bipc-neet",
    stream: "BiPC",
    color: "indigo",
    title: "BiPC - NEET UG",
    duration: "2 Years · Class 11 & 12",
    targets: ["NEET UG", "AIIMS", "EAPCET (Medical)", "State Medical"],
    features: [
      "NCERT-first teaching methodology",
      "Biology, Physics & Chemistry lab sessions",
      "NEET full-syllabus tests every 3 weeks",
      "State EAPCET medical preparation included",
      "Revision modules before board & NEET",
      "Personal performance tracking",
    ],
  },
  {
    id: "mpc-eapcet",
    stream: "MPC",
    color: "orange",
    title: "MPC - EAPCET Focus",
    duration: "2 Years · Class 11 & 12",
    targets: ["AP EAPCET", "TS EAPCET", "Board Excellence"],
    features: [
      "State syllabus–aligned curriculum",
      "EAPCET rank predictor tests",
      "Board exam preparation integrated",
      "Previous year paper analysis",
      "Intensive revision batches in Feb–Mar",
      "Counselling support for college selection",
    ],
  },
  {
    id: "bipc-eapcet",
    stream: "BiPC",
    color: "emerald",
    title: "BiPC - EAPCET Focus",
    duration: "2 Years · Class 11 & 12",
    targets: ["AP EAPCET Medical", "TS EAPCET Medical", "Board Excellence"],
    features: [
      "Dedicated state medical entrance prep",
      "EAPCET Biology deep-dive sessions",
      "Board + entrance integrated schedule",
      "Monthly rank analysis report",
      "Experienced state-level faculty",
      "Post-exam counselling included",
    ],
  },
  {
    id: "bitsat",
    stream: "MPC",
    color: "rose",
    title: "MPC - BITSAT Add-on",
    duration: "Alongside JEE · Last 3 Months Intensive",
    targets: ["BITSAT", "BITS Pilani", "BITS Goa", "BITS Hyderabad"],
    features: [
      "English Proficiency & Logical Reasoning modules",
      "BITSAT-specific speed & accuracy training",
      "Online test simulator (BITSAT pattern)",
      "10+ full-length BITSAT mock tests",
      "Score optimisation strategy sessions",
    ],
  },
];

const colorMap = {
  orange: {
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-950/50 dark:text-orange-300",
    pill: "border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-800 dark:bg-orange-950/30 dark:text-orange-300",
    check: "text-orange-500",
    cta: "bg-orange-600 hover:bg-orange-700 text-white",
  },
  indigo: {
    badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300",
    pill: "border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/30 dark:text-indigo-300",
    check: "text-indigo-500",
    cta: "bg-indigo-600 hover:bg-indigo-700 text-white",
  },
  orange: {
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-950/50 dark:text-orange-300",
    pill: "border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-800 dark:bg-orange-950/30 dark:text-orange-300",
    check: "text-orange-500",
    cta: "bg-orange-500 hover:bg-orange-600 text-white",
  },
  emerald: {
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
    pill: "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-300",
    check: "text-emerald-500",
    cta: "bg-emerald-600 hover:bg-emerald-700 text-white",
  },
  rose: {
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",
    pill: "border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-800 dark:bg-rose-950/30 dark:text-rose-300",
    check: "text-rose-500",
    cta: "bg-rose-600 hover:bg-rose-700 text-white",
  },
};

function CourseCard({ course }) {
  const c = colorMap[course.color];
  return (
    <div data-aos="fade-up" className="flex flex-col rounded-3xl bg-white shadow-sm ring-1 ring-neutral-100 transition hover:shadow-2xl dark:bg-neutral-900 dark:ring-neutral-800">
      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${c.badge}`}>
            {course.stream}
          </span>
          <span className="text-xs text-neutral-400 dark:text-neutral-500">{course.duration}</span>
        </div>
        <h3 className="mt-4 text-lg font-extrabold leading-snug text-neutral-950 dark:text-white">
          {course.title}
        </h3>

        {/* target exams */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {course.targets.map((t) => (
            <span key={t} className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${c.pill}`}>
              {t}
            </span>
          ))}
        </div>

        {/* features */}
        <ul className="mt-5 space-y-2">
          {course.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
              <CheckCircle2 size={15} className={`mt-0.5 shrink-0 ${c.check}`} />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto border-t px-7 py-5 dark:border-neutral-800">
        <a
          href="#contact"
          className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition ${c.cta}`}
        >
          Apply Now <ArrowRight size={15} />
        </a>
      </div>
    </div>
  );
}

export default function JCCourses() {
  return (
    <section id="courses" className="bg-white px-6 pb-20 dark:bg-neutral-950">
      {/* admissions open strip */}
      <div data-aos="zoom-in" className="w-full bg-linear-to-r from-orange-600 via-indigo-600 to-orange-700 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-amber-400" />
            <p className="text-sm font-black uppercase tracking-[0.18em] text-white">
              Admissions Are Open - 2025–26
            </p>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-wide text-orange-700 transition hover:bg-amber-400 hover:text-white"
          >
            Enquire Now →
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl">
        <div data-aos="fade-up" className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
          <span className="rounded-full bg-neutral-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
            Courses Offered
          </span>
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 data-aos="fade-up" className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            Choose your programme
          </h2>
          <p data-aos="fade-up" className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Every course is designed for both board performance and entrance
            exam success - no compromise on either.
          </p>
        </div>

        <div data-aos="fade-up" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
