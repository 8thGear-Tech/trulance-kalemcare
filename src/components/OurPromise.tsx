import { headline, promise } from "@/content/site";
import { Eyebrow } from "./ui";

export default function OurPromise() {
  return (
    <section className="bg-purple text-cream">
      <div className="mx-auto flex max-w-[900px] flex-col items-center gap-3.5 px-6 py-[72px] text-center">
        <Eyebrow light>{promise.eyebrow}</Eyebrow>
        <h2 className="font-display text-[clamp(28px,3.6vw,42px)] leading-[1.2] font-bold text-balance">{promise.title}</h2>
        <p className="max-w-[680px] text-sand">{promise.body}</p>
        <div className="my-1.5 h-0.5 w-[60px] bg-gold" />
        <p className="font-accent text-[26px] font-medium text-gold-light italic">{headline}</p>
      </div>
    </section>
  );
}
