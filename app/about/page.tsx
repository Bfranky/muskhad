import type { Metadata } from "next";
import { BUSINESS, FEATURES } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Muskhad Fish & Chicken",
  description:
    "Learn about Muskhad Fish and Chicken — Kano's favourite fish and chicken spot, open 24 hours with delivery available.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green to-[#0D2B1E] px-5 pt-10 pb-8 text-center">
        <h1 className="font-playfair text-3xl md:text-4xl font-black text-white mb-3">
          Our Story
        </h1>
        <p className="text-white/75 text-sm max-w-sm mx-auto leading-relaxed">
          A family favourite rooted in the heart of Kano — serving fresh,
          honest food day and night
        </p>
      </section>

      <section className="px-5 py-10 max-w-3xl mx-auto">
        <h2 className="section-heading">Who We Are</h2>
        <div className="divider" />
        <div className="space-y-4 text-brand-muted text-sm leading-relaxed mt-4">
          <p>
            Muskhad Fish and Chicken was born out of a simple belief: everyone
            deserves access to fresh, delicious food — no matter what time of
            day or night. Located on Zaria Road in Tarauni, Kano, we&apos;ve
            built our reputation on the quality of our fish, the crunch of our
            chicken, and the cleanliness of our space.
          </p>
          <p>
            We operate 24 hours a day because hunger doesn&apos;t keep office
            hours. Whether you&apos;re stopping by after work, ordering late
            night, or grabbing a quick lunch — Muskhad is always ready for you.
          </p>
          <p>
            From our smoky grilled catfish to our golden fried chicken, every
            dish is prepared with care using fresh ingredients sourced daily.
            Our customers keep coming back not just for the food, but for the
            warm, clean, welcoming environment we maintain at all times.
          </p>
        </div>
      </section>

      <section className="px-5 pb-10 max-w-3xl mx-auto">
        <h2 className="section-heading">Why Choose Muskhad</h2>
        <div className="divider" />
        <p className="section-sub mb-6">The four pillars we never compromise on</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {FEATURES.map((feat) => (
            <div key={feat.title} className="card p-4 text-center hover:shadow-md transition-shadow duration-200">
              <div className="text-3xl mb-2">{feat.icon}</div>
              <h3 className="font-semibold text-brand-dark text-sm mb-1">{feat.title}</h3>
              <p className="text-brand-muted text-xs leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 pb-10 max-w-3xl mx-auto">
        <h2 className="section-heading">Find Us</h2>
        <div className="divider" />
        <div className="card p-5 space-y-4 mt-4">
          {[
            { icon: "📍", label: "Address", value: BUSINESS.address },
            { icon: "📞", label: "Phone", value: BUSINESS.phoneDisplay, href: `tel:${BUSINESS.phone}` },
            { icon: "🕐", label: "Hours", value: BUSINESS.hours },
            { icon: "🛵", label: "Delivery", value: "Available — ask when you call" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <span className="text-orange text-lg flex-shrink-0 mt-0.5">{item.icon}</span>
              <div>
                <p className="text-xs text-brand-muted font-semibold uppercase tracking-wider mb-0.5">
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href} className="text-sm text-brand-dark hover:text-orange transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-brand-dark">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 bg-green-light border border-green/30 rounded-2xl p-8 text-center">
          <div className="text-5xl mb-3">📍</div>
          <p className="font-semibold text-green text-base mb-1">Tarauni, Kano</p>
          <p className="text-green-mid text-sm leading-relaxed">
            Yankifi, Zaria Road<br />
            Behind Azman Office<br />
            Tarauni, Kano 700403
          </p>
        </div>

        <a
          href={`tel:${BUSINESS.phone}`}
          className="mt-4 block w-full text-center bg-green text-white font-semibold py-3.5 rounded-xl hover:bg-green-mid active:scale-[0.98] transition-all duration-200 text-sm"
        >
          📞 Call: {BUSINESS.phoneDisplay}
        </a>
      </section>

      <section className="mx-5 mb-10 max-w-3xl md:mx-auto">
        <div className="bg-orange rounded-2xl p-6 text-center">
          <h3 className="font-playfair text-xl font-bold text-white mb-2">
            Ready to Taste the Difference?
          </h3>
          <p className="text-white/85 text-sm mb-4">Order online or visit us at Tarauni, Kano</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-orange font-bold px-6 py-3 rounded-xl hover:bg-orange-pale active:scale-95 transition-all duration-200 text-sm"
          >
            Place an Order
          </Link>
        </div>
      </section>
    </>
  );
}
