import { HeartPulse } from "lucide-react";

const phrases = [
  "🩺 Your AIIMS seat is decided 2 years before NEET",
  "🌿 Biology mastery is built one concept at a time — start now",
  "🔬 The student who understands, not memorises, wins NEET",
  "🏥 Every doctor started where you are standing today",
  "📖 NCERT is your Bible — know it beyond the last word",
  "🧬 Hard work today, white coat tomorrow",
  "🌟 Consistency across 720 marks is what separates toppers",
  "💚 Ignite your passion — AIIMS is waiting for you",
];

export default function NLTMotivationBar() {
  const doubled = [...phrases, ...phrases, ...phrases];

  return (
    <section className="overflow-hidden bg-gradient-to-r from-emerald-700 via-green-600 to-teal-700 py-14">

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/20">
            <HeartPulse size={26} className="text-white" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">The Ignite Promise</p>
            <h2 className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">
              Two Years to Your Dream Medical Seat
            </h2>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <a
            href="#apply"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-black text-emerald-700 shadow-lg transition hover:bg-emerald-50"
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

      <div className="mt-10 overflow-hidden border-t border-white/20 pt-6">
        <div className="flex gap-12 whitespace-nowrap" style={{ animation: "nlt-ticker 30s linear infinite" }}>
          {doubled.map((phrase, i) => (
            <span key={i} className="text-sm font-semibold text-white/80">
              {phrase}
              <span className="ml-12 text-white/30">·</span>
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes nlt-ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
