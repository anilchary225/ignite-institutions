import MPCHero from "../components/MPCIITComponents/MPCHero";
import MPCStats from "../components/MPCIITComponents/MPCStats";
import MPCRankers from "../components/MPCIITComponents/MPCRankers";
import MPCStandOut from "../components/MPCIITComponents/MPCStandOut";
import MPCWhyIgnite from "../components/MPCIITComponents/MPCWhyIgnite";
import MPCProgram from "../components/MPCIITComponents/MPCProgram";
import MPCCareerBar from "../components/MPCIITComponents/MPCCareerBar";
import MPCFaq from "../components/MPCIITComponents/MPCFaq";
import MPCContact from "../components/MPCIITComponents/MPCContact";
import MPCBIPCContactForm from "../components/BIPCNEETComponents/MPCBIPCContactForm";
import IITRoadmap from "../components/MPCIITComponents/IITRoadmap";

const phases = [
  {
    phase: "Phase 1",
    shortTitle: "FOUNDATION",
    color: "blue",
    icon: "📚",
    items: [
      "Core concept classes in Maths, Physics, Chemistry",
      "NCERT + JEE Level 1 problems daily",
      "Weekly chapter tests",
      "Introduction to JEE pattern",
      "Board syllabus coverage in parallel",
    ],
  },

  {
    phase: "Phase 2",
    shortTitle: "CONCEPT BUILDING",
    color: "indigo",
    icon: "💡",
    items: [
      "Advanced problem solving sessions",
      "JEE Level 2 & 3 problem sets",
      "Bi-weekly full chapter mock tests",
      "Doubt clearing workshops",
      "Class 11 board exam preparation",
    ],
  },

  {
    phase: "Phase 4",
    shortTitle: "PROBLEM SOLVING",
    color: "cyan",
    icon: "🧮",
    items: [
      "Full Class 12 syllabus coverage",
      "JEE Main pattern full-length mocks",
      "Speed & accuracy drills",
      "Rank analysis and personalised plans",
      "Board + JEE time management",
    ],
  },

  {
    phase: "Phase 3",
    shortTitle: "JEE MAIN PREPARATION",
    color: "blue",
    icon: "📊",
    items: [
      "Daily JEE Main practice",
      "Application based questions",
      "Full-length mock tests",
      "Time management strategies",
      "Performance tracking",
    ],
  },

  {
    phase: "Phase 5",
    shortTitle: "JEE ADVANCED",
    color: "indigo",
    icon: "🏅",
    items: [
      "JEE Advanced level problems",
      "Advanced conceptual questions",
      "All India mock test series",
      "Rank predictor & counselling",
      "1-on-1 mentor reviews",
    ],
  },

  {
    phase: "Phase 6",
    shortTitle: "MOCK TESTS & ANALYSIS",
    color: "cyan",
    icon: "📈",
    items: [
      "Full-length JEE Main & Advanced tests",
      "Performance tracking",
      "Detailed error analysis",
      "Weak area identification",
      "Final rank improvement strategy",
    ],
  },
];

const colors = {
  blue: {
    border: "border-blue-500",
    text: "text-blue-600",
    bg: "bg-blue-600",
    light: "bg-blue-50",
  },

  indigo: {
    border: "border-indigo-500",
    text: "text-indigo-600",
    bg: "bg-indigo-600",
    light: "bg-indigo-50",
  },

  cyan: {
    border: "border-cyan-500",
    text: "text-cyan-600",
    bg: "bg-cyan-500",
    light: "bg-cyan-50",
  },
};

const heading = "IIT-JEE(MPC) Roadmap";
const title = "Your Journey to IIT Starts Here"
const subheading = "A comprehensive roadmap to help you achieve your dream of cracking the IIT JEE exam. Our structured approach ensures that you build a strong foundation, master concepts, and excel in problem-solving.";
const course = "IIT-JEE (MPC)";

export default function MPCIITPage() {
  return (
    <div className="min-h-screen pt-5 bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      <MPCHero />
      <MPCStats />
      <MPCRankers />
      <MPCStandOut />
      <MPCWhyIgnite />
      {/* <MPCProgram /> */}
      <IITRoadmap phases={phases} colors = {colors} heading = {heading} title = {title} subheading = {subheading} course = {course} />
      <MPCCareerBar />
      <MPCFaq />
      {/* <MPCContact /> */}
      <MPCBIPCContactForm name='Engineering' course = 'MPC' />
    </div>
  );
}
