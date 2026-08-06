import React, { useState } from "react";
import { Play } from "lucide-react";

export default function VideoPlayer({
  videoId = "n8qo-9nqoGs",
  startSeconds = 23,
  title = "Watch: Life at Ignite",
}) {
  const [playing, setPlaying] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  );

  return (
    <section className="bg-neutral-950 py-14 px-4 sm:px-8 sm:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-orange-400 uppercase mb-2">
            Campus Tour
          </span>
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            See what a day looks like at IGNITE Junior College
          </p>
        </div>

        {/* Gradient glow frame */}
        <div className="relative rounded-3xl p-0.5 bg-gradient-to-br from-orange-500 via-green-500 to-blue-500 shadow-2xl shadow-orange-500/10">
          <div className="relative rounded-[calc(1.5rem-2px)] overflow-hidden bg-black aspect-video">
            {!playing ? (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group absolute inset-0 w-full h-full"
                aria-label="Play video"
              >
                <img
                  src={thumbSrc}
                  alt={title}
                  onError={() =>
                    setThumbSrc(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`)
                  }
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
                {/* Pulsing play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="absolute w-20 h-20 rounded-full bg-orange-500/40 animate-ping" />
                  <span className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-2xl shadow-orange-500/30 transition-transform duration-300 ease-out group-hover:scale-110">
                    <Play size={30} className="text-orange-500 ml-1" fill="currentColor" />
                  </span>
                </div>
              </button>
            ) : (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&start=${startSeconds}&controls=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
