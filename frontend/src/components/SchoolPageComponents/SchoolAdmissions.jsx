import { useState } from "react";
import { Bell, BellRing, CheckCircle2, Clock, Mail } from "lucide-react";

export default function SchoolAdmissions() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    class: "",
    phone: "",
    email: "",
  });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="admissions" className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl">

        {/* closed notice banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-800 to-neutral-950 px-8 py-10 text-center dark:from-neutral-900 dark:to-neutral-950">
          {/* subtle pattern */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(124,58,237,0.15),transparent_60%),radial-gradient(circle_at_80%_50%,rgba(79,70,229,0.1),transparent_60%)]" />

          <div className="relative">
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/10 ring-2 ring-amber-400/30">
                <Clock size={32} className="text-amber-400" />
              </div>
            </div>

            <h2 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
              Admissions Are Currently{" "}
              <span className="text-amber-400">Closed</span>
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base leading-7 text-neutral-400">
              We're getting our classrooms, teachers, and activities ready for
              the next academic year. Admissions for{" "}
              <strong className="text-white">2025–26</strong> will open
              shortly — register below and you'll be the{" "}
              <strong className="text-white">first to know</strong>.
            </p>

            {/* what you get by registering */}
            <div className="mx-auto mt-8 flex flex-wrap justify-center gap-4">
              {[
                "Priority notification when admissions open",
                "Early-bird seat reservation",
                "Free school tour invitation",
                "Counsellor call to answer questions",
              ].map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white"
                >
                  <BellRing size={12} className="text-amber-400" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* notify me form */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800">
          <div className="grid lg:grid-cols-[1fr_1.4fr]">
            {/* left info */}
            <div className="bg-violet-600 px-8 py-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                <Bell size={22} className="text-white" />
              </div>
              <h3 className="mt-5 text-2xl font-extrabold text-white">
                Notify me when admissions open
              </h3>
              <p className="mt-3 text-sm leading-7 text-violet-200">
                Leave your details and our team will contact you as soon as the
                admission process begins. No spam — ever.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "We'll SMS & email you when admissions open",
                  "Priority slot for early registrations",
                  "One free counselling call included",
                  "Campus visit scheduled at your convenience",
                ].map((p) => (
                  <div key={p} className="flex items-start gap-2.5 text-sm text-violet-100">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-violet-300" />
                    {p}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3">
                <Mail size={16} className="shrink-0 text-violet-300" />
                <p className="text-xs text-violet-200">
                  admissions@igniteschool.edu.in
                </p>
              </div>
            </div>

            {/* right form */}
            <div className="px-8 py-10">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center py-8">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/40">
                    <CheckCircle2 size={32} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-extrabold text-neutral-950 dark:text-white">
                    You're on the list! 🎉
                  </h3>
                  <p className="max-w-xs text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                    We'll notify you the moment admissions open for 2025–26.
                    Thank you for choosing Ignite School.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ parentName: "", childName: "", class: "", phone: "", email: "" }); }}
                    className="mt-2 rounded-xl bg-violet-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-violet-700"
                  >
                    Register Another Child
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-extrabold text-neutral-950 dark:text-white">
                    Pre-Registration Form
                  </h3>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={form.parentName}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">
                        Child's Name *
                      </label>
                      <input
                        type="text"
                        name="childName"
                        value={form.childName}
                        onChange={handleChange}
                        required
                        placeholder="Child's full name"
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">
                      Applying for Class *
                    </label>
                    <select
                      name="class"
                      value={form.class}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                    >
                      <option value="">Select class</option>
                      <option>Nursery</option>
                      <option>LKG</option>
                      <option>UKG</option>
                      {Array.from({ length: 10 }, (_, i) => (
                        <option key={i + 1}>Class {i + 1}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="parent@email.com"
                        className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-black text-white transition hover:bg-violet-700 active:scale-[0.98]"
                  >
                    <Bell size={15} />
                    Notify Me When Admissions Open
                  </button>

                  <p className="text-center text-xs text-neutral-400 dark:text-neutral-600">
                    We'll contact you within 48 hours of registering. No spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
