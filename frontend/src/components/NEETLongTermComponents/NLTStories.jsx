import { Quote, Trophy } from "lucide-react";

const stories = [
  {
    name: "Ishaan Sharma",
    rank: "AIR 18",
    exam: "NEET 2024",
    college: "AIIMS New Delhi — MBBS",
    batch: "2022–24",
    avatar: "https://placehold.co/240x240/059669/ffffff?text=IS",
    quote:
      "Biology used to feel like memorisation to me. Ignite's teachers completely changed that — they taught me to understand why systems work the way they do. By Year 2 I was answering questions I'd never seen before just by reasoning through them.",
    color: "emerald",
  },
  {
    name: "Priya Menon",
    rank: "AIR 64",
    exam: "NEET 2024",
    college: "JIPMER Puducherry — MBBS",
    batch: "2022–24",
    avatar: "https://placehold.co/240x240/16a34a/ffffff?text=PM",
    quote:
      "The weekly mock tests from Year 1 itself were what made the difference. By the time NEET day arrived, I had already written the paper so many times in my head. I wasn't nervous — I was ready.",
    color: "green",
  },
  {
    name: "Ayaan Siddiqui",
    rank: "AIR 132",
    exam: "NEET 2024",
    college: "AIIMS Hyderabad — MBBS",
    batch: "2022–24",
    avatar: "https://placehold.co/240x240/0d9488/ffffff?text=AS",
    quote:
      "My mentor at Ignite rebuilt my Chemistry study plan halfway through Year 1 when she noticed I was struggling with Organic. That kind of individual attention in a coaching institute is rare — it's what separates Ignite.",
    color: "teal",
  },
  {
    name: "Sneha Nair",
    rank: "AIR 291",
    exam: "NEET 2024",
    college: "Maulana Azad Medical College — MBBS",
    batch: "2022–24",
    avatar: "https://placehold.co/240x240/047857/ffffff?text=SN",
    quote:
      "I scored 89% in boards and AIR 291 in NEET in the same year. At Ignite they taught me that these aren't competing goals — the same conceptual clarity that gets you board marks wins NEET marks too.",
    color: "darkgreen",
  },
];

const colorMap = {
  emerald:   { ring: "ring-emerald-300 dark:ring-emerald-700",  badge: "bg-emerald-600",  pill: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300" },
  green:     { ring: "ring-green-300 dark:ring-green-700",      badge: "bg-green-600",    pill: "bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-300" },
  teal:      { ring: "ring-teal-300 dark:ring-teal-700",        badge: "bg-teal-600",     pill: "bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300" },
  darkgreen: { ring: "ring-green-500 dark:ring-green-800",      badge: "bg-green-800",    pill: "bg-green-100 text-green-800 dark:bg-green-950/40 dark:text-green-300" },
};

export default function NLTStories() {
  return (
    <section className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl">

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 dark:bg-emerald-950/40">
            <Trophy size={14} className="text-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
              Inspiring Stories
            </span>
          </div>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="mx-auto mt-6 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            From Our Classrooms to AIIMS
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Every AIIMS rank has a story of discipline behind it. Here are four — in their own words.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {stories.map((s) => {
            const c = colorMap[s.color];
            return (
              <div
                key={s.name}
                className="group relative flex flex-col gap-5 rounded-3xl bg-neutral-50 p-7 shadow-sm ring-1 ring-neutral-100 transition hover:shadow-md dark:bg-neutral-900 dark:ring-neutral-800"
              >
                <Quote size={28} className="text-neutral-200 dark:text-neutral-800" />

                <p className="flex-1 text-sm leading-7 text-neutral-600 dark:text-neutral-400 italic">
                  "{s.quote}"
                </p>

                <div className="flex items-center gap-4 border-t border-neutral-100 pt-5 dark:border-neutral-800">
                  <div className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ${c.ring}`}>
                    <img src={s.avatar} alt={s.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className={`absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full text-[8px] font-black text-white ${c.badge}`}>
                      #
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-extrabold text-neutral-950 dark:text-white">{s.name}</p>
                    <p className="mt-0.5 text-xs text-neutral-500">{s.exam} · Batch {s.batch}</p>
                    <span className={`mt-1.5 inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${c.pill}`}>
                      {s.college}
                    </span>
                  </div>
                  <div className={`shrink-0 rounded-xl px-3 py-2 text-center text-white ${c.badge}`}>
                    <p className="text-xs font-black leading-none">{s.rank}</p>
                    <p className="mt-0.5 text-[9px] text-white/70">AIR</p>
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
