import { Droplets, HandHeart, ShieldCheck, Sprout, UsersRound, ArrowRight, Footprints } from "lucide-react";
import { RouteLink } from "../../router/BrowserRouter";

const communityTopics = [
  {
    id: "plantation-run",
    label: "Plantation Drive & Run",
    icon: Sprout,
    eyebrow: "Green initiative",
    title: "Plantation Drive & Run",
    summary:
      "Students and staff joined a plantation run to reinforce environmental responsibility and create a visible habit of service.",
    paragraphs: [
      "The plantation run was designed as an active community effort rather than a one-off event. Students moved through the route with saplings, planting them in designated spots and learning why long-term care matters as much as the act of planting itself.",
      "The initiative connected ecology with civic action. It gave participants a direct way to contribute to the neighbourhood while also building an early understanding of conservation, shared spaces, and accountability.",
    ],
    highlights: [
      "Sapling planting and route-based awareness",
      "Student-led participation with staff guidance",
      "Focus on care, maintenance, and long-term impact",
    ],
    images: [
      "/assets/images/events/Plantationrun/plantation1.webp",
      "/assets/images/events/Plantationrun/plantation2.webp",
      "/assets/images/events/Plantationrun/plantation3.webp",
      "/assets/images/events/Plantationrun/plantation5.webp",
      "/assets/images/events/Plantationrun/plantation6.webp",
      "/assets/images/events/Plantationrun/plantation7.webp",
      "/assets/images/events/Plantationrun/plantation8.webp",
      "/assets/images/events/Plantationrun/plantation123.webp",
    ],
    quote: "Service becomes memorable when students do the work themselves.",
    statLabel: "Green action",
    statValue: "Planting awareness",
  },
  {
    id: "buttermilk-drive",
    label: "Buttermilk Drive",
    icon: Droplets,
    eyebrow: "Summer support",
    title: "Buttermilk Drive",
    summary:
      "Every summer, our community teams distribute buttermilk to help people stay hydrated and to offer small relief during the hottest days.",
    paragraphs: [
      "The buttermilk drive is an annual summer outreach effort. Students and volunteers prepare and distribute buttermilk in the community, especially to workers, commuters, and local residents moving through the heat.",
      "Beyond refreshment, the drive teaches the value of practical empathy. It is a simple intervention, but it creates a strong message: community care does not need to be complex to be meaningful.",
    ],
    highlights: [
      "Every summer support drive",
      "Hydration and heat-relief outreach",
      "Volunteer coordination and community distribution",
    ],
    images: [
      "/assets/images/events/buttermik/ButterMilk1.webp",
      "/assets/images/events/buttermik/ButterMilk2.webp",
      "/assets/images/events/buttermik/ButterMilk3.webp",
      "/assets/images/events/buttermik/ButterMilk4.webp",
    ],
    quote: "Small acts of relief can have a very visible human impact.",
    statLabel: "Summer care",
    statValue: "Distribution drives",
  },
  {
    id: "swach-hyderabad-run",
    label: "Swach Hyderabad Run",
    icon: Footprints,
    eyebrow: "Civic responsibility",
    title: "Swach Hyderabad Run",
    summary:
      "A city-wide run organised to spread awareness about cleanliness and sanitation, bringing students together in support of a healthier, cleaner Hyderabad.",
    paragraphs: [
      "The Swach Hyderabad Run was organised to promote the message of cleanliness through active participation rather than just observation. Students ran alongside citizens from across the city, carrying placards and banners that spoke about waste management and civic hygiene.",
      "Beyond the physical activity, the run served as a platform to reinforce the idea that a clean city is a shared responsibility. Students returned with a stronger sense of civic pride and a clearer understanding of how individual actions add up to collective change.",
    ],
    highlights: [
      "City-wide participation in a cleanliness-themed run",
      "Awareness building through active, visible engagement",
      "Fitness and civic responsibility combined",
    ],
    images: [
      "/assets/images/events/swatch_run/swatchrun1.webp",
      "/assets/images/events/swatch_run/swtachrun2.webp",
    ],
    quote: "Every step forward was a step toward a cleaner Hyderabad.",
    statLabel: "Participation",
    statValue: "City-wide run",
  },
  {
    id: "sanitization-covid",
    label: "Sanitization Support",
    icon: ShieldCheck,
    eyebrow: "Pandemic response",
    title: "Sanitization Distribution During COVID",
    summary:
      "During COVID, sanitization kits and hygiene support were distributed to help families stay safer and more informed.",
    paragraphs: [
      "This initiative focused on practical support during a period of uncertainty. Sanitization materials, hygiene guidance, and awareness messaging were shared with families and nearby communities to reinforce basic protective habits.",
      "The project brought students into a direct service role at a time when health awareness mattered deeply. It was a reminder that community service can also mean protecting people through simple, reliable support.",
    ],
    highlights: [
      "Sanitizer and hygiene-kit distribution",
      "Awareness around safety and prevention",
      "Direct support to families during COVID",
    ],
    images: [
      "/assets/images/events/sanitizer distribution/Sanitization_bottles_stood_side_…_202608181602.webp",
      "/assets/images/events/sanitizer distribution/Sanitiser Bottles.webp",
      "/assets/images/events/sanitizer distribution/Provisions_Supply during Pandemic.webp"
    ],
    quote: "Support during crisis is built from clarity, care, and consistency.",
    statLabel: "Safety first",
    statValue: "Hygiene support",
  },
  {
    id: "orphan-donations",
    label: "Orphan Food Donations",
    icon: HandHeart,
    eyebrow: "Compassion in action",
    title: "Orphan Food Donations",
    summary:
      "Food donation initiatives for orphan homes helped turn student volunteering into a compassionate, hands-on act of service.",
    paragraphs: [
      "The orphan food donation drive was centered on dignity and direct support. Food packs were prepared and delivered to orphan homes and shelters, with volunteers handling the process carefully and respectfully.",
      "For students, it was an opportunity to understand generosity in a practical form. The initiative emphasized that community work is strongest when it addresses real needs with consistency and respect.",
    ],
    highlights: [
      "Food packs for orphan homes and shelters",
      "Volunteer-led collection and distribution",
      "Focused on dignity, care, and continuity",
    ],
    images: [
      "/assets/images/events/orphanage/Ramesh Sir in Orphanage.webp",
      "/assets/images/events/orphanage/orphanage1.webp",
      
    ],
    quote: "Service matters most when it reaches people with dignity.",
    statLabel: "Food care",
    statValue: "Donation support",
  },
  {
    id: "summer-camp",
    label: "Summer Camp",
    icon: Sprout,
    eyebrow: "Seasonal learning",
    title: "Summer Camp",
    summary:
      "A focused summer camp experience that mixes learning, activity, and confidence-building in an engaging format.",
    paragraphs: [
      "The summer camp brings students together for short, high-energy learning sessions, creative activities, and guided interactions that keep the experience practical and memorable.",
      "It is designed to give students a productive break while still building communication, teamwork, discipline, and curiosity through structured participation.",
    ],
    highlights: [
      "Activity-based learning and group participation",
      "Confidence building through structured engagement",
      "Balanced mix of fun, learning, and discipline",
    ],
    images: [
      "/assets/images/events/Summer camp/C0059T01.webp",
      "/assets/images/events/Summer camp/C0080T01.webp",
      "/assets/images/events/Summer camp/summercamp6.webp"
    ],
    quote: "The best camps build skills without making learning feel forced.",
    statLabel: "Camp focus",
    statValue: "Learning + activity",
  },
  {
    id: "sports-meet",
    label: "Sports Meet",
    icon: UsersRound,
    eyebrow: "Athletic spirit",
    title: "Sports Meet",
    summary:
      "Sports meet events celebrate teamwork, healthy competition, and the discipline that comes from regular physical participation.",
    paragraphs: [
      "The sports meet highlights individual performance and team effort across different games and activities, creating a strong sense of enthusiasm across the campus.",
      "Students learn about preparation, patience, and resilience while also experiencing the energy that comes from competing and supporting one another.",
    ],
    highlights: [
      "Team events and individual participation",
      "Healthy competition and campus spirit",
      "Discipline, endurance, and confidence",
    ],
    images: [
      "/assets/images/events/Sports Meet/DSC00455.webp",
      "/assets/images/events/Sports Meet/DSC04791.webp",
      "/assets/images/events/Sports Meet/DSC05170.webp"
    ],
    quote: "Sports teaches effort, timing, and how to stay composed under pressure.",
    statLabel: "Meet highlight",
    statValue: "Team spirit",
  },
  {
    id: "experiential-learning",
    label: "Experiential Learning",
    icon: ShieldCheck,
    eyebrow: "Academic excellence",
    title: "Experiential Learning",
    summary:
      "Experienced learning reflects the strength of expert guidance, structured teaching, and the felicitation of rankers and toppers with iPhones and iPads.",
    paragraphs: [
      "This topic highlights how experienced faculty and a disciplined academic system create consistent results for students across batches and programs.",
      "It also celebrates achievers through felicitation for rankers and toppers, including rewards such as iPhones and iPads to honor outstanding performance and motivate others.",
    ],
    highlights: [
      "Strong teaching experience and guidance",
      "Felicitation for rankers and toppers",
      "Premium rewards like iPhones and iPads",
    ],
    images: [
      "/assets/images/events/Classrooms/DSC00002.webp",
      "/assets/images/events/falicitates_with_awards/iphone 2024/CHIDRUP MAINS FELICITATION PIC.webp",
      "/assets/images/events/Classrooms/DSC02170.webp",
    ],
    quote: "Recognition becomes powerful when it rewards real academic effort.",
    statLabel: "Recognition",
    statValue: "Rankers & toppers",
  },
];

