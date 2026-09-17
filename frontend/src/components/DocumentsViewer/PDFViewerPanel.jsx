import React, { useState, useRef, useEffect, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  StretchHorizontal,
  Maximize2,
  Minimize2,
  Download,
  Loader2,
  FileWarning,
  FileX,
} from "lucide-react";
import { fadeUp } from "../../animations/variants";

// PDF.js worker — served from a CDN matching the installed pdfjs-dist version.
// For a fully offline build, copy `pdf.worker.min.mjs` into `public/` instead
// and point workerSrc at that local path.
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const MIN_SCALE = 0.5;
const MAX_SCALE = 2.5;
const SCALE_STEP = 0.2;

export default function PDFViewerPanel({ document: activeDocument }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);
  const [fitWidth, setFitWidth] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [status, setStatus] = useState("loading"); // loading | ready | error

  const wrapperRef = useRef(null);
  const containerRef = useRef(null);

  // Reset to page 1 and refresh loading state whenever the selected document changes.
  useEffect(() => {
    setPageNumber(1);
    setNumPages(null);
    setStatus("loading");
  }, [activeDocument?.id]);

  // Track the viewer's available width so "fit to width" stays accurate on resize.
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Keep native fullscreen state in sync (covers Esc key / browser UI exits).
  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  const onDocumentLoadSuccess = useCallback(({ numPages: total }) => {
    setNumPages(total);
    setStatus("ready");
  }, []);

  const onDocumentLoadError = useCallback(() => {
    setStatus("error");
  }, []);

  const goToPrevPage = () => setPageNumber((p) => Math.max(1, p - 1));
  const goToNextPage = () => setPageNumber((p) => Math.min(numPages ?? p, p + 1));

  const zoomIn = () => {
    setFitWidth(false);
    setScale((s) => Math.min(MAX_SCALE, +(s + SCALE_STEP).toFixed(2)));
  };
  const zoomOut = () => {
    setFitWidth(false);
    setScale((s) => Math.max(MIN_SCALE, +(s - SCALE_STEP).toFixed(2)));
  };
  const toggleFitWidth = () => setFitWidth((f) => !f);

  const toggleFullscreen = async () => {
    if (!wrapperRef.current) return;
    try {
      if (!document.fullscreenElement) {
        await wrapperRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch {
      // Fullscreen API unsupported / blocked — silently ignore, controls still work inline.
    }
  };

  const handleDownload = () => {
    if (!activeDocument) return;
    const link = document.createElement("a");
    link.href = activeDocument.file;
    link.download = `${activeDocument.title}.pdf`;
    link.rel = "noopener";
    link.click();
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") goToNextPage();
    if (event.key === "ArrowLeft") goToPrevPage();
  };

  const pageWidth = fitWidth && containerWidth > 0 ? containerWidth - 48 : undefined;

  return (
    <motion.div
      ref={wrapperRef}
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="
        flex flex-col flex-1 min-w-0
        bg-white border border-slate-200 rounded-2xl shadow-sm dark:bg-slate-900 dark:border-slate-800
        overflow-hidden
        data-[fullscreen=true]:rounded-none
      "
    >
      {/* Toolbar */}
      <div
        className="
          flex items-center justify-between gap-3
          px-3 sm:px-4 py-2.5
          border-b border-slate-200 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-950/70
        "
      >
        <div className="flex items-center gap-1 sm:gap-1.5 min-w-0">
          <ToolbarButton
            onClick={goToPrevPage}
            disabled={status !== "ready" || pageNumber <= 1}
            label="Previous page"
            icon={<ChevronLeft className="w-4 h-4" />}
          />
          <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 px-1.5 whitespace-nowrap tabular-nums">
            {status === "ready" ? `${pageNumber} / ${numPages}` : "– / –"}
          </span>
          <ToolbarButton
            onClick={goToNextPage}
            disabled={status !== "ready" || pageNumber >= (numPages ?? 1)}
            label="Next page"
            icon={<ChevronRight className="w-4 h-4" />}
          />
        </div>

        <div className="flex items-center gap-1 sm:gap-1.5">
          <ToolbarButton
            onClick={zoomOut}
            disabled={status !== "ready" || scale <= MIN_SCALE}
            label="Zoom out"
            icon={<ZoomOut className="w-4 h-4" />}
            className="hidden sm:inline-flex"
          />
          <span className="hidden sm:inline text-xs font-medium text-slate-500 dark:text-slate-400 w-10 text-center tabular-nums">
            {fitWidth ? "Fit" : `${Math.round(scale * 100)}%`}
          </span>
          <ToolbarButton
            onClick={zoomIn}
            disabled={status !== "ready" || scale >= MAX_SCALE}
            label="Zoom in"
            icon={<ZoomIn className="w-4 h-4" />}
            className="hidden sm:inline-flex"
          />
          <ToolbarButton
            onClick={toggleFitWidth}
            active={fitWidth}
            disabled={status !== "ready"}
            label="Fit to width"
            icon={<StretchHorizontal className="w-4 h-4" />}
          />
          <div className="w-px h-5 bg-slate-200 dark:bg-slate-700 mx-0.5" aria-hidden="true" />
          <ToolbarButton
            onClick={handleDownload}
            disabled={status !== "ready"}
            label="Download document"
            icon={<Download className="w-4 h-4" />}
          />
          <ToolbarButton
            onClick={toggleFullscreen}
            active={isFullscreen}
            label={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            icon={
              isFullscreen ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )
            }
          />
        </div>
      </div>

      {/* Viewer surface */}
      <div
        ref={containerRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-label={`${activeDocument?.title ?? "PDF"} viewer. Use left and right arrow keys to change pages.`}
        className="
          relative flex-1 min-h-[420px] sm:min-h-[560px]
          overflow-auto
          bg-slate-100 dark:bg-slate-950
          flex items-start justify-center
          px-6 py-6
          focus:outline-none
        "
      >
        {!activeDocument && <EmptyState variant="none-selected" />}

        {activeDocument && status === "error" && (
          <EmptyState variant="error" title={activeDocument.title} />
        )}

        {activeDocument && (
          <Document
            key={activeDocument.id}
            file={activeDocument.file}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<LoadingState />}
            error={null}
            className={status === "error" ? "hidden" : ""}
          >
            <Page
              pageNumber={pageNumber}
              width={pageWidth}
              scale={fitWidth ? undefined : scale}
              className="shadow-lg rounded-md overflow-hidden bg-white"
              renderAnnotationLayer
              renderTextLayer
            />
          </Document>
        )}
      </div>
    </motion.div>
  );
}

function ToolbarButton({ onClick, disabled, active, label, icon, className = "" }) {
  return (
    <motion.button
      whileTap={{ scale: 0.93 }}
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={[
        "inline-flex items-center justify-center",
        "w-8 h-8 rounded-lg transition-colors",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-1",
        "disabled:opacity-35 disabled:cursor-not-allowed",
        active
          ? "bg-orange-500 text-white"
          : "text-slate-600 hover:bg-slate-200/80 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white",
        className,
      ].join(" ")}
    >
      {icon}
    </motion.button>
  );
}

function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-slate-500 dark:text-slate-400">
      <Loader2 className="w-6 h-6 animate-spin text-orange-500" />
      <p className="text-sm font-medium">Loading document…</p>
    </div>
  );
}

function EmptyState({ variant, title }) {
  if (variant === "none-selected") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-24 text-center text-slate-500 dark:text-slate-400 max-w-sm">
        <FileWarning className="w-8 h-8 text-slate-300" />
        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">No document selected</p>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          Choose a document from the list to view it here.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-center max-w-sm">
      <FileX className="w-8 h-8 text-red-400" />
      <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">
        Couldn't load "{title}"
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400">
        The document may be missing or the file may be corrupted. Please try
        again or contact the college office.
      </p>
    </div>
  );
}
