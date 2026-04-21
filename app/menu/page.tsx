"use client";

import { useState } from "react";
import MenuCard from "@/components/MenuCard";
import { MENU_ITEMS, MENU_CATEGORIES, MenuItem } from "@/lib/data";

type CategoryKey = (typeof MENU_CATEGORIES)[number]["key"];

export default function MenuPage() {
  const [active, setActive] = useState<CategoryKey>("all");

  const filtered: MenuItem[] =
    active === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === active);

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-green to-[#0D2B1E] px-5 pt-10 pb-8 text-center">
        <h1 className="font-playfair text-3xl md:text-4xl font-black text-white mb-2">
          Our Menu
        </h1>
        <p className="text-white/75 text-sm max-w-sm mx-auto">
          Fresh ingredients, bold flavours — crafted daily in Kano
        </p>
      </section>

      <section className="px-5 py-8 max-w-4xl mx-auto">
        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 mb-6 -mx-1 px-1 scrollbar-hide">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key as CategoryKey)}
              className={`flex-shrink-0 text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
                active === cat.key
                  ? "bg-orange border-orange text-white"
                  : "bg-white border-brand-border text-brand-muted hover:border-orange hover:text-orange"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-brand-muted text-xs mb-4">
          {filtered.length} item{filtered.length !== 1 ? "s" : ""}
          {active !== "all" ? ` in ${active}` : ""}
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* Order CTA */}
        <div className="mt-10 bg-orange-pale border border-orange/20 rounded-2xl p-6 text-center">
          <h3 className="font-playfair text-xl font-bold text-brand-dark mb-2">
            Ready to Order?
          </h3>
          <p className="text-brand-muted text-sm mb-4">
            Call us or WhatsApp — we deliver right to your door
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="tel:08033396107"
              className="bg-orange text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-orange-light transition-all text-sm"
            >
              📞 Call to Order
            </a>
            <a
              href="https://wa.me/2348033396107?text=Hello%20Muskhad%2C%20I%20want%20to%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-green-mid transition-all text-sm"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
