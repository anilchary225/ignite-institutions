import { useMemo, useState } from "react";
import { RouteLink } from "../router/BrowserRouter";

const bannerItems = [
  "Academic Support",
  "Homework Help",
  "Creative Arts",
  "Spoken English",
  "Sports & Fitness",
  "Life Skills",
  "Reading Hour",
  "Personality Growth",
];

const programs = [
  {
    title: "Homework Support",
    text: "Teachers help students complete school work with attention, clarity, and immediate doubt-clearing.",
  },
  {
    title: "Reading & Writing",
    text: "Focused sessions improve reading fluency, writing structure, vocabulary, and confidence in expression.",
  },
  {
    title: "Arts & Creativity",
    text: "Drawing, craft, storytelling, and activity-based sessions keep learning engaging beyond the classroom.",
  },
  {
    title: "Sports & Movement",
    text: "Physical activities build stamina, teamwork, discipline, and healthy routine habits.",
  },
  {
    title: "Life Skills",
    text: "Students learn communication, etiquette, time management, and independent learning habits.",
  },
];

const benefits = [
  "Better academic consistency after school hours",
  "Safe, guided, and structured learning environment",
  "Improved confidence, communication, and discipline",
  "Balanced growth through study, play, and creativity",
];

const highlights = [
  {
    title: "Supportive Enrichment",
    text: "The program combines academic reinforcement with engaging activities that help students stay motivated.",
    image:"/assets/images/events/Science Lab/DSC05690.webp"
  },
  {
    title: "Teacher Guidance",
    text: "Teachers guide students personally, monitor progress, and support them with structured feedback.",
    image:"/assets/images/events/School kids in science lab/IMG_9605.webp"
  },
  {
    title: "Gallery Moments",
    text: "Students participate in activities, celebrations, and learning moments that will be featured in the after-school gallery.",
    image:"/assets/images/events/Summer camp/DSC09937.webp"
  },
];

const faqs = [
  {
    q: "Who can join the after-school program?",
    a: "Students from the school stream who need academic support, enrichment, or structured after-school activities can join.",
  },
  {
    q: "How do I register?",
    a: "Registration can be done through the school office or by contacting the admissions team. Final details will be shared with parents directly.",
  },
  {
    q: "What age groups are eligible?",
    a: "The program is designed for school students. Exact eligibility will depend on the class level and the specific batch schedule.",
  },
  {
    q: "Is transport available?",
    a: "Transport support depends on the campus and batch arrangement. Please check with the school team for availability.",
  },
];

