import {
  ChevronDown,
  ArrowUpRight,
  ChevronRight,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { RouteLink, useLocation } from "../../router/BrowserRouter";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      {
        label: "Founder",
        href: "/about/founder",
      },
      {
        label: "Personality Development",
        href: "/about/personality-development",
      },
      {
        label: "Extra Curricular Activities",
        href: "/about/daya-at-ignite",
      },
      {
        label: "Campus Hostel Facilities",
        href: "/about/campus-hostel-facilities",
      },
      {
        label: "Testimonials",
        href: "/about/testimonials",
      },
    ],
  },
  {
    label: "Streams",
    href: "/streams",
    children: [
        {
          label: "Junior College",
          href: "/streams/junior-college",
          children: [
            {
              label: "MPC IIT Coaching",
              href: "/streams/junior-college/mpc-iit-coaching",
            },
            {
              label: "BIPC NEET Coaching",
              href: "/streams/junior-college/bipc-neet-coaching",
            },
            {
              label: "After College Program",
              href: "/streams/junior-college/after-college-program",
            },
            {
              label: "MEC",
              href: "/streams/junior-college/mec",
            },
            {
              label: "NDA",
              href: "/streams/junior-college/nda",
            },
          ],
        },
      {
        label: "School",
        href: "/streams/school",
        children: [
          {
            label: "After School Program",
            href: "/streams/school/after-school-program",
          },
        ],
      },
      {
        label: "Test Prep",
        href: "/streams/test-prep",
        children: [
          {
            label: "IIT JEE Long Term",
            href: "/streams/test-prep/iit-jee-long-term",
          },
          {
            label: "IIT JEE Short Term",
            href: "/streams/test-prep/iit-jee-short-term",
          },
          {
            label: "NEET Long Term",
            href: "/streams/test-prep/neet-long-term",
          },
          {
            label: "NEET Short Term",
            href: "/streams/test-prep/neet-short-term",
          },
          {
            label: "Foundation",
            href: "/streams/test-prep/foundation",
          },
        ],
      },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      {
        label: "Photos",
        href: "/gallery/photos",
      },
      {
        label: "Videos",
        href: "/gallery/videos",
      },
      {
        label: "Events",
        href: "/gallery/events",
      },
      {
        label: "Testimonials",
        href: "/gallery/testimonials",
      },
    ],
  },
  {
    label: "Community",
    href: "/community",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "Results",
    href: "/results",
  },
  {
    label: "Documents",
    href: "/documents",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

function createPreviewImage(title, fromColor, toColor) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 720" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${fromColor}" />
          <stop offset="100%" stop-color="${toColor}" />
        </linearGradient>
      </defs>
      <rect width="960" height="720" rx="48" fill="url(#bg)" />
      <circle cx="780" cy="150" r="110" fill="rgba(255,255,255,0.25)" />
      <circle cx="180" cy="560" r="150" fill="rgba(255,255,255,0.18)" />
      <text x="72" y="146" font-size="38" font-family="Arial, Helvetica, sans-serif" font-weight="700" fill="#111827">Ignite Preview</text>
      <text x="72" y="228" font-size="64" font-family="Arial, Helvetica, sans-serif" font-weight="800" fill="#111827">${title}</text>
      <rect x="72" y="282" width="372" height="12" rx="6" fill="rgba(17,24,39,0.22)" />
      <rect x="72" y="312" width="300" height="12" rx="6" fill="rgba(17,24,39,0.18)" />
      <rect x="72" y="342" width="258" height="12" rx="6" fill="rgba(17,24,39,0.14)" />
      <rect x="72" y="520" width="228" height="72" rx="36" fill="rgba(17,24,39,0.9)" />
      <text x="186" y="566" text-anchor="middle" font-size="24" font-family="Arial, Helvetica, sans-serif" font-weight="700" fill="#ffffff">Preview</text>
    </svg>
  `)}`;
}

const previewVariantPairs = [
  ["#bae6fd", "#cbd5e1"],
  ["#fbcfe8", "#fecdd3"],
  ["#bbf7d0", "#d1fae5"],
  ["#fde68a", "#fed7aa"],
  ["#c4b5fd", "#ddd6fe"],
  ["#fca5a5", "#fee2e2"],
  ["#67e8f9", "#cffafe"],
];

