import React from "react";

import IntroText from './DayAtIgniteComponents/IntroText';
import IconFeatureRow from "./DayAtIgniteComponents/IconFeatureRow";
import StatementBanner from "./DayAtIgniteComponents/StatementBanner";
import TwoColFeature from "./DayAtIgniteComponents/TwoColFeature";
import TimelineBanner from "./DayAtIgniteComponents/TimelineBanner";
import SplitHero from './DayAtIgniteComponents/SplitHero';
import Hero from "./AboutComponents/Hero";

/**
 * DayAtIgnitePage — content-only sections for the ignite.academy
 * "Day At IGNITE" page. No navbar/footer: drop inside your existing shell.
 *
 * Deliberately different visual language than the Personality Development
 * page: split-image hero, icon-bullet feature row, gradient statement
 * banner, two-column feature block, and a connected timeline on a solid
 * color background.
 */
export default function DayAtIgnitePage() {
  return (
    <main className="font-body text-slate-800">
      <Hero
              title="A Day At IGNITE"
              imageSrc="/images/pd-hero.jpg"
            />

      <IntroText
        imageSrc="/images/day-classroom.jpg"
        imageAlt="Students seated in a classroom"
        paragraphs={[
          "At IGNITE Junior College, each day is thoughtfully designed not just to educate—but to energize.",
          "With a harmonious blend of academic focus, well-being, and joy, we aim to bring out the best in every student—effortlessly and inspiringly.",
        ]}
      />

      <TwoColFeature
        heading="A Balanced Routine"
        columns={[
          {
            title: "Stress-Free Learning",
            text: "Our schedule is designed to prioritize both learning and ease. Classes are spaced with smartly planned breaks, enabling students to stay focused and refreshed. Lessons are led by experienced lead faculty and supported by dedicated associate lecturers.",
          },
          {
            title: "Active Evenings",
            text: "Evenings are reserved for movement, play, and creativity. Whether it's sports, games, physical exercises, or cultural activities—students unwind, recharge, and build camaraderie.",
          },
        ]}
      />

      <TimelineBanner />

      <IconFeatureRow
        heading="Comfort, Care & Security"
        subheading="Safety You Can Trust"
        text="Our residential students enjoy peace of mind 24/7. A dedicated team of security professionals ensures safety across the campus, including vigilant night-time monitoring."
        imageSrc="/images/day-campus-entrance.jpg"
        imageAlt="IGNITE campus entrance"
      />

      <StatementBanner
        heading="Why It Matters"
        text="At IGNITE Junior College, we believe that true learning happens when the mind, body, and spirit are aligned. Our campus culture nurtures rigorous academics alongside well-being—fostering students who feel supported, secure, and inspired, every single day."
      />
    </main>
  );
}
