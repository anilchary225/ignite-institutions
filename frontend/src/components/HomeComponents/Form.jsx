import React, { useState } from "react";
import { Phone, Mail, MessageSquare, Send, User, MapPin, Clock } from "lucide-react";

const mpcOptions = ["IIT-JEE", "BITSAT", "EAPCET"];
const bipcOptions = ["NEET", "EAPCET"];

function InputField({ label, name, value, onChange, type = "text", required = false, icon: Icon }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
        )}
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full ${Icon ? "pl-10" : "pl-4"} pr-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all`}
        />
      </div>
    </div>
  );
}

function Chip({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
        active
          ? "bg-orange-500 border-orange-500 text-white shadow-sm shadow-orange-500/30"
          : "bg-white dark:bg-neutral-800 border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300 hover:border-orange-400 hover:text-orange-600 dark:hover:text-orange-400"
      }`}
    >
      {label}
    </button>
  );
}

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 98765 43210",
    color: "bg-green-700",
  },
  {
    icon: Mail,
    label: "Email",
    value: "admissions@ignitejc.com",
    color: "bg-blue-500",
  },
  {
    icon: MapPin,
    label: "Campus",
    value: "Hyderabad, Telangana",
    color: "bg-orange-500",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Sat, 9am – 6pm",
    color: "bg-red-500",
  },
];

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interests: [],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true);
    console.log(formData);
  };

  return (
    <section className="bg-neutral-50 dark:bg-neutral-900 py-16 px-4 sm:px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-md mx-auto text-sm">
            Have questions about admissions or programs? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-6">

          {/* Contact Info Panel */}
          <div className="flex flex-col gap-4">
            <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 shadow-sm">
              <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-5">Contact Information</h3>
              <div className="flex flex-col gap-4">
                {contactInfo.map(({ icon: Icon, label, value, color }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${color} text-white`}>
                      <Icon size={16} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">{label}</p>
                      <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-orange-500 p-6 text-white">
              <h4 className="font-bold text-base mb-2">Admissions 2026–28</h4>
              <p className="text-sm text-white/90 leading-relaxed">
                MPC (IIT-JEE) and BiPC (NEET) seats are filling fast. Submit your enquiry today and our team will call you within 24 hours.
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {["MPC", "BiPC", "Foundation"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/20 text-xs font-semibold">{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-700/20 flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Message Sent!</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xs">
                  Thank you for reaching out. Our admissions team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm text-orange-500 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} icon={User} />
                  <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} icon={User} />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <InputField label="Email" name="email" type="email" required value={formData.email} onChange={handleChange} icon={Mail} />
                  <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} icon={Phone} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    MPC — Intermediate
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {mpcOptions.map((opt) => (
                      <Chip key={opt} label={opt} active={formData.interests.includes(opt)} onClick={() => toggleInterest(opt)} />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                    BiPC — Intermediate
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {bipcOptions.map((opt) => (
                      <Chip key={`bipc-${opt}`} label={opt} active={formData.interests.includes(`BiPC-${opt}`)} onClick={() => toggleInterest(`BiPC-${opt}`)} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare size={16} className="absolute left-3.5 top-3 text-neutral-400" />
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you're looking for..."
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold px-6 py-2.5 rounded-lg text-sm shadow-sm shadow-orange-500/30"
                >
                  <span>Send Message</span>
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
