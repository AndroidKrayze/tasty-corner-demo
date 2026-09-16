"use client";

import Image from "next/image";
import { siteConfig } from "@/site.config";
import { withBase } from "@/lib/paths";
import { FadeIn } from "./FadeIn";

const rail = [
  {
    src: withBase("/assets/english-breakfast.jpg"),
    alt: "Full English-style breakfast plate at Tasty Corner",
    label: "Morning plates",
  },
  {
    src: withBase("/assets/deli-counter.jpg"),
    alt: "Fresh sandwich fillings in the chilled deli counter",
    label: "Fresh fillings",
  },
  {
    src: withBase("/assets/counter-baps.jpg"),
    alt: "Fresh baps and baguettes on the café counter",
    label: "Baps & bread",
  },
  {
    src: withBase("/assets/menu-board.jpg"),
    alt: "Handwritten takeaway menu board inside Tasty Corner",
    label: "The board",
  },
] as const;

export function MenuRail() {
  return (
    <section id="menu" className="section-pad py-16 md:py-24" aria-label="Menu">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--tea-green)]">
          On the board
        </p>
        <h2 className="font-display mt-3 text-3xl text-[var(--ink)] md:text-5xl">
          Baps, char siu, proper tea
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--ink)]/75 md:text-lg">
          An East-meets-West morning menu — English breakfast staples beside
          Chinese-family plates. Ask in person for today’s specials; we don’t
          invent prices online.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {rail.map((item, i) => (
          <FadeIn key={item.src} delay={i * 0.05} className="group">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(26,22,20,0.75)] to-transparent p-4 pt-16">
                <p className="font-display text-lg text-[var(--enamel-cream)]">
                  {item.label}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {siteConfig.menuHighlights.map((item, i) => (
          <FadeIn key={item.title} delay={0.04 * i}>
            <div className="lacquer-rule mb-4" />
            <h3 className="font-display text-xl text-[var(--corner-red)]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--ink)]/75">
              {item.copy}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
