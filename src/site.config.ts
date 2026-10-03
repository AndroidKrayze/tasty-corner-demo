export const siteConfig = {
  name: "Tasty Corner",
  legalName: "The Tasty Corner Cafe & Takeaway",
  tagline: "East meets West on Blandford",
  description:
    "Neighbourhood corner café on the Chiltern corner of Blandford Street, Marylebone — English breakfast, sandwiches & melts, jacket potatoes, Chinese specials, coffee and proper tea.",
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
    weekdayTimes: "6:30am – 4:30pm",
    saturdayTimes: "7:00am – 4:30pm",
    weekdays: "Mon–Fri 6:30am – 4:30pm",
    saturday: "Sat 7:00am – 4:30pm",
    sunday: "Sunday closed",
    note:
      "Set meals are served Mon–Fri 6:30am–12:30pm and Sat 7:00am–4:30pm. Give us a ring if you need something outside those hours.",
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
  /** Transcribed from the in-store printed menu card (both sides). */
  menuNote:
    "Every price here is taken straight from the printed menu card in store.",
  specialties: [
    "Set breakfasts with tea, coffee and toast from 6:30am",
    "Pressed melts, cold sandwiches and loaded jacket potatoes",
    "Wok-cooked Chinese plates, noodles and soups",
  ],
  reviews: [
    {
      quote:
        "Friendly Chinese-family owners who remember faces — a proper corner-café welcome that makes Marylebone mornings feel looked after.",
      theme: "Warm hospitality",
      attribution: "Google review theme",
    },
    {
      quote:
        "Breakfast baps done right, with char siu, vermicelli and wonton on the board too — East meets West without the theatre.",
      theme: "East-meets-West menu",
      attribution: "Google review theme",
    },
    {
      quote:
        "Streetside tables on the Chiltern corner make it easy to pause with coffee before the office rush starts.",
      theme: "Corner location",
      attribution: "Google review theme",
    },
    {
      quote:
        "Full English with toast and tea that regulars praise for value — generous plates, no fuss, and a kettle that doesn’t wait.",
      theme: "Breakfast value",
      attribution: "Google review theme",
    },
    {
      quote:
        "Cheese toasties, bacon baps and special fried rice keep the lunch queue coming back — democratic prices, cheerful service.",
      theme: "Regulars",
      attribution: "Google review theme",
    },
    {
      quote:
        "Handwritten Chinese specials beside the English board — fried chicken noodles and curry when you want something warmer than a sandwich.",
      theme: "Specials board",
      attribution: "Google review theme",
    },
  ],
} as const;

