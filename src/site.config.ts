export const siteConfig = {
  name: "Tasty Corner",
  tagline: "East meets West on Blandford",
  description:
    "Neighbourhood corner café on the Chiltern corner of Blandford Street, Marylebone — English breakfast baps, Chinese-family hospitality, coffee and proper tea.",
  seoTitle: "Tasty Corner | Café · Blandford Street Marylebone W1",
  address: {
    line1: "54 Blandford Street",
    line2: "Marylebone, London W1U 7HZ",
    area: "Chiltern corner",
    full: "54 Blandford Street, Marylebone, London W1U 7HZ",
  },
  phone: {
    display: "020 7935 2149",
    tel: "+442079352149",
    href: "tel:+442079352149",
  },
  mapsUrl:
    "https://www.google.com/maps/place/Tasty+Corner/@51.5184485,-0.1544652",
  geo: {
    lat: 51.5184485,
    lng: -0.1544652,
  },
  hours: {
    weekdays: "Mon–Sat ~06:30–16:30",
    sunday: "Sunday closed",
    note:
      "Hours are approximate — please call ahead to confirm before you set out.",
  },
  ratings: {
    source: "Google",
    score: "4.3",
    count: "~78",
  },
  suggestedDomains: [
    "tastycornercafe.co.uk",
    "tastycornermarylebone.co.uk",
    "tastycornerw1.co.uk",
  ],
  menuHighlights: [
    {
      title: "Breakfast baps",
      copy: "Bacon, egg, sausage — the Marylebone morning staple, wrapped and ready.",
    },
    {
      title: "Char siu & Chinese plates",
      copy: "Family recipes beside the English board — roast meats, noodles, comfort bowls.",
    },
    {
      title: "Sandwiches & melts",
      copy: "Fresh-filled baps, baguettes and hot melts from the chilled counter.",
    },
    {
      title: "Coffee & proper tea",
      copy: "A steady brew for the Chiltern corner — sit in or take away.",
    },
  ],
  reviews: [
    {
      quote:
        "Friendly owners and a proper corner-café welcome — the kind of place you return to on a Marylebone morning.",
      theme: "Warm hospitality",
    },
    {
      quote:
        "Breakfast baps done right, with Chinese dishes on the board too — East meets West without fuss.",
      theme: "East-meets-West menu",
    },
    {
      quote:
        "Streetside tables on the Chiltern corner make it easy to pause with coffee before the day starts.",
      theme: "Corner location",
    },
  ],
} as const;
