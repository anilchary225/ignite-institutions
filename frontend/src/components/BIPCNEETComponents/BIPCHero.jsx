import { ArrowRight, Microscope, Heart, Dna } from "lucide-react";

const subjects = [
  { icon: Dna,        label: "Biology",   sub: "Botany & Zoology", color: "emerald" },
  { icon: Microscope, label: "Physics",   sub: "Concepts & Numericals", color: "indigo" },
  { icon: Heart,      label: "Chemistry", sub: "Organic & Inorganic", color: "rose" },
];

const colorMap = {
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-800",
  indigo:  "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/30 dark:text-indigo-300 dark:border-indigo-800",
  rose:    "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/30 dark:text-rose-300 dark:border-rose-800",
};

export default function BIPCHero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-indigo-950 via-indigo-900 to-emerald-950 px-6 pt-16 pb-20">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 ring-1 ring-emerald-500/30">
              <Microscope size={14} className="text-emerald-400" />
              <span className="text-xs font-black uppercase tracking-widest text-emerald-300">
                BiPC · NEET UG Coaching
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Your dream of{" "}
              <span className="bg-linear-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                becoming a doctor
              </span>{" "}
              starts here.
            </h1>

            <p className="mt-5 text-base leading-7 text-indigo-200">
              Ignite's BiPC programme combines Intermediate board mastery with
              systematic NEET UG preparation - Biology, Physics & Chemistry
              taught by expert faculty for both board excellence and top NEET ranks.
            </p>

            {/* subject cards */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {subjects.map(({ icon: Icon, label, sub, color }) => (
                <div key={label} className={`flex flex-col items-center gap-2 rounded-2xl border px-3 py-4 text-center ${colorMap[color]}`}>
                  <Icon size={20} />
                  <div>
                    <p className="text-sm font-extrabold">{label}</p>
                    <p className="text-xs opacity-70">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-black text-white transition hover:bg-emerald-400">
                Apply Now <ArrowRight size={16} />
              </a>
              <a href="#program" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20">
                View Programme
              </a>
            </div>
          </div>

          {/* RIGHT - image + floating info cards */}
          <div className="relative flex flex-col justify-between gap-5 rounded-3xl bg-indigo-950/20 p-5 backdrop-blur-sm">
            <div className="overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl">
              <img
                src="/assets/images/events/Science Lab/DSC00036.webp"
                alt="BiPC NEET Classroom"
                className="h-80 w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-indigo-950/80 to-transparent" />
            </div>

            {/* floating stat pills */}
            <div className="absolute -left-5 top-8 rounded-2xl bg-white px-4 py-3 shadow-xl dark:bg-neutral-900">
              <p className="text-xs font-semibold text-neutral-500">NEET Selections</p>
              <p className="text-2xl font-black text-emerald-600">300+</p>
            </div>
            <div className="absolute -right-5 top-32 rounded-2xl bg-white px-4 py-3 shadow-xl dark:bg-neutral-900">
              <p className="text-xs font-semibold text-neutral-500">Board Pass Rate</p>
              <p className="text-2xl font-black text-indigo-600">98%</p>
            </div>

            {/* bottom apply card */}
            <div className=" inset-x-4 bottom-4 rounded-t-2xl bg-white/90 p-5 backdrop-blur-sm dark:bg-neutral-900/90">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">Admissions Open · 2025–26</p>
              <p className="mt-1 text-base font-extrabold text-neutral-950 dark:text-white">BiPC - NEET UG Integrated Batch</p>
              <a href="#contact" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-black text-white transition hover:bg-emerald-700">
                Secure Your Seat <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
