import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatCTA from "@/components/FloatCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Muskhad Fish & Chicken | Kano's #1 Fish & Chicken Restaurant",
  description:
    "Fresh grilled and fried fish & chicken in Kano. Open 24 hours. Delivery available. Located on Zaria Road, Tarauni, Kano.",
  keywords: "fish, chicken, Kano, Tarauni, grilled, fried, delivery, 24 hours",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-cream antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatCTA />
      </body>
    </html>
  );
}
