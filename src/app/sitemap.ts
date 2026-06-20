import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { productCategories } from "@/data/products";
import { projects } from "@/data/projects";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages = [
    "",
    "/about",
    "/about/vision-mission",
    "/about/leadership",
    "/about/partners",
    "/brands",
    "/projects",
    "/blog",
    "/faq",
    "/contact",
    "/search",
    "/legal/privacy-policy",
    "/legal/terms-and-conditions",
    "/legal/cookie-policy",
    "/legal/return-refund",
    "/legal/disclaimer",
    "/legal/accessibility",
    "/legal/copyright",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...productCategories.map((p) => ({
      url: `${base}/products/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...projects.map((p) => ({
      url: `${base}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((b) => ({
      url: `${base}/blog/${b.slug}`,
      lastModified: new Date(b.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
