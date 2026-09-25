import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Check, MessageCircle, Phone, X } from "lucide-react";
import { useLocation } from "../router/BrowserRouter";
import { RouteLink } from "../router/BrowserRouter";
import { CONTACT_PHONE, COURSE_CATALOG, getCourse } from "../data/courseCatalog";

const CourseDialogContext = createContext(null);
const FIRST_PROMPT_DELAY = 8000;
const REPEAT_PROMPT_DELAY = 4 * 60 * 1000;
const DISMISS_COOLDOWN = 5 * 60 * 1000;
const MAX_AUTOMATIC_PROMPTS = 3;
const SESSION_SHOWS_KEY = "ignite-course-dialog-shows";
const SESSION_DISMISS_KEY = "ignite-course-dialog-dismissed-at";

function getRelevantCourses(pathname) {
  const visibleSection = ["inter", "courses", "testprep", "foundation"].find((id) => {
    const element = document.getElementById(id);
    if (!element) return false;
    const { top, bottom } = element.getBoundingClientRect();
    return top <= window.innerHeight * 0.6 && bottom >= window.innerHeight * 0.25;
  });

  if (visibleSection) {
    return COURSE_CATALOG.filter((course) => course.sections.includes(visibleSection));
  }
  if (pathname.includes("neet")) return COURSE_CATALOG.filter((course) => course.id.includes("neet"));
  if (pathname.includes("iit-jee")) return COURSE_CATALOG.filter((course) => course.id.includes("iit"));
  if (pathname.includes("foundation")) return COURSE_CATALOG.filter((course) => course.sections.includes("foundation"));
  return COURSE_CATALOG;
}

function CourseContent({ course, compact = false }) {
  return (
    <article className={`rounded-2xl border border-blue-100 bg-blue-50/60 p-4 dark:border-blue-900/50 dark:bg-blue-950/20 ${compact ? "" : "sm:p-5"}`}>
      <h3 className="text-base font-extrabold text-neutral-950 dark:text-white">{course.title}</h3>
      <p className="mt-1.5 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{course.description}</p>
      {!compact && (
        <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
          <p><span className="font-bold text-neutral-950 dark:text-white">Duration:</span> {course.duration}</p>
          <p><span className="font-bold text-neutral-950 dark:text-white">Eligibility:</span> {course.eligibility}</p>
          <p className="sm:col-span-2"><span className="font-bold text-neutral-950 dark:text-white">Fees:</span> {course.fees}</p>
        </div>
      )}
      <ul className="mt-4 space-y-2">
        {course.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2 text-sm text-neutral-700 dark:text-neutral-200"><Check size={16} className="mt-0.5 shrink-0 text-blue-600" />{highlight}</li>
        ))}
      </ul>
    </article>
  );
}

