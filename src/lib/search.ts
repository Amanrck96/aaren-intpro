import { productCategories } from "@/data/products";
import { brands } from "@/data/brands";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";

export interface SearchResult {
  title: string;
  description: string;
  href: string;
  type: "product" | "brand" | "project" | "blog" | "page";
}

export function searchAll(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const q = query.toLowerCase();
  const results: SearchResult[] = [];

  productCategories.forEach((p) => {
    if (
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.shortName.toLowerCase().includes(q)
    ) {
      results.push({
        title: p.name,
        description: p.description,
        href: `/products/${p.slug}`,
        type: "product",
      });
    }
  });

  brands.forEach((b) => {
    if (b.name.toLowerCase().includes(q) || b.description.toLowerCase().includes(q)) {
      results.push({
        title: b.name,
        description: b.description,
        href: "/brands",
        type: "brand",
      });
    }
  });

  projects.forEach((p) => {
    if (p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) {
      results.push({
        title: p.title,
        description: p.description,
        href: `/projects/${p.slug}`,
        type: "project",
      });
    }
  });

  blogPosts.forEach((b) => {
    if (b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q)) {
      results.push({
        title: b.title,
        description: b.excerpt,
        href: `/blog/${b.slug}`,
        type: "blog",
      });
    }
  });

  const pages = [
    { title: "About Us", description: "Company overview and story", href: "/about" },
    { title: "Contact Us", description: "Get in touch with our team", href: "/contact" },
    { title: "FAQ", description: "Frequently asked questions", href: "/faq" },
    { title: "Brands", description: "Premium brand partners", href: "/brands" },
    { title: "Projects", description: "Luxury project portfolio", href: "/projects" },
  ];

  pages.forEach((p) => {
    if (p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) {
      results.push({ ...p, type: "page" });
    }
  });

  return results;
}
