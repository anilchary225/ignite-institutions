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
    <main className="bg-white text-neutral-950 dark:bg-neutral-950 dark:text-white">
      {/* Hero — full-bleed image */}
      <AboutHero />

      {/* Welcome — white */}
      <div className="bg-white dark:bg-neutral-950">
        <WelcomeSection />
      </div>

      {/* Founder — light orange tint */}
      <div className="bg-orange-50 dark:bg-neutral-900">
        <FounderCard />
      </div>

      {/* Teaching Inspires — white */}
      <div className="bg-white dark:bg-neutral-950">
        <TeachingInspires />
      </div>

      {/* Our Team — light blue tint */}
      <div className="bg-blue-50 dark:bg-neutral-900">
        <OurTeam />
      </div>

      {/* Campus Features — light green tint (already has indigo-50 bg, override here) */}
      <div className="bg-green-50 dark:bg-neutral-900">
        <CampusFeatures />
      </div>

      {/* Our Offerings — white */}
      <div className="bg-white dark:bg-neutral-950">
        <OurOfferings />
      </div>

      {/* Why Choose Us — light red/rose tint */}
      <div className="bg-red-50 dark:bg-neutral-900">
        <WhyChooseUs />
      </div>

      {/* Vision & Mission — alternating white sections (component handles internally) */}
      <div className="bg-white dark:bg-neutral-950">
        <VisionMission />
      </div>

      {/* Info Cards — light orange tint */}
      <div className="bg-orange-50 dark:bg-neutral-900">
        <AboutInfoCards />
      </div>
    </main>
  );
}
