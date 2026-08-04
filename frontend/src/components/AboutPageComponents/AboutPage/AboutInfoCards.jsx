import { ChevronRight } from "lucide-react";
import { RouteLink } from "../../../router/BrowserRouter";


const defaultCards = [
  {
    category: "About Us",
    title: "Personality Development",
    image: "https://picsum.photos/seed/personality-development/400/300",
    href: "/about/personality-development",
  },
  {
    category: "About Us",
    title: "Days At Ignite",
    image: "https://picsum.photos/seed/days-at-ignite/400/300",
    href: "/about/daya-at-ignite",
  },
  {
    category: "About Us",
    title: "Campus Hostel Facilities",
    image: "https://picsum.photos/seed/campus-hostel-facilities/400/300",
    href: "/about/campus-hostel-facilities",
  },
  {
    category: "About Us",
    title: "Testimonials",
    image: "https://picsum.photos/seed/testimonials/400/300",
    href: "/about/testimonials",
  },
];

export default function AboutInfoCards({ cards = defaultCards }) {
  return (
    <section className="bg-neutral-100 px-6 py-16 dark:bg-neutral-950 sm:px-12">
      <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <article
            key={card.title}
            className="overflow-hidden rounded-lg bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:bg-neutral-900"
          >
            <img
              src={card.image}
              alt={card.title}
              className="h-44 w-full object-cover"
            />

            <div className="p-5">
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {card.category}
              </p>
              <h3 className="mt-2 text-lg font-bold leading-snug text-blue-700 dark:text-blue-400">
                {card.title}
              </h3>

              <RouteLink
                to={card.href}
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:underline dark:text-blue-400"
              >
                Know more
                <ChevronRight size={16} />
              </RouteLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}