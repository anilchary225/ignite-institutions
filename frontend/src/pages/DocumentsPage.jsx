import React from "react";
import { motion } from "framer-motion";
import { DocumentsViewer } from "../components/DocumentsViewer";
import { pageVariants } from "../animations/variants";

/**
 * DocumentsPage
 * -----------------------------------------------------------------------
 * Standalone page wrapper for the Documents Viewer component.
 * Adds a clean, light backdrop with a subtle abstract line/blob drawing
 * behind the header — decorative only, sits behind all interactive
 * content (pointer-events-none) and never competes with the PDF viewer.
 * -----------------------------------------------------------------------
 */
export default function DocumentsPage() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Abstract decorative background */}
      <AbstractBackdrop />

      <div className="relative z-10">
        <DocumentsViewer />
      </div>
    </motion.main>
  );
}

/**
 * Abstract line-art + soft blob composition.
 * Positioned top-of-page, fades out toward the content below.
 * Purely decorative: aria-hidden, no pointer events.
 */
function AbstractBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-[520px] overflow-hidden"
    >
      {/* Soft color wash */}
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-orange-100/60 blur-3xl" />
      <div className="absolute -top-32 right-[-10%] w-[480px] h-[480px] rounded-full bg-blue-100/50 blur-3xl" />

      {/* Abstract line drawing */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-[0.35]"
        viewBox="0 0 1400 520"
        fill="none"
        preserveAspectRatio="xMidYMin slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-40 380 C 220 300, 380 440, 620 320 S 1040 180, 1180 260 S 1420 200, 1500 120"
          stroke="#EA580C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M-60 120 C 180 60, 340 180, 560 100 S 920 -20, 1120 90 S 1380 60, 1480 -10"
          stroke="#1E3A8A"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M-20 470 C 260 430, 460 500, 700 430 S 1080 350, 1260 400 S 1460 380, 1520 340"
          stroke="#94A3B8"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* Scattered nodes along the primary curve for a "hand-drawn diagram" feel */}
        <circle cx="220" cy="300" r="4" fill="#EA580C" />
        <circle cx="620" cy="320" r="4" fill="#EA580C" opacity="0.7" />
        <circle cx="1180" cy="260" r="4" fill="#EA580C" opacity="0.5" />

        <circle cx="340" cy="180" r="3" fill="#1E3A8A" opacity="0.6" />
        <circle cx="920" cy="-20" r="3" fill="#1E3A8A" opacity="0.4" />
      </svg>

      {/* Fade to the page background so it never fights with the sidebar/viewer */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-slate-50 dark:to-slate-950" />
    </div>
  );
}
