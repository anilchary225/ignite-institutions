# Ignite deployment handoff

The deployable website is `frontend/` inside the whole-project repository. The Express API is a separate service in `backend/`.

## Frontend host settings

- Use the Git repository integration and choose `frontend` as the root directory.
- Framework: Vite. Node.js: 22.x (22.12 or newer).
- Install: `npm ci`. Build: `npm run build`. Output: `dist`.
- Set `VITE_API_BASE_URL=https://api.ignite.academy/api` if that is the deployed API origin. Client environment values are public; keep all credentials on the backend.
- Enable **Git LFS** in Vercel Project Settings → Git before deploying, then redeploy. The media preflight intentionally fails if the checkout still contains LFS pointers. See https://vercel.com/docs/project-configuration/git-settings.
- Use the Git integration for this media-heavy repository. `public/` is approximately 1.2 GiB, so avoid uploading the whole source through the CLI; CLI source-upload limits are documented at https://vercel.com/docs/limits.
- Set `www.ignite.academy` as the primary domain. Configure the apex domain and any host-provided alternative URL to redirect to it, using HTTPS. DNS/domain configuration must be completed on the host.

`frontend/vercel.json` provides clean URLs, security headers, and permanent redirects from both former cricket album URLs to the combined sports album. Valid pages are emitted as individual HTML files. Keep a real 404 response for unknown URLs.

## Backend host settings

- Deploy `backend/` as a persistent Node service. Install with `npm ci`; start with `npm start`.
- Set `NODE_ENV=production`, `MONGODB_URI`, a strong `JWT_SECRET`, and the mail/admin values from `backend/.env.example` through the host's secret settings.
- Set `FRONTEND_URL=https://www.ignite.academy`, `FRONTEND_URLS=https://www.ignite.academy,https://ignite.academy`, and `SITE_URL=https://www.ignite.academy`.
- Serve the API at `https://api.ignite.academy` so production admin cookies remain on the same site as the frontend. CORS must allow the exact frontend origin. Preview domains require explicit CORS configuration before testing authenticated flows there.
- Check `/api/health` returns HTTP 200 with `ok: true` after MongoDB connects. Frontend builds do not prove the deployed API, database or email service is configured.

## Release checks

Run from `frontend/`:

```sh
npm run build
npm run lint
```

The build checks media readability/LFS hydration, all gallery assets and video posters, image captions, route metadata, canonical URLs, indexing rules and generated HTML. Lint currently reports pre-existing unused-code/export warnings; resolve new errors before release.

After deployment, verify a homepage, course, merged sports album and photo album by direct URL and refresh. Confirm the old cricket URLs redirect, unknown URLs return 404, and `/robots.txt` and `/sitemap.xml` return the generated production files. Test the admissions form and admin login with authorized test data, and confirm enquiry emails arrive. Check popup closing, mobile navigation, portrait video sizing and single-video playback on a real phone.

Submit `https://www.ignite.academy/sitemap.xml` in Search Console and inspect rendered pages after the domain is live. Route HTML contains static metadata and JSON-LD; the body is still rendered by React. Coming-soon pages and admin screens remain excluded from indexing.

No push, DNS change, hosting publication, real enquiry submission or production login is performed merely by preparing this handoff.
