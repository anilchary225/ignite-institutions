import { Trophy, Hash, BadgeCheck } from "lucide-react";
import { RESULTS_DATA } from "../../data_results/results_data";

const rankers = [
  { ...RESULTS_DATA[2026].JEE_ADVANCED[0], exam: "JEE Advanced 2026", category: "AIR", hallTicket: RESULTS_DATA[2026].JEE_ADVANCED[0].applicationNo, stream: "MPC", badge: "orange", avatar: RESULTS_DATA[2026].JEE_ADVANCED[0].image },
  { ...RESULTS_DATA[2026].NEET[0], exam: "NEET UG 2026", category: "AIR", rank: `AIR ${RESULTS_DATA[2026].NEET[0].rank}`, hallTicket: RESULTS_DATA[2026].NEET[0].applicationNo, stream: "BiPC", badge: "indigo", avatar: RESULTS_DATA[2026].NEET[0].image },
  { ...RESULTS_DATA[2026].JEE_MAINS[0], exam: "JEE Main 2026", category: "AIR", rank: `AIR ${RESULTS_DATA[2026].JEE_MAINS[0].rank}`, hallTicket: RESULTS_DATA[2026].JEE_MAINS[0].applicationNumber, stream: "MPC", badge: "sky", avatar: RESULTS_DATA[2026].JEE_MAINS[0].image },
  { ...RESULTS_DATA[2026].EAPCET[0], exam: "EAPCET 2026", category: "State Rank", rank: `Rank ${RESULTS_DATA[2026].EAPCET[0].rank}`, hallTicket: RESULTS_DATA[2026].EAPCET[0].hallTicket, stream: "MPC", badge: "emerald", avatar: RESULTS_DATA[2026].EAPCET[0].image },
  { ...RESULTS_DATA[2026].NEET[1], exam: "NEET UG 2026", category: "AIR", rank: `AIR ${RESULTS_DATA[2026].NEET[1].rank}`, hallTicket: RESULTS_DATA[2026].NEET[1].applicationNo, stream: "BiPC", badge: "rose", avatar: RESULTS_DATA[2026].NEET[1].image },
];

const badgeColors = {
  orange: {
    ring: "ring-orange-400 dark:ring-orange-500",
    badge: "bg-orange-600",
    nameBg: "from-orange-600 to-orange-800",
    pill: "bg-orange-100 text-orange-700 dark:bg-orange-950/50 dark:text-orange-300",
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
  const hasRank = ranker.rank !== undefined && ranker.rank !== null && !String(ranker.rank).includes("undefined");
  const resultValue = hasRank ? ranker.rank : ranker.marks || ranker.score || "Result available";
  const resultLabel = hasRank ? ranker.category : "Score";
  return (
    <div data-aos="fade-up" className="group relative flex flex-col justify-between items-center rounded-3xl bg-white px-6 py-8 text-center shadow-sm ring-1 ring-neutral-100 transition hover:shadow-lg dark:bg-neutral-900 dark:ring-neutral-800">
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
      <div className={`relative mt-2 h-42 w-32 overflow-hidden rounded-xl ring-4 ${c.ring}`}>
        {ranker.avatar ? <img src={ranker.avatar} alt={ranker.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" /> : <span className={`grid h-full w-full place-items-center bg-linear-to-br text-4xl font-black text-white ${c.nameBg}`}>{ranker.name.split(/\s+/).map((part) => part[0]).slice(0, 2).join("")}</span>}
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

      {/* rank - hero stat */}
      <div className={`mt-3 w-full rounded-2xl `}>
        <p className="text-2xl font-black text-black dark:text-white leading-none">{resultValue}</p>
        <p className="mt-0.5 text-xs font-semibold text-black dark:text-white/70">{resultLabel}</p>
        {ranker.percentile && (
          <p className="mt-1 text-xs text-black/60 dark:text-white/60">Percentile: {ranker.percentile}</p>
        )}
      </div>

      {/* hall ticket */}
      {/* <div className="mt-4 flex items-center gap-1.5 text-neutral-400 dark:text-neutral-600">
        <Hash size={12} />
        <span className="text-xs font-mono">{ranker.hallTicket}</span>
        <BadgeCheck size={12} className="text-emerald-500" />
      </div> */}
    </div>
  );
}

export default function JCRankers() {
  return (
    <section data-aos="fade-in" id="rankers" className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl">
        {/* header */}
        <div data-aos="zoom-in" className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <div className="flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 dark:bg-amber-950/40">
            <Trophy size={14} className="text-amber-600 dark:text-amber-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
              Top Rankers 2026
            </span>
          </div>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="mx-auto mt-8 max-w-2xl text-center">
          <h2 data-aos="fade-up" className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            Our students top the charts
          </h2>
          <p data-aos="fade-up" className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Year after year, Ignite students secure top All-India Ranks in IIT-JEE, NEET, and state-level exams.
          </p>
        </div>

        {/* ranker cards */}
        <div data-aos="fade-in" className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {rankers.map((ranker, i) => (
            <RankerCard key={ranker.hallTicket} ranker={ranker} rank={i + 1} />
          ))}
        </div>

        {/* <p className="mt-8 text-center text-xs text-neutral-400 dark:text-neutral-600">
          All ranks verified against official results. Hall ticket numbers shown for authenticity.
        </p> */}
      </div>
    </section>
  );
}
