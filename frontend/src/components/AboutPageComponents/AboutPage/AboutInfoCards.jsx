import { ChevronRight } from "lucide-react";
import { RouteLink } from "../../../router/BrowserRouter";

const defaultCards = [
  {
    category: "Character",
    title: "Personality Development",
    image: "https://picsum.photos/seed/personality-development/400/300",
    href: "/about/personality-development",
    accent: "text-orange-600 dark:text-orange-400",
    tagBg: "bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400",
    border: "border-orange-200 dark:border-orange-500/30",
  },
  {
    category: "Campus Life",
    title: "Days At Ignite",
    image: "https://picsum.photos/seed/days-at-ignite/400/300",
    href: "/about/daya-at-ignite",
    accent: "text-blue-600 dark:text-blue-400",
    tagBg: "bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-500/30",
  },
  {
    category: "Facilities",
    title: "Campus Hostel Facilities",
    image: "https://picsum.photos/seed/campus-hostel-facilities/400/300",
    href: "/about/campus-hostel-facilities",
    accent: "text-green-700 dark:text-green-500",
    tagBg: "bg-green-100 dark:bg-green-700/10 text-green-700 dark:text-green-500",
    border: "border-green-200 dark:border-green-700/30",
  },
  {
    category: "Student & Parent Voices",
    title: "Testimonials",
    image: "https://picsum.photos/seed/testimonials/400/300",
    href: "/about/testimonials",
    accent: "text-red-600 dark:text-red-400",
    tagBg: "bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400",
    border: "border-red-200 dark:border-red-500/30",
  },
];

export default function AboutInfoCards({ cards = defaultCards }) {
  return (
    <section className="px-4 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-2">
            Explore More
          </span>
          <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
            Life at IGNITE
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 border ${card.border} shadow-sm transition hover:-translate-y-1 hover:shadow-md`}
            >
              <div className="overflow-hidden h-44">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>

              <div className="p-5">
                <span className={`inline-block text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${card.tagBg}`}>
                  {card.category}
                </span>
                <h3 className={`mt-2 text-base font-bold leading-snug ${card.accent}`}>
                  {card.title}
                </h3>

                <RouteLink
                  to={card.href}
                  className={`mt-4 inline-flex items-center gap-1 text-xs font-semibold ${card.accent} hover:underline`}
                >
                  Explore
                  <ChevronRight size={14} />
                </RouteLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
