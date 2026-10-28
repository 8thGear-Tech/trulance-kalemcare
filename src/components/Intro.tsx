import { intro } from "@/content/site";
import { Container } from "./ui";

export default function Intro() {
  return (
    <section>
      <Container className="flex flex-wrap items-center gap-12 py-20">
        <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-1.5 font-accent text-[26px] leading-[1.35] font-medium text-purple italic">
          {intro.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
        <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-3.5">
          <h2 className="font-display text-[clamp(30px,3.6vw,42px)] font-bold text-purple">{intro.title}</h2>
          {intro.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p>
            {intro.homeLine} <strong className="font-semibold">home.</strong>
          </p>
          <div className="mt-1.5 rounded-[18px] border-t-[3px] border-gold bg-cream px-6 py-[22px]">
            <p className="text-[15px] text-muted">{intro.peace.lead}</p>
            <p className="mt-0.5 mb-1.5 font-display text-[30px] font-bold text-purple">{intro.peace.title}</p>
            <p>{intro.peace.body}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
