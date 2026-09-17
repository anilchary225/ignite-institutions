import React, { useState } from "react";
import { motion } from "framer-motion";
import DocumentsSidebar from "./DocumentsSidebar";
import PDFViewerPanel from "./PDFViewerPanel";
import { documents as defaultDocuments } from "../../data/documents";
import { fadeUp } from "../../animations/variants";

/**
 * DocumentsViewer
 * -----------------------------------------------------------------------
 * Production-ready, reusable documents portal:
 *   header (eyebrow + heading) -> sidebar (list) + viewer (react-pdf)
 *
 * Usage:
 *   <DocumentsViewer />                       // uses src/data/documents.js
 *   <DocumentsViewer documents={customList} /> // override with your own array
 * -----------------------------------------------------------------------
 */
export default function DocumentsViewer({ documents = defaultDocuments }) {
  const [selectedDocument, setSelectedDocument] = useState(documents[0] ?? null);

  return (
    <section
      aria-labelledby="documents-heading"
      className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-slate-900 dark:text-slate-100"
    >
      {/* Header */}
      <motion.header
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mb-8 sm:mb-10 max-w-2xl"
      >
        <span className="inline-block text-xs font-semibold tracking-widest text-orange-600 uppercase mb-2">
          Documents
        </span>
        <h2
          id="documents-heading"
          className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight dark:text-white"
        >
          Important Documents
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-500 leading-relaxed dark:text-slate-400">
          Browse and read academic calendars, brochures, program details, and
          institutional policies — right here, without leaving the page.
        </p>
      </motion.header>

      {/* Body */}
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-6">
        <DocumentsSidebar
          documents={documents}
          selectedId={selectedDocument?.id}
          onSelect={setSelectedDocument}
        />
        <PDFViewerPanel document={selectedDocument} />
      </div>
    </section>
  );
}

