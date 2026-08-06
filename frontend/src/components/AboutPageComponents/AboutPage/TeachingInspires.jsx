export default function TeachingInspires({
    heading = "Teaching That Inspires",
    quotes = [
      { text: "The best teachers show where to look, not what to see.", author: "Dan Rather" },
      {
        text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin",
      },
    ],
  }) {
    return (
      <section className="px-4 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-3">
            Our Philosophy
          </span>
          <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
            {heading}
          </h2>
          <div className="mt-2 mx-auto h-0.5 w-10 bg-orange-500 rounded" />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 text-left border ${
                  index === 0
                    ? "bg-orange-50 border-orange-200 dark:bg-orange-500/10 dark:border-orange-500/20"
                    : "bg-blue-50 border-blue-200 dark:bg-blue-500/10 dark:border-blue-500/20"
                }`}
              >
                <span className={`text-4xl font-black leading-none ${index === 0 ? "text-orange-200 dark:text-orange-500/30" : "text-blue-200 dark:text-blue-500/30"}`}>"</span>
                <p className="mt-1 text-sm italic text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {quote.text}
                </p>
                <p className={`mt-3 text-xs font-bold uppercase tracking-wide ${index === 0 ? "text-orange-600 dark:text-orange-400" : "text-blue-600 dark:text-blue-400"}`}>
                  — {quote.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
