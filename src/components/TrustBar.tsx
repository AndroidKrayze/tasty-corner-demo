"use client";

import { siteConfig } from "@/site.config";
import { Stagger, StaggerItem } from "@/components/Reveal";

const items = [
  {
    title: `Google ${siteConfig.ratings.score}`,
    copy: `From ${siteConfig.ratings.count} reviews — neighbours who know the Chiltern corner.`,
  },
  {
    title: "East meets West",
    copy: "English breakfast board beside Chinese A-board specials — walk in, say hello.",
  },
  {
    title: "Phone & walk-in",
    copy: `No online booking widget — call ${siteConfig.phone.display} or come by.`,
  },
] as const;

export function TrustBar() {
  return (
    <section
      className="relative border-b border-[var(--lacquer)]/15 bg-[var(--morning-wash)]/55"
      aria-label="Trust"
    >
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 md:py-12">
        <Stagger className="grid gap-8 md:grid-cols-3 md:gap-6" stagger={0.06}>
          {items.map((item) => (
            <StaggerItem key={item.title}>
              <p className="font-display text-2xl text-[var(--ink)] md:text-[1.65rem]">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-[var(--ink)]/70">{item.copy}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
