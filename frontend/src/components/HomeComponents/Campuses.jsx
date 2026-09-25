import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import { fadeUp, defaultViewport } from "../../animations/variants";

export const campusData = {
  Colleges: [
    {
      name: "Aditya Campus",
      location: "Kukatpally, Hyderabad",
      tag: "College",
      image: "/assets/images/college campuses/Aditya.webp",
    },
    {
      name: "Bharathi Bhavan Campus",
      location: "Kukatpally, Hyderabad",
      tag: "College",
      image: "/assets/images/college campuses/Bharathi_Bhavan_block.webp",
    },
    {
      name: "Newton Campus",
      location: "Kukatpally, Hyderabad",
      tag: "College",
      image: "/assets/images/college campuses/Newton_block.webp",
    },
    {
      name: "Patanjali Campus",
      location: "Kukatpally, Hyderabad",
      tag: "College",
      image: "/assets/images/college campuses/Patanjali_block.webp",
    },
    {
      name: "Saraswathi Campus",
      location: "Kukatpally, Hyderabad",
      tag: "College",
      image: "/assets/images/college campuses/Saraswathi_Block.webp",
    },
    {
      name: "Sindhura Campus",
      location: "Kukatpally, Hyderabad",
      tag: "College",
      image: "/assets/images/college campuses/Sindhura_block.webp",
    },
    {
      name: "Vagdevi Campus",
      location: "Kukatpally, Hyderabad",
      tag: "College",
      image: "/assets/images/college campuses/Vagdevi_block.webp",
    },
    {
      name: "Kalam Campus",
      location: "Kukatpally, Hyderabad",
      tag: "College",
      image: "/assets/images/college campuses/kalam_block.webp",
    },
  ],

  Schools: [
    {
      name: "Ignite High School",
      location: "Kukatpally, Hyderabad",
      tag: "School",
      image: "/assets/images/school campus/Ignite School.webp",
    },
  ],
};

// Stagger container for the branch cards
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

// Individual card entrance animation
const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Campuses() {
  const [activeTab, setActiveTab] = useState("Colleges");

  const tabs = Object.keys(campusData);

  return (
    <section className="px-4 py-14 transition-colors sm:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-8 text-center"
        >
          <span className="mb-2 inline-block text-xs font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Campuses
          </span>

          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">
            Our Branches
          </h2>

          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            Explore Ignite branches across Hyderabad
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="mb-10 flex justify-center gap-2"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-blue-600 text-white shadow-[0_4px_14px_rgba(37,99,235,0.3)]"
                  : "bg-neutral-100 text-neutral-600 hover:bg-blue-50 hover:text-blue-600 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-blue-500/10"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* =====================================================
            CARDS / CAROUSEL COMMENTED OUT
            =====================================================

        <FocusCarousel
          key={activeTab}
          items={campusData[activeTab]}
        />

        ===================================================== */}

        {/* Branch Cards */}
        <motion.div
          key={activeTab}
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-3"
        >
          {campusData[activeTab].map((campus) => (
            <motion.div
              key={campus.name}
              variants={item}
              whileHover={{ y: -3 }}
              className="group flex w-full items-center gap-3 rounded-xl border border-neutral-200 bg-white px-4 py-3.5 shadow-sm transition-all hover:border-blue-200 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-blue-500/30 sm:w-[calc(50%-0.375rem)] lg:w-[calc(33.333%-0.5rem)]"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-400">
                <MapPin size={16} strokeWidth={2.25} />
              </span>

              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-neutral-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {campus.name}
                </p>
                <p className="truncate text-xs text-neutral-500 dark:text-neutral-400">
                  {campus.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}