import Card from "../components/HomeComponents/Card";

const cards = [
  {
    eyebrow: "Academic Excellence",
    title: "Integrated Coaching Advantage",
    description:
      "Ignite combines Intermediate education with expert IIT-JEE, NEET, and EAPCET coaching under one structured program. Students get focused preparation, expert guidance, and a balanced academic journey.",
    image: "/assets/images/events/HomeCardsImages/homecard1.webp",
    dark:true
  },

  {
    eyebrow: "Student Success",
    title: "Structured Learning Ecosystem",
    description:
      "A disciplined learning environment with planned study schedules, regular assessments, doubt-solving sessions, and personalised mentoring helps students achieve excellence without unnecessary pressure.",
    dark: true,
    image: "/assets/images/events/HomeCardsImages/homecard2.webp",
  },

  {
    eyebrow: "Future Ready",
    title: "Career-Focused Guidance",
    description:
      "Ignite empowers students with expert career counselling, competitive exam strategies, digital classrooms, and supportive residential facilities to build confidence for their future goals.",
    image: "/assets/images/events/HomeCardsImages/homecard3.webp",
    dark:true
  },
];

export default function HomeCards() {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <div data-aos="fade-up" key={card.title} className="w-full">
          <Card {...card} />
        </div>
      ))}
    </section>
  );
}
