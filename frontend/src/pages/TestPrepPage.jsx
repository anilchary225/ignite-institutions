import TPHero from "../components/TestPrepPageComponents/TPHero";
import TPBanners from "../components/TestPrepPageComponents/TPBanners";
import TPComparison from "../components/TestPrepPageComponents/TPComparison";
import TPContact from "../components/TestPrepPageComponents/TPContact";

export default function TestPrepPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      <TPHero />
      <TPBanners />
      <TPComparison />
      <TPContact />
    </div>
  );
}
