import { Trophy, Hash, BadgeCheck } from "lucide-react";

const rankers = [
  {
    name: "Arjun Reddy",
    exam: "IIT JEE Advanced",
    rank: "AIR 47",
    category: "AIR",
    hallTicket: "2410001234",
    stream: "MPC",
    percentile: null,
    avatar: "https://placehold.co/200x200/7c3aed/ffffff?text=AR",
    badge: "violet",
  },
  {
    name: "Priya Sharma",
    exam: "NEET UG",
    rank: "AIR 312",
    category: "AIR",
    hallTicket: "2410005678",
    stream: "BiPC",
    percentile: "99.8",
    avatar: "https://placehold.co/200x200/4f46e5/ffffff?text=PS",
    badge: "indigo",
  },
  {
    name: "Karthik Naidu",
    exam: "IIT JEE Main",
    rank: "AIR 88",
    category: "AIR",
    hallTicket: "2410009012",
    stream: "MPC",
    percentile: "99.9",
    avatar: "https://placehold.co/200x200/0284c7/ffffff?text=KN",
    badge: "sky",
  },
  {
    name: "Sneha Patil",
    exam: "NEET UG",
    rank: "720 / 720",
    category: "Score",
    hallTicket: "2410003456",
    stream: "BiPC",
    percentile: "100",
    avatar: "https://placehold.co/200x200/059669/ffffff?text=SP",
    badge: "emerald",
  },
  {
    name: "Rahul Verma",
    exam: "EAPCET",
    rank: "State Rank 14",
    category: "State Rank",
    hallTicket: "2410007890",
    stream: "MPC",
    percentile: "99.7",
    avatar: "https://placehold.co/200x200/e11d48/ffffff?text=RV",
    badge: "rose",
  },
];

const badgeColors = {
  violet: {
    ring: "ring-violet-400 dark:ring-violet-500",
    badge: "bg-violet-600",
    nameBg: "from-violet-600 to-violet-800",
    pill: "bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300",
  },
  indigo: {
    ring: "ring-indigo-400 dark:ring-indigo-500",
    badge: "bg-indigo-600",
    nameBg: "from-indigo-600 to-indigo-800",
    pill: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300",
  },
  sky: {
    ring: "ring-sky-400 dark:ring-sky-500",
    badge: "bg-sky-500",
    nameBg: "from-sky-500 to-sky-700",
    pill: "bg-sky-100 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300",
  },
  emerald: {
    ring: "ring-emerald-400 dark:ring-emerald-500",
    badge: "bg-emerald-600",
    nameBg: "from-emerald-600 to-emerald-800",
    pill: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
  },
  rose: {
    ring: "ring-rose-400 dark:ring-rose-500",
    badge: "bg-rose-600",
    nameBg: "from-rose-600 to-rose-800",
    pill: "bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",
  },
};

function RankerCard({ ranker, rank: position }) {
  const c = badgeColors[ranker.badge];
  return (
    <div className="group relative flex flex-col items-center rounded-3xl bg-white px-6 py-8 text-center shadow-sm ring-1 ring-neutral-100 transition hover:shadow-lg dark:bg-neutral-900 dark:ring-neutral-800">
      {/* position badge */}
      {position <= 3 && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <div
            className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-black text-white shadow-md ${c.badge}`}
          >
            {position}
          </div>
        </div>
      )}

      {/* avatar */}
      <div className={`relative mt-2 h-24 w-24 overflow-hidden rounded-full ring-4 ${c.ring}`}>
        <img
          src={ranker.avatar}
          alt={ranker.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* name + stream */}
      <h3 className="mt-4 text-lg font-extrabold text-neutral-950 dark:text-white">
        {ranker.name}
      </h3>
      <span className={`mt-1.5 rounded-full px-3 py-0.5 text-xs font-bold ${c.pill}`}>
        {ranker.stream}
      </span>

      {/* exam */}
      <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
        {ranker.exam}
      </p>

      {/* rank — hero stat */}
      <div className={`mt-3 w-full rounded-2xl bg-gradient-to-br px-4 py-4 ${c.nameBg}`}>
        <p className="text-2xl font-black text-white leading-none">{ranker.rank}</p>
        <p className="mt-0.5 text-xs font-semibold text-white/70">{ranker.category}</p>
        {ranker.percentile && (
          <p className="mt-1 text-xs text-white/60">Percentile: {ranker.percentile}</p>
        )}
      </div>

      {/* hall ticket */}
      <div className="mt-4 flex items-center gap-1.5 text-neutral-400 dark:text-neutral-600">
        <Hash size={12} />
        <span className="text-xs font-mono">{ranker.hallTicket}</span>
        <BadgeCheck size={12} className="text-emerald-500" />
      </div>
    </div>
  );
}

export default function JCRankers() {
  return (
    <section id="rankers" className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl">
        {/* header */}
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <div className="flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 dark:bg-amber-950/40">
            <Trophy size={14} className="text-amber-600 dark:text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
              Top Rankers 2024
            </span>
          </div>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="mx-auto mt-8 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            Our students top the charts
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Year after year, Ignite students secure top All-India Ranks in IIT
            JEE, NEET, and state-level exams.
          </p>
        </div>

        {/* ranker cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {rankers.map((ranker, i) => (
            <RankerCard key={ranker.hallTicket} ranker={ranker} rank={i + 1} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-neutral-400 dark:text-neutral-600">
          All ranks verified against official results. Hall ticket numbers shown for authenticity.
        </p>
      </div>
    </section>
  );
}
