"use client";

import Image from "next/image";
import { withBase } from "@/lib/paths";
import { FadeIn } from "./FadeIn";

export function SpecialtyBand() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--tea-green)]"
      aria-label="Specialty"
    >
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-[520px]">
          <Image
            src={withBase("/assets/interior-seating.jpg")}
            alt="Interior of Tasty Corner with marble tables, wooden chairs and produce on the counter"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="section-pad flex flex-col justify-center py-14 text-[var(--enamel-cream)] md:py-20">
          <FadeIn>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--morning-wash)]">
              Neighbourhood ritual
            </p>
            <h2 className="font-display mt-3 text-3xl leading-tight md:text-5xl">
              Chinese-family hospitality on an English corner
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--enamel-cream)]/88 md:text-lg">
              Come for the bacon bap; stay for char siu, udon and a chat with
              the owners. Streetside tables when the Marylebone light is kind —
              counter service when you’re on the move.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
