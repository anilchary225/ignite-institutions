import { ArrowRight, Flame, Award, Calendar, Zap } from "lucide-react";
import { RESULTS_DATA } from "../../data_results/results_data";

const rankerColors = ["from-amber-500 to-orange-600", "from-orange-500 to-red-500", "from-yellow-500 to-amber-600", "from-amber-600 to-yellow-500"];
const rankers = RESULTS_DATA[2026].JEE_MAINS.slice(0, 4).map((student, index) => ({
  name: student.name,
  rank: `AIR ${student.rank}`,
  score: "JEE Main 2026",
  exam: "JEE Main",
  college: "Ignite IIT JEE",
  color: rankerColors[index],
}));

export default function JSTHero() {
  return (
    <section className="overflow-hidden bg-white px-6 pt-16 pb-0 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_420px]">

          {/* ── LEFT CONTENT ── */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 dark:bg-amber-950/40">
              <Flame size={14} className="text-amber-600 dark:text-amber-400" />
              <span className="text-xs font-black uppercase tracking-widest text-amber-700 dark:text-amber-400">
                IIT JEE · Short-Term Intensive
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-neutral-950 sm:text-5xl dark:text-white">
              One Year.{" "}
              <span className="bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                Full Power.
              </span>{" "}
              IIT Guaranteed Focus.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
              Already in Class 12 or a dropper? Ignite's Short-Term Intensive condenses the
              most effective JEE preparation into a single high-impact year - with
              fast-track modules, daily mock tests, and elite mentorship.
            </p>

            {/* urgency pills */}
            <div className="mt-7 flex flex-wrap gap-3">
              {[
                { icon: Calendar, label: "12-Month Track",      sub: "Class 12 & Droppers" },
                { icon: Zap,      label: "Daily Mock Tests",     sub: "JEE-pattern papers" },
                { icon: Award,    label: "AIR 52",               sub: "Best rank 2024" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl bg-neutral-50 px-4 py-3 dark:bg-neutral-900">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 dark:bg-amber-950/40">
                    <Icon size={16} className="text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-amber-600 dark:text-amber-400">{label}</p>
                    <p className="text-xs text-neutral-500">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* highlights */}
            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              {[
                "Crash course + full syllabus coverage in structured phases",
                "Speed & accuracy drills focused on JEE exam temperament",
                "IIT-alumni mentors with individual attention sessions",
                "Proven result track - 400+ JEE qualifiers in 2024 alone",
              ].map(item => (
                <div key={item} className="flex items-start gap-2.5 rounded-xl bg-amber-50 px-4 py-3 text-sm text-neutral-700 dark:bg-amber-950/10 dark:text-neutral-300">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-200 dark:bg-amber-900">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#apply" className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-amber-500 to-orange-500 px-7 py-3.5 text-sm font-black text-white shadow-lg shadow-amber-200 transition hover:from-amber-600 hover:to-orange-600 dark:shadow-amber-900/30">
                Apply Now <ArrowRight size={16} />
              </a>
              <a href="#course" className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-3.5 text-sm font-bold text-neutral-700 transition hover:border-amber-300 hover:text-amber-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
                View Schedule
              </a>
            </div>
          </div>

          {/* ── RIGHT - mosaic rank grid ── */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              {rankers.map((r, i) => (
                <div
                  key={r.name}
                  className={`group relative overflow-hidden rounded-3xl bg-linear-to-br ${r.color} p-5 ${i === 0 ? "col-span-2" : ""}`}
                >
                  {/* shimmer */}
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/10" />
                  <div className="absolute -bottom-4 -left-4 h-14 w-14 rounded-full bg-black/10" />

                  <p className="relative text-2xl font-black text-white leading-none">{r.rank}</p>
                  <p className="relative mt-0.5 text-xs text-white/70">{r.score} · {r.exam}</p>
                  <p className="relative mt-3 text-sm font-extrabold text-white">{r.name}</p>
                  <p className="relative text-xs font-semibold text-white/80">{r.college}</p>
                </div>
              ))}
            </div>

            {/* floating badge */}
            <div className="absolute -right-4 -top-4 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-neutral-950 shadow-xl dark:bg-white">
              <p className="text-lg font-black text-white leading-none dark:text-neutral-950">400+</p>
              <p className="text-[9px] font-bold text-white/70 text-center leading-tight dark:text-neutral-500">2024 JEE Qualifiers</p>
            </div>

            {/* admission card */}
            <div className="mt-3 flex items-center justify-between rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 dark:border-amber-900/40 dark:bg-amber-950/20">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">Batch Starting Soon</p>
                <p className="mt-0.5 text-sm font-extrabold text-neutral-950 dark:text-white">Short-Term 2025 · Limited Seats</p>
              </div>
              <a href="#apply" className="shrink-0 rounded-xl bg-amber-500 px-4 py-2.5 text-xs font-black text-white transition hover:bg-amber-600">
                Reserve Seat
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
