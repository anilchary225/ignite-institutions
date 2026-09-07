import JSTHero from "../components/IITJEEShortTermComponents/JSTHero";
import JSTCourseOverview from "../components/IITJEEShortTermComponents/JSTCourseOverview";
import JSTGalleryScroll from "../components/IITJEEShortTermComponents/JSTGalleryScroll";
import JSTStories from "../components/IITJEEShortTermComponents/JSTStories";
import JSTMotivationBar from "../components/IITJEEShortTermComponents/JSTMotivationBar";
import JSTOutcomes from "../components/IITJEEShortTermComponents/JSTOutcomes";
import JSTApplicationForm from "../components/IITJEEShortTermComponents/JSTApplicationForm";
import MPCRankers from "../components/MPCIITComponents/MPCRankers";

export default function IITJEEShortTermPage() {
  return (
    <div className="min-h-screen pt-8 bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      {/* S1 - Hero: left content + mosaic rank grid */}
      <JSTHero />

      {/* S2 - Course overview with interactive phase timeline */}
      <JSTCourseOverview />

      {/* S3 - Horizontal scrollable campus gallery */}
      <JSTGalleryScroll />
      <MPCRankers />

      {/* S4 - Student transformation stories */}
      <JSTStories />

      {/* S5 - Motivational horizontal strap */}
      <JSTMotivationBar />

      {/* S6 - Outcomes & benefits */}
      <JSTOutcomes />

      {/* S7 - Application form */}
      <JSTApplicationForm />
    </div>
  );
}