function CourseDialog({ dialog, onClose, onSelectCourse, onBackToChooser }) {
  useEffect(() => {
    if (!dialog) return undefined;
    const closeOnEscape = (event) => event.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [dialog, onClose]);

  if (!dialog) return null;

  const courses = dialog.courseIds.map(getCourse).filter(Boolean);
  const isCourseChooser = dialog.chooser && courses.length > 1;
  const canGoBack = Array.isArray(dialog.chooserCourseIds);
  const messageCourse = courses.length === 1 ? courses[0].title : "an Ignite course";
  const whatsappUrl = `https://wa.me/${CONTACT_PHONE.replace("+", "")}?text=${encodeURIComponent(`Hi, I'm interested in ${messageCourse}`)}`;

  return createPortal(
    <AnimatePresence>
      {dialog && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[10000] flex items-center justify-center bg-neutral-950/70 p-4 backdrop-blur-sm" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
          <motion.section initial={{ opacity: 0, scale: 0.94, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.94, y: 16 }} transition={{ type: "spring", stiffness: 320, damping: 27 }} role="dialog" aria-modal="true" aria-label="Course details" className={`w-full rounded-3xl bg-white p-5 shadow-2xl dark:bg-neutral-900 sm:p-7 ${isCourseChooser ? "max-w-3xl" : "max-h-[88vh] max-w-2xl overflow-y-auto"}`}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3"><img src="/logo-dark.webp" alt="Ignite" className="h-11 w-11 rounded-xl bg-neutral-950 object-contain p-1.5" /><div><p className="text-xs font-black uppercase tracking-[0.18em] text-blue-600">Ignite programmes</p><h2 className="mt-1 text-xl font-extrabold text-neutral-950 dark:text-white sm:text-2xl">{isCourseChooser ? "Available courses" : "Course details"}</h2></div></div>
              <div className="flex shrink-0 gap-2">{canGoBack && <button type="button" onClick={onBackToChooser} className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700 transition hover:bg-blue-100 dark:bg-blue-950/40 dark:text-blue-300"><ArrowLeft size={15} /> Back</button>}<button type="button" onClick={onClose} aria-label="Close course details" className="grid h-10 w-10 place-items-center rounded-full bg-neutral-100 text-neutral-700 transition hover:bg-neutral-950 hover:text-white dark:bg-neutral-800 dark:text-neutral-200"><X size={19} /></button></div>
            </div>
            {isCourseChooser ? (
              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {courses.map((course) => <div key={course.id} className="flex min-w-0 items-center justify-between gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2.5 dark:border-neutral-700 dark:bg-neutral-800"><span className="text-sm font-bold text-neutral-800 dark:text-white">{course.title}</span><button type="button" onClick={() => onSelectCourse(course.id, dialog.courseIds)} className="shrink-0 rounded-lg bg-blue-600 px-2.5 py-1.5 text-xs font-bold text-white transition hover:bg-blue-700">More details</button></div>)}
              </div>
            ) : <><div className="mt-6"><CourseContent course={courses[0]} /></div>{courses[0].page && <RouteLink to={courses[0].page} onClick={onClose} className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-100 dark:border-blue-900/60 dark:bg-blue-950/30 dark:text-blue-300">Explore course page</RouteLink>}<div className="mt-4 flex flex-col gap-3 sm:flex-row"><a href={`tel:${CONTACT_PHONE}`} className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"><Phone size={17} /> Call admissions</a><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"><MessageCircle size={18} /> WhatsApp us</a></div></>}
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export function CourseDialogProvider({ children }) {
  const { pathname } = useLocation();
  const [dialog, setDialog] = useState(null);
  const [lastActivity, setLastActivity] = useState(Date.now());
  const isPublicPage = !pathname.startsWith("/admin");

  const openCourse = (courseId) => setDialog({ courseIds: [courseId], automatic: false });
  const selectCourse = (courseId, chooserCourseIds) => setDialog({ courseIds: [courseId], automatic: false, chooserCourseIds });
  const backToChooser = () => setDialog({ courseIds: dialog.chooserCourseIds, automatic: true, chooser: true });
  const closeDialog = () => {
    if (dialog?.automatic) sessionStorage.setItem(SESSION_DISMISS_KEY, String(Date.now()));
    setDialog(null);
  };

  useEffect(() => {
    const recordActivity = () => setLastActivity(Date.now());
    window.addEventListener("scroll", recordActivity, { passive: true });
    window.addEventListener("pointerdown", recordActivity, { passive: true });
    window.addEventListener("keydown", recordActivity);
    return () => { window.removeEventListener("scroll", recordActivity); window.removeEventListener("pointerdown", recordActivity); window.removeEventListener("keydown", recordActivity); };
  }, []);

  useEffect(() => {
    if (!isPublicPage) return undefined;
    const tryAutomaticPrompt = (firstPrompt = false) => {
      if (dialog || Date.now() - lastActivity > 60_000) return;
      const count = Number(sessionStorage.getItem(SESSION_SHOWS_KEY) || 0);
      const dismissedAt = Number(sessionStorage.getItem(SESSION_DISMISS_KEY) || 0);
      if (count >= MAX_AUTOMATIC_PROMPTS || Date.now() - dismissedAt < DISMISS_COOLDOWN) return;
      const courseIds = firstPrompt ? COURSE_CATALOG.map((course) => course.id) : getRelevantCourses(pathname).map((course) => course.id);
      setDialog({ courseIds, automatic: true, chooser: courseIds.length > 1 });
      sessionStorage.setItem(SESSION_SHOWS_KEY, String(count + 1));
    };
    const firstTimer = window.setTimeout(() => tryAutomaticPrompt(true), FIRST_PROMPT_DELAY);
    const repeatTimer = window.setInterval(() => tryAutomaticPrompt(false), REPEAT_PROMPT_DELAY);
    return () => { window.clearTimeout(firstTimer); window.clearInterval(repeatTimer); };
  }, [dialog, isPublicPage, lastActivity, pathname]);

  const value = useMemo(() => ({ openCourse }), []);
  return <CourseDialogContext.Provider value={value}>{children}<CourseDialog dialog={dialog} onClose={closeDialog} onSelectCourse={selectCourse} onBackToChooser={backToChooser} /></CourseDialogContext.Provider>;
}

export function CourseDetailsButton({ courseId, className = "" }) {
  const context = useContext(CourseDialogContext);
  if (!context) return null;
  return <button type="button" onClick={() => context.openCourse(courseId)} className={className}>View details</button>;
}