function createSecondaryPreviewImage(title, key) {
  const index =
    Array.from(`${title}-${key}`).reduce(
      (sum, character) => sum + character.charCodeAt(0),
      0,
    ) % previewVariantPairs.length;
  const [fromColor, toColor] = previewVariantPairs[index];
  return createPreviewImage(`${title} View`, fromColor, toColor);
}

const previewByHref = {
  "/about/founder": {
    title: "Founder",
    description: "A quick view of the vision, leadership, and origin story behind Ignite.",
    image: "/assets/images/Ramesh sir/VIJ06233.webp",
    secondaryImage: "/assets/images/events/Vybhava/DSC01917.webp",
  },
  "/about/personality-development": {
    title: "Personality Development",
    description: "Programs that build confidence, communication, discipline, and presence.",
    image: "/assets/images/events/Yoga/yoga14.webp",
    secondaryImage: "/assets/images/events/Plantationrun/plantation3.webp",
  },
  "/about/daya-at-ignite": {
    title: "Extra Curricular Activities",
    description: "Sports, fitness, indoor games, and recreational activities that keep campus life active.",
    image: "/assets/images/events/sports/DSC00137.webp",
    secondaryImage: "/assets/images/events/sports/sports12.webp",
  },
  "/about/campus-hostel-facilities": {
    title: "Campus Hostel Facilities",
    description: "A preview of the residential support, safety, and student amenities.",
    image: "/assets/images/events/Classrooms/DSC00002.webp",
    secondaryImage: "/assets/images/events/DINNING/VIJ00673.webp",

  },
  "/about/testimonials": {
    title: "Testimonials",
    description: "What students and parents say about the results, discipline, and support.",
    image: "/assets/images/navbar_testimonial.webp",
    secondaryImage: "/assets/images/navbar_testimonial2.webp"
  },
  "/streams/junior-college": {
    title: "Junior College",
    description: "Integrated intermediate learning with coaching, mentoring, and structure.",
    image: "/assets/images/navbar_images/navbar_jr_college2.webp",
    secondaryImage : "/assets/images/navbar_images/navbar_jr_college1.webp"
  },
  "/streams/junior-college/mpc-iit-coaching": {
    title: "MPC IIT Coaching",
    description: "Focused preparation for Mathematics, Physics, Chemistry, and IIT success.",
    image: "/assets/images/navbar_images/navbar_mpc_iit2.webp",
    secondaryImage: "/assets/images/navbar_images/navbar_mpc_iit.webp"
  },
  "/streams/junior-college/bipc-neet-coaching": {
    title: "BIPC NEET Coaching",
    description: "A strong foundation for Biology, Physics, Chemistry, and NEET readiness.",
    image: "/assets/images/navbar_images/navbar_neet3.webp",
    secondaryImage: "/assets/images/navbar_images/navbar_neet_bipc2.webp"
  },
  "/streams/junior-college/after-college-program": {
    title: "After College Program",
    description: "Career-focused guidance and skill development to help students choose the right career path and prepare for higher education or future opportunities.",
    image: "/assets/images/events/Classrooms/C0156T01.webp",
    secondaryImage: "/assets/images/events/sports/DSC05505.webp",
  },
  "/streams/junior-college/mec": {
    title: "BIPC NEET Coaching",
    description: "Focused preparation for the MEC exam covering core subjects, concepts, practice questions, and mock tests.",
    image: "/assets/images/navbar_images/navbar_mec1.webp",
    secondaryImage: "/assets/images/navbar_images/navbar_mec2.webp"
  },
  "/streams/junior-college/nda": {
    title: "NDA",
    description: "Comprehensive preparation for the NDA exam covering Mathematics, English, General Knowledge, current affairs, and mock tests.",
    image: "/assets/images/navbar_images/nda.webp",
    secondaryImage: "/assets/images/navbar_images/nda2.webp"
  },
  "/streams/school": {
    title: "School",
    description: "A balanced academic path with discipline, foundation building, and care.",
    image: "/assets/images/navbar_images/navbar_school1.jpeg",
    secondaryImage : "/assets/images/events/Classrooms/C0127T01.webp"
  },
  "/streams/school/after-school-program": {
    title: "After School Program",
    description: "Career guidance and skill development to help school students explore their interests and prepare for future studies and career opportunities.",
    image: "/assets/images/events/Summer camp/DSC09937.webp",
    secondaryImage : "/assets/images/events/Summer camp/summercamp3.webp"
  },
  "/streams/test-prep": {
    title: "Test Prep",
    description: "Exam-focused pathways built for speed, depth, revision, and outcomes.",
    image: "/assets/images/navbar_images/iit_prep2.webp",
    secondaryImage: "/assets/images/navbar_images/navbar_test1.webp"
  },
  "/streams/test-prep/iit-jee-long-term": {
    title: "IIT JEE Long Term",
    description: "A long-horizon track for steady concept mastery and repeated practice.",
    image: "/assets/images/navbar_images/navbar_after_college.webp",
    secondaryImage: "/assets/images/events/Classrooms/DSC00215.webp"
  },
  "/streams/test-prep/iit-jee-short-term": {
    title: "IIT JEE Short Term",
    description: "A compressed revision-first plan for students in the final stretch.",
    image: "/assets/images/navbar_images/short_term.webp",
    secondaryImage: "/assets/images/navbar_images/navbar.webp"
  },
  "/streams/test-prep/neet-long-term": {
    title: "NEET Long Term",
    description: "Long-range coaching for concept depth, testing, and retention.",
    image: "/assets/images/navbar_images/navbar_neet1.webp",
    secondaryImage: "/assets/images/events/Classrooms/DSC00004.webp"
  },
  "/streams/test-prep/neet-short-term": {
    title: "NEET Short Term",
    description: "A focused plan for quick revision, mock tests, and score improvement.",
    image: "/assets/images/navbar_images/neet.webp",
    secondaryImage:"/assets/images/navbar_images/neet2.webp"
  },
  "/streams/test-prep/foundation": {
    title: "Foundation",
    description: "Early-stage preparation for strong fundamentals and future readiness.",
    image: "/assets/images/events/Classrooms/DSC00367.webp",
    secondaryImage:"/assets/images/navbar_images/fb5a477d3622cabab1cfcd5c3030f64a.webp"
  },
  "/gallery/photos": {
    title: "Photos",
    description: "Campus moments, classrooms, celebrations, and student milestones.",
    image: "/assets/images/events/Classrooms/DSC02142.webp",
    secondaryImage:"/assets/images/events/Classrooms/DSC02145.webp"
  },
  "/gallery/videos": {
    title: "Videos",
    description: "Short visual highlights of programs, events, and student life.",
    image: "/assets/images/events/Vybhava/ARM02900.webp",
    secondaryImage:"/assets/images/events/Vybhava/DSC01789.webp"
  },
  "/gallery/events": {
    title: "Events",
    description: "Events, gatherings, and program moments captured in one place.",
    image: "/assets/images/events/Yoga/yoga12.webp",
    secondaryImage:"/assets/images/events/Plantationrun/plantation123.webp"
  },
  "/gallery/testimonials": {
    title: "Gallery Testimonials",
    description: "Visual stories and feedback from students and parents.",
    image: "/assets/images/navbar_testimonial.webp",
    secondaryImage:"/assets/images/testimonial_bg.webp"
  },
};

