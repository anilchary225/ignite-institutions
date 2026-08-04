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
      <section className="bg-neutral-100 px-6 py-16 dark:bg-neutral-900 sm:px-12">
        <div className="mx-auto max-w-5xl rounded-[28px] border-4 border-orange-500 bg-white p-8 dark:bg-neutral-950 sm:p-12">
          <div className="grid gap-8 sm:grid-cols-[1fr_320px] sm:items-center">
            <div>
              <h3 className="text-2xl font-bold text-emerald-600 sm:text-3xl">
                {name}
              </h3>
              <p className="mt-1 font-semibold text-neutral-900 dark:text-white">
                {role}
              </p>
              <div className="mt-4 space-y-4 text-neutral-700 dark:text-neutral-300">
                {paragraphs.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
  
            <img
              src={photo}
              alt={name}
              className="w-full rounded-2xl object-cover shadow-md"
            />
          </div>
        </div>
      </section>
    );
  }