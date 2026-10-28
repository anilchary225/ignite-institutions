import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { DEFAULT_IMAGE, DRAFT_PATHS, SITE_URL, getBuildPaths, getPageSeo, getPageSchema, getSitemapPaths, injectSeoHead, renderSitemap } from "../src/seo/siteSeo.js";
const root = fileURLToPath(new URL("../", import.meta.url));
const paths = getBuildPaths();
const sitemapPaths = getSitemapPaths();
assert.equal(new Set(paths).size, paths.length, "Duplicate route URLs");
const app = readFileSync(resolve(root, "src/App.jsx"), "utf8");
const patterns = [...app.matchAll(/\bpath\s*=\s*["']([^"']+)["']/g)].map((match) => match[1]);
for (const path of patterns.filter((path) => path !== "*" && !path.includes(":"))) assert(paths.includes(path), `Missing route metadata: ${path}`);
const matchesRoute = (path) => patterns.some((pattern) => pattern !== "*" && new RegExp(`^${pattern.replace(/:[^/]+/g, "[^/]+")}$`).test(path));
const titles = new Set();
const descriptions = new Set();
for (const path of paths) {
  assert(matchesRoute(path), `SEO entry without an application route: ${path}`);
  const seo = getPageSeo(path);
  assert(seo.known && seo.title && seo.description, `Incomplete metadata: ${path}`);
  if (seo.canonical) assert.equal(new URL(seo.canonical).origin, SITE_URL);
  const imagePath = decodeURIComponent(new URL(seo.image).pathname);
  assert(existsSync(resolve(root, `public${imagePath}`)), `Missing social image: ${path}: ${imagePath}`);
  const schema = getPageSchema(seo);
  if (schema) assert.equal(JSON.parse(JSON.stringify(schema))["@context"], "https://schema.org");
  if (path.startsWith("/admin")) assert(seo.robots.startsWith("noindex"));
  if (path.startsWith("/gallery/photos/")) assert.equal(seo.canonicalPath, path.replace("/photos/", "/events/"));
  if (sitemapPaths.includes(path)) {
    assert(seo.indexable && seo.canonicalPath === path, `Non-canonical sitemap URL: ${path}`);
    assert(!titles.has(seo.title), `Duplicate title: ${seo.title}`);
    assert(!descriptions.has(seo.description), `Duplicate description: ${path}`);
    titles.add(seo.title); descriptions.add(seo.description);
  }
}
for (const path of DRAFT_PATHS) assert(!getPageSeo(path).indexable && !sitemapPaths.includes(path));
assert.equal(getPageSeo("/contact/?utm_source=test#details").canonical, `${SITE_URL}/contact`);
assert.equal(getPageSeo("/gallery/events/not-a-real-album").known, false);
assert.equal(getPageSeo("/not-a-real-page").canonical, null);
assert(!sitemapPaths.some((path) => path.startsWith("/admin")));
assert(existsSync(resolve(root, `public${decodeURIComponent(new URL(DEFAULT_IMAGE).pathname)}`)));
assert.equal([...renderSitemap().matchAll(/<loc>/g)].length, sitemapPaths.length);
const template = readFileSync(resolve(root, "index.html"), "utf8");
const example = injectSeoHead(injectSeoHead(template, "/"), "/contact");
assert.equal([...example.matchAll(/<title>/g)].length, 1);
assert.equal([...example.matchAll(/rel="canonical"/g)].length, 1);
assert.equal([...example.matchAll(/name="description"/g)].length, 1);
assert.equal([...example.matchAll(/id="ignite-page-schema"/g)].length, 1);
for (const script of example.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(script[1]);
if (process.argv.includes("--dist")) {
  const option = process.argv.indexOf("--out-dir");
  const output = resolve(root, option >= 0 ? process.argv[option + 1] : "dist");
  for (const path of [...paths, "/404"]) {
    const file = resolve(output, path === "/" ? "index.html" : `${path.slice(1)}.html`);
    const html = readFileSync(file, "utf8");
    assert.equal([...html.matchAll(/<title>/g)].length, 1, file);
    assert(html.includes(`content="${getPageSeo(path).robots}"`), `Wrong robots: ${path}`);
    assert(html.includes('src="/assets/'), `Missing built entry script: ${path}`);
    if (getPageSeo(path).canonical) assert(html.includes(`href="${getPageSeo(path).canonical}"`), `Wrong built canonical: ${path}`);
  }
  assert.equal(readFileSync(resolve(output, "sitemap.xml"), "utf8"), renderSitemap());
}
console.log(`SEO checks passed: ${paths.length} routes, ${sitemapPaths.length} canonical sitemap URLs; metadata coverage, images, JSON-LD and indexing rules verified.`);
