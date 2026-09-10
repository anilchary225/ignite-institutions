const reasons = [
  { emoji: "👨‍🏫", title: "Experienced Faculty",       desc: "Teachers with years of expertise in BiPC and NEET coaching." },
  { emoji: "📚", title: "Integrated Curriculum",      desc: "BiPC syllabus blended with advanced NEET-focused preparation." },
  { emoji: "🎯", title: "Personalized Mentorship",   desc: "One-on-one guidance to track student performance and improvement." },
  { emoji: "🏆", title: "Consistent Results",         desc: "Proven success in NEET, EAMCET, and other competitive exams." },
  { emoji: "🌱", title: "Student-Friendly Environment",desc: "Supportive learning culture that nurtures both academics and personal growth." },
];

export default function BIPCWhyIgnite() {
  return (
    <section id="why" className="relative overflow-hidden bg-indigo-950 px-6 py-20">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div data-aos="fade-up" className="flex items-center gap-3">
          <span className="h-px flex-1 bg-white/10" />
          <span className="rounded-full bg-green-500/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-green-400 ring-1 ring-green-500/30">
            Why Choose Ignite
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 data-aos="fade-up" className="text-3xl font-extrabold text-white sm:text-4xl">
            Why Choose Ignite for{" "}
            <span className="text-green-400">BiPC?</span>
          </h2>
          <p data-aos="fade-up" className="mt-3 text-base leading-7 text-indigo-200">
            These strengths place Ignite firmly among the Top BiPC Colleges in Hyderabad trusted by thousands of students and parents.
          </p>
        </div>

        {/* pentagon-like grid: 3 top + 2 bottom centred */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {reasons.slice(0, 3).map((r) => (
            <div data-aos="fade-up" key={r.title} className="flex flex-col gap-3 rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-white/10">
              <span className="text-4xl">{r.emoji}</span>
              <h3 className="text-lg font-extrabold text-white">{r.title}</h3>
              <p className="text-sm leading-6 text-indigo-200">{r.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 sm:px-[16.67%]">
          {reasons.slice(3).map((r) => (
            <div data-aos="fade-up" key={r.title} className="flex flex-col gap-3 rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur-sm transition hover:bg-white/10">
              <span className="text-4xl">{r.emoji}</span>
              <h3 className="text-lg font-extrabold text-white">{r.title}</h3>
              <p className="text-sm leading-6 text-indigo-200">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
