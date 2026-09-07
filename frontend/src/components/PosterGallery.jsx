import { useState } from "react";

const PosterGallery = ({ posters = [] }) => {
  const [selectedPoster, setSelectedPoster] = useState(null);

  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Heading */}
      <div className="my-10 text-center">
        <h2 className="text-3xl font-black tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          Our Achievements
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-neutral-500 dark:text-neutral-400 sm:text-base">
          Celebrating excellence, success, and remarkable milestones achieved
          by our students.
        </p>
      </div>

      {posters.length === 0 ? (
        <div className="py-20 text-center text-neutral-500">
          No posters found
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {posters.map((poster, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedPoster(poster)}
              className="group overflow-hidden rounded-2xl bg-neutral-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-neutral-900"
            >
              <img
                src={poster.file}
                alt={poster.title || `Poster ${index + 1}`}
                className="block w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {selectedPoster && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedPoster(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setSelectedPoster(null)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-bold text-black shadow-lg transition hover:bg-neutral-200"
            aria-label="Close"
          >
            ×
          </button>

          {/* Full image */}
          <img
            src={selectedPoster.file}
            alt={selectedPoster.title || "Poster"}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default PosterGallery;