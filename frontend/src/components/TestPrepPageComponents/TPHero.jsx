import { Zap, CalendarDays, Target, BookOpen } from "lucide-react";

const programs = [
  {
    id: "jee-long",
    icon: CalendarDays,
    color: "green",
    badge: "IIT JEE",
    type: "Long Term",
    duration: "2 Years (Class 11 & 12)",
    tagline: "Build from the ground up.",
    desc: "Start from Class 11 with a structured two-year plan covering the full JEE Main + Advanced syllabus alongside Intermediate board preparation. Concept-first teaching, weekly tests, and rank tracking from Day 1.",
    includes: ["Full JEE Main & Advanced syllabus", "Intermediate board preparation", "Weekly DPPs & chapter tests", "Full-length mocks every month", "IIT/NIT faculty"],
  },
  {
    id: "jee-short",
    icon: Zap,
    color: "rose",
    badge: "IIT JEE",
    type: "Short Term Crash",
    duration: "3 – 6 Months (Class 12 / Droppers)",
    tagline: "Accelerate. Rank. Clear.",
    desc: "Intensive crash programme for students in Class 12 or those who have just finished board exams. Covers high-yield chapters, revision strategies, and rapid mock test practice to maximise rank in one cycle.",
    includes: ["High-yield chapter crash revision", "Daily mock tests & analysis", "Rank improvement strategy sessions", "Error log & gap analysis", "Personal mentor assigned"],
  },
  {
    id: "neet-long",
    icon: BookOpen,
    color: "indigo",
    badge: "NEET",
    type: "Long Term",
    duration: "2 Years (Class 11 & 12)",
    tagline: "Deep roots, strong rank.",
    desc: "Two-year NEET preparation integrated with Intermediate. NCERT-first methodology, detailed Biology sessions, lab practicals, and full NEET-pattern tests every three weeks.",
    includes: ["NCERT-based Biology, Physics, Chemistry", "Lab practicals & diagram practice", "NEET full-syllabus tests (3-weekly)", "AIIMS-level extra preparation", "Monthly parent performance reports"],
  },
  {
    id: "neet-short",
    icon: Zap,
    color: "emerald",
    badge: "NEET",
    type: "Short Term Crash",
    duration: "3 – 6 Months (Class 12 / Droppers)",
    tagline: "Last mile. Maximum marks.",
    desc: "Targeted crash batch for NEET aspirants needing focused revision and test practice. Covers the entire NEET syllabus in a compressed, high-intensity schedule with daily MCQ drills.",
    includes: ["Rapid NCERT revision all subjects", "Daily 200-question mock tests", "Topic-wise weak area targeting", "All India mock test ranking", "Counsellor-guided study plan"],
  },
  {
    id: "eapcet",
    icon: Target,
    color: "orange",
    badge: "EAPCET",
    type: "Integrated",
    duration: "Alongside Intermediate Board",
    tagline: "State rank. Top college.",
    desc: "AP & Telangana EAPCET preparation layered on top of Intermediate curriculum. Both engineering and medical streams covered with state-specific question banks and rank predictor tests.",
    includes: ["AP & TS EAPCET engineering & medical", "State-specific question banks", "EAPCET rank predictor tests", "Board + EAPCET integrated schedule", "Post-result college counselling"],
  },
  {
    id: "bitsat",
    icon: Zap,
    color: "sky",
    badge: "BITSAT",
    type: "Crash Add-on",
    duration: "3 Months (Final stage of JEE prep)",
    tagline: "BITS or bust.",
    desc: "BITSAT-specific preparation built on top of the JEE curriculum. Covers English Proficiency, Logical Reasoning, and BITSAT speed tests - the three differentiators between BITS admission and a near miss.",
    includes: ["English Proficiency modules", "Logical Reasoning practice", "BITSAT online mock tests (10+)", "Speed & accuracy improvement", "BITS campus-wise cutoff strategy"],
  },
];

