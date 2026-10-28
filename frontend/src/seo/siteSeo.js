import { EVENT_ALBUMS, getEventAlbum } from "../data/eventGalleryData.js";

export const SITE_URL = "https://www.ignite.academy";
export const SITE_NAME = "Ignite Junior College & Schools";
export const DEFAULT_IMAGE = `${SITE_URL}/favicon_io%20(1)/android-chrome-512x512.png`;

export const pageMetadata = {
  "/": [
    "Ignite Junior College Hyderabad | IIT-JEE & NEET",
    "Explore Ignite Junior College & Schools in Hyderabad for MPC, BiPC, IIT-JEE, NEET and EAPCET preparation, school programmes and campus support."
  ],
  "/about": [
    "About Ignite Junior College & Schools",
    "Learn about Ignite Junior College & Schools, our academic approach, campus life and student-focused learning environment."
  ],
  "/about/founder": [
    "Founder | Ignite Junior College & Schools",
    "Meet the founder of Ignite Junior College & Schools and learn about the vision behind our student-first education."
  ],
  "/about/personality-development": [
    "Personality Development | Ignite",
    "Discover personality development opportunities at Ignite that help students build communication, confidence and life skills."
  ],
  "/about/daya-at-ignite": [
    "A Day at Ignite | Campus Life",
    "See a day at Ignite Junior College & Schools, from learning and mentorship to campus activities and student life."
  ],
  "/about/campus-hostel-facilities": [
    "Campus & Hostel Facilities | Ignite",
    "Explore the campus, hostel and student facilities at Ignite Junior College & Schools in Hyderabad."
  ],
  "/about/testimonials": [
    "Student & Parent Testimonials | Ignite",
    "Read testimonials from Ignite students and parents about their academic journey and campus experience."
  ],
  "/streams": [
    "Academic Programs | Ignite Junior College & Schools",
    "Explore Junior College, school, IIT-JEE, NEET, EAPCET and foundation programs at Ignite."
  ],
  "/streams/junior-college": [
    "Junior College in Hyderabad | MPC & BiPC | Ignite",
    "Explore intermediate programmes at Ignite Junior College in Hyderabad, including MPC and BiPC with entrance preparation. Contact our admissions team."
  ],
  "/streams/junior-college/mpc-iit-coaching": [
    "MPC & IIT-JEE Coaching in Hyderabad | Ignite",
    "Explore MPC with IIT-JEE preparation at Ignite in Hyderabad. Learn about the programme, study approach, assessments and academic support for students."
  ],
  "/streams/junior-college/bipc-neet-coaching": [
    "BiPC & NEET Coaching in Hyderabad | Ignite",
    "Explore BiPC with NEET preparation at Ignite in Hyderabad. Learn about the programme, subject preparation, assessments and support for medical aspirants."
  ],
  "/streams/junior-college/after-college-program": [
    "After College Program | Ignite",
    "Explore Ignite after-college programs designed to support students in competitive exam preparation."
  ],
  "/streams/junior-college/mec": [
    "MEC Programme — Coming Soon | Ignite Junior College",
    "MEC programme details at Ignite Junior College are coming soon. Contact our admissions team for current course information and enquiries."
  ],
  "/streams/junior-college/nda": [
    "NDA Programme — Coming Soon | Ignite Junior College",
    "NDA programme information at Ignite Junior College is coming soon. Contact our admissions team for current programme details and eligibility enquiries."
  ],
  "/streams/school": [
    "School Programs | Ignite",
    "Explore school education programs at Ignite with a focus on strong foundations and student development."
  ],
  "/streams/school/after-school-program": [
    "After-School Program | Ignite",
    "Explore Ignite's after-school program for academic support, enrichment and student development."
  ],
  "/streams/test-prep": [
    "IIT-JEE, NEET & Foundation Test Preparation | Ignite",
    "Compare IIT-JEE, NEET and foundation programmes at Ignite in Hyderabad. Explore long-term and short-term preparation and contact our admissions team."
  ],
  "/streams/test-prep/iit-jee-long-term": [
    "IIT-JEE Long-Term Coaching in Hyderabad | Ignite",
    "Explore long-term IIT-JEE preparation at Ignite in Hyderabad, including the course overview, learning approach, assessments and application information."
  ],
  "/streams/test-prep/iit-jee-short-term": [
    "IIT-JEE Short-Term Coaching in Hyderabad | Ignite",
    "Explore short-term IIT-JEE preparation at Ignite in Hyderabad. Review course information, focused revision and assessment support, and enquire about joining."
  ],
  "/streams/test-prep/neet-long-term": [
    "NEET Long-Term Coaching in Hyderabad | Ignite",
    "Explore long-term NEET preparation at Ignite in Hyderabad. Review the course overview, academic planning and assessment support, and make an admission enquiry."
  ],
  "/streams/test-prep/neet-short-term": [
    "NEET Short-Term Coaching in Hyderabad | Ignite",
    "Explore short-term NEET preparation at Ignite in Hyderabad. Learn about focused revision, assessment support and course information before making an enquiry."
  ],
  "/streams/test-prep/foundation": [
    "Foundation Coaching in Hyderabad | Ignite",
    "Explore foundation preparation at Ignite in Hyderabad. Learn about the programme, academic approach and support for students building their Maths and Science base."
  ],
  "/gallery": [
    "Gallery | Ignite Junior College & Schools",
    "Browse photos, videos, campus moments, student achievements and events from Ignite."
  ],
  "/gallery/photos": [
    "Photo Gallery | Ignite",
    "Browse campus, classroom, student activity and event photos from Ignite Junior College & Schools."
  ],
  "/gallery/videos": [
    "Videos | Ignite Junior College & Schools",
    "Watch videos featuring campus life, events, initiatives and student experiences at Ignite."
  ],
  "/gallery/all-videos": [
    "All Videos | Ignite",
    "Watch Ignite videos featuring events, activities, campus life and community initiatives."
  ],
  "/gallery/events": [
    "Events | Ignite Junior College & Schools",
    "Explore events, celebrations, activities and student experiences at Ignite."
  ],
  "/gallery/testimonials": [
    "Video Testimonials | Ignite",
    "Watch student and parent testimonials from Ignite Junior College & Schools."
  ],
  "/community": [
    "Community Initiatives | Ignite",
    "Explore community outreach, student initiatives and social-impact activities at Ignite."
  ],
  "/blogs": [
    "Student & Alumni Blogs — Coming Soon | Ignite",
    "The Ignite student and alumni blog is coming soon. Explore our programmes, campus information and contact options while the blog content is being prepared."
  ],
  "/results": [
    "Academic Results | Ignite",
    "Explore academic achievements and student results from Ignite Junior College & Schools."
  ],
  "/documents": [
    "Documents & Downloads | Ignite",
    "Access official documents, resources and downloads from Ignite Junior College & Schools."
  ],
  "/contact": [
    "Contact Ignite Junior College in Hyderabad | Admissions",
    "Contact Ignite Junior College & Schools in Kukatpally, Hyderabad. Find campus directions, call our team or submit an enquiry about admissions and programmes."
  ],
  "/terms-and-conditions": [
    "Terms & Conditions | Ignite",
    "Read the terms and conditions for Ignite Junior College & Schools."
  ],
  "/privacy-policy": [
    "Privacy Policy | Ignite",
    "Read the privacy policy for Ignite Junior College & Schools."
  ]
};

