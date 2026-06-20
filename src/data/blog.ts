export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "luxury-interior-trends-2025",
    title: "Luxury Interior Trends Shaping 2025",
    excerpt: "Discover the material innovations and design philosophies defining premium interiors this year.",
    content: "The luxury interior landscape continues to evolve, with architects and designers embracing natural materials, biophilic design, and technology-integrated surfaces. Warm wood tones paired with matte black accents create timeless sophistication, while textured laminates and 3D decorative panels add tactile interest to minimalist spaces.\n\nSustainability remains a key driver, with FSC-certified veneers and low-emission boards gaining preference among discerning clients. Smart home integration is no longer optional—lighting, climate, and security systems are being designed into material selections from the project outset.",
    category: "Trends",
    author: "Design Team",
    date: "2025-05-15",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
    featured: true,
  },
  {
    slug: "choosing-right-veneer",
    title: "A Guide to Choosing the Right Veneer",
    excerpt: "Natural vs engineered, matching techniques, and application considerations for architects.",
    content: "Selecting the perfect veneer requires understanding species characteristics, matching techniques, and application requirements. Natural veneers offer unique grain patterns but vary between sheets, while engineered veneers provide consistency for large-scale projects.\n\nBook-matching creates symmetrical patterns ideal for feature walls, while slip-matching offers a more natural, flowing appearance. Consider the environment—humidity levels, sun exposure, and traffic—when selecting veneer grade and finish.",
    category: "Materials",
    author: "Technical Team",
    date: "2025-04-28",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1618221197210-5b2a5c0a0b0e?w=1200&q=80",
    featured: true,
  },
  {
    slug: "kitchen-design-premium-hardware",
    title: "Why Premium Hardware Makes All the Difference in Kitchen Design",
    excerpt: "The hidden heroes of luxury kitchens—hinges, runners, and lift systems that define daily experience.",
    content: "A beautiful kitchen facade means nothing if drawers stick, doors sag, or lift systems fail. Premium hardware from brands like Blum and Hettich ensures decades of silent, effortless operation.\n\nSoft-close mechanisms, full-extension drawers, and handleless lift systems transform daily kitchen interactions. When specifying kitchen projects, allocate budget to hardware—it's the investment that clients feel every single day.",
    category: "Kitchen",
    author: "Kitchen Specialists",
    date: "2025-04-10",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
  },
  {
    slug: "sustainable-building-materials",
    title: "Sustainable Building Materials for Modern Architecture",
    excerpt: "How eco-conscious material choices enhance both design integrity and environmental responsibility.",
    content: "Sustainability in luxury doesn't mean compromise—it means smarter choices. FSC-certified timber, E0 emission boards, and recycled-content composites offer premium performance with reduced environmental impact.\n\nArchitects are increasingly specifying materials with transparent supply chains and third-party certifications. Aaren partners with manufacturers who share this commitment to responsible sourcing.",
    category: "Sustainability",
    author: "Sustainability Team",
    date: "2025-03-22",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  },
  {
    slug: "bathroom-wellness-design",
    title: "Designing Bathroom Wellness Sanctuaries",
    excerpt: "From steam showers to chromotherapy—creating spa experiences at home.",
    content: "The bathroom has evolved from functional space to personal wellness retreat. Steam generators, experience showers with multiple water outlets, and chromotherapy lighting create spa-like experiences within residential and hospitality projects.\n\nIntegration planning is critical—steam rooms require proper waterproofing, ventilation, and control systems. Our wellness specialists guide architects through specification and installation requirements.",
    category: "Wellness",
    author: "Wellness Team",
    date: "2025-03-08",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
  },
  {
    slug: "commercial-space-acoustics",
    title: "Acoustic Solutions for Modern Commercial Spaces",
    excerpt: "Balancing open-plan aesthetics with sound privacy through smart material choices.",
    content: "Open-plan offices and hospitality spaces demand acoustic solutions that don't compromise design vision. Acoustic panels, sound-absorbing partitions, and ceiling treatments can reduce noise by up to 50 dB while enhancing visual appeal.\n\nDecorative acoustic panels from brands like SIBU combine performance with artistry, turning sound management into a design feature rather than an afterthought.",
    category: "Commercial",
    author: "Commercial Team",
    date: "2025-02-18",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
  },
];

export const blogCategories = ["All", "Trends", "Materials", "Kitchen", "Sustainability", "Wellness", "Commercial"];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
