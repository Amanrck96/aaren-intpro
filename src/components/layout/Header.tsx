"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { siteConfig, navLinks } from "@/data/site";
import { TopBar } from "./TopBar";
import { MegaMenu } from "./MegaMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<"about" | "products" | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <TopBar />
      <div
        className={cn(
          "relative transition-all duration-500",
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
        )}
        onMouseLeave={() => setActiveMega(null)}
      >
        <div className="container-luxury flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex flex-col" aria-label="Aaren International Pro Home">
            <span className="font-serif text-2xl lg:text-3xl text-charcoal font-light tracking-wider leading-none">
              AAREN
            </span>
            <span className="text-[10px] tracking-[0.35em] text-gold-dark uppercase">
              International Pro
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.main.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasMega && setActiveMega(link.megaKey!)}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm tracking-wide text-charcoal/80 hover:text-gold-dark transition-colors flex items-center gap-1 py-2",
                    activeMega === link.megaKey && "text-gold-dark"
                  )}
                >
                  {link.label}
                  {link.hasMega && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-charcoal hover:text-gold-dark transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              href="/contact?type=consultation"
              className="hidden md:inline-flex btn-gold text-xs py-2.5 px-5"
            >
              Request Consultation
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-charcoal"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mega menus — rendered here so left-0/right-0 spans the full header */}
        <MegaMenu
          type="about"
          isOpen={activeMega === "about"}
          onClose={() => setActiveMega(null)}
        />
        <MegaMenu
          type="products"
          isOpen={activeMega === "products"}
          onClose={() => setActiveMega(null)}
        />

        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-beige overflow-hidden"
            >
              <form action="/search" className="container-luxury py-4">
                <input
                  type="search"
                  name="q"
                  placeholder="Search products, brands, projects..."
                  className="w-full bg-beige-light px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:ring-1 focus:ring-gold"
                  autoFocus
                />
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-charcoal lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="font-serif text-2xl text-white">AAREN</span>
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-6" aria-label="Mobile navigation">
                {navLinks.main.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-lg text-white/90 border-b border-white/10 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-gold text-xs tracking-wider uppercase mb-4">Products</p>
                  {navLinks.products.slice(0, 8).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-sm text-white/70 hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </nav>
              <div className="p-6 border-t border-white/10">
                <Link
                  href="/contact?type=consultation"
                  onClick={() => setMobileOpen(false)}
                  className="btn-gold w-full text-center"
                >
                  Request Consultation
                </Link>
                <p className="text-white/50 text-sm mt-4 text-center">{siteConfig.phone}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
