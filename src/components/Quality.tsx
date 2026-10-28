import { Fragment } from "react";
import { quality } from "@/content/site";
import { Container, Eyebrow } from "./ui";

export default function Quality() {
  const { standard, safety } = quality;
  return (
    <section className="bg-cream">
      <Container className="grid gap-6 py-[72px] md:grid-cols-2">
        <div className="flex min-w-0 flex-col gap-3 rounded-[20px] bg-white p-6 sm:p-7">
          <Eyebrow>{standard.eyebrow}</Eyebrow>
          <p>{standard.lead}</p>
          <div className="flex flex-wrap items-center gap-2 text-[13px] font-semibold tracking-[0.06em] text-purple uppercase">
            {standard.cycle.map((step, i) => {
              const last = i === standard.cycle.length - 1;
              return (
                <Fragment key={step}>
                  <span className={`rounded-full px-3 py-1 ${last ? "bg-purple text-cream" : "border border-gold"}`}>{step}</span>
                  {!last && <span className="text-gold" aria-hidden>→</span>}
                </Fragment>
              );
            })}
          </div>
          <p>{standard.close}</p>
        </div>
        <div className="flex min-w-0 flex-col gap-3 rounded-[20px] bg-white p-6 sm:p-7">
          <Eyebrow>{safety.eyebrow}</Eyebrow>
          <p>{safety.body}</p>
          <p>{safety.lead}</p>
          <p className="font-display text-xl font-bold text-purple uppercase sm:text-2xl">
            {safety.steps.map((s, i) => (
              <Fragment key={s}>
                {s}
                {i < safety.steps.length - 1 && <span className="px-2 text-gold" aria-hidden>→</span>}
              </Fragment>
            ))}
          </p>
          <p>{safety.close}</p>
        </div>
      </Container>
    </section>
  );
}
