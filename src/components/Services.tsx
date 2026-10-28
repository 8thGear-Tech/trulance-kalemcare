import { services } from "@/content/site";
import { Bullets, Container, Eyebrow } from "./ui";

export default function Services() {
  return (
    <section id="services">
      <Container className="py-[88px]">
        <div className="mb-10 flex flex-wrap items-end gap-x-12 gap-y-6">
          <div className="min-w-0 flex-[1_1_380px]">
            <Eyebrow>{services.eyebrow}</Eyebrow>
            <h2 className="heading mt-2.5">{services.title}</h2>
          </div>
          <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-2">
            <p className="font-accent text-[22px] font-medium text-purple italic">{services.lead}</p>
            <p>{services.body}</p>
          </div>
        </div>
        <div className="grid gap-[22px] md:grid-cols-2 xl:grid-cols-3">
          {services.items.map((s) => (
            <article key={s.title} className="card card-accent">
              <h3 className="font-display text-xl font-semibold text-purple">{s.title}</h3>
              {s.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <Bullets items={s.items} />
              {s.note && <p>{s.note}</p>}
              <p className="mt-auto pt-1 font-semibold text-purple">{s.close}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
