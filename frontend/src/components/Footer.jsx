import { MapPin, Phone, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { RouteLink } from "../router/BrowserRouter";
import { useTheme } from "../context/ThemeContext";
import { staggerContainer, staggerItem, defaultViewport, fadeUp, cardReveal } from "../animations/variants";

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
  { label: "Extra Curricular Activities", href: "/about/daya-at-ignite" },
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

const legalLinks = [
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
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
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/ignitejuniorcollege", color: "hover:bg-blue-600 hover:border-blue-600" },
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/ignite_junior_college_/", color: "hover:bg-pink-600 hover:border-pink-600" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/ignite-corporate01/?viewAsMember=true", color: "hover:bg-blue-500 hover:border-blue-500" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://www.youtube.com/c/IGNITEJUNIORCOLLEGE", color: "hover:bg-red-600 hover:border-red-600" },
];

function FooterColumn({ heading, links, accentColor = "text-orange-400" }) {
  return (
    <motion.div variants={fadeUp}>
      <h3 className={`text-xs font-bold uppercase tracking-widest ${accentColor} mb-5`}>{heading}</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <RouteLink
              to={link.href}
              className="inline-block text-xs text-neutral-400 transition-colors duration-200 hover:text-white hover:translate-x-1"
            >
              {link.label}
            </RouteLink>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <footer className="bg-neutral-950 border-t border-white/5 overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-linear-to-r from-orange-500 via-green-600 to-blue-500" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="mx-auto max-w-7xl px-6 pt-14 pb-10 sm:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1fr_1fr] lg:items-start">

          {/* Brand */}
          <motion.div variants={fadeUp} className="lg:justify-self-start lg:text-left">
            {/* Logo */}
            <RouteLink to="/" className="inline-flex">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                src="/favicon_io (1)/android-chrome-512x512.png"
                alt="Ignite Junior College & Schools"
                className="h-16 w-auto object-contain"
              />
            </RouteLink>

            <p className="mt-4 text-xs text-neutral-400 leading-relaxed max-w-xs">
              Empowering students with excellence in IIT-JEE, NEET & EAPCET coaching since 2005. Lead by Experts.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-2.5">
              {socialLinks.map(({ icon: Icon, label, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`grid h-9 w-9 place-items-center rounded-xl border border-white/10 text-neutral-400 transition-all ${color} hover:text-white`}
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp} className="lg:order-2 lg:text-left">
            <h3 className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-5">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 shrink-0 text-orange-500" size={16} />
                <a href="" className="text-[11px] text-neutral-400 leading-snug hover:text-white transition-colors">Pillar No : A-708, NH -9, Plot No : 14, Sri Sai Nagar Colony, opp. Metro Station Jntu College, beside JNTU, Kukatpally, Hyderabad, Telangana 500085</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="shrink-0 text-green-500" size={16} />
                <p className="text-[11px] text-neutral-400">+91 70365 11111 <br/> +91 97000 41234</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="shrink-0 text-blue-500" size={16} />
                <p className="text-[11px] text-neutral-400">Info@ignite.academy</p>
              </div>
            </div>
          </motion.div>

          <FooterColumn heading="Campus Life" links={campusLifeLinks} accentColor="text-orange-400" />
          <FooterColumn heading="Courses" links={courseLinks} accentColor="text-green-500" />
          <FooterColumn heading="Quick Links" links={quickViewLinks} accentColor="text-blue-400" />
          <FooterColumn heading="Legal" links={legalLinks} accentColor="text-orange-400" />
        </div>

        {/* Divider */}
        <motion.div
          variants={fadeUp}
          className="mt-12 border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-[11px] text-neutral-600">
            © {new Date().getFullYear()} IGNITE Junior College & Schools. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
             <span className="font-semibold text-xs text-neutral-600">Built by<span> </span>
              <span className=" h-5 w-5 items-center justify-center rounded-md bg-black italic text-white text-[10px] font-bold">
                AS KREATIV
            </span></span>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
