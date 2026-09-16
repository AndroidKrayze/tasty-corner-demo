import { Hero } from "@/components/Hero";
import { SiteHeader } from "@/components/SiteHeader";
import { TrustBar } from "@/components/TrustBar";
import { MenuRail } from "@/components/MenuRail";
import { SpecialtyBand } from "@/components/SpecialtyBand";
import { Reviews } from "@/components/Reviews";
import { Visit } from "@/components/Visit";
import { CallBand } from "@/components/CallBand";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyCallBar } from "@/components/StickyCallBar";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <MenuRail />
        <SpecialtyBand />
        <Reviews />
        <Visit />
        <CallBand />
      </main>
      <SiteFooter />
      <StickyCallBar />
    </>
  );
}