function getPreviewData(href) {
  const previewData = previewByHref[href] ?? {
    title: "Ignite",
    description: "Move your pointer over a menu item to preview its related content.",
    image: createPreviewImage("Ignite", "#fed7aa", "#bae6fd"),
  };
  return {
    ...previewData,
    secondaryImage:
      previewData.secondaryImage ??
      createSecondaryPreviewImage(previewData.title, href ?? previewData.title),
  };
}

function findItemByHref(items, href) {
  for (const item of items) {
    if (item.href === href) return item;
    if (item.children?.length) {
      const nestedItem = findItemByHref(item.children, href);
      if (nestedItem) return nestedItem;
    }
  }
  return null;
}

function isActivePath(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function DesktopMenuItem({
  item,
  pathname,
  openMenu,
  setOpenMenu,
  setHoverPreviewHref,
  selectedPreviewByMenu,
}) {
  const active = isActivePath(pathname, item.href);
  const hasChildren = Boolean(item.children?.length);
  const defaultPreviewHref = item.children?.[0]?.href ?? item.href;

  return (
    <li
      className="relative"
      onMouseEnter={() => {
        if (hasChildren) {
          setOpenMenu(item.href);
          setHoverPreviewHref(
            selectedPreviewByMenu[item.href] ?? defaultPreviewHref,
          );
        } else {
          setOpenMenu(null);
          setHoverPreviewHref(null);
        }
      }}
    >
      <RouteLink
        to={item.href}
        onClick={() => {
          setOpenMenu(null);
          setHoverPreviewHref(null);
        }}
        style={{ isolation: "isolate" }}
        className={`relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition ${
          active
            ? "text-white"
            : "text-neutral-700 hover:bg-blue-50 hover:text-blue-700 dark:text-neutral-200 dark:hover:bg-blue-500/10 dark:hover:text-blue-300"
        }`}
      >
        {active && (
          <motion.div
            layoutId="navActiveIndicator"
            className="absolute inset-0 rounded-full bg-blue-600 shadow-[0_8px_24px_rgba(37,99,235,0.30)]"
            style={{ zIndex: -1 }}
            transition={{ type: "spring", stiffness: 420, damping: 34 }}
          />
        )}
        <span className="relative z-10">{item.label}</span>
        {hasChildren ? (
          <ChevronDown
            size={14}
            className={`relative z-10 transition-transform duration-200 ${
              openMenu === item.href ? "rotate-180" : ""
            }`}
          />
        ) : null}
      </RouteLink>
    </li>
  );
}

function DesktopSubMenuItem({
  item,
  pathname,
  setOpenMenu,
  menuHref,
  setHoverPreviewHref,
  setSelectedPreviewByMenu,
}) {
  const [subOpen, setSubOpen] = useState(false);
  const active = isActivePath(pathname, item.href);
  const hasChildren = Boolean(item.children?.length);

  return (
    <div
      className="relative z-[70]"
      onMouseEnter={() => {
        setHoverPreviewHref(item.href);
        if (hasChildren) setSubOpen(true);
      }}
      onMouseLeave={() => {
        if (hasChildren) setSubOpen(false);
      }}
    >
      <RouteLink
        to={item.href}
        onClick={() => {
          setOpenMenu(null);
          setHoverPreviewHref(item.href);
          setSelectedPreviewByMenu((current) => ({
            ...current,
            [menuHref]: item.href,
          }));
          setSubOpen(false);
        }}
        className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition ${
          active
            ? "bg-blue-600 text-white shadow-[0_10px_24px_rgba(37,99,235,0.24)]"
            : "text-neutral-800 hover:text-blue-700 dark:text-white dark:hover:text-blue-300"
        }`}
      >
        <span>{item.label} </span>

        {hasChildren ? (
          <ChevronDown
            size={15}
            className={`transition-transform duration-200 ${
              subOpen ? "-rotate-90" : ""
            }`}
          />
        ) : <ArrowUpRight className="h-4"/>}
      </RouteLink>

      {hasChildren ? (
        <div
          className={`
            absolute left-full top-0 z-[80] ml-3
            w-max min-w-64
            transition-all duration-200
            ease-out
            ${
              subOpen
                ? "visible translate-x-0 opacity-100"
                : "invisible -translate-x-2 opacity-0 pointer-events-none"
            }
          `}
          onMouseEnter={() => setSubOpen(true)}
          onMouseLeave={() => setSubOpen(false)}
        >
          <div className="rounded-[20px] border border-neutral-100 bg-white p-2 shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
            <div className="space-y-1">
              {item.children.map((child) => (
                <DesktopSubMenuItem
                  key={child.label}
                  item={child}
                  pathname={pathname}
                  setOpenMenu={setOpenMenu}
                  menuHref={menuHref}
                  setHoverPreviewHref={setHoverPreviewHref}
                  setSelectedPreviewByMenu={setSelectedPreviewByMenu}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function MobileMenuItem({ item, pathname, level = 0 }) {
  const active = isActivePath(pathname, item.href);
  const [open, setOpen] = useState(false);

  return (
    <li>
      <div
      className={`flex items-center justify-between rounded-2xl px-4 py-2.5 text-sm font-medium transition ${
          active
            ? "bg-blue-600 text-white"
            : "text-neutral-700 hover:bg-blue-50 hover:text-blue-700 dark:text-neutral-200 dark:hover:bg-blue-500/10 dark:hover:text-blue-300"
        } ${level === 1 ? "pl-6" : level >= 2 ? "pl-8" : ""}`}
      >
        <RouteLink to={item.href} className="flex-1">
          <span>{item.label}</span>
        </RouteLink>

        {item.children ? (
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setOpen((value) => !value);
            }}
            className="ml-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
            aria-label={open ? `Collapse ${item.label}` : `Expand ${item.label}`}
          >
            <ChevronRight
              size={15}
              className={`transition-transform duration-200 ${
                open ? "rotate-90" : ""
              }`}
            />
          </button>
        ) : null}
      </div>

      {item.children && open ? (
        <AnimatePresence>
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="mt-1 space-y-1 overflow-hidden border-l border-neutral-200 pl-3 dark:border-neutral-700"
          >
            {item.children.map((child) => (
              <MobileMenuItem
                key={child.label}
                item={child}
                pathname={pathname}
                level={level + 1}
              />
            ))}
          </motion.ul>
        </AnimatePresence>
      ) : null}
    </li>
  );
}

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [hoverPreviewHref, setHoverPreviewHref] = useState(null);
  const [selectedPreviewByMenu, setSelectedPreviewByMenu] = useState({});
  const { pathname } = useLocation();

  // Scroll-driven resize state only — no other behavior is affected.
  // false = at top of page: full width, square corners, flush to top.
  // true  = scrolled down: shrinks into the floating rounded pill.
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeMenu = findItemByHref(navItems, openMenu);
  const defaultPreviewHref =
    selectedPreviewByMenu[openMenu] ??
    activeMenu?.children?.[0]?.href ??
    activeMenu?.href ??
    null;
  const previewHref = hoverPreviewHref ?? defaultPreviewHref;
  const previewData = getPreviewData(previewHref);

  return (
    <header
      className={`fixed z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "inset-x-4 top-3 md:inset-x-6 lg:inset-x-10"
          : "inset-x-0 top-0"
      }`}
    >
      <div
        className={`mx-auto relative overflow-visible transition-all duration-300 ease-out ${
          scrolled ? "max-w-7xl rounded-[34px]" : "max-w-none rounded-none"
        }`}
      >
        <div
          className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-gradient-to-r from-blue-50 via-white to-sky-100 transition-all duration-300 ease-in-out dark:from-blue-950/20 dark:via-neutral-950 dark:to-sky-950/20 ${
            scrolled ? "rounded-[34px]" : "rounded-none"
          }`}
        >
          <div className="absolute -left-16 top-4 h-40 w-40 rounded-full bg-blue-200/60 blur-3xl dark:bg-blue-500/10" />
          <div className="absolute right-2 top-8 h-28 w-28 rounded-full bg-cyan-300/30 blur-2xl dark:bg-cyan-400/10" />
          <div className="absolute bottom-0 left-32 h-32 w-32 rounded-[40%] bg-sky-200/50 blur-3xl dark:bg-sky-500/10" />
          <div className="absolute right-24 top-1/2 h-14 w-40 -translate-y-1/2 rotate-[-12deg] rounded-full bg-white/50  dark:bg-white/5" />
          <div className="absolute left-10 bottom-3 h-16 w-16 rotate-12 rounded-[24px] bg-blue-100/80  dark:bg-blue-500/10" />
          <svg
            className="absolute right-8 bottom-2 h-24 w-24 opacity-40 dark:opacity-20"
            viewBox="0 0 120 120"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="edu-bg-ring" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#0ea5e9" />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="42" fill="none" stroke="url(#edu-bg-ring)" strokeWidth="10" opacity="0.55" />
            <circle cx="60" cy="60" r="16" fill="url(#edu-bg-ring)" opacity="0.55" />
          </svg>
        </div>

        <div
          className={`flex items-center justify-between gap-4 bg-white/95 backdrop-blur-xl transition-all duration-300 ease-out dark:bg-neutral-950/95 ${
            scrolled
              ? "rounded-[999px] border border-blue-100 px-4 py-2  dark:border-blue-900/30"
              : "rounded-none border-0 border-b border-blue-100 px-4 py-3  dark:border-blue-900/30"
          }`}
        >
          <RouteLink
            to="/"
            className="flex shrink-0 items-center transition-transform duration-200 hover:scale-105 active:scale-95"
            onClick={() => {
              setOpen(false);
              setOpenMenu(null);
              setHoverPreviewHref(null);
            }}
          >
            <img
              src="/favicon_io (1)/android-chrome-512x512.png"
              alt="Ignite Junior College & Schools"
              className="h-12 w-auto object-contain"
            />
          </RouteLink>

          <nav className="hidden flex-1 justify-center xl:flex" aria-label="Primary">
            <ul className="flex items-center gap-0.5">
              {navItems.map((item) => (
                <DesktopMenuItem
                  key={item.label}
                  item={item}
                  pathname={pathname}
                  openMenu={openMenu}
                  setOpenMenu={setOpenMenu}
                  setHoverPreviewHref={setHoverPreviewHref}
                  selectedPreviewByMenu={selectedPreviewByMenu}
                />
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <motion.button
              type="button"
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.05 }}
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors duration-200 hover:bg-blue-600 hover:text-white dark:bg-blue-500/10 dark:text-blue-300 dark:hover:bg-blue-600 dark:hover:text-white cursor-pointer"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            <motion.button
              type="button"
              whileTap={{ scale: 0.92 }}
              onClick={() => {
                setOpen((value) => !value);
                setOpenMenu(null);
                setHoverPreviewHref(null);
              }}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors duration-200 hover:bg-blue-600 hover:text-white xl:hidden dark:bg-blue-500/10 dark:text-blue-300 cursor-pointer"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {openMenu ? (
            <motion.div
              key={openMenu}
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 top-full z-30 w-full"
            >
              <div
                className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.14)] dark:border-blue-900/30 dark:bg-black"
                onMouseEnter={() => {
                  setOpenMenu(openMenu);
                  if (!hoverPreviewHref) {
                    setHoverPreviewHref(defaultPreviewHref);
                  }
                }}
                onMouseLeave={() => {
                  setOpenMenu(null);
                  setHoverPreviewHref(null);
                }}
              >
                <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-3xl">
                  <div className="absolute -left-20 top-[-40px] h-56 w-56 rounded-full bg-blue-200/60 blur-3xl dark:bg-blue-500/15" />
                  <div className="absolute right-[-10px] top-10 h-44 w-44 rounded-full bg-cyan-200/60 blur-3xl dark:bg-cyan-500/10" />
                  <div className="absolute bottom-[-30px] left-24 h-52 w-52 rounded-[40%] bg-sky-200/50 blur-3xl dark:bg-sky-500/10" />
                  <img
                    src="/assets/images/navbar_dropdown.webp"
                    alt=""
                    aria-hidden="true"
                    className="absolute bottom-3 left-4 h-24 w-44 object-contain object-left-bottom drop-shadow-[0_18px_20px_rgba(15,23,42,0.28)]"
                  />
                </div>
                <div className="relative grid min-h-[420px] gap-6 p-6 md:grid-cols-3 md:items-start">
                  <div className="relative z-10 overflow-hidden rounded-[24px] bg-gradient-to-br from-blue-50 via-white to-sky-100 p-4 dark:from-blue-950/20 dark:via-neutral-900 dark:to-sky-950/20">
                    <img
                      src={previewData.image}
                      alt={previewData.title}
                      className="h-56 w-full rounded-[20px] object-cover"
                    />
                  </div>

                  <div className="relative z-30 space-y-2 pb-8">
                    {activeMenu?.children?.map((child) => (
                      <DesktopSubMenuItem
                        key={child.label}
                        item={child}
                        pathname={pathname}
                        setOpenMenu={setOpenMenu}
                        menuHref={openMenu}
                        setHoverPreviewHref={setHoverPreviewHref}
                        setSelectedPreviewByMenu={setSelectedPreviewByMenu}
                      />
                    ))}
                  </div>

                  <div className="relative z-10 space-y-4 rounded-[24px] bg-gradient-to-br from-white via-blue-50 to-white p-2 dark:from-black dark:via-blue-950/10 dark:to-black">
                    <img
                      src={previewData.secondaryImage}
                      alt={`${previewData.title} preview`}
                      className="h-32 w-full rounded-[18px] object-cover"
                    />
                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600 dark:text-blue-300">
                        {previewData.title}
                      </p>
                      <p className="text-sm leading-7 text-neutral-700 dark:text-neutral-300">
                        {previewData.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            key="mobile-primary-nav"
            initial={{ opacity: 0, y: -14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile primary"
            className="mx-auto mt-3 max-w-310 rounded-[28px] border border-blue-100 bg-white p-4 shadow-2xl dark:border-blue-900/30 dark:bg-neutral-950 xl:hidden"
          >
            <ul className="space-y-1">
              {navItems.map((item) => (
                <MobileMenuItem key={item.label} item={item} pathname={pathname} />
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
