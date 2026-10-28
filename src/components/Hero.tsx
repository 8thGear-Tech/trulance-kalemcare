import { contact, headline, hero } from "@/content/site";
import { Container, Eyebrow } from "./ui";

export default function Hero() {
  return (
    <section id="top" className="bg-cream">
      <Container className="flex flex-wrap items-center gap-12 py-16 md:py-[72px]">
        <div className="min-w-0 flex-[1_1_460px]">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="my-3.5 font-display text-[clamp(38px,5vw,60px)] leading-[1.1] font-bold text-balance text-purple">
            {hero.title}
            <br />
            <span className="text-bronze">{hero.titleAccent}</span>
          </h1>
          <p className="mb-[18px] font-accent text-[25px] font-medium text-plum italic">{headline}</p>
          <p className="mb-7 max-w-[560px] text-[19px]">
            {hero.intro} <strong className="font-semibold">{hero.introEmphasis}</strong>.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a href="#contact" className="btn-primary">
              Start a conversation
            </a>
            <a href={contact.phoneHref} className="btn-outline">
              Call {contact.phoneDisplay}
            </a>
          </div>
        </div>
        {/* Replace this placeholder with a real photo, e.g. <Image src="/photos/hero.jpg" fill className="object-cover" alt="..." /> */}
        <div className="flex h-[440px] min-w-0 flex-[1_1_400px] items-center justify-center rounded-[28px_28px_28px_120px] border-[3px] border-gold bg-line p-6 text-center font-medium text-[#6B4A20]">
          {hero.photoNote}
        </div>
      </Container>
    </section>
  );
}
