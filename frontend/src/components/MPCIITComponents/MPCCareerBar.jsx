import { ArrowRight, Sparkles } from "lucide-react";

export default function MPCCareerBar() {
  return (
    <section className="overflow-hidden bg-gradient-to-r from-violet-700 via-violet-600 to-indigo-700 px-6 py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20">
            <Sparkles size={26} className="text-white" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-200">
              Your journey starts here
            </p>
            <h2 className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">
              Start Your IIT JEE Journey at Ignite
            </h2>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-black text-violet-700 shadow-lg transition hover:bg-amber-400 hover:text-white"
          >
            Apply Now <ArrowRight size={16} />
          </a>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Call Us: +91 98765 43210
          </a>
        </div>
      </div>

      {/* scrolling ticker below */}
      <div className="mt-10 overflow-hidden border-t border-white/20 pt-6">
        <div className="flex animate-[ticker_18s_linear_infinite] gap-10 whitespace-nowrap">
          {Array(3).fill([
            "🎯 IIT JEE Main & Advanced",
            "📚 Integrated Board + JEE",
            "🏆 500+ IIT Selections",
            "🧑‍🏫 IIT/NIT Alumni Faculty",
            "🏠 Hostel Available",
            "📊 Small Batch Sizes",
            "🌟 20+ Years of Excellence",
          ]).flat().map((item, i) => (
            <span key={i} className="text-sm font-semibold text-white/80">
              {item}
              <span className="ml-10 text-white/30">·</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
