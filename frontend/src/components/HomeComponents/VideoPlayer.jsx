import React from "react";

export default function VideoPlayer({
  videoId = "n8qo-9nqoGs",
  startSeconds = 23,
  title = "Watch: Life at Ignite",
}) {
  return (
    <section className="bg-neutral-950 px-4 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <span data-aos="fade-up" className="mb-2 inline-block text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
            Campus Tour
          </span>

          <h2 data-aos="fade-up" className="text-2xl font-extrabold text-white sm:text-3xl">
            {title}
          </h2>

          <p data-aos="fade-up" className="mt-2 text-sm text-neutral-400">
            See what a day looks like at IGNITE Junior College
          </p>
        </div>

        {/* linear frame */}
        <div data-aos="fade-up" className="relative rounded-3xl bg-linear-to-br from-orange-500 via-green-500 to-blue-500 p-1 shadow-2xl shadow-orange-500/10">

          <div  className="relative aspect-video overflow-hidden rounded-[calc(1.5rem-2px)] bg-black">

            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}?rel=0&start=${startSeconds}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

          </div>
        </div>
      </div>
    </section>
  );
}