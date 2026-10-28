import { useEffect, useRef, useState } from "react";
import { X, Phone, ArrowUpRight } from "lucide-react";
import { RouteLink } from "../../router/BrowserRouter";
import { getEventAlbum } from "../../data/eventGalleryData";

const highlights = [
  { id: "sports-fest-2026", label: "Sports Fest", date: "2026" },
  { id: "sankalpa-2026", label: "Sankalpa", date: "4–5 October 2026", image: "/assets/images/events/sankalpa_2026/sankalpa_2026_02.webp" },
  { id: "investiture-ceremony", label: "Investiture Day", date: "31 August 2026" },
].map((event) => ({ ...getEventAlbum(event.id), ...event }));
const SEEN_KEY = "ignite_recent_events_popup_2026_v1";

export default function RecentEventsPopup() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const dialogRef = useRef(null);
  const event = highlights[selected];

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(SEEN_KEY)) return;
    } catch {
      // The popup still works when browser storage is unavailable.
    }
    const timer = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        // Storage is optional; never block the page on it.
      }
      setOpen(true);
    }, 4000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open || !dialogRef.current) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="recent-event-popup-title"
      aria-describedby="recent-event-popup-description"
      onCancel={() => setOpen(false)}
      onClick={(click) => { if (click.target === click.currentTarget) setOpen(false); }}
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-3xl border-0 bg-white p-0 text-neutral-950 shadow-2xl backdrop:bg-black/65 dark:bg-neutral-950 dark:text-white"
    >
      <div className="relative">
        <button type="button" onClick={() => setOpen(false)} aria-label="Close event highlights" className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-black/70 text-white hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
          <X size={20} aria-hidden="true" />
        </button>
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-52 bg-neutral-100 dark:bg-neutral-900">
            <img src={event.image || event.hero} alt={event.title} width="800" height="600" className="aspect-[4/3] h-full max-h-64 w-full object-cover md:max-h-none" />
            <span className="absolute bottom-4 left-4 rounded-full bg-black/75 px-3 py-1.5 text-xs font-semibold text-white">{event.date}</span>
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">Life at IGNITE</p>
            <h2 id="recent-event-popup-title" className="mt-2 text-2xl font-bold">Recent Event Highlights</h2>
            <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Choose an event">
              {highlights.map((highlight, index) => (
                <button key={highlight.id} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)} className={`rounded-full px-3 py-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${selected === index ? "bg-blue-700 text-white hover:bg-blue-800 dark:hover:bg-blue-600" : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:hover:text-white"}`}>
                  {highlight.label}
                </button>
              ))}
            </div>
            <div className="mt-5" aria-live="polite" aria-atomic="true">
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p id="recent-event-popup-description" className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{event.description}</p>
            </div>
            <RouteLink to={`/gallery/events/${event.id}`} onClick={() => setOpen(false)} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:underline dark:text-blue-300">Explore the album <ArrowUpRight size={16} aria-hidden="true" /></RouteLink>
            <div className="mt-6 border-t border-neutral-200 pt-5 dark:border-neutral-800">
              <p className="mb-3 text-sm text-neutral-600 dark:text-neutral-300">Interested in joining IGNITE? Connect with our admissions team.</p>
              <div className="flex flex-wrap gap-3">
                <RouteLink to="/contact" onClick={() => setOpen(false)} className="rounded-xl bg-blue-700 px-4 py-3 text-sm font-bold text-white hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">Admission Enquiry</RouteLink>
                <a href="tel:+917036511111" onClick={() => setOpen(false)} className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-4 py-3 text-sm font-semibold hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"><Phone size={16} aria-hidden="true" /> Call Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
