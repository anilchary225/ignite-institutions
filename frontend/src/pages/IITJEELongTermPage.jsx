import JLTHero from "../components/IITJEELongTermComponents/JLTHero";
import JLTCourseOverview from "../components/IITJEELongTermComponents/JLTCourseOverview";
import JLTGalleryScroll from "../components/IITJEELongTermComponents/JLTGalleryScroll";
import JLTStories from "../components/IITJEELongTermComponents/JLTStories";
import JLTMotivationBar from "../components/IITJEELongTermComponents/JLTMotivationBar";
import JLTOutcomes from "../components/IITJEELongTermComponents/JLTOutcomes";
import JLTApplicationForm from "../components/IITJEELongTermComponents/JLTApplicationForm";
import MPCRankers from "../components/MPCIITComponents/MPCRankers";

export default function IITJEELongTermPage() {
  return (
    <div className="min-h-screen pt-8 bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      {/* S1 - Hero: left content + rank images */}
      <JLTHero />

      {/* S2 - Course overview + horizontal banner */}
      <JLTCourseOverview />

      {/* S3 - Horizontal scrollable image gallery */}
      <JLTGalleryScroll />
      <MPCRankers />

      {/* S4 - Student stories / top ranker profiles */}
      <JLTStories />

      {/* S5 - Motivational horizontal strap */}
      <JLTMotivationBar />

      {/* S6 - Outcomes & benefits */}
      <JLTOutcomes />

      {/* S7 - Application form */}
      <JLTApplicationForm />
    </div>
  );
}
