"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/site";
import { ChevronRight } from "lucide-react";

interface MegaMenuProps {
  type: "about" | "products";
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ type, isOpen, onClose }: MegaMenuProps) {
  const links = type === "about" ? navLinks.about : navLinks.products;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="absolute left-0 right-0 top-full bg-white border-t border-beige shadow-2xl z-50"
          onMouseLeave={onClose}
        >
          <div className="container-luxury py-10">
            {type === "about" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="group p-6 bg-beige-light hover:bg-beige transition-colors"
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
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="group px-4 py-3 text-sm text-charcoal/80 hover:text-gold-dark hover:bg-beige-light transition-all flex items-center justify-between"
                  >
                    {link.label}
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
