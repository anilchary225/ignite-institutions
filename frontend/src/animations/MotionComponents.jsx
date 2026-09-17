/**
 * Reusable Motion Components — use these throughout the app
 * instead of repeating motion props manually.
 */
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeUp, fadeIn, fadeLeft, fadeRight, fadeDown,
  scaleIn, blurReveal, blurIn, imageReveal,
  staggerContainer, staggerContainerFast, staggerItem, staggerItemScale,
  cardReveal, pageVariants, modalOverlay, modalContent,
  sectionEyebrow, sectionHeading, sectionBody, iconPop,
  buttonHover, buttonTap, defaultViewport, lazyViewport,
  heroHeading, heroSubtitle, heroCta, tabContent,
} from "./variants";

// ─────────────────────────────────────────────────────────────────────────────
// PAGE TRANSITION — wrap every route's root element
// ─────────────────────────────────────────────────────────────────────────────
export function PageTransition({ children, className = "" }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION REVEAL — viewport-triggered reveal for sections
// ─────────────────────────────────────────────────────────────────────────────
export function Reveal({
  children,
  variants = fadeUp,
  viewport = defaultViewport,
  className = "",
  as: Tag = "div",
  delay = 0,
}) {
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag
      variants={delay ? { ...variants, visible: { ...variants.visible, transition: { ...variants.visible.transition, delay } } } : variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FADE IN — simple fade on viewport entry
// ─────────────────────────────────────────────────────────────────────────────
export function FadeIn({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={defaultViewport}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STAGGER CONTAINER — parent that staggers children
// ─────────────────────────────────────────────────────────────────────────────
export function StaggerContainer({
  children,
  className = "",
  fast = false,
  viewport = defaultViewport,
  as: Tag = "div",
}) {
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag
      variants={fast ? staggerContainerFast : staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// STAGGER ITEM — child of StaggerContainer
// ─────────────────────────────────────────────────────────────────────────────
export function StaggerItem({ children, className = "", scale = false, as: Tag = "div" }) {
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag variants={scale ? staggerItemScale : staggerItem} className={className}>
      {children}
    </MotionTag>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MOTION CARD — reveal + hover lift
// ─────────────────────────────────────────────────────────────────────────────
export function MotionCard({
  children,
  className = "",
  hoverY = -6,
  useVariants = true,
}) {
  return (
    <motion.div
      variants={useVariants ? cardReveal : undefined}
      whileHover={{ y: hoverY, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MOTION BUTTON — micro-interactions for every button
// ─────────────────────────────────────────────────────────────────────────────
export function MotionButton({ children, className = "", ...props }) {
  return (
    <motion.button
      whileHover={buttonHover}
      whileTap={buttonTap}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// IMAGE REVEAL — cinematic image entrance
// ─────────────────────────────────────────────────────────────────────────────
export function ImageReveal({ src, alt, className = "", containerClassName = "" }) {
  return (
    <motion.div
      variants={imageReveal}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={`overflow-hidden ${containerClassName}`}
    >
      <motion.img
        src={src}
        alt={alt}
        whileHover={{ scale: 1.04, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
        className={className}
      />
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION HEADER — eyebrow + heading + body staggered
// ─────────────────────────────────────────────────────────────────────────────
export function SectionHeader({ eyebrow, heading, body, className = "", center = true }) {
  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <motion.span
          variants={sectionEyebrow}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {eyebrow}
        </motion.span>
      )}
      {heading && (
        <motion.h2
          variants={sectionHeading}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {heading}
        </motion.h2>
      )}
      {body && (
        <motion.p
          variants={sectionBody}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {body}
        </motion.p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MODAL WRAPPER — AnimatePresence + motion overlay + content
// ─────────────────────────────────────────────────────────────────────────────
export function MotionModal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalOverlay}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
        >
          <motion.div
            variants={modalContent}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATED TAB CONTENT
// ─────────────────────────────────────────────────────────────────────────────
export function AnimatedTabContent({ children, tabKey }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={tabKey}
        variants={tabContent}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ICON REVEAL
// ─────────────────────────────────────────────────────────────────────────────
export function IconReveal({ children, className = "" }) {
  return (
    <motion.div
      variants={iconPop}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}
