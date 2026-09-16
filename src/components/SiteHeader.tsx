"use client";

import { siteConfig } from "@/site.config";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="section-pad flex items-center justify-between py-5 md:py-7">
        <a
          href="#top"
          className="font-display text-lg tracking-wide text-[var(--enamel-cream)] md:text-xl"
        >
          {siteConfig.name}
        </a>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 text-sm text-[var(--enamel-cream)]/85 md:flex"
        >
          <a href="#menu" className="transition hover:text-white">
            Menu
          </a>
          <a href="#visit" className="transition hover:text-white">
            Visit
          </a>
          <a
            href={siteConfig.phone.href}
            className="rounded-sm bg-[var(--corner-red)] px-4 py-2 font-medium text-[var(--enamel-cream)] transition hover:bg-[var(--lacquer)]"
          >
            Call {siteConfig.phone.display}
          </a>
        </nav>
        <a
          href={siteConfig.phone.href}
          className="rounded-sm bg-[var(--corner-red)] px-3 py-2 text-sm font-medium text-[var(--enamel-cream)] md:hidden"
        >
          Call
        </a>
      </div>
    </header>
  );
}
