import { GraduationCap, Building2 } from "lucide-react";

const defaultFeatures = [
  {
    icon: GraduationCap,
    heading: "Beyond Academics",
    description:
      "We believe success is not one-dimensional. Alongside academics, our students actively participate in sports, arts, and cultural activities — building leadership, teamwork, and confidence. Our supportive administrative and residential staff ensure that students feel at home, even away from home.",
    image: "/images/about/beyond-academics.jpg",
  },
  {
    icon: Building2,
    heading: "State-of-the-Art Campus",
    description:
      "From modern classrooms to dedicated hostels, IGNITE provides an environment designed for focus, comfort, and growth. With structured micro and macro schedules, our students benefit from discipline as well as flexibility.",
    image: "/images/about/smart-classroom.jpg",
  },
];

export default function CampusFeatures({ features = defaultFeatures }) {
  return (
    <section className="bg-indigo-50 px-6 py-16 dark:bg-neutral-900 sm:px-12">
      <div className="mx-auto max-w-6xl space-y-6">
        {features.map(({ icon: Icon, heading, description, image }) => (
          <div
            key={heading}
            className="grid gap-6 rounded-2xl md:grid-cols-2 md:items-center"
          >
            <div className="flex gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-orange-500 text-white">
                <Icon size={26} />
              </span>
              <div>
                <h3 className="text-xl font-bold text-orange-600">
                  {heading}
                </h3>
                <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                  {description}
                </p>
              </div>
            </div>

            <img
              src={image}
              alt={heading}
              className="w-full rounded-xl object-cover shadow-md"
            />
          </div>
        ))}
      </div>
    </section>
  );
}