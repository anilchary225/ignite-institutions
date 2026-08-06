export default function OurTeam({
    heading = "Our Team",
    description = "Our administrative wing is the unseen backbone of IGNITE—dedicated faculty who also serve in leadership roles, ensuring seamless academic and institutional support. Coordinators, wardens, and administrators work alongside teachers to maintain our high standards and support student success.",
    photo = "/images/about/team-photo.jpg",
  }) {
    return (
      <section className="px-4 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-blue-500 uppercase mb-2">
            The People Behind IGNITE
          </span>
          <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
            {description}
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border-4 border-blue-100 dark:border-blue-500/20 shadow-md">
            <img
              src={photo}
              alt="IGNITE administrative and faculty team"
              className="mx-auto w-full max-w-3xl object-cover"
            />
          </div>
        </div>
      </section>
    );
  }
