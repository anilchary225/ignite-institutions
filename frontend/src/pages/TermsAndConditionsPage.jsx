import { RouteLink } from "../router/BrowserRouter";

const sections = [
  ["Acceptance", "By accessing or using the IGNITE website, you agree to these Terms and Conditions. If you do not agree, please do not use the website."],
  ["Information and Enquiries", "Information about courses, fees, schedules, admissions, results, and facilities is provided for general guidance and may change without notice. An enquiry does not guarantee admission, a seat, a rank, or any particular academic result."],
  ["User Responsibilities", "You agree to provide accurate contact information, use the website lawfully, and not attempt to interfere with the website, submit malicious content, or access administrative areas without authorization."],
  ["Intellectual Property", "Website content, branding, text, images, videos, and design are owned by or licensed to IGNITE unless stated otherwise. You may not reproduce or redistribute them without written permission."],
  ["Third-Party Services", "The website may contain links or services operated by third parties. IGNITE is not responsible for their availability, content, or privacy practices."],
  ["Limitation of Liability", "To the extent permitted by law, IGNITE is not liable for indirect or consequential loss arising from use of the website or reliance on information published on it."],
  ["Changes and Contact", "We may update these terms from time to time. Continued use of the website means you accept the updated terms. For questions, contact Info@ignite.academy."],
];

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-8">

        {/* Header */}
        <div className="border-b border-blue-100 pb-8 dark:border-blue-950">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Legal
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
            Terms and Conditions
          </h1>
          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
            Last updated: August 24, 2026
          </p>
        </div>

        {/* Sections */}
        <div className="mt-12 divide-y divide-neutral-100 dark:divide-neutral-800">
          {sections.map(([heading, text], i) => (
            <section key={heading} className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-[minmax(0,180px)_1fr]">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="pt-1 text-base font-semibold text-neutral-900 dark:text-white">
                  {heading}
                </h2>
              </div>
              <p className="text-base leading-7 text-neutral-600 dark:text-neutral-300">
                {text}
              </p>
            </section>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-14 flex flex-col items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50/50 p-8 dark:border-blue-950 dark:bg-blue-950/20 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Have questions about these terms? Reach out anytime.
          </p>
          <RouteLink
            to="/"
            className="inline-flex shrink-0 items-center rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
          >
            Return home
          </RouteLink>
        </div>

      </div>
    </main>
  );
}