import { useEffect } from "react";
import { useLocation } from "../router/BrowserRouter";
import { getPageSeo, getPageSchema, SITE_NAME } from "../seo/siteSeo.js";

function setMeta(attribute, key, value) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", value);
}

export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const seo = getPageSeo(pathname);
    document.title = seo.title;
    setMeta("name", "description", seo.description);
    setMeta("name", "robots", seo.robots);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (seo.canonical) {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }
      canonical.href = seo.canonical;
      setMeta("property", "og:url", seo.canonical);
    } else {
      canonical?.remove();
      document.head.querySelector('meta[property="og:url"]')?.remove();
    }
    for (const [key, value] of Object.entries({ title: seo.title, description: seo.description, image: seo.image })) {
      setMeta("property", `og:${key}`, value);
      setMeta("name", `twitter:${key}`, value);
    }
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:image:alt", seo.imageAlt);
    setMeta("name", "twitter:image:alt", seo.imageAlt);
    setMeta("name", "twitter:card", seo.twitterCard);
    const schema = getPageSchema(seo);
    let script = document.getElementById("ignite-page-schema");
    if (schema) {
      if (!script) {
        script = document.createElement("script");
        script.id = "ignite-page-schema";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    } else script?.remove();
  }, [pathname]);
  return null;
}
