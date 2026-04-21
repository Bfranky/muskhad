export interface MenuItem {
  id: string;
  category: "fish" | "chicken" | "combo" | "sides" | "drinks";
  icon: string;
  name: string;
  description: string;
  price: string;
  image: string;
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

// All images from Unsplash (free, no attribution required for commercial use)
export const MENU_ITEMS: MenuItem[] = [
  {
    id: "1",
    category: "fish",
    icon: "🐟",
    name: "Grilled Catfish",
    description: "Whole catfish charcoal-grilled with aromatic spices",
    price: "₦3,500",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: "2",
    category: "fish",
    icon: "🐠",
    name: "Fried Tilapia",
    description: "Crispy golden tilapia, well seasoned and fried",
    price: "₦2,800",
    image: "https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: "3",
    category: "fish",
    icon: "🔥",
    name: "Pepper Fish",
    description: "Smoked fish in a rich, spicy Nigerian pepper sauce",
    price: "₦4,000",
    image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: "4",
    category: "fish",
    icon: "🥢",
    name: "Fish Suya",
    description: "Skewered spiced fish, flame-grilled to perfection",
    price: "₦2,000",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: "5",
    category: "chicken",
    icon: "🍗",
    name: "Fried Chicken",
    description: "Crispy, golden fried chicken pieces with secret seasoning",
    price: "₦2,500",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: "6",
    category: "chicken",
    icon: "🔥",
    name: "Grilled Chicken",
    description: "Juicy charcoal-grilled chicken, smoky and tender",
    price: "₦3,000",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c2?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: "7",
    category: "chicken",
    icon: "🥢",
    name: "Chicken Suya",
    description: "Spiced skewered grilled chicken — a Kano favourite",
    price: "₦2,200",
    image: "https://images.unsplash.com/photo-1529566652340-2c41a1eb6d19?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: "8",
    category: "chicken",
    icon: "🌶️",
    name: "Peppered Chicken",
    description: "Chicken stewed in bold, spicy pepper sauce",
    price: "₦3,500",
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: "9",
    category: "combo",
    icon: "🥘",
    name: "Fish + Jollof Rice",
    description: "Grilled catfish with smoky Nigerian party jollof",
    price: "₦5,500",
    image: "https://images.unsplash.com/photo-1674564069834-5d3c9ea99dc5?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: "10",
    category: "combo",
    icon: "🍱",
    name: "Chicken + Rice Combo",
    description: "Fried chicken with white rice or jollof rice",
    price: "₦4,500",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: "11",
    category: "combo",
    icon: "👨‍👩‍👧‍👦",
    name: "Family Pack",
    description: "4 grilled fish + 4 fried chicken + 2 sides of your choice",
    price: "₦18,000",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: "12",
    category: "combo",
    icon: "🤝",
    name: "Duo Special",
    description: "1 fish + 1 chicken + rice + drink",
    price: "₦7,500",
    image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: "13",
    category: "sides",
    icon: "🍚",
    name: "Jollof Rice",
    description: "Smoky Nigerian party-style jollof rice",
    price: "₦1,200",
    image: "https://images.unsplash.com/photo-1536304993881-ff86e0c9c940?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: "14",
    category: "sides",
    icon: "🥗",
    name: "Coleslaw",
    description: "Fresh creamy homemade coleslaw",
    price: "₦500",
    image: "https://images.unsplash.com/photo-1621276942913-06c18b59a1c4?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: "15",
    category: "sides",
    icon: "🍌",
    name: "Fried Plantain",
    description: "Ripe golden dodo, fried to caramelised perfection",
    price: "₦600",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: "16",
    category: "sides",
    icon: "🍟",
    name: "Chips (Fries)",
    description: "Crispy seasoned potato chips",
    price: "₦800",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: "17",
    category: "drinks",
    icon: "🥤",
    name: "Soft Drinks",
    description: "Coke, Fanta, Sprite — ice cold",
    price: "₦400",
    image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: "18",
    category: "drinks",
    icon: "💧",
    name: "Bottled Water",
    description: "500ml chilled mineral water",
    price: "₦200",
    image: "https://images.unsplash.com/photo-1559839914-17aae19cec71?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: "19",
    category: "drinks",
    icon: "🧃",
    name: "Fruit Juice",
    description: "Chilled pineapple, orange or mango juice",
    price: "₦600",
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop&auto=format",
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