function TopicSection({ topic, index, total }) {
  const Icon = topic.icon;
  const mainImage = topic.images[0];
  const restImages = topic.images.slice(1, 3);

  return (
    <section
      id={topic.id}
      className="scroll-mt-24 rounded-4xl border border-neutral-100 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:border-neutral-700 dark:bg-neutral-900 sm:p-8 lg:p-10">
      <div className="flex justify-between gap-6 sm:flex-col lg:flex-row sm:items-start">
      <div className="max-w-1/2">
        <div className="flex flex-wrap items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-orange-500 text-white">
            <Icon size={18} />
          </span>
          <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-orange-600 dark:bg-orange-500/10 dark:text-orange-300">
            {topic.eyebrow}
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
            {index + 1} / {total}
          </span>
        </div>

        <h2 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
          {topic.title}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300">
          {topic.summary}
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-1">
          {topic.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="rounded-[1.25rem] bg-neutral-50 p-4 text-sm leading-7 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {topic.highlights.map((highlight) => (
            <div
              key={highlight}
              className="rounded-[1.25rem] border border-neutral-100 bg-neutral-50 p-4 text-sm leading-6 text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
            >
              {highlight}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <img
          src={mainImage}
          alt={topic.title}
          className="h-66 w-full rounded-[1.25rem] object-cover sm:h-90"
          loading="lazy"
        />
        {restImages.length > 0 && (
          <div className="mt-3 grid grid-cols-2 gap-3">
            {restImages.map((src, i) => {
              const label = topic.title + " " + (i + 2);
              return (
                <img
                  key={src}
                  src={src}
                  alt={label}
                  className="h-32 w-full rounded-[1.25rem] object-cover sm:h-54"
                  loading="lazy"
                />
              );
            })}
          </div>
        )}
      </div>
      </div>

      

      <p className="mt-8 border-l-2 border-orange-500 pl-4 text-sm italic text-neutral-500 dark:text-neutral-400">
        &ldquo;{topic.quote}&rdquo;
      </p>

      <div className="mt-8">
        <RouteLink
          to={"/gallery?topic=" + topic.id}
          className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-500 dark:bg-white dark:text-neutral-950 dark:hover:bg-orange-400"
        >
          Explore Gallery
          <ArrowRight size={16} />
        </RouteLink>
      </div>
    </section>
  );
}

export default function CommunityPage() {
  return (
    <section className="min-h-screen bg-white px-4 py-8 text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-orange-500">
              Community
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Community initiatives that create real impact.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-neutral-600 dark:text-neutral-300 sm:text-base">
              A full overview of plantation runs, summer buttermilk drives, Swach Hyderabad efforts, sanitization support, orphan food donations, summer camp, sports meet, and experienced learning.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:justify-self-end">
            <div className="rounded-[1.25rem] bg-neutral-100 p-4 dark:bg-neutral-900">
              <p className="text-2xl font-extrabold text-neutral-900 dark:text-white">8</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">Programs</p>
            </div>
            <div className="rounded-[1.25rem] bg-neutral-100 p-4 dark:bg-neutral-900">
              <p className="text-2xl font-extrabold text-neutral-900 dark:text-white">Gallery</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">Per section</p>
            </div>
            <div className="rounded-[1.25rem] bg-neutral-100 p-4 dark:bg-neutral-900">
              <p className="text-2xl font-extrabold text-neutral-900 dark:text-white">Real</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-500">Stories</p>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {communityTopics.map((topic) => {
            return (
              <a
                key={topic.id}
                href={"#" + topic.id}
                className="rounded-full border border-neutral-200 px-4 py-2 text-xs font-semibold text-neutral-600 transition hover:border-orange-300 hover:text-orange-600 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-orange-400 dark:hover:text-orange-300"
              >
                {topic.label}
              </a>
            );
          })}
        </div>

        <div className="flex flex-col gap-6">
          {communityTopics.map((topic, index) => {
            return (
              <TopicSection
                key={topic.id}
                topic={topic}
                index={index}
                total={communityTopics.length}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
