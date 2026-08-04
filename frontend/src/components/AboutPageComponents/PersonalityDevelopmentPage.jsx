import React from "react";
import ApproachGrid from "./AboutComponents/ApproachGrid";
import GainList from "./AboutComponents/GainList";
import QuoteBanner from "./AboutComponents/QuoteBanner";
import Hero from './AboutComponents/Hero';
import IntroSplit from './AboutComponents/IntroSplit';

/**
 * PersonalityDevelopmentPage — content-only sections for the
 * ignite.academy "Personality Development" page. No navbar/footer:
 * drop this inside your existing layout shell.
 *
 * Replace every imageSrc below with your own asset paths/URLs.
 */
export default function PersonalityDevelopmentPage() {
  return (
    <main className="font-body text-slate-800">
      <Hero
        title="Personality Development"
        imageSrc="/images/pd-hero.jpg"
      />

      <IntroSplit
        paragraphs={[
          "At IGNITE Junior College, we believe education is not just about marks and ranks—it's about shaping personalities that stand out with confidence, values, and resilience.",
          "Personality development at IGNITE is not a separate subject; it is an integral part of how we teach, mentor, and guide our students every day.",
        ]}
        imageSrc="/images/pd-award.jpg"
        imageAlt="Student receiving recognition on stage"
      />

      <IntroSplit
        heading="What is Personality Development?"
        headingColor="text-emerald-600"
        paragraphs={[
          "Personality development is the conscious growth of a student's character, communication, and confidence alongside their academics.",
        ]}
        imageSrc="/images/pd-sports.jpg"
        imageAlt="Students in an activity session"
        reverse
      />

      <ApproachGrid />

      <GainList
        imageSrc="/images/pd-workshop.jpg"
        imageAlt="Students working at a hands-on session"
      />

      <IntroSplit
        heading="Why It Matters"
        headingColor="text-emerald-600"
        paragraphs={[
          "The world today values well-rounded individuals—those who can think critically, communicate effectively, and act with integrity. By weaving personality development into our culture, IGNITE ensures that students walk out not only as achievers in IIT-JEE, NEET, or boards, but also as individuals ready to succeed in life with confidence and character.",
        ]}
        imageSrc="/images/pd-group-boys.jpg"
        imageAlt="Group of students posing together"
        imageSrcSecondary="/images/pd-group-girls.jpg"
      />

      <QuoteBanner />
    </main>
  );
}
