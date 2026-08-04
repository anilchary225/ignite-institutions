import AboutHero from "../components/AboutPageComponents/AboutPage/AboutHero";
import AboutInfoCards from "../components/AboutPageComponents/AboutPage/AboutInfoCards";

import CampusFeatures from "../components/AboutPageComponents/AboutPage/CampusFeatures";
import FounderCard from "../components/AboutPageComponents/AboutPage/FounderCard";
import OurOfferings from "../components/AboutPageComponents/AboutPage/OurOfferings";
import OurTeam from "../components/AboutPageComponents/AboutPage/OurTeam";
import TeachingInspires from "../components/AboutPageComponents/AboutPage/TeachingInspires";
import VisionMission from "../components/AboutPageComponents/AboutPage/VisionMission";
import WelcomeSection from "../components/AboutPageComponents/AboutPage/WelcomeSection";
import WhyChooseUs from "../components/AboutPageComponents/AboutPage/WhyChooseUs";


export default function AboutPage() {
  return (
    <main className="bg-white text-neutral-950 dark:bg-neutral-950 dark:text-white top-0">
      <AboutHero />
      <WelcomeSection />
      <FounderCard />
      <TeachingInspires />
      <OurTeam />
      <CampusFeatures />
      <OurOfferings />
      <WhyChooseUs />
      <VisionMission />
      <AboutInfoCards/>
    </main>
  );
}
