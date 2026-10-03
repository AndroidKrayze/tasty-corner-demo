import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import { siteConfig } from "@/site.config";
import { menuCategories, type MenuItem } from "@/menu";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.seoTitle,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.seoTitle,
    description: siteConfig.description,
    locale: "en_GB",
    type: "website",
  },
};

/** Only the plain "£x.xx" prices map cleanly onto schema.org Offer. */
function offersFor(item: MenuItem) {
  return [item.priceSmall, item.priceLarge, item.price]
    .filter((price): price is string => /^£\d+\.\d{2}$/.test(price ?? ""))
    .map((price) => ({
      "@type": "Offer",
      price: price.slice(1),
      priceCurrency: "GBP",
    }));
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: siteConfig.name,
  description: siteConfig.description,
  telephone: siteConfig.phone.tel,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.line1,
    addressLocality: "Marylebone",
    addressRegion: "London",
    postalCode: "W1U 7HZ",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.lat,
    longitude: siteConfig.geo.lng,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.ratings.score,
    reviewCount: "78",
    bestRating: "5",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "06:30",
      closes: "16:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "07:00",
      closes: "16:30",
    },
  ],
  hasMenu: {
    "@type": "Menu",
    name: `${siteConfig.name} menu`,
    hasMenuSection: menuCategories.map((category) => ({
      "@type": "MenuSection",
      name: category.title,
      hasMenuItem: category.groups.flatMap((group) =>
        group.items.map((item) => ({
          "@type": "MenuItem",
          name: item.note ? `${item.name} (${item.note})` : item.name,
          offers: offersFor(item),
        })),
      ),
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${fraunces.variable} ${figtree.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
