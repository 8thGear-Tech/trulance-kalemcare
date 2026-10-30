import Image from "next/image";
import { families, photos } from "@/content/site";
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
          <ul className="bullets mt-1.5 grid grid-cols-1 gap-x-7 gap-y-2 font-display text-[17px] font-semibold text-purple sm:grid-cols-2">
            {families.pillars.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="card min-w-0 flex-[1_1_440px] gap-3 p-7 text-[17px]">
          <div className="relative -mx-7 -mt-7 mb-2 aspect-[16/9] overflow-hidden rounded-t-[16px]">
            <Image src={photos.families.src} alt={photos.families.alt} fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover object-[center_30%]" />
          </div>
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
