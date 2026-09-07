import Form from '../components/HomeComponents/Form';
import { MapPin, Quote } from 'lucide-react';

const campusAddress = "Pillar No : A-708, NH -9, Plot No : 14, Sri Sai Nagar Colony, opp. Metro Station Jntu College, beside JNTU, Kukatpally, Hyderabad, Telangana 500085";
const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(campusAddress)}&output=embed`;
const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(campusAddress)}`;

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
    <div className="min-h-screen pt-8 bg-white dark:bg-neutral-950 text-neutral-950 dark:text-white transition-colors">
      <Form />

      <section className="border-t border-neutral-100 bg-neutral-50 px-4 py-12 dark:border-neutral-800 dark:bg-neutral-900 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 text-center">
            <span data-aos="fade-up" className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">Find Us</span>
            <h2 data-aos="fade-up" className="mt-2 text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">Visit Our Campus</h2>
            <p data-aos="fade-up" className="mx-auto mt-2 flex max-w-3xl items-start justify-center gap-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              <MapPin className="mt-0.5 shrink-0 text-orange-500" size={17} />
              <span>{campusAddress}</span>
            </p>
          </div>

          <div data-aos="fade-up" className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
            <iframe
              title="Ignite Institutions campus location"
              src={mapUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[280px] w-full border-0 sm:h-[380px]"
              allowFullScreen
            />
          </div>

          <div data-aos="fade-up" className="mt-4 text-center">
            <a href={directionsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800 py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {highlights.map(({ value, label, color, bg }) => (
              <div data-aos="fade-up" key={label} className={`rounded-2xl ${bg} p-5 text-center border border-transparent`}>
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
            <span data-aos="fade-up" className="inline-block text-xs font-bold tracking-[0.25em] text-orange-500 uppercase mb-2">
              Words of Wisdom
            </span>
            <h2 data-aos="fade-up" className="text-2xl font-extrabold text-neutral-900 dark:text-white sm:text-3xl">
              Inspiring Every Student
            </h2>
            <p data-aos="fade-up" className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto">
              Great minds that shaped the world remind us why education matters.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {quotes.map(({ text, author, color, labelColor }) => (
              <div
              data-aos="fade-up"
                key={author}
                className={`relative rounded-2xl bg-white dark:bg-neutral-800 border-l-4 ${color} border border-neutral-100 dark:border-neutral-700 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all`}
              >
                <Quote size={28} className="text-neutral-100 dark:text-neutral-700 mb-3" />
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  "{text}"
                </p>
                <p className={`mt-4 text-xs font-bold uppercase tracking-widest ${labelColor}`}>
                  - {author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-linear-to-r from-orange-500 via-orange-500 to-orange-600 py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
          <div>
            <h3 data-aos="fade-up" className="text-xl font-extrabold sm:text-2xl">Ready to Begin Your Journey?</h3>
            <p data-aos="fade-up" className="mt-1 text-sm text-white/80">Join thousands of students who trust IGNITE for their future.</p>
          </div>
          <a
            data-aos="fade-up"
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
