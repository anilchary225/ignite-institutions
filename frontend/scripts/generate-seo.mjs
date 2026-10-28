import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { getBuildPaths, getSitemapPaths, injectSeoHead, renderRobots, renderSitemap } from "../src/seo/siteSeo.js";

const root = fileURLToPath(new URL("../", import.meta.url));
const publicOnly = process.argv.includes("--public-only");
const option = process.argv.indexOf("--out-dir");
const output = resolve(root, publicOnly ? "public" : option >= 0 ? process.argv[option + 1] : "dist");
await mkdir(output, { recursive: true });
if (!publicOnly) {
  const template = await readFile(resolve(output, "index.html"), "utf8");
  for (const path of [...getBuildPaths(), "/404"]) {
    if (!/^\/[a-z0-9/-]*$/.test(path) || path.includes("..")) throw new Error(`Unsafe page path: ${path}`);
    const target = resolve(output, path === "/" ? "index.html" : `${path.slice(1)}.html`);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, injectSeoHead(template, path));
  }
}
await writeFile(resolve(output, "sitemap.xml"), renderSitemap());
await writeFile(resolve(output, "robots.txt"), renderRobots());
console.log(`SEO: ${getSitemapPaths().length} canonical sitemap URLs${publicOnly ? "" : `; ${getBuildPaths().length + 1} HTML documents with route-specific metadata`}.`);
