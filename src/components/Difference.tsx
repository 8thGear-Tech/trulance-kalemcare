import { difference } from "@/content/site";
import { Container, Eyebrow } from "./ui";

export default function Difference() {
  return (
    <section className="bg-plum text-cream">
      <Container className="flex flex-wrap items-center gap-x-16 gap-y-10 py-20">
        <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-3">
          <Eyebrow light>{difference.eyebrow}</Eyebrow>
          <h2 className="font-display text-[clamp(28px,3.4vw,40px)] leading-[1.18] font-bold">{difference.title}</h2>
          <p className="text-sand">{difference.body}</p>
        </div>
        <div className="flex min-w-0 flex-[1_1_400px] flex-col gap-2 border-l-2 border-gold pl-7 font-accent text-2xl leading-[1.35] font-medium italic">
          {difference.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
          <span className="text-gold-light">{difference.lastLine}</span>
        </div>
      </Container>
    </section>
  );
}
