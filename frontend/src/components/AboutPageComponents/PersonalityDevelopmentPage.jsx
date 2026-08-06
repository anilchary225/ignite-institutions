import React from "react";
import ApproachGrid from "./AboutComponents/ApproachGrid";
import GainList from "./AboutComponents/GainList";
import QuoteBanner from "./AboutComponents/QuoteBanner";
import Hero from './AboutComponents/Hero';
import IntroSplit from './AboutComponents/IntroSplit';

export default function PersonalityDevelopmentPage() {
  return (
    <main className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      {/* Hero */}
      <Hero
        title="Personality Development"
        imageSrc="/images/pd-hero.jpg"
      />

      {/* Intro — white */}
      <div className="bg-white dark:bg-neutral-950">
        <IntroSplit
          paragraphs={[
            "At IGNITE Junior College, we believe education is not just about marks and ranks—it's about shaping personalities that stand out with confidence, values, and resilience.",
            "Personality development at IGNITE is not a separate subject; it is an integral part of how we teach, mentor, and guide our students every day.",
          ]}
          imageSrc="/images/pd-award.jpg"
          imageAlt="Student receiving recognition on stage"
        />
      </div>

      {/* What is PD — light orange */}
      <div className="bg-orange-50 dark:bg-neutral-900">
        <IntroSplit
          heading="What is Personality Development?"
          headingColor="text-orange-600"
          paragraphs={[
            "Personality development is the conscious growth of a student's character, communication, and confidence alongside their academics.",
          ]}
          imageSrc="/images/pd-sports.jpg"
          imageAlt="Students in an activity session"
          reverse
        />
      </div>

      {/* Approach Grid — light blue */}
      <div className="bg-blue-50 dark:bg-neutral-900">
        <ApproachGrid />
      </div>

      {/* Gain List — white */}
      <div className="bg-white dark:bg-neutral-950">
        <GainList
          imageSrc="/images/pd-workshop.jpg"
          imageAlt="Students working at a hands-on session"
        />
      </div>

      {/* Why It Matters — light green */}
      <div className="bg-green-50 dark:bg-neutral-900">
        <IntroSplit
          heading="Why It Matters"
          headingColor="text-green-700"
          paragraphs={[
            "The world today values well-rounded individuals—those who can think critically, communicate effectively, and act with integrity. By weaving personality development into our culture, IGNITE ensures that students walk out not only as achievers in IIT-JEE, NEET, or boards, but also as individuals ready to succeed in life with confidence and character.",
          ]}
          imageSrc="/images/pd-group-boys.jpg"
          imageAlt="Group of students posing together"
          imageSrcSecondary="/images/pd-group-girls.jpg"
          reverse
        />
      </div>

      {/* Quote Banner — orange brand color */}
      <QuoteBanner bgColor="bg-orange-500" />
    </main>
  );
}
