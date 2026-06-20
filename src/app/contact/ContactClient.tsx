"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { CheckCircle } from "lucide-react";

function CallbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");

  if (submitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-10 h-10 text-gold mx-auto mb-3" />
        <p className="text-charcoal/70">We&apos;ll call you back shortly!</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="flex gap-2"
      data-form-type="callback"
    >
      <input
        type="tel"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Your phone number"
        className="flex-1 border border-beige bg-white px-4 py-3 text-sm focus:outline-none focus:border-gold"
        aria-label="Phone for callback"
      />
      <button type="submit" className="btn-gold whitespace-nowrap">Request Callback</button>
    </form>
  );
}

export default function ContactClient() {
  return (
    <>
      <section className="bg-charcoal section-padding pt-32">
        <div className="container-luxury">
          <SectionHeading subtitle="Contact" title="Get in Touch" description="Visit our showroom, call us, or send an inquiry. Our team is ready to assist with your project." light />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-2xl mb-8">Send Us a Message</h2>
              <InquiryForm />

              <div className="mt-12 p-6 bg-beige-light">
                <h3 className="font-serif text-xl mb-4">Request a Callback</h3>
                <p className="text-charcoal/60 text-sm mb-4">Prefer a phone call? Leave your number and we&apos;ll reach out.</p>
                <CallbackForm />
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl mb-8">Contact Information</h2>
              <ul className="space-y-6 mb-12">
                <li className="flex gap-4">
                  <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-1">Showroom</p>
                    <p className="text-charcoal/70 text-sm">{siteConfig.address}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="w-5 h-5 text-gold shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Telephone</p>
                    <a href={`tel:${siteConfig.phoneRaw}`} className="text-charcoal/70 text-sm hover:text-gold-dark">{siteConfig.phone}</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Mail className="w-5 h-5 text-gold shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-charcoal/70 text-sm hover:text-gold-dark">{siteConfig.email}</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="w-5 h-5 text-gold shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Working Hours</p>
                    <p className="text-charcoal/70 text-sm">{siteConfig.hours}</p>
                  </div>
                </li>
              </ul>

              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 hover:opacity-90 transition-opacity mb-12"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>

              <div className="aspect-video bg-beige-light relative">
                <iframe
                  src="https://maps.google.com/maps?q=Aaren+Intpro+Mysore+Road+Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aaren International Pro Showroom Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-beige-light">
        <div className="container-luxury">
          <SectionHeading subtitle="Lead Generation" title="How Can We Help?" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Request Quote", desc: "Get pricing for your material list", href: "/contact?type=quote" },
              { title: "Book Consultation", desc: "Schedule a design consultation", href: "/contact?type=consultation" },
              { title: "Schedule Site Visit", desc: "Arrange a project site assessment", href: "/contact?type=site-visit" },
              { title: "Download Brochure", desc: "Access our product catalogs", href: "/contact?type=brochure" },
            ].map((item) => (
              <a key={item.title} href={item.href} className="block p-8 bg-white hover:shadow-lg transition-shadow group">
                <h3 className="font-serif text-xl group-hover:text-gold-dark transition-colors">{item.title}</h3>
                <p className="text-charcoal/60 text-sm mt-2">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
