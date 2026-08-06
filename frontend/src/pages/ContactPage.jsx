import Form from '../components/HomeComponents/Form';
import { Quote } from 'lucide-react';

const quotes = [
  {
    text: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
    color: "border-orange-500",
    labelColor: "text-orange-500",
  },
  {
    text: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King",
    color: "border-blue-500",
    labelColor: "text-blue-500",
  },
  {
    text: "An investment in knowledge pays the best interest.",
    author: "Benjamin Franklin",
    color: "border-green-700",
    labelColor: "text-green-700",
  },
  {
    text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
    author: "Dr. Seuss",
    color: "border-red-500",
    labelColor: "text-red-500",
  },
];

const highlights = [
  { value: "20+", label: "Years of Excellence", color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-500/10" },
  { value: "6000+", label: "Students Coached", color: "text-green-700", bg: "bg-green-50 dark:bg-green-700/10" },
  { value: "8+", label: "Campus Branches", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10" },
  { value: "95%", label: "Success Rate", color: "text-red-500", bg: "bg-red-50 dark:bg-red-500/10" },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white transition-colors">
      <Form />

      {/* Stats row */}
      <section className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {highlights.map(({ value, label, color, bg }) => (
              <div key={label} className={`rounded-2xl ${bg} p-5 text-center border border-transparent`}>
                <p className={`text-3xl font-black ${color}`}>{value}</p>
                <p className="mt-1 text-xs font-semibold text-neutral-600 dark:text-neutral-400 uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirational Quotes */}
      <section className="bg-white dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-800 py-14 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-2">
              Words of Wisdom
            </span>
            <h2 className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
              Inspiring Every Student
            </h2>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto">
              Great minds that shaped the world remind us why education matters.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {quotes.map(({ text, author, color, labelColor }) => (
              <div
                key={author}
                className={`relative rounded-2xl bg-white dark:bg-neutral-800 border-l-4 ${color} border border-neutral-100 dark:border-neutral-700 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all`}
              >
                <Quote size={28} className="text-neutral-100 dark:text-neutral-700 mb-3" />
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  "{text}"
                </p>
                <p className={`mt-4 text-xs font-bold uppercase tracking-widest ${labelColor}`}>
                  — {author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h3 className="text-xl font-extrabold sm:text-2xl">Ready to Begin Your Journey?</h3>
            <p className="mt-1 text-sm text-white/80">Join thousands of students who trust IGNITE for their future.</p>
          </div>
          <a
            href="tel:+917036511111"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-orange-600 font-bold px-6 py-3 rounded-xl text-sm hover:bg-orange-50 transition-colors shadow-sm"
          >
            Call Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
