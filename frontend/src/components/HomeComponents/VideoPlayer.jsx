import React, { useState } from "react";
import { Play } from "lucide-react";

/**
 * VideoPlayer — click-to-play YouTube embed with a custom UI.
 * Shows the YouTube thumbnail with a pulsing play button until clicked,
 * then swaps in the actual embedded player (better performance than
 * loading the iframe upfront, plus a nicer look than YouTube's default UI).
 */
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
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Gradient glow frame — background instead of border-image so radius applies cleanly */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-br from-emerald-500 via-orange-400 to-emerald-500 shadow-2xl shadow-emerald-500/20">
          <div className="relative rounded-[calc(1.5rem-4px)] overflow-hidden bg-black aspect-video">
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
                    setThumbSrc(
                      `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
                    )
                  }
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
                {/* Pulsing play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="absolute w-20 h-20 rounded-full bg-white/30 animate-ping" />
                  <span className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-xl transition-transform duration-300 ease-out group-hover:scale-110">
                    <Play size={30} className="text-slate-900 ml-1" fill="currentColor" />
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