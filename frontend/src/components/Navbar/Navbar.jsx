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
      { label: "Day at Ignite", href: "/about/daya-at-ignite" },
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
        className={`inline-flex items-center rounded-full px-4 py-2.5 text-sm font-semibold transition ${
          active
            ? "bg-orange-500 text-white"
            : "text-neutral-700 hover:bg-orange-500 hover:text-white dark:text-neutral-200 dark:hover:bg-orange-500"
        }`}
      >
        {item.label}
      </RouteLink>

      {item.children && !isDismissed ? (
        <div className="invisible absolute left-1/2 top-full z-50 min-w-72 -translate-x-1/2 translate-y-0 pt-3 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100">
          <div className="rounded-b-3xl bg-white p-2 shadow-xl dark:bg-neutral-900">
            {item.children.map((child) => (
              <div key={child.label} className="relative group/sub">
                {(() => {
                  const childActive = isActivePath(pathname, child.href);
                  return (
                <RouteLink
                  to={child.href}
                  onClick={() => setDismissed(item.href)}
                  className={`flex items-center justify-between rounded-full px-4 py-2.5 text-sm font-medium transition ${
                    childActive
                      ? "bg-orange-500 text-white"
                      : "text-neutral-700 hover:bg-orange-500 hover:text-white dark:text-neutral-200"
                  }`}
                >
                  {child.label}
                  {child.children ? <span className="text-xs">›</span> : null}
                </RouteLink>
                  );
                })()}

                {child.children ? (
                  <div className="invisible absolute left-[calc(100%+12px)] top-0 z-50 min-w-62.5 opacity-0 transition duration-200 group-hover/sub:visible group-hover/sub:opacity-100">
                    <div className="rounded-b-[20px] bg-white p-2 shadow-xl dark:bg-neutral-900">
                      <div className="space-y-1">
                        {child.children.map((subItem) => (
                          <div key={subItem.label}>
                            {(() => {
                              const subActive = isActivePath(pathname, subItem.href);
                              return (
                            <RouteLink
                              to={subItem.href}
                              onClick={() => setDismissed(item.href)}
                              className={`block rounded-full px-4 py-2.5 text-sm font-medium transition ${
                                subActive
                                  ? "bg-orange-500 text-white"
                                  : "text-neutral-700 hover:bg-orange-500 hover:text-white dark:text-neutral-200"
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
        className={`block rounded-2xl px-4 py-2.5 text-sm font-medium transition ${
          active
            ? "bg-orange-500 text-white"
            : "text-neutral-700 hover:bg-orange-500 hover:text-white dark:text-neutral-200"
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
  const { pathname } = useLocation();

  return (
    <header className="sticky top-3 z-50 px-4">
      <div className="mx-auto flex max-w-310 items-center justify-between gap-4 rounded-[999px] border border-neutral-200 bg-white/95 px-4 py-2 shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/95">
        {/* Logo */}
        <RouteLink to="/" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <img
            src={darkMode ? "/logo-dark.png" : "/logo-light.png"}
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
                dismissed={null}
                setDismissed={() => {}}
              />
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-600 transition hover:bg-orange-500 hover:text-white dark:bg-orange-500/10 dark:text-orange-400 dark:hover:bg-orange-500 dark:hover:text-white"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange-600 transition hover:bg-orange-500 hover:text-white xl:hidden dark:bg-orange-500/10 dark:text-orange-400"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
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
