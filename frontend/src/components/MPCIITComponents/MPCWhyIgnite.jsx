import { ShieldCheck, GraduationCap, User, Building2, Award } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    color: "violet",
    title: "Holistic Approach",
    desc: "Ignite Academy offers the best of both worlds — a strong foundation in MPC subjects along with expert coaching for competitive exams. Our integrated curriculum ensures students perform well in both board exams and IIT JEE Mains & Advanced, making us one of the top MPC colleges in Hyderabad.",
  },
  {
    icon: GraduationCap,
    color: "indigo",
    title: "Experienced Faculty",
    desc: "Our faculty members bring years of experience in guiding students toward success in competitive exams. Having mentored thousands of aspirants, they combine deep subject knowledge with a passion for teaching — which is why Ignite is recognised among the best junior colleges in Hyderabad for MPC.",
  },
  {
    icon: User,
    color: "sky",
    title: "Personalized Coaching",
    desc: "Every student learns differently, and our approach reflects that. With small batch sizes, we provide personalised attention, helping students balance board exam preparation with IIT coaching. This makes Ignite a trusted choice for those seeking the best MPC junior colleges in Hyderabad.",
  },
  {
    icon: Building2,
    color: "emerald",
    title: "State-of-the-Art Infrastructure",
    desc: "Modern classrooms, digital tools, and a practical learning environment set Ignite apart. Students are motivated and inspired to excel, both academically and personally, in an atmosphere that supports growth.",
  },
  {
    icon: Award,
    color: "amber",
    title: "Proven Track Record",
    desc: "As one of the best intermediate colleges in Hyderabad for MPC, Ignite Academy has consistently produced top results in JEE Mains and Advanced. Year after year, our students secure strong ranks — testament to our structured approach and commitment to excellence.",
  },
];

const colorMap = {
  violet:  { bg: "bg-violet-600", light: "bg-violet-50 dark:bg-violet-950/20", border: "border-violet-100 dark:border-violet-900/40", text: "text-violet-600 dark:text-violet-400" },
  indigo:  { bg: "bg-indigo-600", light: "bg-indigo-50 dark:bg-indigo-950/20", border: "border-indigo-100 dark:border-indigo-900/40", text: "text-indigo-600 dark:text-indigo-400" },
  sky:     { bg: "bg-sky-500",    light: "bg-sky-50 dark:bg-sky-950/20",       border: "border-sky-100 dark:border-sky-900/40",         text: "text-sky-600 dark:text-sky-400" },
  emerald: { bg: "bg-emerald-600",light: "bg-emerald-50 dark:bg-emerald-950/20",border:"border-emerald-100 dark:border-emerald-900/40",  text: "text-emerald-600 dark:text-emerald-400" },
  amber:   { bg: "bg-amber-500",  light: "bg-amber-50 dark:bg-amber-950/20",   border: "border-amber-100 dark:border-amber-900/40",     text: "text-amber-600 dark:text-amber-400" },
};

export default function MPCWhyIgnite() {
  return (
    <section id="why" className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <span className="rounded-full bg-amber-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-amber-700 dark:bg-amber-950/40 dark:text-amber-400">
            Why Choose Ignite
          </span>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            Why Choose Ignite for{" "}
            <span className="text-violet-600 dark:text-violet-400">MPC IIT Coaching?</span>
          </h2>
          <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Five reasons thousands of Hyderabad families trust Ignite to prepare their children for IIT JEE.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => {
            const c = colorMap[r.color];
            const Icon = r.icon;
            return (
              <div key={r.title} className={`flex flex-col gap-4 rounded-3xl border p-7 ${c.light} ${c.border}`}>
                <div className="flex items-center gap-3">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${c.bg}`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <span className={`text-xs font-black ${c.text}`}>0{i + 1}</span>
                </div>
                <h3 className="text-lg font-extrabold text-neutral-950 dark:text-white">{r.title}</h3>
                <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-400">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
