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
      <section className="bg-indigo-100 px-6 py-16 dark:bg-neutral-900 sm:px-12">
        <div className="mx-auto flex flex-col max-w-6xl gap-10 items-center">
          <h2 className="text-4xl font-black leading-tight text-emerald-600 sm:text-5xl">
            {heading}
          </h2>
  
          <div className="space-y-5 flex flex-col text-center">
            {quotes.map((quote, index) => (
              <p
                key={index}
                className="text-lg italic text-neutral-800 dark:text-neutral-200"
              >
                "{quote.text}" — {quote.author}
              </p>
            ))}
          </div>
        </div>
      </section>
    );
  }