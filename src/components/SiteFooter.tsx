"use client";

import { siteConfig } from "@/site.config";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--lacquer)]/20 bg-[var(--ink)] text-[var(--enamel-cream)]">
      <div className="section-pad grid gap-10 py-12 md:grid-cols-[1.2fr_1fr] md:py-16">
        <div>
          <p className="font-display text-2xl md:text-3xl">{siteConfig.name}</p>
          <address className="mt-4 not-italic text-sm leading-relaxed text-[var(--enamel-cream)]/75">
            {siteConfig.address.full}
            <br />
            <a
              href={siteConfig.phone.href}
              className="mt-2 inline-block text-[var(--morning-wash)] hover:underline"
            >
              {siteConfig.phone.display}
            </a>
          </address>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-[var(--enamel-cream)]/55">
            Suggested domains
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-[var(--enamel-cream)]/80">
            {siteConfig.suggestedDomains.map((domain) => (
              <li key={domain}>{domain}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="section-pad border-t border-white/10 py-5 pb-24 text-xs text-[var(--enamel-cream)]/45 md:pb-5">
        © {new Date().getFullYear()} {siteConfig.name}
      </div>
    </footer>
  );
}
