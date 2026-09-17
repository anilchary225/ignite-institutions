import { useState } from "react";
import { Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { submitEnquiry } from "../../lib/enquiryApi";
import { fadeUp, staggerContainer } from "../../animations/variants";

export default function MPCContact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", currentClass: "", message: "" });
  const change = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const inputCls = "w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-950 outline-none transition placeholder:text-neutral-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white";

  return (
    <section id="contact" className="bg-white px-6 py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
          <span className="rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300">
            Enrol Now
          </span>
          <span className="h-px flex-1 bg-neutral-100 dark:bg-neutral-800" />
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl dark:text-white">
              Ready to crack IIT JEE?
            </h2>
            <p className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-400">
              Fill in your details and our academic counsellors will call you within
              24 hours to guide you through the programme and admission process.
            </p>

            <motion.div
              variants={staggerContainer(0.1, 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 space-y-5"
            >
              {[
                { Icon: Phone,  title: "Call Us",   detail: "+91 98765 43210" },
                { Icon: Mail,   title: "Email Us",  detail: "mpc@ignitejc.edu.in" },
                { Icon: MapPin, title: "Visit Us",  detail: "8+ branches across AP & Telangana. Head office: Hyderabad." },
              ].map(({ Icon, title, detail }) => (
                <motion.div key={title} variants={fadeUp} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950/40">
                    <Icon size={16} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-950 dark:text-white">{title}</p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 rounded-3xl bg-blue-700 p-7 text-white shadow-lg"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-blue-200">Limited Time</p>
              <h3 className="mt-2 text-xl font-extrabold">Scholarship Test - Register Free</h3>
              <p className="mt-2 text-sm leading-6 text-blue-200">Appear for our scholarship test and earn up to <strong className="text-white">100% fee waiver</strong>. Open to all Class 10 students.</p>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="#"
                className="mt-5 inline-flex items-center rounded-xl bg-white px-5 py-2.5 text-sm font-black text-blue-700 hover:bg-amber-400 hover:text-white transition"
              >
                Register for Scholarship Test →
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl bg-neutral-50 p-8 ring-1 ring-neutral-100 dark:bg-neutral-900 dark:ring-neutral-800 shadow-sm"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex h-full flex-col items-center justify-center gap-4 py-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/40"
                  >
                    <CheckCircle2 size={32} className="text-emerald-600" />
                  </motion.div>
                  <h3 className="text-xl font-extrabold text-neutral-950 dark:text-white">Enquiry Received!</h3>
                  <p className="max-w-xs text-sm leading-6 text-neutral-500">Our counsellors will call you within 24 hours. Thank you for choosing Ignite.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name:"",phone:"",email:"",city:"",currentClass:"",message:"" }); }} className="mt-2 rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-bold text-white hover:bg-blue-700 transition">
                    Submit Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitting(true);
                    submitEnquiry({ category: "mpc-iit", source: "mpc-contact", payload: form })
                      .then(() => setSubmitted(true))
                      .catch(() => {})
                      .finally(() => setSubmitting(false));
                  }}
                  className="space-y-5"
                >
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

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-black text-white transition hover:bg-blue-700"
                  >
                    {submitting ? "Submitting..." : (<><Send size={15} /> Submit Enquiry</>)}
                  </motion.button>
                  <p className="text-center text-xs text-neutral-400">We'll call you within 24 hours. No spam, ever.</p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
