import React from "react";
import Hero from "../components/AboutPageComponents/AboutPage/Hero";

const highlights = [
  {
    title: "Purpose-driven leadership",
    text: "Education is not only about marks or ranks. It is about shaping character, building confidence, and preparing young minds for the future with courage and compassion.",
  },
  {
    title: "Holistic education",
    text: "From academics to life skills, the founder's vision combines strong results with discipline, creativity, leadership, sports, and emotional well-being.",
  },
  {
    title: "Modern learning culture",
    text: "The institution continuously adopts innovative teaching methods, advanced technology, and student-centred learning practices to create a dynamic environment.",
  },
];

const milestones = [
  {
    year: "2017",
    title: "IGNITE Classes begins",
    text: "The journey starts with a clear commitment to academic excellence and student growth.",
  },
  {
    year: "2018",
    title: "Junior colleges and schools established",
    text: "The vision expands into a broader educational ecosystem for school and intermediate learners.",
  },
  {
    year: "Today",
    title: "Competitive exam focus",
    text: "The institution continues to guide students for IIT, NEET, and other competitive pathways.",
  },
];

const values = [
  "Academic excellence",
  "Character development",
  "Community service",
  "Environmental awareness",
  "Leadership and confidence",
  "Responsible citizenship",
];

const founderMoments = [
  {
    src: "/assets/images/events/Ullaas/MNR00109.webp",
    alt: "Mr. K. Ramesh walking through the IGNITE campus",
    caption: "Morning rounds on campus",
    span: "sm:col-span-3 sm:row-span-2",
  },
  {
    src: "/assets/images/events/Vybhava/ARM02727.webp",
    alt: "Mr. K. Ramesh receiving a gift",
    caption: "Gift Presentation",
    span: "sm:col-span-2",
  },
  {
    src: "/assets/images/events/Udbhava/BF6C7894.webp",
    alt: "Mr. K. Ramesh starting the event",
    caption: "Event Inauguration",
    span: "sm:col-span-2",
  }
];

/* ============================================================
   ABSTRACT BACKGROUND - shared decorative motif
============================================================ */
function AbstractBg({ position = "top-right", className = "" }) {
  const isTopRight = position === "top-right";
  return (
    <svg
      width="220"
      height="220"
      viewBox="0 0 220 220"
      className={`absolute pointer-events-none opacity-40 dark:opacity-70 ${
        isTopRight ? "-top-14 -right-14" : "-bottom-14 -left-14"
      } ${className}`}
      aria-hidden="true">
      <circle cx="110" cy="110" r="90" fill="none" className="stroke-blue-300 dark:stroke-blue-600" strokeWidth="1" />
      <circle cx="110" cy="110" r="60" fill="none" className="stroke-blue-400 dark:stroke-blue-500" strokeWidth="1" />
      <path d="M20 150 Q 90 60 200 100" fill="none" className="stroke-blue-500 dark:stroke-blue-400" strokeWidth="1" />
    </svg>
  );
}

