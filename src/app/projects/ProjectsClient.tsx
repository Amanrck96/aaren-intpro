"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, projectCategories } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ProjectsClient() {
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    if (category === "all") return projects;
    return projects.filter((p) => p.category === category);
  }, [category]);

  return (
    <>
      <section className="relative h-[40vh] min-h-[320px] flex items-end">
        <Image src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80" alt="Projects" fill className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="container-luxury relative z-10 pb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-white font-light">Our Projects</h1>
          <p className="text-white/70 mt-2">Luxury interiors delivered across residential, commercial, and hospitality sectors.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-5 py-2.5 text-sm tracking-wider uppercase transition-colors ${
                  category === cat.id
                    ? "bg-charcoal text-white"
                    : "bg-beige-light text-charcoal hover:bg-beige"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.08}>
                <Link href={`/projects/${project.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden mb-4">
                    <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold text-charcoal text-xs px-3 py-1 uppercase tracking-wider">{project.category}</span>
                    </div>
                  </div>
                  <h2 className="font-serif text-xl group-hover:text-gold-dark transition-colors">{project.title}</h2>
                  <p className="text-charcoal/60 text-sm mt-1">{project.location} · {project.year}</p>
                  <p className="text-charcoal/70 text-sm mt-2 line-clamp-2">{project.description}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
