export default function WelcomeSection({
    image = "/images/about/classroom-students.jpg",
    heading = "Welcome to IGNITE JUNIOR COLLEGE",
    paragraphs = [
      "At IGNITE Junior College, we believe education is more than just preparing for exams — it's about shaping confident, capable, and compassionate individuals. For over 8 years, we have been a trusted name in IIT-JEE and NEET coaching, guiding students not only to excel academically but also to discover their true potential.",
      "We understand that every parent aspires to give their child the best future. That's why we've built a learning ecosystem where academic excellence meets holistic growth. Our focus goes beyond textbooks and tests, nurturing values, skills, and resilience that last a lifetime.",
    ],
  }) {
    return (
      <section className="bg-white px-6 py-16 dark:bg-neutral-950 sm:px-12">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <img
            src={image}
            alt="Students at IGNITE Junior College"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
  
          <div>
            <h2 className="text-3xl font-extrabold text-emerald-600 sm:text-4xl">
              {heading}
            </h2>
            <div className="mt-5 space-y-4 text-neutral-700 dark:text-neutral-300">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }