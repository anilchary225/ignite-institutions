import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { RouteLink } from "../../router/BrowserRouter";

const parentStories = [
  {
    name: "C9745",
    role: "Parent",
    batch: "Parent testimonial",
    headline: "A parent’s experience at Ignite.",
    summary: "Hear directly from a parent about their child’s learning journey and experience at Ignite.",
    quote: "A parent shares their experience with Ignite.",
    video: "/assets/videos/testimonial_videos/parent%20testimonial%20videos/C9745-compressed.mp4",
    poster: "/assets/results-gallery-placeholder.png",
    avatar: "https://placehold.co/120x120/f97316/ffffff?text=C9",
  },
  {
    name: "Father of Gyana Sai Srinivas",
    role: "Parent",
    batch: "Parent testimonial",
    headline: "A parent’s experience at Ignite.",
    summary: "Hear directly from a parent about their child’s learning journey and experience at Ignite.",
    quote: "A parent shares their experience with Ignite.",
    video: "/assets/videos/testimonial_videos/parent%20testimonial%20videos/gyana%20sai.mp4",
    poster: "/assets/results-profile-placeholder.png",
    avatar: "https://placehold.co/120x120/16a34a/ffffff?text=GS",
  },
  {
    name: "Jakkani Sudhakar",
    role: "Parent",
    batch: "Father of Vivek, JEE Advanced & EAPCET Ranker",
    headline: "A parent’s experience at Ignite.",
    summary: "Hear directly from a parent about their child’s learning journey and experience at Ignite.",
    quote: "A parent shares their experience with Ignite.",
    video: "/assets/videos/testimonial_videos/parent%20testimonial%20videos/jakkani%20sudhakar.mp4",
    poster: "/assets/results-gallery-placeholder.png",
    avatar: "https://placehold.co/120x120/f97316/ffffff?text=JS",
  },
  ...[
    ["Kamal Bhasha Shaik","Father of Sanjana, MPC 2nd Year", "kamal bhasha shaik parent.mp4", "KB"],
    ["P. Manoj Kumar","Father of P. Shreyas Sai, EAMCET Ranker", "p.manoj kumar parent.mp4", "MK"],
    ["Siddartha","Father of Siddartha IIT-JEE ranker", "siddartha.mp4", "SI"],
    ["Srinivas Rao","Father of Thrivikram,IIT ranker", "srinivas rao parent.mp4", "SR"],
    ["Venkat","", "venkat parent.mp4", "VE"],
  ].map(([name,batch, file, initials]) => ({
    name,
    role: "Parent",
    batch,
    headline: "A parent’s experience at Ignite.",
    summary: "Hear directly from a parent about their child’s learning journey and experience at Ignite.",
    quote: "A parent shares their experience with Ignite.",
    video: `/assets/videos/testimonial_videos/parent%20testimonial%20videos/${encodeURIComponent(file).replace(/%2F/g, "/")}`,
    poster: "/assets/results-gallery-placeholder.png",
    avatar: `https://placehold.co/120x120/f97316/ffffff?text=${initials}`,
  })),
];

const studentStories = [
  {
    name: "Harika",
    role: "Student",
    batch: "Student testimonial",
    headline: "A student’s journey at Ignite.",
    summary: "Hear directly from an Ignite student about learning, preparation, and life on campus.",
    quote: "A student shares their journey with Ignite.",
    video: "/assets/videos/testimonial_videos/student%20testimonial%20videos/Harika%20student.mp4",
    poster: "/assets/results-profile-placeholder.png",
    avatar: "https://placehold.co/120x120/2563eb/ffffff?text=HA",
  },
  {
    name: "K. Raghavendra",
    role: "Student",
    batch: "Student testimonial",
    headline: "A student’s journey at Ignite.",
    summary: "Hear directly from an Ignite student about learning, preparation, and life on campus.",
    quote: "A student shares their journey with Ignite.",
    video: "/assets/videos/testimonial_videos/student%20testimonial%20videos/k.Raghavebdra%20student.mp4",
    poster: "/assets/results-gallery-placeholder.png",
    avatar: "https://placehold.co/120x120/9333ea/ffffff?text=KR",
  },
  {
    name: "Nandhini",
    role: "Student",
    batch: "Student testimonial",
    headline: "A student’s journey at Ignite.",
    summary: "Hear directly from an Ignite student about learning, preparation, and life on campus.",
    quote: "A student shares their journey with Ignite.",
    video: "/assets/videos/testimonial_videos/student%20testimonial%20videos/nandhini%20student.mp4",
    poster: "/assets/results-gallery-placeholder.png",
    avatar: "https://placehold.co/120x120/2563eb/ffffff?text=NA",
  },
];

