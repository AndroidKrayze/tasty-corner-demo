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
    weekdays: "Mon–Sat ~06:30–16:30",
    sunday: "Sunday closed",
    note:
      "Hours can vary between directories — please confirm on Google Maps or with a quick call before you set out.",
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
  /** Decoded 2026-09-16 from exterior chalk / A-board + interior chalkboard photos. Soft-confirm live. */
  menuNote:
    "Specials boards change — chalkboard £ may be older than the outdoor chalk and Chinese A-board. Soft-confirm at the counter.",
  menuSections: [
    {
      id: "breakfast",
      label: "All-day breakfast",
      eyebrow: "Morning plates",
      intro:
        "Sidewalk chalk reads All Day English Breakfast from £6.90. Baps, toast and pastry from the takeaway board.",
      items: [
        {
          name: "All Day English Breakfast",
          blurb: "The Chiltern corner plated classic — eggs, rashers, the works.",
          price: "From £6.90",
          priceSource: "chalk" as const,
        },
        {
          name: "Bacon sandwich",
          blurb: "The Marylebone morning staple, wrapped and ready.",
          price: null,
        },
        {
          name: "Bacon & egg",
          blurb: "Two early-doors staples in one bap.",
          price: null,
        },
        {
          name: "Egg sandwich",
          blurb: "Simple, hot, and generous.",
          price: null,
        },
        {
          name: "Sausage sandwich",
          blurb: "Proper filling before Baker Street.",
          price: null,
        },
        {
          name: "Toast",
          blurb: "With butter — or with jam when you want sweet.",
          price: null,
        },
        {
          name: "Bagel / buns",
          blurb: "A lighter start with the coffee.",
          price: null,
        },
        {
          name: "Croissant",
          blurb: "Flaky, from the pastry rail.",
          price: null,
        },
        {
          name: "Danish pastry",
          blurb: "For slower mornings on the corner.",
          price: null,
        },
      ],
    },
    {
      id: "sandwiches",
      label: "Sandwiches",
      eyebrow: "The chilled rail",
      intro:
        "Ciabatta, bap or baguette — add 30p for the upgrade. Built from the takeaway chalkboard.",
      extras: "Bread upgrade: ciabatta / bap / baguette +30p · Eat-in price applies",
      items: [
        {
          name: "Honey roast ham",
          blurb: "Classic counter staple.",
          price: null,
        },
        {
          name: "Turkey breast",
          blurb: "Lean and clean for the office run.",
          price: null,
        },
        {
          name: "BLT",
          blurb: "Bacon, lettuce, tomato — done properly.",
          price: null,
        },
        {
          name: "Salami",
          blurb: "A little spice on the rail.",
          price: null,
        },
        {
          name: "Plain chicken",
          blurb: "Everyday roast-style filling.",
          price: null,
        },
        {
          name: "Chicken Chinese",
          blurb: "East-meets-West in a sandwich.",
          price: null,
        },
        {
          name: "Chicken escalope",
          blurb: "Crisp cutlet — a Blandford favourite.",
          price: null,
        },
        {
          name: "Honey mustard chicken",
          blurb: "Sweet heat, lunch-hour ready.",
          price: null,
        },
        {
          name: "Coronation chicken",
          blurb: "Yellow, creamy, old-school London.",
          price: null,
        },
        {
          name: "Bacon & avocado",
          blurb: "Rich and satisfying.",
          price: null,
        },
        {
          name: "Smoked salmon",
          blurb: "Soft slices, deli-counter calm.",
          price: null,
        },
        {
          name: "Egg mayo & chives",
          blurb: "Creamy classic with a herb lift.",
          price: null,
        },
        {
          name: "Tuna mix",
          blurb: "A steady lunch favourite.",
          price: null,
        },
        {
          name: "Swiss",
          blurb: "Mild cheese, clean bite.",
          price: null,
        },
        {
          name: "Brie",
          blurb: "Soft, creamy, lunch-hour ready.",
          price: null,
        },
        {
          name: "BBQ chicken",
          blurb: "Sticky glaze from the fillings trays.",
          price: null,
        },
        {
          name: "Salt beef",
          blurb: "Old-school sandwich-bar luxury.",
          price: null,
        },
      ],
    },
    {
      id: "melts",
      label: "Melts",
      eyebrow: "Hot from the press",
      intro: "Oven-hot melts from the chalkboard — cheese-forward and lunch-ready.",
      items: [
        {
          name: "French melt",
          blurb: "A continental twist on the press.",
          price: null,
        },
        {
          name: "Mega mozz",
          blurb: "Stretchy mozzarella, generously done.",
          price: null,
        },
        {
          name: "Cheese melt",
          blurb: "The simple classic.",
          price: null,
        },
        {
          name: "Swiss melt",
          blurb: "Mild and melty.",
          price: null,
        },
        {
          name: "Tuna melt",
          blurb: "Hot tuna under a cheese blanket.",
          price: null,
        },
        {
          name: "Turkey melt",
          blurb: "Lean turkey, toasted through.",
          price: null,
        },
        {
          name: "Ham & cheese melt",
          blurb: "The reliable workday press.",
          price: null,
        },
        {
          name: "Italian melt",
          blurb: "Mediterranean fillings, hot and crisp.",
          price: null,
        },
        {
          name: "New York melt",
          blurb: "Deli-counter energy in a hot wrap.",
          price: null,
        },
        {
          name: "Cajun melt",
          blurb: "A little spice on the press.",
          price: null,
        },
        {
          name: "Crispy bacon melt",
          blurb: "Crunch meets cheese.",
          price: null,
        },
      ],
    },
    {
      id: "jackets",
      label: "Jacket potatoes",
      eyebrow: "Oven-baked",
      intro:
        "Fresh jacket potatoes from the poster and the oven-baked board — toppings as available.",
      items: [
        {
          name: "Cheese & butter",
          blurb: "The quiet classic.",
          price: null,
        },
        {
          name: "Coleslaw & cheese",
          blurb: "Creamy crunch on a hot jacket.",
          price: null,
        },
        {
          name: "Tuna mix",
          blurb: "Hearty lunch on a baked potato.",
          price: null,
        },
        {
          name: "Bacon & cheese",
          blurb: "Savoury and generous.",
          price: null,
        },
        {
          name: "Choice of salads",
          blurb: "Ask what’s on the counter today.",
          price: null,
        },
        {
          name: "Coleslaw or baked beans",
          blurb: "Simple toppings, done warm.",
          price: null,
        },
      ],
    },
    {
      id: "chinese",
      label: "Chinese specials",
      eyebrow: "Tasty Meals A-board",
      intro:
        "Outdoor printed specials — photo-confirmed prices from the Blandford A-board. Handwritten indoor specials change; ask what’s on.",
      items: [
        {
          name: "BBQ pork and boiled rice",
          blurb: "Char siu comfort with plain rice — the house Chinese plate.",
          price: "£6.90",
          priceSource: "aboard" as const,
        },
        {
          name: "Peking dumplings (chicken / pork)",
          blurb: "Steamed dumplings from the outdoor specials tiles.",
          price: "£5.20",
          priceSource: "aboard" as const,
        },
        {
          name: "Won tom soup",
          blurb: "As spelled on the board — wonton broth for colder mornings.",
          price: "£5.20",
          priceSource: "aboard" as const,
        },
        {
          name: "Chicken vermicelli",
          blurb: "Glass noodles, chicken, East-meets-West lunch energy.",
          price: "£6.90",
          priceSource: "aboard" as const,
        },
      ],
      alsoLoved:
        "Also loved (ask for today’s handwritten specials): fried chicken noodles, Chinese chicken curry, special fried rice, udon.",
    },
    {
      id: "drinks",
      label: "Drinks",
      eyebrow: "Cup in hand",
      intro:
        "Lavazza coffee, proper tea, and cold cans from the chalkboard. Soft-confirm live prices.",
      groups: [
        {
          title: "Hot",
          items: [
            {
              name: "Latte",
              blurb: "Milk-forward morning pace.",
              price: null,
            },
            {
              name: "Cappuccino",
              blurb: "Foam, warmth, a slower minute.",
              price: null,
            },
            {
              name: "Fresh ground coffee",
              blurb: "Lavazza — fresh brewed, take away or sit in.",
              price: null,
            },
            {
              name: "Espresso",
              blurb: "Short and decisive.",
              price: null,
            },
            {
              name: "Mocha",
              blurb: "Coffee with a chocolate lift.",
              price: null,
            },
            {
              name: "Hot chocolate",
              blurb: "For colder Marylebone mornings.",
              price: null,
            },
            {
              name: "Tea",
              blurb: "Proper tea — the quiet companion.",
              price: null,
            },
          ],
        },
        {
          title: "Cold",
          items: [
            {
              name: "Coke / Pepsi / 7up / Ribena",
              blurb: "Fridge classics.",
              price: null,
            },
            {
              name: "Water",
              blurb: "Cold and simple.",
              price: null,
            },
            {
              name: "Tropicana",
              blurb: "Juice on the go.",
              price: null,
            },
            {
              name: "Vitamin water",
              blurb: "Bottled from the cold rail.",
              price: null,
            },
          ],
        },
      ],
    },
  ],
  specialties: [
    "Outdoor Chinese A-board beside an English takeaway chalkboard",
    "All-day English breakfast from the sidewalk chalk",
    "Streetside tables on the Chiltern corner of Blandford",
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

export type MenuSection = (typeof siteConfig.menuSections)[number];
