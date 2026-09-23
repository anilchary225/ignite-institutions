import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import "./HeroSectionVideoScroll.css";

/**
 * HeroSectionVideoScroll
 * ----------------------------------------------------------------
 * Scroll-scrubbed cinematic hero.
 *
 * Improvements:
 * - Desktop video: /hero-web.mp4
 * - Mobile/tablet video: /hero-mobile.mp4
 * - Text does NOT depend on video autoplay.
 * - Safari/iPad safe.
 * - Hero text is visible immediately.
 * - Video seeking starts only when metadata is available.
 * - Uses one <video> element.
 * - No GSAP dependency.
 * - Uses preload="metadata".
 * - Manual pinning preserved.
 * - Scroll-driven video scrubbing preserved.
 * - Reduced-motion support.
 */

const DEFAULT_SENTENCES = [
  {
    logo: "/favicon_io (1)/android-chrome-512x512.png",
    eyebrow: "Welcome to Ignite",
    heading: "IGNITE Junior Colleges and School",
    paragraph:
      "A trusted name in IIT-JEE and NEET coaching in Hyderabad - built to shape confident, capable, and compassionate students.",
  },

  {
    eyebrow: "Structured for Success",
    heading: "Every detail, considered.",
    paragraph:
      "Structured academic planning, daily assessments, and expert faculty guidance keep every student's progress consistent and on track.",
  },

  {
    eyebrow: "Beyond the Classroom",
    heading: "This is more than coaching. It's a complete environment.",
    paragraph:
      "From premium infrastructure to personal mentorship, Ignite is built to carry students from ambition to achievement.",
  },
];

