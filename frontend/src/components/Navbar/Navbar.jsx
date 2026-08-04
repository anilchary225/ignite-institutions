import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { RouteLink, useLocation } from "../../router/BrowserRouter";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Personality Development", href: "/about/personality-development" },
      { label: "Daya at Ignite", href: "/about/daya-at-ignite" },
      { label: "Campus Hostel Facilities", href: "/about/campus-hostel-facilities" },
      { label: "Testimonials", href: "/about/testimonials" },
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
          { label: "MPC IIT Coaching", href: "/streams/junior-college/mpc-iit-coaching" },
          { label: "BIPC NEET Coaching", href: "/streams/junior-college/bipc-neet-coaching" },
        ],
      },
      { label: "School", href: "/streams/school" },
      {
        label: "Test Prep",
        href: "/streams/test-prep",
        children: [
          { label: "IIT JEE Long Term", href: "/streams/test-prep/iit-jee-long-term" },
          { label: "IIT JEE Short Term", href: "/streams/test-prep/iit-jee-short-term" },
          { label: "NEET Long Term", href: "/streams/test-prep/neet-long-term" },
          { label: "NEET Short Term", href: "/streams/test-prep/neet-short-term" },
          { label: "Foundation", href: "/streams/test-prep/foundation" },
        ],
      },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "Photos", href: "/gallery/photos" },
      { label: "Videos", href: "/gallery/videos" },
      { label: "Events", href: "/gallery/events" },
      { label: "Testimonials", href: "/gallery/testimonials" },
    ],
  },
  { label: "Results", href: "/results" },
  { label: "Contact Us", href: "/contact" },
];

function getPathname() {
  if (typeof window === "undefined") return "/";
  return window.location.pathname || "/";
}

function isActivePath(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function DesktopMenuItem({ item, pathname, dismissed, setDismissed }) {
  const active = isActivePath(pathname, item.href);
  const isDismissed = dismissed === item.href;
  return (
    <li
      className="group relative"
      onMouseEnter={() => setDismissed(null)}
      onFocusCapture={() => setDismissed(null)}
    >
      <RouteLink
        to={item.href}
        onClick={() => setDismissed(item.href)}
        className={`inline-flex items-center rounded-full px-4 py-3 text-sm font-semibold transition ${
          active
            ? "bg-violet-600 text-white dark:bg-violet-500"
            : "text-neutral-700 hover:bg-amber-400 hover:text-white dark:text-neutral-200"
        }`}
      >
        {item.label}
      </RouteLink>

      {item.children && !isDismissed ? (
        <div className="invisible absolute left-1/2 top-full z-50 min-w-72 -translate-x-1/2 translate-y-0 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100">
          <div className="rounded-b-3xl bg-white p-2 dark:bg-neutral-900">
            {item.children.map((child) => (
              <div key={child.label} className="relative group/sub">
                {(() => {
                  const childActive = isActivePath(pathname, child.href);
                  return (
                <RouteLink
                  to={child.href}
                  onClick={() => setDismissed(item.href)}
                  className={`flex items-center justify-between rounded-full px-4 py-3 text-sm font-medium transition ${
                    childActive
                      ? "bg-violet-600 text-white dark:bg-violet-500"
                      : "text-neutral-700 hover:bg-amber-400 hover:text-white dark:text-neutral-200"
                  }`}
                >
                  {child.label}
                  {child.children ? <span className="text-xs">›</span> : null}
                </RouteLink>
                  );
                })()}

                {child.children ? (
                  <div className="invisible absolute left-[calc(100%+12px)] top-0 z-50 min-w-62.5 opacity-0 transition duration-200 group-hover/sub:visible group-hover/sub:opacity-100">
                    <div className="rounded-b-[20px] bg-white p-2 dark:bg-neutral-900">
                      <div className="space-y-1">
                        {child.children.map((subItem) => (
                          <div key={subItem.label}>
                            {(() => {
                              const subActive = isActivePath(pathname, subItem.href);
                              return (
                            <RouteLink
                              to={subItem.href}
                              onClick={() => setDismissed(item.href)}
                              className={`block rounded-full px-4 py-3 text-sm font-medium transition ${
                                subActive
                                  ? "bg-violet-600 text-white dark:bg-violet-500"
                                  : "text-neutral-700 hover:bg-amber-400 hover:text-white dark:text-neutral-200"
                              }`}
                            >
                              {subItem.label}
                            </RouteLink>
                              );
                            })()}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </li>
  );
}

function MobileMenuItem({ item, pathname, level = 0 }) {
  const active = isActivePath(pathname, item.href);
  return (
    <li>
      <RouteLink
        to={item.href}
        className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
          active
            ? "bg-violet-600 text-white dark:bg-violet-500"
            : "text-neutral-700 hover:bg-amber-400 hover:text-white dark:text-neutral-200"
        } ${
          level === 1 ? "pl-6" : level >= 2 ? "pl-8" : ""
        }`}
      >
        {item.label}
      </RouteLink>
      {item.children ? (
        <ul className="mt-1 space-y-1 border-l border-neutral-200 pl-3 dark:border-neutral-700">
          {item.children.map((child) => (
            <MobileMenuItem key={child.label} item={child} level={level + 1} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(null);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-4 z-50 px-4">
      <div className="mx-auto flex max-w-310 items-center justify-between gap-4 rounded-[999px] border border-neutral-200 bg-white/90 px-5 py-3 shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/90">
        <RouteLink to="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-full bg-linear-to-br from-violet-600 to-violet-400 text-lg font-black text-white">
            I
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-base font-extrabold text-neutral-950 dark:text-white">Ignite</span>
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Junior College & School
            </span>
          </span>
        </RouteLink>

        <nav className="hidden flex-1 justify-center xl:flex" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <DesktopMenuItem
                key={item.label}
                item={item}
                pathname={pathname}
                dismissed={dismissed}
                setDismissed={setDismissed}
              />
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-violet-600/10 text-violet-700 transition hover:bg-amber-400 hover:text-white dark:text-violet-300"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-violet-600/10 text-violet-700 transition hover:bg-amber-400 hover:text-white xl:hidden dark:text-violet-300"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          aria-label="Mobile primary"
          className="mx-auto mt-3 max-w-310 rounded-[28px] border border-neutral-200 bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.14)] dark:border-white/10 dark:bg-neutral-950 xl:hidden"
        >
          <ul className="space-y-1">
            {navItems.map((item) => (
              <MobileMenuItem key={item.label} item={item} pathname={pathname} />
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
