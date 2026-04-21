import Link from "next/link";
import { BUSINESS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/70 py-10 px-5">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-orange-light text-xl">🐟</span>
              <h3 className="font-playfair text-white text-lg font-bold">
                {BUSINESS.name}
              </h3>
            </div>
            <p className="text-sm leading-relaxed">{BUSINESS.tagline}</p>
            <div className="flex items-center gap-1 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-orange-light text-sm">★</span>
              ))}
              <span className="text-xs ml-1">5.0 Rating</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-orange-light mt-0.5 flex-shrink-0">📍</span>
                <span>{BUSINESS.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-light flex-shrink-0">📞</span>
                <a href={`tel:${BUSINESS.phone}`} className="hover:text-white transition-colors">
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-orange-light flex-shrink-0">🕐</span>
                <span>{BUSINESS.hours}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact & Order" },
              ].map((link) => (
                <div key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved. | Tarauni, Kano, Nigeria
        </div>
      </div>
    </footer>
  );
}
