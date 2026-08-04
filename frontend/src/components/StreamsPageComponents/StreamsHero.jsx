export default function StreamsHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-0 pt-20 dark:bg-neutral-950">
      {/* background accent blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-100 blur-3xl dark:bg-violet-950/40" />
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-50 blur-2xl dark:bg-indigo-950/30" />

      <div className="relative mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
          Ignite — Programs & Streams
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-neutral-950 sm:text-5xl dark:text-white">
          Every learner has a path.{" "}
          <span className="text-violet-600 dark:text-violet-400">
            We build the right one.
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
          From nursery to competitive exam success — Ignite offers structured
          academic journeys for school students, junior college aspirants, and
          serious entrance exam candidates.
        </p>

        {/* stream tabs / quick links */}
        <div className="mt-10 flex flex-wrap gap-3">
          {[
            { label: "Junior College (Inter)", href: "#inter", color: "violet" },
            { label: "School (Nursery–10)", href: "#school", color: "indigo" },
            { label: "Test Prep", href: "#testprep", color: "emerald" },
          ].map(({ label, href, color }) => (
            <a
              key={href}
              href={href}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition
                ${
                  color === "violet"
                    ? "border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-600 hover:text-white dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-300 dark:hover:bg-violet-600 dark:hover:text-white"
                    : color === "indigo"
                    ? "border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-600 hover:text-white dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300 dark:hover:bg-indigo-600 dark:hover:text-white"
                    : "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:bg-emerald-600 dark:hover:text-white"
                }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* divider */}
        <div className="mt-12 h-px w-full bg-neutral-100 dark:bg-neutral-800" />
      </div>
    </section>
  );
}
