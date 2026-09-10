import React, { useState } from "react";
import {
  Phone,
  Mail,
  MessageSquare,
  Send,
  User,
  MapPin,
  Clock,
} from "lucide-react";
import { submitEnquiry } from "../../lib/enquiryApi";

const mpcOptions = ["IIT-JEE", "BITSAT", "EAPCET"];
const bipcOptions = ["NEET", "EAPCET"];

function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
  icon: Icon,
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wide"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400"
          />
        )}
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`w-full ${
            Icon ? "pl-9" : "pl-3"
          } pr-3 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all`}
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
      className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
        active
          ? "bg-orange-500 border-orange-500 text-white shadow-sm"
          : "bg-white dark:bg-neutral-700 border-neutral-200 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300 hover:border-orange-400 hover:text-orange-600"
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
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interests: [],
    message: "",
  });
  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (formData.interests.length === 0) {
      newErrors.interests = "Please select at least one course";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const toggleInterest = (value) =>
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter((i) => i !== value)
        : [...prev.interests, value],
    }));


  const handleChange = (e) => {
    const { name, value } = e.target;

    // console.log("Changed:", name, value);

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    setLoading(true);
    setSubmitStatus("");

    try {
      const isValid = validateForm();
      if (!isValid) {
        setSubmitStatus("Please fix the highlighted fields.");
        return;
      }
      await submitEnquiry({ category: "contact", source: "home-form", payload: formData });
      setSubmitted(true);
      setSubmitStatus("Form submitted successfully.");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", interests: [], message: "" });
      setErrors({});
    } catch (error) {
      setSubmitStatus(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-800 py-14 px-4 sm:px-8 sm:py-16 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-2">
            Get In Touch
          </span>
          <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
            Contact Us
          </h2>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto">
            Have questions about admissions or programs? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-6">
          {/* Left panel */}
          <div className="flex flex-col gap-4">
            <div className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-5 shadow-sm">
              <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-4">
                Contact Information
              </h3>
              <div className="flex flex-col gap-4">
                {contactInfo.map(({ icon: Icon, label, value, color }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${color} text-white`}
                    >
                      <Icon size={15} />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
                        {label}
                      </p>
                      <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-orange-500 p-5 text-white">
              <h4 className="font-bold text-sm mb-2">Admissions 2026–28</h4>
              <p className="text-xs text-white/90 leading-relaxed">
                MPC (IIT-JEE) and BiPC (NEET) seats are filling fast. Submit
                your enquiry and our team will call you within 24 hours.
              </p>
              <div className="mt-3 flex gap-2 flex-wrap">
                {["MPC", "BiPC", "Foundation"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full bg-white/20 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-neutral-50 dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-5 sm:p-7 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-green-100 dark:bg-green-700/20 flex items-center justify-center text-green-600 dark:text-green-400 text-2xl font-black">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                  Message Sent!
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs">
                  Our admissions team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-orange-500 font-semibold hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div>
                    <InputField
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      icon={User}
                    />

                    {errors.firstName && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div>
                    <InputField
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      icon={User}
                    />

                    {errors.lastName && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">

                  {/* Email */}
                  <div>
                    <InputField
                      label="Email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      icon={Mail}
                    />

                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <InputField
                      label="Phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      icon={Phone}
                    />

                    {errors.phone && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-2">
                    MPC - Intermediate
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {mpcOptions.map((opt) => (
                      <Chip
                        key={opt}
                        label={opt}
                        active={formData.interests.includes(opt)}
                        onClick={() => toggleInterest(opt)}
                      />
                    ))}
                  </div>
                  {errors.interests && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.interests}
                    </p>
                  )}
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide mb-2">
                    BiPC - Intermediate
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {bipcOptions.map((opt) => (
                      <Chip
                        key={`bipc-${opt}`}
                        label={opt}
                        active={formData.interests.includes(`BiPC-${opt}`)}
                        onClick={() => toggleInterest(`BiPC-${opt}`)}
                      />
                    ))}
                  </div>
                  {errors.interests && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.interests}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold text-neutral-700 dark:text-neutral-300 uppercase tracking-wide"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare
                      size={15}
                      className="absolute left-3 top-3 text-neutral-400"
                    />
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what you're looking for..."
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none transition-all"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white font-semibold px-6 py-2.5 rounded-xl text-sm shadow-sm shadow-orange-500/20"
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <Send size={14} />}
                </button>
                {submitStatus && (
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">
                    {submitStatus}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
