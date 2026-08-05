import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import JuniorCollegePage from "./pages/JuniorCollegePage";
import SchoolPage from "./pages/SchoolPage";
import TestPrepPage from "./pages/TestPrepPage";
import MPCIITPage from "./pages/MPCIITPage";
import BIPCNEETPage from "./pages/BIPCNEETPage";
import StreamsPage from "./pages/StreamsPage";
import GalleryPage from "./pages/GalleryPage";
import ResultsPage from "./pages/ResultsPage";
import ContactPage from "./pages/ContactPage";
import PageShell from "./components/PageShell";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "./router/BrowserRouter";
import PersonalityDevelopmentPage from './components/AboutPageComponents/PersonalityDevelopmentPage';
import DayAtIgnitePage from './components/AboutPageComponents/DayAtIgnitePage';
import CampusHostelPage from './components/AboutPageComponents/CampusHostelPage';
import Testimonials from "./components/HomeComponents/Testimonials";
import AboutTestimonials from "./components/AboutPageComponents/AboutTestimonials";
import Footer from "./components/Footer";

function SectionPage({ title, description }) {
  return (
    <div className="min-h-screen bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      <PageShell title={title} description={description} showBack />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/about/personality-development"
          element={
            <PersonalityDevelopmentPage/>
          }
        />
        <Route
          path="/about/daya-at-ignite"
          element={
            <DayAtIgnitePage/>
          }
        />
        <Route
          path="/about/campus-hostel-facilities"
          element={
            <CampusHostelPage/>
          }
        />
        <Route
          path="/about/testimonials"
          element={
            <AboutTestimonials/>
          }
        />

        {/* Streams */}
        <Route path="/streams" element={<StreamsPage />} />
        <Route path="/streams/junior-college" element={<JuniorCollegePage />} />
        <Route
          path="/streams/junior-college/mpc-iit-coaching"
          element={<MPCIITPage />}
        />
        <Route
          path="/streams/junior-college/bipc-neet-coaching"
          element={<BIPCNEETPage />}
        />
        <Route path="/streams/school" element={<SchoolPage />} />
        <Route path="/streams/test-prep" element={<TestPrepPage />} />
        <Route
          path="/streams/test-prep/iit-jee-long-term"
          element={
            <SectionPage
              title="IIT JEE Long Term"
              description="Multi-year preparation for IIT-JEE Main and Advanced."
            />
          }
        />
        <Route
          path="/streams/test-prep/iit-jee-short-term"
          element={
            <SectionPage
              title="IIT JEE Short Term"
              description="Short-term intensive preparation track for IIT-JEE."
            />
          }
        />
        <Route
          path="/streams/test-prep/neet-long-term"
          element={
            <SectionPage
              title="NEET Long Term"
              description="Multi-year preparation for NEET."
            />
          }
        />
        <Route
          path="/streams/test-prep/neet-short-term"
          element={
            <SectionPage
              title="NEET Short Term"
              description="Short-term intensive preparation track for NEET."
            />
          }
        />
        <Route
          path="/streams/test-prep/foundation"
          element={
            <SectionPage
              title="Foundation"
              description="Early foundation course for future competitive prep."
            />
          }
        />

        {/* Gallery */}
        <Route path="/gallery" element={<GalleryPage />} />
        <Route
          path="/gallery/photos"
          element={
            <SectionPage title="Photos" description="Campus photos and event galleries." />
          }
        />
        <Route
          path="/gallery/videos"
          element={
            <SectionPage title="Videos" description="Campus videos and highlights." />
          }
        />
        <Route
          path="/gallery/events"
          element={
            <SectionPage title="Events" description="Events and student activities." />
          }
        />
        <Route
          path="/gallery/testimonials"
          element={
            <SectionPage
              title="Gallery Testimonials"
              description="Testimonials featured in the gallery section."
            />
          }
        />

        <Route path="/results" element={<ResultsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}