import { values } from "@/content/site";
import { Container, Eyebrow } from "./ui";

export default function Values() {
  return (
    <section>
      <Container className="py-[88px]">
        <Eyebrow>{values.eyebrow}</Eyebrow>
        <div className="mt-[18px] mb-14 grid gap-[22px] md:grid-cols-3">
          {values.items.map((v) => (
            <div key={v.title} className="rounded-[18px] bg-purple p-6 text-cream">
              <p className="font-display text-xl font-bold text-gold-light">{v.title}</p>
              <p className="mt-1.5">{v.body}</p>
            </div>
          ))}
        </div>
        <Eyebrow>{values.experienceEyebrow}</Eyebrow>
        <div className="mt-[18px] grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {values.experience.map((e) => (
            <div key={e.title} className="rounded-2xl bg-cream p-[18px]">
              <p className="font-display text-lg font-bold text-purple">{e.title}</p>
              <p className="mt-1 text-[15px]">{e.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
