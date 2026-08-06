import { MapPin, Phone, Mail, Heart } from "lucide-react";
import { RouteLink } from "../router/BrowserRouter";
import { useTheme } from "../context/ThemeContext";

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
  { label: "NEET Long Term", href: "/streams/test-prep/neet-long-term" },
  { label: "JEE Mains / Advanced Long Term", href: "/streams/test-prep/iit-jee-long-term" },
  { label: "Intermediate + NEET (BiPC)", href: "/streams/junior-college/bipc-neet-coaching" },
  { label: "Intermediate (MPC) + JEE", href: "/streams/junior-college/mpc-iit-coaching" },
  { label: "Foundation", href: "/streams/test-prep/foundation" },
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
  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com", color: "hover:bg-blue-600 hover:border-blue-600" },
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com", color: "hover:bg-pink-600 hover:border-pink-600" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://linkedin.com", color: "hover:bg-blue-500 hover:border-blue-500" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://youtube.com", color: "hover:bg-red-600 hover:border-red-600" },
];

function FooterColumn({ heading, links, accentColor = "text-orange-400" }) {
  return (
    <div>
      <h3 className={`text-sm font-bold uppercase tracking-widest ${accentColor} mb-5`}>{heading}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <RouteLink
              to={link.href}
              className="text-sm text-neutral-400 transition-colors hover:text-white"
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
  const { darkMode } = useTheme();

  return (
    <footer className="bg-neutral-950 border-t border-white/5">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-orange-500 via-green-600 to-blue-500" />

      <div className="mx-auto max-w-7xl px-6 pt-14 pb-10 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr_1fr_0.8fr]">

          {/* Brand + contact */}
          <div>
            {/* Logo */}
            <RouteLink to="/" className="inline-block">
              <img
                src="/logo-dark.png"
                alt="Ignite Junior College & Schools"
                className="h-16 w-auto object-contain"
              />
            </RouteLink>

            <p className="mt-4 text-sm text-neutral-400 leading-relaxed max-w-xs">
              Empowering students with excellence in IIT-JEE, NEET & EAPCET coaching since 2005. Lead by Experts.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0 text-orange-500" size={16} />
                <p className="text-xs text-neutral-400 leading-snug">Plot No – 14, Sri Sai Nagar, Hyderabad – 500085, OPP. Metro Pillar No – A708</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="shrink-0 text-green-500" size={16} />
                <p className="text-xs text-neutral-400">+91 70365 11 111 &nbsp;·&nbsp; +91 97000 4 1234</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="shrink-0 text-blue-500" size={16} />
                <p className="text-xs text-neutral-400">Info@ignite.academy</p>
              </div>
            </div>

            {/* Social */}
            <div className="mt-6 flex gap-2.5">
              {socialLinks.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`grid h-9 w-9 place-items-center rounded-xl border border-white/10 text-neutral-400 transition-all ${color} hover:text-white`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn heading="Campus Life" links={campusLifeLinks} accentColor="text-orange-400" />
          <FooterColumn heading="Courses" links={courseLinks} accentColor="text-green-500" />
          <FooterColumn heading="Quick Links" links={quickViewLinks} accentColor="text-blue-400" />
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} IGNITE Junior College & Schools. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-neutral-600">
            Built with <Heart size={11} className="text-red-500 fill-red-500" /> for students
          </p>
        </div>
      </div>
    </footer>
  );
}
