"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

interface InquiryFormProps {
  productName?: string;
  className?: string;
  variant?: "default" | "compact";
}

export function InquiryForm({ productName, className, variant = "default" }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    companyType: "",
    interest: productName || "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={cn("bg-beige-light p-8 text-center", className)}>
        <CheckCircle className="w-12 h-12 text-gold mx-auto mb-4" />
        <h3 className="font-serif text-2xl mb-2">Thank You</h3>
        <p className="text-charcoal/70">Our team will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)} data-form-type="inquiry">
      <div className={variant === "compact" ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 md:grid-cols-2 gap-4"}>
        <div>
          <label htmlFor="name" className="block text-xs tracking-wider uppercase text-charcoal/60 mb-2">Full Name *</label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border border-beige bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs tracking-wider uppercase text-charcoal/60 mb-2">Email *</label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full border border-beige bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs tracking-wider uppercase text-charcoal/60 mb-2">Phone *</label>
          <input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full border border-beige bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold"
          />
        </div>
        <div>
          <label htmlFor="companyType" className="block text-xs tracking-wider uppercase text-charcoal/60 mb-2">Type of Company</label>
          <select
            id="companyType"
            value={formData.companyType}
            onChange={(e) => setFormData({ ...formData, companyType: e.target.value })}
            className="w-full border border-beige bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold"
          >
            <option value="">Select...</option>
            <option value="consumer">Consumer</option>
            <option value="builders">Builders</option>
            <option value="architects">Architects</option>
            <option value="designers">Interior Designers</option>
            <option value="developer">Developer</option>
            <option value="consultant">Consultant</option>
          </select>
        </div>
      </div>
      {productName && (
        <div>
          <label htmlFor="interest" className="block text-xs tracking-wider uppercase text-charcoal/60 mb-2">Interested In</label>
          <input
            id="interest"
            type="text"
            readOnly
            value={formData.interest}
            className="w-full border border-beige bg-beige-light px-4 py-3 text-sm"
          />
        </div>
      )}
      <div>
        <label htmlFor="message" className="block text-xs tracking-wider uppercase text-charcoal/60 mb-2">Message</label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full border border-beige bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold resize-none"
          placeholder="Tell us about your project..."
        />
      </div>
      <button type="submit" className="btn-primary w-full md:w-auto">
        Submit Inquiry
      </button>
    </form>
  );
}
