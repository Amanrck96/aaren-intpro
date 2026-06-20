"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "gold";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const variants = {
    primary: "btn-primary",
    outline: "btn-outline",
    gold: "btn-gold",
  };

  const classes = cn(variants[variant], className);

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {children}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
