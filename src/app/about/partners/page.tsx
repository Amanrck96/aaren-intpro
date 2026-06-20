import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Global Partners",
  description: "Our network of 500+ premium brand partners from Italy, Germany, Spain, and beyond.",
};

export default function PartnersPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[320px] flex items-end">
        <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80" alt="Global Partners" fill className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="container-luxury relative z-10 pb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-light">Global Partners</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <SectionHeading
            subtitle="Partnerships"
            title="500+ Premium Brands Worldwide"
            description="We maintain exclusive and authorized partnerships with leading manufacturers across surfaces, hardware, kitchen, bathroom, wellness, flooring, and lighting categories."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand, i) => (
              <ScrollReveal key={brand.id} delay={i * 0.05}>
                <Link href="/brands" className="block p-6 bg-beige-light hover:bg-beige transition-colors text-center group">
                  <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image src={brand.logo} alt={brand.name} fill className="object-cover" />
                  </div>
                  <h3 className="font-serif text-lg group-hover:text-gold-dark transition-colors">{brand.name}</h3>
                  <p className="text-charcoal/50 text-xs mt-1">{brand.country}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <p className="text-center mt-12">
            <Link href="/brands" className="btn-primary inline-flex">Explore All Brands</Link>
          </p>
        </div>
      </section>
    </>
  );
}
