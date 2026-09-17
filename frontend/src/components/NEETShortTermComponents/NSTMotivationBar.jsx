import { Stethoscope, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants";

const phrases = [
  "🩺 12 months is enough - if every day is focused on 720 marks",
  "🔬 NEET rewards those who own NCERT, not those who skim it",
  "🏥 Every AIIMS doctor started as a determined Class 12 student",
  "💊 Daily mocks build the exam stamina that coaching alone cannot",
  "🧬 Biology mastery is built line by line - start now",
  "🌊 Droppers who work smart come back stronger every time",
  "🎯 Your NEET percentile is a direct reflection of your daily habits",
  "💚 One year of discipline. A lifetime of healing others.",
];

export default function NSTMotivationBar() {
  const tripled = [...phrases, ...phrases, ...phrases];

  return (
    <section className="overflow-hidden bg-linear-to-r from-green-600 via-green-500 to-green-600 py-14">

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left"
      >
        <div className="flex items-center gap-4">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm"
          >
            <Stethoscope size={26} className="text-white" />
          </motion.div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-100">Built for Urgency</p>
            <h2 className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">
              One Year. Maximum NEET Impact.
            </h2>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href="#apply"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-black text-green-700 shadow-lg transition hover:bg-neutral-950 hover:text-white"
          >
            Apply Now <ArrowRight size={16} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href="tel:+919876543210"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Call: +91 98765 43210
          </motion.a>
        </div>
      </motion.div>

      <div className="mt-10 overflow-hidden border-t border-white/20 pt-6">
        <div className="flex gap-12 whitespace-nowrap" style={{ animation: "nst-ticker 28s linear infinite" }}>
          {tripled.map((phrase, i) => (
            <span key={i} className="text-sm font-semibold text-white/85">
              {phrase}
              <span className="ml-12 text-white/30">·</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes nst-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
