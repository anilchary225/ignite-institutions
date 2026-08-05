import MPCHero from "../components/MPCIITComponents/MPCHero";
import MPCStats from "../components/MPCIITComponents/MPCStats";
import MPCRankers from "../components/MPCIITComponents/MPCRankers";
import MPCStandOut from "../components/MPCIITComponents/MPCStandOut";
import MPCWhyIgnite from "../components/MPCIITComponents/MPCWhyIgnite";
import MPCProgram from "../components/MPCIITComponents/MPCProgram";
import MPCCareerBar from "../components/MPCIITComponents/MPCCareerBar";
import MPCFaq from "../components/MPCIITComponents/MPCFaq";
import MPCContact from "../components/MPCIITComponents/MPCContact";

export default function MPCIITPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      <MPCHero />
      <MPCStats />
      <MPCRankers />
      <MPCStandOut />
      <MPCWhyIgnite />
      <MPCProgram />
      <MPCCareerBar />
      <MPCFaq />
      <MPCContact />
    </div>
  );
}
