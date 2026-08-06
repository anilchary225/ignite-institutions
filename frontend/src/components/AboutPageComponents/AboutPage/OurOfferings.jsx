import {
    BookOpen,
    GraduationCap,
    Building2,
    Globe2,
    School,
    Award,
  } from "lucide-react";

  const defaultOfferings = [
    { icon: BookOpen, label: "INTERMEDIATE (MPC) + JEE", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-500/10" },
    { icon: GraduationCap, label: "Long-term JEE Coaching", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10" },
    { icon: Building2, label: "INTERMEDIATE + NEET (BIPC)", color: "text-green-700", bg: "bg-green-50 dark:bg-green-700/10" },
    { icon: Globe2, label: "Long-term NEET Coaching", color: "text-red-500", bg: "bg-red-50 dark:bg-red-500/10" },
    { icon: BookOpen, label: "IIT JEE Short Term", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-500/10" },
    { icon: GraduationCap, label: "NEET Short Term", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10" },
    { icon: Award, label: "EAPCET", color: "text-green-700", bg: "bg-green-50 dark:bg-green-700/10" },
    { icon: Globe2, label: "BITSAT", color: "text-red-500", bg: "bg-red-50 dark:bg-red-500/10" },
    { icon: School, label: "School Programs", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-500/10" },
    { icon: Award, label: "Foundation", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10" },
  ];

  export default function OurOfferings({
    heading = "Our Offerings",
    description = "Specialized programs designed to prepare students for their academic and career journeys:",
    offerings = defaultOfferings,
  }) {
    return (
      <section className="px-4 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-2">
              Programs
            </span>
            <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
              {heading}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-neutral-600 dark:text-neutral-400 text-sm">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {offerings.map(({ icon: Icon, label, color, bg }, index) => (
              <div
                key={index}
                className={`rounded-xl border border-neutral-200 dark:border-neutral-700 ${bg} p-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md`}
              >
                <Icon className={`mx-auto ${color}`} size={26} />
                <p className={`mt-3 text-xs font-bold ${color} leading-snug`}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
