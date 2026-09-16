"use client";

import { siteConfig } from "@/site.config";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export function Reviews() {
  return (
    <section id="reviews" className="morning-grain py-20 sm:py-28" aria-label="Reviews">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--tea-green)]">
            From the neighbourhood
          </p>
          <h2 className="mt-3 font-display text-3xl text-[var(--ink)] sm:text-4xl">
            What Chiltern corner regulars notice.
          </h2>
          <p className="mt-3 text-sm text-[var(--ink)]/60">
            Themes paraphrased from Google reviews — not verbatim quotes.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap items-center gap-6 rounded-sm border border-[var(--lacquer)]/10 bg-[var(--enamel-cream)]/85 px-5 py-4 sm:px-7">
            <div className="flex items-end gap-3">
              <span className="font-display text-5xl leading-none text-[var(--ink)]">
                {siteConfig.ratings.score}
              </span>
              <div className="pb-1">
                <p className="text-sm font-semibold text-[var(--ink)]">
                  {siteConfig.ratings.source} · {siteConfig.ratings.count} reviews
                </p>
                <p className="text-xs text-[var(--ink)]/55">
                  54 Blandford Street only
                </p>
              </div>
            </div>
            <div className="hidden h-10 w-px bg-[var(--lacquer)]/15 sm:block" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--corner-red)]">
                How to order
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--ink)]">
                Phone &amp; walk-in · no booking widget
              </p>
            </div>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.055}>
          {siteConfig.reviews.map((review) => (
            <StaggerItem key={review.theme}>
              <blockquote className="menu-card paper-card flex h-full flex-col rounded-sm p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--corner-red)]">
                  {review.theme}
                </p>
                <p className="mt-4 flex-1 font-display text-lg leading-relaxed text-[var(--ink)]">
                  “{review.quote}”
                </p>
                <footer className="mt-5 text-sm text-[var(--ink)]/55">
                  — {review.attribution}
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
