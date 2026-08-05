import BIPCHero from "../components/BIPCNEETComponents/BIPCHero";
import BIPCStats from "../components/BIPCNEETComponents/BIPCStats";
import BIPCRankers from "../components/BIPCNEETComponents/BIPCRankers";
import BIPCHowIgnite from "../components/BIPCNEETComponents/BIPCHowIgnite";
import BIPCWhyIgnite from "../components/BIPCNEETComponents/BIPCWhyIgnite";
import BIPCProgram from "../components/BIPCNEETComponents/BIPCProgram";
import BIPCCareerBar from "../components/BIPCNEETComponents/BIPCCareerBar";
import BIPCFaq from "../components/BIPCNEETComponents/BIPCFaq";
import BIPCContact from "../components/BIPCNEETComponents/BIPCContact";

export default function BIPCNEETPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      <BIPCHero />
      <BIPCStats />
      <BIPCRankers />
      <BIPCHowIgnite />
      <BIPCWhyIgnite />
      <BIPCProgram />
      <BIPCCareerBar />
      <BIPCFaq />
      <BIPCContact />
    </div>
  );
}
