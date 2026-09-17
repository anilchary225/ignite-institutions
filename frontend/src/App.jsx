import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const AboutFounderPage = lazy(() => import("./pages/AboutFounderPage"));
const PersonalityDevelopmentPage = lazy(() => import("./components/AboutPageComponents/PersonalityDevelopmentPage"));
const DayAtIgnitePage = lazy(() => import("./components/AboutPageComponents/DayAtIgnitePage"));
const CampusHostelPage = lazy(() => import("./components/AboutPageComponents/CampusHostelPage"));
const AboutTestimonials = lazy(() => import("./components/AboutPageComponents/AboutTestimonials"));
const JuniorCollegePage = lazy(() => import("./pages/JuniorCollegePage"));
const MECPage = lazy(() => import("./pages/MECPage"));
const NDAPage = lazy(() => import("./pages/NDAPage"));
const AfterCollegeProgramPage = lazy(() => import("./pages/AfterCollegeProgramPage"));
const SchoolPage = lazy(() => import("./pages/SchoolPage"));
const AfterSchoolProgramPage = lazy(() => import("./pages/AfterSchoolProgramPage"));
const TestPrepPage = lazy(() => import("./pages/TestPrepPage"));
const MPCIITPage = lazy(() => import("./pages/MPCIITPage"));
const BIPCNEETPage = lazy(() => import("./pages/BIPCNEETPage"));
const IITJEELongTermPage = lazy(() => import("./pages/IITJEELongTermPage"));
const IITJEEShortTermPage = lazy(() => import("./pages/IITJEEShortTermPage"));
const NEETLongTermPage = lazy(() => import("./pages/NEETLongTermPage"));
const NEETShortTermPage = lazy(() => import("./pages/NEETShortTermPage"));
const FoundationPage = lazy(() => import("./pages/FoundationPage"));
const PhotosPage = lazy(() => import("./pages/PhotosPage"));
const ImagePage = lazy(() => import("./pages/ImagePage"));
const VideosPage = lazy(() => import("./pages/VideosPage"));
const VideoPage = lazy(() => import("./pages/VideoPage"));
const EventsPage = lazy(() => import("./pages/EventsPage"));
const EventAlbumPage = lazy(() => import("./pages/EventAlbumPage"));
const GalleryTestimonialsPage = lazy(() => import("./pages/GalleryTestimonialsPage"));
const CommunityPage = lazy(() => import("./pages/CommunityPage"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));
const StreamsPage = lazy(() => import("./pages/StreamsPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const ResultsPage = lazy(() => import("./pages/ResultsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const DocumentsPage = lazy(() => import("./pages/DocumentsPage"));
const TermsAndConditionsPage = lazy(() => import("./pages/TermsAndConditionsPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const AdminLoginPage = lazy(() => import("./pages/admin/AdminLoginPage"));
const AdminForgotPasswordPage = lazy(() => import("./pages/admin/AdminForgotPasswordPage"));
const AdminResetPasswordPage = lazy(() => import("./pages/admin/AdminResetPasswordPage"));
const AdminPasswordChangePage = lazy(() => import("./pages/admin/AdminPasswordChangePage"));
const AdminDashboardPage = lazy(() => import("./pages/admin/AdminDashboardPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "./router/BrowserRouter";
import ProtectedRoute from "./components/ProtectedRoute";

import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot/Chatbot";
import { useLocation } from "./router/BrowserRouter";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // set correct state on mount (e.g. if page loads mid-scroll)
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return createPortal(
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          aria-label="Back to top"
          className="ignite-floating-control group fixed bottom-5 right-5 z-[9999] flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-[15px] border-4 border-double border-neutral-200 bg-blue-800 text-[#e9e9e9] shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-all duration-300 hover:w-[140px] hover:justify-start sm:right-6"
        >
          <svg
            viewBox="0 0 384 512"
            className="h-3 w-3 shrink-0 transition-transform duration-300 group-hover:-translate-y-[200%]"
            aria-hidden="true"
          >
            <path
              fill="currentColor"
              d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
            />
          </svg>
          <span className="pointer-events-none absolute inset-y-0 left-0 flex w-full items-center justify-center whitespace-nowrap pl-1 text-[0px] font-medium text-[#e9e9e9] opacity-0 transition-all duration-300 group-hover:text-[15px] group-hover:opacity-100">
            Back to Top
          </span>
        </motion.button>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}

export default function App() {
  const { pathname } = useLocation();
  const showNavbar = !pathname.startsWith("/admin");
  const motionRootRef = useRef(null);

  return (
    <div ref={motionRootRef} className="min-h-screen bg-white text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      {showNavbar && pathname !== "/" && (
        <div className="relative z-100 w-full px-4">
          <Navbar />
        </div>
      )}
      <Suspense
        fallback={
          <div className="flex min-h-[50vh] items-center justify-center bg-white text-sm font-semibold text-neutral-500 dark:bg-neutral-950 dark:text-neutral-400">
            Loading…
          </div>
        }
      >
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeInOut" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<AboutPage />} />
        <Route path='/about/founder'
        element={
          <AboutFounderPage/>
        }
        />
        
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
        <Route
          path="/streams/junior-college/after-college-program"
          element={<AfterCollegeProgramPage />}
        />
        <Route path="/streams/junior-college/mec" element={<MECPage />} />
        <Route path="/streams/junior-college/nda" element={<NDAPage />} />
        <Route path="/streams/school" element={<SchoolPage />} />
        <Route path="/streams/test-prep" element={<TestPrepPage />} />
        <Route
          path="/streams/test-prep/iit-jee-long-term"
          element={<IITJEELongTermPage />}
        />
        <Route
          path="/streams/test-prep/iit-jee-short-term"
          element={<IITJEEShortTermPage />}
        />
        <Route
          path="/streams/test-prep/neet-long-term"
          element={<NEETLongTermPage />}
        />
        <Route
          path="/streams/test-prep/neet-short-term"
          element={<NEETShortTermPage />}
        />
        <Route
          path="/streams/test-prep/foundation"
          element={<FoundationPage />}
        />

        {/* Gallery */}
        <Route path="/gallery" element={<GalleryPage />} />
        <Route
          path="/gallery/photos"
          element={<PhotosPage />}
        />
        <Route path="/gallery/photos/:albumId" element={<ImagePage />} />
        <Route path="/gallery/videos" element={<VideosPage />} />
        <Route path="/gallery/all-videos" element={<VideoPage />} />
        <Route path="/gallery/events" element={<EventsPage />} />
        <Route path="/gallery/events/:eventId" element={<EventAlbumPage />} />
        <Route
          path="/gallery/testimonials"
          element={<GalleryTestimonialsPage />}
        />

        <Route path="/community" element={<CommunityPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route
          path="/streams/school/after-school-program"
          element={<AfterSchoolProgramPage />}
        />

        <Route path="/results" element={<ResultsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/documents" element={<DocumentsPage/>} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/forgot-password" element={<AdminForgotPasswordPage />} />
        <Route path="/admin/reset-password" element={<AdminResetPasswordPage />} />
        <Route path="/admin/change-password" element={<AdminPasswordChangePage />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboardPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </motion.div>
      </AnimatePresence>
      </Suspense>
      {showNavbar && <Footer/>}
      {showNavbar && <Chatbot />}
      <BackToTopButton/>
    </div>
  );
}
