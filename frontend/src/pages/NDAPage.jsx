import { RouteLink } from "../router/BrowserRouter";

export default function NDAPage() {
  return (
    <section className="min-h-screen bg-white px-4 pt-16 lg:py-25 text-neutral-950 dark:bg-neutral-950 dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-black uppercase tracking-[0.28em] text-sky-600 dark:text-sky-400">
          Coming Soon
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
          NDA Junior College
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-600 dark:text-neutral-300">
          NDA preparation is meant for students aiming at defence-oriented careers
          with a disciplined academic base, physical readiness, and entrance-focused
          mentoring. This page is coming soon and will outline the full support structure.
        </p>

        <div className="mt-8 rounded-[2rem] border border-sky-200 bg-gradient-to-br from-sky-100 via-white to-sky-200 p-6 dark:border-white/10 dark:bg-black dark:from-black dark:via-neutral-950 dark:to-sky-950/30">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-700 dark:text-sky-300">
            Highlight
          </p>
          <p className="mt-3 text-2xl font-bold text-neutral-950 dark:text-white">
            Coming soon: NDA pathway, eligibility guidance, and training roadmap.
          </p>
          <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            The final page will cover academic planning, entrance preparation, and the
            discipline required for NDA aspirants.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <RouteLink
            to="/contact"
            className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
          >
            Enquire Now
          </RouteLink>
          <RouteLink
            to="/streams/junior-college"
            className="rounded-full border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-700 transition hover:border-sky-400 hover:text-sky-600 dark:border-white/10 dark:text-neutral-300"
          >
            Back to Junior College
          </RouteLink>
        </div>
      </div>
    </section>
  );
}
