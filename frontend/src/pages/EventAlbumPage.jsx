import { RouteLink, useParams, Navigate } from "../router/BrowserRouter";
import { ArrowLeft, Camera, Play } from "lucide-react";
import { getEventAlbum } from "../data/galleryMedia";

export default function EventAlbumPage() {
  const { eventId } = useParams();
  const event = getEventAlbum(eventId);

  if (!event) return <Navigate to="/gallery/events" replace />;

  return (
    <div className="min-h-screen bg-white text-neutral-950 dark:bg-neutral-950 dark:text-white">
      <section className="px-4 pb-10 pt-10 sm:px-6 sm:pt-14">
        <div className="mx-auto max-w-7xl">
          <RouteLink to="/gallery/events" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 dark:text-blue-400">
            <ArrowLeft size={14} /> Back to Events
          </RouteLink>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">Event Album</p>
              <h1 className="mt-2 text-3xl font-extrabold sm:text-5xl">{event.title}</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-400">{event.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <RouteLink to={`/gallery/photos/${eventId}`} className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-bold text-white">
                  <Camera size={14} /> View Photos
                </RouteLink>
                <RouteLink to="/gallery/videos" className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm font-bold text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300">
                  <Play size={14} /> More Videos
                </RouteLink>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-900">
              <img src={event.hero} alt={event.title} className="h-72 w-full object-cover sm:h-96" />
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {event.photos.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900">
                <img src={src} alt={`${event.title} ${index + 1}`} loading="lazy" decoding="async" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          {event.videoClips?.length > 0 && (
            <section className="mt-10" aria-labelledby="event-video-heading">
              <h2 id="event-video-heading" className="text-2xl font-extrabold">{event.title} videos</h2>
              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                {event.videoClips.map((clip) => (
                  <figure key={clip.src}>
                    <video src={clip.src} controls playsInline preload="none" poster={event.hero} aria-label={clip.title} className="aspect-video w-full rounded-2xl bg-black object-contain" />
                    <figcaption className="mt-2 text-sm font-semibold">{clip.title}</figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}
          {event.videos?.length > 0 && <div className="mt-10 rounded-3xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/60">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">Related videos</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {event.videos.map((title) => (
                <RouteLink key={title} to="/gallery/videos" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-neutral-700 ring-1 ring-neutral-200 dark:bg-neutral-950 dark:text-neutral-300 dark:ring-neutral-800">
                  {title}
                </RouteLink>
              ))}
            </div>
          </div>}
        </div>
      </section>
    </div>
  );
}
