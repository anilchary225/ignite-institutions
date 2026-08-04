import { RouteLink } from "../router/BrowserRouter";

export default function PageShell({ title, description, showBack = false }) {
  return (
    <main className="relative min-h-screen bg-white px-8 py-20 text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white">
      {showBack ? (
        <RouteLink
          to="/"
          className="absolute left-8 top-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-amber-400 hover:text-white dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-200"
        >
          ← Back
        </RouteLink>
      ) : null}
      <div className={`mx-auto max-w-4xl ${showBack ? "pt-8" : ""}`}>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
          Ignite
        </p>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </main>
  );
}
