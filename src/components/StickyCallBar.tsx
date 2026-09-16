"use client";

import { siteConfig } from "@/site.config";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[var(--lacquer)]/30 bg-[var(--ink)]/95 px-4 py-3 backdrop-blur-md md:hidden">
      <a
        href={siteConfig.phone.href}
        className="flex w-full items-center justify-center rounded-sm bg-[var(--corner-red)] py-3.5 text-base font-semibold text-[var(--enamel-cream)]"
      >
        Call {siteConfig.phone.display}
      </a>
    </div>
  );
}
