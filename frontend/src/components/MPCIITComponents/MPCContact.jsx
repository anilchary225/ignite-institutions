import { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";

export default function MPCContact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", currentClass: "", message: "" });
  const change = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const inputCls = "w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white";

  return (
    <section id="contact" className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
          <span className="rounded-full bg-violet-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-violet-700 dark:bg-violet-950/50 dark:text-violet-300">
            Enrol Now
          </span>
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
              Ready to crack IIT JEE?
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-400">
              Fill in your details and our academic counsellors will call you within
              24 hours to guide you through the programme and admission process.
            </p>

            <div className="mt-8 space-y-5">
              {[
                { Icon: Phone,  title: "Call Us",   detail: "+91 98765 43210" },
                { Icon: Mail,   title: "Email Us",  detail: "mpc@ignitejc.edu.in" },
                { Icon: MapPin, title: "Visit Us",  detail: "8+ branches across AP & Telangana. Head office: Hyderabad." },
              ].map(({ Icon, title, detail }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 dark:bg-violet-950/40">
                    <Icon size={16} className="text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-950 dark:text-white">{title}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-700 p-7 text-white">
              <p className="text-xs font-bold uppercase tracking-widest text-violet-200">Limited Time</p>
              <h3 className="mt-2 text-xl font-extrabold">Scholarship Test — Register Free</h3>
              <p className="mt-2 text-sm leading-6 text-violet-200">Appear for our scholarship test and earn up to <strong className="text-white">100% fee waiver</strong>. Open to all Class 10 students.</p>
              <a href="#" className="mt-5 inline-flex items-center rounded-xl bg-white px-5 py-2.5 text-sm font-black text-violet-700 hover:bg-amber-400 hover:text-white transition">
                Register for Scholarship Test →
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-neutral-50 p-8 ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/40">
                  <CheckCircle2 size={32} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-extrabold text-neutral-950 dark:text-white">Enquiry Received!</h3>
                <p className="max-w-xs text-sm leading-6 text-neutral-500">Our counsellors will call you within 24 hours. Thank you for choosing Ignite.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name:"",phone:"",email:"",city:"",currentClass:"",message:"" }); }} className="mt-2 rounded-xl bg-violet-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-violet-700">
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                <h3 className="text-xl font-extrabold text-neutral-950 dark:text-white">Apply for MPC IIT JEE</h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">Student Name *</label>
                    <input type="text" name="name" value={form.name} onChange={change} required placeholder="Full name" className={inputCls} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">Phone Number *</label>
                    <input type="tel" name="phone" value={form.phone} onChange={change} required placeholder="+91 XXXXX XXXXX" className={inputCls} />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={change} placeholder="student@email.com" className={inputCls} />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">Current Class *</label>
                    <select name="currentClass" value={form.currentClass} onChange={change} required className={inputCls}>
                      <option value="">Select</option>
                      <option>Class 10 (Appearing)</option>
                      <option>Class 10 (Passed)</option>
                      <option>Class 11</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">City / Branch</label>
                    <input type="text" name="city" value={form.city} onChange={change} placeholder="e.g. Hyderabad…" className={inputCls} />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">Questions or message</label>
                  <textarea name="message" value={form.message} onChange={change} rows={3} placeholder="Tell us your target rank or any questions…" className={`${inputCls} resize-none`} />
                </div>

                <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-black text-white transition hover:bg-violet-700 active:scale-[0.98]">
                  <Send size={15} /> Submit Enquiry
                </button>
                <p className="text-center text-xs text-neutral-400">We'll call you within 24 hours. No spam, ever.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
