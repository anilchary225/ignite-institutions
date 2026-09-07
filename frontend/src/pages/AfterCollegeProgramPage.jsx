import { useMemo, useState } from "react";
import { RouteLink } from "../router/BrowserRouter";

const bannerItems = [
  "First-Year Improvement",
  "JEE Main & Advanced",
  "NEET Preparation",
  "BITSAT Readiness",
  "EAPCET Focus",
  "Revision & Practice",
  "Mock Tests",
  "Performance Growth",
];

const examBlocks = [
  {
    title: "IIT-JEE",
    subtitle: "JEE Main & JEE Advanced",
    text: "Physics, Chemistry, and Mathematics with concept building, problem solving, revision, and exam strategy.",
  },
  {
    title: "NEET",
    subtitle: "Medical Entrance",
    text: "Physics, Chemistry, and Biology with NCERT-first preparation, tests, doubt clarification, and speed improvement.",
  },
  {
    title: "BITSAT",
    subtitle: "BITS Pilani Campuses",
    text: "Fast-paced preparation with English proficiency, logical reasoning, and full-syllabus revision.",
  },
  {
    title: "EAPCET",
    subtitle: "State Entrance",
    text: "Pattern-based preparation focused on key concepts, previous-year questions, and mock tests.",
  },
];

const benefits = [
  "Complete syllabus coverage with structured revision",
  "Practice, tests, and performance analysis",
  "Guidance for first-year improvement and supplementary exams",
  "Targeted preparation for JEE, NEET, BITSAT, and EAPCET",
];

const highlights = [
  {
    title: "Revision Focus",
    text: "Students revisit core ideas and strengthen weak areas through regular revision cycles.",
  },
  {
    title: "Practice Driven",
    text: "Question practice, previous-year papers, and mock tests help build speed and confidence.",
  },
  {
    title: "Goal Oriented",
    text: "The program keeps every student aligned with a clear academic or entrance-exam target.",
  },
];

const faqs = [
  {
    q: "Who is this program for?",
    a: "Students who want to improve first-year marks or prepare for competitive entrance exams after college hours.",
  },
  {
    q: "Can I join for only exam preparation?",
    a: "Yes. The program supports both first-year academic improvement and second-year entrance preparation.",
  },
  {
    q: "Which exams are covered?",
    a: "The program covers IIT-JEE, NEET, BITSAT, and EAPCET pathways.",
  },
  {
    q: "How do I register?",
    a: "Register through the admissions team or contact the institute directly for batch and eligibility details.",
  },
];

