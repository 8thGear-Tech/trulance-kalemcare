import { contact, contactSection, headline } from "@/content/site";
import ContactForm from "./ContactForm";
import { Container, Eyebrow } from "./ui";

export default function Contact() {
  return (
    <section id="contact" className="bg-cream">
      <Container className="flex flex-wrap gap-12 py-[88px]">
        <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-3.5">
          <Eyebrow>{contactSection.eyebrow}</Eyebrow>
          <h2 className="heading">{contactSection.title}</h2>
          <p>{contactSection.body}</p>
          <p className="font-accent text-2xl font-medium text-purple italic">{headline}</p>
          <dl className="grid grid-cols-[130px_minmax(0,1fr)] gap-x-3 gap-y-1.5">
            <dt className="font-semibold">Phone</dt>
            <dd><a href={contact.phoneHref}>{contact.phoneDisplay}</a></dd>
            <dt className="font-semibold">Email</dt>
            <dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd>
            <dt className="font-semibold">Website</dt>
            <dd>{contact.website}</dd>
          </dl>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
