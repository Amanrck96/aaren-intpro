"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}

export function ConsultationModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60" onClick={onClose}>
      <div className="bg-white max-w-lg w-full p-8" onClick={(e) => e.stopPropagation()}>
        <h3 className="font-serif text-2xl mb-4">Book a Consultation</h3>
        <p className="text-charcoal/70 mb-6">Schedule a personalized consultation with our design experts.</p>
        <Link href="/contact?type=consultation" className="btn-gold w-full text-center" onClick={onClose}>
          Continue to Contact Form
        </Link>
      </div>
    </div>
  );
}
