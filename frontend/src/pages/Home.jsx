import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import HomeCards from "./HomeCards";
import Stats from "../components/HomeComponents/Stats";
import HomeApply from "../components/HomeComponents/HomeApply";
import CardsWithContent from "../components/HomeComponents/CardsWithContent";
import CardsHover from "../components/HomeComponents/CardsHover";
import Campuses from "../components/HomeComponents/Campuses";
import Achievements from "../components/HomeComponents/Achievements";
import Events from "../components/HomeComponents/Events";
import VideoPlayer from "../components/HomeComponents/VideoPlayer";
import Testimonials from "../components/HomeComponents/Testimonials";
import Form from "../components/HomeComponents/Form";
import Navbar from "../components/Navbar/Navbar";
import HeroSectionVideoScroll from "../components/HomeComponents/Heroscrollsection/HeroSectionVideoScroll";

const Home = () => {
  const [introDone, setIntroDone] = useState(
    () => window.sessionStorage.getItem("ignite_intro_played") === "1"
  );
  const introWrapRef = useRef(null);
  const introVideoRef = useRef(null);
  const introFadeTimerRef = useRef(null);
  const introEndedRef = useRef(false);

  const startIntroFade = () => {
    const video = introVideoRef.current;
    const wrapper = introWrapRef.current;
    if (!video || !wrapper || introEndedRef.current) return;

    const duration = Number.isFinite(video.duration) ? video.duration : 0;
    if (!duration) return;

    window.clearTimeout(introFadeTimerRef.current);
    const fadeDelay = Math.max(0, duration * 1000 - 900);
    introFadeTimerRef.current = window.setTimeout(() => {
      if (introEndedRef.current) return;
        gsap.to(wrapper, {
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          onComplete: () => {
            introEndedRef.current = true;
            window.sessionStorage.setItem("ignite_intro_played", "1");
            setIntroDone(true);
          },
        });
    }, fadeDelay);
  };

  useEffect(() => {
    const video = introVideoRef.current;
    video?.addEventListener("loadedmetadata", startIntroFade);
    video?.addEventListener("canplay", startIntroFade);
    return () => {
      window.clearTimeout(introFadeTimerRef.current);
      video?.removeEventListener("loadedmetadata", startIntroFade);
      video?.removeEventListener("canplay", startIntroFade);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      {!introDone ? (
        <div ref={introWrapRef} className="fixed inset-0 z-[120] overflow-hidden bg-black">
          <video
            ref={introVideoRef}
            autoPlay
            muted
            playsInline
            preload="auto"
            src="/assets/entry-intro.webm"
            className="h-full w-full object-cover"
            onLoadedMetadata={startIntroFade}
            onCanPlay={startIntroFade}
            onEnded={() => {
              if (!introEndedRef.current) {
                introEndedRef.current = true;
                window.sessionStorage.setItem("ignite_intro_played", "1");
                setIntroDone(true);
              }
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        </div>
      ) : null}

      <div>
        {introDone ? <Navbar /> : null}
       
        {/* <IgniteHero /> */}
        <HeroSectionVideoScroll
          videoSrc="/hero.mp4"
          pxPerSecond={1000}
          sentences={[
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
          ]}
        />

        <section className=" bg-white px-4 pb-10 pt-28 dark:bg-neutral-950  sm:px-8 sm:pb-12 ">
          <div className="mx-auto max-w-7xl">
            <HomeCards />
          </div>
        </section>

        <Stats />

        <HomeApply  />

        <section className="bg-blue-50 px-4 py-12 transition-colors dark:bg-neutral-900 sm:px-8 sm:py-14">
          <div className="mx-auto max-w-7xl">
            <CardsWithContent />
          </div>
        </section>

        <CardsHover />

        <section  className="bg-green-50 transition-colors dark:bg-neutral-900">
          <Campuses />
        </section>

        <Achievements />

        <section className="bg-red-50 transition-colors dark:bg-neutral-900">
          <Events />
        </section>

        <VideoPlayer />

        <section className="bg-blue-50 transition-colors dark:bg-neutral-950">
          <Testimonials />
        </section>

        <Form />
      </div>
    </div>
  );
};

export default Home;
