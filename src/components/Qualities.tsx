import { qualities } from "@/content/site";
import { Container, Eyebrow } from "./ui";

export default function Qualities() {
  return (
    <section className="border-y border-line bg-white">
      <Container className="py-20">
        <Eyebrow>{qualities.eyebrow}</Eyebrow>
        <h2 className="heading mt-2.5 mb-9">{qualities.title}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {qualities.items.map((q) => (
            <div key={q.title} className="flex flex-col gap-2.5 border-t-4 border-gold pt-4">
              <h3 className="font-display text-[22px] font-semibold text-purple">{q.title}</h3>
              {q.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
