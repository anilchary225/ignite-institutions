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
      <main className="mx-auto flex max-w-[1680px] flex-col gap-16 px-8 py-16 sm:px-10 sm:py-20">
        <HomeCards />
      </main>
      <Stats/>
      <HomeApply/>
      <main className="mx-auto flex max-w-[1680px] flex-col gap-16 px-8 py-16 sm:px-10 sm:py-20">
        <CardsWithContent />
      </main>
      <CardsHover/>
      <Campuses/>
      <Achievements/>
      <Events/>
      <VideoPlayer/>
      <Testimonials/>
      <Form/>

    </div>
  );
};

export default Home;