function Marquee() {
  const repeated = useMemo(() => [...bannerItems, ...bannerItems], []);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-sky-200 bg-gradient-to-r from-sky-500 via-cyan-500 to-sky-600 p-2 text-white shadow-[0_18px_50px_rgba(14,165,233,0.18)] dark:border-white/10 dark:from-black dark:via-neutral-950 dark:to-sky-950">
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

export default function AfterSchoolProgramPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="min-h-screen bg-white px-4 py-16 text-neutral-950 dark:bg-neutral-950 dark:text-white sm:px-6 lg:px-8">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="mx-auto max-w-7xl pt-10 md:pt-12 space-y-16">
        <section className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <header className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">
              School Program
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              After School Program
            </h1>
            <p className="mt-4 text-base leading-8 text-neutral-600 dark:text-neutral-300">
              A structured after-school space for academic support, creativity, physical activity,
              and personal growth. This program is designed to extend learning beyond school hours
              in a calm, guided environment.
            </p>
          </header>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-sky-200 p-4 shadow-[0_24px_70px_rgba(56,189,248,0.18)] dark:border-white/10 dark:from-black dark:via-neutral-950 dark:to-sky-950/40">
            {/* <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-sky-200/80 blur-2xl dark:bg-sky-500/20" />
            <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-cyan-200/70 blur-2xl dark:bg-cyan-500/20" /> */}
            {/* <div className="relative overflow-hidden rounded-[2rem] bg-white p-4 dark:bg-neutral-950"> */}
              {/* <div className="overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.26),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(125,211,252,0.28),transparent_24%),linear-gradient(135deg,#dbeafe,#eff6ff,#bae6fd)] p-4 dark:bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(125,211,252,0.18),transparent_24%),linear-gradient(135deg,#020617,#0f172a,#082f49)]"> */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
                  <img
                    src="/assets/images/events/Summer camp/DSC09937.webp"
                    alt="After school program"
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
                      A vibrant space for learning, support, and growth after school.
                    </p>
                  </div>
                {/* </div> */}
              </div>
            {/* </div> */}
          </div>
        </section>

        <section>
          <Marquee />
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] flex flex-col justify-between bg-gradient-to-br from-sky-100 via-white to-sky-200 p-8 dark:from-black dark:via-neutral-950 dark:to-sky-950/30">
            <div className="rounded-[2rem] border border-sky-100 bg-white p-8 shadow-[0_24px_70px_rgba(56,189,248,0.18)] dark:border-white/10 dark:bg-neutral-950">
              <h2 className="mt-3 text-2xl font-extrabold">Why this program exists</h2>
              <p className="mt-4 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                After school hours can be productive when they are organized with purpose. This
                program gives students a balanced routine where schoolwork, enrichment, and personal
                development happen together without pressure.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[2.5rem] border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-sky-200 p-4 shadow-[0_24px_70px_rgba(56,189,248,0.18)] dark:border-white/10 dark:from-black dark:via-neutral-950 dark:to-sky-950/40">
            {/* <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-sky-200/80 blur-2xl dark:bg-sky-500/20" />
            <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-cyan-200/70 blur-2xl dark:bg-cyan-500/20" /> */}
            {/* <div className="relative overflow-hidden rounded-[2rem] bg-white p-4 dark:bg-neutral-950"> */}
              {/* <div className="overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.26),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(125,211,252,0.28),transparent_24%),linear-gradient(135deg,#dbeafe,#eff6ff,#bae6fd)] p-4 dark:bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.2),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(125,211,252,0.18),transparent_24%),linear-gradient(135deg,#020617,#0f172a,#082f49)]"> */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
                  <img
                    src="/assets/images/events/Summer camp/summercamp17.webp"
                    alt="After school program"
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
                      A vibrant space for learning, support, and growth after school.
                    </p>
                  </div>
                {/* </div> */}
              </div>
            {/* </div> */}
          </div>
          </div>
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 dark:border-white/10 dark:bg-neutral-900">
            <h2 className="mt-3 text-2xl font-extrabold">Programs and teacher support</h2>
            <div className="mt-5 grid gap-4">
              {programs.map((program) => (
                <div key={program.title} className="rounded-[1.25rem] bg-neutral-50 p-4 dark:bg-neutral-800/60">
                  <h3 className="font-bold">{program.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-neutral-600 dark:text-neutral-300">{program.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 dark:border-white/10 dark:bg-neutral-900">
            <h2 className="mt-3 text-2xl font-extrabold">Why it suits students</h2>
            <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
              The program is suited to students who need structure after school, more practice,
              calm support, and a balanced environment that keeps them active without overload.
            </p>
          </div>
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 dark:border-white/10 dark:bg-neutral-900">
            <h2 className="mt-3 text-2xl font-extrabold">Benefits and outcomes</h2>
            <ul className="mt-5 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8 dark:border-white/10 dark:bg-neutral-900">
          <h2 className="mt-3 text-2xl font-extrabold">Highlights and gallery preview</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="rounded-[1.5rem] bg-white p-5 shadow-sm dark:bg-black">
                <img src={highlight.image} className="aspect-[4/3] rounded-[1.25rem] object-cover" />
                <h3 className="mt-4 font-bold">{highlight.title}</h3>
                <p className="mt-2 text-sm leading-7 text-neutral-600 dark:text-neutral-300">{highlight.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <RouteLink
              to="/gallery"
              className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
            >
              Explore After School Gallery
            </RouteLink>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 dark:border-white/10 dark:bg-neutral-900">
            <h2 className="mt-3 text-2xl font-extrabold">How to register</h2>
            <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
              Register through the school office or admissions team. Share the student’s class,
              preferred schedule, and any support requirements. The team will confirm batch
              availability and next steps.
            </p>
          </div>
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 dark:border-white/10 dark:bg-neutral-900">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
              Eligibility
            </p>
            <h2 className="mt-3 text-2xl font-extrabold">Who can join</h2>
            <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
              School students who want extra support, enrichment, or a productive after-school
              routine are eligible. Final eligibility may vary by class level and batch.
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
