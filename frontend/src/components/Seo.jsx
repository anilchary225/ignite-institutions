import { useEffect } from "react";
import { useLocation } from "../router/BrowserRouter";
import { getEventAlbum } from "../data/eventGalleryData";

const SITE_URL = "https://www.ignite.academy";
const SITE_NAME = "Ignite Junior College & Schools";
const DEFAULT_IMAGE = `${SITE_URL}/favicon_io%20(1)/android-chrome-512x512.png`;

const pageMetadata = {
  "/": [
    "IIT JEE & NEET Coaching in Hyderabad | Ignite Academy",
    "Ignite Junior College & Schools in Hyderabad offers IIT JEE, NEET, EAPCET and foundation coaching, expert faculty, mentoring and campus support.",
  ],
  "/about": [
    "About Ignite Junior College & Schools",
    "Learn about Ignite Junior College & Schools, our academic approach, campus life and student-focused learning environment.",
  ],
  "/about/founder": [
    "Founder | Ignite Junior College & Schools",
    "Meet the founder of Ignite Junior College & Schools and learn about the vision behind our student-first education.",
  ],
  "/about/personality-development": [
    "Personality Development | Ignite",
    "Discover personality development opportunities at Ignite that help students build communication, confidence and life skills.",
  ],
  "/about/daya-at-ignite": [
    "A Day at Ignite | Campus Life",
    "See a day at Ignite Junior College & Schools, from learning and mentorship to campus activities and student life.",
  ],
  "/about/campus-hostel-facilities": [
    "Campus & Hostel Facilities | Ignite",
    "Explore the campus, hostel and student facilities at Ignite Junior College & Schools in Hyderabad.",
  ],
  "/about/testimonials": [
    "Student & Parent Testimonials | Ignite",
    "Read testimonials from Ignite students and parents about their academic journey and campus experience.",
  ],
  "/streams": [
    "Academic Programs | Ignite Junior College & Schools",
    "Explore Junior College, school, IIT-JEE, NEET, EAPCET and foundation programs at Ignite.",
  ],
  "/streams/junior-college": [
    "Junior College Programs | Ignite",
    "Explore intermediate junior college programs and academic pathways at Ignite in Hyderabad.",
  ],
  "/streams/junior-college/mpc-iit-coaching": [
    "MPC IIT-JEE Coaching | Ignite",
    "Explore Ignite MPC and IIT-JEE coaching with structured academic support, assessments and mentoring.",
  ],
  "/streams/junior-college/bipc-neet-coaching": [
    "BiPC NEET Coaching | Ignite",
    "Explore Ignite BiPC and NEET coaching with focused preparation, mentoring and academic support.",
  ],
  "/streams/junior-college/after-college-program": [
    "After College Program | Ignite",
    "Explore Ignite after-college programs designed to support students in competitive exam preparation.",
  ],
  "/streams/junior-college/mec": [
    "MEC Program | Ignite Junior College",
    "Explore the MEC program at Ignite Junior College and its academic opportunities for intermediate students.",
  ],
  "/streams/junior-college/nda": [
    "NDA Coaching Program | Ignite",
    "Explore Ignite's NDA preparation program for students preparing for National Defence Academy entry.",
  ],
  "/streams/school": [
    "School Programs | Ignite",
    "Explore school education programs at Ignite with a focus on strong foundations and student development.",
  ],
  "/streams/school/after-school-program": [
    "After-School Program | Ignite",
    "Explore Ignite's after-school program for academic support, enrichment and student development.",
  ],
  "/streams/test-prep": [
    "Competitive Exam Preparation | Ignite",
    "Explore IIT-JEE, NEET and foundation test-preparation programs at Ignite in Hyderabad.",
  ],
  "/streams/test-prep/iit-jee-long-term": [
    "IIT-JEE Long-Term Coaching | Ignite",
    "Explore Ignite's long-term IIT-JEE coaching program with structured preparation and mentoring.",
  ],
  "/streams/test-prep/iit-jee-short-term": [
    "IIT-JEE Short-Term Coaching | Ignite",
    "Explore Ignite's short-term IIT-JEE coaching program for focused competitive exam preparation.",
  ],
  "/streams/test-prep/neet-long-term": [
    "NEET Long-Term Coaching | Ignite",
    "Explore Ignite's long-term NEET coaching program with academic planning, assessments and mentoring.",
  ],
  "/streams/test-prep/neet-short-term": [
    "NEET Short-Term Coaching | Ignite",
    "Explore Ignite's short-term NEET coaching program for focused medical entrance preparation.",
  ],
  "/streams/test-prep/foundation": [
    "Foundation Program | Ignite",
    "Explore Ignite's foundation program for students building a strong base for future competitive exams.",
  ],
  "/gallery": [
    "Gallery | Ignite Junior College & Schools",
    "Browse photos, videos, campus moments, student achievements and events from Ignite.",
  ],
  "/gallery/photos": [
    "Photo Gallery | Ignite",
    "Browse campus, classroom, student activity and event photos from Ignite Junior College & Schools.",
  ],
  "/gallery/videos": [
    "Videos | Ignite Junior College & Schools",
    "Watch videos featuring campus life, events, initiatives and student experiences at Ignite.",
  ],
  "/gallery/all-videos": [
    "All Videos | Ignite",
    "Watch Ignite videos featuring events, activities, campus life and community initiatives.",
  ],
  "/gallery/events": [
    "Events | Ignite Junior College & Schools",
    "Explore events, celebrations, activities and student experiences at Ignite.",
  ],
  "/gallery/testimonials": [
    "Video Testimonials | Ignite",
    "Watch student and parent testimonials from Ignite Junior College & Schools.",
  ],
  "/community": [
    "Community Initiatives | Ignite",
    "Explore community outreach, student initiatives and social-impact activities at Ignite.",
  ],
  "/blogs": [
    "Education Blog | Ignite",
    "Read education guidance, academic tips and student-focused insights from Ignite.",
  ],
  "/results": [
    "Academic Results | Ignite",
    "Explore academic achievements and student results from Ignite Junior College & Schools.",
  ],
  "/documents": [
    "Documents & Downloads | Ignite",
    "Access official documents, resources and downloads from Ignite Junior College & Schools.",
  ],
  "/contact": [
    "Contact Ignite Junior College & Schools",
    "Contact Ignite Junior College & Schools in Hyderabad for admissions, programs and campus enquiries.",
  ],
  "/terms-and-conditions": [
    "Terms & Conditions | Ignite",
    "Read the terms and conditions for Ignite Junior College & Schools.",
  ],
  "/privacy-policy": [
    "Privacy Policy | Ignite",
    "Read the privacy policy for Ignite Junior College & Schools.",
  ],
};

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", url);
}

