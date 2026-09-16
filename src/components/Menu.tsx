"use client";

import Image from "next/image";
import { siteConfig } from "@/site.config";
import { withBase } from "@/lib/paths";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

function PriceLine({
  price,
}: {
  price: string | null | undefined;
}) {
  if (price) {
    return (
      <p className="mt-4 text-sm font-semibold tracking-wide text-[var(--corner-red)]">
        {price}
      </p>
    );
  }
  return (
    <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--tea-green)]/80">
      Ask at the counter
    </p>
  );
}

type Item = {
  name: string;
  blurb: string;
  price?: string | null;
};

function ItemCard({ item }: { item: Item }) {
  return (
    <article className="menu-card paper-card h-full rounded-sm p-5 sm:p-6">
      <h5 className="font-display text-lg text-[var(--ink)]">{item.name}</h5>
      <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]/65">
        {item.blurb}
      </p>
      <PriceLine price={item.price} />
    </article>
  );
}

export function Menu() {
  return (
    <section id="menu" className="enamel-wash relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--corner-red)]/45 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--tea-green)]">
            On the board
          </p>
          <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight text-[var(--ink)] sm:text-5xl">
            Baps, char siu, proper tea.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink)]/70 sm:text-lg">
            Decoded from the sidewalk chalk, outdoor Chinese A-board, and interior
            takeaway chalkboard at 54 Blandford Street.{" "}
            <span className="font-medium text-[var(--ink)]">
              {siteConfig.menuNote}
            </span>
          </p>
        </Reveal>

        {/* Authenticity strip — board crops, not hero shopfront */}
        <Stagger
          className="mt-10 grid gap-3 sm:grid-cols-3"
          stagger={0.06}
        >
          {[
            {
              src: withBase("/assets/breakfast-chalk.jpg"),
              alt: "Sidewalk chalk — All Day English Breakfast from 6.90",
              label: "Breakfast chalk",
            },
            {
              src: withBase("/assets/chinese-specials-board.jpg"),
              alt: "Outdoor Chinese specials A-board tiles",
              label: "Chinese A-board",
            },
            {
              src: withBase("/assets/takeaway-chalkboard.jpg"),
              alt: "Interior MENU TAKE AWAY chalkboard",
              label: "Takeaway board",
            },
          ].map((shot) => (
            <StaggerItem key={shot.src}>
              <div className="group relative aspect-[5/3] overflow-hidden rounded-sm border border-[var(--lacquer)]/10">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(26,22,20,0.72)] to-transparent p-3 pt-10">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--enamel-cream)]">
                    {shot.label}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Desktop sticky section nav */}
        <div className="mt-10 hidden lg:block">
          <div className="sticky top-4 z-20 flex flex-wrap gap-2 rounded-sm border border-[var(--lacquer)]/12 bg-[var(--enamel-cream)]/90 p-2 shadow-sm backdrop-blur">
            {siteConfig.menuSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink)]/70 transition hover:bg-[var(--corner-red)] hover:text-[var(--enamel-cream)]"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile section chips */}
        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 lg:hidden">
          {siteConfig.menuSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="shrink-0 rounded-sm border border-[var(--lacquer)]/15 bg-[var(--enamel-cream)] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--ink)]/75"
            >
              {section.label}
            </a>
          ))}
        </div>

        <div className="mt-14 space-y-20">
          {siteConfig.menuSections.map((section, sIdx) => (
            <div key={section.id} id={section.id} className="scroll-mt-28">
              <Reveal delay={0.02}>
                <div className="flex flex-col gap-3 border-b border-[var(--lacquer)]/12 pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--corner-red)]">
                      {section.eyebrow}
                    </p>
                    <h3 className="mt-2 font-display text-2xl text-[var(--ink)] sm:text-3xl">
                      {section.label}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--ink)]/65">
                      {section.intro}
                    </p>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--tea-green)]">
                    Soft-confirm live
                  </p>
                </div>
              </Reveal>

              {"groups" in section && section.groups ? (
                <div className="mt-8 space-y-12">
                  {section.groups.map((group) => (
                    <div key={group.title}>
                      <Reveal delay={0.04}>
                        <div className="mb-4 flex items-center gap-3">
                          <span className="h-px w-6 bg-[var(--corner-red)]/60" />
                          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink)]/55">
                            {group.title}
                          </h4>
                        </div>
                      </Reveal>
                      <Stagger
                        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                        stagger={0.04}
                      >
                        {group.items.map((item) => (
                          <StaggerItem key={item.name}>
                            <ItemCard item={item} />
                          </StaggerItem>
                        ))}
                      </Stagger>
                    </div>
                  ))}
                </div>
              ) : (
                <Stagger
                  className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                  stagger={0.045 + sIdx * 0.005}
                >
                  {"items" in section &&
                    section.items.map((item) => (
                      <StaggerItem key={item.name}>
                        <ItemCard item={item} />
                      </StaggerItem>
                    ))}
                </Stagger>
              )}

              {"extras" in section && section.extras ? (
                <Reveal delay={0.06}>
                  <p className="mt-8 rounded-sm border border-dashed border-[var(--tea-green)]/35 bg-[var(--morning-wash)]/50 px-5 py-4 text-sm text-[var(--ink)]/65">
                    {section.extras}
                  </p>
                </Reveal>
              ) : null}

              {"alsoLoved" in section && section.alsoLoved ? (
                <Reveal delay={0.06}>
                  <p className="mt-8 rounded-sm border border-dashed border-[var(--corner-red)]/30 bg-[var(--enamel-cream)]/80 px-5 py-4 text-sm text-[var(--ink)]/65">
                    {section.alsoLoved}
                  </p>
                </Reveal>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
