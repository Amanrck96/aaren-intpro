"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { IconFacebook, IconInstagram, IconLinkedin, IconYoutube } from "@/components/icons/SocialIcons";
import { siteConfig } from "@/data/site";

export function TopBar() {
  return (
    <div className="bg-charcoal text-white/90 text-xs hidden lg:block">
      <div className="container-luxury flex items-center justify-between py-2.5">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="flex items-center gap-2 hover:text-gold transition-colors"
            aria-label={`Call ${siteConfig.phone}`}
          >
            <Phone className="w-3.5 h-3.5" />
            {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 hover:text-gold transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            {siteConfig.email}
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            Bengaluru, India
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gold transition-colors">
            <IconFacebook className="w-3.5 h-3.5" />
          </a>
          <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold transition-colors">
            <IconInstagram className="w-3.5 h-3.5" />
          </a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gold transition-colors">
            <IconLinkedin className="w-3.5 h-3.5" />
          </a>
          <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-gold transition-colors">
            <IconYoutube className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
