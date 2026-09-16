"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/site.config";
import { withBase } from "@/lib/paths";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden"
      aria-label="Hero"
    >
      <Image
        src={withBase("/assets/hero-chiltern-corner.jpg")}
        alt="Tasty Corner on the Chiltern Street corner of Blandford Street, Marylebone, with streetside tables"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Full-bleed opacity / gradient wash */}
      <div
        className="absolute inset-0 bg-[linear-gradient(105deg,rgba(26,22,20,0.82)_0%,rgba(26,22,20,0.55)_42%,rgba(139,26,26,0.35)_72%,rgba(26,22,20,0.5)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,transparent_0%,rgba(26,22,20,0.45)_100%)]"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-24 pt-28 md:justify-center md:pb-20 md:pt-24">
        <div className="section-pad max-w-3xl">
          <motion.p
            className="mb-4 text-sm uppercase tracking-[0.22em] text-[var(--morning-wash)]"
            initial={reduce ? false : { opacity: 1, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Marylebone · Chiltern corner
          </motion.p>
          <motion.h1
            className="font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] text-[var(--enamel-cream)]"
            initial={reduce ? false : { opacity: 1, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {siteConfig.name}
          </motion.h1>
          <motion.p
            className="mt-5 max-w-md text-lg leading-relaxed text-[var(--enamel-cream)]/90 md:text-xl"
            initial={reduce ? false : { opacity: 1, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Chiltern corner mornings. Baps, char siu, proper tea — East meets
            West on Blandford.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={reduce ? false : { opacity: 1, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.24,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <a
              href={siteConfig.phone.href}
              className="inline-flex items-center justify-center rounded-sm bg-[var(--corner-red)] px-6 py-3.5 text-base font-semibold text-[var(--enamel-cream)] shadow-[0_12px_40px_rgba(194,59,46,0.35)] transition hover:bg-[var(--lacquer)]"
            >
              Call {siteConfig.phone.display}
            </a>
            <a
              href="#visit"
              className="inline-flex items-center justify-center rounded-sm border border-[var(--enamel-cream)]/45 bg-transparent px-6 py-3.5 text-base font-medium text-[var(--enamel-cream)] transition hover:border-[var(--enamel-cream)] hover:bg-white/10"
            >
              Find us
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 md:block"
        aria-hidden
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.8, y: [0, 6, 0] }}
        transition={{
          y: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="h-10 w-px bg-[var(--enamel-cream)]/70" />
      </motion.div>
    </section>
  );
}