function Marquee() {
  const repeated = useMemo(() => [...bannerItems, ...bannerItems], []);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-sky-200 bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-600 p-2 text-white shadow-[0_18px_50px_rgba(14,165,233,0.18)] dark:border-white/10 dark:from-black dark:via-neutral-950 dark:to-sky-950">
      <div className="animate-[marquee_22s_linear_infinite] flex w-max gap-3 whitespace-nowrap">
        {repeated.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="rounded-full bg-white/15 px-5 py-2 text-sm font-semibold backdrop-blur"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function FaqItem({ item, open, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="w-full rounded-[1.25rem] border border-neutral-200 bg-white p-5 text-left dark:border-white/10 dark:bg-neutral-900"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-base font-bold text-neutral-950 dark:text-white">{item.q}</span>
        <span className="text-xl font-bold text-sky-600 dark:text-sky-400">{open ? "–" : "+"}</span>
      </div>
      {open ? (
        <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">{item.a}</p>
      ) : null}
    </button>
  );
}

export default function AfterCollegeProgramPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="min-h-screen bg-white px-4 py-16 text-neutral-950 dark:bg-neutral-950 dark:text-white sm:px-6 lg:px-8">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="mx-auto max-w-7xl space-y-16 pt-10 md:pt-12">
        <section className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <header className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">
              Academic Program
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              After College Academic Program
            </h1>
            <p className="mt-4 text-base leading-8 text-neutral-600 dark:text-neutral-300">
              Learn more. Revise better. Prepare smarter. Achieve more. This program helps
              students use after-college hours for first-year improvement, stronger fundamentals,
              and focused competitive-exam preparation.
            </p>
          </header>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-sky-200 p-4 shadow-[0_24px_70px_rgba(56,189,248,0.18)] dark:border-white/10 dark:from-black dark:via-neutral-950 dark:to-sky-950/40">
            {/* <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-sky-200/80 blur-2xl dark:bg-sky-500/20" />
            <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-cyan-200/70 blur-2xl dark:bg-cyan-500/20" /> */}
            {/* <div className="relative overflow-hidden rounded-[2rem] bg-white p-4 dark:bg-neutral-950"> */}
              {/* <div className="overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.26),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(125,211,252,0.28),transparent_24%),linear-gradient(135deg,#dbeafe,#eff6ff,#bae6fd)] p-4 dark:bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(125,211,252,0.18),transparent_24%),linear-gradient(135deg,#020617,#0f172a,#082f49)]"> */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
                  <img
                    src="/assets/images/events/Summer camp/C0087T01.webp"
                    alt="After college academic program"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-white/10" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-sky-700 backdrop-blur dark:bg-black/50 dark:text-sky-300">
                    Featured
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] bg-white/85 p-4 shadow-lg backdrop-blur dark:bg-black/45">
                    <p className="text-sm font-bold text-neutral-950 dark:text-white">
                      Curved visual highlight
                    </p>
                    <p className="mt-1 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                      Use after-college hours to revise, practice, and prepare with purpose.
                    </p>
                  </div>
                </div>
              {/* </div> */}
            {/* </div> */}
          </div>
        </section>

        <section>
          <Marquee />
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-sky-100 p-8 dark:border-white/10 dark:from-black dark:via-neutral-950 dark:to-sky-950/30">
            <h2 className="text-2xl font-extrabold">For First-Year Students</h2>
            <p className="mt-4 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
              Revise important concepts, strengthen weak subjects, practice important questions,
              and build confidence for improvement or supplementary examinations.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Revise first-year concepts",
                "Strengthen weak subjects",
                "Practice important questions",
                "Work on previous examination problems",
                "Prepare for improvement or supplementary exams",
                "Build strong fundamentals for higher studies",
              ].map((point) => (
                <div
                  key={point}
                  className="rounded-[1rem] bg-white/80 px-4 py-3 text-sm font-medium text-neutral-700 shadow-sm dark:bg-white/5 dark:text-neutral-200"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 dark:border-white/10 dark:bg-neutral-900">
            <h2 className="text-2xl font-extrabold">One Program. Multiple Opportunities.</h2>
            <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
              Improve first-year marks, strengthen academic foundations, and prepare for entrance
              exams in a structured way.
            </p>
            <div className="mt-5 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
              {[
                "Improve your first-year marks",
                "Strengthen your academic fundamentals",
                "Prepare for JEE Main & Advanced",
                "Prepare for NEET",
                "Prepare for BITSAT",
                "Prepare for EAPCET",
              ].map((step) => (
                <div key={step} className="rounded-[1rem] bg-neutral-50 px-4 py-3 dark:bg-neutral-800/60">
                  {step}
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-[1.25rem] bg-gradient-to-r from-sky-50 via-white to-sky-100 p-4 text-sm font-semibold text-sky-700 shadow-sm dark:from-black dark:via-neutral-950 dark:to-sky-950/20 dark:text-sky-300">
              Strong fundamentals today can make competitive exam preparation easier tomorrow.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-neutral-200 bg-white p-8 dark:border-white/10 dark:bg-neutral-900">
          <h2 className="text-2xl font-extrabold">For Second-Year Students – Competitive Exam Preparation</h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {examBlocks.map((block) => (
              <div key={block.title} className="rounded-[1.5rem] bg-gradient-to-br from-sky-50 via-white to-sky-100 p-5 dark:from-black dark:via-neutral-950 dark:to-sky-950/20">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-600 dark:text-sky-400">
                  {block.title}
                </p>
                <h3 className="mt-2 text-lg font-bold">{block.subtitle}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">{block.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 dark:border-white/10 dark:bg-neutral-900">
            <h2 className="text-2xl font-extrabold">Why Choose Our After College Program?</h2>
            <ul className="mt-5 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-[1.25rem] border border-sky-100 bg-gradient-to-r from-sky-50 via-white to-sky-100 p-4 text-sm italic leading-7 text-sky-800 dark:border-white/10 dark:from-black dark:via-neutral-950 dark:to-sky-950/20 dark:text-sky-300">
              “Focused after-college hours turn ordinary effort into measurable academic progress.”
            </p>
          </div>
          <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8 dark:border-white/10 dark:bg-neutral-900">
            <h2 className="text-2xl font-extrabold">Benefits and Outcomes</h2>
            <div className="mt-5 grid gap-4">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="rounded-[1.25rem] bg-white p-4 shadow-sm dark:bg-black">
                  <h3 className="font-bold">{highlight.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-600 dark:text-neutral-300">{highlight.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8 dark:border-white/10 dark:bg-neutral-900">
          <h2 className="text-2xl font-extrabold">Make Your After-College Hours Count</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            Revise your concepts. Strengthen your fundamentals. Practice consistently. Prepare for
            your target examination. Join our After College Academic Program and take a confident
            step toward better academic results and competitive-exam success.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <RouteLink
              to="/contact"
              className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
            >
              Register Now
            </RouteLink>
            <RouteLink
              to="/streams/junior-college"
              className="rounded-full border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-white/10 dark:text-neutral-300"
            >
              Back to Junior College
            </RouteLink>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 dark:border-white/10 dark:bg-neutral-900">
            <h2 className="text-2xl font-extrabold">How to register</h2>
            <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
              Contact the admissions team, share the student’s current year, target exams, and
              preferred batch timing, and the team will guide you through next steps.
            </p>
          </div>
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 dark:border-white/10 dark:bg-neutral-900">
            <h2 className="text-2xl font-extrabold">Eligibility</h2>
            <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
              Students who want first-year improvement or entrance preparation after college hours
              are eligible. Batch placement may vary by level and preparation goal.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-extrabold">FAQs</h2>
          <div className="space-y-3">
            {faqs.map((item, index) => (
              <FaqItem
                key={item.q}
                item={item}
                open={openFaq === index}
                onToggle={() => setOpenFaq((current) => (current === index ? -1 : index))}
              />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
