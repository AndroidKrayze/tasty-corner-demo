"use client";

import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/site.config";
import {
  menuCategories,
  setMeals,
  setMealsServingTimes,
  type MenuGroup,
  type MenuItem,
} from "@/menu";
import { Reveal } from "@/components/Reveal";

const categoryIds = menuCategories.map((category) => category.id);

function useActiveCategory() {
  const [active, setActive] = useState(categoryIds[0]);

  useEffect(() => {
    const panels = categoryIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (panels.length === 0) return;

    // Below lg the panels are a single column, so "topmost visible panel" maps
    // onto exactly one chip. Wider layouts stack panels side by side, where
    // several are level with each other, so there the chips only follow taps.
    const singleColumn = window.matchMedia("(max-width: 1023px)");
    let observer: IntersectionObserver | null = null;

    const sync = () => {
      observer?.disconnect();
      observer = null;
      if (!singleColumn.matches) return;

      observer = new IntersectionObserver(
        (entries) => {
          const topmost = entries
            .filter((entry) => entry.isIntersecting)
            .sort(
              (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
            )[0];

          if (topmost) setActive(topmost.target.id);
        },
        { rootMargin: "-20% 0px -55% 0px" },
      );

      panels.forEach((panel) => observer?.observe(panel));
    };

    sync();
    singleColumn.addEventListener("change", sync);

    return () => {
      singleColumn.removeEventListener("change", sync);
      observer?.disconnect();
    };
  }, []);

  return [active, setActive] as const;
}

function JumpNav({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Keep the active chip visible without ever scrolling the page itself.
  useEffect(() => {
    const scroller = scrollerRef.current;
    const chip = scroller?.querySelector<HTMLElement>(`[data-chip="${active}"]`);
    if (!scroller || !chip) return;

    const target = chip.offsetLeft - (scroller.clientWidth - chip.offsetWidth) / 2;
    scroller.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [active]);

  return (
    <nav
      aria-label="Menu sections"
      className="menu-nav sticky top-0 z-30 mt-10 border-y border-[var(--enamel-cream)]/12"
    >
      <div
        ref={scrollerRef}
        className="hide-scrollbar mx-auto flex max-w-[90rem] flex-nowrap gap-2 overflow-x-auto px-4 py-2.5 sm:px-6 lg:flex-wrap lg:justify-center lg:overflow-x-visible lg:px-8"
      >
        {menuCategories.map((category) => {
          const isActive = category.id === active;
          return (
            <a
              key={category.id}
              data-chip={category.id}
              href={`#${category.id}`}
              onClick={() => onSelect(category.id)}
              aria-current={isActive ? "true" : undefined}
              className={`flex min-h-[44px] shrink-0 items-center rounded-full px-4 text-[0.8rem] font-bold uppercase tracking-[0.1em] transition ${
                isActive
                  ? "bg-[var(--corner-red)] text-[var(--enamel-cream)]"
                  : "bg-[var(--enamel-cream)]/8 text-[var(--enamel-cream)]/70 hover:bg-[var(--enamel-cream)]/16 hover:text-[var(--enamel-cream)]"
              }`}
            >
              {category.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

function ItemRow({ item, twoPrice }: { item: MenuItem; twoPrice: boolean }) {
  return (
    <li className="flex min-h-[44px] items-baseline gap-2 py-2 sm:gap-3">
      <span className="text-[0.95rem] font-medium leading-snug text-[var(--enamel-cream)] sm:text-base">
        {item.name}
        {item.note ? (
          <span className="ml-1.5 text-[0.8rem] font-normal text-[var(--enamel-cream)]/55">
            ({item.note})
          </span>
        ) : null}
      </span>
      <span className="menu-leader" aria-hidden />
      {twoPrice && item.priceSmall ? (
        <>
          <span className="menu-price w-14 sm:w-16">{item.priceSmall}</span>
          <span className="menu-price w-14 sm:w-16">{item.priceLarge}</span>
        </>
      ) : item.priceLines ? (
        <span className="menu-price min-w-[4rem]">
          {item.priceLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </span>
      ) : (
        <span
          className={`menu-price ${
            twoPrice ? "min-w-[7.5rem] sm:min-w-[8.5rem]" : "min-w-[4rem]"
          }`}
        >
          {item.price}
        </span>
      )}
    </li>
  );
}

function Group({ group }: { group: MenuGroup }) {
  const twoPrice = Boolean(group.priceColumns);

  return (
    <div>
      {group.title ? (
        <h4 className="mb-1 flex items-center gap-2.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[var(--morning-wash)]">
          <span className="h-px w-5 bg-[var(--corner-red)]" aria-hidden />
          {group.title}
        </h4>
      ) : null}

      {group.priceColumns ? (
        <div className="flex items-baseline gap-2 border-b border-[var(--enamel-cream)]/12 pb-1.5 sm:gap-3">
          <span className="flex-1" />
          {group.priceColumns.map((label) => (
            <span
              key={label}
              className="w-14 text-right text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[var(--enamel-cream)]/50 sm:w-16"
            >
              {label}
            </span>
          ))}
        </div>
      ) : null}

      <ul className="divide-y divide-[var(--enamel-cream)]/8">
        {group.items.map((item) => (
          <ItemRow
            key={`${item.name}-${item.note ?? ""}-${item.price ?? item.priceSmall ?? item.priceLines?.join("/") ?? ""}`}
            item={item}
            twoPrice={twoPrice}
          />
        ))}
      </ul>

      {group.footnote ? (
        <p className="mt-3 inline-flex rounded-full bg-[var(--corner-red)]/18 px-3 py-1.5 text-[0.78rem] font-semibold text-[var(--morning-wash)]">
          {group.footnote}
        </p>
      ) : null}
    </div>
  );
}

function SetMeals() {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
        <div>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[var(--corner-red)]">
            House favourites
          </p>
          <h3 className="mt-2 font-display text-3xl font-black leading-none tracking-tight text-[var(--enamel-cream)] sm:text-4xl">
            Set breakfasts
          </h3>
        </div>
        <p className="text-[0.8rem] leading-relaxed text-[var(--enamel-cream)]/60">
          <span className="font-semibold text-[var(--morning-wash)]">
            Served
          </span>{" "}
          {setMealsServingTimes.join(" · ")}
        </p>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        {setMeals.map((meal) => (
          <article
            key={meal.id}
            className="set-card flex flex-col rounded-xl bg-[var(--enamel-cream)] p-5 text-[var(--ink)] sm:p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <span className="rounded-full bg-[var(--corner-red)] px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--enamel-cream)]">
                {meal.badge}
              </span>
              <span className="font-display text-3xl font-black leading-none tracking-tight text-[var(--lacquer)] sm:text-[2.1rem]">
                {meal.price}
              </span>
            </div>
            <p className="mt-4 text-base font-semibold leading-snug">
              {meal.items}
            </p>
            <p className="mt-auto pt-3 text-sm font-medium text-[var(--tea-green)]">
              + {meal.extras}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function Menu() {
  const [active, setActive] = useActiveCategory();

  return (
    <section
      id="menu"
      className="menu-slab relative py-16 text-[var(--enamel-cream)] sm:py-24"
      aria-label="Menu"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.26em] text-[var(--corner-red)] sm:text-xs">
            Straight off the counter menu
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.5rem,11vw,5.25rem)] font-black leading-[0.92] tracking-[-0.025em]">
            The whole
            <br />
            <span className="text-[var(--morning-wash)]">menu</span>
            <span className="text-[var(--corner-red)]">.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--enamel-cream)]/75 sm:text-lg">
            Breakfast off the grill, pressed melts, loaded jackets, wok-cooked
            Chinese plates, proper coffee and cake — every price exactly as
            printed in store.
          </p>

          <dl className="mt-7 flex flex-wrap gap-2">
            {[
              ["Mon–Fri", siteConfig.hours.weekdayTimes],
              ["Saturday", siteConfig.hours.saturdayTimes],
            ].map(([day, time]) => (
              <div
                key={day}
                className="flex items-baseline gap-2 rounded-full border border-[var(--enamel-cream)]/15 bg-[var(--enamel-cream)]/6 px-4 py-2"
              >
                <dt className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-[var(--enamel-cream)]/55">
                  {day}
                </dt>
                <dd className="text-sm font-semibold text-[var(--morning-wash)]">
                  {time}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <SetMeals />
      </div>

      <JumpNav active={active} onSelect={setActive} />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Multi-column flow rather than a grid: panels of very different
            heights pack without leaving dead rows, like a printed menu. */}
        <div className="mt-8 lg:columns-2 lg:gap-5 xl:columns-3">
          {menuCategories.map((category) => (
            <section
              key={category.id}
              id={category.id}
              aria-label={category.title}
              className="menu-panel mb-4 break-inside-avoid scroll-mt-24 rounded-xl p-4 sm:mb-5 sm:p-6"
            >
              <header className="border-b-2 border-[var(--corner-red)]/70 pb-3">
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[var(--enamel-cream)]/50">
                  {category.kicker}
                </p>
                <h3 className="mt-1.5 font-display text-2xl font-black leading-tight tracking-tight text-[var(--enamel-cream)] sm:text-[1.65rem]">
                  {category.title}
                </h3>
              </header>

              <div className="mt-4 space-y-6">
                {category.groups.map((group, index) => (
                  <Group key={group.title ?? `group-${index}`} group={group} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-xl border border-[var(--enamel-cream)]/12 bg-[var(--enamel-cream)]/6 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="font-display text-xl font-black tracking-tight text-[var(--enamel-cream)]">
              {siteConfig.address.full}
            </p>
            <p className="mt-1.5 text-sm text-[var(--enamel-cream)]/65">
              {siteConfig.menuNote}
            </p>
          </div>
          <a
            href={siteConfig.phone.href}
            className="flex min-h-[44px] shrink-0 items-center justify-center rounded-full bg-[var(--corner-red)] px-6 text-sm font-bold uppercase tracking-[0.1em] text-[var(--enamel-cream)] transition hover:bg-[var(--lacquer)]"
          >
            Call {siteConfig.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
