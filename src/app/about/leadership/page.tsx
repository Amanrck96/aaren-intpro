import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Leadership Team",
  description: "Meet the leadership team driving excellence at Aaren International Pro.",
};

const team = [
  { name: "Rajesh Aaren", role: "Founder & Managing Director", bio: "25+ years in luxury materials trade. Visionary behind Aaren's global brand network.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name: "Meera Aaren", role: "Director - Design & Curation", bio: "Interior design background with expertise in material specification for luxury residential projects.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { name: "Arun Krishnan", role: "Head of Commercial Projects", bio: "Leads hospitality and corporate project divisions with 15+ years in commercial interiors.", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Sneha Patel", role: "Head of Architect Relations", bio: "Dedicated liaison for architecture firms, specification support, and sample programs.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { name: "David Fernandes", role: "Technical Director", bio: "Ensures product compliance, certifications, and technical documentation for all projects.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" },
  { name: "Kavitha Rao", role: "Head of Operations", bio: "Manages logistics, inventory, and pan-India delivery operations.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
];

export default function LeadershipPage() {
  return (
    <>
      <section className="relative h-[40vh] min-h-[320px] flex items-end">
        <Image src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=80" alt="Leadership" fill className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="container-luxury relative z-10 pb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-light">Leadership Team</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <SectionHeading subtitle="Our People" title="Experienced Leaders, Passionate Experts" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 0.08}>
                <article className="group">
                  <div className="relative aspect-[3/4] overflow-hidden mb-6">
                    <Image src={person.image} alt={person.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h2 className="font-serif text-2xl">{person.name}</h2>
                  <p className="text-gold text-sm mt-1 mb-3">{person.role}</p>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{person.bio}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
          <p className="text-center mt-12">
            <Link href="/about" className="text-gold-dark hover:text-gold text-sm tracking-wider uppercase">← Back to About</Link>
          </p>
        </div>
      </section>
    </>
  );
}
