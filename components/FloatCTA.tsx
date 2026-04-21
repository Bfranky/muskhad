"use client";

import Link from "next/link";

export default function FloatCTA() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-5 right-4 z-50 flex items-center gap-2 bg-orange text-white text-sm font-semibold px-4 py-3 rounded-full shadow-lg hover:bg-orange-light active:scale-95 transition-all duration-200 md:hidden"
      aria-label="Order Now"
    >
      📞 Order Now
    </Link>
  );
}
