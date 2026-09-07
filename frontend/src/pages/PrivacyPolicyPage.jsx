import { useRef } from "react";
import { RouteLink } from "../router/BrowserRouter";

const sections = [
  ["information-we-collect", "Information We Collect", "When you submit an enquiry, we may collect the name, phone number, email address, course interest, message, and other details you choose to provide. The website may also receive basic technical information such as browser type, device information, and pages visited."],
  ["how-we-use-information", "How We Use Information", "We use submitted information to respond to enquiries, provide admission and course information, improve our website and services, maintain security, and manage authorized administration. We do not sell personal information."],
  ["cookies-and-browser-storage", "Cookies and Browser Storage", "The website may use cookies for authenticated administration. It may also use browser storage for preferences such as theme selection and temporary interface state. You can clear browser storage through your browser settings, but some features may stop working."],
  ["sharing-and-service-providers", "Sharing and Service Providers", "Information may be processed by service providers that support hosting, databases, email delivery, security, or website operation. We require appropriate handling of information and share only what is reasonably needed for those services."],
  ["retention-and-security", "Retention and Security", "We retain information only as long as reasonably necessary for the purposes described here or as required by law. We use access controls, authentication, HTTPS in production, and other reasonable safeguards, but no online system can be guaranteed completely secure."],
  ["your-choices", "Your Choices", "You may ask us to correct or delete personal information, subject to legal and operational requirements. You may also opt out of non-essential communications. Contact us at Info@ignite.academy to make a request."],
  ["children-and-third-party-links", "Children and Third-Party Links", "Our website is intended for students, parents, and visitors seeking educational information. It may link to third-party websites whose privacy practices we do not control. Please review their policies separately."],
  ["changes-and-contact", "Changes and Contact", "We may update this Privacy Policy when our services or legal obligations change. The updated date will appear on this page. For privacy questions, contact Info@ignite.academy."],
];

export default function PrivacyPolicyPage() {
  const contentRef = useRef(null);

  const handleTocClick = (e, id) => {
    e.preventDefault();
    const container = contentRef.current;
    const target = document.getElementById(id);
    if (!container || !target) return;

    // Scroll only the content container, not the page
    const offset = target.offsetTop - container.offsetTop;
    container.scrollTo({ top: offset, behavior: "smooth" });
  };

  return (
    <main className="bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8">

        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Legal
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-neutral-900 dark:text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
            Last updated: August 24, 2026
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[240px_1fr]">

          {/* Fixed sidebar — never scrolls */}
          <nav className="lg:sticky lg:top-24 lg:h-fit">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              On this page
            </p>
            <ul className="mt-4 space-y-1 border-l-2 border-neutral-100 dark:border-neutral-800">
              {sections.map(([id, heading]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => handleTocClick(e, id)}
                    className="block border-l-2 border-transparent py-1.5 pl-4 -ml-0.5 text-sm text-neutral-500 transition-colors hover:border-blue-600 hover:text-blue-700 dark:text-neutral-400 dark:hover:text-blue-400"
                  >
                    {heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Scrollable content — independent scroll container */}
          <div
            ref={contentRef}
            className="min-w-0 divide-y divide-neutral-100 overflow-y-auto lg:max-h-[calc(100vh-8rem)] dark:divide-neutral-800"
          >
            {sections.map(([id, heading, text]) => (
              <section key={id} id={id} className="py-7 first:pt-0">
                <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
                  {heading}
                </h2>
                <p className="mt-2 text-base leading-7 text-neutral-600 dark:text-neutral-300">
                  {text}
                </p>
              </section>
            ))}

            <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-blue-100 bg-blue-50/50 p-8 dark:border-blue-950 dark:bg-blue-950/20 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                Have questions about how we handle your data?
              </p>
              <RouteLink
                to="/"
                className="inline-flex shrink-0 items-center rounded-lg bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
              >
                Return home
              </RouteLink>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}