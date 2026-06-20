"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function BlogClient() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const featured = blogPosts.filter((p) => p.featured);
  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const matchSearch =
        search === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "All" || p.category === category;
      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <>
      <section className="bg-charcoal section-padding pt-32">
        <div className="container-luxury">
          <SectionHeading subtitle="Insights" title="Design & Material Blog" description="Expert perspectives on luxury interiors, material trends, and project inspiration." light />
        </div>
      </section>

      {featured.length > 0 && (
        <section className="section-padding bg-beige-light">
          <div className="container-luxury">
            <h2 className="font-serif text-2xl mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featured.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 0.1}>
                  <Link href={`/blog/${post.slug}`} className="group grid grid-cols-1 md:grid-cols-2 bg-white overflow-hidden">
                    <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[280px]">
                      <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <span className="text-gold-dark text-xs tracking-wider uppercase">{post.category}</span>
                      <h3 className="font-serif text-2xl mt-2 group-hover:text-gold-dark transition-colors">{post.title}</h3>
                      <p className="text-charcoal/60 text-sm mt-3 line-clamp-3">{post.excerpt}</p>
                      <p className="text-charcoal/40 text-xs mt-4">{post.date} · {post.readTime}</p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40" />
              <input
                type="search"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-beige bg-beige-light focus:outline-none focus:border-gold"
                aria-label="Search blog"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 text-sm transition-colors ${
                    category === cat ? "bg-charcoal text-white" : "bg-beige-light text-charcoal hover:bg-beige"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.05}>
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden mb-4">
                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-gold-dark text-xs tracking-wider uppercase">{post.category}</span>
                  <h3 className="font-serif text-xl mt-2 group-hover:text-gold-dark transition-colors">{post.title}</h3>
                  <p className="text-charcoal/60 text-sm mt-2 line-clamp-2">{post.excerpt}</p>
                  <p className="text-charcoal/40 text-xs mt-3">{post.date} · {post.readTime}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
