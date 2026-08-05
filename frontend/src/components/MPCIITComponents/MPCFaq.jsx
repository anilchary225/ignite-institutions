import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is the duration of the MPC IIT JEE programme at Ignite?",
    a: "The programme spans 2 years — covering Class 11 and Class 12 (Intermediate). It integrates both Intermediate board preparation and full IIT JEE Main & Advanced coaching in a single structured curriculum.",
  },
  {
    q: "Is board preparation included alongside JEE coaching?",
    a: "Absolutely. Our curriculum is designed so that board and JEE preparation run in parallel, not in conflict. Students consistently achieve excellent Intermediate marks alongside strong JEE ranks.",
  },
  {
    q: "What is the batch size at Ignite?",
    a: "We maintain a maximum of 30 students per batch. This ensures every student receives personalised attention, regular one-on-one interaction with faculty, and tailored feedback on their performance.",
  },
  {
    q: "Do you offer hostel/residential facilities?",
    a: "Yes. Hostel accommodation is available at all Ignite branches. Residential students benefit from a structured schedule, study hours, and a focused academic environment away from distractions.",
  },
  {
    q: "How often are mock tests conducted?",
    a: "Mock tests are held at multiple levels — weekly chapter tests, bi-weekly unit tests, and full-length JEE Main and Advanced pattern mocks every month. All tests are followed by detailed rank analysis and feedback.",
  },
  {
    q: "What subjects are covered in the MPC programme?",
    a: "The MPC programme covers Mathematics, Physics, and Chemistry at both the Intermediate board level and the IIT JEE Main & Advanced level. Study material, DPPs (Daily Practice Problems), and revision sheets are provided for all three subjects.",
  },
  {
    q: "Are there scholarships available for admission?",
    a: "Yes. Ignite conducts a Scholarship Test open to all Class 10 students. Based on performance, students can earn up to 100% fee waiver. Contact our admissions team or visit your nearest branch for dates and registration.",
  },
  {
    q: "What is Ignite's track record for IIT JEE selections?",
    a: "Over the past 20+ years, Ignite has produced 500+ IIT selections and thousands of EAPCET qualifiers. Our students have consistently secured ranks in the top 100 of JEE Advanced every year.",
  },
];

function FaqItem({ faq, open, onToggle }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        open
          ? "border-violet-200 bg-violet-50 dark:border-violet-900/60 dark:bg-violet-950/20"
          : "border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-sm font-bold text-neutral-950 dark:text-white">{faq.q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-neutral-400 transition-transform duration-300 ${open ? "rotate-180 text-violet-600 dark:text-violet-400" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-7 text-neutral-600 dark:text-neutral-400">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function MPCFaq() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <span className="rounded-full bg-neutral-200 px-4 py-1 text-xs font-bold uppercase tracking-widest text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
            FAQs
          </span>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Everything you need to know about the Ignite MPC IIT JEE programme.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-violet-600 p-7 text-center">
          <p className="text-sm font-bold text-violet-200">Still have questions?</p>
          <h3 className="mt-2 text-xl font-extrabold text-white">Talk to our admissions team</h3>
          <p className="mt-2 text-sm text-violet-200">We're available Mon–Sat, 9 AM to 6 PM. No pressure, no obligation.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href="tel:+919876543210" className="rounded-xl bg-white px-6 py-3 text-sm font-black text-violet-700 hover:bg-amber-400 hover:text-white transition">
              Call +91 98765 43210
            </a>
            <a href="#contact" className="rounded-xl border-2 border-white/30 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition">
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
