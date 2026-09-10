import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { RouteLink } from "../router/BrowserRouter";

const blogs = [
  {
    id: "athlete-mindset",
    category: "Alumni Story",
    title: "The Discipline That Carried Me Through Engineering Entrance Prep",
    summary:
      "An Ignite alumnus shares how a consistent routine, focused revision, and support from mentors helped turn an uncertain start into a strong engineering result.",
    content:
      "The biggest change was not only in scores. It was in how I approached work every day. I learned to treat preparation like training: one focused session at a time, with enough rest, enough repetition, and enough honesty about what I did not know. That shift carried me through the hard phases of exam prep and into a result I could trust.",
    tags: ["Discipline", "Exam Prep", "Alumni"],
  },
  {
    id: "mind-over-marks",
    category: "Student Blog",
    title: "What I Learned After My First Mock Test",
    summary:
      "A current student reflects on the first mock test, the mistakes it exposed, and how quick correction changed the next round of preparation.",
    content:
      "The first mock test was useful because it removed guesswork. It showed me exactly where I was weak and where I was wasting time. After that, I stopped studying by habit and started studying by priority. The result was a better rhythm, less panic, and more actual improvement.",
    tags: ["Mock Test", "Revision", "Learning"],
  },
  {
    id: "campus-to-career",
    category: "Alumni Story",
    title: "From Campus Routine to Career Routine",
    summary:
      "A former student describes how the structure of campus life translated into the discipline needed for professional growth.",
    content:
      "Campus life trained me to respect time, prepare before deadlines, and keep moving even when motivation was low. Those habits became the base for how I work now. The environment did not just prepare me for an exam; it prepared me for consistent performance after the exam too.",
    tags: ["Career", "Routine", "Growth"],
  },
];

function BlogCard({ blog, active, onReadMore }) {
  const contentRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // Step 1: mount the content element as soon as the card becomes active.
  // We do NOT unmount it here on collapse -- that happens after the
  // collapse animation finishes (see the animation effect below).
  useEffect(() => {
    if (active) {
      setIsMounted(true);
    }
  }, [active]);

  // Step 2: once the element actually exists in the DOM (isMounted is
  // true and the ref is attached), run the expand/collapse animation.
  useEffect(() => {
    const element = contentRef.current;
    if (!isMounted || !element) return undefined;

    gsap.killTweensOf(element);

    if (active) {
      gsap.fromTo(
        element,
        { height: 0, opacity: 0, y: -8 },
        {
          height: "auto",
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
          onComplete: () => gsap.set(element, { height: "auto" }),
        }
      );
    } else {
      gsap.to(element, {
        height: 0,
        opacity: 0,
        y: -8,
        duration: 0.28,
        ease: "power2.in",
        onComplete: () => setIsMounted(false),
      });
    }

    return () => gsap.killTweensOf(element);
  }, [active, isMounted]);

  return (
    <article
      className={`overflow-hidden rounded-[1.75rem] border transition ${
        active
          ? "border-sky-300 bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300 text-neutral-950 shadow-[0_18px_50px_rgba(14,165,233,0.18)] dark:border-neutral-700 dark:bg-black dark:text-white"
          : "border-neutral-300 bg-white text-neutral-950 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white"
      }`}>
      <div className="grid gap-0 lg:grid-cols-[320px_1fr]">
        <div className="relative min-h-[220px] bg-gradient-to-br from-sky-300 via-sky-500 to-sky-700 dark:from-neutral-900 dark:via-black dark:to-black">
          <div className="absolute left-4 top-4 rounded-full bg-white/25 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
            {blog.category}
          </div>
          <div className="absolute inset-0 flex items-end p-6">
            <div className="h-28 w-full rounded-[1.25rem] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_40%),radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.18),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
          </div>
        </div>

        <div className="flex flex-col justify-between p-6 sm:p-7">
          <div>
            <h3 className="text-xl font-bold tracking-tight sm:text-2xl">{blog.title}</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
              {blog.summary}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-semibold text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {isMounted ? (
            <div
              ref={contentRef}
              className="mt-5 overflow-hidden rounded-[1.25rem] bg-sky-50 p-4 text-sm leading-7 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200"
              style={{ height: 0 }}
            >
              {blog.content}
            </div>
          ) : null}

          <div className="mt-5 flex items-center justify-end">
            <button
              type="button"
              onClick={onReadMore}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "border border-sky-400 bg-white text-sky-700 hover:bg-sky-50 dark:border-neutral-700 dark:bg-black dark:text-white dark:hover:bg-neutral-800"
                  : "border border-sky-500 bg-sky-600 text-white hover:bg-sky-500 dark:border-neutral-700 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100"
              }`}
            >
              {active ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function BlogsPage() {
  const [openBlogId, setOpenBlogId] = useState(blogs[0].id);

  return (
    <section className="min-h-screen pt-24 bg-white dark:bg-neutral-950 px-4 py-10 text-black dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-orange-400">
              coming soon Blogs
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Alumni and student blogs
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 dark:text-white/40 text-neutral-700">
              Stories from alumni and current students. Only one blog stays expanded at a time.
            </p>
          </div>

          <RouteLink
            to="/contact"
            className="hidden rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-400 sm:inline-flex"
          >
            Contact Us
          </RouteLink>
        </div>

        {/* <div className="space-y-4">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              active={openBlogId === blog.id}
              onReadMore={() =>
                setOpenBlogId((current) => (current === blog.id ? null : blog.id))
              }
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}