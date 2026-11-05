import { organizations as o } from "@/content/site";
import { Bullets, Container, Eyebrow } from "./ui";

export default function Organizations() {
  return (
    <section id="organizations" className="border-y border-line bg-white">
      <Container className="py-[88px]">
        <Eyebrow>{o.eyebrow}</Eyebrow>
        <h2 className="heading mt-2.5 mb-3">{o.title}</h2>
        <p className="mb-9 max-w-[760px]">{o.body}</p>
        <article className="card bg-ivory">
          <h3 className="font-display text-xl font-semibold text-purple">{o.retirement.title}</h3>
          <p>{o.retirement.intro}</p>
          <Bullets items={o.retirement.items} className="gap-x-5 sm:columns-2" />
          <p className="mt-auto pt-1 font-semibold text-purple">{o.retirement.close}</p>
        </article>
        <h3 className="mt-14 mb-6 font-display text-[28px] font-bold text-purple">{o.whyTitle}</h3>
        <div className="grid gap-[22px] text-base sm:grid-cols-2 lg:grid-cols-4">
          {o.why.map((w) => (
            <div key={w.title} className="border-t-[3px] border-gold pt-3">
              <p className="mb-1.5 font-display text-[17px] font-semibold text-purple">{w.title}</p>
              <p>{w.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
