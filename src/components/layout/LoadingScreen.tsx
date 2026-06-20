"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-charcoal"
          aria-label="Loading"
          role="status"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="font-serif text-4xl md:text-5xl text-white font-light tracking-wider mb-2">
              AAREN
            </h1>
            <p className="text-gold text-xs tracking-[0.4em] uppercase">
              International Pro
            </p>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 h-0.5 bg-gold origin-left"
            style={{ width: "100%" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
