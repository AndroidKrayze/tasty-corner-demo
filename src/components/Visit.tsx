"use client";

import Image from "next/image";
import { siteConfig } from "@/site.config";
import { withBase } from "@/lib/paths";
import { Reveal } from "@/components/Reveal";

export function Visit() {
  return (
    <section id="visit" className="bg-[var(--morning-wash)]/40" aria-label="Visit">
      <div className="grid lg:grid-cols-2">
        <div className="section-pad flex flex-col justify-center py-14 md:py-20">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--tea-green)]">
              Visit
            </p>
            <h2 className="font-display mt-3 text-3xl text-[var(--ink)] md:text-5xl">
              54 Blandford Street
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--ink)]/75">
              On the Chiltern corner of Blandford Street, Marylebone W1 —
              streetside tables when the weather allows.
            </p>
            <address className="mt-6 not-italic text-[var(--ink)]">
              <p className="font-medium">{siteConfig.address.line1}</p>
              <p>{siteConfig.address.line2}</p>
            </address>
            <dl className="mt-6 space-y-2 text-sm text-[var(--ink)]/80">
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 font-medium text-[var(--ink)]">
                  Hours
                </dt>
                <dd>
                  {siteConfig.hours.weekdays}
                  <br />
                  {siteConfig.hours.sunday}
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 font-medium text-[var(--ink)]">
                  Phone
                </dt>
                <dd>
                  <a
                    href={siteConfig.phone.href}
                    className="text-[var(--corner-red)] underline-offset-2 hover:underline"
                  >
                    {siteConfig.phone.display}
                  </a>
                </dd>
              </div>
            </dl>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--ink)]/60">
              {siteConfig.hours.note}
            </p>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center justify-center rounded-sm border border-[var(--ink)]/25 bg-[var(--enamel-cream)] px-5 py-3 text-sm font-medium text-[var(--ink)] transition hover:border-[var(--tea-green)] hover:text-[var(--tea-green)]"
            >
              Open in Google Maps
            </a>
          </Reveal>
        </div>
        <div className="relative min-h-[300px] lg:min-h-full">
          <Image
            src={withBase("/assets/blandford-street.jpg")}
            alt="Blandford Street, Marylebone — neighbourhood street context near Tasty Corner"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[var(--morning-wash)]/30 to-transparent lg:from-[rgba(243,226,200,0.25)]"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
