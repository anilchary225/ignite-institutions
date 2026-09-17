import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Atom,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  Mail,
  Phone,
  Target,
  Users,
} from "lucide-react";
import { submitEnquiry } from "../lib/enquiryApi";
import {
  fadeUp,
  fadeIn,
  staggerContainer,
  staggerItem,
  cardReveal,
  defaultViewport,
  scaleIn,
} from "../animations/variants";

const highlights = [
  { icon: "⚛️", label: "Physics & Chemistry" },
  { icon: "🧬", label: "Biology & Mathematics" },
  { icon: "📈", label: "Progressive Learning" },
  { icon: "🎯", label: "IIT JEE & NEET Focus" },
  { icon: "🧠", label: "Strong Concepts" },
  { icon: "🏆", label: "Proven Results" },
];

const learningApproach = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Conceptual Clarity",
    description:
      "Each concept in Physics, Chemistry, Biology, and Mathematics is explained in simple ways to ensure students understand and remember it.",
    color: "blue",
  },
  {
    icon: ArrowRight,
    number: "02",
    title: "Progressive Learning",
    description:
      "The course begins with fundamentals and gradually moves to advanced topics, building confidence step by step.",
    color: "indigo",
  },
  {
    icon: Target,
    number: "03",
    title: "Regular Assessments",
    description:
      "Frequent tests and reviews help students track their growth and identify areas for improvement.",
    color: "amber",
  },
];

const benefits = [
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    description:
      "Our experienced teachers explain even the toughest topics in an engaging and easy-to-understand manner.",
  },
  {
    icon: Atom,
    title: "Strong Base for IIT JEE & NEET",
    description:
      "We prepare students for both engineering and medical entrances with the right foundation from an early stage.",
  },
  {
    icon: Users,
    title: "Holistic Development",
    description:
      "Beyond academics, we focus on time management, logical reasoning, and problem-solving skills.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description:
      "The curriculum covers Physics, Chemistry, Biology, and Mathematics through progressive learning modules.",
  },
  {
    icon: Target,
    title: "Personalized Attention",
    description:
      "Small batch sizes ensure every student receives one-on-one guidance, mentoring, and timely doubt support.",
  },
  {
    icon: CheckCircle2,
    title: "Proven Results",
    description:
      "Our students consistently achieve top ranks in school as well as competitive examinations.",
  },
];

const faqs = [
  {
    question: "Which is the best institute for IIT foundation classes in Hyderabad?",
    answer:
      "Ignite Junior College offers the best IIT foundation classes in Hyderabad with expert faculty, structured learning, and proven results for IIT JEE aspirants.",
  },
  {
    question: "Where can I find the Best Foundation Course for NEET in Hyderabad?",
    answer:
      "Ignite Academy offers a specialized NEET foundation course in Hyderabad that builds strong Biology, Physics, and Chemistry fundamentals alongside school academics.",
  },
  {
    question: "Why should I choose Ignite Junior College for foundation coaching?",
    answer:
      "Ignite combines experienced faculty, a progressive IIT JEE and NEET curriculum, regular assessments, small batches, and personal mentoring to give students a confident start.",
  },
  {
    question: "What is the right age or class to start IIT foundation classes?",
    answer:
      "Foundation coaching can begin from Class 8 onwards. Students who have just completed Class 10 can also join and build a strong base before entering higher classes.",
  },
  {
    question: "Can foundation coaching help balance school studies and competitive exams?",
    answer:
      "Yes. Our course is designed to complement school learning. Concepts are introduced progressively so students strengthen academic performance while developing competitive-exam skills.",
  },
  {
    question: "How does foundation coaching help with IIT JEE and NEET preparation?",
    answer:
      "It develops conceptual clarity, logical reasoning, problem-solving speed, and consistent study habits in Physics, Chemistry, Biology, and Mathematics long before the entrance exams.",
  },
  {
    question: "How can I enroll in a foundation course for IIT JEE or NEET?",
    answer:
      "Get in touch with our admissions team using the enquiry form below. We will help you choose the right foundation programme and guide you through the next steps.",
  },
];

const colorStyles = {
  blue: {
    badge: "bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
    icon: "bg-blue-600",
    number: "text-blue-300 dark:text-blue-800",
  },
  indigo: {
    badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300",
    icon: "bg-indigo-600",
    number: "text-indigo-300 dark:text-indigo-800",
  },
  amber: {
    badge: "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
    icon: "bg-amber-500",
    number: "text-amber-200 dark:text-amber-800",
  },
};

