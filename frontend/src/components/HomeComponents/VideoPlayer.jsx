import React from "react";
import { motion } from "framer-motion";
import { fadeUp, scaleIn, defaultViewport } from "../../animations/variants";

export default function VideoPlayer({
  videoId = "n8qo-9nqoGs",
  startSeconds = 23,
  title = "Watch: Life at Ignite",
}) {
  return (
    <section className="bg-neutral-950 px-4 py-14 sm:px-8 sm:py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-8 text-center"
        >
          <span className="mb-2 inline-block text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
            Campus Tour
          </span>

          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            {title}
          </h2>

          <p className="mt-2 text-sm text-neutral-400">
            See what a day looks like at IGNITE Junior College
          </p>
        </motion.div>

        {/* linear frame */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="relative rounded-3xl bg-linear-to-br from-orange-500 via-green-500 to-blue-500 p-1 shadow-2xl shadow-orange-500/10"
        >
          <div className="relative aspect-video overflow-hidden rounded-[calc(1.5rem-2px)] bg-black">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&start=${startSeconds}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}