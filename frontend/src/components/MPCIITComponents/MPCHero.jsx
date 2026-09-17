import { motion } from "framer-motion";
import { ArrowRight, BookOpen, FlaskConical, Atom } from "lucide-react";
import { fadeUp, staggerContainer, staggerItem, defaultViewport } from "../../animations/variants";

export default function MPCHero() {
  return (
    <section className="overflow-hidden bg-white px-6 py-16 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT - content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 dark:bg-blue-950/40">
              <Atom size={14} className="text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-black uppercase tracking-widest text-blue-700 dark:text-blue-400">
                MPC · IIT JEE Coaching
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="mt-5 text-4xl font-extrabold leading-tight text-neutral-950 sm:text-5xl dark:text-white">
              Crack IIT JEE.{" "}
              <span className="text-blue-600 dark:text-blue-400">Excel in Boards.</span>{" "}
              Do both.
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 text-base leading-7 text-neutral-600 dark:text-neutral-400">
              Ignite's MPC programme is Hyderabad's most trusted integrated coaching
              track - Maths, Physics & Chemistry taught for both Intermediate
              board excellence and IIT JEE Main & Advanced, under one roof.
            </motion.p>

            {/* subject pills */}
            <motion.div variants={staggerContainer} className="mt-6 flex flex-wrap gap-3">
              {[
                { icon: Atom, label: "Mathematics" },
                { icon: FlaskConical, label: "Physics" },
                { icon: BookOpen, label: "Chemistry" },
              ].map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  whileHover={{ y: -3, scale: 1.03 }}
                  className="flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-300"
                >
                  <Icon size={14} /> {label}
                </motion.div>
              ))}
            </motion.div>

            {/* key facts */}
            <motion.div variants={staggerContainer} className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { value: "2 Years", label: "Integrated Programme" },
                { value: "Class 11–12", label: "Intermediate + JEE" },
                { value: "≤ 30", label: "Students per batch" },
              ].map(({ value, label }) => (
                <motion.div
                  key={label}
                  variants={staggerItem}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-neutral-50 px-4 py-4 dark:bg-neutral-900"
                >
                  <p className="text-xl font-black text-blue-700 dark:text-blue-400">{value}</p>
                  <p className="mt-0.5 text-xs font-semibold text-neutral-500">{label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-black text-white transition hover:bg-blue-700 shadow-md"
              >
                Apply Now <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#standout"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-6 py-3.5 text-sm font-bold text-neutral-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300"
              >
                View Programme Details
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT - image with apply CTA */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.7 }}
            className="relative flex flex-col justify-between"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-xl group">
              <img
                src="/assets/images/events/Classrooms/DSC00004.webp"
                alt="MPC IIT Classroom at Ignite"
                className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* overlay linear */}
              <div className="absolute inset-0 bg-linear-to-t from-blue-900/70 via-transparent to-transparent" />
            </div>

            {/* floating badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={defaultViewport}
              transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.2 }}
              className="absolute -right-4 -top-4 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-amber-400 shadow-lg"
            >
              <p className="text-lg font-black text-white leading-none">500+</p>
              <p className="text-[9px] font-bold text-white/90 text-center leading-tight">IIT Selections</p>
            </motion.div>

            <div className="mt-4 rounded-2xl bg-white/90 p-5 backdrop-blur-sm dark:bg-neutral-900/90 shadow-md ring-1 ring-neutral-200 dark:ring-neutral-800">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                Admissions Open · 2025–26
              </p>
              <p className="mt-1 text-lg font-extrabold text-neutral-950 dark:text-white">
                MPC - IIT JEE Integrated Batch
              </p>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                Limited seats. Hostel facility available.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-black text-white transition hover:bg-blue-700"
              >
                Apply for Admission <ArrowRight size={14} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
