/**
 * Transcribed from the in-store printed menu card at 54 Blandford Street
 * (both sides). Item order follows the printed card.
 */

export type MenuItem = {
  name: string;
  /** Parenthetical detail printed under or beside the item name. */
  note?: string;
  /** Single price, shown across the full price column. */
  price?: string;
  /** Several priced options for one item, stacked in the price column. */
  priceLines?: readonly string[];
  /** Small / large pair, used by groups that declare priceColumns. */
  priceSmall?: string;
  priceLarge?: string;
};

export type MenuGroup = {
  title?: string;
  /** Headers for the two-price layout, e.g. ["Small", "Large"]. */
  priceColumns?: readonly [string, string];
  items: readonly MenuItem[];
  footnote?: string;
};

export type MenuCategory = {
  id: string;
  /** Short label for the jump nav. */
  label: string;
  title: string;
  kicker: string;
  groups: readonly MenuGroup[];
};

export const setMeals = [
  {
    id: "set-a",
    badge: "Set A",
    price: "£9.50",
    items: "Bacon, Egg, Sausage & Baked Beans",
    extras: "Tea / Coffee & Toast",
  },
  {
    id: "set-b",
    badge: "Set B",
    price: "£10.70",
    items: "Bacon, Egg, Sausage, Hash Browns, Baked Beans & Mushrooms",
    extras: "Tea / Coffee & Toast",
  },
  {
    id: "set-veggie",
    badge: "Veggie",
    price: "£10.70",
    items: "2 Eggs, Hash Browns, Mushroom, Baked Beans & Tomato",
    extras: "Tea / Coffee & Toast",
  },
] as const;

export const setMealsServingTimes = [
  "Mon–Fri 6:30am – 12:30pm",
  "Sat 7:00am – 4:30pm",
] as const;

