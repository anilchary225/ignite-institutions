import { ArrowRight, Zap, Clock, Users, Star } from "lucide-react";
import { RESULTS_DATA } from "../../data_results/results_data";

const rankerColors = ["indigo", "blue", "sky"];
const rankerImages = RESULTS_DATA[2026].JEE_ADVANCED.slice(0, 3).map((student, index) => ({
  name: student.name,
  rank: `AIR ${student.rank}`,
  exam: "JEE Advanced 2026",
  college: "Ignite IIT JEE",
  avatar: student.image,
  color: rankerColors[index],
}));

const colorMap = {
  indigo: "bg-indigo-600",
  blue: "bg-blue-600",
  sky:    "bg-sky-500",
};

export default function JLTHero() {
  return (
    <section className="overflow-hidden bg-white px-6 pt-16 pb-0 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* ── LEFT CONTENT ── */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 dark:bg-indigo-950/40">
              <Zap size={14} className="text-indigo-600 dark:text-indigo-400" />
              <span className="text-xs font-black uppercase tracking-widest text-indigo-700 dark:text-indigo-400">
                IIT JEE · Long-Term Programme
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-neutral-950 sm:text-5xl dark:text-white">
              2 Years.{" "}
              <span className="text-indigo-600 dark:text-indigo-400">One Goal.</span>{" "}
              Your IIT Seat.
            </h1>

            <p className="mt-5 text-base leading-7 text-neutral-600 dark:text-neutral-400">
              Ignite's IIT JEE Long-Term programme is built for students who want to start early,
              build deep conceptual mastery, and emerge as top rankers - not just qualifiers.
              Two full years of structured coaching, board integration, and mentorship.
            </p>

            {/* stat pills */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { value: "2 Years",  label: "Intensive Coaching", icon: Clock },
                { value: "AIR 23",   label: "Best Rank 2024",     icon: Star  },
                { value: "≤ 25",     label: "Students / Batch",   icon: Users },
              ].map(({ value, label, icon: Icon }) => (
                <div key={label} className="rounded-2xl bg-neutral-50 px-4 py-4 dark:bg-neutral-900">
                  <Icon size={14} className="mb-1.5 text-indigo-500" />
                  <p className="text-xl font-black text-indigo-700 dark:text-indigo-400">{value}</p>
                  <p className="mt-0.5 text-xs font-semibold text-neutral-500">{label}</p>
                </div>
              ))}
            </div>

            {/* highlights */}
            <ul className="mt-7 space-y-2">
              {[
                "Integrated Board + JEE curriculum from Day 1",
                "IIT/NIT alumni faculty with proven track record",
                "Weekly mock tests modelled on actual JEE pattern",
                "Personalised doubt sessions & performance tracking",
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-950/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-black text-white transition hover:bg-indigo-700"
              >
                Apply Now <ArrowRight size={16} />
              </a>
              <a
                href="#course"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-3.5 text-sm font-bold text-neutral-700 transition hover:border-indigo-300 hover:text-indigo-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
              >
                Explore Programme
              </a>
            </div>
          </div>

          {/* ── RIGHT - rank cards grid ── */}
          <div className="relative flex flex-col gap-4">
            {rankerImages.map((r, i) => (
              <div
                key={r.name}
                className={`flex items-center gap-4 overflow-hidden rounded-2xl bg-neutral-50 shadow-sm ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800 ${i === 1 ? "ml-6" : i === 2 ? "ml-2" : ""}`}
              >
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="h-28 w-24 shrink-0 object-cover"
                />
                <div className="flex-1 py-4 pr-4">
                  <span className={`inline-block rounded-full px-3 py-0.5 text-xs font-black text-white ${colorMap[r.color]}`}>
                    {r.rank}
                  </span>
                  <p className="mt-2 text-base font-extrabold text-neutral-950 dark:text-white">{r.name}</p>
                  <p className="text-xs text-neutral-500">{r.exam}</p>
                  <p className="mt-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400">{r.college}</p>
                </div>
              </div>
            ))}

            {/* floating badge */}
            <div className="absolute -right-3 -top-3 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-amber-400 shadow-lg">
              <p className="text-lg font-black text-white leading-none">600+</p>
              <p className="text-[9px] font-bold text-white/90 text-center leading-tight">IIT Selections</p>
            </div>

            <div className="mt-2 rounded-2xl bg-indigo-600 p-5 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-200">Admissions Open · 2025–27 Batch</p>
              <p className="mt-1 text-lg font-extrabold">IIT JEE Long-Term - 2 Year Track</p>
              <p className="mt-1 text-xs text-indigo-200">Limited seats · Hostel facility available</p>
              <a
                href="#apply"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-black text-indigo-700 transition hover:bg-amber-400 hover:text-white"
              >
                Secure Your Seat <ArrowRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
