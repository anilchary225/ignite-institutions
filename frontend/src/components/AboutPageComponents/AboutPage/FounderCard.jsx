export default function FounderCard({
    name = "Mr. K. Ramesh",
    role = "Founding Director & Chemistry Faculty",
    photo = "/images/about/founder.jpg",
    paragraphs = [
      "Founder-Chairman and Senior Faculty in Chemistry. He has over two decades of teaching excellence and leadership in shaping young minds. With a strong vision for quality education, he has mentored countless students who went on to become IITians, NITians, and medical professionals.",
      "Known for his balanced and student-friendly approach, Mr. Ramesh believes in stress-free, holistic learning that goes beyond academics. His commitment to nurturing both intellectual and personal growth continues to inspire students and educators alike.",
    ],
  }) {
    return (
      <section className="px-4 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-2">
              Leadership
            </span>
            <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
              Meet Our Founder
            </h2>
          </div>

          <div className="rounded-2xl border-2 border-orange-200 dark:border-orange-500/30 bg-white dark:bg-neutral-950 p-6 sm:p-10 shadow-sm">
            <div className="grid gap-8 sm:grid-cols-[1fr_280px] sm:items-center">
              <div>
                <h3 className="text-xl font-bold text-orange-600 sm:text-2xl">
                  {name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                  {role}
                </p>
                <div className="mt-4 h-0.5 w-12 bg-orange-500 rounded" />
                <div className="mt-4 space-y-3 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                  {paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-xl shadow-md border-4 border-orange-100 dark:border-orange-500/20">
                <img
                  src={photo}
                  alt={name}
                  className="w-full h-64 sm:h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
