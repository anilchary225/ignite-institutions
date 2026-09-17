/**
 * Framer Motion Transitions & Timing Tokens
 * Global cinematic easing system
 */

export const eases = {
  cinematic: [0.22, 1, 0.36, 1],
  gentle: [0.16, 1, 0.3, 1],
  outCubic: [0.33, 1, 0.68, 1],
  easeInOut: [0.65, 0, 0.35, 1],
  snappy: [0.2, 0, 0, 1],
};

export const transitions = {
  micro: { duration: 0.18, ease: eases.cinematic },
  buttonHover: { duration: 0.22, ease: eases.cinematic },
  cardHover: { duration: 0.3, ease: eases.cinematic },
  textReveal: { duration: 0.62, ease: eases.cinematic },
  sectionReveal: { duration: 0.7, ease: eases.cinematic },
  pageTransition: { duration: 0.32, ease: eases.cinematic },
  imageReveal: { duration: 0.85, ease: eases.cinematic },
  springSnappy: { type: "spring", stiffness: 420, damping: 32 },
  springGentle: { type: "spring", stiffness: 260, damping: 24 },
  springBounce: { type: "spring", stiffness: 300, damping: 18 },
};
