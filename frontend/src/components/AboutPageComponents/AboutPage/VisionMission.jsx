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
          title: "1. Academic Excellence",
          description:
            "Through targeted programs designed for both board and competitive exam preparation—especially JEE (Main & Advanced) and NEET—we coach students to face challenges with confidence, creating not just subject matter experts but top achievers.",
        },
        {
          title: "2. Holistic Development",
          description:
            "We believe in nurturing well-rounded individuals. Alongside rigorous academics, we encourage participation in sports, arts, music, and other co-curricular activities. Our campus life supports personal growth, self-expression, and leadership.",
        },
      ],
    },
  }) {
    return (
      <>
        <section className="bg-white px-6 py-16 dark:bg-neutral-950 sm:px-12">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-emerald-600 sm:text-4xl">
                {vision.heading}
              </h2>
              <div className="mt-4 space-y-4 text-neutral-700 dark:text-neutral-300">
                {vision.paragraphs.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
  
            <img
              src={visionImage}
              alt="Our vision illustration"
              className="w-full rounded-2xl bg-orange-500 object-contain p-6"
            />
          </div>
        </section>
  
        <section className="bg-white px-6 pb-16 dark:bg-neutral-950 sm:px-12">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
            <img
              src={missionImage}
              alt="Our mission illustration"
              className="w-full rounded-2xl bg-orange-500 object-contain p-6"
            />
  
            <div>
              <h2 className="text-3xl font-extrabold text-neutral-950 dark:text-white sm:text-4xl">
                {mission.heading}
              </h2>
              <div className="mt-4 space-y-6">
                {mission.items.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-lg font-bold text-neutral-950 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-neutral-700 dark:text-neutral-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }