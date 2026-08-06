import { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  MapPin,
  Medal,
  Star,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { RouteLink } from "../router/BrowserRouter";

/* ──────────────────────────── DATA ──────────────────────────── */

const bannerSlides = [
  {
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=85",
    eyebrow: "Results 2025",
    title: "Our students keep raising the bar.",
    sub: "IIT-JEE · JEE Advanced · NEET · EAPCET · BITSAT — every exam, every year.",
    tone: "from-violet-950/95 via-violet-950/55 to-transparent",
  },
  {
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1800&q=85",
    eyebrow: "18 Years of Excellence",
    title: "12 000+ students. Thousands of top ranks.",
    sub: "From foundation batches to JC 2 — Ignite's results speak louder every year.",
    tone: "from-sky-950/95 via-sky-950/55 to-transparent",
  },
  {
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1800&q=85",
    eyebrow: "Board Results 2025",
    title: "100% pass rate. Hundreds of distinctions.",
    sub: "MPC and BiPC students shine at Intermediate level year after year.",
    tone: "from-amber-950/95 via-amber-950/55 to-transparent",
  },
];

const overallStats = [
  { exam: "IIT-JEE Mains", count: "340+", icon: BookOpen, color: "violet", year: "2025" },
  { exam: "JEE Advanced", count: "120+", icon: Award,    color: "indigo", year: "2025" },
  { exam: "NEET",          count: "480+", icon: Medal,    color: "rose",   year: "2025" },
  { exam: "EAPCET",        count: "890+", icon: Trophy,   color: "sky",    year: "2025" },
  { exam: "BITSAT",        count: "60+",  icon: Star,     color: "amber",  year: "2025" },
];

/* ── portrait photo pool (placeholder — replace with real student photos) ── */
const photoPool = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&h=300&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&h=300&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=240&h=300&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=240&h=300&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&h=300&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=240&h=300&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=240&h=300&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1463453091185-61582044d556?w=240&h=300&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=240&h=300&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=240&h=300&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=240&h=300&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=240&h=300&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=240&h=300&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=240&h=300&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1557862921-37829c790f19?w=240&h=300&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=240&h=300&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=240&h=300&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=240&h=300&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=240&h=300&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=240&h=300&fit=crop&crop=faces",
];

/* ── helper: generate 10 placeholder profiles ── */
function makeProfiles(names, exam, yearTag) {
  return names.map((name, i) => ({
    id: `${exam}-${yearTag}-${i}`,
    name,
    hallTicket: `IG${yearTag}${String(10001 + i * 137).padStart(5, "0")}`,
    score: exam === "NEET"   ? `${720 - i * 8} / 720`
         : exam === "JEE"    ? `${(99.9 - i * 0.25).toFixed(2)} %ile`
         : exam === "INTER"  ? `${98 - i}%`
         : exam === "EAPCET" ? `Rank ${i + 1}`
         :                     `${(99.8 - i * 0.2).toFixed(2)} %ile`,
    rank: exam === "NEET"   ? `AIR ${i * 4 + 1}`
        : exam === "JEE"    ? `AIR ${i * 45 + 1}`
        : exam === "INTER"  ? `State ${i + 1}`
        : exam === "EAPCET" ? `${i * 8 + 1}`
        :                     `AIR ${i * 18 + 1}`,
    percentile: exam === "INTER" ? null
              : exam === "NEET"  ? `${(99.99 - i * 0.04).toFixed(2)}`
              : `${(99.9 - i * 0.2).toFixed(2)}`,
    category: ["General","OBC","General","EWS","SC","General","OBC","General","ST","General"][i % 10],
    photo: photoPool[(i + yearTag.charCodeAt(0)) % photoPool.length],
    college: "Ignite Junior College",
  }));
}

