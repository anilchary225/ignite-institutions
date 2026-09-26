import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { RouteLink } from "../../../router/BrowserRouter";
import { fadeUp, scaleIn, staggerContainer, defaultViewport } from "../../../animations/variants";

const defaultCards = [
  {
    category: "Character",
    title: "Personality Development",
    subtitle: "Confidence, values & resilience",
    image: "/assets/images/events/Yoga/yoga15.webp",
    href: "/about/personality-development",
  },
  {
    category: "Campus Life",
    title: "Extra Curricular Activities",
    subtitle: "Sports, arts & clubs",
    image: "/assets/images/events/sports/sports13.webp",
    href: "/about/daya-at-ignite",
  },
  {
    category: "Facilities",
    title: "Campus Hostel Facilities",
    subtitle: "Safe, comfortable living",
    image: "/assets/images/events/DINNING/MNR09521.webp",
    href: "/about/campus-hostel-facilities",
  },
  {
    category: "Voices",
    title: "Testimonials",
    subtitle: "From students & parents",
    image: "/assets/images/events/falicitates_with_awards/iphone 2025/Neetu Abhishek.webp",
    href: "/about/testimonials",
  },
];

export default function AboutInfoCards({ cards = defaultCards }) {
  return (
    <section className="px-4 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <span className="mb-2 inline-block text-xs font-medium uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Explore More
          </span>
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">
            Life at IGNITE
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={scaleIn}
              whileTap={{ scale: 0.98 }}
            >
              <RouteLink to={card.href} className="group block">
                {/* Image — lifts up on hover */}
                <div className="relative h-64 overflow-hidden rounded-2xl transition-transform duration-300 ease-out group-hover:-translate-y-12">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm">
                    {card.category}
                  </span>
                </div>

                {/* Content — fixed reserved height on every card, only opacity/position animates */}
                <div className="h-14">
                  <div className="flex items-start justify-between gap-2 -translate-y-2 opacity-0 transition-all duration-300 ease-out group-hover:-translate-y-10 group-hover:opacity-100">
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
                        {card.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
                        {card.subtitle}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="mt-0.5 shrink-0 text-neutral-400 transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400"
                    />
                  </div>
                </div>
              </RouteLink>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}