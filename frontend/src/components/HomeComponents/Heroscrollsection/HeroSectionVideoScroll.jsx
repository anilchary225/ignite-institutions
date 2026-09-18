import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import "./HeroSectionVideoScroll.css";

/**
 * HeroSectionVideoScroll
 * ----------------------------------------------------------------
 * Scroll-scrubbed video hero. A tall spacer element reserves the
 * scroll distance; the video "stage" is pinned by manually toggling
 * `position: fixed` / `absolute` in the same rAF loop that drives
 * the scrub — not `position: sticky` and not GSAP ScrollTrigger's
 * `pin`. Manual pinning is used deliberately: `sticky` (and pin
 * libraries built on it) silently breaks under any ancestor with a
 * non-visible `overflow` or a `transform`, which is common in real
 * app layouts and hard to fully audit. `position: fixed` pins to
 * the viewport regardless of what's above it in the DOM tree, so
 * this approach is robust no matter what the rest of the page does.
 *
 * IMPORTANT — for smooth scrubbing, encode with frequent keyframes:
 *   ffmpeg -i input.mp4 -g 1 -keyint_min 1 -c:v libx264 \
 *     -preset veryfast -crf 20 -an -movflags +faststart hero.mp4
 */

const DEFAULT_SENTENCES = [
  {
    logo: "/favicon_io (1)/android-chrome-512x512.png",
    eyebrow: "Welcome to Ignite",
    heading: "IGNITE Junior Colleges and School",
    paragraph: "A trusted name in IIT-JEE and NEET coaching in Hyderabad - built to shape confident, capable, and compassionate students.",
  },
  {
    eyebrow: "Structured for Success",
    heading: "Every detail, considered.",
    paragraph: "Structured academic planning, daily assessments, and expert faculty guidance keep every student's progress consistent and on track.",
  },
  {
    eyebrow: "Beyond the Classroom",
    heading: "This is more than coaching. It's a complete environment.",
    paragraph: "From premium infrastructure to personal mentorship, Ignite is built to carry students from ambition to achievement.",
  },
];

