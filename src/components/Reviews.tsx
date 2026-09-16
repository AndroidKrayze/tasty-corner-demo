"use client";

import { siteConfig } from "@/site.config";
import { FadeIn } from "./FadeIn";

export function Reviews() {
  return (
    <section
      className="section-pad py-16 md:py-24"
      aria-label="Reviews"
    >
      <FadeIn className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.2em] text-[var(--tea-green)]">
          From the neighbourhood
        </p>
        <h2 className="font-display mt-3 text-3xl text-[var(--ink)] md:text-5xl">
          What regulars notice
        </h2>
        <p className="mt-3 text-sm text-[var(--ink)]/65">
          Themes paraphrased from Google reviews — not verbatim quotes.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {siteConfig.reviews.map((review, i) => (
          <FadeIn key={review.theme} delay={i * 0.07}>
            <blockquote className="border-l-2 border-[var(--corner-red)] pl-5">
              <p className="font-display text-xl leading-snug text-[var(--ink)] md:text-2xl">
                “{review.quote}”
              </p>
              <footer className="mt-4 text-sm uppercase tracking-[0.14em] text-[var(--tea-green)]">
                {review.theme}
              </footer>
            </blockquote>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
