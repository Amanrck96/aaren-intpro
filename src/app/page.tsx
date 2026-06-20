"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Globe, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StatsSection } from "@/components/sections/StatsSection";
import { siteConfig, stats, coreValues } from "@/data/site";
import { productCategories } from "@/data/products";
import { brands } from "@/data/brands";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";

const whyChoose = [
  { icon: Award, title: "25+ Years Excellence", description: "A tradition of curating the finest materials for discerning projects." },
  { icon: Globe, title: "Global Brand Network", description: "500+ premium brands from Italy, Germany, Spain, and beyond." },
  { icon: Shield, title: "Quality Assurance", description: "Every product meets international standards and certifications." },
  { icon: Sparkles, title: "Design Expertise", description: "Dedicated consultants for architects, builders, and homeowners." },
];

export default function HomePage() {
  const featuredCategories = productCategories.slice(0, 6);
  const featuredBrands = brands.slice(0, 6);
  const featuredProjects = projects.slice(0, 4);
  const latestBlogs = blogPosts.slice(0, 3);
  const testimonials = [
    {
      quote: "Aaren's material curation transformed our residential project. The veneer selection and hardware coordination were impeccable.",
      author: "Ar. Sanjay Reddy",
      role: "Principal Architect, SR Design Studio",
    },
    {
      quote: "For hospitality projects, reliability and aesthetics are non-negotiable. Aaren delivers both consistently.",
      author: "Priya Nair",
      role: "Interior Designer, Luxe Spaces",
    },
    {
      quote: "Their technical knowledge of global brands helps us specify with confidence on commercial builds.",
      author: "Vikram Mehta",
      role: "Project Director, BuildCorp India",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=80"
            alt="Luxury interior showcase"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        </div>
        <div className="container-luxury relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Premium Luxury Building Materials
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white font-light leading-tight mb-6">
              Transforming Spaces Into Pinnacle of Luxury
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              With a tradition of excellence, we bring the best brands from across the world under one roof to create functional and mesmerizing interiors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/products/plywood" variant="gold">
                Explore Products
              </Button>
              <Button href="/contact?type=consultation" variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
                Book Consultation
              </Button>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-gold rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <SectionHeading
            subtitle="Why Choose Aaren"
            title="The Preferred Partner for Premium Projects"
            description="Architects, designers, and builders trust us for world-class materials and expert guidance."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="p-8 bg-beige-light hover:bg-beige transition-colors group h-full">
                  <item.icon className="w-8 h-8 text-gold mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-serif text-xl mb-3">{item.title}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section-padding bg-beige-light">
        <div className="container-luxury">
          <SectionHeading subtitle="Our Collections" title="Featured Product Categories" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCategories.map((cat, i) => (
              <ScrollReveal key={cat.slug} delay={i * 0.08}>
                <Link href={`/products/${cat.slug}`} className="group block relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cat.heroImage}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl text-white mb-1">{cat.shortName}</h3>
                    <p className="text-white/70 text-sm mb-3">{cat.tagline}</p>
                    <span className="inline-flex items-center gap-2 text-gold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/products/plywood" variant="outline">View All Products</Button>
          </div>
        </div>
      </section>

      {/* Brand Partners Carousel */}
      <section className="section-padding bg-charcoal overflow-hidden">
        <div className="container-luxury">
          <SectionHeading subtitle="Partners" title="Premium Brand Alliances" light />
        </div>
        <div className="relative">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="flex gap-12 items-center"
          >
            {[...featuredBrands, ...featuredBrands].map((brand, i) => (
              <div key={`${brand.id}-${i}`} className="flex-shrink-0 w-48 text-center">
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border border-white/20">
                  <Image src={brand.logo} alt={brand.name} fill className="object-cover" />
                </div>
                <p className="text-white font-serif text-lg">{brand.name}</p>
                <p className="text-white/50 text-xs">{brand.country}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="text-center mt-12">
          <Button href="/brands" variant="gold">Explore All Brands</Button>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <SectionHeading subtitle="Portfolio" title="Luxury Project Gallery" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.1}>
                <Link href={`/projects/${project.slug}`} className="group block relative aspect-[16/10] overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span className="text-gold text-xs tracking-wider uppercase">{project.category}</span>
                    <h3 className="font-serif text-2xl text-white mt-1">{project.title}</h3>
                    <p className="text-white/70 text-sm mt-1">{project.location}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/projects" variant="primary">View All Projects</Button>
          </div>
        </div>
      </section>

      {/* Product Showcase Parallax */}
      <section
        className="relative section-padding parallax-section"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80')" }}
      >
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="container-luxury relative z-10">
          <div className="max-w-2xl">
            <SectionHeading
              subtitle="Surfaces & Materials"
              title="A Home Is Where You Share the Story of Who You Are"
              description="Choose from premium laminates, luxury veneers, hardwood flooring and surface accessories from top global brands."
              light
              align="left"
            />
            <Button href="/products/decorative-surfaces" variant="gold">Explore Surfaces</Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-beige-light">
        <div className="container-luxury">
          <SectionHeading subtitle="Testimonials" title="Trusted by Leading Architects" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.author} delay={i * 0.1}>
                <blockquote className="bg-white p-8 h-full border-l-2 border-gold">
                  <p className="text-charcoal/80 italic leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <footer>
                    <cite className="not-italic font-medium text-charcoal">{t.author}</cite>
                    <p className="text-sm text-charcoal/60">{t.role}</p>
                  </footer>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection stats={stats} />

      {/* Latest Blogs */}
      <section className="section-padding bg-white">
        <div className="container-luxury">
          <SectionHeading subtitle="Insights" title="Latest from Our Blog" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestBlogs.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden mb-4">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <span className="text-gold-dark text-xs tracking-wider uppercase">{post.category}</span>
                  <h3 className="font-serif text-xl mt-2 group-hover:text-gold-dark transition-colors">{post.title}</h3>
                  <p className="text-charcoal/60 text-sm mt-2 line-clamp-2">{post.excerpt}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/blog" variant="outline">Read All Articles</Button>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-padding bg-beige-light">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <SectionHeading
                subtitle="Global Presence"
                title="World-Class Brands, Local Expertise"
                description="From our flagship showroom in Bengaluru, we serve architects and builders across India with materials sourced from 15+ countries."
                align="left"
              />
              <ul className="space-y-4 mt-8">
                {coreValues.map((v) => (
                  <li key={v.title} className="flex gap-4">
                    <span className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0" />
                    <div>
                      <strong className="text-charcoal">{v.title}</strong>
                      <p className="text-charcoal/60 text-sm">{v.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="relative aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80"
                  alt="Global showroom"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="bg-charcoal section-padding">
        <div className="container-luxury text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light mb-4">
            Ready to Elevate Your Next Project?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Visit our showroom or schedule a consultation with our material specialists.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="gold">Get in Touch</Button>
            <Button href={`tel:${siteConfig.phoneRaw}`} variant="outline" className="border-white text-white hover:bg-white hover:text-charcoal">
              Call {siteConfig.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
