import SchoolHero from "../components/SchoolPageComponents/SchoolHero";
import SchoolFoundation from "../components/SchoolPageComponents/SchoolFoundation";
import SchoolPrimary from "../components/SchoolPageComponents/SchoolPrimary";
import SchoolAdmissions from "../components/SchoolPageComponents/SchoolAdmissions";

export default function SchoolPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      <SchoolHero />
      <SchoolFoundation />
      <SchoolPrimary />
      <SchoolAdmissions />
    </div>
  );
}
