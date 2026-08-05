import NSTHero from "../components/NEETShortTermComponents/NSTHero";
import NSTCourseOverview from "../components/NEETShortTermComponents/NSTCourseOverview";
import NSTGalleryScroll from "../components/NEETShortTermComponents/NSTGalleryScroll";
import NSTStories from "../components/NEETShortTermComponents/NSTStories";
import NSTMotivationBar from "../components/NEETShortTermComponents/NSTMotivationBar";
import NSTOutcomes from "../components/NEETShortTermComponents/NSTOutcomes";
import NSTApplicationForm from "../components/NEETShortTermComponents/NSTApplicationForm";

export default function NEETShortTermPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      {/* S1 — Hero: left content + mosaic rank grid */}
      <NSTHero />

      {/* S2 — Course overview with interactive 4-phase timeline */}
      <NSTCourseOverview />

      {/* S3 — Horizontal scrollable campus gallery */}
      <NSTGalleryScroll />

      {/* S4 — Student transformation stories */}
      <NSTStories />

      {/* S5 — Motivational horizontal strap */}
      <NSTMotivationBar />

      {/* S6 — Outcomes & benefits */}
      <NSTOutcomes />

      {/* S7 — Application form */}
      <NSTApplicationForm />
    </div>
  );
}
