import { ArrowRight, Leaf, Clock, Star, Users } from "lucide-react";

const rankerImages = [
  { name: "Ishaan Sharma",  rank: "AIR 18",   exam: "NEET 2024",  score: "710/720", college: "AIIMS New Delhi — MBBS",   avatar: "https://placehold.co/300x360/059669/ffffff?text=AIR+18",  color: "emerald" },
  { name: "Priya Menon",    rank: "AIR 64",   exam: "NEET 2024",  score: "705/720", college: "JIPMER — MBBS",             avatar: "https://placehold.co/300x360/16a34a/ffffff?text=AIR+64",  color: "green"   },
  { name: "Ayaan Siddiqui", rank: "AIR 132",  exam: "NEET 2024",  score: "698/720", college: "AIIMS Hyderabad — MBBS",   avatar: "https://placehold.co/300x360/15803d/ffffff?text=AIR+132", color: "darkgreen"},
];

const colorMap = {
  emerald:   "bg-emerald-600",
  green:     "bg-green-600",
  darkgreen: "bg-green-800",
};

export default function NLTHero() {
  return (
    <section className="overflow-hidden bg-white px-6 pt-16 pb-0 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* ── LEFT CONTENT ── */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 dark:bg-emerald-950/40">
              <Leaf size={14} className="text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-black uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                NEET · Long-Term Programme
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-neutral-950 sm:text-5xl dark:text-white">
              2 Years.{" "}
              <span className="text-emerald-600 dark:text-emerald-400">One Mission.</span>{" "}
              Your AIIMS Seat.
            </h1>

            <p className="mt-5 text-base leading-7 text-neutral-600 dark:text-neutral-400">
              Ignite's NEET Long-Term programme is designed for students who want to begin early,
              master Biology, Physics, and Chemistry from the ground up, and emerge as
              top AIIMS & NEET rankers — not just qualifiers.
            </p>

            {/* stat pills */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { value: "2 Years",   label: "Integrated Coaching",  icon: Clock },
                { value: "AIR 18",    label: "Best Rank 2024",        icon: Star  },
                { value: "≤ 25",      label: "Students / Batch",      icon: Users },
              ].map(({ value, label, icon: Icon }) => (
                <div key={label} className="rounded-2xl bg-neutral-50 px-4 py-4 dark:bg-neutral-900">
                  <Icon size={14} className="mb-1.5 text-emerald-500" />
                  <p className="text-xl font-black text-emerald-700 dark:text-emerald-400">{value}</p>
                  <p className="mt-0.5 text-xs font-semibold text-neutral-500">{label}</p>
                </div>
              ))}
            </div>

            {/* highlights */}
            <ul className="mt-7 space-y-2">
              {[
                "Integrated Board + NEET curriculum aligned from Day 1",
                "Biology taught by AIIMS-qualified faculty",
                "Weekly NEET-pattern mock tests from Year 1 itself",
                "Individual performance tracking with monthly analytics",
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-black text-white transition hover:bg-emerald-700"
              >
                Apply Now <ArrowRight size={16} />
              </a>
              <a
                href="#course"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-3.5 text-sm font-bold text-neutral-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
              >
                Explore Programme
              </a>
            </div>
          </div>

          {/* ── RIGHT — stacked rank cards ── */}
          <div className="relative flex flex-col gap-4">
            {rankerImages.map((r, i) => (
              <div
                key={r.name}
                className={`flex items-center gap-4 overflow-hidden rounded-2xl bg-neutral-50 shadow-sm ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800 ${i === 1 ? "ml-6" : i === 2 ? "ml-2" : ""}`}
              >
                <img src={r.avatar} alt={r.name} className="h-28 w-24 shrink-0 object-cover" />
                <div className="flex-1 py-4 pr-4">
                  <span className={`inline-block rounded-full px-3 py-0.5 text-xs font-black text-white ${colorMap[r.color]}`}>
                    {r.rank}
                  </span>
                  <p className="mt-2 text-base font-extrabold text-neutral-950 dark:text-white">{r.name}</p>
                  <p className="text-xs text-neutral-500">{r.exam} · {r.score}</p>
                  <p className="mt-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">{r.college}</p>
                </div>
              </div>
            ))}

            {/* floating badge */}
            <div className="absolute -right-3 -top-3 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-emerald-500 shadow-lg">
              <p className="text-lg font-black text-white leading-none">700+</p>
              <p className="text-[9px] font-bold text-white/90 text-center leading-tight">NEET Qualifiers</p>
            </div>

            {/* admission card */}
            <div className="mt-2 rounded-2xl bg-emerald-600 p-5 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-200">Admissions Open · 2025–27 Batch</p>
              <p className="mt-1 text-lg font-extrabold">NEET Long-Term — 2 Year Track</p>
              <p className="mt-1 text-xs text-emerald-200">Limited seats · Hostel facility available</p>
              <a
                href="#apply"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-black text-emerald-700 transition hover:bg-emerald-50"
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
