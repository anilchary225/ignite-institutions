import { MapPin, Phone, Mail } from "lucide-react";
import { RouteLink } from "../router/BrowserRouter";

// lucide-react dropped brand/logo icons in newer versions, so these four are
// small inline SVGs instead of library imports — keeps the footer independent
// of whatever icon set is installed.
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.7-1.6h1.5V3.2C16.4 3.1 15.3 3 14.1 3c-2.6 0-4.4 1.6-4.4 4.4v2.4H7v3.2h2.7v8h3.8Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H4V20h2.94V8.5ZM5.47 3.5A1.72 1.72 0 1 0 5.47 7a1.72 1.72 0 0 0 0-3.5ZM20 20h-2.94v-6.1c0-1.45-.03-3.32-2.02-3.32-2.03 0-2.34 1.58-2.34 3.22V20H9.75V8.5h2.83v1.57h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.55 1.97 3.55 4.54V20Z" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.7a2.7 2.7 0 0 0-1.9-1.9C18 5.3 12 5.3 12 5.3s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9A28 28 0 0 0 2 12a28 28 0 0 0 .4 4.3 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.3ZM10 15V9l5.2 3-5.2 3Z" />
    </svg>
  );
}

const campusLifeLinks = [
    { label: "Personality Development", href: "/about/personality-development" },
    { label: "Day At IGNITE", href: "/about/daya-at-ignite" },
    { label: "Campus Hostel Facility", href: "/about/campus-hostel-facilities" },
    { label: "Testimonials", href: "/about/testimonials" },
  
];

const courseLinks = [
  { label: "NEET LONGTERM", href: "/streams/test-prep/neet-long-term" },
  { label: "JEEMAINS/ ADVANCED LONGTERM", href: "/streams/test-prep/iit-jee-long-term" },
  { label: "INTERMEDIATE +NEET (BIPC)", href: "/streams/junior-college/bipc-neet-coaching" },
  { label: "INTERMEDIATE(MPC) + JEEMAINS / ADVANCED", href: "/streams/junior-college/mpc-iit-coaching" },
  { label: "FOUNDATION", href: "/streams/test-prep/foundation" },
];

const quickViewLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Streams", href: "/streams" },
  { label: "Gallery", href: "/gallery" },
  { label: "Results", href: "/results" },
  { label: "Contact", href: "/contact" },
  
];

const socialLinks = [
  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com" },
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://youtube.com" },
];

function FooterColumn({ heading, links }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-white">{heading}</h3>
      <ul className="mt-5 space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <RouteLink
              to={link.href}
              className="text-sm text-neutral-300 transition hover:text-orange-500"
            >
              {link.label}
            </RouteLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-neutral-950">
      {/* Glossy sheen: soft diagonal highlight sweeping across the dark surface */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/3 h-72 w-[60%] -translate-x-1/2 rotate-6 rounded-full bg-white/5 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-12 lg:grid-cols-[1.4fr_1fr_1fr_0.8fr]">
        {/* Brand + contact */}
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-orange-500 to-green-600 text-xl font-black text-white">
              I
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-2xl font-extrabold tracking-wide text-white">
                IGNITE
              </span>
              <span className="text-xs font-medium tracking-widest text-orange-500">
                LEAD BY EXPERTS
              </span>
            </span>
          </div>

          <div className="mt-8 space-y-5 text-sm text-neutral-300">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 shrink-0 text-orange-500" size={20} />
              <p>Plot No – 14, Sri Sai Nagar, Hyderabad – 500085, OPP. Metro Pillar No – A708</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="shrink-0 text-orange-500" size={20} />
              <p>+91 70365 11 111, +91 97000 4 1234</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="shrink-0 text-orange-500" size={20} />
              <p>Info@ignite.academy</p>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-orange-500 text-orange-500 transition hover:bg-orange-500 hover:text-white"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn heading="Our Campus Life" links={campusLifeLinks} />
        <FooterColumn heading="Course Offered" links={courseLinks} />
        <FooterColumn heading="Quick View" links={quickViewLinks} />
      </div>

      <div className="relative border-t border-white/10 px-6 py-5 text-center text-xs text-neutral-500 sm:px-12">
        © {new Date().getFullYear()} IGNITE Junior College. All rights reserved.
      </div>
    </footer>
  );
}