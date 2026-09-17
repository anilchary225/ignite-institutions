import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { submitEnquiry } from "../../lib/enquiryApi";
import { fadeUp, staggerContainer, staggerItem, defaultViewport } from "../../animations/variants";

const programmes = [
  "IIT JEE - Long Term (2 Years)",
  "IIT JEE - Short Term Crash (3–6 Months)",
  "NEET - Long Term (2 Years)",
  "NEET - Short Term Crash (3–6 Months)",
  "EAPCET - Integrated with Intermediate",
  "BITSAT - Crash Add-on (3 Months)",
  "Not sure - need counselling",
];

export default function TPContact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", programme: "", city: "", currentClass: "", message: "" });

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    submitEnquiry({ category: "test-prep", source: "test-prep-contact", payload: form })
      .then(() => setSubmitted(true))
      .catch(() => {})
      .finally(() => setSubmitting(false));
  };

  return (
    <section id="contact" className="bg-white px-6 py-20 dark:bg-neutral-950 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUp}
          className="flex items-center gap-3"
        >
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
          <span className="rounded-full bg-green-100 px-4 py-1 text-xs font-bold uppercase tracking-widest text-green-700 dark:bg-green-950/50 dark:text-green-300">
            Enrol / Enquire
          </span>
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {/* LEFT info panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
              Start your prep journey today
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-400">
              Our academic counsellors will assess your current level, understand
              your target exam, and recommend the exact programme - free, no
              obligation.
            </motion.p>

            <div className="mt-8 space-y-5">
              {[
                { Icon: Phone, title: "Call Us", detail: "+91 98765 43210" },
                { Icon: Mail,  title: "Email Us", detail: "testprep@ignitejc.edu.in" },
                { Icon: MapPin,title: "Visit Us", detail: "8+ branches across AP & Telangana. Head office: Hyderabad." },
              ].map(({ Icon, title, detail }) => (
                <motion.div key={title} variants={staggerItem} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 dark:bg-green-950/40">
                    <Icon size={16} className="text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-950 dark:text-white">{title}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA card */}
            <motion.div
              variants={fadeUp}
              className="mt-10 rounded-3xl bg-linear-to-br from-green-600 to-green-700 p-7 text-white shadow-lg"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-green-200">Free Offer</p>
              <h3 className="mt-2 text-xl font-extrabold">Scholarship Test</h3>
              <p className="mt-2 text-sm leading-6 text-green-200">
                Appear for our scholarship test and earn up to <strong className="text-white">100% fee waiver</strong> based on your performance. Open to all students.
              </p>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-5 inline-flex items-center rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-green-700 hover:bg-green-50 transition"
              >
                Register for Scholarship Test →
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-neutral-50 p-8 ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35 }}
                  className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/40">
                    <CheckCircle2 size={32} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-extrabold text-neutral-950 dark:text-white">Enquiry Received!</h3>
                  <p className="max-w-xs text-sm leading-6 text-neutral-500 dark:text-neutral-400">
                    Our counsellors will call you within 24 hours. Thank you for choosing Ignite.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => { setSubmitted(false); setForm({ name:"",phone:"",email:"",programme:"",city:"",currentClass:"",message:"" }); }}
                    className="mt-2 rounded-xl bg-green-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-green-700"
                  >
                    Submit Another
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <h3 className="text-xl font-extrabold text-neutral-950 dark:text-white">
                    Enquire About Test Prep
                  </h3>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { name: "name",  label: "Student Name *",   type: "text", required: true,  placeholder: "Full name" },
                      { name: "phone", label: "Phone Number *",   type: "tel",  required: true,  placeholder: "+91 XXXXX XXXXX" },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">{f.label}</label>
                        <input
                          type={f.type} name={f.name} value={form[f.name]} onChange={handleChange}
                          required={f.required} placeholder={f.placeholder}
                          className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">Email Address</label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange} placeholder="student@email.com"
                      className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">Programme Interested In *</label>
                      <select
                        name="programme" value={form.programme} onChange={handleChange} required
                        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-950 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                      >
                        <option value="">Select programme</option>
                        {programmes.map((p) => <option key={p}>{p}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">Current Class / Status *</label>
                      <select
                        name="currentClass" value={form.currentClass} onChange={handleChange} required
                        className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-950 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                      >
                        <option value="">Select</option>
                        <option>Class 10 (Appearing)</option>
                        <option>Class 10 (Passed)</option>
                        <option>Class 11</option>
                        <option>Class 12 (Appearing)</option>
                        <option>Class 12 (Passed) / Dropper</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">City / Branch Preference</label>
                    <input
                      type="text" name="city" value={form.city} onChange={handleChange} placeholder="e.g. Hyderabad, Vijayawada…"
                      className="w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-bold text-neutral-600 dark:text-neutral-400">Any questions or message</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} rows={3}
                      placeholder="Tell us your target rank, current preparation level, or any questions…"
                      className="w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 text-sm font-black text-white transition hover:bg-green-700 active:scale-[0.98] disabled:cursor-wait disabled:opacity-60"
                  >
                    {submitting ? "Submitting..." : <><Send size={15} /> Submit Enquiry</>}
                  </motion.button>
                  <p className="text-center text-xs text-neutral-400 dark:text-neutral-600">
                    We'll call you within 24 hours. No spam, ever.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
