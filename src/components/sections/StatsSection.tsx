"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  value: string;
  label: string;
}

function AnimatedCounter({ value, label }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericPart = parseInt(value.replace(/\D/g, "")) || 0;
  const suffix = value.replace(/[\d]/g, "");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = numericPart / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= numericPart) {
        setCount(numericPart);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, numericPart]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-gold font-light">
        {count}{suffix}
      </p>
      <p className="text-white/70 text-sm tracking-wider uppercase mt-2">{label}</p>
    </motion.div>
  );
}

interface StatsSectionProps {
  stats: { value: string; label: string }[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="bg-charcoal section-padding">
      <div className="container-luxury">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
