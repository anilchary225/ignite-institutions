export default function AboutHero({
    title = "About Us",
    campusImage = "/images/about/campus-building.jpg",
    classroomImage = "/images/about/classroom.jpg",
  }) {
    return (
      <section className="relative h-[420px] w-full overflow-hidden sm:h-[520px]">
        {/* Right panel: classroom photo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${classroomImage})` }}
        />
  
        {/* Left panel: campus building photo, clipped diagonally over the classroom photo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${campusImage})`,
            clipPath: "polygon(0 0, 46% 0, 38% 100%, 0 100%)",
          }}
        />
  
        {/* Gradient wash so the title stays legible over either photo */}
        <div
          className="absolute inset-0 bg-linear-to-r from-neutral-900/80 via-neutral-900/30 to-neutral-900/10"
          aria-hidden="true"
        />
  
        <div className="relative flex h-full items-center px-6 sm:px-12">
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
        </div>
      </section>
    );
  }