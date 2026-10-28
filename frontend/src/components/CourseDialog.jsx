import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, BookOpen, Check, ChevronRight, Clock3, GraduationCap, MessageCircle, Phone, X } from "lucide-react";
import { useLocation, RouteLink } from "../router/BrowserRouter";
import { CONTACT_PHONE, COURSE_CATALOG, getCourse } from "../data/courseCatalog";

const CourseDialogContext = createContext(null);
const FIRST_PROMPT_DELAY = 8000;
const REPEAT_PROMPT_DELAY = 4 * 60 * 1000;
const DISMISS_COOLDOWN = 5 * 60 * 1000;
const MAX_AUTOMATIC_PROMPTS = 3;
const SESSION_SHOWS_KEY = "ignite-course-dialog-shows";
const SESSION_DISMISS_KEY = "ignite-course-dialog-dismissed-at";
const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600";

function getRelevantCourses(pathname) {
  const visibleSection = ["inter", "courses", "testprep", "foundation"].find((id) => {
    const element = document.getElementById(id);
    if (!element) return false;
    const { top, bottom } = element.getBoundingClientRect();
    return top <= window.innerHeight * 0.6 && bottom >= window.innerHeight * 0.25;
  });
  if (visibleSection) return COURSE_CATALOG.filter((course) => course.sections.includes(visibleSection));
  if (pathname.includes("neet")) return COURSE_CATALOG.filter((course) => course.id.includes("neet"));
  if (pathname.includes("iit-jee")) return COURSE_CATALOG.filter((course) => course.id.includes("iit"));
  if (pathname.includes("foundation")) return COURSE_CATALOG.filter((course) => course.sections.includes("foundation"));
  return COURSE_CATALOG;
}

function CourseContent({ course }) {
  return (
    <article>
      <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">{course.description}</p>
      <dl className="mt-6 grid gap-3 sm:grid-cols-2">
        {[
          { label: "Duration", value: course.duration, Icon: Clock3 },
          { label: "Eligibility", value: course.eligibility, Icon: GraduationCap },
        ].map(({ label, value, Icon }) => (
          <div key={label} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 dark:border-slate-800 dark:bg-slate-950/40">
            <dt className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400"><Icon size={15} aria-hidden="true" />{label}</dt>
            <dd className="mt-2 text-sm font-semibold leading-6 text-slate-900 dark:text-white">{value}</dd>
          </div>
        ))}
      </dl>
      <section className="mt-6" aria-labelledby="course-highlights-title">
        <h3 id="course-highlights-title" className="text-sm font-semibold text-slate-900 dark:text-white">Programme highlights</h3>
        <ul className="mt-3 space-y-3">
          {course.highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"><Check size={12} aria-hidden="true" /></span>
              {highlight}
            </li>
          ))}
        </ul>
      </section>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5 dark:border-slate-800">
        <p className="text-xs leading-6 text-slate-500 dark:text-slate-400"><span className="font-semibold">Fees:</span> {course.fees}</p>
      </div>
    </article>
  );
}

