import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { RouteLink } from "../../router/BrowserRouter";
import ScrollRevealText from "./ScrollRevealText";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  imageReveal,
  defaultViewport,
} from "../../animations/variants";

const highlights = [
  "Admissions open for MPC and BiPC programs.",
  "Experienced faculty with proven results in IIT-JEE, NEET & EAPCET.",
  "Modern classrooms, labs, and student-friendly campus.",
  "Focus on academics, personal growth, and career success.",
];

const tags = [
  { label: "IIT-JEE", color: "bg-orange-50 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400" },
  { label: "NEET", color: "bg-green-50 text-green-700 dark:bg-green-700/10 dark:text-green-400" },
  { label: "EAPCET", color: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400" },
  { label: "Foundation", color: "bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400" },
];

export default function HomeApply() {
  return (
    <section className="bg-neutral-50 px-4 py-14 transition-colors dark:bg-neutral-900 sm:px-8 sm:py-16 overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        {/* Text content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.span
            variants={staggerItem}
            className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400"
          >
            <ScrollRevealText text="Admissions 2026–28" className="inline-block" />
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="text-2xl font-semibold leading-tight text-neutral-900 dark:text-white sm:text-3xl"
          >
            <ScrollRevealText as="span" text="Apply for Admission" className="inline-block" />
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mt-1 text-base font-medium text-neutral-500 dark:text-neutral-400"
          >
            For the current academic year
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
          >
            We give our students not only the education but also the experiences
            that set them up for lifelong success in their career.
          </motion.p>

          <ul className="mt-5 space-y-3">
            {highlights.map((item, i) => (
              <motion.li
                variants={staggerItem}
                key={i}
                className="flex items-start gap-3"
              >
                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-400" />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">{item}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div variants={staggerItem} className="mt-6 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t.label}
                className={`rounded-full px-3 py-1 text-xs font-medium ${t.color}`}
              >
                {t.label}
              </span>
            ))}
          </motion.div>

          <motion.div variants={staggerItem} className="mt-7">
            <RouteLink
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:gap-3 active:scale-95"
            >
              Apply Now
              <ArrowRight size={15} />
            </RouteLink>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="hidden overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 md:block"
        >
          <img
            src="/assets/images/home_admission.webp"
            alt="Ignite Junior College"
            className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
}