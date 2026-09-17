import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, defaultViewport } from "../../../animations/variants";

export default function VisionMission({
  visionImage = "/assets/images/events/falicitates_with_awards/iphone 2025/Deva Saketh.webp",
  missionImage = "/assets/images/events/Science Lab/DSC00182.webp",
  vision = {
    heading: "Our Vision",
    paragraphs: [
      "Our vision is to nurture well-rounded, confident, compassionate, and responsible individuals who are inspired to discover their strengths and achieve their fullest potential. We are committed to creating a welcoming, joyful, safe, and inclusive learning environment where every child feels valued, respected, and empowered to learn with confidence. Through holistic education, hands-on experiences, strong values, and equal opportunities, we encourage curiosity, creativity, leadership, and lifelong learning while celebrating every achievement, big or small."
    ],
  },
  mission = {
    heading: "Our Mission",
    items: [
      {
        title: "Academic Excellence",
        description:
          "We uphold and strengthen our tradition of excellence by providing meaningful, relevant, and high-quality education in a safe, nurturing, and supportive environment. In an ever-evolving world, we empower our diverse learners with the knowledge, skills, and confidence needed to succeed in their future endeavours. We are committed to fostering academic excellence and inspiring every learner to achieve their full potential."
      },
      {
        title: "Holistic Development",
        description:
          "We focus on character development, creativity, values, and social responsibility while nurturing well-rounded individuals. Every achievement is recognised and celebrated, inspiring our students to grow with pride in themselves, their institution, and the community, becoming responsible and compassionate global citizens."
      }
    ],
  },
}) {
  return (
    <div className="px-4 sm:px-8">
      {/* Vision */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-3">
              Looking Forward
            </span>
            <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
              {vision.heading}
            </h2>
            <div className="mt-2 h-0.5 w-10 bg-orange-500 rounded" />
            <div className="mt-4 space-y-3 text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
              {vision.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="overflow-hidden p-6 flex items-center justify-center"
          >
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              src={visionImage}
              alt="Our vision illustration"
              className="max-h-70 object-contain rounded-2xl shadow-md shadow-neutral-200/50 dark:shadow-none"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 sm:py-16 border-t border-neutral-100 dark:border-neutral-800">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="overflow-hidden rounded-2xl p-6 flex items-center justify-center order-2 md:order-1"
          >
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              src={missionImage}
              alt="Our mission illustration"
              className="max-h-70 object-contain rounded-2xl shadow-md shadow-neutral-200/50 dark:shadow-none"
            />
          </motion.div>

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            className="order-1 md:order-2"
          >
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-blue-500 uppercase mb-3">
              Our Purpose
            </span>
            <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
              {mission.heading}
            </h2>
            <div className="mt-2 h-0.5 w-10 bg-blue-500 rounded" />
            <div className="mt-5 space-y-5">
              {mission.items.map((item, i) => (
                <div key={item.title} className="flex gap-4">
                  <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white text-xs font-bold mt-0.5 ${i === 0 ? "bg-blue-500" : "bg-green-700"}`}>
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

