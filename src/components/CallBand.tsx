"use client";

import { siteConfig } from "@/site.config";
import { Reveal } from "@/components/Reveal";

export function CallBand() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--corner-red)] text-[var(--enamel-cream)]"
      aria-label="Call"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(243,226,200,0.35), transparent 45%), radial-gradient(circle at 85% 70%, rgba(26,22,20,0.35), transparent 40%)",
        }}
        aria-hidden
      />
      <div className="section-pad relative py-16 text-center md:py-20">
        <Reveal>
          <h2 className="font-display text-3xl md:text-5xl">
            Ready for a Chiltern corner morning?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-[var(--enamel-cream)]/90 md:text-lg">
            Phone ahead or walk in — seating is first-come, and the kettle
            doesn’t wait. Specials boards change; soft-confirm hours before you set out.
          </p>
          <a
            href={siteConfig.phone.href}
            className="mt-8 inline-flex items-center justify-center rounded-sm bg-[var(--enamel-cream)] px-8 py-4 text-lg font-semibold text-[var(--corner-red)] transition hover:bg-[var(--morning-wash)]"
          >
            Call {siteConfig.phone.display}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
