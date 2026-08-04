import JCAbout from "../components/JuniorCollegeComponents/JCAbout";
import JCRankers from "../components/JuniorCollegeComponents/JCRankers";
import JCCourses from "../components/JuniorCollegeComponents/JCCourses";
import JCContact from "../components/JuniorCollegeComponents/JCContact";

export default function JuniorCollegePage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      <JCAbout />
      <JCRankers />
      <JCCourses />
      <JCContact />
    </div>
  );
}
