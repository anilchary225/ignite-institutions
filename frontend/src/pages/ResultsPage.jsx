import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { POSTERS } from "../data_results/rankers_data";
import {
  Award,
  BookOpen,
  Medal,
  Star,
  Trophy,
  Zap,
} from "lucide-react";
import { RESULTS_DATA } from "../data_results/results_data";
import PosterGallery from "../components/PosterGallery";
import {
  staggerContainer, cardReveal, fadeUp, defaultViewport, scaleIn,
} from "../animations/variants";

/* =========================================================
   CHECK DATA
========================================================= */

function hasData(data) {
  return Array.isArray(data) && data.length > 0;
}

/* =========================================================
   BANNER DATA
========================================================= */

const bannerSlides = [
  {
    image: "/assets/images/events/falicitates_with_awards/iphone 2024/CHIDRUP MAINS FELICITATION PIC.webp",
    eyebrow: "Results 2026",
    title: "Our students keep raising the bar.",
    sub: "JEE Mains · JEE Advanced · NEET · EAPCET · IPE - every exam, every year.",
    tone: "from-blue-950/95 via-blue-950/55 to-transparent",
  },
  {
    image: "/assets/images/events/I-phone & I-pad/ARM02955.webp",
    eyebrow: "18 Years Of Excellence",
    title: "Thousands of students. Thousands of top ranks.",
    sub: "From foundation batches to junior college, Ignite results speak louder every year.",
    tone: "from-sky-950/95 via-sky-950/55 to-transparent",
  },
  {
    image: "/assets/posters/JEE MAIN RESULTS__2026 APRIL.webp",
    eyebrow: "MAINS Results",
    title: "Excellence across every stream.",
    sub: "MAINS RESULTS students continue to shine year after year.",
    tone: "from-amber-950/95 via-amber-950/55 to-transparent",
  },
];

/* =========================================================
   RESULT BANNER
========================================================= */

