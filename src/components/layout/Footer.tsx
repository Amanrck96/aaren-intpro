"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { IconFacebook, IconInstagram, IconLinkedin, IconYoutube } from "@/components/icons/SocialIcons";
import { siteConfig, navLinks } from "@/data/site";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-luxury section-padding pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl font-light tracking-wider">AAREN</span>
              <span className="block text-[10px] tracking-[0.35em] text-gold uppercase mt-1">
                International Pro
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              One stop destination for world-class luxury interior solutions. Premium building materials from leading global brands.
            </p>
            <div className="flex gap-4">
              {[
                { icon: IconFacebook, href: siteConfig.social.facebook, label: "Facebook" },
                { icon: IconInstagram, href: siteConfig.social.instagram, label: "Instagram" },
                { icon: IconLinkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { icon: IconYoutube, href: siteConfig.social.youtube, label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase text-gold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.main.slice(1).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-gold text-sm transition-colors inline-flex items-center gap-1">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase text-gold mb-6">Products</h3>
            <ul className="space-y-3">
              {navLinks.products.slice(0, 8).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 hover:text-gold text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase text-gold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                {siteConfig.address}
              </li>
              <li>
                <a href={`tel:${siteConfig.phoneRaw}`} className="flex gap-3 hover:text-gold transition-colors">
                  <Phone className="w-4 h-4 text-gold shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex gap-3 hover:text-gold transition-colors">
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="text-sm font-medium tracking-wider uppercase text-gold mb-4">Newsletter</h4>
              {subscribed ? (
                <p className="text-gold text-sm">Thank you for subscribing!</p>
              ) : (
                <form onSubmit={handleNewsletter} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    className="flex-1 bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-gold"
                    aria-label="Email for newsletter"
                  />
                  <button type="submit" className="bg-gold text-charcoal px-4 py-2.5 text-sm font-medium hover:bg-gold-light transition-colors">
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Aaren International Pro. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/legal/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms-and-conditions" className="hover:text-gold transition-colors">Terms & Conditions</Link>
            <Link href="/legal/cookie-policy" className="hover:text-gold transition-colors">Cookie Policy</Link>
            <Link href="/legal/accessibility" className="hover:text-gold transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
