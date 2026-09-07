import BIPCHero from "../components/BIPCNEETComponents/BIPCHero";
import BIPCStats from "../components/BIPCNEETComponents/BIPCStats";
import BIPCRankers from "../components/BIPCNEETComponents/BIPCRankers";
import BIPCHowIgnite from "../components/BIPCNEETComponents/BIPCHowIgnite";
import BIPCWhyIgnite from "../components/BIPCNEETComponents/BIPCWhyIgnite";
import BIPCProgram from "../components/BIPCNEETComponents/BIPCProgram";
import BIPCCareerBar from "../components/BIPCNEETComponents/BIPCCareerBar";
import BIPCFaq from "../components/BIPCNEETComponents/BIPCFaq";
import BIPCContact from "../components/BIPCNEETComponents/BIPCContact";
import MPCBIPCContactForm from "../components/BIPCNEETComponents/MPCBIPCContactForm";
import IITRoadmap from "../components/MPCIITComponents/IITRoadmap";

const phases = [
  {
    phase: "Phase 1",
    shortTitle: "BIOLOGY FOUNDATION",
    color: "green",
    icon: "🧬",
    items: [
      "Complete NCERT Biology concepts chapter-wise",
      "Strong foundation in Botany & Zoology",
      "NCERT line-by-line explanation",
      "Daily Biology practice questions",
      "Weekly chapter-wise assessments",
    ],
  },

  {
    phase: "Phase 2",
    shortTitle: "CONCEPT BUILDING",
    color: "emerald",
    icon: "🔬",
    items: [
      "Physics & Chemistry fundamentals",
      "NEET-level numerical problem solving",
      "Concept clarity through diagrams and examples",
      "Previous year NEET question analysis",
      "Regular doubt clearing sessions",
    ],
  },

  {
    phase: "Phase 4",
    shortTitle: "SYLLABUS MASTERY",
    color: "teal",
    icon: "📚",
    items: [
      "Complete Class 11 & 12 NEET syllabus coverage",
      "Advanced Biology preparation",
      "Physics numerical practice",
      "Chemistry reaction and formula mastery",
      "Subject-wise mock examinations",
    ],
  },

  {
    phase: "Phase 3",
    shortTitle: "NEET MAIN PREPARATION",
    color: "green",
    icon: "🎯",
    items: [
      "Daily NEET pattern question practice",
      "Full-length NEET mock tests",
      "Time management strategies",
      "Accuracy improvement techniques",
      "Performance analysis and tracking",
    ],
  },

  {
    phase: "Phase 5",
    shortTitle: "ADVANCED PRACTICE",
    color: "emerald",
    icon: "🏥",
    items: [
      "High-level NEET problem solving",
      "Previous 10+ years NEET question practice",
      "NCERT-based tricky questions",
      "Full syllabus revision tests",
      "Rank improvement strategies",
    ],
  },

  {
    phase: "Phase 6",
    shortTitle: "FINAL REVISION & RANK BOOST",
    color: "teal",
    icon: "🏆",
    items: [
      "Multiple full-length NEET mock tests",
      "Detailed mistake analysis",
      "Weak topic improvement sessions",
      "Final NCERT revision strategy",
      "Medical college counselling guidance",
    ],
  },
];


const colors = {
  green: {
    border: "border-green-500",
    text: "text-green-600",
    bg: "bg-green-600",
    light: "bg-green-50",
  },

  emerald: {
    border: "border-emerald-500",
    text: "text-emerald-600",
    bg: "bg-emerald-600",
    light: "bg-emerald-50",
  },

  teal: {
    border: "border-teal-500",
    text: "text-teal-600",
    bg: "bg-teal-600",
    light: "bg-teal-50",
  },
};


const heading = "NEET (BiPC) Roadmap";

const title = "Your Journey to Medical Excellence Starts Here";

const subheading =
  "A structured roadmap designed to help you crack NEET with strong Biology concepts, Physics & Chemistry mastery, regular practice, and strategic preparation for achieving your dream medical college.";

const course = "NEET (BiPC)";

export default function BIPCNEETPage() {
  return (
    <div className="min-h-screen pt-5 bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      <BIPCHero />
      <BIPCStats />
      <BIPCRankers />
      <BIPCHowIgnite />
      <BIPCWhyIgnite />
      {/* <BIPCProgram /> */}
      <IITRoadmap phases={phases} colors = {colors} heading = {heading} title = {title} subheading = {subheading} course = {course} />
      <BIPCCareerBar />
      <BIPCFaq />
      {/* <BIPCContact /> */}
      <MPCBIPCContactForm name='Doctor' course='BiPC'/>
    </div>
  );
}
