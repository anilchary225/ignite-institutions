export default function VisionMission({
    visionImage = "/images/about/vision-illustration.png",
    missionImage = "/images/about/mission-illustration.png",
    vision = {
      heading: "Our Vision",
      paragraphs: [
        "We understand that parents, each with their own financial and social journey, prioritize superior education for their children. We aim to be that bridge between secondary schooling and professional success.",
        "At IGNITE, we envision a learning environment that nurtures both intellect and character, propelling students toward not just academic accomplishment, but lifelong wisdom.",
      ],
    },
    mission = {
      heading: "Our Mission",
      items: [
        {
          title: "Academic Excellence",
          description:
            "Through targeted programs designed for both board and competitive exam preparation—especially JEE (Main & Advanced) and NEET—we coach students to face challenges with confidence.",
        },
        {
          title: "Holistic Development",
          description:
            "We believe in nurturing well-rounded individuals. Alongside rigorous academics, we encourage participation in sports, arts, music, and other co-curricular activities.",
        },
      ],
    },
  }) {
    return (
      <div className="px-4 sm:px-8">
        {/* Vision */}
        <section className="py-14 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
            <div>
              <span className="inline-block text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-3">
                Looking Forward
              </span>
              <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
                {vision.heading}
              </h2>
              <div className="mt-2 h-0.5 w-10 bg-orange-500 rounded" />
              <div className="mt-4 space-y-3 text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                {vision.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-orange-100 dark:bg-orange-500/10 p-6 flex items-center justify-center min-h-48">
              <img
                src={visionImage}
                alt="Our vision illustration"
                className="w-full max-h-52 object-contain"
              />
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-14 sm:py-16 border-t border-neutral-100 dark:border-neutral-800">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
            <div className="overflow-hidden rounded-2xl bg-blue-100 dark:bg-blue-500/10 p-6 flex items-center justify-center min-h-48 order-2 md:order-1">
              <img
                src={missionImage}
                alt="Our mission illustration"
                className="w-full max-h-52 object-contain"
              />
            </div>

            <div className="order-1 md:order-2">
              <span className="inline-block text-xs font-bold tracking-[0.25em] text-blue-500 uppercase mb-3">
                Our Purpose
              </span>
              <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
                {mission.heading}
              </h2>
              <div className="mt-2 h-0.5 w-10 bg-blue-500 rounded" />
              <div className="mt-5 space-y-5">
                {mission.items.map((item, i) => (
                  <div key={item.title} className="flex gap-4">
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white text-xs font-bold mt-0.5 ${i === 0 ? "bg-blue-500" : "bg-green-700"}`}>
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
