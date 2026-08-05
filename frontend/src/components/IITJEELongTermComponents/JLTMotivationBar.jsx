import { Flame } from "lucide-react";

const phrases = [
  "🎯 Your IIT rank is decided 2 years before the exam",
  "🔥 Consistency beats intensity — every single time",
  "📚 The student who starts early, finishes first",
  "🌟 Average students don't go to IIT. Disciplined ones do",
  "🏆 Your future self is watching what you do today",
  "⚡ Hard problems now. Easy decisions later",
  "🧠 Think deeper. Score higher. Dream bigger",
  "🚀 Ignite your potential — the IITs are waiting",
];

export default function JLTMotivationBar() {
  const doubled = [...phrases, ...phrases, ...phrases];

  return (
    <section className="overflow-hidden bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-700 py-14">

      {/* main CTA row */}
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20">
            <Flame size={26} className="text-white" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-200">
              The Ignite Promise
            </p>
            <h2 className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">
              Two Years Can Change Everything
            </h2>
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <a
            href="#apply"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-black text-indigo-700 shadow-lg transition hover:bg-amber-400 hover:text-white"
          >
            Start Your Journey
          </a>
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Call: +91 98765 43210
          </a>
        </div>
      </div>

      {/* scrolling motivational ticker */}
      <div className="mt-10 overflow-hidden border-t border-white/20 pt-6">
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{ animation: "jlt-ticker 30s linear infinite" }}
        >
          {doubled.map((phrase, i) => (
            <span key={i} className="text-sm font-semibold text-white/80">
              {phrase}
              <span className="ml-12 text-white/30">·</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes jlt-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