export default function HeroSectionVideoScroll({
  videoSrc = "/hero-web.mp4",
  mobileVideoSrc = "/hero-mobile.mp4",
  posterSrc,
  sentences = DEFAULT_SENTENCES,

  // Higher = slower video scrub.
  pxPerSecond = 1000,

  // Smoothness of video movement.
  smoothingMs = 120,
}) {
  const spacerRef = useRef(null);
  const stageRef = useRef(null);
  const videoRef = useRef(null);

  const textRefs = useRef([]);
  const progressBarRef = useRef(null);
  const scrollHintRef = useRef(null);

  const rafIdRef = useRef(null);
  const smoothedTimeRef = useRef(0);
  const lastTimestampRef = useRef(null);
  const pinStateRef = useRef(null);

  /*
   * Detect mobile/tablet immediately.
   *
   * iPad should use the smaller mobile video.
   */
  const getInitialVideo = () => {
    if (typeof window === "undefined") {
      return videoSrc;
    }

    return window.matchMedia("(max-width: 1024px)").matches
      ? mobileVideoSrc
      : videoSrc;
  };

  const [activeVideoSrc, setActiveVideoSrc] = useState(getInitialVideo);

  /*
   * Video metadata readiness.
   *
   * IMPORTANT:
   * The hero does NOT wait for this before displaying text.
   */
  const [videoReady, setVideoReady] = useState(false);

  /*
   * Select correct video on resize.
   */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    const updateVideoSource = () => {
      const nextSource = mediaQuery.matches
        ? mobileVideoSrc
        : videoSrc;

      setActiveVideoSrc((current) =>
        current === nextSource ? current : nextSource
      );
    };

    updateVideoSource();

    const handleChange = () => {
      updateVideoSource();
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, [videoSrc, mobileVideoSrc]);

  /*
   * Tell the rest of the application that the cinematic hero exists.
   */
  useEffect(() => {
    const root = document.documentElement;

    root.dataset.heroExperience = "true";
    root.dataset.heroComplete = "false";

    return () => {
      delete root.dataset.heroExperience;
      delete root.dataset.heroComplete;
    };
  }, []);

  /*
   * ---------------------------------------------------------------
   * Video lifecycle
   * ---------------------------------------------------------------
   *
   * Do NOT call video.play() here.
   *
   * Safari/iOS can reject autoplay even when muted.
   * The hero should work regardless.
   */
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    setVideoReady(false);

    smoothedTimeRef.current = 0;
    lastTimestampRef.current = null;
    pinStateRef.current = null;

    const handleMetadata = () => {
      if (
        Number.isFinite(video.duration) &&
        video.duration > 0
      ) {
        setVideoReady(true);
      }
    };

    const handleCanPlay = () => {
      setVideoReady(true);
    };

    const handleError = () => {
      /*
       * Keep the hero usable even if the video cannot load.
       * Text and scroll UI still work.
       */
      setVideoReady(false);
    };

    video.addEventListener("loadedmetadata", handleMetadata);
    video.addEventListener("durationchange", handleMetadata);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("canplaythrough", handleCanPlay);
    video.addEventListener("error", handleError);

    /*
     * Metadata may already exist before listeners are attached.
     */
    if (
      Number.isFinite(video.duration) &&
      video.duration > 0
    ) {
      setVideoReady(true);
    }

    return () => {
      video.removeEventListener(
        "loadedmetadata",
        handleMetadata
      );

      video.removeEventListener(
        "durationchange",
        handleMetadata
      );

      video.removeEventListener(
        "canplay",
        handleCanPlay
      );

      video.removeEventListener(
        "canplaythrough",
        handleCanPlay
      );

      video.removeEventListener(
        "error",
        handleError
      );

      video.pause();
    };
  }, [activeVideoSrc]);

  /*
   * ---------------------------------------------------------------
   * Spacer
   * ---------------------------------------------------------------
   *
   * Do NOT wait for video metadata.
   *
   * This prevents a black/zero-height hero on Safari.
   */
  useEffect(() => {
    const spacer = spacerRef.current;

    if (!spacer) return;

    spacer.style.height = "200vh";

    const updateHeight = () => {
      spacer.style.height = "200vh";
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  /*
   * ---------------------------------------------------------------
   * Main animation loop
   * ---------------------------------------------------------------
   *
   * IMPORTANT:
   * The loop starts immediately.
   *
   * It does NOT depend on videoReady.
   *
   * Therefore the text appears even when Safari is still loading
   * or decoding the video.
   */
  useEffect(() => {
    const video = videoRef.current;
    const spacer = spacerRef.current;

    if (!spacer) return;

    const els = textRefs.current.filter(Boolean);

    /*
     * Use 10 seconds as a fallback because the optimized hero
     * videos are approximately 10 seconds long.
     */
    const FALLBACK_DURATION = 10;

    function loop(timestamp) {
      const currentVideo = videoRef.current;
      const currentSpacer = spacerRef.current;

      if (!currentSpacer) {
        rafIdRef.current =
          window.requestAnimationFrame(loop);

        return;
      }

      const last = lastTimestampRef.current;

      const dt =
        last == null
          ? 16.67
          : Math.max(0, timestamp - last);

      lastTimestampRef.current = timestamp;

      const viewportH = window.innerHeight;

      const rect =
        currentSpacer.getBoundingClientRect();

      const spacerHeight = Math.max(
        0,
        currentSpacer.offsetHeight - viewportH
      );

      /*
       * -----------------------------------------------------------
       * Manual pinning
       * -----------------------------------------------------------
       */
      const stage = stageRef.current;

      if (stage) {
        let nextState;

        const remainReleased =
          pinStateRef.current === "after" &&
          rect.bottom <= viewportH + 24;

        if (rect.top > 0) {
          nextState = "before";
        } else if (
          rect.bottom <= viewportH ||
          remainReleased
        ) {
          nextState = "after";
        } else {
          nextState = "pinned";
        }

        if (
          pinStateRef.current !== nextState
        ) {
          pinStateRef.current = nextState;

          document.documentElement.dataset.heroComplete =
            nextState === "after"
              ? "true"
              : "false";

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

      /*
       * -----------------------------------------------------------
       * Scroll progress
       * -----------------------------------------------------------
       */
      const start = currentSpacer.offsetTop;

      const raw =
        window.scrollY - start;

      const clamped = Math.max(
        0,
        Math.min(raw, spacerHeight)
      );

      const fraction =
        spacerHeight > 0
          ? clamped / spacerHeight
          : 0;

      /*
       * -----------------------------------------------------------
       * Video duration
       * -----------------------------------------------------------
       */
      const duration =
        currentVideo &&
        Number.isFinite(currentVideo.duration) &&
        currentVideo.duration > 0
          ? currentVideo.duration
          : FALLBACK_DURATION;

      const safeDuration = Math.max(
        0,
        duration - 0.05
      );

      const targetTime =
        fraction * safeDuration;

      /*
       * -----------------------------------------------------------
       * Smooth video position
       * -----------------------------------------------------------
       */
      if (smoothingMs <= 0) {
        smoothedTimeRef.current =
          targetTime;
      } else {
        const alpha =
          1 - Math.exp(
            -dt / smoothingMs
          );

        smoothedTimeRef.current +=
          (
            targetTime -
            smoothedTimeRef.current
          ) * alpha;
      }

      /*
       * Only seek when video metadata is actually available.
       */
      if (
        currentVideo &&
        videoReady &&
        Number.isFinite(currentVideo.duration) &&
        currentVideo.duration > 0 &&
        !currentVideo.seeking
      ) {
        const difference =
          Math.abs(
            currentVideo.currentTime -
              smoothedTimeRef.current
          );

        if (difference > 0.01) {
          try {
            currentVideo.currentTime =
              smoothedTimeRef.current;
          } catch {
            // Safari may occasionally reject a seek.
          }
        }
      }

      /*
       * -----------------------------------------------------------
       * Progress bar
       * -----------------------------------------------------------
       */
      if (progressBarRef.current) {
        progressBarRef.current.style.transform =
          `scaleX(${fraction})`;
      }

      /*
       * -----------------------------------------------------------
       * Scroll hint
       * -----------------------------------------------------------
       */
      if (scrollHintRef.current) {
        scrollHintRef.current.style.opacity =
          fraction > 0.02
            ? "0"
            : "1";
      }

      /*
       * -----------------------------------------------------------
       * Text animation
       * -----------------------------------------------------------
       */
      const sliceCount =
        els.length || 1;

      const slice =
        duration / sliceCount;

      const t =
        smoothedTimeRef.current;

      const reducedMotion =
        window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

      els.forEach((el, i) => {
        const sliceStart =
          i * slice;

        const holdInEnd =
          sliceStart + slice * 0.4;

        const holdOutStart =
          sliceStart + slice * 0.68;

        const holdOutEnd =
          sliceStart + slice * 0.9;

        let opacity = 0;
        let y = 28;
        let blur = 14;

        /*
         * Reduced motion:
         * Show the current sentence without animation.
         */
        if (reducedMotion) {
          if (
            t >= sliceStart &&
            t < holdOutEnd
          ) {
            opacity = 1;
            y = 0;
            blur = 0;
          }
        }

        /*
         * Normal animation.
         */
        else if (
          t >= sliceStart &&
          t < holdInEnd
        ) {
          const p =
            (t - sliceStart) /
            (holdInEnd - sliceStart);

          opacity = p;
          y = 28 * (1 - p);
          blur = 14 * (1 - p);
        }

        else if (
          t >= holdInEnd &&
          t < holdOutStart
        ) {
          opacity = 1;
          y = 0;
          blur = 0;
        }

        else if (
          t >= holdOutStart &&
          t < holdOutEnd
        ) {
          const p =
            (t - holdOutStart) /
            (holdOutEnd - holdOutStart);

          opacity = 1 - p;
          y = -28 * p;
          blur = 14 * p;
        }

        /*
         * Keep first slide visible at the very beginning.
         *
         * This is particularly important on Safari/iPad.
         */
        if (
          i === 0 &&
          fraction <= 0.001
        ) {
          opacity = 1;
          y = 0;
          blur = 0;
        }

        el.style.opacity =
          String(opacity);

        el.style.transform =
          `translateY(${y}px)`;

        el.style.filter =
          `blur(${blur}px)`;
      });

      rafIdRef.current =
        window.requestAnimationFrame(loop);
    }

    /*
     * Reset animation state.
     */
    lastTimestampRef.current = null;
    pinStateRef.current = null;

    /*
     * Make first slide visible immediately.
     */
    if (els[0]) {
      els[0].style.opacity = "1";
      els[0].style.transform =
        "translateY(0)";
      els[0].style.filter =
        "blur(0)";
    }

    rafIdRef.current =
      window.requestAnimationFrame(loop);

    return () => {
      if (rafIdRef.current) {
        window.cancelAnimationFrame(
          rafIdRef.current
        );
      }

      rafIdRef.current = null;
      lastTimestampRef.current = null;
      pinStateRef.current = null;
    };
  }, [smoothingMs, videoReady]);

  /*
   * ---------------------------------------------------------------
   * Render
   * ---------------------------------------------------------------
   */
  return (
    <div
      ref={spacerRef}
      className="hero-cinematic__spacer"
    >
      <section
        ref={stageRef}
        className="hero-cinematic hero-cinematic--manual-pin"
        data-motion-skip="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
        }}
        aria-label="Cinematic product story"
      >
        {/* -------------------------------------------------------
            HERO VIDEO
        -------------------------------------------------------- */}
        <video
          ref={videoRef}
          className="hero-cinematic__canvas"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            backgroundColor: "#000",
          }}
          src={activeVideoSrc}
          poster={posterSrc}
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
        />

        {/* Dark cinematic overlay */}
        <div className="hero-cinematic__vignette" />

        {/* Film grain */}
        <div className="hero-cinematic__grain" />

        {/* -------------------------------------------------------
            TEXT
        -------------------------------------------------------- */}
        <div className="hero-cinematic__text-stage">
          {sentences.map(
            (sentence, i) => (
              <div
                key={
                  typeof sentence === "string"
                    ? sentence
                    : sentence.heading
                }
                ref={(el) => {
                  textRefs.current[i] =
                    el;
                }}
                className="hero-cinematic__sentence"
                style={
                  i === 0
                    ? {
                        opacity: 1,
                        transform:
                          "translateY(0)",
                        filter:
                          "blur(0)",
                      }
                    : undefined
                }
              >
                <div className="hero-cinematic__sentence-inner">
                  {typeof sentence ===
                  "string" ? (
                    sentence
                  ) : (
                    <>
                      {/* Logo */}
                      {sentence.logo ? (
                        <div className="hero-cinematic__logo">
                          <img
                            src={sentence.logo}
                            alt=""
                            width="512"
                            height="512"
                            decoding="async"
                          />
                        </div>
                      ) : null}

                      {/* Eyebrow */}
                      <span className="hero-cinematic__eyebrow">
                        <span className="hero-cinematic__eyebrow-dot" />
                        {sentence.eyebrow}
                      </span>

                      {/* Heading */}
                      {i === 0 ? (
                        <h1 className="hero-cinematic__heading">
                          {sentence.heading}
                        </h1>
                      ) : (
                        <h2 className="hero-cinematic__heading">
                          {sentence.heading}
                        </h2>
                      )}

                      {/* Paragraph */}
                      {sentence.paragraph ? (
                        <p className="hero-cinematic__paragraph">
                          {sentence.paragraph}
                        </p>
                      ) : null}
                    </>
                  )}
                </div>
              </div>
            )
          )}
        </div>

        {/* -------------------------------------------------------
            SCROLL HINT
        -------------------------------------------------------- */}
        <div
          ref={scrollHintRef}
          className="hero-cinematic__scroll-hint"
        >
          <span>Scroll Down</span>

          <ChevronDown
            size={18}
            className="animate-bounce"
            strokeWidth={1.75}
          />
        </div>

        {/* -------------------------------------------------------
            PROGRESS
        -------------------------------------------------------- */}
        <div className="hero-cinematic__progress">
          <div
            ref={progressBarRef}
            className="hero-cinematic__progress-bar"
          />
        </div>

        {/* -------------------------------------------------------
            VIDEO LOADER
        -------------------------------------------------------- */}
        {!videoReady && (
          <div className="hero-cinematic__loader">
            <div className="hero-cinematic__loader-bar">
              <div
                className="hero-cinematic__loader-fill"
                style={{
                  width: "60%",
                }}
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}