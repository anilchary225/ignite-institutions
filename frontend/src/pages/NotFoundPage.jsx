import { motion } from "framer-motion";
import { RouteLink } from "../router/BrowserRouter";
import { staggerContainer, staggerItem, defaultViewport, scaleIn } from "../animations/variants";

export default function NotFoundPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="grid min-h-[65vh] place-items-center px-6 py-24 text-center"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-md"
      >
        <motion.div
          variants={scaleIn}
          className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800"
        >
          <motion.span
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeInOut" }}
            className="text-5xl"
          >
            404
          </motion.span>
        </motion.div>

        <motion.h1
          variants={staggerItem}
          className="text-3xl font-extrabold text-neutral-900 dark:text-white sm:text-4xl"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="mt-3 text-base text-neutral-500 dark:text-neutral-400"
        >
          Oops! The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div variants={staggerItem} className="mt-6">
          <motion.span
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block"
          >
            <RouteLink
              to="/"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              ← Back to Home
            </RouteLink>
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
