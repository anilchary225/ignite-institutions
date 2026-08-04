import { Atom, FlaskConical, BookOpen, Target, Zap, GraduationCap } from "lucide-react";

const tracks = [
  {
    id: "mpc",
    icon: Atom,
    color: "violet",
    label: "MPC — IIT JEE",
    title: "Maths · Physics · Chemistry",
    exams: ["IIT JEE Main", "IIT JEE Advanced", "EAPCET", "BITSAT"],
    desc: "Our flagship MPC stream integrates Intermediate board preparation with rigorous IIT JEE Main & Advanced coaching. Students also qualify for EAPCET and BITSAT through the same curriculum.",
  },
  {
    id: "bipc",
    icon: FlaskConical,
    color: "indigo",
    label: "BiPC — NEET",
    title: "Biology · Physics · Chemistry",
    exams: ["NEET UG", "AIIMS", "EAPCET (Medical)", "State Medical"],
    desc: "Our BiPC stream prepares students for Intermediate board while simultaneously training them for NEET UG with NCERT-first methodology, lab sessions, and national-level mock tests.",
  },
  {
    id: "foundation",
    icon: BookOpen,
    color: "sky",
    label: "Foundation",
    title: "Pre-IIT · Pre-NEET",
    exams: ["IIT JEE Foundation", "NEET Foundation", "NTSE", "Olympiads"],
    desc: "A foundation track built for students who want to get ahead. Covers Class 11 prerequisite concepts in depth before the academic year begins — ideal for Class 10 passouts.",
  },
  {
    id: "eapcet",
    icon: Target,
    color: "orange",
    label: "EAPCET",
    title: "AP & TS State Entrance",
    exams: ["AP EAPCET", "TS EAPCET", "Engineering & Medical"],
    desc: "Dedicated EAPCET preparation woven into the Intermediate syllabus. Both engineering and medical EAPCET streams are covered with state-specific test papers and rank predictors.",
  },
  {
    id: "bitsat",
    icon: Zap,
    color: "rose",
    label: "BITSAT",
    title: "BITS Pilani · Goa · Hyderabad",
    exams: ["BITSAT", "English Proficiency", "Logical Reasoning"],
    desc: "BITSAT-specific modules layered on top of JEE preparation. English proficiency and logical reasoning sections are covered through dedicated weekly practice alongside core science subjects.",
  },
];

const colorMap = {
  violet: {
    iconBg: "bg-violet-600",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300",
    pill: "border-violet-200 text-violet-700 dark:border-violet-800 dark:text-violet-400",
    border: "border-violet-100 dark:border-violet-900/60",
  },
  indigo: {
    iconBg: "bg-indigo-600",
    badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300",
    pill: "border-indigo-200 text-indigo-700 dark:border-indigo-800 dark:text-indigo-400",
    border: "border-indigo-100 dark:border-indigo-900/60",
  },
  sky: {
    iconBg: "bg-sky-500",
    badge: "bg-sky-100 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300",
    pill: "border-sky-200 text-sky-700 dark:border-sky-800 dark:text-sky-400",
    border: "border-sky-100 dark:border-sky-900/60",
  },
  orange: {
    iconBg: "bg-orange-500",
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-950/50 dark:text-orange-300",
    pill: "border-orange-200 text-orange-700 dark:border-orange-800 dark:text-orange-400",
    border: "border-orange-100 dark:border-orange-900/60",
  },
  rose: {
    iconBg: "bg-rose-600",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",
    pill: "border-rose-200 text-rose-700 dark:border-rose-800 dark:text-rose-400",
    border: "border-rose-100 dark:border-rose-900/60",
  },
};

function TrackCard({ track }) {
  const c = colorMap[track.color];
  const Icon = track.icon;
  return (
    <div
      className={`flex flex-col rounded-3xl border bg-white p-7 shadow-sm transition hover:shadow-md dark:bg-neutral-900 ${c.border}`}
    >
      <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${c.iconBg}`}>
        <Icon size={20} className="text-white" />
      </div>
      <span className={`mt-5 self-start rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${c.badge}`}>
        {track.label}
      </span>
      <h3 className="mt-3 text-lg font-extrabold text-neutral-950 dark:text-white">
        {track.title}
      </h3>
      <p className="mt-2 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
        {track.desc}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {track.exams.map((e) => (
          <span
            key={e}
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${c.pill}`}
          >
            {e}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function JCAbout() {
  return (
    <section id="about" className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl">
        {/* header */}
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            Ignite Junior College
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight text-neutral-950 sm:text-5xl dark:text-white">
            Two years that define{" "}
            <span className="text-violet-600 dark:text-violet-400">your future.</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Ignite Junior College offers Class 11 & 12 (Intermediate) with
            fully integrated coaching for India's most competitive entrance
            exams — IIT JEE, NEET, EAPCET, and BITSAT. Board excellence and
            top ranks, together.
          </p>
        </div>

        {/* stat strip */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "20+", label: "Years of Excellence" },
            { value: "6000+", label: "Students Trained" },
            { value: "500+", label: "IIT / NEET Selections" },
            { value: "8+", label: "Branches" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="rounded-2xl bg-violet-50 px-5 py-5 text-center dark:bg-violet-950/20"
            >
              <p className="text-3xl font-black text-violet-700 dark:text-violet-400">{value}</p>
              <p className="mt-1 text-xs font-semibold text-neutral-600 dark:text-neutral-400">{label}</p>
            </div>
          ))}
        </div>

        {/* tracks grid — 2+3 layout */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tracks.map((t) => (
            <TrackCard key={t.id} track={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
