import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { submitEnquiry } from "../../lib/enquiryApi";

const WHATSAPP_NUMBER = "917036511111";
const classes = ["6th", "7th", "8th", "9th", "10th", "Intermediate 1st Year", "Intermediate 2nd Year", "Completed Intermediate", "Other"];
const requirements = {
  parent: ["📚 Course Details", "💰 Fee Details", "📝 Admission Process", "🏫 Campus Information", "🏠 Hostel Information", "⏰ Batch Timings", "🎯 Course Eligibility", "📞 Talk to Counsellor", "✍️ Other"],
  student: ["📚 Course Details", "💰 Fee Details", "📝 Admission Process", "⏰ Batch Timings", "🎯 Preparation Details", "🏫 Campus Information", "🏠 Hostel Information", "📞 Talk to Counsellor", "✍️ Other"],
  school: ["💰 Fee Details", "📝 Admission Process", "📘 After School Program", "🏫 Campus Information", "🏠 Hostel Information", "📞 Talk to Counsellor", "✍️ Other"],
};

const cleanLabel = (value) => value.replace(/^[^\p{L}\p{N}]+/u, "").trim();

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.54 0 .22 5.32.22 11.86c0 2.09.55 4.13 1.59 5.93L.12 24l6.36-1.67a11.84 11.84 0 0 0 5.6 1.42h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.14-3.43-8.41ZM12.09 21.74h-.01a9.84 9.84 0 0 1-5.02-1.38l-.36-.21-3.78.99 1.01-3.68-.23-.38a9.84 9.84 0 0 1-1.51-5.22c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.03 6.96 2.89a9.82 9.82 0 0 1 2.89 6.97c0 5.43-4.42 9.85-9.85 9.85Zm5.41-7.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/></svg>;
}

function BotMessage({ children }) {
  return <div className="max-w-[88%] self-start rounded-2xl rounded-tl-sm bg-emerald-50 px-3.5 py-2.5 text-sm leading-relaxed text-slate-700 dark:bg-emerald-500/10 dark:text-slate-200">{children}</div>;
}

function UserMessage({ children }) {
  return <div className="max-w-[88%] self-end rounded-2xl rounded-tr-sm bg-blue-600 px-3.5 py-2.5 text-sm leading-relaxed text-white">{children}</div>;
}

