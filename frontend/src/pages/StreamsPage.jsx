import StreamsHero from "../components/StreamsPageComponents/StreamsHero";
import InterStream from "../components/StreamsPageComponents/InterStream";
import SchoolStream from "../components/StreamsPageComponents/SchoolStream";
import TestPrepStream from "../components/StreamsPageComponents/TestPrepStream";

export default function StreamsPage() {
  return (
    <div className="min-h-screen pt-5 bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      <StreamsHero />
      <InterStream />
      <SchoolStream />
      <TestPrepStream />
    </div>
  );
}