function ResultBanner() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const slide = bannerSlides[active];

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="relative h-[520px] sm:h-[600px] lg:h-[680px] w-full"
        style={{
          backgroundImage: `url("${slide.image}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={`absolute inset-0 bg-linear-to-r ${slide.tone}`} />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl px-6 pb-14 sm:px-10 lg:px-16">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-200">
              {slide.eyebrow}
            </p>

            <h1 className="mt-4 text-3xl sm:text-5xl font-black leading-tight text-white">
              {slide.title}
            </h1>

            <p className="mt-5 max-w-xl text-white/80 leading-7">{slide.sub}</p>

            <div className="mt-8 flex gap-3">
              {bannerSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${
                    active === i ? "w-10 bg-white" : "w-3 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   STATS
========================================================= */

const overallStats = [
  { exam: "JEE Mains", count: "340+", icon: BookOpen, color: "blue", year: "2026" },
  { exam: "JEE Advanced", count: "120+", icon: Award, color: "indigo", year: "2026" },
  { exam: "NEET", count: "380+", icon: Medal, color: "rose", year: "2026" },
  { exam: "EAPCET", count: "750+", icon: Trophy, color: "sky", year: "2026" },
  { exam: "IPE", count: "100%", icon: Star, color: "amber", year: "2026" },
];

const colorMap = {
  blue: { icon: "bg-blue-100 text-blue-600", text: "text-blue-700" },
  indigo: { icon: "bg-indigo-100 text-indigo-600", text: "text-indigo-700" },
  rose: { icon: "bg-rose-100 text-rose-600", text: "text-rose-700" },
  sky: { icon: "bg-sky-100 text-sky-600", text: "text-sky-700" },
  amber: { icon: "bg-amber-100 text-amber-600", text: "text-amber-700" },
  emerald: { icon: "bg-emerald-100 text-emerald-600", text: "text-emerald-700" },
};

function SelectionStats() {
  return (
    <section className="bg-white dark:bg-neutral-950 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-black uppercase tracking-widest text-blue-700">
            <Zap size={14} />
            Results At A Glance
          </span>

          <h2 className="mt-5 text-4xl font-black dark:text-white">
            Our students keep achieving
          </h2>

          <p className="mt-3 text-neutral-500">
            Explore outstanding results across all competitive exams.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {overallStats.map((item) => {
            const Icon = item.icon;
            const c = colorMap[item.color];

            return (
              <div
                key={item.exam}
                className="rounded-3xl bg-neutral-50 p-6 text-center dark:bg-neutral-900"
              >
                <div className={`mx-auto grid h-12 w-12 place-items-center rounded-2xl ${c.icon}`}>
                  <Icon size={22} />
                </div>

                <h3 className="mt-4 text-3xl font-black dark:text-white">{item.count}</h3>
                <p className="mt-2 font-bold">{item.exam}</p>
                {/* <p className="text-xs text-neutral-400">Selections · {item.year}</p> */}
                <p className="text-xs text-neutral-400">Overall Selections</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   EXAM CONFIG
========================================================= */

const examConfig = {
  EAPCET: { label: "EAPCET", color: "sky" },
  NEET: { label: "NEET", color: "rose" },
  JEE_MAINS: { label: "JEE Mains", color: "blue" },
  JEE_ADVANCED: { label: "JEE Advanced", color: "indigo" },
  IPE: { label: "IPE", color: "amber" },
};

/* =========================================================
   DATA HELPERS
========================================================= */

function getName(student) {
  return student.name || student.studentName || student.student || "Student";
}

function getRankValue(student) {
  const raw =
    student.rank ?? student.air ?? student.allIndiaRank ?? student.stateRank ?? null;
  return raw;
}

function getImage(student) {
  return (
    student.image ||
    student.photo ||
    "/assets/results-profile-placeholder.png"
  );
}

function getStream(student) {
  return (
    student.stream ||
    student.category ||
    student.branch ||
    student.course ||
    student.institute ||
    null
  );
}

// Whichever ID-style field the record actually has, with a label
// that matches it (Application No / Hall Ticket / Roll No).
function getIdentifier(student) {
  if (student.applicationNumber)
    return { label: "Application No", value: student.applicationNumber };
  if (student.applicationNo)
    return { label: "Application No", value: student.applicationNo };
  if (student.application_no)
    return { label: "Application No", value: student.application_no };
  if (student.hallTicket) return { label: "Hall Ticket", value: student.hallTicket };
  if (student.hall_ticket) return { label: "Hall Ticket", value: student.hall_ticket };
  if (student.htNo) return { label: "Hall Ticket", value: student.htNo };
  if (student.rollNo) return { label: "Roll No", value: student.rollNo };
  if (student.roll_no) return { label: "Roll No", value: student.roll_no };
  return null;
}

// Rank first, then percentile, then marks/score — first one present wins.
function getMetric(student) {
  const rank = getRankValue(student);

  if (rank != null) {
    return {
      label: "Rank",
      value: typeof rank === "number"
        ? rank.toLocaleString()
        : rank,
    };
  }

  if (student.percentile != null) {
    return {
      label: "Percentile",
      value: student.percentile,
    };
  }

  if (student.marks != null) {
    const value =
      typeof student.marks === "number" && student.totalMarks
        ? `${student.marks}/${student.totalMarks}`
        : student.marks;

    return {
      label: "Score",
      value,
    };
  }

  return null; // no rank/score available
}

// Sort key: numeric rank ascending, else percentile/marks descending
// (higher is better). Returns null when nothing sortable is present.
function getSortKey(student) {
  const rank = getRankValue(student);
  if (rank != null) {
    const n = parseFloat(String(rank).replace(/[^\d.]/g, ""));
    if (!Number.isNaN(n)) return { dir: "asc", value: n };
  }

  if (student.percentile != null) {
    const n = parseFloat(student.percentile);
    if (!Number.isNaN(n)) return { dir: "desc", value: n };
  }

  if (student.marks != null) {
    const n = parseFloat(String(student.marks).replace(/[^\d.]/g, ""));
    if (!Number.isNaN(n)) return { dir: "desc", value: n };
  }

  return null;
}

function sortStudents(list) {
  return [...list].sort((a, b) => {
    const ka = getSortKey(a);
    const kb = getSortKey(b);

    if (!ka && !kb) return 0;
    if (!ka) return 1;
    if (!kb) return -1;

    return ka.dir === "asc" ? ka.value - kb.value : kb.value - ka.value;
  });
}

/* =========================================================
   PROFILE CARD
========================================================= */

function ProfileCard({ student, color }) {
  const c = colorMap[color];

  const name = getName(student);
  const image = getImage(student);
  const stream = getStream(student);
  const metric = getMetric(student);
  const identifier = getIdentifier(student);

  return (
    <motion.div
      variants={cardReveal}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.12)", transition: { duration: 0.25 } }}
      className="group overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-neutral-200 dark:bg-neutral-900 dark:ring-neutral-800"
    >
      {/* IMAGE */}
      <div className="relative p-2 aspect-4/5 overflow-hidden bg-neutral-100">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-fit rounded-t-2xl object-top transition duration-500 group-hover:scale-105"
        />

        {stream && (
          <span className="absolute right-2 top-2 rounded-full bg-blue-600 px-2 py-1 text-[8px] font-black uppercase text-white">
            {stream}
          </span>
        )}
      </div>

      {/* NAME */}
      <div className="px-3 py-3 text-center">
        <p className="truncate text-xs font-extrabold dark:text-white">{name}</p>
      </div>

      
      {/* DETAILS */}
      {(metric || identifier) && (
        <div className="mx-2 mb-3 mt-3 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">

          {metric && (
            <div
              className={`flex justify-between px-2 py-2 ${
                identifier ? "border-b" : ""
              }`}
            >
              <span className="text-[14px] font-bold text-neutral-400">
                {metric.label}
              </span>

              <span className={`text-[14px] font-black ${c.text}`}>
                {metric.value}
              </span>
            </div>
          )}

          {identifier && (
            <div className="flex justify-between px-2 py-2">
              <span className="text-[8px] font-bold text-neutral-400">
                {identifier.label}
              </span>

              <span className="text-[8px] font-bold text-neutral-700 dark:text-neutral-300">
                {identifier.value}
              </span>
            </div>
          )}

        </div>
      )}
    </motion.div>
  );
}

/* =========================================================
   ALL RESULTS
========================================================= */

function AllResults() {
  const years = useMemo(() => {
    return Object.keys(RESULTS_DATA)
      .map(Number)
      .sort((a, b) => b - a);
  }, []);

  const [activeYear, setActiveYear] = useState(years[0]);
  const [activeExam, setActiveExam] = useState("EAPCET");
  const [activeIpe, setActiveIpe] = useState("JUNIOR_MPC");

  const currentYearData = RESULTS_DATA[activeYear] || {};

  /* AVAILABLE EXAMS FOR THIS YEAR */
  const availableExams = useMemo(() => {
    const exams = [];

    if (hasData(currentYearData.EAPCET)) exams.push("EAPCET");
    if (hasData(currentYearData.NEET)) exams.push("NEET");
    if (hasData(currentYearData.JEE_MAINS)) exams.push("JEE_MAINS");
    if (hasData(currentYearData.JEE_ADVANCED)) exams.push("JEE_ADVANCED");

    if (
      hasData(currentYearData.IPE_JUNIOR_MPC) ||
      hasData(currentYearData.IPE_JUNIOR_BIPC) ||
      hasData(currentYearData.IPE_SENIOR_MPC) ||
      hasData(currentYearData.IPE_SENIOR_BIPC)
    ) {
      exams.push("IPE");
    }

    return exams;
  }, [currentYearData]);

  /* AVAILABLE IPE SUB-TABS FOR THIS YEAR */
  const availableIpeTabs = useMemo(() => {
    const tabs = [];
    if (hasData(currentYearData.IPE_JUNIOR_MPC)) tabs.push(["JUNIOR_MPC", "Junior MPC"]);
    if (hasData(currentYearData.IPE_JUNIOR_BIPC)) tabs.push(["JUNIOR_BIPC", "Junior BiPC"]);
    if (hasData(currentYearData.IPE_SENIOR_MPC)) tabs.push(["SENIOR_MPC", "Senior MPC"]);
    if (hasData(currentYearData.IPE_SENIOR_BIPC)) tabs.push(["SENIOR_BIPC", "Senior BiPC"]);
    return tabs;
  }, [currentYearData]);

  /* KEEP TABS VALID WHEN THE YEAR CHANGES */
  useEffect(() => {
    if (!availableExams.includes(activeExam)) {
      setActiveExam(availableExams[0] || "");
    }
  }, [activeYear, availableExams]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (activeExam === "IPE" && availableIpeTabs.length) {
      const values = availableIpeTabs.map(([value]) => value);
      if (!values.includes(activeIpe)) {
        setActiveIpe(values[0]);
      }
    }
  }, [activeExam, availableIpeTabs]); // eslint-disable-line react-hooks/exhaustive-deps

  /* SELECT STUDENTS FOR CURRENT TABS */
  const selectedStudents = useMemo(() => {
    let data = [];

    switch (activeExam) {
      case "EAPCET":
        data = currentYearData.EAPCET || [];
        break;

      case "NEET":
        data = currentYearData.NEET || [];
        break;

      case "JEE_MAINS":
        data = currentYearData.JEE_MAINS || [];
        break;

      case "JEE_ADVANCED":
        data = currentYearData.JEE_ADVANCED || [];
        break;

      case "IPE":
        switch (activeIpe) {
          case "JUNIOR_MPC":
            data = currentYearData.IPE_JUNIOR_MPC || [];
            break;
          case "JUNIOR_BIPC":
            data = currentYearData.IPE_JUNIOR_BIPC || [];
            break;
          case "SENIOR_MPC":
            data = currentYearData.IPE_SENIOR_MPC || [];
            break;
          case "SENIOR_BIPC":
            data = currentYearData.IPE_SENIOR_BIPC || [];
            break;
          default:
            data = [];
        }
        break;

      default:
        data = [];
    }

    return sortStudents(data);
  }, [activeExam, activeIpe, activeYear, currentYearData]);

  const currentColor =
    activeExam === "EAPCET"
      ? "sky"
      : activeExam === "NEET"
      ? "rose"
      : activeExam === "JEE_MAINS"
      ? "blue"
      : activeExam === "JEE_ADVANCED"
      ? "indigo"
      : "amber";

  return (
    <section className="bg-neutral-50 px-5 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-[1600px]">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="text-center text-4xl font-black dark:text-white"
        >
          Student Results
        </motion.h2>

        {/* YEAR TABS */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {years.map((year) => (
            <motion.button
              key={year}
              onClick={() => setActiveYear(year)}
              whileTap={{ scale: 0.94 }}
              style={{ isolation: "isolate" }}
              className={`relative rounded-xl px-5 py-3 text-xs font-black transition-colors ${
                activeYear === year
                  ? "bg-blue-600 text-white"
                  : "bg-white text-neutral-600 hover:bg-blue-50 hover:text-blue-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-blue-900/20"
              }`}
            >
              {activeYear === year && (
                <motion.div
                  layoutId="activeYear"
                  className="absolute inset-0 rounded-xl bg-blue-600"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{year}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* EXAM TABS */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {availableExams.map((exam) => (
            <motion.button
              key={exam}
              onClick={() => setActiveExam(exam)}
              whileTap={{ scale: 0.94 }}
              style={{ isolation: "isolate" }}
              className={`relative rounded-full px-6 py-3 text-xs font-black transition-colors ${
                activeExam === exam
                  ? "bg-blue-600 text-white"
                  : "bg-white text-neutral-600 hover:bg-blue-50 hover:text-blue-700 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:bg-blue-900/20"
              }`}
            >
              {activeExam === exam && (
                <motion.div
                  layoutId="activeExam"
                  className="absolute inset-0 rounded-full bg-blue-600"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{examConfig[exam]?.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* IPE TABS */}
        <AnimatePresence>
          {activeExam === "IPE" && availableIpeTabs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mt-6 flex flex-wrap justify-center gap-3"
            >
              {availableIpeTabs.map(([value, label]) => (
                <motion.button
                  key={value}
                  onClick={() => setActiveIpe(value)}
                  whileTap={{ scale: 0.94 }}
                  style={{ isolation: "isolate" }}
                  className={`relative rounded-full px-5 py-2 text-xs font-black transition-colors ${
                    activeIpe === value
                      ? "bg-amber-500 text-white"
                      : "bg-neutral-200 text-neutral-700 hover:bg-amber-100 hover:text-amber-700"
                  }`}
                >
                  {activeIpe === value && (
                    <motion.div
                      layoutId="activeIpe"
                      className="absolute inset-0 rounded-full bg-amber-500"
                      style={{ zIndex: -1 }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* RESULTS GRID */}
        <div className="mt-14 flex justify-center">
          <div className="w-full max-w-7xl">
            <AnimatePresence mode="wait">
              {selectedStudents.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl border border-dashed bg-white py-20 text-center dark:bg-neutral-900"
                >
                  <h3 className="text-xl font-black">No Data Available</h3>
                  <p className="mt-2 text-sm text-neutral-500">
                    Results not available for {examConfig[activeExam]?.label || activeExam}{" "}{activeYear}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={`${activeYear}-${activeExam}-${activeIpe}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.28 }}
                >
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={defaultViewport}
                    className="mb-8 text-center"
                  >
                    <motion.h3 variants={fadeUp} className="text-xl font-black dark:text-white">
                      {examConfig[activeExam]?.label} {activeYear}
                    </motion.h3>
                    <motion.p variants={fadeUp} className="mt-2 text-sm text-neutral-500">
                      {selectedStudents.length} Students
                    </motion.p>
                  </motion.div>

                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-8"
                  >
                    {selectedStudents.map((student, index) => (
                      <ProfileCard key={index} student={student} color={currentColor} />
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   MOTIVATION
========================================================= */

const quotes = [
  { text: "Your rank doesn't define your beginning. It defines your hard work.", by: "Ignite Faculty" },
  { text: "Success comes from consistency, discipline and guidance.", by: "Ignite Alumni" },
  { text: "Excellence is our daily standard.", by: "Ignite Academy" },
];

function MotivationStrip() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className="bg-white px-6 py-20 dark:bg-neutral-950"
    >
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          animate={{ rotate: [0, 10, -10, 10, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="inline-block"
        >
          <Trophy className="mx-auto text-amber-500" size={32} />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.h2
            key={index}
            initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-3xl font-black dark:text-white"
          >
            "{quotes[index].text}"
          </motion.h2>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`by-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-4 text-sm font-bold text-neutral-500"
          >
            — {quotes[index].by}
          </motion.p>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

/* =========================================================
   PAGE EXPORT
========================================================= */

export default function ResultsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white"
    >
      <ResultBanner />
      <SelectionStats />
      <AllResults />
      <PosterGallery posters={POSTERS} />
      <MotivationStrip />
    </motion.div>
  );
}
