"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Plus } from "lucide-react";
import { productCategories, ProductCategory } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function CompareClient() {
  const [selected, setSelected] = useState<ProductCategory[]>([]);

  const addProduct = (slug: string) => {
    const product = productCategories.find((p) => p.slug === slug);
    if (!product || selected.find((s) => s.slug === slug) || selected.length >= 3) return;
    setSelected([...selected, product]);
  };

  const removeProduct = (slug: string) => {
    setSelected(selected.filter((p) => p.slug !== slug));
  };

  const available = productCategories.filter((p) => !selected.find((s) => s.slug === p.slug));

  return (
    <>
      <section className="bg-charcoal section-padding pt-32">
        <div className="container-luxury">
          <SectionHeading
            subtitle="Tools"
            title="Product Comparison"
            description="Compare up to 3 product categories side by side to find the perfect materials for your project."
            light
          />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          {selected.length < 3 && (
            <div className="mb-12">
              <label htmlFor="add-product" className="block text-sm tracking-wider uppercase text-charcoal/60 mb-2">
                Add Product to Compare
              </label>
              <div className="flex gap-2">
                <select
                  id="add-product"
                  className="flex-1 border border-beige bg-beige-light px-4 py-3 text-sm focus:outline-none focus:border-gold"
                  onChange={(e) => { if (e.target.value) { addProduct(e.target.value); e.target.value = ""; } }}
                  defaultValue=""
                >
                  <option value="">Select a category...</option>
                  {available.map((p) => (
                    <option key={p.slug} value={p.slug}>{p.name}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {selected.length === 0 ? (
            <div className="text-center py-16 bg-beige-light">
              <Plus className="w-12 h-12 text-gold mx-auto mb-4" />
              <p className="text-charcoal/60">Select products above to start comparing.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr>
                    <th className="text-left p-4 bg-beige-light w-40">Feature</th>
                    {selected.map((p) => (
                      <th key={p.slug} className="p-4 bg-beige-light text-left relative">
                        <button onClick={() => removeProduct(p.slug)} className="absolute top-2 right-2 text-charcoal/40 hover:text-charcoal" aria-label={`Remove ${p.name}`}>
                          <X className="w-4 h-4" />
                        </button>
                        <div className="relative w-full aspect-video mb-3 overflow-hidden">
                          <Image src={p.heroImage} alt={p.name} fill className="object-cover" />
                        </div>
                        <Link href={`/products/${p.slug}`} className="font-serif text-lg hover:text-gold-dark">{p.shortName}</Link>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-beige">
                    <td className="p-4 font-medium text-charcoal/60">Tagline</td>
                    {selected.map((p) => <td key={p.slug} className="p-4 text-sm">{p.tagline}</td>)}
                  </tr>
                  <tr className="border-b border-beige">
                    <td className="p-4 font-medium text-charcoal/60">Overview</td>
                    {selected.map((p) => <td key={p.slug} className="p-4 text-sm text-charcoal/70">{p.description}</td>)}
                  </tr>
                  <tr className="border-b border-beige">
                    <td className="p-4 font-medium text-charcoal/60 align-top">Features</td>
                    {selected.map((p) => (
                      <td key={p.slug} className="p-4 text-sm align-top">
                        <ul className="space-y-2">
                          {p.features.map((f) => (
                            <li key={f.title}><strong>{f.title}</strong>: {f.description}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-charcoal/60 align-top">Specifications</td>
                    {selected.map((p) => (
                      <td key={p.slug} className="p-4 text-sm align-top">
                        <ul className="space-y-1">
                          {p.specifications.map((s) => (
                            <li key={s.label}><span className="text-charcoal/60">{s.label}:</span> {s.value}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