// These pages are accessible to visitors but still contain coming-soon content.
export const DRAFT_PATHS = new Set(["/blogs", "/streams/junior-college/mec", "/streams/junior-college/nda"]);
const adminPages = {
  "/admin": "Admissions Dashboard",
  "/admin/login": "Admin Sign In",
  "/admin/forgot-password": "Reset Admin Password",
  "/admin/reset-password": "Choose Admin Password",
  "/admin/change-password": "Change Admin Password",
};

export function normalizeSeoPath(value = "/") {
  const path = value.split(/[?#]/, 1)[0] || "/";
  return path === "/" ? "/" : path.replace(/\/+$/, "");
}

function trimDescription(text) {
  if (text.length <= 160) return text;
  const shortened = text.slice(0, 157);
  return `${shortened.slice(0, shortened.lastIndexOf(" "))}…`;
}

export function getPageSeo(input = "/") {
  const path = normalizeSeoPath(input);
  const albumMatch = path.match(/^\/gallery\/(photos|events)\/([^/]+)$/);
  const album = albumMatch ? getEventAlbum(albumMatch[2]) : null;
  let values = pageMetadata[path];
  let canonicalPath = path;
  let image = DEFAULT_IMAGE;
  let label;
  if (album) {
    const photos = albumMatch[1] === "photos";
    const albumTitle = album.id === "plantationrun" ? "Student Plantation Drive" : album.title;
    values = [
      `${albumTitle} ${photos ? "Photo Gallery" : "Event"} | Ignite`,
      trimDescription(`${photos ? "View photos from" : "Explore"} ${album.title} at IGNITE. ${album.description || "Browse the event gallery and campus moments."}`),
    ];
    // Both views remain available; the event page is the preferred search URL.
    canonicalPath = `/gallery/events/${album.id}`;
    image = album.hero || album.photos?.[0] || DEFAULT_IMAGE;
    label = albumTitle;
  }
  const admin = Object.hasOwn(adminPages, path);
  if (admin) values = [`${adminPages[path]} | Ignite`, "Authorized IGNITE administration access."];
  const known = Boolean(values);
  const indexable = known && !admin && !DRAFT_PATHS.has(path);
  const [title, description] = values || ["Page Not Found | Ignite", "The requested page could not be found. Explore IGNITE programmes, campus information or contact our team."];
  return {
    path, title, description, known, indexable,
    label: label || title.split(" | ")[0],
    canonicalPath: known && !admin ? canonicalPath : null,
    canonical: known && !admin ? `${SITE_URL}${canonicalPath}` : null,
    image: new URL(image, SITE_URL).href,
    imageAlt: album ? `${album.title} at IGNITE` : SITE_NAME,
    twitterCard: album ? "summary_large_image" : "summary",
    robots: indexable ? "index, follow" : admin || !known ? "noindex, nofollow" : "noindex, follow",
  };
}

export function getBuildPaths() {
  return [...Object.keys(pageMetadata), ...Object.keys(adminPages), ...EVENT_ALBUMS.flatMap((album) => [
    `/gallery/events/${album.id}`, `/gallery/photos/${album.id}`,
  ])];
}

export function getSitemapPaths() {
  return getBuildPaths().filter((path) => {
    const seo = getPageSeo(path);
    return seo.indexable && seo.canonicalPath === path;
  });
}

export function getPageSchema(seo) {
  if (!seo.known || !seo.canonical) return null;
  const parts = seo.canonicalPath.split("/").filter(Boolean);
  const crumbs = [{ name: "Home", item: `${SITE_URL}/` }];
  for (let index = 0; index < parts.length; index += 1) {
    const path = `/${parts.slice(0, index + 1).join("/")}`;
    const entry = getPageSeo(path);
    if (entry.known) crumbs.push({ name: entry.label, item: `${SITE_URL}${path}` });
  }
  const breadcrumbId = `${seo.canonical}#breadcrumbs`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: SITE_NAME, publisher: { "@id": `${SITE_URL}/#organization` } },
      { "@type": "WebPage", "@id": `${seo.canonical}#webpage`, url: seo.canonical, name: seo.title, description: seo.description, inLanguage: "en", isPartOf: { "@id": `${SITE_URL}/#website` }, ...(crumbs.length > 1 ? { breadcrumb: { "@id": breadcrumbId } } : {}) },
      ...(crumbs.length > 1 ? [{ "@type": "BreadcrumbList", "@id": breadcrumbId, itemListElement: crumbs.map((crumb, index) => ({ "@type": "ListItem", position: index + 1, ...crumb })) }] : []),
    ],
  };
}

