import { useState } from "react";
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, GraduationCap, MapPin, BookOpen } from "lucide-react";
import { submitEnquiry } from "../../lib/enquiryApi";

const INITIAL = { name: "", email: "", phone: "", currentClass: "", school: "", city: "", stream: "", message: "" };

function Field({ label, icon: Icon, error, required, ...props }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-bold text-neutral-700 dark:text-neutral-300">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <div className="relative">
        {Icon && <Icon size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />}
        <input
          required={required}
          {...props}
          className={`w-full rounded-xl border px-4 py-3 text-sm text-neutral-950 placeholder-neutral-400 outline-none transition focus:ring-2 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500
            ${Icon ? "pl-10" : ""}
            ${error
              ? "border-rose-400 focus:border-rose-400 focus:ring-rose-200 dark:focus:ring-rose-900"
              : "border-neutral-200 focus:border-emerald-400 focus:ring-emerald-100 dark:border-neutral-700 dark:focus:ring-emerald-900"
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
        {Icon && <Icon size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />}
        <select
          name={name} value={value} onChange={onChange} required={required}
          className={`w-full appearance-none rounded-xl border px-4 py-3 text-sm text-neutral-950 outline-none transition focus:ring-2 dark:bg-neutral-900 dark:text-white
            ${Icon ? "pl-10" : ""}
            ${error
              ? "border-rose-400 focus:border-rose-400 focus:ring-rose-200"
              : "border-neutral-200 focus:border-emerald-400 focus:ring-emerald-100 dark:border-neutral-700 dark:focus:ring-emerald-900"
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

export default function NLTApplicationForm() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(p => ({ ...p, [e.target.name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name  = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Enter a valid 10-digit number";
    if (!form.currentClass) e.currentClass = "Please select your current class";
    if (!form.city.trim())  e.city  = "City is required";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus("submitting");
    try {
      await submitEnquiry({ category: "neet-long-term", source: "neet-long-term-form", payload: form });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="apply" className="bg-white px-6 py-20 dark:bg-neutral-950">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/30">
            <CheckCircle size={40} className="text-emerald-600" />
          </div>
          <h2 className="mt-6 text-2xl font-extrabold text-neutral-950 dark:text-white">Application Received!</h2>
          <p className="mt-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400">
            Thank you, <strong>{form.name}</strong>! Our admissions team will reach out within 24 hours to guide you through next steps.
          </p>
          <button
            onClick={() => { setStatus("idle"); setForm(INITIAL); }}
            className="mt-6 rounded-xl border border-neutral-200 px-6 py-2.5 text-sm font-bold text-neutral-600 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-neutral-700"
          >
            Submit another application
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl">

        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
          <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
            Apply Now
          </span>
          <span className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
        </div>

        <div className="mt-6 grid gap-12 lg:grid-cols-2">

          {/* left - info */}
          <div>
            <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
              Begin Your AIIMS Journey Today
            </h2>
            <p className="mt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-400">
              Fill in the form and our admissions counsellor will contact you within 24 hours
              to discuss eligibility, batch dates, and fee structure for the NEET Long-Term programme.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { icon: GraduationCap, label: "Eligibility",  value: "Students in Class 10 or completing Class 10" },
                { icon: BookOpen,      label: "Batch starts", value: "April & June batches - seats fill fast" },
                { icon: MapPin,        label: "Location",     value: "Ignite Academy, Hyderabad · Hostel available" },
                { icon: Phone,         label: "Helpline",     value: "+91 98765 43210 (Mon–Sat, 9am–6pm)" },
              ].map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
                    <Icon size={15} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">{label}</p>
                    <p className="mt-0.5 text-sm font-semibold text-neutral-800 dark:text-neutral-200">{value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-emerald-50 p-5 dark:bg-emerald-950/20">
              <p className="text-xs leading-5 text-emerald-700 dark:text-emerald-300">
                🔒 Your details are safe with us. We never share personal information with third parties.
                Submitting this form creates no financial obligation.
              </p>
            </div>
          </div>

          {/* right - form */}
          <div>
            <form onSubmit={handleSubmit} noValidate className="rounded-3xl bg-neutral-50 p-8 dark:bg-neutral-900">
              <h3 className="text-lg font-extrabold text-neutral-950 dark:text-white">Application Form</h3>
              <p className="mt-1 text-xs text-neutral-500">Fields marked <span className="text-rose-500">*</span> are required.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <Field label="Full Name" name="name" type="text" required icon={User} placeholder="e.g. Ishaan Sharma" value={form.name} onChange={handleChange} error={errors.name} />
                </div>
                <Field label="Email Address" name="email" type="email" required icon={Mail} placeholder="you@example.com" value={form.email} onChange={handleChange} error={errors.email} />
                <Field label="Phone Number" name="phone" type="tel" required icon={Phone} placeholder="10-digit mobile" value={form.phone} onChange={handleChange} error={errors.phone} />
                <SelectField
                  label="Current Class" name="currentClass" required icon={GraduationCap}
                  options={["Class 9", "Class 10 (appearing)", "Class 10 (passed)", "Class 11"]}
                  value={form.currentClass} onChange={handleChange} error={errors.currentClass}
                />
                <SelectField
                  label="Preferred Stream" name="stream" icon={BookOpen}
                  options={["BiPC (Biology, Physics, Chemistry)", "MPC (if planning NEET + JEE)", "Not decided yet"]}
                  value={form.stream} onChange={handleChange} error={errors.stream}
                />
                <Field label="School / Institution" name="school" type="text" icon={GraduationCap} placeholder="Current school name" value={form.school} onChange={handleChange} error={errors.school} />
                <Field label="City" name="city" type="text" required icon={MapPin} placeholder="Your city" value={form.city} onChange={handleChange} error={errors.city} />
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-xs font-bold text-neutral-700 dark:text-neutral-300">
                    Message / Questions <span className="font-normal text-neutral-400">(optional)</span>
                  </label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} rows={3}
                    placeholder="Hostel availability, fee structure, AIIMS-specific coaching, scholarship…"
                    className="w-full resize-none rounded-xl border border-neutral-200 px-4 py-3 text-sm text-neutral-950 placeholder-neutral-400 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500"
                  />
                </div>
              </div>

              {status === "error" && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700 dark:bg-rose-950/20 dark:text-rose-400">
                  <AlertCircle size={15} /> Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-sm font-black text-white transition hover:bg-emerald-700 disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <><span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" /> Submitting…</>
                ) : (
                  <>Submit Application <Send size={15} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