export default function HeroSectionVideoScroll({
  videoSrc = "/frames/hero.mp4",
  posterSrc,
  sentences = DEFAULT_SENTENCES,
  // How many px of scroll correspond to 1 second of video.
  // Higher = slower scrub (more scroll distance per second of footage).
  pxPerSecond = 500,
  // Time constant (ms) for how quickly playback catches up to scroll
  // position. Frame-rate independent — behaves the same on 60Hz and
  // 120Hz displays. Lower = snappier/more literal, higher = smoother/
  // laggier. Set to 0 to disable smoothing entirely (1:1 with scroll).
  smoothingMs = 120,
}) {
  const spacerRef = useRef(null);
  const stageRef = useRef(null);
  const videoRef = useRef(null);
  const textRefs = useRef([]);
  const progressBarRef = useRef(null);
  const scrollHintRef = useRef(null);

  const [isReady, setIsReady] = useState(false);
  const [mediaFailed, setMediaFailed] = useState(false);
  const rafIdRef = useRef(null);
  const smoothedTimeRef = useRef(0);
  const lastTimestampRef = useRef(null);
  const pinStateRef = useRef(null); // "before" | "pinned" | "after"

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.heroExperience = "true";
    root.dataset.heroComplete = "false";

    return () => {
      delete root.dataset.heroExperience;
      delete root.dataset.heroComplete;
    };
  }, []);

  const handleVideoError = () => {
    setMediaFailed(true);
    // Reveal the hero copy even when a browser cannot decode the video.
    setIsReady(true);
  };

  // ---- Prime the video so seeks actually paint (Safari/Chrome quirk) --
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    function handleReady() {
      video
        .play()
        .then(() => video.pause())
        .catch(() => {})
        .finally(() => setIsReady(true));
    }

    video.addEventListener("loadedmetadata", handleReady);
    video.addEventListener("canplaythrough", handleReady);
    return () => {
      video.removeEventListener("loadedmetadata", handleReady);
      video.removeEventListener("canplaythrough", handleReady);
    };
  }, []);

  // ---- Set spacer height from video duration once metadata loads ------
  useEffect(() => {
    const video = videoRef.current;
    const spacer = spacerRef.current;
    if (!video || !spacer) return;

    function setHeight() {
      if (!Number.isFinite(video.duration)) return;
      spacer.style.height = "200vh";
    }

    video.addEventListener("loadedmetadata", setHeight);
    return () => video.removeEventListener("loadedmetadata", setHeight);
  }, [pxPerSecond]);

  // ---- rAF loop: scroll position -> video.currentTime + text sync -----
  useEffect(() => {
    if (!isReady) return;

    const video = videoRef.current;
    const spacer = spacerRef.current;
    if (!video || !spacer || !Number.isFinite(video.duration)) return;

    const duration = video.duration;
    const els = textRefs.current.filter(Boolean);
    const sliceCount = els.length || 1;
    const slice = duration / sliceCount;

    // Set initial hidden state for text.
    els.forEach((el) => gsap.set(el, { opacity: 0, y: 28, filter: "blur(14px)" }));

    function loop(timestamp) {
      // Frame-rate independent smoothing: compute elapsed ms since the
      // last tick and derive a decay factor from it, so the catch-up
      // speed feels the same on a 60Hz laptop and a 120Hz phone.
      const last = lastTimestampRef.current;
      const dt = last == null ? 16.67 : timestamp - last;
      lastTimestampRef.current = timestamp;

      const viewportH = window.innerHeight;
      const rect = spacer.getBoundingClientRect();
      const spacerHeight = spacer.offsetHeight - viewportH;

      // ---- Manual pin: fixed while the spacer spans the viewport,
      // absolute-at-top before it, absolute-at-bottom after it. This
      // reproduces pin/release behavior without relying on `sticky`.
      const stage = stageRef.current;
      if (stage) {
        let nextState;
        if (rect.top > 0) {
          nextState = "before";
        } else if (rect.bottom <= viewportH) {
          nextState = "after";
        } else {
          nextState = "pinned";
        }

        if (pinStateRef.current !== nextState) {
          pinStateRef.current = nextState;
          document.documentElement.dataset.heroComplete = nextState === "after" ? "true" : "false";
          if (nextState === "before") {
            stage.style.position = "absolute";
            stage.style.top = "0";
            stage.style.bottom = "";
          } else if (nextState === "after") {
            stage.style.position = "absolute";
            stage.style.top = "";
            stage.style.bottom = "0";
          } else {
            stage.style.position = "fixed";
            stage.style.top = "0";
            stage.style.bottom = "";
          }
        }
      }

      const start = spacer.offsetTop;
      const raw = window.scrollY - start;
      const clamped = Math.max(0, Math.min(raw, spacerHeight));
      const fraction = spacerHeight > 0 ? clamped / spacerHeight : 0;
      const targetTime = fraction * duration;

      if (smoothingMs <= 0) {
        smoothedTimeRef.current = targetTime;
      } else {
        // Exponential decay toward the target, time-constant in ms.
        const alpha = 1 - Math.exp(-dt / smoothingMs);
        smoothedTimeRef.current += (targetTime - smoothedTimeRef.current) * alpha;
      }

      if (!video.seeking && Math.abs(video.currentTime - smoothedTimeRef.current) > 0.01) {
        video.currentTime = smoothedTimeRef.current;
      }

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${fraction})`;
      }

      if (scrollHintRef.current) {
        scrollHintRef.current.style.opacity = fraction > 0.02 ? "0" : "1";
      }

      // Text sync — derive each sentence's opacity/position directly
      // from the current time, no separate ScrollTrigger needed.
      const t = smoothedTimeRef.current;
      els.forEach((el, i) => {
        const sliceStart = i * slice;
        const holdInEnd = sliceStart + slice * 0.4;
        const holdOutStart = sliceStart + slice * 0.68;
        const holdOutEnd = sliceStart + slice * 0.9;

        let opacity = 0;
        let y = 28;
        let blur = 14;

        if (t >= sliceStart && t < holdInEnd) {
          const p = (t - sliceStart) / (holdInEnd - sliceStart);
          opacity = p;
          y = 28 * (1 - p);
          blur = 14 * (1 - p);
        } else if (t >= holdInEnd && t < holdOutStart) {
          opacity = 1;
          y = 0;
          blur = 0;
        } else if (t >= holdOutStart && t < holdOutEnd) {
          const p = (t - holdOutStart) / (holdOutEnd - holdOutStart);
          opacity = 1 - p;
          y = -28 * p;
          blur = 14 * p;
        }

        el.style.opacity = opacity;
        el.style.transform = `translateY(${y}px)`;
        el.style.filter = `blur(${blur}px)`;
      });

      rafIdRef.current = window.requestAnimationFrame(loop);
    }

    lastTimestampRef.current = null;
    pinStateRef.current = null;
    rafIdRef.current = window.requestAnimationFrame(loop);

    return () => {
      if (rafIdRef.current) window.cancelAnimationFrame(rafIdRef.current);
      lastTimestampRef.current = null;
      pinStateRef.current = null;
    };
  }, [isReady, smoothingMs]);

  return (
    <div ref={spacerRef} className="hero-cinematic__spacer">
      <section
        ref={stageRef}
        className="hero-cinematic hero-cinematic--manual-pin"
        data-motion-skip="true"
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100vh" }}
        aria-label="Cinematic product story"
      >
        {mediaFailed && <div className="hero-cinematic__fallback" aria-hidden="true" />}
        <video
          ref={videoRef}
          className="hero-cinematic__canvas"
          style={{ objectFit: "cover" }}
          src={videoSrc}
          poster={posterSrc}
          muted
          playsInline
          preload="auto"
          onError={handleVideoError}
        />

        <div className="hero-cinematic__vignette" />
        <div className="hero-cinematic__grain" />

        <div className="hero-cinematic__text-stage">
          {sentences.map((sentence, i) => (
            <div
              key={typeof sentence === "string" ? sentence : sentence.heading}
              ref={(el) => (textRefs.current[i] = el)}
              className="hero-cinematic__sentence"
            >
              <div className="hero-cinematic__sentence-inner">
                {typeof sentence === "string" ? sentence : (
                  <>
                    {sentence.logo ? (
                      <div className="hero-cinematic__logo">
                        <img src={sentence.logo} alt="" />
                      </div>
                    ) : null}
                    <span className="hero-cinematic__eyebrow">
                      <span className="hero-cinematic__eyebrow-dot" />
                      {sentence.eyebrow}
                    </span>
                    <h2 className="hero-cinematic__heading">{sentence.heading}</h2>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div ref={scrollHintRef} className="hero-cinematic__scroll-hint">
          <span>Scroll Down</span>
          <ChevronDown size={18} className="animate-bounce" strokeWidth={1.75} />
        </div>

        <div className="hero-cinematic__progress">
          <div ref={progressBarRef} className="hero-cinematic__progress-bar" />
        </div>

        {!isReady && !mediaFailed && (
          <div className="hero-cinematic__loader">
            <div className="hero-cinematic__loader-bar">
              <div className="hero-cinematic__loader-fill" style={{ width: "60%" }} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