export const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
const safeJson = (value) => JSON.stringify(value).replace(/</g, "\\u003c");

export function renderSeoHead(path) {
  const seo = getPageSeo(path);
  const meta = (attribute, key, value) => `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`;
  const schema = getPageSchema(seo);
  return [
    "<!-- SEO:START -->",
    `<title>${escapeHtml(seo.title)}</title>`,
    meta("name", "description", seo.description),
    meta("name", "robots", seo.robots),
    ...(seo.canonical ? [`<link rel="canonical" href="${escapeHtml(seo.canonical)}" />`, meta("property", "og:url", seo.canonical)] : []),
    meta("property", "og:title", seo.title), meta("property", "og:description", seo.description),
    meta("property", "og:type", "website"), meta("property", "og:site_name", SITE_NAME),
    meta("property", "og:image", seo.image), meta("property", "og:image:alt", seo.imageAlt),
    meta("name", "twitter:card", seo.twitterCard), meta("name", "twitter:title", seo.title),
    meta("name", "twitter:description", seo.description), meta("name", "twitter:image", seo.image),
    meta("name", "twitter:image:alt", seo.imageAlt),
    ...(schema ? [`<script id="ignite-page-schema" type="application/ld+json">${safeJson(schema)}</script>`] : []),
    "<!-- SEO:END -->",
  ].join("\n    ");
}

export function injectSeoHead(html, path) {
  const markers = /<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/;
  if (!markers.test(html)) throw new Error("Managed SEO head markers are missing from index.html");
  return html.replace(markers, () => renderSeoHead(path));
}

export function renderSitemap() {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<!-- Generated from src/seo/siteSeo.js and eventGalleryData.js. -->\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${getSitemapPaths().map((path) => `  <url><loc>${escapeHtml(`${SITE_URL}${path}`)}</loc></url>`).join("\n")}\n</urlset>\n`;
}

export function renderRobots() {
  return `User-agent: *\nAllow: /\nDisallow: /admin\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
}
