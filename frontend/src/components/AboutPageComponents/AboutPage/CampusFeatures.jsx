import { GraduationCap, Building2 } from "lucide-react";

const defaultFeatures = [
  {
    icon: GraduationCap,
    color: "bg-orange-500",
    textColor: "text-orange-600",
    heading: "Beyond Academics",
    description:
      "We believe success is not one-dimensional. Alongside academics, our students actively participate in sports, arts, and cultural activities - building leadership, teamwork, and confidence. Our supportive residential staff ensure students feel at home, even away from home.",
    image: "/assets/images/events/sports/sports8.webp",
  },
  {
    icon: Building2,
    color: "bg-green-700",
    textColor: "text-green-700",
    heading: "State-of-the-Art Campus",
    description:
      "From modern classrooms to dedicated hostels, IGNITE provides an environment designed for focus, comfort, and growth. With structured micro and macro schedules, students benefit from discipline as well as flexibility.",
    image: "/assets/images/events/ganesh festival/WhatsApp Image 2026-03-26 at 5.18.03 PM.webp",
  },
];

export default function CampusFeatures({ features = defaultFeatures }) {
  return (
    <section className="px-4 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <span data-aos="fade-up" className="inline-block text-xs font-bold tracking-[0.25em] text-green-700 uppercase mb-2">
            Campus Life
          </span>
          <h2 data-aos="fade-up" className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
            Life at IGNITE
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {features.map(({ icon: Icon, color, textColor, heading, description, image }, idx) => (
            <div
              data-aos="fade-up"
              key={heading}
              className={`grid gap-6 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 overflow-hidden  md:grid-cols-2 md:items-stretch ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${color} text-white`}>
                    <Icon size={20} />
                  </span>
                  <h3 className={`text-lg font-bold ${textColor} dark:text-white`}>
                    {heading}
                  </h3>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {description}
                </p>
              </div>

              <div data-aos="fade-up" className="overflow-hidden min-h-48 md:min-h-0">
                <img
                  src={image}
                  alt={heading}
                  className="w-full h-70 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
