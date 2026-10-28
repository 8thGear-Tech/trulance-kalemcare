import { families } from "@/content/site";
import { Bullets, Container, Eyebrow } from "./ui";

export default function Families() {
  const c = families.card;
  return (
    <section id="families">
      <Container className="flex flex-wrap gap-x-14 gap-y-10 py-[88px]">
        <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-3.5">
          <Eyebrow>{families.eyebrow}</Eyebrow>
          <h2 className="heading">{families.title}</h2>
          <div className="flex flex-col gap-1 font-accent text-2xl leading-[1.35] font-medium text-purple italic">
            {families.questions.map((q) => (
              <span key={q}>{q}</span>
            ))}
          </div>
          <p>{families.answer}</p>
          <div className="mt-1.5 grid grid-cols-2 gap-2.5 font-display text-[17px] font-semibold text-purple">
            {families.pillars.map((p) => (
              <span key={p} className="border-t-2 border-gold pt-2">{p}</span>
            ))}
          </div>
        </div>
        <div className="card card-accent min-w-0 flex-[1_1_440px] gap-3 p-7 text-[17px]">
          <p>{c.body}</p>
          <p className="font-semibold">{c.lead}</p>
          <Bullets items={c.items} />
          <p className="mt-1.5 font-display text-[22px] font-bold text-purple">{c.cta}</p>
          <p>{c.close}</p>
        </div>
      </Container>
    </section>
  );
}