function getMetadata(pathname) {
  const albumMatch = pathname.match(/^\/gallery\/(photos|events)\/([^/]+)$/);
  if (albumMatch) {
    const album = getEventAlbum(albumMatch[2]);
    if (album) {
      const type = albumMatch[1] === "photos" ? "Photo Gallery" : "Event";
      return [`${album.title} ${type} | Ignite`, album.description, album.hero];
    }
  }

  return (
    pageMetadata[pathname] || [
      "Page Not Found | Ignite",
      "The page you requested could not be found.",
    ]
  );
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const [title, description, image = DEFAULT_IMAGE] = getMetadata(pathname);
    const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
    const albumMatch = pathname.match(/^\/gallery\/(photos|events)\/([^/]+)$/);
    const hasKnownPage =
      Boolean(pageMetadata[pathname]) ||
      Boolean(albumMatch && getEventAlbum(albumMatch[2]));
    const noindex = pathname.startsWith("/admin") || !hasKnownPage;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta(
      "property",
      "og:image",
      image.startsWith("http") ? image : `${SITE_URL}${image}`
    );
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta(
      "name",
      "twitter:image",
      image.startsWith("http") ? image : `${SITE_URL}${image}`
    );
    setCanonical(canonical);
  }, [pathname]);

  return null;
}
