import Image from "next/image";
import { photos, services } from "@/content/site";
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
        <div className="mb-10 grid gap-[22px] sm:grid-cols-3">
          {photos.servicesRow.map((p) => (
            <figure key={p.src} className="m-0">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-2.5 font-display text-[17px] font-semibold text-purple">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="grid gap-[22px] md:grid-cols-2 xl:grid-cols-3">
          {services.items.map((s) => (
            <article key={s.title} className="card">
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
