"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Search, ChevronDown, ChevronRight, Layers, ArrowRight, CornerDownRight } from "lucide-react";
import { divisionsData, Division } from "@/data/divisions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const CATEGORIES = [
  { id: "all", label: "All Divisions" },
  { id: "wood-panels", label: "Panels & Surfaces" },
  { id: "doors-apertures", label: "Doors & Partitions" },
  { id: "living-kitchen", label: "Living & Kitchen" },
  { id: "bagno-collections", label: "Bagno Collections" },
];

export default function ProductsClient() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedDivisions, setExpandedDivisions] = useState<Record<string, boolean>>({});

  // Map division IDs to categories for filtering
  const getDivisionCategory = (id: string): string => {
    switch (id) {
      case "plywood":
      case "decorative-surfaces":
      case "cladding-decking":
      case "wooden-flooring":
        return "wood-panels";
      case "screens":
      case "doors-windows":
      case "doors-partitions":
        return "doors-apertures";
      case "kitchen-wardrobe":
      case "hardware":
      case "ffne":
        return "living-kitchen";
      case "bagno-tiles":
      case "bagno-sf":
      case "bagno-wellness":
      case "bagno-ma":
        return "bagno-collections";
      default:
        return "all";
    }
  };

  // Handle URL hash on load
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.substring(1);
      const matched = divisionsData.find((d) => d.id === hash);
      if (matched) {
        setExpandedDivisions((prev) => ({ ...prev, [hash]: true }));
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 300);
        }
      }
    }
  }, []);

  const toggleExpand = (id: string) => {
    setExpandedDivisions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredDivisions = useMemo(() => {
    return divisionsData.filter((div) => {
      const divisionCat = getDivisionCategory(div.id);
      const matchCategory = selectedCategory === "all" || divisionCat === selectedCategory;

      const lowercaseSearch = search.toLowerCase();
      const matchSearch =
        search === "" ||
        div.name.toLowerCase().includes(lowercaseSearch) ||
        div.subdivisions.some(
          (sub) =>
            sub.name.toLowerCase().includes(lowercaseSearch) ||
            sub.brands.some((b) => b.toLowerCase().includes(lowercaseSearch))
        );

      return matchCategory && matchSearch;
    });
  }, [search, selectedCategory]);

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-charcoal section-padding pt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(197,160,89,0.15),rgba(255,255,255,0))]" />
        <div className="container-luxury relative z-10">
          <SectionHeading
            subtitle="Explore Collections"
            title="Material Divisions & Brand Directory"
            description="Explore our complete curation of world-class building materials, architectural products, and custom interior solutions."
            light
          />
        </div>
      </section>

      {/* Catalog Directory */}
      <section className="section-padding bg-white min-h-[60vh]">
        <div className="container-luxury">
          {/* Controls: Search and Categories */}
          <div className="flex flex-col lg:flex-row gap-6 mb-12 items-stretch justify-between pb-6 border-b border-beige">
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40" />
              <input
                type="search"
                placeholder="Search divisions, sub-divisions, or brand partners..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-beige bg-beige-light focus:outline-none focus:border-gold text-charcoal"
                aria-label="Search divisions and brands"
              />
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all rounded ${
                    selectedCategory === cat.id
                      ? "bg-charcoal text-white shadow-sm"
                      : "bg-beige-light text-charcoal/70 hover:bg-beige hover:text-charcoal"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Division Tree/List */}
          <div className="space-y-6">
            {filteredDivisions.map((div, idx) => {
              const isExpanded = expandedDivisions[div.id] ?? true;
              return (
                <ScrollReveal key={div.id} delay={idx * 0.03}>
                  <article
                    id={div.id}
                    className="border border-beige bg-beige-light/30 hover:border-gold/30 transition-all scroll-mt-32"
                  >
                    {/* Header bar of Division */}
                    <button
                      onClick={() => toggleExpand(div.id)}
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left bg-beige-light/40 hover:bg-beige-light/80 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold-dark">
                          <Layers className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-serif text-2xl text-charcoal font-medium">
                            {div.name}
                          </h3>
                          <p className="text-xs text-charcoal/50 uppercase tracking-widest mt-1">
                            {div.subdivisions.length} Sub-division
                            {div.subdivisions.length !== 1 ? "s" : ""}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="hidden sm:inline text-xs text-charcoal/40 uppercase tracking-wider">
                          {isExpanded ? "Collapse" : "Expand"}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-charcoal/60 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {/* Sub-divisions detail */}
                    {isExpanded && (
                      <div className="p-6 md:p-8 border-t border-beige/60 bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {div.subdivisions.map((sub, sIdx) => (
                            <div
                              key={`${sub.name}-${sIdx}`}
                              className="p-5 border border-beige-light bg-beige-light/10 hover:bg-beige-light/20 transition-all flex flex-col justify-between"
                            >
                              <div>
                                <div className="flex items-start gap-2 mb-3">
                                  <CornerDownRight className="w-4 h-4 text-gold shrink-0 mt-1" />
                                  <h4 className="font-medium text-charcoal text-base">
                                    {sub.name}
                                  </h4>
                                </div>
                                
                                {sub.brands.length > 0 ? (
                                  <div className="space-y-2 mt-4">
                                    <p className="text-[10px] tracking-wider uppercase text-charcoal/40">
                                      Brand Alliance
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                      {sub.brands.map((brandName) => (
                                        <Link
                                          key={brandName}
                                          href={`/brands?q=${encodeURIComponent(brandName)}`}
                                          className="text-xs bg-white border border-beige hover:border-gold hover:text-gold-dark px-2.5 py-1 rounded transition-colors inline-block text-charcoal/80"
                                        >
                                          {brandName}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                  <p className="text-xs text-charcoal/40 italic mt-4">
                                    Premium custom sourcing available
                                  </p>
                                )}
                              </div>

                              <div className="mt-6 pt-4 border-t border-beige-light flex items-center justify-between">
                                <Link
                                  href={`/contact?product=${encodeURIComponent(
                                    div.name + " - " + sub.name
                                  )}&type=consultation`}
                                  className="text-xs text-gold-dark hover:text-charcoal font-medium transition-colors flex items-center gap-1 group"
                                >
                                  Inquire Solutions
                                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </article>
                </ScrollReveal>
              );
            })}

            {filteredDivisions.length === 0 && (
              <div className="text-center py-16 bg-beige-light/30 border border-beige rounded">
                <p className="text-charcoal/60 text-lg">
                  No divisions or subdivisions found matching &ldquo;{search}&rdquo;.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("all");
                  }}
                  className="mt-4 text-gold-dark hover:underline text-sm font-medium"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Luxury Call-To-Action Banner */}
      <section className="bg-charcoal section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(197,160,89,0.1),rgba(255,255,255,0))]" />
        <div className="container-luxury relative z-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white font-light mb-4">
            Bespoke Sourcing for Grand Projects
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed">
            Need custom wood dimensions, specialized partition configurations, or tailored sanitization systems? Our consultants coordinate directly with global mills.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?type=consultation" className="btn-gold">
              Schedule Consultation
            </Link>
            <Link href="/brands" className="border border-white/20 text-white hover:bg-white hover:text-charcoal px-6 py-3 transition-colors text-sm font-medium">
              View Brand Directory
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
