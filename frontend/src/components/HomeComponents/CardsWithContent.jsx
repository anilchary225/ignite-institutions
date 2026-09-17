import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollRevealText from "./ScrollRevealText";
import { RouteLink } from "../../router/BrowserRouter";
import { staggerContainer, cardReveal, defaultViewport } from "../../animations/variants";

export function CardWithContent({
  eyebrow,
  title,
  description,
  image,
  link,
  date,
  accentColor = "text-orange-500",
}) {
  return (
    <motion.article
      whileHover={{ y: -6, transition: { duration: 0.28 } }}
      className="group h-full"
    >
      <RouteLink to={link} className="block h-full">
        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 shadow-sm border border-neutral-100 dark:border-neutral-700">
          <div className="aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-700">
            {image ? (
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.05]"
              />
            ) : null}
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <p className={`text-xs font-semibold uppercase tracking-widest ${accentColor}`}>{eyebrow}</p>

          <h3 className="text-base font-bold leading-snug text-neutral-900 dark:text-white group-hover:text-orange-500 transition-colors">
            {title}
          </h3>

          {description ? (
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{description}</p>
          ) : null}

          <div className="flex items-center gap-3 pt-1">
            {date ? <span className="text-xs text-neutral-500 dark:text-neutral-400">{date}</span> : null}
            <span className={`ml-auto inline-flex items-center gap-1.5 text-xs font-bold ${accentColor} group-hover:gap-2.5 transition-all`}>
              Open <ArrowRight size={14} />
            </span>
          </div>
        </div>
      </RouteLink>
    </motion.article>
  );
}

export default function CardsWithContent({ cards = [] }) {
  const fallbackCards = [
    {
      eyebrow: "Junior College",
      title: "MPC – IIT Coaching & BiPC – NEET Coaching: Ignite Junior College's Flagship Programs",
      date: "Admissions Open",
      image: "/assets/images/home_junior_college.webp",
      accentColor: "text-orange-500",
      link : "/streams/junior-college"
    },
    {
      eyebrow: "School",
      title: "Building Strong Academic Foundations at Ignite: A Head Start Before Junior College",
      date: "Admissions Open",
      image: "/assets/images/events/Classrooms/DSC00003.webp",
      accentColor: "text-blue-500",
      link : "/streams/school"
    },
    {
      eyebrow: "Test Prep",
      title: "IIT JEE, NEET, EAPCET & BITSAT Coaching at Ignite: Long Term, Short Term & Foundation Batches",
      date: "Enroll Now",
      image: "/assets/images/home_test_prep.webp",
      accentColor: "text-green-700",
      link : "/streams/test-prep"
    },
  ];

  const items = cards.length > 0 ? cards : fallbackCards;

  return (
    <div>
      <div className="text-center mb-8">
        <span className="inline-block text-xs tracking-[0.25em] text-blue-500 uppercase mb-2">
          <ScrollRevealText text="Our Programs" className="inline-block" />
        </span>
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white sm:text-3xl">
          <ScrollRevealText as="span" text="What We Offer" className="inline-block" />
        </h2>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        className="grid grid-cols-1 gap-6 sm:grid-cols-3"
      >
        {items.map((card) => (
          <motion.div key={card.title} variants={cardReveal}>
            <CardWithContent {...card} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
