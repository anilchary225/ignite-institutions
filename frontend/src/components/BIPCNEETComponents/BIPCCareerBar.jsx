import { ArrowRight, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp } from "../../animations/variants";

export default function BIPCCareerBar() {
  return (
    <section className="relative overflow-hidden bg-black dark:bg-neutral-800 px-6 py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-linear(ellipse_at_top_left,rgba(255,255,255,0.08),transparent_60%)]" />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left"
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">Your medical career awaits</p>
            <h2 className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">Start Your NEET Journey at Ignite</h2>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-black text-green-700 shadow-lg transition hover:bg-amber-400 hover:text-white"
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

      {/* ticker */}
      <div className="mt-10 overflow-hidden border-t border-white/20 pt-6">
        <div className="flex animate-[ticker_20s_linear_infinite] gap-10 whitespace-nowrap">
          {Array(3).fill([
            "🩺 NEET UG Preparation", "🧬 Biology Deep Dives", "🏥 AIIMS Selections",
            "📖 NCERT-First Methodology", "🏠 Hostel Available", "📊 Small Batch Sizes",
            "⭐ 20+ Years of Excellence", "🎯 300+ NEET Selections",
          ]).flat().map((item, i) => (
            <span key={i} className="text-sm font-semibold text-white/80">
              {item}<span className="ml-10 text-white/30">·</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`@keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-33.333%)} }`}</style>
    </section>
  );
}
