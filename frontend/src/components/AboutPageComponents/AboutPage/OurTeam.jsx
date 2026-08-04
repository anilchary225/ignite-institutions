export default function OurTeam({
    heading = "Our Team",
    description = "Our administrative wing is the unseen backbone of IGNITE—dedicated faculty who also serve in leadership roles, ensuring seamless academic and institutional support. Coordinators, wardens, and administrators work alongside teachers to maintain our high standards and support student success.",
    photo = "/images/about/team-photo.jpg",
  }) {
    return (
      <section className="bg-neutral-100 px-6 py-16 text-center dark:bg-neutral-950 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-4xl font-black text-emerald-600 sm:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-neutral-700 dark:text-neutral-300">
            {description}
          </p>
  
          <div className="mt-10 rounded-3xl border-8 border-dotted border-orange-400/60 bg-orange-400/20 p-4 sm:p-6">
            <img
              src={photo}
              alt="IGNITE administrative and faculty team"
              className="mx-auto w-full max-w-3xl rounded-2xl border-4 border-white object-cover shadow-lg dark:border-neutral-900"
            />
          </div>
        </div>
      </section>
    );
  }