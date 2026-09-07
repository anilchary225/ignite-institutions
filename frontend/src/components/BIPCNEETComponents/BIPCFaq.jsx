import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What is the duration of the BiPC NEET programme at Ignite?", a: "The programme runs for 2 years covering Class 11 and Class 12 (Intermediate). It integrates Intermediate board preparation with full NEET UG coaching - Biology, Physics, and Chemistry - in a single structured plan." },
  { q: "Is board preparation included alongside NEET coaching?", a: "Yes, both run together. Our integrated curriculum ensures students score well in Intermediate board exams while building the NCERT-depth needed for NEET. No trade-off between the two." },
  { q: "How does Ignite approach Biology for NEET?", a: "Biology is treated as the primary subject for NEET since it carries the most marks. We use NCERT-first methodology with diagram practice, continuous daily drilling, and topic-wise MCQ sessions to ensure deep retention." },
  { q: "What is the batch size at Ignite BiPC?", a: "We keep batches to a maximum of 30 students. This allows personalised attention, regular individual feedback, and a closer teacher-student relationship than large coaching centres." },
  { q: "Is hostel accommodation available?", a: "Yes. Hostel facilities are available at all Ignite branches. Residential students follow a structured daily schedule including morning revision, classes, and evening study hours." },
  { q: "How frequently are mock tests conducted?", a: "Weekly chapter-wise tests, bi-weekly unit tests, and full-length 200-question NEET mocks every month. All mocks are analysed subject-wise with error tracking and rank comparison." },
  { q: "Does Ignite prepare students for EAPCET (Medical) as well?", a: "Yes. EAPCET (Medical) preparation is woven into the BiPC curriculum since there is significant subject overlap with NEET. State-specific question banks and rank predictor tests are provided." },
  { q: "What is Ignite's NEET track record?", a: "Ignite has produced 300+ NEET selections over 20+ years of coaching, including students who scored 720/720 and secured seats at AIIMS, JIPMER, and top government medical colleges across Telangana and Andhra Pradesh." },
];

function Item({ faq, open, onToggle }) {
  return (
    <div className={`overflow-hidden rounded-2xl border transition-all ${open ? "border-emerald-200 bg-emerald-50 dark:border-emerald-900/60 dark:bg-emerald-950/20" : "border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"}`}>
      <button type="button" onClick={onToggle} className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left">
        <span className="text-sm font-bold text-neutral-950 dark:text-white">{faq.q}</span>
        <ChevronDown size={18} className={`shrink-0 text-neutral-400 transition-transform duration-300 ${open ? "rotate-180 text-emerald-600" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-sm leading-7 text-neutral-600 dark:text-neutral-400">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function BIPCFaq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
          <span className="rounded-full bg-neutral-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">FAQs</span>
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">Frequently Asked Questions</h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">Everything you need to know about Ignite's BiPC NEET programme.</p>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => <Item key={i} faq={faq} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />)}
        </div>
        <div className="mt-10 rounded-3xl bg-green-700 p-7 text-center">
          <p className="text-sm font-bold text-emerald-200">Still have questions?</p>
          <h3 className="mt-2 text-xl font-extrabold text-white">Talk to our BiPC counsellors</h3>
          <p className="mt-2 text-sm text-emerald-100">Available Mon–Sat, 9 AM–6 PM.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href="tel:+919876543210" className="rounded-xl bg-white px-6 py-3 text-sm font-black text-emerald-700 hover:bg-amber-400 hover:text-white transition">Call +91 98765 43210</a>
            <a href="#contact" className="rounded-xl border-2 border-white/30 px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition">Send a Message</a>
          </div>
        </div>
      </div>
    </section>
  );
}
