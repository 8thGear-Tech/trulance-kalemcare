"use client";

import { useState, type FormEvent } from "react";
import { contact, contactSection } from "@/content/site";

const field =
  "rounded-[10px] border border-[#C9B48F] bg-ivory px-3.5 py-3 font-normal text-ink outline-none focus:border-purple focus:ring-2 focus:ring-purple/20";
const label = "flex flex-col gap-1.5 text-[15px] font-medium";

/**
 * The form opens the visitor's email app with the enquiry filled in, so it works
 * without a backend. To receive enquiries directly, swap handleSubmit for a call to
 * your form service (e.g. Formspree, Resend or a Next.js route handler).
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const subject = `Website enquiry from ${get("name") || "a visitor"}`;
    const body = [
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Enquiring as: ${get("type")}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid min-w-0 flex-[1_1_480px] grid-cols-1 gap-[18px] rounded-[20px] border border-line bg-white p-6 sm:grid-cols-2 sm:p-8"
    >
      <label className={label}>
        Your name
        <input className={field} type="text" name="name" autoComplete="name" required />
      </label>
      <label className={label}>
        Phone
        <input className={field} type="tel" name="phone" autoComplete="tel" />
      </label>
      <label className={`${label} sm:col-span-2`}>
        Email
        <input className={field} type="email" name="email" autoComplete="email" required />
      </label>
      <label className={`${label} sm:col-span-2`}>
        I am enquiring as
        <select className={field} name="type" defaultValue={contactSection.enquiryTypes[0]}>
          {contactSection.enquiryTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className={`${label} sm:col-span-2`}>
        How can we help?
        <textarea className={`${field} resize-y`} name="message" rows={4} required />
      </label>
      <button
        type="submit"
        className="cursor-pointer rounded-full bg-purple p-[15px] text-[17px] font-semibold text-cream transition-colors hover:bg-violet sm:col-span-2"
      >
        Send message
      </button>
      {sent && (
        <p role="status" className="text-sm text-muted sm:col-span-2">
          Your email app should open with your message ready to send. If it doesn&apos;t, email us at{" "}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>
      )}
    </form>
  );
}
