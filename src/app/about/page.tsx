import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { coreValues, stats } from "@/data/site";
import { StatsSection } from "@/components/sections/StatsSection";

export const metadata: Metadata = {
  title: "About Us - Company Overview",
  description: "Discover the story of Aaren International Pro - 25+ years of excellence in luxury building materials and interior solutions.",
};

const timeline = [
  { year: "1998", event: "Founded in Bengaluru with a vision to bring global luxury materials to India." },
  { year: "2005", event: "Expanded partnerships with European veneer and laminate manufacturers." },
  { year: "2012", event: "Opened flagship showroom on Mysore Road, Bengaluru." },
  { year: "2018", event: "Launched Bagno and Wellness collections from Italian manufacturers." },
  { year: "2022", event: "Reached 500+ brand partnerships across 15 countries." },
  { year: "2025", event: "Serving 10,000+ projects with dedicated architect support programs." },
];

const leadership = [
  { name: "Rajesh Aaren", role: "Founder & Managing Director", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name: "Meera Aaren", role: "Director - Design & Curation", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { name: "Arun Krishnan", role: "Head of Commercial Projects", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Sneha Patel", role: "Head of Architect Relations", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
];

const achievements = [
  "Preferred supplier for 200+ architecture firms in South India",
  "Exclusive distributor for 50+ international luxury brands",
  "IGBC and LEED documentation support for green projects",
  "Award-winning showroom design - Interior Design Excellence 2023",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[50vh] min-h-[400px] flex items-end">
        <Image src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=80" alt="About Aaren" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-charcoal/30" />
        <div className="container-luxury relative z-10 pb-12">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">About Us</p>
          <h1 className="font-serif text-4xl md:text-6xl text-white font-light">Company Overview</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <SectionHeading subtitle="Our Story" title="A Tradition of Excellence" align="left" />
              <div className="space-y-4 text-charcoal/70 leading-relaxed">
                <p>
                  Aaren International Pro was born from a passion for creating ornate homes and exceptional commercial spaces. For over two decades, we have been the trusted bridge between world-renowned manufacturers and India&apos;s most discerning architects, designers, and builders.
                </p>
                <p>
                  Our showroom in Bengaluru houses an unparalleled collection of surfaces, hardware, kitchen systems, bathroom solutions, and wellness products—each carefully curated to meet the exacting standards of luxury projects.
                </p>
                <p>
                  We don&apos;t just supply materials; we partner with you from specification through delivery, ensuring every detail contributes to spaces that inspire.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <Button href="/about/vision-mission" variant="outline">Vision & Mission</Button>
                <Button href="/about/leadership" variant="primary">Meet Our Team</Button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-[4/5]">
                <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Aaren showroom" fill className="object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-beige-light">
        <div className="container-luxury">
          <SectionHeading subtitle="Core Values" title="What Drives Us" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="bg-white p-8 h-full border-t-2 border-gold">
                  <h3 className="font-serif text-xl mb-3">{v.title}</h3>
                  <p className="text-charcoal/70 text-sm">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <StatsSection stats={stats} />

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <SectionHeading subtitle="Our Journey" title="Company Timeline" />
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.05}>
                <div className="flex gap-8 pb-12 last:pb-0 relative">
                  <div className="w-20 shrink-0">
                    <span className="font-serif text-2xl text-gold">{item.year}</span>
                  </div>
                  <div className="flex-1 pt-1 border-l border-beige pl-8 relative">
                    <span className="absolute -left-1.5 top-2 w-3 h-3 bg-gold rounded-full" />
                    <p className="text-charcoal/80">{item.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <SectionHeading subtitle="Leadership" title="Meet Our Team" light />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden">
                    <Image src={person.image} alt={person.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h3 className="font-serif text-xl text-white">{person.name}</h3>
                  <p className="text-gold text-sm mt-1">{person.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/about/leadership" className="text-gold hover:text-gold-light text-sm tracking-wider uppercase">
              View Full Leadership Team →
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-beige-light">
        <div className="container-luxury">
          <SectionHeading subtitle="Achievements" title="Recognition & Milestones" />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {achievements.map((a, i) => (
              <ScrollReveal key={a} delay={i * 0.08}>
                <li className="flex items-center gap-4 bg-white p-6">
                  <span className="w-2 h-2 bg-gold rounded-full shrink-0" />
                  <span className="text-charcoal/80">{a}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
