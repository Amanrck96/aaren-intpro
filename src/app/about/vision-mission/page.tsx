import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Vision & Mission",
  description: "Our vision and mission at Aaren International Pro - elevating interior spaces through premium global materials.",
};

export default function VisionMissionPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[320px] flex items-end">
        <Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80" alt="Vision and Mission" fill className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="container-luxury relative z-10 pb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-light">Vision & Mission</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury max-w-4xl">
          <ScrollReveal>
            <SectionHeading subtitle="Our Vision" title="Redefining Luxury Interiors in India" align="left" />
            <p className="text-charcoal/70 text-lg leading-relaxed mb-12">
              To be India&apos;s most trusted destination for world-class luxury building materials and interior solutions—where every architect, designer, and homeowner finds the perfect materials to transform spaces into masterpieces of design and craftsmanship.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <SectionHeading subtitle="Our Mission" title="Bringing Global Excellence Home" align="left" />
            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                We are committed to curating and delivering premium materials from the world&apos;s finest manufacturers, providing expert consultation, and building lasting partnerships with the design and construction community.
              </p>
              <ul className="space-y-3 mt-6">
                {[
                  "Source and represent only certified, premium-quality products",
                  "Provide dedicated support for architects and project teams",
                  "Maintain the largest luxury material showroom in the region",
                  "Champion sustainable and responsible material choices",
                  "Deliver exceptional service from inquiry to installation",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-gold">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <div className="mt-12">
            <Button href="/about" variant="outline">Back to About</Button>
          </div>
        </div>
      </section>
    </>
  );
}
