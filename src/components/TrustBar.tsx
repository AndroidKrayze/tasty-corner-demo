"use client";

import { siteConfig } from "@/site.config";
import { FadeIn } from "./FadeIn";

export function TrustBar() {
  return (
    <section
      className="relative border-b border-[var(--lacquer)]/15 bg-[var(--morning-wash)]/55"
      aria-label="Trust"
    >
      <div className="section-pad grid gap-8 py-10 md:grid-cols-3 md:gap-6 md:py-12">
        <FadeIn>
          <p className="font-display text-2xl text-[var(--ink)] md:text-[1.65rem]">
            Google {siteConfig.ratings.score}
          </p>
          <p className="mt-1 text-sm text-[var(--ink)]/70">
            From {siteConfig.ratings.count} reviews — neighbours who know the
            corner.
          </p>
        </FadeIn>
        <FadeIn delay={0.06}>
          <p className="font-display text-2xl text-[var(--ink)] md:text-[1.65rem]">
            Family-run hospitality
          </p>
          <p className="mt-1 text-sm text-[var(--ink)]/70">
            Chinese-family warmth with an English breakfast board — walk in,
            say hello.
          </p>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="font-display text-2xl text-[var(--ink)] md:text-[1.65rem]">
            Phone &amp; walk-in
          </p>
          <p className="mt-1 text-sm text-[var(--ink)]/70">
            No online booking widget — call {siteConfig.phone.display} or come
            by.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
