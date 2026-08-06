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

      {/* Hero Cards — white */}
      <section className="bg-white dark:bg-neutral-950 px-4 py-10 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <HomeCards />
        </div>
      </section>

      {/* Stats — green brand gradient */}
      <Stats />

      {/* Apply — orange-50 */}
      <HomeApply />

      {/* Programs cards — blue-50 */}
      <section className="bg-blue-50 dark:bg-neutral-900 px-4 py-12 sm:px-8 sm:py-14 transition-colors">
        <div className="mx-auto max-w-7xl">
          <CardsWithContent />
        </div>
      </section>

      {/* Campus Life hover cards — white */}
      <CardsHover />

      {/* Campuses tabbed — green-50 */}
      <section className="bg-green-50 dark:bg-neutral-900 transition-colors">
        <Campuses />
      </section>

      {/* Achievements — white */}
      <Achievements />

      {/* Events — red-50 */}
      <section className="bg-red-50 dark:bg-neutral-900 transition-colors">
        <Events />
      </section>

      {/* Video — dark */}
      <VideoPlayer />

      {/* Testimonials — blue-50 */}
      <section className="bg-blue-50 dark:bg-neutral-950 transition-colors">
        <Testimonials />
      </section>

      {/* Contact Form — white with border-top separating it from footer */}
      <Form />
    </div>
  );
};

export default Home;