function StoryPanel({ story, onPrevious, onNext, sectionLabel }) {
  return (
    <div className="rounded-[2rem] bg-white shadow-[0_24px_60px_rgba(15,23,42,0.08)] ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-white/10">
      <div className="grid gap-0 lg:grid-cols-[1.05fr_1fr]">
        <div className="flex min-h-[360px] flex-col justify-between gap-10 p-6 sm:p-8 lg:p-10">
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-neutral-400 dark:text-neutral-500">
              {sectionLabel}
            </p>
            <p className="mt-4 text-xl leading-8 text-neutral-600 dark:text-neutral-300 sm:text-[1.35rem] sm:leading-9">
              Stories from parents and students who found clarity,
              consistency, and momentum at Ignite.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onPrevious}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full bg-neutral-100 text-neutral-700 transition hover:bg-orange-500 hover:text-white dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-orange-500"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={onNext}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full bg-neutral-100 text-neutral-700 transition hover:bg-orange-500 hover:text-white dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-orange-500"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-b-[2rem] rounded-t-[0] bg-neutral-50 p-6 dark:bg-neutral-800 lg:rounded-l-none lg:rounded-r-[2rem] lg:p-8">
          <video
            key={story.video}
            className="mb-6 aspect-video w-full rounded-2xl bg-neutral-950 object-cover shadow-lg"
            controls
            preload="metadata"
            playsInline
          >
            <source src={story.video} type="video/webm" />
            Your browser does not support video playback.
          </video>
          <div className="flex items-start gap-3 text-neutral-300 dark:text-neutral-600">
            <Quote size={30} className="shrink-0" />
          </div>

          <div className="mt-4 max-w-2xl">
            <h2 className="text-3xl font-extrabold leading-[1.08] tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              {story.headline}
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-600 dark:text-neutral-300 sm:text-lg">
              {story.summary}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <img
                src={story.avatar}
                alt={story.name}
                className="h-11 w-11 rounded-full object-cover ring-2 ring-white dark:ring-neutral-900"
              />
              <div>
                <p className="font-semibold text-neutral-900 dark:text-white">
                  {story.name}
                </p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {story.role} · {story.batch}
                </p>
              </div>
            </div>

            <div className="ml-auto inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-orange-600 dark:bg-orange-500/10 dark:text-orange-300">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Featured video testimonial
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoTile({ story }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-neutral-100 transition hover:-translate-y-1 hover:shadow-xl dark:bg-neutral-900 dark:ring-white/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <video
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          controls
          preload="metadata"
          playsInline
          aria-label={`${story.name} testimonial`}
        >
          <source src={story.video} type="video/webm" />
          Your browser does not support video playback.
        </video>
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950/85 via-neutral-950/15 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
          <p className="mt-3 text-sm font-semibold text-white">{story.name}</p>
          <p className="text-xs text-white/70">
            {story.role} · {story.batch}
          </p>
        </div>
      </div>
      {/* <div className="p-5">
        <p className="text-sm font-semibold text-neutral-900 dark:text-white">
          {story.headline}
        </p>
        <p className="mt-2 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
          {story.quote}
        </p>
      </div> */}
    </article>
  );
}

export default function GalleryTestimonials() {
  const [mode, setMode] = useState("parents");
  const [index, setIndex] = useState(0);

  const activeStories = mode === "parents" ? parentStories : studentStories;
  const currentStory = activeStories[index % activeStories.length];

  const move = (direction) => {
    setIndex((current) => (current + direction + activeStories.length) % activeStories.length);
  };

  const switchMode = (nextMode) => {
    setMode(nextMode);
    setIndex(0);
  };

  return (
    <section className="min-h-screen bg-white px-4 py-8 text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-orange-500">
              Gallery Testimonials
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Parent and student video stories.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-300 sm:text-base">
              Featured video testimonials from families and students, laid out as a
              clean story-first gallery section.
            </p>
          </div>

          <div className="inline-flex rounded-full bg-neutral-100 p-1 dark:bg-neutral-900">
            <button
              type="button"
              onClick={() => switchMode("parents")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                mode === "parents"
                  ? "bg-white text-neutral-950 shadow-sm dark:bg-neutral-800 dark:text-white"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
            >
              Parents
            </button>
            <button
              type="button"
              onClick={() => switchMode("students")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                mode === "students"
                  ? "bg-white text-neutral-950 shadow-sm dark:bg-neutral-800 dark:text-white"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
            >
              Students
            </button>
          </div>
        </div>

        <StoryPanel
          story={currentStory}
          sectionLabel={mode === "parents" ? "Parent stories" : "Student stories"}
          onPrevious={() => move(-1)}
          onNext={() => move(1)}
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {activeStories.map((story) => (
            <VideoTile key={story.name} story={story} />
          ))}
        </div>

        <div className="mt-6">
          <RouteLink
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition hover:text-orange-700 dark:text-orange-400"
          >
            Back to gallery
          </RouteLink>
        </div>
      </div>
    </section>
  );
}
