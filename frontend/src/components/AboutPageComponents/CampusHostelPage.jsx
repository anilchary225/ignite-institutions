import React from "react";
import DualImageHero from "./CampusHostelComponents/DualImageHero";
import IntroDual from "./CampusHostelComponents/IntroDual";
import AltRow from "./CampusHostelComponents/AltRow";
import CircleInsetImage from "./CampusHostelComponents/CircleInsetImage";
import CenteredStatement from "./CampusHostelComponents/CenteredStatement";
import SolidBanner from "./CampusHostelComponents/SolidBanner";
import Hero from "./AboutComponents/Hero";

export default function CampusHostelPage() {
  return (
    <main className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      {/* Hero */}
      <Hero
        title="Campus Hostel Facilities"
        imageSrc="/images/pd-hero.jpg"
      />

      {/* Intro — white */}
      <div className="bg-white dark:bg-neutral-950">
        <IntroDual
          imageSrc="/images/hostel-kitchen-team.jpg"
          imageAlt="Kitchen staff and students in the dining hall"
          paragraphs={[
            "At IGNITE Junior College, our campus isn't just a place to stay—it's a home away from home.",
            "Our hostel facilities are designed to comfort, support, and inspire students as they navigate a pivotal stage of their academic journey.",
          ]}
        />
      </div>

      {/* Comfortable Living — light orange */}
      <div className="bg-orange-50 dark:bg-neutral-900">
        <AltRow
          heading="Comfortable Living, Thoughtfully Designed"
          text="Our hostels offer separate, hygienic accommodations for both boys and girls, ensuring safe and respectful living environments. Each room is kept clean and inviting—ideal for rest, study, and personal growth."
          imageNode={
            <CircleInsetImage
              mainImage="/images/hostel-bunk-wide.jpg"
              mainAlt="Bunk beds in a hostel room"
              insetImage="/images/hostel-bunk-detail.jpg"
              insetAlt="Close-up of hostel room beds"
            />
          }
        />
      </div>

      {/* Healthy Meals — light green */}
      <div className="bg-green-50 dark:bg-neutral-900">
        <AltRow
          heading="Healthy Meals & Nurturing Care"
          text="A good meal is at the heart of wellness. Our hostel ensures nutritious, vegetarian and non-vegetarian food is served — spacious dining areas encourage friendship, conversation, and a sense of community. Students dine, relax, and recharge—all while building camaraderie."
          imageSrc="/images/hostel-dining-hall.jpg"
          imageAlt="Students eating together in the dining hall"
          reverse
        />
      </div>

      {/* Safety — light blue */}
      <div className="bg-blue-50 dark:bg-neutral-900">
        <CenteredStatement
          heading="Safety, Compassion & Peace of Mind"
          text="We take your child's safety and well-being seriously—including heartfelt care from our hostel staff. Our team provides daily oversight, emotional support, and guidance, bringing the warmth of home to campus living."
        />
      </div>

      {/* Closing Banner — green-700 brand */}
      <SolidBanner text="At IGNITE, we recognize that success starts with a balanced environment—a safe place to study, rest, and grow. Our campus hostel is more than rooms and meals—it's where students find friendship, support, and the encouragement to shine." />
    </main>
  );
}
