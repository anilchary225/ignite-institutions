# IGNITE frontend

React + Vite website for Ignite Junior College & Schools. Canonical origin: https://www.ignite.academy.

## Local development

```sh
npm ci
npm run dev
```

If this checkout contains Git LFS media pointers, download the real media with `git lfs pull` before building. Do not deploy pointer files as video assets.

Copy `.env.example` to `.env.local` only if an API override is needed. `VITE_API_BASE_URL` is a public client-side URL, never a place for credentials. The API must permit the deployed frontend origin and credentialed requests. Confirm production cookie/CORS settings on the backend before launch.

## Production build

```sh
npm run build
npm run preview
```

Deploy `dist/`, not the source directory or a stale earlier build. The build checks media, regenerates SEO files, bundles the app, emits an HTML document for every supported route and checks the output. Existing Analytics/Tag Manager and organization schema in `index.html` are preserved.

## SEO source of truth

- `src/seo/siteSeo.js`: page metadata, canonical origin, indexing policy and page/breadcrumb schema.
- `src/data/eventGalleryData.js`: valid album IDs, titles, descriptions and images.
- `src/components/Seo.jsx`: updates the same metadata after client navigation.
- `scripts/generate-seo.mjs`: generates sitemap/robots and built route HTML.

```sh
npm run seo:generate
npm run check:seo
```

Add metadata when adding an App route. Missing route metadata fails the build check. New albums are included automatically. Keep meaningful URL slugs stable; renamed published URLs require hosting redirects.

Event pages are the preferred search URLs. Photo detail views stay accessible with canonicals pointing to the corresponding event page and are omitted from the sitemap. `/blogs`, `/streams/junior-college/mec` and `/streams/junior-college/nda` remain `noindex, follow` while they show coming-soon content. Remove completed pages from `DRAFT_PATHS` when their content is ready. Admin pages and unknown URLs are noindex.

Each built HTML file contains its own metadata and JSON-LD before JavaScript executes. **The page body still renders in React; this is static metadata generation, not full SSR/content prerendering.** If full body prerendering is added later, retain this same SEO data source and verify animations, forms and dialogs after hydration.

## Hosting

The supplied `vercel.json` uses `npm run build`, output `dist`, clean URLs and no trailing slash. Supported routes have real HTML files, so direct links do not require a blanket SPA rewrite. `404.html` handles unmatched URLs; do not rewrite every unknown URL to a 200 homepage. On other static hosts, configure equivalent extensionless-HTML lookup and a real 404 response.

Configure the primary domain to match `SITE_URL` and redirect alternate domains in the hosting dashboard. Preserve HTTPS. Check Git LFS download support in the deployment environment. Do not change the canonical origin independently in sitemap, robots, JSON-LD and React.

## Release verification

1. Inspect homepage, a course, an event, a photo detail view and admin login through direct URLs and browser refresh.
2. View source: check one title, description and canonical; validate JSON-LD with Google's Rich Results Test.
3. Check `/sitemap.xml`, `/robots.txt`, an unknown URL's 404 status, and non-www/www redirects on the deployed host.
4. Verify mobile layout, videos, course dialogs, event popup and the contact form. Make a real enquiry only with an authorized test submission.
5. Confirm API CORS/cookies and admissions export against the production backend.
6. Check Analytics/Tag Manager configuration for duplicate events, then submit the sitemap in Search Console and inspect rendered pages. Correct code does not itself prove indexing or ranking improvements.

Full content prerendering, live hosting redirects, Search Console indexing, backend settings and final real-device performance still require separate verification.
