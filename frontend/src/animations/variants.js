import { eases, transitions } from "./transitions";

// ─── Viewport defaults ───────────────────────────────────────────────────────
export const defaultViewport = { once: true, amount: 0.12 };
export const lazyViewport = { once: true, amount: 0.08 };
export const earlyViewport = { once: true, amount: 0.05 };

// ─── Fade variants ───────────────────────────────────────────────────────────
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.sectionReveal },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: transitions.sectionReveal },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -28 },
  visible: { opacity: 1, y: 0, transition: transitions.sectionReveal },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: 44 },
  visible: { opacity: 1, x: 0, transition: transitions.sectionReveal },
};

export const fadeRight = {
  hidden: { opacity: 0, x: -44 },
  visible: { opacity: 1, x: 0, transition: transitions.sectionReveal },
};

// ─── Scale variants ──────────────────────────────────────────────────────────
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: transitions.sectionReveal },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.85, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: transitions.springGentle },
};

// ─── Blur reveal ─────────────────────────────────────────────────────────────
export const blurReveal = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 18 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: transitions.textReveal,
  },
};

export const blurIn = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: transitions.textReveal,
  },
};

// ─── Slide variants ──────────────────────────────────────────────────────────
export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: transitions.sectionReveal },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: transitions.sectionReveal },
};

export const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: transitions.sectionReveal },
};

// ─── Stagger containers ───────────────────────────────────────────────────────
// staggerContainer is a factory function: call it with args OR use as a plain object.
export function staggerContainer(staggerChildren = 0.1, delayChildren = 0.05) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren, delayChildren },
    },
  };
}
// Plain-object defaults (for backwards compat when used as `variants={staggerContainer}`)
staggerContainer.hidden = { opacity: 0 };
staggerContainer.visible = {
  opacity: 1,
  transition: { staggerChildren: 0.1, delayChildren: 0.05 },
};

export function staggerContainerFast(staggerChildren = 0.06, delayChildren = 0.02) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren, delayChildren },
    },
  };
}
staggerContainerFast.hidden = { opacity: 0 };
staggerContainerFast.visible = {
  opacity: 1,
  transition: { staggerChildren: 0.06, delayChildren: 0.02 },
};

export function staggerContainerSlow(staggerChildren = 0.14, delayChildren = 0.08) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren, delayChildren },
    },
  };
}
staggerContainerSlow.hidden = { opacity: 0 };
staggerContainerSlow.visible = {
  opacity: 1,
  transition: { staggerChildren: 0.14, delayChildren: 0.08 },
};

// ─── Stagger items ────────────────────────────────────────────────────────────
export const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: eases.cinematic } },
};

export const staggerItemFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: eases.cinematic } },
};

export const staggerItemLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: eases.cinematic } },
};

export const staggerItemScale = {
  hidden: { opacity: 0, scale: 0.94, y: 14 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: eases.cinematic } },
};

// ─── Card reveal ─────────────────────────────────────────────────────────────
export const cardReveal = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: eases.cinematic } },
};

// ─── Image reveal ─────────────────────────────────────────────────────────────
export const imageReveal = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: { opacity: 1, scale: 1, transition: transitions.imageReveal },
};

export const imageRevealLeft = {
  hidden: { opacity: 0, scale: 1.04, x: -30 },
  visible: { opacity: 1, scale: 1, x: 0, transition: transitions.imageReveal },
};

export const imageRevealRight = {
  hidden: { opacity: 0, scale: 1.04, x: 30 },
  visible: { opacity: 1, scale: 1, x: 0, transition: transitions.imageReveal },
};

// ─── Page transitions ─────────────────────────────────────────────────────────
export const pageVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: eases.cinematic },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

// ─── Modal variants ───────────────────────────────────────────────────────────
export const modalOverlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.22 } },
  exit: { opacity: 0, transition: { duration: 0.18 } },
};

export const modalContent = {
  hidden: { opacity: 0, scale: 0.94, y: 14 },
  visible: { opacity: 1, scale: 1, y: 0, transition: transitions.springGentle },
  exit: { opacity: 0, scale: 0.95, y: 8, transition: { duration: 0.18, ease: "easeOut" } },
};

// ─── Mobile menu ─────────────────────────────────────────────────────────────
export const mobileMenuVariants = {
  hidden: { opacity: 0, y: -12, scale: 0.98 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.28, ease: eases.cinematic, staggerChildren: 0.05, delayChildren: 0.05 },
  },
  exit: { opacity: 0, y: -10, scale: 0.98, transition: { duration: 0.2, ease: "easeOut" } },
};

export const mobileMenuItemVariants = {
  hidden: { opacity: 0, x: -14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25, ease: eases.cinematic } },
};

// ─── Dropdown ─────────────────────────────────────────────────────────────────
export const dropdownVariants = {
  hidden: { opacity: 0, scaleY: 0.92, y: -6, transformOrigin: "top" },
  visible: {
    opacity: 1, scaleY: 1, y: 0, transformOrigin: "top",
    transition: { duration: 0.22, ease: eases.cinematic },
  },
  exit: {
    opacity: 0, scaleY: 0.94, y: -4, transformOrigin: "top",
    transition: { duration: 0.16, ease: "easeIn" },
  },
};

// ─── Tab content ─────────────────────────────────────────────────────────────
export const tabContent = {
  hidden: { opacity: 0, x: 14 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.32, ease: eases.cinematic } },
  exit: { opacity: 0, x: -10, transition: { duration: 0.2 } },
};

// ─── Hero text ───────────────────────────────────────────────────────────────
export const heroHeading = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.8, ease: eases.cinematic },
  },
};

export const heroSubtitle = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: eases.cinematic, delay: 0.18 },
  },
};

export const heroCta = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: eases.cinematic, delay: 0.36 },
  },
};

// ─── Section header helpers ───────────────────────────────────────────────────
export const sectionEyebrow = {
  hidden: { opacity: 0, y: 16, letterSpacing: "0.1em" },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: eases.cinematic },
  },
};

export const sectionHeading = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.65, ease: eases.cinematic, delay: 0.08 },
  },
};

export const sectionBody = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.58, ease: eases.cinematic, delay: 0.16 },
  },
};

// ─── Icon animation ───────────────────────────────────────────────────────────
export const iconPop = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: transitions.springBounce },
};

// ─── Button helpers ────────────────────────────────────────────────────────────
export const buttonTap = { scale: 0.96 };
export const buttonHover = { scale: 1.03, transition: transitions.buttonHover };
export const buttonHoverSubtle = { scale: 1.015, transition: transitions.buttonHover };

// ─── Decorative float ─────────────────────────────────────────────────────────
export const floatSlow = {
  animate: {
    y: [0, -10, 0],
    transition: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
  },
};

// ─── Number counter reveal ────────────────────────────────────────────────────
export const counterReveal = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.65, ease: eases.cinematic },
  },
};
