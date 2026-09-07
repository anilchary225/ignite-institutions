import gsap from "gsap";
import { motionDefaults } from "./gsapConfig";

export function revealUp(target, options = {}) {
  return gsap.fromTo(target, { autoAlpha: 0, y: 38, scale: 0.98, filter: "blur(4px)" }, {
    ...motionDefaults,
    ...options,
    autoAlpha: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  });
}

export function revealLeft(target, options = {}) {
  return gsap.fromTo(target, { autoAlpha: 0, x: -42 }, { ...motionDefaults, ...options, autoAlpha: 1, x: 0 });
}

export function revealRight(target, options = {}) {
  return gsap.fromTo(target, { autoAlpha: 0, x: 42 }, { ...motionDefaults, ...options, autoAlpha: 1, x: 0 });
}

export function scaleReveal(target, options = {}) {
  return gsap.fromTo(target, { autoAlpha: 0, scale: 0.92 }, { ...motionDefaults, ...options, autoAlpha: 1, scale: 1 });
}

export function staggerReveal(targets, options = {}) {
  return revealUp(targets, { stagger: 0.1, ...options });
}

export function imageReveal(target, options = {}) {
  return gsap.fromTo(target, { autoAlpha: 0, scale: 1.06, clipPath: "inset(0 100% 0 0)" }, {
    ...motionDefaults,
    duration: 1.1,
    ...options,
    autoAlpha: 1,
    scale: 1,
    clipPath: "inset(0 0% 0 0)",
  });
}
