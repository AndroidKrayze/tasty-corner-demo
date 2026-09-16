import { siteConfig } from "@/site.config";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--lacquer)]/20 bg-[var(--ink)] pb-24 pt-14 text-[var(--enamel-cream)] md:pb-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-display text-2xl md:text-3xl">{siteConfig.legalName}</p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--enamel-cream)]/75">
          {siteConfig.address.line1}
          <br />
          {siteConfig.address.line2}
        </p>
        <p className="mt-3">
          <a
            href={siteConfig.phone.href}
            className="text-sm font-semibold text-[var(--morning-wash)] hover:underline"
          >
            {siteConfig.phone.display}
          </a>
        </p>
        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--enamel-cream)]/45">
            Suggested domains
          </p>
          <ul className="mt-3 space-y-1 text-sm text-[var(--enamel-cream)]/80">
            {siteConfig.suggestedDomains.map((domain) => (
              <li key={domain}>{domain}</li>
            ))}
          </ul>
        </div>
        <p className="mt-10 border-t border-white/10 pt-5 text-xs text-[var(--enamel-cream)]/40">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
