import { ArrowRight } from "lucide-react";

export function CardWithContent({
  eyebrow,
  title,
  description,
  image,
  href = "#",
  date,
}) {
  return (
    <article className="group">
      <a href={href} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)]">
          <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
            {image ? (
              <img
                src={image}
                alt=""
                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
              />
            ) : null}
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <p className="text-[15px] font-medium text-slate-500">{eyebrow}</p>

          <h3 className="text-[26px] font-semibold leading-[1.15] text-slate-800 transition-colors duration-300 group-hover:text-slate-950 sm:text-[30px]">
            {title}
          </h3>

          {description ? (
            <p className="max-w-[52ch] text-[16px] leading-[1.65] text-slate-600">
              {description}
            </p>
          ) : null}

          <div className="flex items-center gap-3 text-slate-600">
            {date ? <span className="text-[14px]">{date}</span> : null}
            <span className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-slate-800">
              Open <ArrowRight size={18} />
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
      title:
        "MPC - IIT Coaching & BiPC - NEET Coaching: Ignite Junior College's Flagship Programs",
      date: "Admissions Open",
      image: "/card-art/card-1.svg",
    },
    {
      eyebrow: "School",
      title:
        "Building Strong Academic Foundations at Ignite: A Head Start Before Junior College",
      date: "Admissions Open",
      image: "/card-art/card-2.svg",
    },
    {
      eyebrow: "Test Prep",
      title:
        "IIT JEE, NEET, EAPCET & BITSAT Coaching at Ignite: Long Term, Short Term & Foundation Batches",
      date: "Enroll Now",
      image: "/card-art/card-3.svg",
    },
  ];

  const items = cards.length > 0 ? cards : fallbackCards;

  return (
    <section className="flex gap-8 overflow-x-auto pb-2 mx-auto">
      {items.map((card) => (
        <div key={card.title} className="min-w-[320px] max-w-[420px] flex-1 justify-center items-center">
          <CardWithContent {...card} />
        </div>
      ))}
    </section>
  );
}
