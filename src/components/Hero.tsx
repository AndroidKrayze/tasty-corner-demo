"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/site.config";
import { withBase } from "@/lib/paths";
import { HeroMotion } from "@/components/Reveal";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
      aria-label="Hero"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${withBase("/assets/hero-chiltern-corner.jpg")})`,
        }}
        role="img"
        aria-label="Tasty Corner on the Chiltern Street corner of Blandford Street, Marylebone, with streetside tables"
        initial={reduce ? false : { scale: 1.1 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 14, ease: "linear" }}
      />
      <div className="opacity-wash absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_12%,rgba(194,59,46,0.22),transparent_42%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,transparent_0%,rgba(26,22,20,0.4)_100%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-28 pt-32 sm:px-8 sm:pb-36">
        <HeroMotion>
          <div className="mb-6 inline-flex items-center gap-2 rounded-sm border border-[var(--enamel-cream)]/25 bg-[var(--ink)]/35 px-3 py-1.5 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--corner-red)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--enamel-cream)]/90">
              Google {siteConfig.ratings.score} · Chiltern corner
            </span>
          </div>
          <p className="mb-4 text-sm uppercase tracking-[0.22em] text-[var(--morning-wash)]">
            Marylebone · East meets West
          </p>
          <p className="font-display text-[clamp(2.75rem,8vw,5.75rem)] leading-[0.95] text-[var(--enamel-cream)]">
            {siteConfig.name}
          </p>
          <h1 className="mt-4 max-w-xl font-display text-2xl leading-snug text-[var(--morning-wash)] sm:text-3xl md:text-[2.35rem]">
            {siteConfig.tagline}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--enamel-cream)]/90 sm:text-lg">
            Chiltern corner mornings. All-day English breakfast, sandwiches &amp;
            melts, jacket potatoes, Chinese specials — proper tea and Lavazza
            coffee.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center justify-center rounded-sm bg-[var(--corner-red)] px-6 py-3.5 text-sm font-semibold tracking-wide text-[var(--enamel-cream)] shadow-[0_12px_40px_rgba(194,59,46,0.4)] transition hover:bg-[var(--lacquer)]"
            >
              Call {siteConfig.phone.display}
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-sm border border-[var(--enamel-cream)]/45 px-6 py-3.5 text-sm font-medium text-[var(--enamel-cream)] transition hover:border-[var(--enamel-cream)] hover:bg-white/10"
            >
              View the menu
            </a>
            <a
              href="#visit"
              className="inline-flex items-center justify-center rounded-sm px-4 py-3.5 text-sm font-medium text-[var(--enamel-cream)]/85 transition hover:text-[var(--morning-wash)]"
            >
              Find us
            </a>
          </div>
        </HeroMotion>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        aria-hidden
        initial={{ opacity: 0.85 }}
        animate={{ opacity: 0.85, y: [0, 6, 0] }}
        transition={{
          y: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="h-10 w-px bg-[var(--enamel-cream)]/70" />
      </motion.div>
    </section>
  );
}
