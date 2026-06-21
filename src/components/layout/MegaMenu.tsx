"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/site";
import { ChevronRight, ArrowRight } from "lucide-react";

interface MegaMenuProps {
  type: "about" | "products";
  isOpen: boolean;
  onClose: () => void;
}

const productGroups = [
  {
    category: "Panels & Surfaces",
    items: [
      { label: "Plywood", href: "/products#plywood" },
      { label: "Decorative Surfaces", href: "/products#decorative-surfaces" },
      { label: "Cladding & Decking", href: "/products#cladding-decking" },
      { label: "Wooden Flooring", href: "/products#wooden-flooring" },
      { label: "Screens", href: "/products#screens" },
    ],
  },
  {
    category: "Doors & Partitions",
    items: [
      { label: "Doors + Windows", href: "/products#doors-windows" },
      { label: "Doors + Partitions", href: "/products#doors-partitions" },
    ],
  },
  {
    category: "Living & Kitchen",
    items: [
      { label: "Kitchen & Wardrobe", href: "/products#kitchen-wardrobe" },
      { label: "Hardware", href: "/products#hardware" },
      { label: "FFNE", href: "/products#ffne" },
    ],
  },
  {
    category: "Bagno Collections",
    items: [
      { label: "Bagno - Tiles", href: "/products#bagno-tiles" },
      { label: "Bagno - S+F", href: "/products#bagno-sf" },
      { label: "Bagno - Wellness", href: "/products#bagno-wellness" },
      { label: "Bagno - M+A", href: "/products#bagno-ma" },
    ],
  },
];

export function MegaMenu({ type, isOpen, onClose }: MegaMenuProps) {
  const aboutLinks = navLinks.about;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute left-0 right-0 top-full bg-white border-t-2 border-gold shadow-2xl z-50"
        >
          {type === "about" ? (
            /* ── About Us Mega Menu ── */
            <div className="container-luxury py-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="group p-6 bg-beige-light hover:bg-beige border border-transparent hover:border-gold/20 transition-all"
                  >
                    <h3 className="font-serif text-xl text-charcoal group-hover:text-gold-dark transition-colors mb-2">
                      {link.label}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-sm text-charcoal/60 group-hover:text-gold-dark">
                      Explore <ChevronRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            /* ── Products Mega Menu ── */
            <div className="container-luxury py-10">
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs tracking-[0.25em] text-gold-dark uppercase font-medium">
                  Our Product Range
                </p>
                <Link
                  href="/products"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 text-xs text-charcoal/60 hover:text-gold-dark transition-colors"
                >
                  View all products <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {productGroups.map((group) => (
                  <div key={group.category}>
                    <p className="text-[11px] font-semibold tracking-widest text-charcoal/40 uppercase mb-3 pb-2 border-b border-beige">
                      {group.category}
                    </p>
                    <ul className="space-y-0.5">
                      {group.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={onClose}
                            className="group flex items-center justify-between px-2 py-2 text-sm text-charcoal/75 hover:text-gold-dark hover:bg-beige-light rounded transition-all"
                          >
                            <span>{item.label}</span>
                            <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-gold transition-opacity" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
