import { Trophy, Hash, BadgeCheck } from "lucide-react";

const rankers = [
  { name: "Arjun Reddy",    rank: "AIR 47",   exam: "IIT JEE Advanced", hall: "2410001234", score: "312/360", college: "IIT Bombay — CS", avatar: "https://placehold.co/200x200/7c3aed/ffffff?text=AR", color: "violet" },
  { name: "Priya Sharma",   rank: "AIR 112",  exam: "IIT JEE Advanced", hall: "2410005678", score: "298/360", college: "IIT Delhi — ECE",   avatar: "https://placehold.co/200x200/4f46e5/ffffff?text=PS", color: "indigo" },
  { name: "Karthik Naidu",  rank: "AIR 88",   exam: "IIT JEE Main",    hall: "2410009012", score: "99.9 %ile", college: "NIT Warangal — CS", avatar: "https://placehold.co/200x200/0284c7/ffffff?text=KN", color: "sky" },
  { name: "Sneha Patil",    rank: "AIR 203",  exam: "IIT JEE Advanced", hall: "2410003456", score: "289/360", college: "IIT Madras — Mech", avatar: "https://placehold.co/200x200/059669/ffffff?text=SP", color: "emerald" },
  { name: "Rahul Verma",    rank: "AIR 156",  exam: "IIT JEE Advanced", hall: "2410007890", score: "294/360", college: "IIT Kharagpur — EE", avatar: "https://placehold.co/200x200/e11d48/ffffff?text=RV", color: "rose" },
];

const colorMap = {
  violet:  { ring: "ring-violet-400", grad: "from-violet-600 to-violet-800", pill: "bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300", num: "bg-violet-600" },
  indigo:  { ring: "ring-indigo-400", grad: "from-indigo-600 to-indigo-800", pill: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300", num: "bg-indigo-600" },
  sky:     { ring: "ring-sky-400",    grad: "from-sky-500 to-sky-700",       pill: "bg-sky-100 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300",             num: "bg-sky-500" },
  emerald: { ring: "ring-emerald-400",grad: "from-emerald-600 to-emerald-800",pill:"bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",num:"bg-emerald-600"},
  rose:    { ring: "ring-rose-400",   grad: "from-rose-600 to-rose-800",     pill: "bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",         num: "bg-rose-600" },
};

function RankerCard({ r, pos }) {
  const c = colorMap[r.color];
  return (
    <div className="group relative flex flex-col items-center rounded-3xl bg-white px-6 py-8 text-center shadow-sm ring-1 ring-neutral-100 transition hover:shadow-lg dark:bg-neutral-900 dark:ring-neutral-800">
      {pos <= 3 && (
        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full text-xs font-black text-white shadow-md ${c.num}`}>
          {pos}
        </div>
      )}

      <div className={`relative mt-2 h-24 w-24 overflow-hidden rounded-full ring-4 ${c.ring}`}>
        <img src={r.avatar} alt={r.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
      </div>

      <h3 className="mt-4 text-lg font-extrabold text-neutral-950 dark:text-white">{r.name}</h3>

      <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-neutral-400">{r.exam}</p>

      <div className={`mt-4 w-full rounded-2xl bg-gradient-to-br px-4 py-4 ${c.grad}`}>
        <p className="text-2xl font-black text-white leading-none">{r.rank}</p>
        <p className="mt-0.5 text-xs text-white/70">Score: {r.score}</p>
      </div>

      <span className={`mt-3 rounded-full px-3 py-1 text-xs font-bold ${c.pill}`}>{r.college}</span>

      <div className="mt-3 flex items-center gap-1.5 text-neutral-400 dark:text-neutral-600">
        <Hash size={11} />
        <span className="font-mono text-xs">{r.hall}</span>
        <BadgeCheck size={12} className="text-emerald-500" />
      </div>
    </div>
  );
}

export default function MPCRankers() {
  return (
    <section id="rankers" className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <div className="flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 dark:bg-amber-950/40">
            <Trophy size={14} className="text-amber-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">Top IIT JEE Rankers 2024</span>
          </div>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="mx-auto mt-8 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">Our students top the IITs</h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">Every year, Ignite MPC students secure top All-India Ranks and seats at India's premier IITs and NITs.</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {rankers.map((r, i) => <RankerCard key={r.hall} r={r} pos={i + 1} />)}
        </div>
        <p className="mt-6 text-center text-xs text-neutral-400">All ranks verified against official JEE results. Hall ticket numbers shown for authenticity.</p>
      </div>
    </section>
  );
}
