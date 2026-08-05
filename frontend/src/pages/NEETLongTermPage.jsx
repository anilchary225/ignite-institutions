import NLTHero from "../components/NEETLongTermComponents/NLTHero";
import NLTCourseOverview from "../components/NEETLongTermComponents/NLTCourseOverview";
import NLTGalleryScroll from "../components/NEETLongTermComponents/NLTGalleryScroll";
import NLTStories from "../components/NEETLongTermComponents/NLTStories";
import NLTMotivationBar from "../components/NEETLongTermComponents/NLTMotivationBar";
import NLTOutcomes from "../components/NEETLongTermComponents/NLTOutcomes";
import NLTApplicationForm from "../components/NEETLongTermComponents/NLTApplicationForm";

export default function NEETLongTermPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      {/* S1 — Hero: left content + stacked rank cards */}
      <NLTHero />

      {/* S2 — Course overview + horizontal banner */}
      <NLTCourseOverview />

      {/* S3 — Horizontal scrollable campus gallery */}
      <NLTGalleryScroll />

      {/* S4 — Student stories */}
      <NLTStories />

      {/* S5 — Motivational horizontal strap */}
      <NLTMotivationBar />

      {/* S6 — Outcomes & benefits */}
      <NLTOutcomes />

      {/* S7 — Application form */}
      <NLTApplicationForm />
    </div>
  );
}
