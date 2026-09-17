import React, { useRef } from "react";
import { FileText, Check } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animations/variants";

/**
 * DocumentsSidebar
 * -----------------------------------------------------------------------
 * Desktop  : sticky vertical list, scrollable if it overflows.
 * Mobile   : horizontal scrollable row of pill-style chips.
 * Fully keyboard navigable (arrow keys roam the list, Enter/Space select).
 * -----------------------------------------------------------------------
 */
export default function DocumentsSidebar({ documents, selectedId, onSelect }) {
  const itemRefs = useRef([]);

  const handleKeyDown = (event, index) => {
    const isHorizontalKey = event.key === "ArrowRight" || event.key === "ArrowLeft";
    const isVerticalKey = event.key === "ArrowDown" || event.key === "ArrowUp";

    if (!isHorizontalKey && !isVerticalKey) return;

    event.preventDefault();
    const forward = event.key === "ArrowRight" || event.key === "ArrowDown";
    const nextIndex = forward
      ? Math.min(index + 1, documents.length - 1)
      : Math.max(index - 1, 0);

    itemRefs.current[nextIndex]?.focus();
  };

  return (
    <nav
      aria-label="Document list"
      className="
        w-full lg:w-80 lg:flex-shrink-0
        lg:sticky lg:top-24 lg:self-start
      "
    >
      <motion.ul
        role="listbox"
        aria-label="Available documents"
        variants={staggerContainer(0.04, 0.05)}
        initial="hidden"
        animate="visible"
        className="
          flex flex-row lg:flex-col gap-2.5
          overflow-x-auto lg:overflow-x-hidden lg:overflow-y-auto
          lg:max-h-[calc(100vh-8rem)]
          px-4 py-3 lg:p-3
          -mx-4 lg:mx-0
          rounded-none lg:rounded-2xl
          bg-transparent lg:bg-white dark:lg:bg-slate-900
          lg:border lg:border-slate-200 dark:lg:border-slate-800
          lg:shadow-sm
          scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700 scrollbar-track-transparent
        "
      >
        {documents.map((doc, index) => {
          const isActive = doc.id === selectedId;
          return (
            <motion.li
              key={doc.id}
              variants={fadeUp}
              role="option"
              aria-selected={isActive}
              className="flex-shrink-0 lg:flex-shrink lg:w-full"
            >
              <button
                ref={(el) => (itemRefs.current[index] = el)}
                type="button"
                onClick={() => onSelect(doc)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-current={isActive ? "true" : undefined}
                className={[
                  "group relative flex items-center gap-3 w-full text-left",
                  "rounded-xl border transition-all duration-200 ease-out",
                  "px-3.5 py-3 lg:px-3.5 lg:py-3",
                  "whitespace-nowrap lg:whitespace-normal",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2",
                  isActive
                    ? "bg-orange-50 border-orange-500 shadow-sm dark:bg-orange-500/10"
                    : "bg-white lg:bg-transparent border-slate-200 lg:border-transparent hover:bg-slate-50 hover:border-slate-300 dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:border-slate-700",
                ].join(" ")}
              >
                {/* Active accent bar (desktop only) */}
                <span
                  aria-hidden="true"
                  className={[
                    "hidden lg:block absolute left-0 top-2 bottom-2 w-1 rounded-full transition-colors",
                    isActive ? "bg-orange-500" : "bg-transparent",
                  ].join(" ")}
                />

                <span
                  className={[
                    "flex items-center justify-center flex-shrink-0",
                    "w-9 h-9 rounded-lg transition-colors",
                    isActive
                      ? "bg-orange-500 text-white"
                      : "bg-slate-100 text-slate-500 group-hover:bg-slate-200",
                  ].join(" ")}
                >
                  <FileText className="w-4.5 h-4.5" strokeWidth={2} />
                </span>

                <span className="flex flex-col min-w-0 lg:flex-1">
                  <span
                    className={[
                      "text-sm font-semibold truncate",
                      isActive ? "text-slate-900 dark:text-white" : "text-slate-800 dark:text-slate-200",
                    ].join(" ")}
                  >
                    {doc.title}
                  </span>
                  {doc.category && (
                    <span className="text-xs text-slate-500 dark:text-slate-400 truncate">
                      {doc.category}
                    </span>
                  )}
                </span>

                {isActive && (
                  <span className="hidden lg:flex flex-shrink-0 text-orange-500">
                    <Check className="w-4 h-4" strokeWidth={2.5} />
                  </span>
                )}
              </button>
            </motion.li>
          );
        })}
      </motion.ul>
    </nav>
  );
}
