import { useEffect, useState } from "react";
import { RouteLink } from "../router/BrowserRouter";
import { ArrowLeft, Play, X } from "lucide-react";

const allVideos = [
  { id: "celebrations", title: "Celebrating Together at Ignite", src: "/assets/videos/CELEBRATIONS VID.webm" },
  { id: "community", title: "Ignite Community Outreach Initiatives", src: "/assets/videos/COMMUNITY REACH PROGRAMS BY IGNITE.webm" },
  { id: "mango", title: "Mango Distribution Drive", src: "/assets/videos/DVR sirMangoDistribution.webm" },
  { id: "events", title: "Memorable Events at Ignite", src: "/assets/videos/EVENTS @ IGNITE.webm" },
  { id: "facilities", title: "Discover Our Facilities", src: "/assets/videos/FACILITIES VID.webm" },
  { id: "formation", title: "Ignite Formation Day Celebration", src: "/assets/videos/FORMATION DAY VID.webm" },
  { id: "july", title: "Highlights from July Events", src: "/assets/videos/JULY EVENTS VIDEO.webm" },
  { id: "sports", title: "Sports Moments & Memories", src: "/assets/videos/madam's sports video.webm" },
  { id: "swachh-run", title: "Swachh Run – Run for a Cleaner Tomorrow", src: "/assets/videos/swatchrunvideo.webm" },
  { id: "miyapur-1", title: "Miyapur Run – A Step Towards Change", src: "/assets/videos/miyapur_run1.webm" },
  { id: "miyapur-2", title: "Miyapur Run – Community in Motion", src: "/assets/videos/miyapur_run2.webm" },
  { id: "miyapur-3", title: "Miyapur Run – Together We Run", src: "/assets/videos/miyapur_run3.webm" },
  { id: "plantation-1", title: "Plantation Drive – Growing a Greener Future", src: "/assets/videos/palntationrun1.webm" },
  { id: "plantation-2", title: "Plantation Drive – Planting Hope", src: "/assets/videos/palntationrun2.webm" },
  { id: "plantation-3", title: "Plantation Drive – Nurturing Nature", src: "/assets/videos/palntationrun3.webm" },
  { id: "plantation-4", title: "Plantation Drive – Greener Communities", src: "/assets/videos/palntationrun4.webm" },
  { id: "plantation-5", title: "Plantation Drive – Making a Difference", src: "/assets/videos/palntationrun5.webm" },
  { id: "plantation-6", title: "Plantation Drive – Every Tree Matters", src: "/assets/videos/platationrun6.webm" },
  { id: "plantation-7", title: "Plantation Drive – United for Nature", src: "/assets/videos/plantation7.webm" },
  { id: "plantation-8", title: "Plantation Drive – Creating a Greener Tomorrow", src: "/assets/videos/palntationrun8.webm" },
  { id: "plantation-9", title: "Plantation Drive – Our Green Initiative", src: "/assets/videos/palntationrun9.webm" },
];

function VideoModal({ video, onClose }) {
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-150 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-neutral-950 shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white backdrop-blur-sm transition hover:bg-white hover:text-neutral-950"
          aria-label="Close video"
        >
          <X size={16} />
        </button>
        <div className="aspect-video w-full bg-black">
          <video src={video.src} className="h-full w-full object-contain" controls autoPlay playsInline preload="auto" />
        </div>
        <div className="p-5 text-white">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">Video Preview</p>
          <h3 className="mt-2 text-xl font-extrabold">{video.title}</h3>
        </div>
      </div>
    </div>
  );
}

function VideoCard({ video, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(video)}
      className="group overflow-hidden rounded-2xl bg-neutral-900 text-left shadow-sm ring-1 ring-neutral-800 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-video">
        <video
          src={video.src}
          className="h-full w-full object-cover"
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-white/20 text-white backdrop-blur-md transition group-hover:scale-110">
            <Play size={16} fill="white" className="translate-x-0.5" />
          </div>
        </div>
      </div>
      <div className="p-4 text-white">
        <p className="text-sm font-extrabold leading-snug">{video.title}</p>
      </div>
    </button>
  );
}

export default function VideoPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="min-h-screen pt-16 bg-white text-neutral-950 dark:bg-neutral-950 dark:text-white">
      <section className="px-4 pb-10 pt-10 sm:px-6 sm:pt-14">
        <div className="mx-auto max-w-7xl">
          <RouteLink to="/gallery/videos" className="inline-flex items-center gap-2 text-sm font-bold text-orange-700 dark:text-orange-400">
            <ArrowLeft size={14} /> Back to Videos
          </RouteLink>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-700 dark:text-orange-400">All Videos</p>
              <h1 className="mt-2 text-3xl font-extrabold sm:text-5xl">Video Library</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-400">
                Click any video to open it in a lightbox and play with controls.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-bold text-orange-700 dark:bg-orange-950/40 dark:text-orange-300">
              <Play size={14} /> {allVideos.length} videos
            </div>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allVideos.map((video) => (
              <VideoCard key={video.id} video={video} onOpen={setSelectedVideo} />
            ))}
          </div>
        </div>
      </section>

      {selectedVideo && <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />}
    </div>
  );
}
