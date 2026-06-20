export interface Project {
  slug: string;
  title: string;
  category: "residential" | "commercial" | "hospitality" | "retail" | "corporate";
  location: string;
  year: string;
  image: string;
  images: string[];
  description: string;
  materials: string[];
  challenges: string;
  solutions: string;
  testimonial: { quote: string; author: string; role: string };
}

export const projects: Project[] = [
  {
    slug: "luxury-villa-whitefield",
    title: "Luxury Villa – Whitefield",
    category: "residential",
    location: "Whitefield, Bengaluru",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    description: "A 12,000 sq ft luxury villa featuring bespoke veneer paneling, imported Italian bathroom fixtures, and a fully custom modular kitchen.",
    materials: ["Inclass Veneers", "Blum Kitchen Systems", "ArtCeram Sanitaryware", "Quick-Step Flooring"],
    challenges: "The client required seamless integration of multiple material brands while maintaining a cohesive warm contemporary aesthetic across three floors.",
    solutions: "Our design team created a unified material palette with coordinated finishes, custom-matched veneers, and a single-source procurement approach.",
    testimonial: {
      quote: "Aaren transformed our vision into reality. The attention to detail and quality of materials exceeded our expectations.",
      author: "Rajesh & Priya Mehta",
      role: "Homeowners",
    },
  },
  {
    slug: "five-star-hotel-lobby",
    title: "Five-Star Hotel Lobby Renovation",
    category: "hospitality",
    location: "MG Road, Bengaluru",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    ],
    description: "Complete lobby transformation with SIBU metallic panels, Flos architectural lighting, and premium stone-look flooring.",
    materials: ["SIBU Design Panels", "Flos Lighting", "Decorative Laminates", "Hafele Hardware"],
    challenges: "Renovation had to be completed in phases without disrupting hotel operations, with strict fire-rating requirements.",
    solutions: "Phased installation schedule with fire-rated materials and pre-fabricated panel systems for rapid deployment.",
    testimonial: {
      quote: "The lobby now reflects the five-star experience our guests expect. Aaren delivered on time and within budget.",
      author: "Vikram Singh",
      role: "General Manager",
    },
  },
  {
    slug: "corporate-headquarters",
    title: "Corporate Headquarters",
    category: "corporate",
    location: "Electronic City, Bengaluru",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    ],
    description: "Modern corporate office with glass partitions, acoustic panels, and premium workstation systems for 500+ employees.",
    materials: ["Glass Partitions", "Acoustic Panels", "Hettich Fittings", "Commercial Carpet"],
    challenges: "Open-plan design required acoustic privacy solutions while maintaining visual transparency and natural light.",
    solutions: "Double-glazed partitions with integrated blinds and acoustic ceiling treatments achieved the perfect balance.",
    testimonial: {
      quote: "Our new headquarters has improved employee satisfaction and impresses every client who visits.",
      author: "Anita Desai",
      role: "CEO, TechVentures India",
    },
  },
  {
    slug: "premium-retail-showroom",
    title: "Premium Retail Showroom",
    category: "retail",
    location: "Indiranagar, Bengaluru",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6a3?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6a3?w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
    ],
    description: "High-end fashion retail space with Alcarol feature walls, custom display fixtures, and designer lighting.",
    materials: ["Alcarol Surfaces", "Custom Fixtures", "Flos Track Lighting", "Premium Flooring"],
    challenges: "Creating a gallery-like atmosphere that showcases products while withstanding high foot traffic.",
    solutions: "Durable commercial-grade finishes with museum-quality display lighting and flexible fixture systems.",
    testimonial: {
      quote: "The showroom design has significantly increased our customer dwell time and sales conversion.",
      author: "Karan Malhotra",
      role: "Brand Director",
    },
  },
  {
    slug: "wellness-spa-retreat",
    title: "Wellness Spa Retreat",
    category: "hospitality",
    location: "Coorg, Karnataka",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
    ],
    description: "Complete wellness facility with Effegibi sauna systems, steam rooms, and luxury Bagno collection throughout.",
    materials: ["Effegibi Sauna", "Steam Generators", "ArtCeram", "Natural Stone Tiles"],
    challenges: "Remote location logistics and humidity-resistant material specifications for spa environments.",
    solutions: "Pre-engineered wellness packages with moisture-rated materials and coordinated installation teams.",
    testimonial: {
      quote: "Aaren's wellness expertise made our spa the standout feature of the resort.",
      author: "Deepak Rao",
      role: "Resort Owner",
    },
  },
  {
    slug: "penthouse-interior",
    title: "Skyline Penthouse Interior",
    category: "residential",
    location: "UB City, Bengaluru",
    year: "2023",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
    description: "Ultra-luxury penthouse with floor-to-ceiling veneer walls, imported kitchen, and smart home integration.",
    materials: ["Book-Matched Veneers", "Blum Legrabox", "Flos Lighting", "Smart Home Systems"],
    challenges: "Achieving flawless book-matched veneer installation on curved walls and ceiling features.",
    solutions: "Custom veneer layup at our partner facility with precision on-site installation by specialist craftsmen.",
    testimonial: {
      quote: "Every surface in our penthouse tells a story of craftsmanship. Aaren made it possible.",
      author: "Arjun & Meera Kapoor",
      role: "Penthouse Owners",
    },
  },
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "residential", label: "Residential" },
  { id: "commercial", label: "Commercial" },
  { id: "hospitality", label: "Hospitality" },
  { id: "retail", label: "Retail" },
  { id: "corporate", label: "Corporate" },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
