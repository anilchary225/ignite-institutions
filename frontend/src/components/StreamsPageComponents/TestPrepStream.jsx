import { Zap, CalendarDays, Target, CheckCircle2 } from "lucide-react";

const exams = [
  {
    id: "jee",
    name: "IIT JEE",
    subname: "Main & Advanced",
    color: "violet",
    batches: [
      {
        type: "Long Term",
        icon: CalendarDays,
        duration: "2 Years (starting Class 11)",
        description:
          "Systematic two-year prep aligned with board exams. Covers the full JEE Main + Advanced syllabus with weekly tests.",
      },
      {
        type: "Short Term",
        icon: Zap,
        duration: "6 – 12 Months (Class 12 / Droppers)",
        description:
          "Intensive crash programme for Class 12 students and repeaters targeting JEE in the same academic year.",
      },
    ],
  },
  {
    id: "neet",
    name: "NEET",
    subname: "UG (MBBS / BDS)",
    color: "emerald",
    batches: [
      {
        type: "Long Term",
        icon: CalendarDays,
        duration: "2 Years (starting Class 11)",
        description:
          "Deep NCERT-first approach with concept building, lab practicals, and regular NEET pattern mock tests.",
      },
      {
        type: "Short Term",
        icon: Zap,
        duration: "6 – 12 Months (Class 12 / Droppers)",
        description:
          "Focused revision, high-yield chapters, and rapid test practice for students appearing in the next NEET cycle.",
      },
    ],
  },
  {
    id: "bitsat",
    name: "BITSAT",
    subname: "BITS Pilani / Goa / Hyderabad",
    color: "rose",
    batches: [
      {
        type: "Integrated",
        icon: Target,
        duration: "Along with JEE preparation",
        description:
          "BITSAT-specific English proficiency and Logical Reasoning modules added on top of the JEE curriculum.",
      },
    ],
  },
  {
    id: "eapcet",
    name: "EAPCET",
    subname: "AP & Telangana State Entrance",
    color: "orange",
    batches: [
      {
        type: "Integrated",
        icon: Target,
        duration: "Along with board preparation",
        description:
          "State-level engineering and medical entrance coaching woven into the Intermediate curriculum for maximum efficiency.",
      },
    ],
  },
];

const colorMap = {
  violet: {
    nameBg: "bg-violet-600",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300",
    border: "border-violet-100 dark:border-violet-900/50",
    card: "bg-violet-50/50 dark:bg-violet-950/10",
    pill: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  },
  emerald: {
    nameBg: "bg-emerald-600",
    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
    border: "border-emerald-100 dark:border-emerald-900/50",
    card: "bg-emerald-50/50 dark:bg-emerald-950/10",
    pill: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  },
  rose: {
    nameBg: "bg-rose-600",
    badge: "bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",
    border: "border-rose-100 dark:border-rose-900/50",
    card: "bg-rose-50/50 dark:bg-rose-950/10",
    pill: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
  },
  orange: {
    nameBg: "bg-orange-500",
    badge: "bg-orange-100 text-orange-700 dark:bg-orange-950/50 dark:text-orange-300",
    border: "border-orange-100 dark:border-orange-900/50",
    card: "bg-orange-50/50 dark:bg-orange-950/10",
    pill: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  },
};

function BatchCard({ batch, color }) {
  const c = colorMap[color];
  const Icon = batch.icon;
  return (
    <div className={`flex gap-4 rounded-2xl border p-5 ${c.border} ${c.card}`}>
      <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${c.nameBg}`}>
        <Icon size={16} className="text-white" />
      </div>
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold text-neutral-950 dark:text-white">
            {batch.type}
          </span>
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${c.pill}`}>
            {batch.duration}
          </span>
        </div>
        <p className="mt-1.5 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
          {batch.description}
        </p>
      </div>
    </div>
  );
}

function ExamBlock({ exam }) {
  const c = colorMap[exam.color];
  return (
    <div className="flex flex-col rounded-3xl border bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      {/* exam name */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className={`inline-flex items-center rounded-xl px-4 py-2 ${c.nameBg}`}>
            <span className="text-xl font-black text-white">{exam.name}</span>
          </div>
          <p className="mt-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
            {exam.subname}
          </p>
        </div>
        <CheckCircle2 size={20} className="mt-1 shrink-0 text-neutral-300 dark:text-neutral-700" />
      </div>

      {/* batches */}
      <div className="mt-6 space-y-3">
        {exam.batches.map((b) => (
          <BatchCard key={b.type} batch={b} color={exam.color} />
        ))}
      </div>

      <a
        href="#"
        className={`mt-6 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold text-white transition ${c.nameBg} hover:opacity-90`}
      >
        Enquire about {exam.name}
      </a>
    </div>
  );
}

export default function TestPrepStream() {
  return (
    <section id="testprep" className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-5xl">
        {/* section header */}
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
          <span className="rounded-full bg-emerald-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
            Test Preparation
          </span>
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            Crack the exam. Own the rank.
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Dedicated coaching for India's most competitive entrance exams —
            available as long-term, short-term, or integrated programmes to
            suit every student's timeline.
          </p>
        </div>

        {/* 2-col grid for JEE & NEET (larger), then 2-col for BITSAT & EAPCET */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {exams.map((exam) => (
            <ExamBlock key={exam.id} exam={exam} />
          ))}
        </div>

        {/* bottom CTA banner */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-700 p-8 text-center shadow-lg">
          <p className="text-xs font-bold uppercase tracking-widest text-violet-200">
            Not sure which batch fits?
          </p>
          <h3 className="mt-3 text-2xl font-extrabold text-white">
            Talk to our counsellors
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-violet-200">
            Our academic counsellors will assess your current level and
            recommend the right programme — free, no obligation.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-violet-700 transition hover:bg-violet-50"
          >
            Book a Free Counselling Session
          </a>
        </div>
      </div>
    </section>
  );
}
