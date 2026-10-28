import { steps } from "@/content/site";
import { Bullets, Container, Eyebrow } from "./ui";

function StepTitle({ n, title, light = false }: { n: number; title: string; light?: boolean }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className={`font-display text-[40px] leading-none font-bold ${light ? "text-gold-light" : "text-gold"}`}>{n}</span>
      <h3 className={`font-display text-[21px] font-semibold ${light ? "" : "text-purple"}`}>{title}</h3>
    </div>
  );
}

export default function Steps() {
  const f = steps.final;
  return (
    <section id="how">
      <Container className="py-[88px]">
        <Eyebrow>{steps.eyebrow}</Eyebrow>
        <h2 className="heading mt-2.5 mb-9">{steps.title}</h2>
        <div className="grid gap-[22px] md:grid-cols-2">
          {steps.items.map((s, i) => (
            <article key={s.title} className="card">
              <StepTitle n={i + 1} title={s.title} />
              <p>{s.intro}</p>
              {s.style === "questions" ? (
                <Bullets items={s.items} className="font-accent text-xl leading-[1.35] font-medium text-purple italic" />
              ) : (
                <Bullets items={s.items} className={s.style === "columns" ? "gap-x-5 sm:columns-2" : ""} />
              )}
              {s.close && <p className="font-semibold text-purple">{s.close}</p>}
            </article>
          ))}
          <article className="flex flex-col gap-2.5 rounded-[20px] bg-purple p-[26px] text-base text-cream md:col-span-2">
            <StepTitle n={5} title={f.title} light />
            <p className="text-sand">{f.intro}</p>
            <Bullets items={f.items} className="gap-x-6 sm:columns-2 lg:columns-3" />
            <p className="text-sand">
              {f.close} <span className="font-accent text-[22px] text-gold-light italic">{f.accent}</span>
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
