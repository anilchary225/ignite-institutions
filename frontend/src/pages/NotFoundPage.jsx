import { RouteLink } from "../router/BrowserRouter";

export default function NotFoundPage() {
  return (
    <main className="grid min-h-[65vh] place-items-center px-6 py-24 text-center">
      <div className="max-w-xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-500">Error 404</p>
        <h1 className="mt-4 text-5xl font-black tracking-tight text-neutral-950 dark:text-white sm:text-7xl">Page not found</h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-7 text-neutral-600 dark:text-neutral-400">The page you requested may have moved or the address may be incorrect.</p>
        <RouteLink to="/" className="mt-8 inline-flex rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Return home</RouteLink>
      </div>
    </main>
  );
}