const resultGroups = [
  {
    id: "neet-2026", color: "rose", examType: "NEET",
    title: "IGNITE JUNIOR COLLEGE — NEET 2026 RESULT",
    profiles: makeProfiles(["Ananya Reddy","Kiran Sharma","Divya Nair","Rohit Patel","Shreya Singh","Meghana Rao","Tarun Verma","Sruthi Iyer","Akash Naidu","Preethi Devi"], "NEET", "26"),
  },
  {
    id: "neet-2024-25", color: "rose", examType: "NEET",
    title: "IGNITE JUNIOR COLLEGE — NEET 2024-25 RESULT",
    profiles: makeProfiles(["Priya Rao","Aditya Kumar","Meena Pillai","Sai Krishna","Lakshmi Devi","Ravi Shankar","Sowmya Nair","Naresh Babu","Bindu Reddy","Chetan Rao"], "NEET", "25"),
  },
  {
    id: "ipe-2025-mpc", color: "amber", examType: "INTER",
    title: "IGNITE JUNIOR COLLEGE — IPE 2025 RESULTS (MPC)",
    profiles: makeProfiles(["Arjun Mehta","Sneha Varma","Nikhil Teja","Pooja Iyer","Vivek Choudhary","Kavitha Reddy","Manoj Sharma","Swati Nair","Rajan Pillai","Divya Sree"], "INTER", "25M"),
  },
  {
    id: "ipe-2025-bipc", color: "emerald", examType: "INTER",
    title: "IGNITE JUNIOR COLLEGE — IPE 2025 RESULTS (BIPC)",
    profiles: makeProfiles(["Kavya Shetty","Rahul Nair","Deepika Rao","Harish Babu","Amrutha Reddy","Sreekanth Rao","Pallavi Devi","Venu Gopal","Nithya Nair","Satish Kumar"], "INTER", "25B"),
  },
  {
    id: "jee-adv-2025", color: "violet", examType: "JEE",
    title: "IGNITE JUNIOR COLLEGE — JEE ADVANCED RESULTS 2025",
    profiles: makeProfiles(["Rishi Kapoor","Tanvi Shah","Karthik Menon","Aarav Gupta","Ishaan Joshi","Rohan Verma","Priya Nair","Suresh Rao","Keerthi Devi","Sanjay Kumar"], "JEE", "25A"),
  },
  {
    id: "eapcet-2025", color: "sky", examType: "EAPCET",
    title: "IGNITE JUNIOR COLLEGE — EAPCET RESULTS 2025",
    profiles: makeProfiles(["Durga Prasad","Sravani Reddy","Mohan Rao","Bhavana Naidu","Suresh Varma","Akhil Teja","Madhuri Pillai","Venkat Sai","Radha Krishna","Sunitha Rao"], "EAPCET", "25E"),
  },
  {
    id: "jee-2025", color: "indigo", examType: "JEE",
    title: "IGNITE JUNIOR COLLEGE — JEE RESULTS 2025",
    profiles: makeProfiles(["Dev Sharma","Riya Patel","Aakash Rao","Nandini Verma","Siddharth Kumar","Pavani Reddy","Krishna Teja","Swapna Nair","Arun Babu","Leela Devi"], "JEE", "25J"),
  },
  {
    id: "jee-adv-2024", color: "violet", examType: "JEE",
    title: "IGNITE JUNIOR COLLEGE — JEE ADVANCED RESULTS 2024",
    profiles: makeProfiles(["Pranav Iyer","Kritika Nair","Varun Pillai","Aditi Gupta","Yash Mehta","Sravan Kumar","Hema Latha","Nagarjuna Rao","Meghna Sharma","Pavan Teja"], "JEE", "24A"),
  },
  {
    id: "neet-2024-top", color: "rose", examType: "NEET",
    title: "IGNITE JUNIOR COLLEGE — NEET RESULTS 2024 TOP RESULTS",
    profiles: makeProfiles(["Haritha Reddy","Sai Teja","Mounika Sharma","Naveen Kumar","Swathi Rao","Bharath Naidu","Sindhu Pillai","Ramesh Varma","Jyothi Devi","Anil Rao"], "NEET", "24T"),
  },
  {
    id: "iit-2024", color: "violet", examType: "JEE",
    title: "IGNITE JUNIOR COLLEGE — IIT RESULTS 2024",
    profiles: makeProfiles(["Abhinav Raj","Pooja Singh","Kiran Babu","Shruti Verma","Manish Naik","Tejaswi Rao","Anitha Nair","Vijay Krishna","Rekha Pillai","Sunil Sharma"], "JEE", "24I"),
  },
  {
    id: "inter-2024", color: "amber", examType: "INTER",
    title: "IGNITE JUNIOR COLLEGE — INTER RESULTS 2024",
    profiles: makeProfiles(["Venkat Rao","Jyothi Reddy","Anil Kumar","Swapna Devi","Ramesh Babu","Priya Varma","Chetan Nair","Madhavi Latha","Srikanth Pillai","Kavitha Rao"], "INTER", "24R"),
  },
  {
    id: "sr-inter-2024", color: "amber", examType: "INTER",
    title: "SR. INTER RESULTS 2024",
    profiles: makeProfiles(["Chandra Sekhar","Padma Latha","Sunil Varma","Rekha Nair","Vijay Krishna","Anusha Reddy","Srinath Babu","Pallavi Sharma","Ganesh Rao","Uma Devi"], "INTER", "24S"),
  },
  {
    id: "jr-inter-2024", color: "amber", examType: "INTER",
    title: "JR. INTER RESULTS 2024",
    profiles: makeProfiles(["Tejaswi Raju","Bhargavi Sharma","Akash Teja","Lavanya Reddy","Praneet Rao","Durga Rao","Sravya Nair","Mohan Babu","Keerthi Pillai","Naresh Kumar"], "INTER", "24J"),
  },
  {
    id: "iit-2021", color: "indigo", examType: "JEE",
    title: "IGNITE JUNIOR COLLEGE — IIT RESULTS 2021",
    profiles: makeProfiles(["Santhosh Kumar","Nirmala Devi","Prasad Rao","Kavitha Menon","Ajay Sharma","Ravi Teja","Sunitha Varma","Mahesh Naidu","Preethi Reddy","Vikas Pillai"], "JEE", "21I"),
  },
  {
    id: "inter-bipc-2021", color: "emerald", examType: "INTER",
    title: "IGNITE JUNIOR COLLEGE — INTER BiPC RESULTS 2021 (State Ranks)",
    profiles: makeProfiles(["Anuradha Pillai","Suresh Naidu","Madhavi Latha","Ravi Shankar","Sumitra Reddy","Bhavana Rao","Srinivas Varma","Deepa Nair","Kiran Babu","Swetha Sharma"], "INTER", "21B"),
  },
  {
    id: "inter-mpc-2021", color: "emerald", examType: "INTER",
    title: "IGNITE JUNIOR COLLEGE — INTER MPC RESULTS 2021 (State Ranks)",
    profiles: makeProfiles(["Rajesh Verma","Sunitha Rao","Murali Krishna","Preethi Nair","Ganesh Babu","Navya Reddy","Hari Prasad","Vaishnavi Devi","Sai Ram Rao","Meena Varma"], "INTER", "21M"),
  },
  {
    id: "neet-2021", color: "rose", examType: "NEET",
    title: "IGNITE IIT & MEDICAL ACADEMY — NEET 2021 (LT, ST & SR. INTER)",
    profiles: makeProfiles(["Amulya Reddy","Nithin Kumar","Divyashree Rao","Srikanth Pillai","Tejaswini Sharma","Lokesh Naidu","Sailaja Devi","Chaitanya Babu","Rohini Nair","Praveen Rao"], "NEET", "21N"),
  },
  {
    id: "neet-2020", color: "rose", examType: "NEET",
    title: "IGNITE IIT & MEDICAL ACADEMY — 2020 NEET TOPPERS",
    profiles: makeProfiles(["Keerthi Nair","Mahesh Varma","Pavithra Iyer","Balaji Reddy","Sindhu Rao","Nagaraju Pillai","Sushma Devi","Prabhakar Babu","Lavanya Nair","Sudheer Kumar"], "NEET", "20N"),
  },
  {
    id: "iit-mains-2020", color: "indigo", examType: "JEE",
    title: "IGNITE IIT & MEDICAL ACADEMY — 2020 IIT MAINS",
    profiles: makeProfiles(["Harsha Vardhan","Swati Gupta","Manoj Kumar","Durga Rao","Ravi Teja","Anupama Reddy","Sridhar Pillai","Bhanu Priya","Girish Rao","Kavya Sharma"], "JEE", "20J"),
  },
  {
    id: "neet-2018-19", color: "rose", examType: "NEET",
    title: "IGNITE IIT & MEDICAL ACADEMY — NEET 2018-2019 RESULT",
    profiles: makeProfiles(["Bhanu Prasad","Aruna Devi","Chaitanya Rao","Hema Latha","Srinivas Kumar","Vandana Reddy","Abhishek Nair","Jhansi Rani","Venkatesh Babu","Padma Varma"], "NEET", "19N"),
  },
  {
    id: "jee-jan-2020", color: "violet", examType: "JEE",
    title: "IGNITE IIT & MEDICAL ACADEMY — 2019-20 BATCH · JEE-MAIN JANUARY 2020 TOP 10",
    profiles: makeProfiles(["Vamshi Krishna","Lakshmi Narayana","Naga Sai","Padmavathi","Sudheer Reddy","Teja Varma","Sirisha Nair","Kranthi Kumar","Bhavana Pillai","Uday Rao"], "JEE", "20J1"),
  },
  {
    id: "iit-mains-2018-19", color: "violet", examType: "JEE",
    title: "IGNITE IIT & MEDICAL ACADEMY — IIT MAINS RESULT 2018-19",
    profiles: makeProfiles(["Satya Narayana","Jhansi Lakshmi","Bhaskar Rao","Uma Devi","Trinadh Kumar","Sowjanya Reddy","Ramakrishna Nair","Swapna Rao","Subhash Pillai","Anitha Varma"], "JEE", "19J"),
  },
];

