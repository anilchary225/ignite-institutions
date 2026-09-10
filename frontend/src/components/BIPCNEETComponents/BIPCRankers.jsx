import { Trophy, Hash, BadgeCheck, Stethoscope } from "lucide-react";
import { RESULTS_DATA } from "../../data_results/results_data";

const rankerColors = ["emerald", "indigo", "teal", "sky", "violet"];
const rankers = RESULTS_DATA[2026].NEET.slice(0, 5).map((student, index) => ({
  name: student.name,
  score: student.marks,
  rank: "NEET 2026",
  hall: student.applicationNo || student.applicationNumber || "Verified result",
  college: "Ignite BiPC",
  avatar: student.image,
  color: rankerColors[index],
}));

const colorMap = {
  emerald: { ring: "ring-emerald-400", grad: "from-emerald-600 to-teal-700",   pill: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300", num: "bg-emerald-600" },
  indigo:  { ring: "ring-indigo-400",  grad: "from-indigo-600 to-indigo-800",  pill: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300",   num: "bg-indigo-600" },
  teal:    { ring: "ring-teal-400",    grad: "from-teal-600 to-teal-800",      pill: "bg-teal-100 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300",           num: "bg-teal-600" },
  sky:     { ring: "ring-sky-400",     grad: "from-sky-500 to-sky-700",        pill: "bg-sky-100 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300",               num: "bg-sky-500" },
  violet:  { ring: "ring-violet-400",  grad: "from-violet-600 to-violet-800",  pill: "bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300",   num: "bg-violet-600" },
};

function RankerCard({ r, pos }) {
  const c = colorMap[r.color];
  return (
    <div data-aos="zoom-in" className="group relative flex flex-col items-center rounded-3xl bg-white px-6 py-8 text-center shadow-sm ring-1 ring-neutral-100 transition hover:shadow-lg dark:bg-neutral-900 dark:ring-neutral-800">
      {pos <= 3 && (
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full text-xs font-black text-white shadow-md ${c.num}`}>
          {pos}
        </div>
      )}
      <div className={`relative mt-2 h-42 w-32 overflow-hidden rounded-2xl ring-4 ${c.ring}`}>
        {r.avatar ? <img src={r.avatar} alt={r.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" /> : <span className={`grid h-full w-full place-items-center bg-linear-to-br text-4xl font-black text-white ${c.grad}`}>{r.name.split(/\s+/).map((part) => part[0]).slice(0, 2).join("")}</span>}
      </div>
      <h3 className="mt-4 text-base font-extrabold text-neutral-950 dark:text-white">{r.name}</h3>
      <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mt-0.5">NEET UG 2026</p>
      <div className={`mt-4 w-full rounded-2xl bg-linear-to-br px-4 py-4 `}>
        <p className="text-xl font-black text-black dark:text-white">{r.score}</p>
        <p className="text-xs text-black/70 dar:text-white/70 mt-0.5">{r.rank}</p>
      </div>
      <span className={`mt-3 rounded-full px-3 py-1 text-xs font-bold leading-tight ${c.pill}`}>{r.college}</span>
      <div className="mt-3 flex items-center gap-1.5 text-neutral-400">
        <Hash size={11} /><span className="font-mono text-xs">{r.hall}</span><BadgeCheck size={12} className="text-emerald-500" />
      </div>
    </div>
  );
}

export default function BIPCRankers() {
  return (
    <section id="rankers" className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl">
        <div data-aos="zoom-in" className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 dark:bg-emerald-950/40">
            <Trophy size={14} className="text-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">Top NEET Rankers 2026</span>
          </div>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>
        <div className="mx-auto mt-8 max-w-2xl text-center">
          <h2 data-aos="fade-up" className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">Future doctors from Ignite</h2>
          <p data-aos="fade-up" className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">Our BiPC students consistently crack NEET with top scores and secure seats at India's premier medical colleges.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {rankers.map((r, i) => <RankerCard  key={r.hall} r={r} pos={i + 1} />)}
        </div>
        <p data-aos="fade-up" className="mt-6 text-center text-xs text-neutral-400">Ranks and scores verified against official NTA NEET results.</p>
      </div>
    </section>
  );
}
