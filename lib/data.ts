export interface MenuItem {
  id: string;
  category: "fish" | "chicken" | "combo" | "sides" | "drinks";
  icon: string;
  name: string;
  description: string;
  price: string;
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
}

export const BUSINESS = {
  name: "Muskhad Fish & Chicken",
  tagline: "Kano's Finest — Fresh, Hot & 24/7",
  phone: "08033396107",
  phoneDisplay: "0803 339 6107",
  whatsapp: "2348033396107",
  address: "Yankifi, Zaria Rd, behind Azman Office, Tarauni, Kano 700403",
  city: "Tarauni, Kano",
  hours: "Open 24 Hours, 7 Days a Week",
  rating: 5.0,
  reviewCount: 1,
} as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "1",
    category: "fish",
    icon: "🐟",
    name: "Grilled Catfish",
    description: "Whole catfish charcoal-grilled with aromatic spices",
    price: "₦3,500",
  },
  {
    id: "2",
    category: "fish",
    icon: "🐠",
    name: "Fried Tilapia",
    description: "Crispy golden tilapia, well seasoned and fried",
    price: "₦2,800",
  },
  {
    id: "3",
    category: "fish",
    icon: "🔥",
    name: "Pepper Fish",
    description: "Smoked fish in a rich, spicy Nigerian pepper sauce",
    price: "₦4,000",
  },
  {
    id: "4",
    category: "fish",
    icon: "🥢",
    name: "Fish Suya",
    description: "Skewered spiced fish, flame-grilled to perfection",
    price: "₦2,000",
  },
  {
    id: "5",
    category: "chicken",
    icon: "🍗",
    name: "Fried Chicken",
    description: "Crispy, golden fried chicken pieces with secret seasoning",
    price: "₦2,500",
  },
  {
    id: "6",
    category: "chicken",
    icon: "🔥",
    name: "Grilled Chicken",
    description: "Juicy charcoal-grilled chicken, smoky and tender",
    price: "₦3,000",
  },
  {
    id: "7",
    category: "chicken",
    icon: "🥢",
    name: "Chicken Suya",
    description: "Spiced skewered grilled chicken — a Kano favourite",
    price: "₦2,200",
  },
  {
    id: "8",
    category: "chicken",
    icon: "🌶️",
    name: "Peppered Chicken",
    description: "Chicken stewed in bold, spicy pepper sauce",
    price: "₦3,500",
  },
  {
    id: "9",
    category: "combo",
    icon: "🥘",
    name: "Fish + Jollof Rice",
    description: "Grilled catfish with smoky Nigerian party jollof",
    price: "₦5,500",
  },
  {
    id: "10",
    category: "combo",
    icon: "🍱",
    name: "Chicken + Rice Combo",
    description: "Fried chicken with white rice or jollof rice",
    price: "₦4,500",
  },
  {
    id: "11",
    category: "combo",
    icon: "👨‍👩‍👧‍👦",
    name: "Family Pack",
    description: "4 grilled fish + 4 fried chicken + 2 sides of your choice",
    price: "₦18,000",
  },
  {
    id: "12",
    category: "combo",
    icon: "🤝",
    name: "Duo Special",
    description: "1 fish + 1 chicken + rice + drink",
    price: "₦7,500",
  },
  {
    id: "13",
    category: "sides",
    icon: "🍚",
    name: "Jollof Rice",
    description: "Smoky Nigerian party-style jollof rice",
    price: "₦1,200",
  },
  {
    id: "14",
    category: "sides",
    icon: "🥗",
    name: "Coleslaw",
    description: "Fresh creamy homemade coleslaw",
    price: "₦500",
  },
  {
    id: "15",
    category: "sides",
    icon: "🍌",
    name: "Fried Plantain",
    description: "Ripe golden dodo, fried to caramelised perfection",
    price: "₦600",
  },
  {
    id: "16",
    category: "sides",
    icon: "🍟",
    name: "Chips (Fries)",
    description: "Crispy seasoned potato chips",
    price: "₦800",
  },
  {
    id: "17",
    category: "drinks",
    icon: "🥤",
    name: "Soft Drinks",
    description: "Coke, Fanta, Sprite — ice cold",
    price: "₦400",
  },
  {
    id: "18",
    category: "drinks",
    icon: "💧",
    name: "Bottled Water",
    description: "500ml chilled mineral water",
    price: "₦200",
  },
  {
    id: "19",
    category: "drinks",
    icon: "🧃",
    name: "Fruit Juice",
    description: "Chilled pineapple, orange or mango juice",
    price: "₦600",
  },
];

export const REVIEWS: Review[] = [
  {
    author: "Kabiru Safwan",
    rating: 5,
    text: "Good and tidy — really enjoyed the experience here! The fish was incredibly fresh and the environment was spotless.",
    date: "2 years ago",
  },
];

export const FEATURES = [
  { icon: "🐟", title: "Always Fresh", description: "Fish sourced fresh every single day from trusted suppliers" },
  { icon: "🕐", title: "Open 24 Hours", description: "We never close — day or night, we're ready for you" },
  { icon: "🛵", title: "Delivery Available", description: "We bring hot, fresh food right to your doorstep" },
  { icon: "✨", title: "Clean & Tidy", description: "Hygienic environment maintained at all times" },
];

export const MENU_CATEGORIES = [
  { key: "all", label: "All" },
  { key: "fish", label: "🐟 Fish" },
  { key: "chicken", label: "🍗 Chicken" },
  { key: "combo", label: "🥘 Combos" },
  { key: "sides", label: "🍚 Sides" },
  { key: "drinks", label: "🥤 Drinks" },
] as const;
