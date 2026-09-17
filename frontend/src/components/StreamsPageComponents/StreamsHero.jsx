import { motion } from "framer-motion";
import { RouteLink } from "../../router/BrowserRouter";
import { staggerContainer, staggerItem, defaultViewport, fadeUp, cardReveal } from "../../animations/variants";

export default function StreamsHero() {
  const links = [
    { label: "Junior College (Inter)", href: "streams/junior-college", color: "orange" },
    { label: "School (Nursery–10)", href: "/streams/school", color: "blue" },
    { label: "Test Prep", href: "/streams/test-prep", color: "green" },
  ];

  return (
    <section className="relative overflow-hidden bg-white px-6 pb-0 pt-20 dark:bg-neutral-950">
      {/* background accent blobs */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-100 blur-3xl dark:bg-orange-950/30" />
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-50 blur-2xl dark:bg-blue-950/20" />

      <div className="relative mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500 dark:text-orange-400"
        >
          Ignite - Programs & Streams
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-neutral-950 sm:text-5xl dark:text-white"
        >
          Every learner has a path.{" "}
          <span className="text-orange-500 dark:text-orange-400">
            We build the right one.
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
          className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-400"
        >
          From nursery to competitive exam success - Ignite offers structured
          academic journeys for school students, junior college aspirants, and
          serious entrance exam candidates.
        </motion.p>

        {/* stream tabs / quick links */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap gap-3"
        >
          {links.map(({ label, href, color }) => (
            <motion.div key={href} variants={staggerItem}>
              <RouteLink
                to={href}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition
                  ${
                    color === "orange"
                      ? "border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-500 hover:text-white dark:border-orange-800 dark:bg-orange-950/30 dark:text-orange-300 dark:hover:bg-orange-500 dark:hover:text-white"
                      : color === "blue"
                      ? "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-500 hover:text-white dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-300 dark:hover:bg-blue-500 dark:hover:text-white"
                      : "border-green-200 bg-green-50 text-green-700 hover:bg-green-700 hover:text-white dark:border-green-800 dark:bg-green-950/30 dark:text-green-300 dark:hover:bg-green-700 dark:hover:text-white"
                  }`}
              >
                {label}
              </RouteLink>
            </motion.div>
          ))}
        </motion.div>

        {/* divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
          className="mt-12 h-px w-full bg-neutral-100 dark:bg-neutral-800"
        />
      </div>
    </section>
  );
}