function QuickReplies({ options, onSelect }) {
  return <div className="flex flex-wrap gap-2">{options.map((option) => <button key={option} type="button" onClick={() => onSelect(option)} className="rounded-full border border-blue-200 bg-white px-3 py-2 text-left text-xs font-semibold text-blue-700 transition hover:border-blue-500 hover:bg-blue-50 dark:border-blue-500/30 dark:bg-slate-900 dark:text-blue-300 dark:hover:bg-blue-500/10">{option}</button>)}</div>;
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: "bot", text: "Welcome to Ignite Institutions! 👋\nI'm here to help you with courses, admissions, fees, and other information." }]);
  const [step, setStep] = useState("userType");
  const [data, setData] = useState({ userType: "", parentName: "", studentName: "", studentClass: "", courseCategory: "", courseType: "", phone: "", email: "", requirement: "" });
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const messagesRef = useRef(null);

  const push = (from, text) => setMessages((current) => [...current, { from, text }]);
  const update = (key, value) => setData((current) => ({ ...current, [key]: value }));

  useEffect(() => {
    if (open) messagesRef.current?.scrollTo({ top: messagesRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const askText = (value) => {
    const answer = input.trim();
    if (!answer) return;
    push("user", answer);
    setInput("");
    setError("");
    if (value === "parentName") {
      update("parentName", answer); push("bot", "What is your child's name?"); setStep("studentName");
    } else if (value === "studentName") {
      update("studentName", answer); push("bot", "Which class are you currently studying in?"); setStep("studentClass");
    } else if (value === "otherClass") {
      update("studentClass", answer); showCourseOptions(answer);
    } else if (value === "otherRequirement") {
      update("requirement", answer); showContact();
    }
  };

  const showCourseOptions = (studentClass) => {
    const school = ["6th", "7th", "8th", "9th", "10th"].includes(studentClass);
    if (school) {
      update("courseCategory", "School");
      update("courseType", studentClass);
      push("bot", "I’ll show you school-related information for your class.");
      askRequirement();
      return;
    }
    push("bot", "Which course category are you interested in?");
    setStep("courseCategory");
  };

  const chooseUserType = (value) => {
    const userType = value === "👨‍👩‍👧 Parent" ? "parent" : "student";
    update("userType", userType); push("user", value);
    push("bot", userType === "parent" ? "Great! I'll help you find the right program for your child. May I know your name?" : "Great! May I know your name?");
    setStep(userType === "parent" ? "parentName" : "studentName");
  };

  const chooseClass = (value) => {
    push("user", value); setError("");
    if (value === "Other") { push("bot", "Please type the current class or education level."); setStep("otherClass"); return; }
    update("studentClass", value); showCourseOptions(value);
  };

  const chooseCourseCategory = (value) => {
    const school = ["6th", "7th", "8th", "9th", "10th"].includes(data.studentClass);
    push("user", value); setError("");
    if (value === "Talk to Counsellor") { update("courseCategory", "Counsellor consultation"); update("courseType", "Talk to Counsellor"); askRequirement(); return; }
    if (school && value === "School") { update("courseCategory", "School"); update("courseType", data.studentClass); askRequirement(); return; }
    if (school && value === "Foundation") { update("courseCategory", "Foundation / Intermediate"); update("courseType", "Foundation"); askRequirement(); return; }
    if (value === "Foundation - Intermediate") { update("courseCategory", value); update("courseType", value); askRequirement(); return; }
    if (value === "EAPCET") { update("courseCategory", value); update("courseType", "Test Preparation"); askRequirement(); return; }
    update("courseCategory", value); push("bot", `Which ${value} option would you like?`); setStep("courseType");
  };

  const chooseCourseType = (value) => { push("user", value); update("courseType", cleanLabel(value)); askRequirement(); };
  const askRequirement = () => { push("bot", "What would you like to know?"); setStep("requirement"); };
  const chooseRequirement = (value) => {
    push("user", value);
    const requirement = cleanLabel(value);
    if (value.endsWith("Other")) { push("bot", "Please type what you would like help with."); setStep("otherRequirement"); return; }
    update("requirement", requirement);
    if (requirement === "Hostel Information") push("bot", "Hostel facilities are available for interested students. Our counsellor can explain current availability, rules, and whether it is recommended for your situation.");
    if (requirement === "After School Program") push("bot", "Our After School Program is available for school students. Our counsellor can share the current schedule and details.");
    showContact();
  };
  const showContact = () => { push("bot", "Thanks! I just need a few contact details so our counsellor can get in touch with you."); setStep("contact"); };

  const reset = () => { setMessages([{ from: "bot", text: "Welcome to Ignite Institutions! 👋\nI'm here to help you with courses, admissions, fees, and other information." }]); setStep("userType"); setData({ userType: "", parentName: "", studentName: "", studentClass: "", courseCategory: "", courseType: "", phone: "", email: "", requirement: "" }); setInput(""); setError(""); };
  const submit = async (event) => {
    event.preventDefault(); if (submitting) return;
    const phone = data.phone.replace(/\s+/g, "");
    if (!/^(?:\+91[6-9]\d{9}|[6-9]\d{9})$/.test(phone)) { setError("Enter a valid Indian phone number."); return; }
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) { setError("Enter a valid email address or leave it blank."); return; }
    setSubmitting(true); setError("");
    try {
      await submitEnquiry({ category: "chatbot", source: "chat", payload: { ...data, phone } });
      push("bot", "Thank you! 🎉\nYour enquiry has been submitted successfully. Our Ignite Institutions team will contact you shortly. If you have any other questions, feel free to continue chatting with us."); setStep("success");
    } catch (requestError) { setError(requestError?.response?.data?.message || "Sorry, we couldn't submit your enquiry right now. Please try again or use the contact form."); }
    finally { setSubmitting(false); }
  };

  const review = (event) => {
    event.preventDefault();
    const phone = data.phone.replace(/\s+/g, "");
    if (!/^(?:\+91[6-9]\d{9}|[6-9]\d{9})$/.test(phone)) { setError("Enter a valid Indian phone number."); return; }
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) { setError("Enter a valid email address or leave it blank."); return; }
    update("phone", phone); setError(""); push("bot", "Please confirm your details before I submit the enquiry."); setStep("summary");
  };

  const schoolStudent = ["6th", "7th", "8th", "9th", "10th"].includes(data.studentClass);
  const courseOptions = ["IIT-JEE", "NEET", "Foundation - Intermediate", "EAPCET", "Talk to Counsellor"];
  const visibleOptions = step === "userType" ? ["👨‍👩‍👧 Parent", "🎓 Student"] : step === "studentClass" ? classes : step === "courseCategory" ? courseOptions : step === "courseType" ? ["Long Term", "Short Term"] : step === "requirement" ? (schoolStudent ? requirements.school : requirements[data.userType]) : [];

  return <>
    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Ignite Institutions, I would like to know more about your courses.")}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp" className="ignite-floating-control fixed bottom-[5rem] right-5 z-[9998] grid h-12 w-12 place-items-center rounded-full bg-[#087f5b] text-white shadow-lg transition hover:scale-105 sm:right-6"><WhatsAppIcon /></a>
    <div className="ignite-floating-control fixed bottom-[8.5rem] right-5 z-[9997] sm:right-6">
      {open && <div className="absolute bottom-16 right-0 flex h-[min(520px,calc(100vh-8rem))] w-[min(330px,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-950">
        <div className="flex items-center justify-between bg-[#006b4f] px-4 py-3 text-white"><div><p className="font-bold">Ignite Institutions</p><p className="text-xs text-white/75">How can we help you?</p></div><button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="rounded-full p-1 hover:bg-white/15"><X size={18} /></button></div>
        <div ref={messagesRef} className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto bg-slate-50 p-3 dark:bg-slate-900/60">{messages.map((message, index) => message.from === "bot" ? <BotMessage key={index}>{message.text.split("\n").map((line) => <span key={line} className="block">{line}</span>)}</BotMessage> : <UserMessage key={index}>{message.text}</UserMessage>)}
          {step === "userType" && <><BotMessage>Are you a Parent or Student?</BotMessage><QuickReplies options={visibleOptions} onSelect={chooseUserType} /></>}
          {visibleOptions.length > 0 && !["userType", "contact", "summary", "success", "parentName", "studentName", "otherClass", "otherRequirement"].includes(step) && <QuickReplies options={visibleOptions} onSelect={step === "studentClass" ? chooseClass : step === "courseCategory" ? chooseCourseCategory : step === "courseType" ? chooseCourseType : chooseRequirement} />}
          {step === "contact" && <form onSubmit={review} className="space-y-2 rounded-xl border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-950"><p className="text-xs font-semibold text-slate-600 dark:text-slate-300">Contact details</p>{data.userType === "parent" && <input value={data.parentName} readOnly className="chat-input" aria-label="Parent name" /> }<input value={data.studentName} readOnly className="chat-input" aria-label="Student name" /><input value={data.phone} onChange={(event) => update("phone", event.target.value)} placeholder="Phone number *" inputMode="tel" className="chat-input" required /><input value={data.email} onChange={(event) => update("email", event.target.value)} placeholder="Email (optional)" type="email" className="chat-input" /><div className="rounded-lg bg-slate-50 p-2 text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-300">{data.courseCategory}{data.courseType ? ` · ${data.courseType}` : ""}</div><p className="text-[11px] text-slate-500">Your details are used only to respond to this enquiry.</p><button disabled={submitting} className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white disabled:opacity-60">Review Enquiry <Send size={15} /></button></form>}
          {step === "summary" && <div className="space-y-2 rounded-xl border border-slate-200 bg-white p-3 text-xs dark:border-slate-700 dark:bg-slate-950"><p className="font-semibold text-slate-700 dark:text-slate-200">Please confirm your details:</p>{[["Name", data.userType === "parent" ? data.parentName : data.studentName], ["Student", data.studentName], ["Class", data.studentClass], ["Course", `${data.courseCategory} · ${data.courseType}`], ["Phone", data.phone], ["Email", data.email || "Not provided"], ["Requirement", data.requirement]].map(([label, value]) => <p key={label} className="flex gap-2"><span className="w-20 shrink-0 text-slate-500">{label}</span><span className="font-medium text-slate-700 dark:text-slate-200">{value}</span></p>)}<div className="flex gap-2 pt-2"><button type="button" onClick={() => setStep("contact")} className="flex-1 rounded-lg border border-slate-200 px-3 py-2 font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-300">Edit Details</button><button type="button" onClick={submit} disabled={submitting} className="flex-1 rounded-lg bg-blue-600 px-3 py-2 font-semibold text-white disabled:opacity-60">{submitting ? "Sending…" : "Submit Enquiry"}</button></div></div>}
          {step === "success" && <button type="button" onClick={reset} className="self-start rounded-full bg-blue-600 px-3 py-2 text-xs font-semibold text-white">Start New Chat</button>}
        </div>
        {error && <p className="border-t border-rose-100 bg-rose-50 px-3 py-2 text-xs text-rose-700 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-300">{error}</p>}
        {(["parentName", "studentName", "otherClass", "otherRequirement"].includes(step)) && <form onSubmit={(event) => { event.preventDefault(); askText(step); }} className="flex gap-2 border-t border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-950"><input autoFocus value={input} onChange={(event) => setInput(event.target.value)} placeholder="Type your answer…" className="chat-input flex-1" required /><button type="submit" aria-label="Send answer" className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-blue-600 text-white"><Send size={16} /></button></form>}
      </div>}
      <button type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close chatbot" : "Chat with Ignite"} className="grid h-12 w-12 place-items-center rounded-full bg-[#006b4f] text-white shadow-lg transition hover:scale-105">{open ? <X size={22} /> : <MessageCircle size={22} />}</button>
    </div>
  </>;
}
