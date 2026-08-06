import React from "react";
import HomeCards from './HomeCards';
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

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      {/* Hero Cards — white background */}
      <main className="mx-auto flex max-w-[1440px] flex-col gap-10 px-4 py-10 sm:px-8 sm:py-14">
        <HomeCards />
      </main>

      {/* Stats — green brand gradient */}
      <Stats />

      {/* Apply — light orange tint */}
      <HomeApply />

      {/* Cards with content — light blue tint */}
      <div className="bg-blue-50 dark:bg-neutral-900">
        <main className="mx-auto flex max-w-[1440px] flex-col gap-10 px-4 py-10 sm:px-8 sm:py-14">
          <CardsWithContent />
        </main>
      </div>

      {/* Cards Hover — white */}
      <CardsHover />

      {/* Campuses — light green tint */}
      <div className="bg-green-50 dark:bg-neutral-950">
        <Campuses />
      </div>

      {/* Achievements — white */}
      <Achievements />

      {/* Events — light red/rose tint */}
      <div className="bg-red-50 dark:bg-neutral-900">
        <Events />
      </div>

      {/* Video — dark section */}
      <VideoPlayer />

      {/* Testimonials — light blue tint */}
      <div className="bg-blue-50 dark:bg-neutral-950">
        <Testimonials />
      </div>

      {/* Contact Form */}
      <Form />
    </div>
  );
};

export default Home;
