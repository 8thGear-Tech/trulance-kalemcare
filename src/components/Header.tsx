"use client";

import Image from "next/image";
import { useState } from "react";
import { nav } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-3.5">
        <a href="#top" aria-label="KALEM Home Care Services, home" className="block shrink-0">
          <Image src="/brand/kalem-horizontal-colour.svg" alt="KALEM Home Care Services" width={227} height={63} priority />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-[26px] text-base font-medium lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-ink no-underline hover:text-purple">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary px-[22px] py-3">
            Start a conversation
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-purple lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-ivory px-6 pb-6 lg:hidden">
          <ul className="flex flex-col py-2 text-lg font-medium">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)} className="block border-b border-line py-3 text-ink no-underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full text-center">
            Start a conversation
          </a>
        </nav>
      )}
    </header>
  );
}
