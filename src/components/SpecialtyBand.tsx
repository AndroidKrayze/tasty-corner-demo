"use client";

import Image from "next/image";
import { withBase } from "@/lib/paths";
import { Reveal } from "@/components/Reveal";

export function SpecialtyBand() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--tea-green)]"
      aria-label="Specialty"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-[520px]">
          <Image
            src={withBase("/assets/plate-vermicelli.jpg")}
            alt="Chicken vermicelli plate from Tasty Corner"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="section-pad flex flex-col justify-center py-14 text-[var(--enamel-cream)] md:py-20">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--morning-wash)]">
              Neighbourhood ritual
            </p>
            <h2 className="font-display mt-3 text-3xl leading-tight md:text-5xl">
              Chinese-family hospitality on an English corner
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--enamel-cream)]/88 md:text-lg">
              Come for the bacon bap; stay for BBQ pork rice, won ton soup and a
              chat with the owners. Streetside tables when the Marylebone light
              is kind — counter service when you’re on the move.
            </p>
            <ul className="mt-8 space-y-2 text-sm text-[var(--enamel-cream)]/85">
              <li className="flex gap-2">
                <span className="text-[var(--morning-wash)]" aria-hidden>
                  —
                </span>
                Set breakfasts with tea, coffee and toast from £9.50
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--morning-wash)]" aria-hidden>
                  —
                </span>
                Pressed melts, cold sandwiches and loaded jacket potatoes
              </li>
              <li className="flex gap-2">
                <span className="text-[var(--morning-wash)]" aria-hidden>
                  —
                </span>
                Vermicelli, udon, curry rice and won ton from the wok
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
