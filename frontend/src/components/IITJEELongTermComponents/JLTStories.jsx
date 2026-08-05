import { Quote, Trophy } from "lucide-react";

const stories = [
  {
    name: "Aarav Mehta",
    rank: "AIR 23",
    exam: "IIT JEE Advanced 2024",
    college: "IIT Bombay — Computer Science",
    batch: "2022–24",
    avatar: "https://placehold.co/240x240/4f46e5/ffffff?text=AM",
    quote:
      "Ignite taught me that JEE is not about memorising — it's about thinking. The faculty here don't just solve problems for you; they teach you to build models in your head. By Year 2 I was actually enjoying Physics.",
    color: "indigo",
  },
  {
    name: "Diya Reddy",
    rank: "AIR 71",
    exam: "IIT JEE Advanced 2024",
    college: "IIT Delhi — Mathematics & Computing",
    batch: "2022–24",
    avatar: "https://placehold.co/240x240/7c3aed/ffffff?text=DR",
    quote:
      "I was a nervous student when I joined. Two years later, I walked into the exam hall feeling like I'd already written it a hundred times. The mock test discipline at Ignite is unmatched anywhere in Hyderabad.",
    color: "violet",
  },
  {
    name: "Rohan Nair",
    rank: "AIR 104",
    exam: "IIT JEE Advanced 2024",
    college: "IIT Madras — Computer Science",
    batch: "2022–24",
    avatar: "https://placehold.co/240x240/0284c7/ffffff?text=RN",
    quote:
      "The long-term programme gave me something crash courses never could: time. Time to struggle with a concept, fail, ask questions, and finally master it. That depth is what separates Ignite students.",
    color: "sky",
  },
  {
    name: "Sneha Patil",
    rank: "AIR 188",
    exam: "IIT JEE Advanced 2024",
    college: "IIT Kharagpur — Electrical Engineering",
    batch: "2022–24",
    avatar: "https://placehold.co/240x240/059669/ffffff?text=SP",
    quote:
      "Chemistry was my weakest subject. My Ignite mentor redesigned my study schedule halfway through Year 1 — that level of personalisation changed everything. I scored the highest in Chemistry in my entire batch.",
    color: "emerald",
  },
];

const colorMap = {
  indigo:  { ring: "ring-indigo-300 dark:ring-indigo-700",  badge: "bg-indigo-600",  pill: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300" },
  violet:  { ring: "ring-violet-300 dark:ring-violet-700",  badge: "bg-violet-600",  pill: "bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300" },
  sky:     { ring: "ring-sky-300 dark:ring-sky-700",        badge: "bg-sky-500",     pill: "bg-sky-50 text-sky-700 dark:bg-sky-950/40 dark:text-sky-300" },
  emerald: { ring: "ring-emerald-300 dark:ring-emerald-700",badge: "bg-emerald-600", pill: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300" },
};

export default function JLTStories() {
  return (
    <section className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl">

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <div className="flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 dark:bg-amber-950/40">
            <Trophy size={14} className="text-amber-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
              Inspiring Stories
            </span>
          </div>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="mx-auto mt-6 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            From Our Classroom to the IITs
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Every rank has a story behind it. Here are four of them — in their own words.
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
                {/* quote icon */}
                <Quote size={28} className="text-neutral-200 dark:text-neutral-800" />

                <p className="flex-1 text-sm leading-7 text-neutral-600 dark:text-neutral-400 italic">
                  "{s.quote}"
                </p>

                {/* profile row */}
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
