import { useEffect, useState } from "react";
import { Navigate, RouteLink } from "../router/BrowserRouter";
import { adminRequest } from "../lib/enquiryApi";

export default function ProtectedRoute({ children }) {
  const [state, setState] = useState("checking");

  useEffect(() => {
    adminRequest("/admin/me")
      .then(() => setState("authenticated"))
      .catch(() => setState("unauthenticated"));
  }, []);

  // Do not return an empty page while the session cookie is being checked.
  // A failed or slow API request used to look like the admin portal had not
  // rendered at all.
  if (state === "checking") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 text-slate-900">
        <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto h-9 w-9 animate-spin rounded-full border-4 border-slate-200 border-t-orange-600" aria-hidden="true" />
          <h1 className="mt-5 text-lg font-bold">Opening admin portal</h1>
          <p className="mt-2 text-sm text-slate-500">Checking your secure session…</p>
          <RouteLink to="/admin/login" className="mt-5 inline-block text-sm font-semibold text-orange-600 hover:underline">
            Go to sign in
          </RouteLink>
        </div>
      </main>
    );
  }
  if (state === "unauthenticated") {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
