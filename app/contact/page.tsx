"use client";

import { useState } from "react";
import { BUSINESS } from "@/lib/data";

interface FormData {
  name: string;
  phone: string;
  items: string;
  orderType: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", items: "", orderType: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name";
    if (!form.phone.trim()) newErrors.phone = "Please enter your phone number";
    if (!form.items.trim()) newErrors.items = "Please tell us what you'd like";
    if (!form.orderType) newErrors.orderType = "Please select delivery or pickup";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm({ name: "", phone: "", items: "", orderType: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const INFO_ITEMS = [
    { icon: "📍", label: "Address", value: BUSINESS.address },
    { icon: "📞", label: "Phone", value: BUSINESS.phoneDisplay, href: `tel:${BUSINESS.phone}` },
    { icon: "🕐", label: "Hours", value: BUSINESS.hours },
    { icon: "🛵", label: "Delivery", value: "Available — ask when you call" },
  ];

  return (
    <>
      <section className="bg-orange px-5 pt-10 pb-8 text-center">
        <h1 className="font-playfair text-3xl md:text-4xl font-black text-white mb-2">
          Get In Touch
        </h1>
        <p className="text-white/85 text-sm max-w-sm mx-auto">
          Call us, WhatsApp us, or fill in the form — we&apos;re always available
        </p>
      </section>

      <div className="max-w-3xl mx-auto px-5 py-8 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="section-heading mb-1">Contact Info</h2>
          <div className="divider" />

          <div className="card p-5 mt-4 space-y-4">
            {INFO_ITEMS.map((item) => (
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

          <div className="mt-4 space-y-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center justify-center gap-2 w-full bg-green text-white font-semibold py-3.5 rounded-xl hover:bg-green-mid active:scale-[0.98] transition-all duration-200 text-sm"
            >
              📞 Call to Order: {BUSINESS.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}?text=Hello%20Muskhad%2C%20I%20would%20like%20to%20place%20an%20order`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-semibold py-3.5 rounded-xl hover:bg-[#20B85A] active:scale-[0.98] transition-all duration-200 text-sm"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>

        <div>
          <h2 className="section-heading mb-1">Place an Order</h2>
          <div className="divider" />

          {submitted ? (
            <div className="mt-4 card p-6 text-center">
              <div className="text-5xl mb-3">✅</div>
              <h3 className="font-playfair text-lg font-bold text-brand-dark mb-2">Order Received!</h3>
              <p className="text-brand-muted text-sm mb-4">
                We&apos;ll call you shortly to confirm your order. Thank you!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-orange text-sm font-semibold hover:underline"
              >
                Place another order
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4 space-y-4" noValidate>
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1.5">Your Name</label>
                <input
                  type="text" name="name" value={form.name} onChange={handleChange}
                  placeholder="e.g. Amina Ibrahim"
                  className={`w-full bg-white border rounded-xl px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-orange ${errors.name ? "border-red-400" : "border-brand-border"}`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1.5">Phone Number</label>
                <input
                  type="tel" name="phone" value={form.phone} onChange={handleChange}
                  placeholder="e.g. 080xxxxxxxx"
                  className={`w-full bg-white border rounded-xl px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-orange ${errors.phone ? "border-red-400" : "border-brand-border"}`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1.5">What would you like?</label>
                <textarea
                  name="items" value={form.items} onChange={handleChange}
                  placeholder="e.g. 1 grilled catfish, 2 fried chicken, 1 jollof rice..."
                  rows={3}
                  className={`w-full bg-white border rounded-xl px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-orange resize-none ${errors.items ? "border-red-400" : "border-brand-border"}`}
                />
                {errors.items && <p className="text-red-500 text-xs mt-1">{errors.items}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1.5">Order Type</label>
                <select
                  name="orderType" value={form.orderType} onChange={handleChange}
                  className={`w-full bg-white border rounded-xl px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-orange ${errors.orderType ? "border-red-400" : "border-brand-border"}`}
                >
                  <option value="">Select...</option>
                  <option value="delivery">Delivery</option>
                  <option value="pickup">Pickup</option>
                </select>
                {errors.orderType && <p className="text-red-500 text-xs mt-1">{errors.orderType}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-orange text-white font-semibold py-3.5 rounded-xl hover:bg-orange-light active:scale-[0.98] transition-all duration-200 text-sm"
              >
                Send Order Request
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
