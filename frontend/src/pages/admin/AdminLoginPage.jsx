import { useState } from "react";
import { RouteLink } from "../../router/BrowserRouter";
import { useNavigate } from "../../router/BrowserRouter";
import { adminRequest } from "../../lib/enquiryApi";

function LoginLoader() {
  return (
    <div className="relative flex h-48 items-center justify-center sm:h-56 lg:h-64">
      <style>{`
        .jimu-primary-loading {
          text-indent: -9999em;
          margin: auto;
          position: absolute;
          right: calc(50% - 6.8px);
          top: calc(50% - 16px);
          animation-delay: 0.16s !important;
        }
        .jimu-primary-loading:before,
        .jimu-primary-loading:after {
          position: absolute;
          top: 0;
          content: '';
        }
        .jimu-primary-loading:before {
          left: -19.992px;
        }
        .jimu-primary-loading:after {
          left: 19.992px;
          animation-delay: 0.32s !important;
        }
        .jimu-primary-loading:before,
        .jimu-primary-loading:after,
        .jimu-primary-loading {
          background: #ea580c;
          animation: loading-keys-app-loading 0.8s infinite ease-in-out;
          width: 13.6px;
          height: 32px;
        }
        @keyframes loading-keys-app-loading {
          0%,
          80%,
          100% {
            opacity: 0.75;
            box-shadow: 0 0 #ea580c;
            height: 32px;
          }
          40% {
            opacity: 1;
            box-shadow: 0 -8px #ea580c;
            height: 40px;
          }
        }
      `}</style>
      <div className="jimu-primary-loading" />
    </div>
  );
}

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const result = await adminRequest("/admin/login", { method: "POST", body: JSON.stringify(form) });
      navigate(result.mustChangePassword ? "/admin/change-password" : "/admin");
    } catch (err) {
      setError(err.response?.data?.message || err.message);
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-neutral-950">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left panel - campus image, hidden below lg */}
        <div className="relative hidden overflow-hidden lg:block">
          <img
            src="/assets/images/events/HomeCardsImages/homecard3.webp"
            alt="Ignite Junior College campus"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-neutral-950/90 via-neutral-950/40 to-neutral-950/10" />
          <div className="absolute inset-0 bg-linear-to-r from-orange-950/30 via-transparent to-transparent" />

          <div className="relative flex h-full flex-col justify-between p-8 xl:p-12">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-white backdrop-blur-sm ring-1 ring-white/20">
              Admin Portal
            </span>

            <div className="max-w-md">
              <p className="text-2xl font-extrabold leading-[1.15] text-white xl:text-3xl">
                Manage enquiries, results, and campus content — all from one place.
              </p>
              <p className="mt-4 text-sm leading-6 text-white/60">
                Access restricted to authorized Ignite Junior College staff.
              </p>
            </div>
          </div>
        </div>

        {/* Right panel - logo + form */}
        <div className="flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 md:px-12 lg:px-16 xl:px-20">
          <div className="mx-auto w-full max-w-sm">
            {/* Mobile-only banner strip, since the image panel is hidden below lg */}
            <div className="mb-8 -mx-5 h-28 overflow-hidden sm:-mx-8 sm:h-36 sm:rounded-2xl md:-mx-12 lg:hidden">
              <div className="relative h-full w-full">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80"
                  alt="Ignite Junior College campus"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                <span className="absolute bottom-3 left-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-sm ring-1 ring-white/20 sm:left-5">
                  Admin Portal
                </span>
              </div>
            </div>

            <img
              src="/favicon_io (1)/android-chrome-512x512.png"
              alt="Ignite Junior College"
              className="h-12 w-12 rounded-2xl shadow-sm sm:h-14 sm:w-14"
            />

            <h1 className="mt-6 text-xl font-extrabold text-neutral-950 sm:mt-8 sm:text-2xl dark:text-white">
              Admin sign in
            </h1>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              {loading ? "Checking your credentials..." : "Enter your credentials to access the dashboard."}
            </p>

            {loading ? (
              <LoginLoader />
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:mt-8">
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-950 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                    placeholder="you@ignitejc.com"
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                  />
                </div>

                <div>
                  <label htmlFor="password" className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-950 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
                  />
                </div>

                {error && (
                  <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm font-medium text-rose-600 dark:bg-rose-950/40 dark:text-rose-400">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full rounded-xl bg-orange-600 px-4 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-500"
                >
                  Sign in
                </button>

                <div className="pt-2 text-center text-sm text-neutral-500 dark:text-neutral-400">
                  <RouteLink className="font-semibold text-orange-600 hover:underline dark:text-orange-400" to="/admin/forgot-password">
                    Forgot password?
                  </RouteLink>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
