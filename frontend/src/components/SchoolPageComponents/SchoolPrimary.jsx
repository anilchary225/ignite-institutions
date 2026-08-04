const grades = [
  {
    grade: "Class 1",
    emoji: "🌱",
    color: "sky",
    focus: "Reading, Writing & Numbers",
    activities: ["Phonics & story time", "Number play & patterns", "Drawing & colouring", "Morning assembly"],
  },
  {
    grade: "Class 2",
    emoji: "📖",
    color: "violet",
    focus: "Language & Basic Maths",
    activities: ["Reading comprehension", "Tables & addition", "Environmental studies", "Show & tell"],
  },
  {
    grade: "Class 3",
    emoji: "🔬",
    color: "emerald",
    focus: "Science Curiosity",
    activities: ["Simple experiments", "Multiplication", "Map skills & geography", "Role play & drama"],
  },
  {
    grade: "Class 4",
    emoji: "🌍",
    color: "amber",
    focus: "Expanding World View",
    activities: ["Essay writing", "Fractions & decimals", "Nature study", "Group projects"],
  },
  {
    grade: "Class 5",
    emoji: "🏅",
    color: "rose",
    focus: "Board Readiness",
    activities: ["Exam skills & time management", "Geometry & data", "Social science projects", "Science fair"],
  },
];

const colorMap = {
  sky: {
    bg: "bg-sky-50 dark:bg-sky-950/20",
    emoji: "bg-sky-100 dark:bg-sky-950/40",
    label: "text-sky-700 dark:text-sky-400",
    pill: "bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300",
    border: "border-sky-200 dark:border-sky-900/50",
  },
  violet: {
    bg: "bg-violet-50 dark:bg-violet-950/20",
    emoji: "bg-violet-100 dark:bg-violet-950/40",
    label: "text-violet-700 dark:text-violet-400",
    pill: "bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300",
    border: "border-violet-200 dark:border-violet-900/50",
  },
  emerald: {
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    emoji: "bg-emerald-100 dark:bg-emerald-950/40",
    label: "text-emerald-700 dark:text-emerald-400",
    pill: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
    border: "border-emerald-200 dark:border-emerald-900/50",
  },
  amber: {
    bg: "bg-amber-50 dark:bg-amber-950/20",
    emoji: "bg-amber-100 dark:bg-amber-950/40",
    label: "text-amber-700 dark:text-amber-400",
    pill: "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
    border: "border-amber-200 dark:border-amber-900/50",
  },
  rose: {
    bg: "bg-rose-50 dark:bg-rose-950/20",
    emoji: "bg-rose-100 dark:bg-rose-950/40",
    label: "text-rose-700 dark:text-rose-400",
    pill: "bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300",
    border: "border-rose-200 dark:border-rose-900/50",
  },
};

function GradeCard({ grade: g }) {
  const c = colorMap[g.color];
  return (
    <div className={`flex flex-col gap-4 rounded-3xl border p-6 ${c.bg} ${c.border}`}>
      <div className="flex items-center gap-3">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ${c.emoji}`}>
          {g.emoji}
        </div>
        <div>
          <p className={`text-xs font-black uppercase tracking-widest ${c.label}`}>{g.grade}</p>
          <p className="text-sm font-bold text-neutral-950 dark:text-white">{g.focus}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {g.activities.map((a) => (
          <span key={a} className={`rounded-full px-3 py-1 text-xs font-semibold ${c.pill}`}>
            {a}
          </span>
        ))}
      </div>
    </div>
  );
}

const parentActivities = [
  {
    emoji: "📋",
    title: "Homework Diary",
    desc: "Daily homework assigned through a structured diary. Parents co-sign completion each evening — building the habit of accountability from Class 1.",
  },
  {
    emoji: "📱",
    title: "Parent App Updates",
    desc: "Real-time attendance, marks, and announcements sent to parents via our school app. Nothing important is ever missed.",
  },
  {
    emoji: "🎨",
    title: "Holiday Project Packs",
    desc: "Curated holiday project kits sent home. Designed for parent-child collaboration — science, art, and reading activities for every break.",
  },
  {
    emoji: "📅",
    title: "Monthly Parent Meetings",
    desc: "One-on-one teacher consultations every month. Teachers share progress, concerns, and customised tips for supporting learning at home.",
  },
  {
    emoji: "🏆",
    title: "Family Achievement Day",
    desc: "Termly events where students present their work to parents. Builds confidence and makes families a proud part of every achievement.",
  },
  {
    emoji: "📖",
    title: "Reading Together Programme",
    desc: "A 20-minute nightly reading ritual. Parents receive a weekly reading guide aligned with the classroom theme.",
  },
];

export default function SchoolPrimary() {
  return (
    <section id="primary" className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl">

        {/* ── Classes 1-5 section label ── */}
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
          <span className="flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 dark:bg-amber-950/40">
            <span className="text-sm">🌟</span>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
              Primary School · Classes 1 – 5
            </span>
          </span>
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            Big ideas for{" "}
            <span className="text-amber-500">little minds</span> 🧠
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Our primary programme is designed around children's natural
            curiosity. Every class has a clear focus, rich activities, and a
            warm teacher who knows every student by name.
          </p>
        </div>

        {/* grade cards */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {grades.map((g) => (
            <GradeCard key={g.grade} grade={g} />
          ))}
        </div>

        {/* daily routine */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 p-8">
          <p className="text-xs font-black uppercase tracking-widest text-amber-100">
            A typical school day
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { time: "8:00 AM", activity: "Morning assembly & prayer" },
              { time: "9:00 AM", activity: "Core subject classes" },
              { time: "12:30 PM", activity: "Lunch & free play" },
              { time: "1:30 PM", activity: "Activity / art / sports" },
              { time: "3:00 PM", activity: "Revision & homework help" },
              { time: "4:00 PM", activity: "Story / reading time" },
              { time: "4:30 PM", activity: "Home time 🏠" },
            ].map(({ time, activity }) => (
              <div
                key={time}
                className="flex items-center gap-3 rounded-2xl bg-white/20 px-4 py-3"
              >
                <span className="text-xs font-black text-white/70 w-14 shrink-0">{time}</span>
                <span className="text-xs font-semibold text-white">{activity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Parent involvement ── */}
        <div className="mt-20">
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
            <span className="flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 dark:bg-emerald-950/40">
              <span className="text-sm">👨‍👩‍👧‍👦</span>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                Parents as Partners
              </span>
            </span>
            <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
          </div>

          <div className="mt-8 max-w-2xl">
            <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
              Learning doesn't stop{" "}
              <span className="text-emerald-600 dark:text-emerald-400">at the school gate</span>
            </h2>
            <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
              We believe parents are the first teachers. Every programme at
              Ignite School is designed with parents as active partners in
              their child's growth.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {parentActivities.map(({ emoji, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 rounded-3xl bg-neutral-50 p-6 dark:bg-neutral-900"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm dark:bg-neutral-800">
                  {emoji}
                </div>
                <div>
                  <p className="font-bold text-neutral-950 dark:text-white">{title}</p>
                  <p className="mt-1.5 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