export const menuCategories: readonly MenuCategory[] = [
  {
    id: "breakfast",
    label: "Breakfast",
    title: "Breakfast & Combos",
    kicker: "Off the grill, from 6:30am",
    groups: [
      {
        items: [
          { name: "Breakfast", note: "Bacon, Egg, Sausage", price: "£7.70" },
          {
            name: "Combo",
            note: "Bacon, Egg, Sausage, Hash Browns & Salad",
            price: "£9.80",
          },
          { name: "Bacon & Egg", price: "£5.70" },
          { name: "Egg", price: "£3.80" },
          { name: "Double Eggs", price: "£5.20" },
          { name: "Sausage & Bacon", price: "£6.50" },
          { name: "Sausage", price: "£4.50" },
          { name: "Bacon", price: "£4.50" },
        ],
      },
    ],
  },
  {
    id: "omelettes",
    label: "Omelettes",
    title: "Omelettes",
    kicker: "Folded to order",
    groups: [
      {
        items: [
          { name: "Cheese & Bacon", price: "£9.50" },
          { name: "Cheese & Ham", price: "£9.50" },
          { name: "Cheese & Tomato", price: "£8.50" },
          { name: "Cheese", price: "£7.20" },
          { name: "Plain", price: "£6.30" },
        ],
      },
    ],
  },
  {
    id: "hot-sandwiches",
    label: "Hot Sandwiches",
    title: "Tasty Hot Sandwiches",
    kicker: "Pressed hot off the grill",
    groups: [
      {
        items: [
          { name: "Tuna & Cheese Melt", price: "£6.90" },
          { name: "Cheese Melt", price: "£6.30" },
          { name: "Cheese & Tomato Melt", price: "£6.50" },
          { name: "Bacon & Cheese Melt", price: "£6.90" },
          { name: "Ham & Cheese Melt", price: "£6.90" },
          { name: "Chicken Escalope Cheese Melt", price: "£7.20" },
          { name: "Crispy Bacon & Cheese Melt", price: "£6.90" },
          { name: "Tuna Mixed", price: "£8.50" },
        ],
        footnote: "Ciabatta, Bap or Baguette +80p",
      },
    ],
  },
  {
    id: "cold-sandwiches",
    label: "Cold Sandwiches",
    title: "Tasty Cold Sandwiches",
    kicker: "Made up fresh at the counter",
    groups: [
      {
        items: [
          { name: "BLT", price: "£5.90" },
          { name: "Egg & Mayo", price: "£5.00" },
          { name: "Egg Mayo & Ham", price: "£6.80" },
          { name: "Crispy Bacon & Avocado", price: "£6.50" },
          { name: "Tuna", price: "£6.30" },
          { name: "Coronation Chicken & Salad", price: "£6.30" },
          { name: "Chicken Honey Mustard & Salad", price: "£6.30" },
        ],
      },
    ],
  },
  {
    id: "jackets",
    label: "Jackets & Salad",
    title: "Jacket Potatoes & Salad",
    kicker: "Oven-baked, loaded hot",
    groups: [
      {
        title: "Jacket Potato",
        items: [
          { name: "Cheese & Baked Beans", price: "£8.50" },
          { name: "Baked Beans", price: "£6.50" },
          { name: "Cheese & Butter", price: "£7.50" },
          { name: "Crispy Bacon Cheese", price: "£9.50" },
          { name: "Tuna Mix", price: "£7.90" },
        ],
      },
      {
        title: "Salad",
        items: [
          {
            name: "Mixed Salad",
            note: "Ham, Egg, Tuna & Avocado",
            price: "£10.90",
          },
        ],
      },
    ],
  },
  {
    id: "chinese",
    label: "Chinese",
    title: "Popular Chinese Dishes",
    kicker: "Wok and noodle bar, cooked to order",
    groups: [
      {
        items: [
          { name: "Chicken Vermicelli", price: "£10.90" },
          { name: "BBQ Pork & Boiled Rice", price: "£12.90" },
          { name: "Special Fried Rice", price: "£10.90" },
          {
            name: "Special Fried Rice",
            note: "With Sunshine Egg",
            price: "£11.90",
          },
          { name: "Stir Fry Chicken Udon", price: "£11.50" },
          { name: "Chicken Curry Boiled Rice", price: "£11.90" },
          {
            name: "Crispy Chicken Curry Sauce & Boiled Rice",
            price: "£12.90",
          },
          { name: "Chicken Udon Soup", price: "£11.50" },
          { name: "Chicken Sweet Corn Soup", price: "£6.80" },
          { name: "Won Ton Soup", price: "£7.90" },
          { name: "Curry Laksa Vermicelli Soup", price: "£12.90" },
          { name: "Won Ton Noodle", price: "£12.90" },
          {
            name: "Chicken / Pork Dumplings",
            priceLines: ["5 pcs £7.80", "8 pcs £9.80"],
          },
        ],
      },
    ],
  },
  {
    id: "coffee",
    label: "Coffee & Tea",
    title: "Coffee & Tea",
    kicker: "Pulled fresh all day",
    groups: [
      {
        title: "Coffee",
        priceColumns: ["Small", "Large"],
        items: [
          { name: "Flat White", priceSmall: "£3.50", priceLarge: "£3.90" },
          { name: "Latte", priceSmall: "£3.50", priceLarge: "£3.90" },
          { name: "Cappuccino", priceSmall: "£3.60", priceLarge: "£4.20" },
          { name: "Americano", priceSmall: "£3.50", priceLarge: "£3.90" },
          { name: "Macchiato", priceSmall: "£3.20", priceLarge: "£3.50" },
          { name: "Hot Chocolate", priceSmall: "£3.80", priceLarge: "£4.20" },
          { name: "Mocha", priceSmall: "£4.20", priceLarge: "£4.50" },
          { name: "Tea", price: "£2.00" },
          { name: "Espresso", price: "£2.90 · Double £3.50" },
        ],
        footnote: "Soy, Oat or Almond Milk +40p",
      },
      {
        title: "Herbal Tea",
        items: [
          { name: "Green Tea", price: "£3.20" },
          { name: "Lemon Ginger", price: "£3.20" },
          { name: "Earl Grey", price: "£3.20" },
          { name: "Peppermint", price: "£3.20" },
          { name: "Camomile", price: "£3.20" },
        ],
      },
    ],
  },
  {
    id: "cold-drinks",
    label: "Cold Drinks",
    title: "Cold Drinks",
    kicker: "Squeezed and poured over ice",
    groups: [
      {
        items: [
          { name: "Fresh Squeezed Orange", price: "£4.90" },
          { name: "Fresh Watermelon Juice", price: "£4.90" },
          { name: "Lemon Ice Tea", price: "£4.30" },
          { name: "Iced Latte", price: "£4.30" },
        ],
      },
    ],
  },
  {
    id: "cakes",
    label: "Cakes",
    title: "Cakes & Pastries",
    kicker: "From the counter rail",
    groups: [
      {
        items: [
          { name: "Danish", price: "£4.20" },
          { name: "Croissant", price: "£3.20" },
          { name: "Muffin", price: "£3.60" },
          { name: "Lemon Slice", price: "£3.30" },
          { name: "Scone", price: "£3.60" },
          { name: "Butter Shortcake", price: "£2.20" },
        ],
      },
    ],
  },
];
