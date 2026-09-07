const grades = [
    {
      grade: "Class 6",
      emoji: "📚",
      color: "sky",
      focus: "Foundation in Core Subjects",
      activities: [
        "Advanced English grammar",
        "Integers & algebra basics",
        "General science experiments",
        "Computer fundamentals"
      ],
    },
    {
      grade: "Class 7",
      emoji: "🧮",
      color: "violet",
      focus: "Concept Building",
      activities: [
        "Essay & creative writing",
        "Algebra & geometry",
        "Physics and biology basics",
        "Coding & logical reasoning"
      ],
    },
    {
      grade: "Class 8",
      emoji: "💡",
      color: "emerald",
      focus: "Analytical Thinking",
      activities: [
        "Advanced mathematics",
        "Chemistry practical concepts",
        "History & civics discussions",
        "STEM projects"
      ],
    },
    {
      grade: "Class 9",
      emoji: "🎯",
      color: "amber",
      focus: "Board Exam Preparation",
      activities: [
        "Physics, Chemistry & Biology",
        "Algebra, Trigonometry & Statistics",
        "Social science projects",
        "Weekly mock tests"
      ],
    },
    {
      grade: "Class 10",
      emoji: "🏆",
      color: "rose",
      focus: "SSC Board Excellence",
      activities: [
        "Complete board exam revision",
        "Sample papers & mock exams",
        "Time management strategies",
        "Career guidance & counseling"
      ],
    },
  ]

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
    <div data-aos="fade-up" className={`flex flex-col gap-4 rounded-3xl border p-6 ${c.bg} ${c.border}`}>
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
    emoji: "📊",
    title: "Academic Progress Tracking",
    desc: "Parents receive monthly academic reports with subject-wise performance, attendance, and personalized teacher feedback to monitor continuous improvement.",
  },
  {
    emoji: "📱",
    title: "Parent Portal & App",
    desc: "Instant updates on attendance, assignments, exam schedules, circulars, and important school announcements through our dedicated parent app.",
  },
  {
    emoji: "📝",
    title: "Board Exam Preparation",
    desc: "Regular unit tests, pre-final exams, and detailed performance analysis shared with parents to help students stay on track for board success.",
  },
  {
    emoji: "👨‍🏫",
    title: "Parent–Teacher Conferences",
    desc: "Scheduled meetings to discuss academic progress, learning strategies, behavioral development, and personalized guidance for every student.",
  },
  {
    emoji: "🎯",
    title: "Career Guidance Sessions",
    desc: "Interactive sessions for students and parents on career opportunities, subject selection, higher education pathways, and future planning.",
  },
  {
    emoji: "🏅",
    title: "Achievement & Recognition",
    desc: "Parents are invited to celebrate academic excellence, sports achievements, cultural accomplishments, and leadership awards during school events.",
  },
];

export default function SchoolPrimary() {
  return (
    <section id="primary" className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl">

        {/* ── Classes 1-5 section label ── */}
        <div data-aos="zoom-in" className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
          <span className="flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 dark:bg-amber-950/40">
            <span className="text-sm">🌟</span>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
              Secondary School · Classes 6 – 10
            </span>
          </span>
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 data-aos="fade-up" className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            Big ideas for{" "}
            <span className="text-amber-500">Future Leaders</span> 🎯
          </h2>
          <p data-aos="fade-up" className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Our primary programme is designed around children's natural
            curiosity. Every class has a clear focus, rich activities, and a
            warm teacher who knows every student by name.
          </p>
        </div>

        {/* grade cards */}
        <div data-aos="fade-in" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {grades.map((g) => (
            <GradeCard key={g.grade} grade={g} />
          ))}
        </div>

        {/* daily routine */}
        <div data-aos="fade-up" className="mt-10 overflow-hidden rounded-3xl bg-linear-to-br from-amber-400 to-orange-500 p-8">
          <p data-aos="fade-up" className="text-xs font-black uppercase tracking-widest text-amber-100">
            A typical school day
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
                { time: "8:00 AM", activity: "Morning assembly & motivational session" },
                { time: "8:30 AM", activity: "Mathematics & Science classes" },
                { time: "10:30 AM", activity: "Short break" },
                { time: "10:45 AM", activity: "Languages & Social Studies" },
                { time: "12:30 PM", activity: "Lunch break" },
                { time: "1:15 PM", activity: "Computer Lab / Science Practical" },
                { time: "2:15 PM", activity: "Sports, Yoga & Physical Education" },
                { time: "3:00 PM", activity: "Revision, doubt clarification & assessments" },
                { time: "4:00 PM", activity: "Clubs / Career guidance / Co-curricular activities" },
                { time: "4:30 PM", activity: "Dispersal 🏠" },
            ].map(({ time, activity }) => (
              <div
                data-aos="fade-up"
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
        <div data-aos="fade-in" className="mt-20">
          <div data-aos="fade-up" className="flex items-center gap-3">
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
            <h2 data-aos="fade-up" className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
              Learning doesn't stop{" "}
              <span className="text-emerald-600 dark:text-emerald-400">at the school gate</span>
            </h2>
            <p data-aos="fade-up" className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
              We believe parents are the first teachers. Every programme at
              Ignite School is designed with parents as active partners in
              their child's growth.
            </p>
          </div>

          <div data-aos="fade-up" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {parentActivities.map(({ emoji, title, desc }) => (
              <div
                data-aos="fade-up"
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