function CourseDialog({ dialog, onClose, onSelectCourse, onBackToChooser }) {
  const panelRef = useRef(null);
  const headingRef = useRef(null);
  const onCloseRef = useRef(onClose);
  const reduceMotion = useReducedMotion();
  const courses = dialog?.courseIds.map(getCourse).filter(Boolean) ?? [];
  const isOpen = Boolean(dialog && courses.length);
  const isCourseChooser = Boolean(dialog?.chooser && courses.length > 1);
  const course = courses[0];
  const selectedKey = `${isCourseChooser}:${course?.id}`;

  useEffect(() => { onCloseRef.current = onClose; }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const controls = [...panelRef.current.querySelectorAll('a[href],button:not([disabled]),[tabindex="0"]')];
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (!first) { event.preventDefault(); return; }
      if (event.shiftKey && (document.activeElement === first || document.activeElement === headingRef.current)) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousFocus?.isConnected) previousFocus.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) headingRef.current?.focus();
  }, [isOpen, selectedKey]);

  if (!dialog || !course) return null;
  const canGoBack = Array.isArray(dialog.chooserCourseIds);
  const messageCourse = isCourseChooser ? "a programme at IGNITE" : course.title;
  const whatsappUrl = `https://wa.me/${CONTACT_PHONE.replace("+", "")}?text=${encodeURIComponent(`Hello, I would like admission information about ${messageCourse}.`)}`;

  return createPortal(
    <motion.div
      initial={{ opacity: reduceMotion ? 1 : 0 }} animate={{ opacity: 1 }} transition={{ duration: reduceMotion ? 0 : 0.18 }}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <motion.section
        ref={panelRef} role="dialog" aria-modal="true" aria-labelledby="course-dialog-title" aria-describedby="course-dialog-description"
        initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.2 }}
        className={`flex max-h-[90dvh] w-full flex-col overflow-hidden rounded-3xl border border-white/20 bg-white shadow-[0_24px_100px_rgba(15,23,42,0.24)] dark:border-slate-800 dark:bg-slate-900 ${isCourseChooser ? "max-w-3xl" : "max-w-2xl"}`}
      >
        <header className="shrink-0 border-b border-slate-100 px-5 pb-5 pt-5 dark:border-slate-800 sm:px-8 sm:pt-7">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo-dark.webp" alt="IGNITE" width="40" height="40" className="h-10 w-10 rounded-xl bg-slate-950 object-contain p-1.5" />
              <div>
                <p className="text-xs font-semibold tracking-wide text-slate-900 dark:text-white">IGNITE</p>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">Programmes & admissions</p>
              </div>
            </div>
            <button type="button" onClick={onClose} aria-label="Close admissions information" className={`grid h-11 w-11 shrink-0 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white ${focusStyle}`}><X size={20} aria-hidden="true" /></button>
          </div>
          {canGoBack && <button type="button" onClick={onBackToChooser} className={`mt-5 inline-flex items-center gap-1.5 rounded-md py-1 text-xs font-semibold text-slate-500 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-300 ${focusStyle}`}><ArrowLeft size={14} aria-hidden="true" /> All programmes</button>}
          <h2 ref={headingRef} tabIndex={-1} id="course-dialog-title" className={`${canGoBack ? "mt-3" : "mt-6"} text-2xl font-semibold tracking-tight text-slate-950 outline-none dark:text-white sm:text-3xl`}>
            {isCourseChooser ? "Find your programme" : course.title}
          </h2>
          <p id="course-dialog-description" className="mt-2 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
            {isCourseChooser ? "Explore your options. Select a programme to see eligibility, duration and course details." : "Everything you need to take the next step."}
          </p>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-8 sm:py-6">
          {isCourseChooser ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {courses.map((item) => (
                <button key={item.id} type="button" onClick={() => onSelectCourse(item.id, dialog.courseIds)} className={`group flex h-full w-full items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:border-blue-400 hover:bg-blue-50/40 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-500 dark:hover:bg-blue-500/5 ${focusStyle}`}>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-600 transition group-hover:bg-blue-100 group-hover:text-blue-700 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:bg-blue-500/10 dark:group-hover:text-blue-300"><BookOpen size={17} aria-hidden="true" /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold leading-6 text-slate-900 dark:text-white">{item.title}</span>
                    <span className="mt-1 block text-xs leading-5 text-slate-500 dark:text-slate-400">{item.duration}</span>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-700 dark:text-blue-300">View programme <ChevronRight size={13} aria-hidden="true" /></span>
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <>
              <CourseContent course={course} />
              {course.page && <RouteLink to={course.page} onClick={onClose} className={`mt-3 inline-flex items-center gap-1.5 rounded-md py-1 text-sm font-semibold text-blue-700 hover:underline dark:text-blue-300 ${focusStyle}`}>Explore the full programme <ArrowUpRight size={15} aria-hidden="true" /></RouteLink>}
            </>
          )}
        </div>

        <footer className="shrink-0 border-t border-slate-200 bg-slate-50/80 px-5 py-4 dark:border-slate-800 dark:bg-slate-950/40 sm:px-8 sm:py-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{isCourseChooser ? "Need help choosing?" : "Ready to learn more?"}</p>
              <p className="mt-0.5 text-xs leading-5 text-slate-500 dark:text-slate-400">Speak with our admissions team.</p>
            </div>
            <RouteLink to="/contact" onClick={onClose} className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 ${focusStyle}`}>Admission enquiry <ArrowUpRight size={16} aria-hidden="true" /></RouteLink>
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1">
            <a href={`tel:${CONTACT_PHONE}`} className={`inline-flex min-h-11 items-center gap-2 rounded-md text-xs font-semibold text-slate-600 hover:text-blue-700 dark:text-slate-300 dark:hover:text-blue-300 ${focusStyle}`}><Phone size={14} aria-hidden="true" />Call admissions</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-11 items-center gap-2 rounded-md text-xs font-semibold text-slate-600 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-300 ${focusStyle}`}><MessageCircle size={15} aria-hidden="true" />WhatsApp</a>
          </div>
        </footer>
      </motion.section>
    </motion.div>, document.body,
  );
}

export function CourseDialogProvider({ children }) {
  const { pathname } = useLocation();
  const [dialog, setDialog] = useState(null);
  const [lastActivity, setLastActivity] = useState(Date.now());
  const allowAutomaticPrompt = pathname.startsWith("/streams");

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
    if (!allowAutomaticPrompt) return undefined;
    const tryAutomaticPrompt = () => {
      if (dialog || Date.now() - lastActivity > 60_000) return;
      if (document.querySelector('dialog[open], [role="dialog"]') || document.activeElement?.matches('input, textarea, select, [contenteditable="true"]')) return;
      const count = Number(sessionStorage.getItem(SESSION_SHOWS_KEY) || 0);
      const dismissedAt = Number(sessionStorage.getItem(SESSION_DISMISS_KEY) || 0);
      if (count >= MAX_AUTOMATIC_PROMPTS || Date.now() - dismissedAt < DISMISS_COOLDOWN) return;
      const courseIds = getRelevantCourses(pathname).map((course) => course.id);
      setDialog({ courseIds, automatic: true, chooser: courseIds.length > 1 });
      sessionStorage.setItem(SESSION_SHOWS_KEY, String(count + 1));
    };
    const firstTimer = window.setTimeout(tryAutomaticPrompt, FIRST_PROMPT_DELAY);
    const repeatTimer = window.setInterval(tryAutomaticPrompt, REPEAT_PROMPT_DELAY);
    return () => { window.clearTimeout(firstTimer); window.clearInterval(repeatTimer); };
  }, [dialog, allowAutomaticPrompt, lastActivity, pathname]);

  const value = useMemo(() => ({ openCourse }), []);
  return <CourseDialogContext.Provider value={value}>{children}<CourseDialog dialog={dialog} onClose={closeDialog} onSelectCourse={selectCourse} onBackToChooser={backToChooser} /></CourseDialogContext.Provider>;
}

export function CourseDetailsButton({ courseId, className = "" }) {
  const context = useContext(CourseDialogContext);
  if (!context) return null;
  return <button type="button" onClick={() => context.openCourse(courseId)} className={className}>View details</button>;
}