const colorMap = {
  green: { iconBg: "bg-green-600", badge: "bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-300", border: "border-green-100 dark:border-green-900/50", check: "text-green-500", cta: "bg-green-600 hover:bg-green-700" },
  rose:   { iconBg: "bg-rose-600",   badge: "bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",     border: "border-rose-100 dark:border-rose-900/50",   check: "text-rose-500",   cta: "bg-rose-600 hover:bg-rose-700" },
  indigo: { iconBg: "bg-indigo-600", badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300", border: "border-indigo-100 dark:border-indigo-900/50", check: "text-indigo-500", cta: "bg-indigo-600 hover:bg-indigo-700" },
  emerald:{ iconBg: "bg-emerald-600",badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",border:"border-emerald-100 dark:border-emerald-900/50",check:"text-emerald-500",cta:"bg-emerald-600 hover:bg-emerald-700"},
  orange: { iconBg: "bg-orange-500", badge: "bg-orange-100 text-orange-700 dark:bg-orange-950/50 dark:text-orange-300", border: "border-orange-100 dark:border-orange-900/50", check: "text-orange-500", cta: "bg-orange-500 hover:bg-orange-600" },
  sky:    { iconBg: "bg-sky-500",    badge: "bg-sky-100 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300",         border: "border-sky-100 dark:border-sky-900/50",     check: "text-sky-500",    cta: "bg-sky-500 hover:bg-sky-600" },
};

function ProgramCard({ prog }) {
  const c = colorMap[prog.color];
  const Icon = prog.icon;
  return (
    <div data-aos="fade-up" className={`flex flex-col rounded-3xl border bg-white shadow-sm transition hover:shadow-md dark:bg-neutral-900 ${c.border}`}>
      <div className="p-7 flex-1">
        <div className="flex items-center gap-3">
          <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${c.iconBg}`}>
            <Icon size={18} className="text-white" />
          </div>
          <div>
            <span className={`rounded-full px-3 py-0.5 text-xs font-black uppercase tracking-wide ${c.badge}`}>
              {prog.badge}
            </span>
            <p className="mt-0.5 text-base font-extrabold text-neutral-950 dark:text-white">
              {prog.type}
            </p>
          </div>
        </div>

        <p className="mt-3 text-xs font-semibold text-neutral-500 dark:text-neutral-500">
          ⏱ {prog.duration}
        </p>
        <p className="mt-1 text-sm italic font-semibold text-neutral-700 dark:text-neutral-300">
          "{prog.tagline}"
        </p>
        <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
          {prog.desc}
        </p>

        <ul className="mt-5 space-y-1.5">
          {prog.includes.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <span className={`mt-0.5 font-bold ${c.check}`}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-7 pb-7">
        <a href="#contact" className={`inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-bold text-white transition ${c.cta}`}>
          Enquire Now
        </a>
      </div>
    </div>
  );
}

export default function TPHero() {
  return (
    <section data-aos="fade-up" id="programs" className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
          Ignite Test Prep
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight text-neutral-950 sm:text-5xl dark:text-white">
          Every exam. Every timeline.{" "}
          <span className="text-green-600 dark:text-green-400">One destination.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
          Whether you're starting from Class 11 or cramming for one final attempt,
          Ignite has a programme built exactly for your position and your goal.
        </p>

        {/* stat strip */}
        <div className="mt-8 flex flex-wrap gap-6">
          {[
            { v: "500+", l: "IIT & NEET Selections",datadelay: 150 },
            { v: "20+", l: "Years of Coaching", datadelay: 300 },
            { v: "6", l: "Programmes Available", datadelay: 450 },
            { v: "8+", l: "Branches", datadelay: 600 },
          ].map(({ v, l,datadelay }) => (
            <div data-aos="fade-up" data-aos-delay={datadelay} key={l} className="rounded-2xl bg-green-50 px-5 py-4 dark:bg-green-950/20">
              <p className="text-2xl font-black text-green-700 dark:text-green-400">{v}</p>
              <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">{l}</p>
            </div>
          ))}
        </div>

        <div data-aos = "fade-up" data-aos-delay="650" className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => <ProgramCard key={p.id} prog={p} />)}
        </div>
      </div>
    </section>
  );
}
