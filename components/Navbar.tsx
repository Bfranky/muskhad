"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Fish } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="sticky top-0 z-50 bg-green shadow-md">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-playfair text-white text-lg font-bold"
            onClick={() => setOpen(false)}
          >
            <Fish className="w-5 h-5 text-orange-light" />
            Muskhad
            <span className="text-orange-light">Fish & Chicken</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "text-white bg-white/20"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 bg-orange text-white text-sm font-semibold px-4 py-1.5 rounded-lg hover:bg-orange-light transition-all duration-200"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 top-14 bg-green z-40 flex flex-col p-6 gap-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`px-4 py-4 rounded-xl text-lg font-medium transition-all duration-200 ${
                pathname === link.href
                  ? "text-white bg-white/15"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 bg-orange text-white text-center text-lg font-semibold px-4 py-4 rounded-xl hover:bg-orange-light transition-all duration-200"
          >
            Order Now →
          </Link>
        </div>
      )}
    </>
  );
}
