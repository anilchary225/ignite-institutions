import { useState } from "react";
import { Trophy, Users, Heart, Star } from "lucide-react";

const defaultReasons = [
  {
    icon: Trophy,
    title: "Proven Expertise",
    description: "Years of excellence in IIT-JEE and NEET coaching with outstanding results.",
    color: "bg-orange-500",
    lightBg: "bg-orange-50 dark:bg-orange-500/10",
    textColor: "text-orange-600 dark:text-orange-400",
  },
  {
    icon: Users,
    title: "Student-Centered Focus",
    description: "Small classes and tailored schedules for personalized guidance every step.",
    color: "bg-blue-500",
    lightBg: "bg-blue-50 dark:bg-blue-500/10",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Heart,
    title: "Holistic Growth",
    description: "Equal emphasis on academics and extracurriculars for balanced development.",
    color: "bg-green-700",
    lightBg: "bg-green-50 dark:bg-green-700/10",
    textColor: "text-green-700 dark:text-green-500",
  },
  {
    icon: Star,
    title: "World-Class Faculty",
    description: "Experienced educators committed to fostering each student's unique success.",
    color: "bg-red-500",
    lightBg: "bg-red-50 dark:bg-red-500/10",
    textColor: "text-red-600 dark:text-red-400",
  },
];

export default function WhyChooseUs({
  heading = "Why Choose IGNITE Junior College?",
  reasons = defaultReasons,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-4 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <span data-aos="zoom-in" className="inline-block text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-2">
            Our Strengths
          </span>
          <h2 data-aos="zoom-in" className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
            {heading}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const active = index === activeIndex;
            const Icon = reason.icon;
            return (
              <button
                key={reason.title}
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-all duration-300 ${
                  active
                    ? `${reason.color} border-transparent text-white shadow-lg`
                    : `border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800`
                }`}
              >
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl mb-4 ${
                  active ? "bg-white/20" : reason.lightBg
                }`}>
                  <Icon size={20} className={active ? "text-white" : reason.textColor} />
                </div>
                <h3 className={`text-base font-bold mb-2 ${active ? "text-white" : "text-neutral-900 dark:text-white"}`}>
                  {reason.title}
                </h3>
                <p className={`text-sm leading-relaxed ${active ? "text-white/90" : "text-neutral-600 dark:text-neutral-400"}`}>
                  {reason.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
