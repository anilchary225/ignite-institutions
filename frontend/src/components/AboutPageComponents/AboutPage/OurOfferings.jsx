import {
    BookOpen,
    GraduationCap,
    Building2,
    Globe2,
    School,
    Award,
  } from "lucide-react";
  
  const defaultOfferings = [
    { icon: BookOpen, label: "INTERMEDIATE (MPC) + JEE (Main & Advanced)" },
    { icon: GraduationCap, label: "Long-term JEE (Main & Advanced) Coaching" },
    { icon: Building2, label: "INTERMEDIATE + NEET (BIPC)" },
    { icon: Globe2, label: "Long-term NEET Coaching" },
    { icon: BookOpen, label: "IIT JEE Short Term" },
    { icon: GraduationCap, label: "NEET Short Term" },
    { icon: Award, label: "EAPCET" },
    { icon: Globe2, label: "BITSAT" },
    { icon: School, label: "School" },
    { icon: Award, label: "Foundation" },
  ];
  
  export default function OurOfferings({
    heading = "Our Offerings",
    description = "We offer a range of specialized programs designed to prepare students for their academic and career journeys:",
    offerings = defaultOfferings,
  }) {
    return (
      <section className="bg-white px-6 py-16 text-center dark:bg-neutral-950 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl font-black text-emerald-600 sm:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-neutral-700 dark:text-neutral-300">
            {description}
          </p>
  
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
            {offerings.map(({ icon: Icon, label }, index) => (
              <div
                key={index}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
              >
                <Icon className="mx-auto text-orange-500" size={32} />
                <p className="mt-4 font-bold text-orange-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }