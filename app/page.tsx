import Link from "next/link";
import BadgeRow from "@/components/BadgeRow";
import MenuCard from "@/components/MenuCard";
import ReviewCard from "@/components/ReviewCard";
import { MENU_ITEMS, FEATURES, REVIEWS } from "@/lib/data";

const FEATURED_IDS = ["1", "5", "3", "9"];

export default function HomePage() {
  const featuredItems = MENU_ITEMS.filter((item) =>
    FEATURED_IDS.includes(item.id)
  );

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-green to-[#0D2B1E] px-5 pt-12 pb-10 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-orange/10 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-36 h-36 rounded-full bg-orange/8 translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="relative z-10 max-w-lg mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange/20 border border-orange/40 text-orange-light text-xs font-semibold px-3 py-1.5 rounded-full mb-5 tracking-wide uppercase">
            ⭐ 5.0 Rating · Kano&apos;s Finest
          </div>

          <h1 className="font-playfair text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Fresh Fish &amp;{" "}
            <span className="text-orange-light">Chicken</span>, 24/7
          </h1>

          <p className="text-white/75 text-base leading-relaxed mb-6 max-w-sm mx-auto">
            Grilled, fried, and full of flavour. Serving Kano the freshest catch
            and crispiest chicken around the clock.
          </p>

          <div className="mb-7">
            <BadgeRow />
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/menu"
              className="bg-orange text-white font-semibold px-6 py-3 rounded-xl hover:bg-orange-light active:scale-95 transition-all duration-200 text-sm"
            >
              View Menu
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/10 active:scale-95 transition-all duration-200 text-sm"
            >
              Order Now →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-5 py-10 max-w-4xl mx-auto">
        <h2 className="section-heading">Why Choose Us</h2>
        <div className="divider" />
        <p className="section-sub mb-6">We take fresh, fast, and clean seriously</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {FEATURES.map((feat) => (
            <div
              key={feat.title}
              className="card p-4 text-center hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-3xl mb-2">{feat.icon}</div>
              <h3 className="font-semibold text-brand-dark text-sm mb-1">
                {feat.title}
              </h3>
              <p className="text-brand-muted text-xs leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* POPULAR ITEMS */}
      <section className="px-5 pb-10 max-w-4xl mx-auto">
        <h2 className="section-heading">Popular Items</h2>
        <div className="divider" />
        <p className="section-sub mb-6">Customer favourites, made fresh daily</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
          {featuredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
        <Link
          href="/menu"
          className="block w-full text-center bg-orange text-white font-semibold py-3.5 rounded-xl hover:bg-orange-light active:scale-[0.98] transition-all duration-200 text-sm"
        >
          See Full Menu
        </Link>
      </section>

      {/* REVIEW */}
      <section className="px-5 pb-10 max-w-4xl mx-auto">
        <h2 className="section-heading">What Customers Say</h2>
        <div className="divider" />
        <p className="section-sub mb-6">Rated 5 stars on Google</p>
        {REVIEWS.map((review) => (
          <ReviewCard key={review.author} review={review} />
        ))}
      </section>

      {/* CTA BANNER */}
      <section className="mx-5 mb-10 bg-orange rounded-2xl px-6 py-8 text-center max-w-4xl md:mx-auto">
        <h2 className="font-playfair text-2xl font-bold text-white mb-2">
          Hungry? We&apos;re Open Now
        </h2>
        <p className="text-white/85 text-sm mb-5">
          Call us or WhatsApp to place your order — delivery available!
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a
            href="tel:08033396107"
            className="bg-white text-orange font-bold px-6 py-3 rounded-xl hover:bg-orange-pale active:scale-95 transition-all duration-200 text-sm"
          >
            📞 Call Now
          </a>
          <a
            href="https://wa.me/2348033396107?text=Hello%20Muskhad%2C%20I%20want%20to%20place%20an%20order"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green text-white font-bold px-6 py-3 rounded-xl hover:bg-green-mid active:scale-95 transition-all duration-200 text-sm"
          >
            💬 WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
