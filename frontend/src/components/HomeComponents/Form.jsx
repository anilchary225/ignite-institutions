import React, { useState } from "react";
import { Phone, Mail, MessageSquare, Send, User } from "lucide-react";

const mpcOptions = ["IIT-JEE", "BITSAT", "EAPCET"];
const bipcOptions = ["NEET", "EAPCET"];

function FloatingInput({ label, name, value, onChange, type = "text", required = false, icon: Icon, placeholderText }) {
  return (
    <div className="relative">
      {Icon && (
        <Icon
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 peer-focus:text-emerald-500"
        />
      )}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholderText || " "}
        className={`peer w-full ${Icon ? "pl-11" : "pl-4"} pr-4 pt-5 pb-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all shadow-sm`}
      />
      <label
        htmlFor={name}
        className={`absolute ${Icon ? "left-11" : "left-4"} top-4.5 text-slate-500 dark:text-slate-400 text-sm transition-all duration-200 pointer-events-none
          peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-emerald-600 dark:peer-focus:text-emerald-400
          peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:text-[11px]`}
      >
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
    </div>
  );
}

function Chip({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
        active
          ? "bg-emerald-500 border-emerald-500 text-white shadow-md shadow-emerald-500/30"
          : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400"
      }`}
    >
      {label}
    </button>
  );
}

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interests: [],
    message: "",
  });

  const toggleInterest = (value) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter((i) => i !== value)
        : [...prev.interests, value],
    }));
  };

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="relative bg-linear-to-br from-sky-50 via-white to-blue-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-24 px-6 overflow-hidden transition-colors duration-300">
      {/* Ambient gradient blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300/30 dark:bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-200/40 dark:bg-orange-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.3em] text-emerald-600 dark:text-emerald-400 uppercase">
            Get In Touch
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Let's Connect
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-lg mx-auto">
            We'd love to hear from you. Fill out the form below and our team
            will get back to you shortly.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="backdrop-blur-xl bg-white/70 dark:bg-white/5 border border-white/60 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl space-y-8"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <FloatingInput
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              icon={User}
            //   placeholderText="e.g. Sanjana"
            />
            <FloatingInput
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              icon={User}
            //   placeholderText="e.g. Reddy"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <FloatingInput
              label="Email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              icon={Mail}
            //   placeholderText="you@example.com"
            />
            <FloatingInput
              label="Phone Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              icon={Phone}
            //   placeholderText="+91 98765 43210"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
              MPC — Intermediate
            </p>
            <div className="flex flex-wrap gap-3">
              {mpcOptions.map((opt) => (
                <Chip
                  key={opt}
                  label={opt}
                  active={formData.interests.includes(opt)}
                  onClick={() => toggleInterest(opt)}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
              BiPC — Intermediate
            </p>
            <div className="flex flex-wrap gap-3">
              {bipcOptions.map((opt) => (
                <Chip
                  key={`bipc-${opt}`}
                  label={opt}
                  active={formData.interests.includes(`BiPC-${opt}`)}
                  onClick={() => toggleInterest(`BiPC-${opt}`)}
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <MessageSquare
              size={18}
              className="absolute left-4 top-2 text-slate-400 dark:text-slate-500"
            />
            <textarea
              name="message"
              rows={4}
            //   placeholder="Tell us a bit about what you're looking for..."
              value={formData.message}
              onChange={handleChange}
              id="message"
              className="peer w-full pl-11 pr-4 pt-5 pb-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none transition-all shadow-sm"
            />
            <label
              htmlFor="message"
              className="absolute left-11 top-2 text-slate-500 dark:text-slate-400 text-sm transition-all duration-200 pointer-events-none
                peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-emerald-600 dark:peer-focus:text-emerald-400
                peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-[11px]"
            >
              Message
            </label>
          </div>

          <button
            type="submit"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-600/30"
          >
            <span>Submit</span>
            <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </form>
      </div>
    </section>
  );
}