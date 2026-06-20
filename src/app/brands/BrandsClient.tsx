"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search } from "lucide-react";
import { brands, brandCategories } from "@/data/brands";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function BrandsClient() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    return brands.filter((b) => {
      const matchSearch =
        search === "" ||
        b.name.toLowerCase().includes(search.toLowerCase()) ||
        b.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "all" || b.category.includes(category);
      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <>
      <section className="bg-charcoal section-padding pt-32">
        <div className="container-luxury">
          <SectionHeading
            subtitle="Brand Partners"
            title="Premium Brand Showcase"
            description="Discover the world-class manufacturers we represent—each selected for quality, innovation, and design excellence."
            light
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40" />
              <input
                type="search"
                placeholder="Search brands..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-beige bg-beige-light focus:outline-none focus:border-gold"
                aria-label="Search brands"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {brandCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-4 py-2 text-sm transition-colors ${
                    category === cat.id
                      ? "bg-charcoal text-white"
                      : "bg-beige-light text-charcoal hover:bg-beige"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((brand, i) => (
              <ScrollReveal key={brand.id} delay={i * 0.05}>
                <article className="bg-beige-light p-8 h-full flex flex-col hover:shadow-lg transition-shadow">
                  <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden border-2 border-gold/30">
                    <Image src={brand.logo} alt={brand.name} fill className="object-cover" />
                  </div>
                  <h2 className="font-serif text-2xl mb-1">{brand.name}</h2>
                  <p className="text-gold-dark text-xs tracking-wider uppercase mb-4">{brand.country}</p>
                  <p className="text-charcoal/70 text-sm leading-relaxed mb-4 flex-1">{brand.description}</p>
                  <div className="mb-4">
                    <p className="text-xs tracking-wider uppercase text-charcoal/50 mb-2">Product Range</p>
                    <div className="flex flex-wrap gap-2">
                      {brand.productRange.map((p) => (
                        <span key={p} className="text-xs bg-white px-2 py-1 text-charcoal/70">{p}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-charcoal/60 text-sm italic border-t border-beige pt-4">{brand.story}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-charcoal/60 py-12">No brands found matching your criteria.</p>
          )}
        </div>
      </section>
    </>
  );
}
