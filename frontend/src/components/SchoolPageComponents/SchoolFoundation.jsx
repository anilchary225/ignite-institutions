import { Atom, FlaskConical, BookOpen, Target, Star, Clock, Users, Trophy } from "lucide-react";

const subjects = [
  { icon: "🔢", name: "Mathematics", note: "Problem solving & aptitude" },
  { icon: "⚛️", name: "Physics", note: "Concepts from scratch" },
  { icon: "🧪", name: "Chemistry", note: "Lab + theory integrated" },
  { icon: "🧬", name: "Biology", note: "NCERT-based deep study" },
];

const tracks = [
  {
    id: "iit",
    icon: Atom,
    color: "blue",
    exam: "IIT JEE Foundation",
    classes: "Class 6 – 10",
    tagline: "Start early, rank higher.",
    desc: "Our IIT Foundation track builds strong Maths and Science fundamentals from Class 6, so students enter Class 11 ahead of peers. We emphasise logical thinking, speed, and accuracy - the pillars of JEE success.",
    what: [
      "Weekly aptitude & reasoning practice",
      "Chapter-wise JEE-pattern MCQs",
      "Monthly full-length foundation tests",
      "Doubt-clearing sessions every week",
      "Performance report to parents after each test",
    ],
    milestones: [
      { class: "Class 6–7", focus: "Number theory, basic science, puzzles" },
      { class: "Class 8–9", focus: "Algebra, optics, chemical reactions" },
      { class: "Class 10", focus: "Pre-JEE syllabus + board excellence" },
    ],
  },
  {
    id: "neet",
    icon: FlaskConical,
    color: "indigo",
    exam: "NEET Foundation",
    classes: "Class 6 – 10",
    tagline: "Love for life sciences starts here.",
    desc: "Our NEET Foundation programme nurtures a deep interest in Biology, Physics, and Chemistry through experiments, stories, and structured practice. Students who start early have a massive advantage in NEET.",
    what: [
      "Diagram-based Biology learning",
      "NCERT-anchored Physics & Chemistry",
      "NEET-style question practice from Class 8",
      "Science Olympiad preparation included",
      "Visual notes and revision charts",
    ],
    milestones: [
      { class: "Class 6–7", focus: "Life science curiosity, basic chemistry" },
      { class: "Class 8–9", focus: "Cell biology, chemical bonding, mechanics" },
      { class: "Class 10", focus: "Pre-NEET syllabus + board excellence" },
    ],
  },
];

const extras = [
  { icon: Trophy, label: "NTSE Preparation", desc: "National Talent Search Exam coaching from Class 8" },
  { icon: Star, label: "Olympiad Coaching", desc: "Maths, Science & Cyber Olympiad training" },
  { icon: Target, label: "KVPY Orientation", desc: "Kishore Vaigyanik Protsahan Yojana awareness & prep" },
  { icon: BookOpen, label: "Board + Foundation", desc: "School board marks never sacrificed - both run together" },
];

const colorMap = {
  blue: {
    iconBg: "bg-blue-600",
    header: "from-blue-600 to-blue-800",
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300",
    milestone: "border-blue-200 dark:border-blue-900",
    milestoneClass: "text-blue-600 dark:text-blue-400",
    check: "text-blue-500",
    cta: "bg-blue-600 hover:bg-blue-700",
  },
  indigo: {
    iconBg: "bg-indigo-600",
    header: "from-indigo-600 to-indigo-800",
    badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300",
    milestone: "border-indigo-200 dark:border-indigo-900",
    milestoneClass: "text-indigo-600 dark:text-indigo-400",
    check: "text-indigo-500",
    cta: "bg-indigo-600 hover:bg-indigo-700",
  },
};

function TrackCard({ track }) {
  const c = colorMap[track.color];
  const Icon = track.icon;
  return (
    <div data-aos="fade-up" className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800">
      {/* card header linear */}
      <div className={`bg-linear-to-br px-7 py-7 ${c.header}`}>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20">
            <Icon size={20} className="text-white" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/70">
              {track.classes}
            </p>
            <h3 className="text-xl font-extrabold text-white">{track.exam}</h3>
          </div>
        </div>
        <p className="mt-3 text-sm font-semibold italic text-white/80">
          "{track.tagline}"
        </p>
      </div>

      <div className="px-7 py-6">
        <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-400">
          {track.desc}
        </p>

        {/* what we cover */}
        <p className="mt-5 text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
          What we cover
        </p>
        <ul className="mt-3 space-y-2">
          {track.what.map((w) => (
            <li key={w} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
              <span className={`mt-0.5 text-base leading-none ${c.check}`}>✓</span>
              {w}
            </li>
          ))}
        </ul>

        {/* class milestones */}
        <p className="mt-6 text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-600">
          Class-wise milestones
        </p>
        <div className="mt-3 space-y-2">
          {track.milestones.map((m) => (
            <div
              key={m.class}
              className={`flex items-start gap-3 rounded-xl border px-4 py-3 ${c.milestone} bg-neutral-50 dark:bg-neutral-950/50`}
            >
              <span className={`text-xs font-black ${c.milestoneClass} w-20 shrink-0 pt-0.5`}>
                {m.class}
              </span>
              <span className="text-xs text-neutral-600 dark:text-neutral-400">{m.focus}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SchoolFoundation() {
  return (
    <section id="foundation" className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl">
        {/* section label */}
        <div data-aos="fade-up" className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <span className="rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
            Classes 6 – 10 · Foundation
          </span>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 data-aos="fade-up" className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            IIT & NEET Foundation{" "}
            <span data-aos="fade-up" className="text-blue-600 dark:text-blue-400">
              from Class 6
            </span>
          </h2>
          <p data-aos="fade-up" className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Students who start preparing early have a decisive edge. Our
            foundation programme introduces competitive exam thinking in a
            fun, age-appropriate way - without overwhelming the child.
          </p>
        </div>

        {/* subjects covered strip */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {subjects.map(({ icon, name, note }) => (
            <div
              data-aos="zoom-in"
              key={name}
              className="flex items-center gap-3 rounded-2xl bg-white px-4 py-4 shadow-sm dark:bg-neutral-900"
            >
              <span className="text-2xl">{icon}</span>
              <div>
                <p className="text-sm font-bold text-neutral-950 dark:text-white">{name}</p>
                <p className="text-xs text-neutral-500">{note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* track cards */}
        <div data-aos="fade-up" className="mt-10 grid gap-6 md:grid-cols-2">
          {tracks.map((t) => (
            <TrackCard key={t.id} track={t} />
          ))}
        </div>

        {/* extras row */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {extras.map(({ icon: Icon, label, desc }) => (
            <div
              data-aos="zoom-in"
              key={label}
              className="flex gap-3 rounded-2xl bg-white p-5 shadow-sm dark:bg-neutral-900"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950/40">
                <Icon size={16} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-950 dark:text-white">{label}</p>
                <p className="mt-0.5 text-xs leading-5 text-neutral-500 dark:text-neutral-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
