import { commitment } from "@/content/site";
import { Eyebrow } from "./ui";

export default function Commitment() {
  return (
    <section className="bg-purple text-cream">
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-3 px-6 py-16 text-center">
        <Eyebrow light>{commitment.eyebrow}</Eyebrow>
        {commitment.lines.map((line, i) => (
          <p key={line} className={`font-accent text-[clamp(22px,2.6vw,28px)] leading-[1.4] font-medium italic ${i ? "text-gold-light" : ""}`}>
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}
