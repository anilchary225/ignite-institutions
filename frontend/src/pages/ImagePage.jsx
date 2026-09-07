import { useEffect, useState } from "react";
import { RouteLink, useParams, Navigate } from "../router/BrowserRouter";
import { ArrowLeft, ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { getEventAlbum } from "../data/eventGalleryData";

function sizeClass(size) {
  if (size === "large") return "sm:col-span-2 sm:row-span-2 aspect-[4/5]";
  if (size === "wide") return "sm:col-span-2 aspect-[16/10]";
  if (size === "medium") return "aspect-[4/5]";
  return "aspect-[1/1]";
}

function Lightbox({ photos, index, title, onClose, onNext, onPrevious }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNext();
      if (event.key === "ArrowLeft") onPrevious();
    }
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrevious]);

  const src = photos[index];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-950/95 p-4 backdrop-blur-sm">
      <button
        type="button"
        onClick={onClose}
        aria-label="Close photo viewer"
        className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-neutral-950"
      >
        <X size={20} />
      </button>
      <button
        type="button"
        onClick={onPrevious}
        aria-label="Previous photo"
        className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-neutral-950 sm:left-8"
      >
        <ChevronLeft size={22} />
      </button>
      <div className="max-h-[90vh] max-w-5xl">
        <img
          src={src}
          alt={`${title} ${index + 1}`}
          className="max-h-[80vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
        />
        <p className="mt-4 text-center text-sm font-bold text-white/70">
          {index + 1} / {photos.length}
        </p>
      </div>
      <button
        type="button"
        onClick={onNext}
        aria-label="Next photo"
        className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white hover:text-neutral-950 sm:right-8"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}

export default function ImagePage() {
  const { albumId } = useParams();
  const album = getEventAlbum(albumId);
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!album) return <Navigate to="/gallery/photos" replace />;

  function showNext() {
    setSelectedIndex((prev) => (prev + 1) % album.photos.length);
  }

  function showPrevious() {
    setSelectedIndex((prev) => (prev - 1 + album.photos.length) % album.photos.length);
  }

  return (
    <div className="min-h-screen pt-16 bg-white text-neutral-950 dark:bg-neutral-950 dark:text-white">
      <section className="px-4 pb-10 pt-10 sm:px-6 sm:pt-14">
        <div className="mx-auto max-w-7xl">
          <RouteLink to="/gallery/photos" className="inline-flex items-center gap-2 text-sm font-bold text-green-700 dark:text-green-400">
            <ArrowLeft size={14} /> Back to Photos
          </RouteLink>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-green-700 dark:text-green-400">Event Album</p>
              <h1 className="mt-2 text-3xl font-extrabold sm:text-5xl">{album.title}</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-400">{album.description}</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-green-700 dark:bg-green-950/40 dark:text-green-300">
              <Images size={14} /> {album.photos.length} images
            </div>
          </div>
          <div className="mt-8 grid auto-rows-[180px] gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {album.photos.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group overflow-hidden rounded-2xl bg-neutral-100 text-left dark:bg-neutral-900"
              >
                <img
                  src={src}
                  alt={`${album.title} ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>
      {selectedIndex !== null ? (
        <Lightbox
          photos={album.photos}
          index={selectedIndex}
          title={album.title}
          onClose={() => setSelectedIndex(null)}
          onNext={showNext}
          onPrevious={showPrevious}
        />
      ) : null}
    </div>
  );
}