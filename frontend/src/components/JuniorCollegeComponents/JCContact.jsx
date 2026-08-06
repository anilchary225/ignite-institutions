import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

const streams = [
  "MPC — IIT JEE (Main & Advanced)",
  "BiPC — NEET UG",
  "MPC — EAPCET Focus",
  "BiPC — EAPCET Focus",
  "MPC — BITSAT Add-on",
  "Foundation (Pre-IIT / Pre-NEET)",
  "Not sure — need counselling",
];

export default function JCContact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    stream: "",
    city: "",
    message: "",
  });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // In production, replace with an API call
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl">
        {/* header */}
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <span className="rounded-full bg-violet-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-violet-700 dark:bg-violet-950/50 dark:text-violet-300">
            Join Ignite
          </span>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* left — info */}
          <div>
            <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
              Ready to start your journey?
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-400">
              Fill in the form and our academic counsellors will call you within
              24 hours to explain the right programme for your goals — no
              obligation.
            </p>

            {/* contact details */}
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 dark:bg-violet-950/40">
                  <Phone size={16} className="text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-950 dark:text-white">Call Us</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 dark:bg-violet-950/40">
                  <Mail size={16} className="text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-950 dark:text-white">Email Us</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">admissions@ignitejc.edu.in</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 dark:bg-violet-950/40">
                  <MapPin size={16} className="text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-950 dark:text-white">Visit Us</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    8+ branches across AP & Telangana.<br />
                    Head office: Hyderabad, Telangana.
                  </p>
                </div>
              </div>
            </div>

            {/* quick facts */}
            <div className="mt-10 rounded-2xl bg-violet-600 p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-violet-200">
                Why families choose Ignite
              </p>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Free academic counselling before admission",
                  "Transparent fee structure — no hidden charges",
                  "Hostel & transport available at all branches",
                  "Regular parent–teacher communication",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-violet-300" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* right — form */}
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/40">
                  <CheckCircle2 size={32} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-extrabold text-neutral-950 dark:text-white">
                  Enquiry Submitted!
                </h3>
                <p className="max-w-xs text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                  Our counsellors will call you within 24 hours. Thank you for
                  choosing Ignite Junior College.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", stream: "", city: "", message: "" }); }}
                  className="mt-2 rounded-xl bg-violet-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-violet-700"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-extrabold text-neutral-950 dark:text-white">
                  Enquire / Apply
                </h3>

                {/* name + phone */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Full name"
                      className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                    />
                  </div>
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
                </div>

                {/* email */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="student@email.com"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                  />
                </div>

                {/* stream */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">
                    Course / Stream *
                  </label>
                  <select
                    name="stream"
                    value={form.stream}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                  >
                    <option value="">Select a programme</option>
                    {streams.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* city */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">
                    City / Branch Preference
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="e.g. Hyderabad, Vijayawada…"
                    className="w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                  />
                </div>

                {/* message */}
                <div>
                  <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">
                    Any questions or message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your current class, marks, or questions…"
                    className="w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-black text-white transition hover:bg-violet-700 active:scale-[0.98]"
                >
                  <Send size={15} />
                  Submit Enquiry
                </button>

                <p className="text-center text-xs text-neutral-400 dark:text-neutral-600">
                  We'll call you within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
