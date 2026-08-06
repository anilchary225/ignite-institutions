import { useState } from "react";
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, GraduationCap, MapPin, BookOpen, Calendar } from "lucide-react";

const INITIAL = { name: "", email: "", phone: "", currentClass: "", school: "", city: "", stream: "", attemptYear: "", message: "" };

function Field({ label, icon: Icon, error, required, ...props }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-bold text-neutral-700 dark:text-neutral-300">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <div className="relative">
        {Icon && <Icon size={14} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />}
        <input
          required={required}
          {...props}
          className={`w-full rounded-xl border py-3 text-sm text-neutral-950 placeholder-neutral-400 outline-none transition focus:ring-2 dark:bg-neutral-950 dark:text-white dark:placeholder-neutral-600
            ${Icon ? "pl-10 pr-4" : "px-4"}
            ${error
              ? "border-rose-400 focus:border-rose-400 focus:ring-rose-100 dark:focus:ring-rose-900/30"
              : "border-neutral-200 bg-white focus:border-amber-400 focus:ring-amber-100 dark:border-neutral-700 dark:bg-neutral-950 dark:focus:ring-amber-900/30"
            }`}
        />
      </div>
      {error && <p className="mt-1 text-xs text-rose-500">{error}</p>}
    </div>
  );
}

function SelectField({ label, icon: Icon, options, error, value, onChange, name, required }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-bold text-neutral-700 dark:text-neutral-300">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <div className="relative">
        {Icon && <Icon size={14} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />}
        <select
          name={name} value={value} onChange={onChange} required={required}
          className={`w-full appearance-none rounded-xl border py-3 text-sm text-neutral-950 outline-none transition focus:ring-2 dark:bg-neutral-950 dark:text-white
            ${Icon ? "pl-10 pr-4" : "px-4"}
            ${error
              ? "border-rose-400 focus:border-rose-400 focus:ring-rose-100"
              : "border-neutral-200 bg-white focus:border-amber-400 focus:ring-amber-100 dark:border-neutral-700 dark:focus:ring-amber-900/30"
            }`}
        >
          <option value="">Select…</option>
          {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      </div>
      {error && <p className="mt-1 text-xs text-rose-500">{error}</p>}
    </div>
  );
}

export default function JSTApplicationForm() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(p => ({ ...p, [e.target.name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())   e.name  = "Full name is required";
    if (!form.email.trim())  e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.phone.trim())  e.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Enter a valid 10-digit number";
    if (!form.currentClass)  e.currentClass = "Please select your current status";
    if (!form.city.trim())   e.city  = "City is required";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("submitting");
    await new Promise(r => setTimeout(r, 1500));
    setStatus("success");
  };

  if (status === "success") {
    return (
      <section id="apply" className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-950/30">
            <CheckCircle size={40} className="text-amber-500" />
          </div>
          <h2 className="mt-6 text-2xl font-extrabold text-neutral-950 dark:text-white">You're on the list!</h2>
          <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
            Thanks, <strong>{form.name}</strong>! Our team will call you within 24 hours to walk you through the
            batch schedule, eligibility, and fee structure.
          </p>
          <button
            onClick={() => { setStatus("idle"); setForm(INITIAL); }}
            className="mt-6 rounded-xl border border-neutral-200 px-6 py-2.5 text-sm font-bold text-neutral-600 transition hover:border-amber-400 hover:text-amber-600 dark:border-neutral-700"
          >
            Submit another
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="bg-neutral-50 px-6 py-20 dark:bg-neutral-900/40">
      <div className="mx-auto max-w-7xl">

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-700 dark:bg-amber-950/40 dark:text-amber-400">
            Apply Now
          </span>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_520px]">

          {/* left info */}
          <div>
            <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
              Your IIT Year Starts Here
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
              Fill in your details and our admissions counsellor will reach out within 24 hours
              with batch options, fee structure, and eligibility criteria.
            </p>

            {/* who should apply */}
            <div className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-900/30 dark:bg-amber-950/10">
              <p className="text-xs font-black uppercase tracking-widest text-amber-700 dark:text-amber-400">Who Should Apply?</p>
              <ul className="mt-4 space-y-3">
                {[
                  "Students currently in Class 12 (2025 JEE attempt)",
                  "Droppers targeting JEE 2025 or 2026",
                  "Students who appeared but want a better rank",
                  "Class 11 completers who want intensive 12-month prep",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-neutral-700 dark:text-neutral-300">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-200 dark:bg-amber-900">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="mt-6 space-y-4">
              {[
                { icon: Calendar, label: "Batch Starts",  value: "January, April & June batches available" },
                { icon: MapPin,   label: "Location",      value: "Ignite Academy, Hyderabad · Hostel available" },
                { icon: Phone,    label: "Helpline",      value: "+91 98765 43210 (Mon–Sat, 9am–6pm)" },
              ].map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400">
                    <Icon size={14} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">{label}</p>
                    <p className="mt-0.5 text-sm font-semibold text-neutral-800 dark:text-neutral-200">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* right form */}
          <div>
            <form onSubmit={handleSubmit} noValidate className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500">
                  <Send size={16} className="text-white" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-neutral-950 dark:text-white">Short-Term Enquiry Form</h3>
                  <p className="text-xs text-neutral-400">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Field label="Full Name" name="name" type="text" required icon={User} placeholder="Your full name" value={form.name} onChange={handleChange} error={errors.name} />
                </div>
                <Field label="Email" name="email" type="email" required icon={Mail} placeholder="you@example.com" value={form.email} onChange={handleChange} error={errors.email} />
                <Field label="Phone" name="phone" type="tel" required icon={Phone} placeholder="10-digit mobile" value={form.phone} onChange={handleChange} error={errors.phone} />
                <SelectField
                  label="Current Status" name="currentClass" required icon={GraduationCap}
                  options={["Currently in Class 12 (2025 JEE)", "Dropper — 1st attempt", "Dropper — 2nd attempt", "Class 11 completed"]}
                  value={form.currentClass} onChange={handleChange} error={errors.currentClass}
                />
                <SelectField
                  label="Target Year" name="attemptYear" icon={Calendar}
                  options={["JEE 2025", "JEE 2026"]}
                  value={form.attemptYear} onChange={handleChange} error={errors.attemptYear}
                />
                <Field label="School / Last Institution" name="school" type="text" icon={GraduationCap} placeholder="School or college name" value={form.school} onChange={handleChange} error={errors.school} />
                <Field label="City" name="city" type="text" required icon={MapPin} placeholder="Your city" value={form.city} onChange={handleChange} error={errors.city} />
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-bold text-neutral-700 dark:text-neutral-300">
                    Anything specific you'd like to know? <span className="font-normal text-neutral-400">(optional)</span>
                  </label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} rows={3}
                    placeholder="Fee structure, hostel, batch timings, previous JEE score…"
                    className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-950 placeholder-neutral-400 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100 dark:border-neutral-700 dark:bg-neutral-950 dark:text-white dark:placeholder-neutral-600"
                  />
                </div>
              </div>

              {status === "error" && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:bg-rose-950/20 dark:text-rose-400">
                  <AlertCircle size={14} /> Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 py-3.5 text-sm font-black text-white shadow-lg shadow-amber-100 transition hover:from-amber-600 hover:to-orange-600 disabled:opacity-60 dark:shadow-amber-900/20"
              >
                {status === "submitting" ? (
                  <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" /> Submitting…</>
                ) : (
                  <>Submit Enquiry <Send size={14} /></>
                )}
              </button>

              <p className="mt-3 text-center text-xs text-neutral-400">
                🔒 Your data is private. No spam. No third-party sharing.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
