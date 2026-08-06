import { ArrowRight } from "lucide-react";

export function CardWithContent({
  eyebrow,
  title,
  description,
  image,
  href = "#",
  date,
  accentColor = "text-orange-500",
}) {
  return (
    <article className="group">
      <a href={href} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 shadow-sm border border-neutral-100 dark:border-neutral-700">
          <div className="aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-700">
            {image ? (
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.04]"
              />
            ) : null}
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <p className={`text-xs font-bold uppercase tracking-widest ${accentColor}`}>{eyebrow}</p>

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
      </a>
    </article>
  );
}

export default function CardsWithContent({ cards = [] }) {
  const fallbackCards = [
    {
      eyebrow: "Junior College",
      title: "MPC – IIT Coaching & BiPC – NEET Coaching: Ignite Junior College's Flagship Programs",
      date: "Admissions Open",
      image: "/card-art/card-1.svg",
      accentColor: "text-orange-500",
    },
    {
      eyebrow: "School",
      title: "Building Strong Academic Foundations at Ignite: A Head Start Before Junior College",
      date: "Admissions Open",
      image: "/card-art/card-2.svg",
      accentColor: "text-blue-500",
    },
    {
      eyebrow: "Test Prep",
      title: "IIT JEE, NEET, EAPCET & BITSAT Coaching at Ignite: Long Term, Short Term & Foundation Batches",
      date: "Enroll Now",
      image: "/card-art/card-3.svg",
      accentColor: "text-green-700",
    },
  ];

  const items = cards.length > 0 ? cards : fallbackCards;

  return (
    <div>
      <div className="text-center mb-8">
        <span className="inline-block text-xs font-bold tracking-[0.25em] text-blue-500 uppercase mb-2">
          Our Programs
        </span>
        <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
          What We Offer
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {items.map((card) => (
          <div key={card.title}>
            <CardWithContent {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}
