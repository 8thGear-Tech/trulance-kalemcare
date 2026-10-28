import Image from "next/image";
import { contact, footer, strapline } from "@/content/site";
import { Container } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t-4 border-gold bg-plum text-sand">
      <Container className="flex flex-wrap items-center justify-between gap-6 py-12 text-[15px]">
        <Image src="/brand/kalem-horizontal-reversed.svg" alt="KALEM Home Care Services" width={227} height={63} />
        <p className="text-xs font-semibold tracking-[0.18em] text-gold-light uppercase">{strapline}</p>
        <div className="flex flex-wrap gap-x-7 gap-y-2">
          <a href={`mailto:${contact.email}`} className="text-sand hover:text-gold-light">{contact.email}</a>
          <a href={`mailto:${contact.careersEmail}`} className="text-sand hover:text-gold-light">Careers</a>
          <a href="#top" className="text-sand hover:text-gold-light">Privacy policy</a>
        </div>
        <p className="basis-full text-[13px] text-[#CDB8D9]">{footer.legal}</p>
      </Container>
    </footer>
  );
}
