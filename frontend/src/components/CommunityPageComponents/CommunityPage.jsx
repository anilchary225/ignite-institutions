import { Droplets, HandHeart, ShieldCheck, Sprout, UsersRound, ArrowRight, Footprints } from "lucide-react";
import { motion } from "framer-motion";
import { RouteLink } from "../../router/BrowserRouter";
import { fadeUp, staggerContainer, staggerItem, scaleIn, defaultViewport } from "../../animations/variants";

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
    <motion.section
      id={topic.id}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className="scroll-mt-24 rounded-3xl border border-neutral-200/80 bg-white p-4.5 shadow-[0_12px_40px_rgba(15,23,42,0.06)] dark:border-neutral-800 dark:bg-neutral-900 sm:rounded-4xl sm:p-7 lg:p-9"
    >
      {/* Top Header Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-sm shadow-orange-500/25 sm:h-11 sm:w-11">
            <Icon size={18} />
          </span>
          <span className="rounded-full bg-orange-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-orange-600 dark:bg-orange-500/10 dark:text-orange-300 sm:text-xs">
            {topic.eyebrow}
          </span>
        </div>
        <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-bold text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
          {index + 1} of {total}
        </span>
      </div>

      {/* Main Title & Lead */}
      <div className="mt-4 sm:mt-5">
        <h2 className="text-xl font-black tracking-tight text-neutral-900 dark:text-white sm:text-3xl lg:text-4xl leading-tight">
          {topic.title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-base sm:leading-7 max-w-3xl">
          {topic.summary}
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-8 lg:items-start">
        {/* Left Side: Images on Mobile, Narrative & Highlights on all devices */}
        <div className="flex flex-col gap-4 lg:col-span-7">
          {/* Mobile Image Placement: Shown directly below title for instant engagement */}
          <div className="block lg:hidden">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="overflow-hidden rounded-2xl border border-neutral-200/80 shadow-xs dark:border-neutral-800"
            >
              <img
                src={mainImage}
                alt={topic.title}
                className="h-52 w-full object-cover sm:h-72"
                loading="lazy"
              />
            </motion.div>
            {restImages.length > 0 && (
              <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                {restImages.map((src, i) => (
                  <div
                    key={src}
                    className="overflow-hidden rounded-xl border border-neutral-200/70 shadow-xs dark:border-neutral-800"
                  >
                    <img
                      src={src}
                      alt={`${topic.title} ${i + 2}`}
                      className="h-28 w-full object-cover sm:h-36"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Narrative Paragraphs */}
          <div className="space-y-3">
            {topic.paragraphs.map((paragraph) => (
              <div
                key={paragraph}
                className="rounded-2xl border border-neutral-100 bg-neutral-50/80 p-3.5 text-xs leading-relaxed text-neutral-700 dark:border-neutral-800/80 dark:bg-neutral-800/60 dark:text-neutral-200 sm:p-4 sm:text-sm sm:leading-7"
              >
                {paragraph}
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            {topic.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-2.5 rounded-xl border border-neutral-200/70 bg-white p-3 text-xs font-semibold leading-snug text-neutral-800 shadow-2xs dark:border-neutral-800 dark:bg-neutral-850 dark:text-neutral-200 sm:rounded-2xl sm:p-3.5 sm:text-sm"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-orange-500" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Desktop Images */}
        <div className="hidden lg:col-span-5 lg:block lg:sticky lg:top-28">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-2xl border border-neutral-200/80 shadow-md dark:border-neutral-800"
          >
            <img
              src={mainImage}
              alt={topic.title}
              className="h-72 w-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </motion.div>
          {restImages.length > 0 && (
            <div className="mt-3 grid grid-cols-2 gap-3">
              {restImages.map((src, i) => (
                <motion.div
                  key={src}
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-xl border border-neutral-200/80 shadow-xs dark:border-neutral-800"
                >
                  <img
                    src={src}
                    alt={`${topic.title} ${i + 2}`}
                    className="h-36 w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quote Banner */}
      <div className="mt-5 rounded-2xl border-l-4 border-orange-500 bg-orange-50/60 p-3.5 dark:bg-orange-950/20 sm:p-4">
        <p className="text-xs italic text-neutral-700 dark:text-neutral-300 sm:text-sm">
          &ldquo;{topic.quote}&rdquo;
        </p>
      </div>

      {/* Action / Explore Link */}
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <RouteLink
          to={"/gallery?topic=" + topic.id}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-xs font-bold text-white transition hover:bg-orange-500 dark:bg-white dark:text-neutral-950 dark:hover:bg-orange-400 sm:w-auto sm:text-sm"
        >
          Explore Gallery
          <ArrowRight size={15} />
        </RouteLink>
      </div>
    </motion.section>
  );
}

export default function CommunityPage() {
  return (
    <section className="min-h-screen bg-white px-3.5 py-6 pb-28 text-neutral-950 transition-colors dark:bg-neutral-950 dark:text-white sm:px-6 sm:py-8 sm:pb-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end sm:mb-8 sm:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-[11px] font-black uppercase tracking-[0.24em] text-orange-600 dark:bg-orange-500/10 dark:text-orange-300">
              Community
            </span>
            <h1 className="mt-3 text-2xl font-black tracking-tight sm:text-4xl lg:text-5xl leading-tight">
              Community initiatives that create real impact.
            </h1>
            <p className="mt-2.5 max-w-2xl text-xs leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-sm sm:leading-7">
              A full overview of plantation runs, summer buttermilk drives, Swach Hyderabad efforts, sanitization support, orphan food donations, summer camp, sports meet, and experienced learning.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08, 0.1)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-3 gap-2 sm:gap-3 lg:justify-self-end w-full lg:w-auto"
          >
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="rounded-2xl bg-neutral-100/80 p-3 text-center border border-neutral-200/60 dark:border-neutral-800 dark:bg-neutral-900 sm:p-4 sm:text-left"
            >
              <p className="text-xl font-extrabold text-orange-600 dark:text-orange-400 sm:text-2xl">8</p>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-500 sm:text-xs">Programs</p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="rounded-2xl bg-neutral-100/80 p-3 text-center border border-neutral-200/60 dark:border-neutral-800 dark:bg-neutral-900 sm:p-4 sm:text-left"
            >
              <p className="text-xl font-extrabold text-orange-600 dark:text-orange-400 sm:text-2xl">Gallery</p>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-500 sm:text-xs">Per section</p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="rounded-2xl bg-neutral-100/80 p-3 text-center border border-neutral-200/60 dark:border-neutral-800 dark:bg-neutral-900 sm:p-4 sm:text-left"
            >
              <p className="text-xl font-extrabold text-orange-600 dark:text-orange-400 sm:text-2xl">Real</p>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-500 sm:text-xs">Stories</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Swipeable Filter Nav on Mobile */}
        <motion.div
          variants={staggerContainer(0.03, 0.1)}
          initial="hidden"
          animate="visible"
          className="mb-6 flex gap-2 overflow-x-auto pb-2 -mx-3.5 px-3.5 sm:mx-0 sm:px-0 sm:flex-wrap sm:mb-8"
        >
          {communityTopics.map((topic) => {
            return (
              <motion.a
                key={topic.id}
                variants={fadeUp}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                href={"#" + topic.id}
                className="shrink-0 rounded-full border border-neutral-200/90 bg-neutral-50/70 px-3.5 py-1.5 text-xs font-bold text-neutral-700 transition hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-orange-400 dark:hover:text-orange-300"
              >
                {topic.label}
              </motion.a>
            );
          })}
        </motion.div>

        <div className="flex flex-col gap-6 sm:gap-8">
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
