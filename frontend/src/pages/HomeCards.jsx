import Card from "../components/HomeComponents/Card";

const cards = [
  {
    eyebrow: "Perspective",
    title: "Integrated Coaching",
    description:
      "Ignite offers seamless integration of the Intermediate curriculum with competitive exam coaching (IIT-JEE, NEET, EAPCET), ensuring focused preparation without academic overload.",
    image: "/card-art/card-1.svg",
  },
  {
    eyebrow: "Research Report",
    title: "Structured Learning, Global Readiness",
    description:
      "With scheduled study hours, doubt-clearing sessions, and wellness support, students experience balanced learning without pressure or burnout—while preparing to compete confidently on a global stage.",
    dark: true,
    image: "/card-art/card-2.svg",
  },
  {
    eyebrow: "Perspective",
    title: "Career Planning",
    description:
      "IGNITE Junior College empowers students with expert career planning, guiding them toward IIT-JEE, NEET & more. Well-maintained residential facilities with academic supervision and digital classrooms help students stay focused and comfortable throughout their journey.",
    image: "/card-art/card-3.svg",
  },
];

export default function HomeCards() {
  return (
    <section className="flex gap-8 overflow-x-auto pb-2">
      {cards.map((card) => (
        <div key={card.title} className="min-w-90 flex-1">
          <Card {...card} />
        </div>
      ))}
    </section>
  );
}
