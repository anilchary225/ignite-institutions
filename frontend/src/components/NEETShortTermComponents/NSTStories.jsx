import { HeartPulse } from "lucide-react";

const stories = [
  {
    name: "Riya Kapoor",
    rank: "AIR 31",
    exam: "NEET 2024",
    college: "AIIMS New Delhi — MBBS",
    batch: "2023–24 Short-Term",
    avatar: "https://placehold.co/180x180/0d9488/ffffff?text=RK",
    quote: "I was a dropper who had scored 630 the first time. I came to Ignite expecting a crash course — what I got was a complete transformation. The daily mock system forced me to confront every weak chapter. By Month 6, I was scoring 700+.",
    improvement: "630 → 715",
    improvementLabel: "Score jump in 12 months",
    color: "teal",
  },
  {
    name: "Dev Pillai",
    rank: "AIR 89",
    exam: "NEET 2024",
    college: "JIPMER Puducherry — MBBS",
    batch: "2023–24 Short-Term",
    avatar: "https://placehold.co/180x180/0891b2/ffffff?text=DP",
    quote: "Biology was my biggest fear — 90 marks in Botany and Zoology felt impossible to score fully. Ignite's faculty broke it down so methodically that I started getting 85+ regularly by Month 4. NCERT stopped feeling like a textbook and started feeling like a friend.",
    improvement: "68%ile → AIR 89",
    improvementLabel: "Percentile to AIIMS in 12 months",
    color: "cyan",
  },
  {
    name: "Sana Sheikh",
    rank: "AIR 176",
    exam: "NEET 2024",
    college: "AIIMS Hyderabad — MBBS",
    batch: "2023–24 Short-Term",
    avatar: "https://placehold.co/180x180/059669/ffffff?text=SS",
    quote: "Phase 3 broke and rebuilt me. Writing a full 720-mark paper every day sounds brutal — it is. But by Week 6 of that phase, exam day felt like just another Tuesday. That mental calmness is what you can't buy anywhere except through reps.",
    improvement: "580 → 701",
    improvementLabel: "Score in a single year",
    color: "emerald",
  },
];

const colorMap = {
  teal:    { bar: "bg-teal-500",    ring: "ring-teal-300 dark:ring-teal-700",    pill: "bg-teal-500",    text: "text-teal-600 dark:text-teal-400",    bg: "bg-teal-50 dark:bg-teal-950/10"    },
  cyan:    { bar: "bg-cyan-500",    ring: "ring-cyan-300 dark:ring-cyan-700",    pill: "bg-cyan-500",    text: "text-cyan-600 dark:text-cyan-400",    bg: "bg-cyan-50 dark:bg-cyan-950/10"    },
  emerald: { bar: "bg-emerald-500", ring: "ring-emerald-300 dark:ring-emerald-700", pill: "bg-emerald-500", text: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950/10" },
};

export default function NSTStories() {
  return (
    <section className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl">

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <div className="flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 dark:bg-teal-950/40">
            <HeartPulse size={13} className="text-teal-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">Inspiring Stories</span>
          </div>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="mx-auto mt-6 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">One Year, One White Coat</h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            They arrived with doubts. They left with AIIMS offers. In their own words.
          </p>
        </div>

        <div className="mt-12 space-y-5">
          {stories.map((s) => {
            const c = colorMap[s.color];
            return (
              <div key={s.name} className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-neutral-100 transition hover:shadow-md dark:bg-neutral-900 dark:ring-neutral-800">
                <div className={`h-1 w-full ${c.bar}`} />

                <div className="flex flex-col gap-6 p-7 sm:flex-row sm:items-center">
                  {/* avatar + rank */}
                  <div className="flex shrink-0 flex-col items-center gap-3">
                    <div className={`h-20 w-20 overflow-hidden rounded-2xl ring-4 ${c.ring}`}>
                      <img src={s.avatar} alt={s.name} className="h-full w-full object-cover" />
                    </div>
                    <div className={`rounded-xl px-3 py-1.5 text-center ${c.pill}`}>
                      <p className="text-sm font-black text-white leading-none">{s.rank}</p>
                      <p className="text-[9px] text-white/70">{s.exam.split(" ").slice(-1)[0]}</p>
                    </div>
                  </div>

                  {/* quote + detail */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-400 italic">"{s.quote}"</p>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <div>
                        <p className="text-sm font-extrabold text-neutral-950 dark:text-white">{s.name}</p>
                        <p className="text-xs text-neutral-500">{s.exam} · {s.batch}</p>
                      </div>
                      <span className={`rounded-full px-3 py-1 text-xs font-bold ${c.bg} ${c.text}`}>{s.college}</span>
                    </div>
                  </div>

                  {/* stat */}
                  <div className={`flex shrink-0 flex-col items-center justify-center rounded-2xl px-5 py-4 text-center ${c.bg}`}>
                    <p className={`text-xl font-black ${c.text}`}>{s.improvement}</p>
                    <p className="mt-0.5 max-w-[110px] text-center text-[10px] text-neutral-500 leading-tight">{s.improvementLabel}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
