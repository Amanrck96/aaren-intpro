export const siteConfig = {
  name: "Aaren International Pro",
  tagline: "Premium Luxury Building Materials & Interior Solutions",
  description:
    "One stop destination for world-class luxury interior solutions. Premium plywood, veneers, laminates, hardware, kitchen solutions and more from leading global brands.",
  url: "https://www.aarenintpro.com",
  phone: "+91 888 446 4444",
  phoneRaw: "+918884464444",
  email: "info@aarenintpro.com",
  whatsapp: "918884464444",
  address: "No. 342/8 NTY Layout, Mysore Rd. Bengaluru, INDIA – 560026",
  hours: "0900 Hrs - 2100 Hrs (All days)",
  social: {
    facebook: "https://facebook.com/aarenintpro",
    instagram: "https://instagram.com/aarenintpro",
    linkedin: "https://linkedin.com/company/aarenintpro",
    pinterest: "https://pinterest.com/aarenintpro",
    youtube: "https://youtube.com/@aarenintpro",
  },
};

export const navLinks = {
  about: [
    { label: "Company Overview", href: "/about" },
    { label: "Vision & Mission", href: "/about/vision-mission" },
    { label: "Leadership Team", href: "/about/leadership" },
    { label: "Global Partners", href: "/about/partners" },
  ],
  products: [
    { label: "Plywood", href: "/products/plywood", slug: "plywood" },
    { label: "Blockboard", href: "/products/blockboard", slug: "blockboard" },
    { label: "Veneers", href: "/products/veneers", slug: "veneers" },
    { label: "Laminates", href: "/products/laminates", slug: "laminates" },
    { label: "Decorative Surfaces", href: "/products/decorative-surfaces", slug: "decorative-surfaces" },
    { label: "Cladding & Decking", href: "/products/cladding-decking", slug: "cladding-decking" },
    { label: "Flooring", href: "/products/flooring", slug: "flooring" },
    { label: "Doors & Windows", href: "/products/doors", slug: "doors" },
    { label: "Kitchen & Wardrobe", href: "/products/kitchen-wardrobe", slug: "kitchen-wardrobe" },
    { label: "Hardware", href: "/products/hardware", slug: "hardware" },
    { label: "Partitions", href: "/products/partitions", slug: "partitions" },
    { label: "Furniture", href: "/products/furniture", slug: "furniture" },
    { label: "Lighting", href: "/products/lighting", slug: "lighting" },
    { label: "Carpets", href: "/products/carpets", slug: "carpets" },
    { label: "Bagno Collection", href: "/products/bagno-collection", slug: "bagno-collection" },
    { label: "Wellness Collection", href: "/products/wellness-collection", slug: "wellness-collection" },
  ],
  main: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about", hasMega: true, megaKey: "about" as const },
    { label: "Products", href: "/products", hasMega: true, megaKey: "products" as const },
    { label: "Projects", href: "/projects" },
    { label: "Brands", href: "/brands" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export const stats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "500+", label: "Premium Brands" },
  { value: "10,000+", label: "Projects Delivered" },
  { value: "15+", label: "Countries Served" },
];

export const coreValues = [
  { title: "Excellence", description: "Uncompromising quality in every material we curate and every space we help create." },
  { title: "Innovation", description: "Bringing cutting-edge global products and design solutions to the Indian market." },
  { title: "Integrity", description: "Transparent partnerships built on trust with architects, builders, and homeowners." },
  { title: "Craftsmanship", description: "Celebrating the art of fine interiors through superior materials and expert guidance." },
];