export default function AboutFounderPage() {
  return (
    <main className="bg-white text-neutral-900 transition-colors dark:bg-neutral-950 dark:text-white">
      <Hero
        title="About the founder"
        subtitle="Mr. K. Ramesh, Founder and Chairman of IGNITE"
        imageSrc="/assets/images/events/Udbhava/BF6C8691.webp"
        eyebrow="Founder & Chairman"
      />

      {/* PORTRAIT + INTRO */}
      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="relative mx-auto w-full max-w-sm lg:mx-0">
            <div data-aos="fade-up" className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
              <img
                src="/assets/images/Ramesh sir/VIJ06233.webp"
                alt="Portrait of Mr. K. Ramesh, Founder and Chairman of IGNITE"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div data-aos="zoom-in" className="absolute -bottom-4 left-5 right-5 rounded-xl border border-neutral-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900">
              <p className="text-[11px] font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Founder & Chairman
              </p>
              <p  className="mt-0.5 text-sm font-medium text-neutral-900 dark:text-white">Mr. K. Ramesh</p>
            </div>
          </div>

          <div>
            <p data-aos="fade-up" className="text-xs font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Founder & Chairman
            </p>
            <h2 data-aos="fade-up" className="mt-3 text-3xl font-semibold text-neutral-900 dark:text-white sm:text-4xl">
              Mr. K. Ramesh
            </h2>
            <p data-aos="fade-up" className="mt-5 max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300">
              Mr. K. Ramesh built IGNITE with a clear belief: education must do more
              than produce ranks. It must shape confident, compassionate, and
              responsible young people who are ready to lead in life.
            </p>
            <p data-aos="fade-up" className="mt-4 max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300">
              His philosophy combines practical wisdom, disciplined teaching, and a
              student-first mindset. The result is an institution that values both
              strong academic outcomes and the complete development of every child.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span data-aos="fade-up" className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
                Common sense over convention
              </span>
              <span data-aos="fade-up" className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                Student-centred learning
              </span>
            </div>

            {/* QUOTE CARD - flat surface, abstract art, no gradient */}
            <div className="relative mt-8 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <AbstractBg />
              <div className="relative z-10">
                <p data-aos="fade-up" className="text-[11px] font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  Founder quote
                </p>
                <p data-aos="fade-up" className="mt-3 text-2xl font-medium leading-snug text-neutral-900 dark:text-white">
                  Common sense is better than all sciences.
                </p>
                <div  className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl bg-neutral-50 p-4 dark:bg-neutral-800/60">
                    <p data-aos="fade-up" className="text-xs text-neutral-500 dark:text-neutral-400">Education focus</p>
                    <p data-aos="fade-up" className="mt-1 text-sm font-medium text-neutral-900 dark:text-white">
                      IIT, NEET, schools, and junior colleges
                    </p>
                  </div>
                  <div className="rounded-xl bg-neutral-50 p-4 dark:bg-neutral-800/60">
                    <p data-aos="fade-up" className="text-xs text-neutral-500 dark:text-neutral-400">Core outcome</p>
                    <p data-aos="fade-up" className="mt-1 text-sm font-medium text-neutral-900 dark:text-white">
                      Responsible, confident, and compassionate students
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAIRMAN'S NOTE */}
      <section className="border-y border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/40">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-950 sm:p-10">
              <AbstractBg />
              <div className="relative z-10">
                <p data-aos="fade-up" className="text-xs font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
                  Chairman's Note
                </p>
                <h3 data-aos="fade-up" className="mt-3 text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">
                  A message from our founder
                </h3>

                <div className="mt-6 space-y-5 text-base leading-8 text-neutral-600 dark:text-neutral-300">
                  <p data-aos="fade-up">
                    Dear Students, Parents, and Well-Wishers, education is not
                    merely about securing marks or achieving ranks - it is
                    about shaping character, building confidence, and
                    preparing young minds to face the challenges of the future
                    with courage and compassion. At IGNITE, we believe every
                    child possesses unique potential, and it is our
                    responsibility to nurture that potential with the right
                    guidance, values, and opportunities.
                  </p>
                  <p data-aos="fade-up">
                    Since the inception of IGNIITe Classes in 2017 and the
                    establishment of our junior colleges and schools in 2018,
                    our vision has been to build an institution that blends
                    academic excellence with holistic development - delivering
                    outstanding results in IIT, NEET, and other competitive
                    examinations while equally emphasising life skills,
                    sports, leadership, creativity, discipline, and emotional
                    well-being.
                  </p>
                  <p data-aos="fade-up">
                    We believe true success lies in becoming responsible human
                    beings who contribute positively to society. Through
                    social initiatives, community service, environmental
                    awareness programs, and philanthropic efforts, we
                    encourage our students to develop empathy, gratitude, and
                    social responsibility alongside academic excellence.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-4 border-t border-neutral-100 pt-6 dark:border-neutral-800">
                  <div data-aos="zoom-in" className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-neutral-200 dark:border-neutral-700">
                    <img
                      src="/assets/images/Ramesh sir/VIJ06233.webp"
                      alt="Mr. K. Ramesh"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <p data-aos="fade-left" className="text-sm font-semibold text-neutral-900 dark:text-white">
                      Mr. K. Ramesh
                    </p>
                    <p data-aos="fade-left" className="text-xs text-neutral-500 dark:text-neutral-400">
                      Founder &amp; Chairman · Faculty in Chemistry, 20+ years experience
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm lg:mx-0">
              <div data-aos="fade-up" className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <img
                  src="/assets/images/events/Vybhava/ARM02727.webp"
                  alt="Mr. K. Ramesh addressing students and parents"
                  className="h-full w-full object-cover"
                />
              </div>
              <div data-aos="zoom-in" className="absolute -bottom-4 left-5 right-5 rounded-xl border border-neutral-200 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-900">
                <p  className="text-[11px] font-medium uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  In his own words
                </p>
                <p className="mt-0.5 text-sm font-medium text-neutral-900 dark:text-white">
                  Building future-ready, compassionate leaders
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16 lg:py-20">
          <div className="max-w-3xl">
            <p data-aos="fade-up" className="text-xs font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Founder philosophy
            </p>
            <h3 data-aos="fade-up" className="mt-3 text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">
              Education with discipline, dignity, and direction
            </h3>
            <p data-aos="fade-up" className="mt-4 text-base leading-8 text-neutral-600 dark:text-neutral-300">
              The founder's approach is rooted in the belief that students need more
              than textbooks. They need resilience, leadership, creativity, critical
              thinking, and the confidence to pursue ambitious goals.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                data-aos="fade-up"
                key={item.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950"
              >
                <h4 className="text-base font-semibold text-neutral-900 dark:text-white">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IN FRAME - bento gallery */}
      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16 lg:py-20">
        <div className="max-w-2xl">
          <p data-aos="fade-up" className="text-xs font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            In frame
          </p>
          <h3 data-aos="fade-up" className="mt-3 text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">
            Moments from the campus
          </h3>
          <p data-aos="fade-up" className="mt-4 text-base leading-8 text-neutral-600 dark:text-neutral-300">
            A closer look at the founder's day-to-day presence on campus - from
            morning rounds to convocation, always close to the students he set out
            to serve.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-5  w-3/4 mx-auto">
          {founderMoments.map((moment) => (
            <figure
              data-aos="fade-up"
              key={moment.src}
              className={`group relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 ${moment.span}`}
            >
              <img
                src={moment.src}
                alt={moment.alt}
                loading="lazy"
                className="h-full min-h-[220px] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
              <figcaption className="absolute bottom-0 left-0 right-0 px-5 py-4 text-sm font-medium text-white">
                {moment.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* MILESTONES + VALUES */}
      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-aos="fade-up" className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
            <p data-aos="fade-up" className="text-xs font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              Milestones
            </p>
            <div className="mt-6 space-y-5">
              {milestones.map((item) => (
                <div data-aos="fade-up" key={item.year} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-400">
                    {item.year}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">{item.title}</h4>
                    <p className="mt-1 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-up" className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-white">
            <AbstractBg position="bottom-left" />
            <div data-aos="fade-up" className="relative z-10">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-400">
                What the founder stands for
              </p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                A complete education experience
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-300">
                The founder's vision extends beyond academics. IGNITE also focuses on
                life skills, sports, leadership, creativity, discipline, emotional
                well-being, and social responsibility.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {values.map((value) => (
                  <span
                    data-aos="fade-up"
                    key={value}
                    className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-sm text-white/85"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}