function FoundationHero() {
  return (
    <section className="bg-white px-6 py-20 dark:bg-neutral-950 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 dark:bg-blue-950/40">
              <span className="text-lg">🚀</span>
              <span className="text-xs font-black uppercase tracking-widest text-blue-700 dark:text-blue-400">
                Ignite Foundation
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="mt-5 text-4xl font-extrabold leading-tight text-neutral-950 sm:text-5xl dark:text-white">
              Foundation Course for{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-600 dark:text-blue-400">
                  IIT JEE & NEET
                </span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded bg-blue-100 dark:bg-blue-900/40" />
              </span>{" "}
              Success
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 text-base leading-7 text-neutral-600 dark:text-neutral-400">
              Looking for the best NEET & IIT foundation coaching in Hyderabad?
              Ignite Academy offers a specialized IIT Foundation Course and the
              Best Foundation Course for NEET designed to prepare students from
              an early stage.
            </motion.p>
            <motion.p variants={fadeUp} className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
              Our foundation coaching classes build strong basics in Physics,
              Chemistry, Biology, and Mathematics, helping students stay ahead
              for IIT JEE, NEET, and other competitive exams.
            </motion.p>

            <motion.div variants={staggerContainer} className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {highlights.map(({ icon, label }) => (
                <motion.div
                  key={label}
                  variants={cardReveal}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="flex flex-col items-center gap-1.5 rounded-2xl bg-neutral-50 py-4 text-center dark:bg-neutral-900 shadow-xs"
                >
                  <span className="text-2xl">{icon}</span>
                  <span className="text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                    {label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-6">
              {[
                { value: "Class 8+", extra: "Early start" },
                { value: "4", extra: "Core subjects" },
                { value: "2", extra: "Exam pathways" },
              ].map(({ value, extra }) => (
                <div key={extra}>
                  <p className="text-2xl font-black text-blue-700 dark:text-blue-400">
                    {value}
                  </p>
                  <p className="text-xs font-semibold text-neutral-500">{extra}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="relative min-h-[460px] overflow-hidden rounded-3xl bg-linear-to-br from-blue-700 via-indigo-800 to-neutral-950 p-8 shadow-md"
          >
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-400/20 blur-2xl" />
            <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-cyan-400/20 blur-2xl" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-blue-200">
                  The right start
                </p>
                <h2 className="mt-4 max-w-sm text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  Build the base. Reach the top.
                </h2>
                <p className="mt-4 max-w-sm text-sm leading-6 text-blue-100">
                  Strong fundamentals today create confident problem-solvers for
                  tomorrow&apos;s biggest exams.
                </p>
              </div>

              <div className="mt-12 space-y-3">
                {[
                  { icon: FlaskConical, label: "Physics · Chemistry · Biology · Mathematics" },
                  { icon: BookOpen, label: "School academics + competitive preparation" },
                  { icon: Target, label: "Guidance, testing, and personal mentoring" },
                ].map(({ icon: Icon, label }) => (
                  <motion.div
                    key={label}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-sm"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15">
                      <Icon size={17} className="text-cyan-200" />
                    </span>
                    <span className="text-sm font-semibold text-white">{label}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                <span className="text-xs font-bold uppercase tracking-widest text-blue-200">
                  Hyderabad&apos;s foundation coaching destination
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LearningApproach() {
  return (
    <section className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            <motion.span variants={fadeUp} className="rounded-full bg-blue-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
              Our approach
            </motion.span>
            <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          </div>

          <div className="mt-8 max-w-3xl">
            <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
              Building Strong Foundations for{" "}
              <span className="text-blue-600 dark:text-blue-400">Your Future</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
              At Ignite Academy, we believe that the right start leads to the
              right destination. Our NEET & IIT foundation classes in Hyderabad
              help students learn with clarity, consistency, and confidence.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-10 grid gap-5 md:grid-cols-3"
        >
          {learningApproach.map(({ icon: Icon, number, title, description, color }) => {
            const styles = colorStyles[color];
            return (
              <motion.div
                key={title}
                variants={cardReveal}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="relative overflow-hidden rounded-3xl bg-white p-7 shadow-sm ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800"
              >
                <span className={`absolute right-5 top-2 text-7xl font-black ${styles.number}`}>
                  {number}
                </span>
                <div className={`relative flex h-12 w-12 items-center justify-center rounded-2xl ${styles.icon}`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="relative mt-6 text-xl font-extrabold text-neutral-950 dark:text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                  {description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-8 rounded-3xl bg-linear-to-r from-blue-600 to-indigo-700 p-7 sm:p-9 shadow-md"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-blue-200">
                A complete foundation
              </p>
              <p className="mt-2 max-w-2xl text-lg font-bold leading-7 text-white">
                Our Foundation Course for IIT JEE and NEET helps students excel
                in both school academics and competitive exams.
              </p>
            </div>
            <div className="flex shrink-0 gap-2 text-3xl" aria-hidden="true">
              <span>⚛️</span>
              <span>🧪</span>
              <span>🧬</span>
              <span>🔢</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseIgnite() {
  return (
    <section className="bg-white px-6 py-20 dark:bg-neutral-950 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
            <motion.span variants={fadeUp} className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-700 dark:bg-amber-950/40 dark:text-amber-400">
              Why Ignite Academy
            </motion.span>
            <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
          </div>

          <div className="mt-8 max-w-3xl">
            <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
              Why Choose Ignite Academy for{" "}
              <span className="text-amber-500">NEET & IIT Foundation classes?</span>
            </motion.h2>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={cardReveal}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="rounded-3xl border border-neutral-100 bg-neutral-50 p-6 shadow-xs hover:shadow-md transition-shadow dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 dark:bg-amber-950/40">
                <Icon size={22} className="text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="mt-5 font-extrabold text-neutral-950 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FoundationFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40 overflow-hidden">
      <div className="mx-auto max-w-4xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center"
        >
          <motion.span variants={fadeUp} className="rounded-full bg-indigo-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300">
            Frequently Asked Questions
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-6 text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            Answers for parents and students
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-10 space-y-3"
        >
          {faqs.map(({ question, answer }, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={question}
                variants={fadeUp}
                className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                >
                  <span className="text-sm font-bold text-neutral-950 dark:text-white">
                    {index + 1}. {question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-blue-600 transition-transform duration-300 dark:text-blue-400 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-neutral-100 px-5 pb-5 pt-4 text-sm leading-7 text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
                        {answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function FoundationEnquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "" });

  function handleChange(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    submitEnquiry({ category: "foundation", source: "foundation-page", payload: form })
      .then(() => setSubmitted(true))
      .catch(() => {})
      .finally(() => setSubmitting(false));
  }

  return (
    <section className="bg-white px-6 py-20 dark:bg-neutral-950 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="overflow-hidden rounded-3xl bg-linear-to-br from-neutral-900 to-blue-950 px-8 py-12 text-center shadow-lg"
        >
          <p className="text-xs font-black uppercase tracking-widest text-blue-300">
            Enroll Today
          </p>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            Ignite Your Child&apos;s Future
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-blue-100">
            If you are searching for the best NEET & IIT foundation coaching in
            Hyderabad, Ignite Academy is the right choice. Start your child&apos;s
            journey with us today.
          </p>
        </motion.div>

        <motion.div
          variants={cardReveal}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-10 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800 border-4 border-blue-600"
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="bg-blue-600 px-8 py-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                <Mail size={22} className="text-white" />
              </div>
              <h3 className="mt-5 text-2xl font-extrabold text-white">Get in Touch With Us</h3>
              <p className="mt-3 text-sm leading-7 text-blue-100">
                Speak with our admissions team to find the right IIT JEE or NEET
                foundation path for your child.
              </p>
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-sm text-blue-100">
                  <Phone size={16} className="text-blue-300" />
                  Admissions counselling
                </div>
                <div className="flex items-center gap-3 text-sm text-blue-100">
                  <BookOpen size={16} className="text-blue-300" />
                  Course and batch guidance
                </div>
                <div className="flex items-center gap-3 text-sm text-blue-100">
                  <Target size={16} className="text-blue-300" />
                  Personalised next steps
                </div>
              </div>
            </div>

            <div className="px-8 py-10">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex h-full flex-col items-center justify-center gap-4 py-8 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/40">
                    <CheckCircle2 size={32} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-extrabold text-neutral-950 dark:text-white">
                    Thanks for reaching out!
                  </h3>
                  <p className="max-w-sm text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                    Our admissions team will contact you soon with details about
                    the right foundation course.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-extrabold text-neutral-950 dark:text-white">
                    Foundation course enquiry
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Parent / student name"
                      aria-label="Parent or student name"
                      className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                    />
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      aria-label="Phone number"
                      className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                    />
                  </div>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    aria-label="Email address"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                  />
                  <select
                    required
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    aria-label="Choose a course"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                  >
                    <option value="">Choose a foundation course</option>
                    <option>IIT JEE Foundation</option>
                    <option>NEET Foundation</option>
                    <option>IIT JEE & NEET Foundation</option>
                  </select>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-black text-white transition hover:bg-blue-700 disabled:cursor-wait disabled:opacity-60"
                  >
                    {submitting ? "Submitting..." : <>Request a Call Back <ArrowRight size={16} /></>}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function FoundationPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen pt-5 bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white"
    >
      <FoundationHero />
      <LearningApproach />
      <WhyChooseIgnite />
      <FoundationFaq />
      <FoundationEnquiry />
    </motion.div>
  );
}