/* ── color map ── */
const colorMap = {
  violet:  { badge: "bg-violet-600 text-white",  ring: "ring-violet-300 dark:ring-violet-800",  icon: "bg-violet-100 text-violet-600 dark:bg-violet-950/50 dark:text-violet-300", text: "text-violet-700 dark:text-violet-400",  bar: "bg-violet-600"  },
  indigo:  { badge: "bg-indigo-600 text-white",   ring: "ring-indigo-300 dark:ring-indigo-800",   icon: "bg-indigo-100 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-300",  text: "text-indigo-700 dark:text-indigo-400",   bar: "bg-indigo-600"  },
  sky:     { badge: "bg-sky-500 text-white",      ring: "ring-sky-300 dark:ring-sky-800",         icon: "bg-sky-100 text-sky-600 dark:bg-sky-950/50 dark:text-sky-300",              text: "text-sky-700 dark:text-sky-400",         bar: "bg-sky-500"     },
  rose:    { badge: "bg-rose-500 text-white",     ring: "ring-rose-300 dark:ring-rose-800",       icon: "bg-rose-100 text-rose-600 dark:bg-rose-950/50 dark:text-rose-300",           text: "text-rose-700 dark:text-rose-400",       bar: "bg-rose-500"    },
  amber:   { badge: "bg-amber-500 text-white",    ring: "ring-amber-300 dark:ring-amber-800",     icon: "bg-amber-100 text-amber-600 dark:bg-amber-950/50 dark:text-amber-300",       text: "text-amber-700 dark:text-amber-400",     bar: "bg-amber-500"   },
  emerald: { badge: "bg-emerald-500 text-white",  ring: "ring-emerald-300 dark:ring-emerald-800", icon: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-300",text: "text-emerald-700 dark:text-emerald-400", bar: "bg-emerald-500" },
};

/* ──────────────────────── SECTION 1 — BANNER ───────────────── */

function ResultBanner() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const t = window.setInterval(() => setActive((i) => (i + 1) % bannerSlides.length), 5500);
    return () => window.clearInterval(t);
  }, [paused]);

  const slide = bannerSlides[active];

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Full-width image + gradient */}
      <div
        className="relative h-[540px] w-full transition-all duration-1000 sm:h-[620px] lg:h-[700px]"
        style={{ backgroundImage: `url(${slide.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className={`absolute inset-0 bg-gradient-to-r ${slide.tone}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-4xl px-6 pb-12 sm:px-10 lg:px-16">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-violet-200">{slide.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              {slide.title}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/75 sm:text-base">{slide.sub}</p>

            {/* Dot nav */}
            <div className="mt-8 flex items-center gap-3">
              {bannerSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all ${i === active ? "w-10 bg-white" : "w-2.5 bg-white/40 hover:bg-white/60"}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
              <button
                type="button"
                onClick={() => setActive((active - 1 + bannerSlides.length) % bannerSlides.length)}
                className="ml-auto grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-neutral-950"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => setActive((active + 1) % bannerSlides.length)}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition hover:bg-white hover:text-neutral-950"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── SECTION 2 — STATS ────────────────── */

function SelectionStats() {
  return (
    <section className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-violet-700 dark:bg-violet-950/40 dark:text-violet-400">
            <Zap size={12} />
            2025 Selections at a Glance
          </span>
          <h2 className="max-w-2xl text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
            Total students selected — 2025
          </h2>
          <p className="max-w-xl text-sm leading-6 text-neutral-500 dark:text-neutral-400">
            Across every major entrance exam, Ignite students consistently place among the nation's best.
          </p>
        </div>

        <div className="mt-12 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {overallStats.map((s) => {
            const Icon = s.icon;
            const c = colorMap[s.color];
            return (
              <div
                key={s.exam}
                className="flex flex-col items-center gap-3 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
              >
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${c.icon}`}>
                  <Icon size={22} />
                </span>
                <span className="text-3xl font-black text-neutral-950 dark:text-white">{s.count}</span>
                <div>
                  <p className="text-sm font-extrabold text-neutral-800 dark:text-neutral-200">{s.exam}</p>
                  <p className="mt-0.5 text-[11px] text-neutral-500">Selections · {s.year}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── SECTION 3 — PROFILES ─────────────── */

function ProfileCard({ profile, color }) {
  const c = colorMap[color];
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-2 ring-amber-400 transition hover:-translate-y-1 hover:shadow-xl dark:bg-neutral-900 dark:ring-amber-500/70">
      {/* Portrait photo */}
      <div className="relative w-full overflow-hidden bg-neutral-200 dark:bg-neutral-800" style={{ aspectRatio: "3/4" }}>
        <img
          src={profile.photo}
          alt={profile.name}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
        {/* Rank badge overlay */}
        <span className={`absolute left-2 top-2 rounded-md px-2 py-0.5 text-[10px] font-black shadow ${c.badge}`}>
          {profile.rank}
        </span>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-0.5 bg-white px-2.5 py-2 dark:bg-neutral-900">
        <p className="truncate text-xs font-extrabold leading-snug text-neutral-950 dark:text-white">
          {profile.name}
        </p>
        <p className={`text-[10px] font-bold ${c.text}`}>{profile.score}</p>
        {profile.percentile && (
          <p className="text-[10px] text-neutral-500">{profile.percentile} %ile</p>
        )}
        <p className="truncate text-[10px] text-neutral-400">{profile.hallTicket}</p>
      </div>
    </div>
  );
}

function ResultGroupSection({ group }) {
  const c = colorMap[group.color];

  return (
    <div className="mt-14 first:mt-0">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-3">
        <span className={`h-5 w-1.5 shrink-0 rounded-full ${c.bar}`} />
        <h3 className="text-base font-extrabold text-neutral-950 sm:text-lg dark:text-white leading-snug">
          {group.title}
        </h3>
        <span className={`ml-auto rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-widest ${c.badge}`}>
          {group.examType}
        </span>
      </div>

      {/* Grid — 3 cols mobile → 4 sm → 5 md → 6 lg → 7 xl */}
      <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8">
        {group.profiles.map((p) => (
          <ProfileCard key={p.id} profile={p} color={group.color} />
        ))}
      </div>
    </div>
  );
}

function AllResults() {
  const years = [
    { label: "2025 – 2026", ids: ["neet-2026","neet-2024-25","ipe-2025-mpc","ipe-2025-bipc","jee-adv-2025","eapcet-2025","jee-2025"] },
    { label: "2024",         ids: ["jee-adv-2024","neet-2024-top","iit-2024","inter-2024","sr-inter-2024","jr-inter-2024"] },
    { label: "2018 – 2021",  ids: ["iit-2021","inter-bipc-2021","inter-mpc-2021","neet-2021","neet-2020","iit-mains-2020","neet-2018-19","jee-jan-2020","iit-mains-2018-19"] },
  ];

  return (
    <section className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-violet-500" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-violet-700 dark:text-violet-400">
                Hall of Excellence
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
              Student results, year by year
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-600 dark:text-neutral-400">
              Every rank below belongs to a student who trusted Ignite and gave it everything they had.
            </p>
          </div>
        </div>

        {years.map((yr) => {
          const groups = resultGroups.filter((g) => yr.ids.includes(g.id));
          return (
            <div key={yr.label} className="mt-16">
              {/* Year divider */}
              <div className="flex items-center gap-4">
                <span className="text-xs font-black uppercase tracking-[0.25em] text-neutral-400">
                  {yr.label}
                </span>
                <span className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
              </div>
              {groups.map((g) => (
                <ResultGroupSection key={g.id} group={g} />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ──────────────────────── FINAL — MOTIVATION + APPLY ───────── */

const quotes = [
  { text: "Your rank doesn't define your beginning. It defines how hard you worked.", by: "Ignite Faculty" },
  { text: "Thousands of our students once sat where you sit now. They trusted the process. So can you.", by: "Ignite Alumni" },
  { text: "Excellence is not a destination — it's the standard we set every single day.", by: "Ignite Academy" },
];

function MotivationStrip() {
  const [qi, setQi] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setQi((i) => (i + 1) % quotes.length), 4500);
    return () => window.clearInterval(t);
  }, []);

  return (
    <section className="bg-white px-6 py-24 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl">
        {/* Rotating motivational quote */}
        <div className="flex flex-col items-center gap-5 text-center">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === qi ? "w-8 bg-violet-600" : "w-2 bg-neutral-300 dark:bg-neutral-700"}`}
              />
            ))}
          </div>
          <blockquote className="max-w-3xl text-2xl font-extrabold italic leading-snug text-neutral-950 sm:text-3xl dark:text-white transition-all duration-500">
            "{quotes[qi].text}"
          </blockquote>
          <p className="text-sm font-bold text-neutral-500">— {quotes[qi].by}</p>
        </div>

        {/* Three pillars */}
        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {[
            { icon: GraduationCap, color: "violet", title: "Expert Faculty", desc: "Every teacher at Ignite is selected for both their subject mastery and their ability to inspire students." },
            { icon: Trophy,        color: "amber",  title: "Proven Methods", desc: "Our study plans are built on 18+ years of analysing what actually works for JEE, NEET, and board exams." },
            { icon: Users,         color: "sky",    title: "Peer Excellence", desc: "When every student around you is aiming high, ambition becomes contagious. That's the Ignite environment." },
          ].map((p) => {
            const Icon = p.icon;
            const c = colorMap[p.color];
            return (
              <div key={p.title} className="rounded-3xl border border-neutral-100 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900">
                <span className={`grid h-11 w-11 place-items-center rounded-2xl ${c.icon}`}>
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-base font-extrabold text-neutral-950 dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-400">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Apply CTA strap */}
        <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-700 p-8 text-center sm:flex-row sm:rounded-full sm:px-10 sm:text-left">
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-violet-200">
              Start your journey
            </p>
            <h3 className="mt-1.5 text-xl font-extrabold text-white">
              Your name could be on this page next year.
            </h3>
            <p className="mt-1 text-sm text-violet-200">
              Applications open for 2025-26 batches — Foundation · School · Junior College
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap justify-center gap-3">
            <RouteLink
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-black text-violet-700 shadow-lg transition hover:bg-violet-50 hover:gap-3"
            >
              Apply Now
              <ArrowRight size={14} />
            </RouteLink>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-5 py-3.5 text-sm font-bold text-white ring-1 ring-white/25">
              <MapPin size={13} />
              Hyderabad
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── PAGE ──────────────────────────────── */

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      <ResultBanner />
      <SelectionStats />
      <AllResults />
      <MotivationStrip />
    </div>
  );
}
