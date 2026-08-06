import { Microscope, Target, ClipboardList } from "lucide-react";

const pillars = [
  {
    icon: Microscope,
    color: "emerald",
    title: "Subject Focus",
    tag: "Biology · Physics · Chemistry",
    desc: "At Ignite, we strengthen fundamentals in Physics, Chemistry, and Biology through structured lessons that match both the Intermediate syllabus and NEET requirements. By simplifying complex topics and teaching smart problem-solving methods, we ensure students develop clarity and confidence. This subject-oriented approach places Ignite among the best inter colleges in Hyderabad for BiPC.",
    points: ["NCERT-first Biology deep dives", "Physics numericals with concept anchoring", "Organic & Inorganic Chemistry from scratch"],
  },
  {
    icon: Target,
    color: "indigo",
    title: "NEET Preparation",
    tag: "Systematic & Result-Driven",
    desc: "Ignite is regarded as the Best BiPC College with NEET Coaching because of our systematic and result-driven training. Students gain full familiarity with the NEET exam pattern, learn effective time management, and practice with proven strategies that improve performance. With personalised mentoring, every student is guided to stay competitive and exam-ready.",
    points: ["Full NEET pattern familiarity", "Time management & speed drills", "1-on-1 personalised mentor sessions"],
  },
  {
    icon: ClipboardList,
    color: "teal",
    title: "Regular Mock Tests",
    tag: "Real NEET Conditions",
    desc: "Regular assessments and full-length mock exams mirror real NEET conditions. These help students track progress, spot weak areas, and sharpen accuracy and speed. This consistent evaluation makes Ignite one of the Best Junior Colleges in Hyderabad for BiPC aspirants preparing for medical careers.",
    points: ["Full-length 200-question NEET mocks", "Subject-wise chapter tests weekly", "Detailed rank & error analysis post-test"],
  },
];

const colorMap = {
  emerald: { iconBg: "bg-emerald-600", tag: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300", dot: "bg-emerald-500", line: "from-emerald-500 to-teal-500" },
  indigo:  { iconBg: "bg-indigo-600",  tag: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300",     dot: "bg-indigo-500", line: "from-indigo-500 to-violet-500" },
  teal:    { iconBg: "bg-teal-600",    tag: "bg-teal-100 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300",             dot: "bg-teal-500",   line: "from-teal-500 to-emerald-500" },
};

export default function BIPCHowIgnite() {
  return (
    <section id="how" className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
          <span className="rounded-full bg-emerald-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
            Our Approach
          </span>
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            How Ignite Shapes{" "}
            <span className="text-emerald-600 dark:text-emerald-400">BiPC Success</span>
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Three core pillars that power every Ignite BiPC student's journey from classroom to medical college.
          </p>
        </div>

        {/* alternating layout */}
        <div className="mt-12 space-y-6">
          {pillars.map((p, i) => {
            const c = colorMap[p.color];
            const Icon = p.icon;
            const flip = i % 2 === 1;
            return (
              <div
                key={p.title}
                className={`grid items-center gap-8 overflow-hidden rounded-3xl bg-neutral-50 p-8 dark:bg-neutral-900 md:grid-cols-2 ${flip ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                {/* text side */}
                <div>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${c.tag}`}>{p.tag}</span>
                  <div className="mt-4 flex items-center gap-3">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${c.iconBg}`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-neutral-950 dark:text-white">{p.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-400">{p.desc}</p>
                </div>

                {/* points side */}
                <div className={`rounded-2xl bg-gradient-to-br p-px ${c.line}`}>
                  <div className="flex flex-col gap-4 rounded-[14px] bg-white p-6 dark:bg-neutral-900">
                    {p.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-3">
                        <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${c.dot}`} />
                        <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">{pt}</p>
                      </div>
                    ))}
                    <div className={`h-1 w-full rounded-full bg-gradient-to-r ${c.line} opacity-30`} />
                    <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Ignite BiPC · Hyderabad</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
