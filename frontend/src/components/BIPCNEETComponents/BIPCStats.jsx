const stats = [
  { value: "300+",  label: "NEET Selections",     icon: "🩺" },
  { value: "6000+", label: "Students Trained",     icon: "🎓" },
  { value: "98%",   label: "Board Pass Rate",      icon: "📋" },
  { value: "720",   label: "Perfect NEET Scorers", icon: "🏆" },
  { value: "20+",   label: "Years of Excellence",  icon: "⭐" },
  { value: "8+",    label: "Branches",             icon: "📍" },
];

export default function BIPCStats() {
  return (
    <section className="bg-white px-6 py-12 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-indigo-700 p-1 shadow-xl">
          <div className="rounded-[22px] bg-white dark:bg-neutral-950">
            <div className="grid grid-cols-2 divide-neutral-100 sm:grid-cols-3 lg:grid-cols-6 dark:divide-neutral-800">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col items-center px-5 py-8 text-center ${
                    i < stats.length - 1 ? "border-b border-neutral-100 sm:border-b-0 sm:border-r dark:border-neutral-800" : ""
                  }`}
                >
                  <span className="text-3xl">{s.icon}</span>
                  <p className="mt-2 text-2xl font-black text-emerald-700 dark:text-emerald-400">{s.value}</p>
                  <p className="mt-0.5 text-xs font-semibold text-neutral-500 dark:text-neutral-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
