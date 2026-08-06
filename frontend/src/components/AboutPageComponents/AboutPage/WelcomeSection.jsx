export default function WelcomeSection({
    image = "/images/about/classroom-students.jpg",
    heading = "Welcome to IGNITE JUNIOR COLLEGE",
    paragraphs = [
      "At IGNITE Junior College, we believe education is more than just preparing for exams — it's about shaping confident, capable, and compassionate individuals. For over 8 years, we have been a trusted name in IIT-JEE and NEET coaching, guiding students not only to excel academically but also to discover their true potential.",
      "We understand that every parent aspires to give their child the best future. That's why we've built a learning ecosystem where academic excellence meets holistic growth. Our focus goes beyond textbooks and tests, nurturing values, skills, and resilience that last a lifetime.",
    ],
  }) {
    return (
      <section className="px-4 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl shadow-md">
            <img
              src={image}
              alt="Students at IGNITE Junior College"
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>

          <div>
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-3">
              About Us
            </span>
            <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl leading-tight">
              {heading}
            </h2>
            <div className="mt-4 space-y-4 text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {["8+ Years", "IIT-JEE", "NEET", "EAPCET"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
