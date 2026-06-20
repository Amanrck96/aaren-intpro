export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "What types of clients does Aaren International Pro serve?",
    answer: "We serve architects, interior designers, builders, developers, premium homeowners, hospitality operators, commercial project managers, and consultants. Our showroom and team cater to both trade professionals and discerning individual clients.",
    category: "General",
  },
  {
    id: "2",
    question: "Do you offer product samples for project specification?",
    answer: "Yes, we provide material samples for veneers, laminates, hardware, and other products. Architects and designers can request sample kits for client presentations. Visit our Bengaluru showroom to explore the full range.",
    category: "Products",
  },
  {
    id: "3",
    question: "Can you deliver materials across India?",
    answer: "Absolutely. We have established logistics partnerships for pan-India delivery. Bulk orders for commercial projects receive dedicated project management and scheduled deliveries to site.",
    category: "Services",
  },
  {
    id: "4",
    question: "Do you provide installation services?",
    answer: "We work with a network of certified installation partners for kitchens, wardrobes, veneers, flooring, and wellness systems. We can recommend and coordinate specialists based on your project requirements.",
    category: "Services",
  },
  {
    id: "5",
    question: "What brands do you represent?",
    answer: "We represent over 500 premium brands including Alcarol, Inclass Veneers, PEEL Ply, SIBU Design, Häfele, Blum, Hettich, Dormakaba, ArtCeram, Effegibi, Quick-Step, Flos, and many more international manufacturers.",
    category: "Products",
  },
  {
    id: "6",
    question: "How do I request a quote for my project?",
    answer: "Use our Request Quote form on any product page, contact us via WhatsApp, call +91 888 446 4444, or email info@aarenintpro.com with your project details, material list, and timeline. Our team responds within 24 hours.",
    category: "General",
  },
  {
    id: "7",
    question: "Are your products suitable for commercial and hospitality projects?",
    answer: "Yes, many of our products carry commercial and fire ratings suitable for hotels, offices, retail, and public spaces. Our technical team can guide you on compliance requirements for your specific application.",
    category: "Products",
  },
  {
    id: "8",
    question: "What are your showroom working hours?",
    answer: "Our showroom at Mysore Road, Bengaluru is open from 0900 Hrs to 2100 Hrs, all days of the week. We recommend scheduling an appointment for dedicated consultation on large projects.",
    category: "General",
  },
  {
    id: "9",
    question: "Do you offer custom sizing and bespoke solutions?",
    answer: "Many of our partner brands offer custom dimensions, finishes, and bespoke manufacturing. Kitchen systems, veneers, decorative panels, and furniture can be tailored to your exact specifications.",
    category: "Products",
  },
  {
    id: "10",
    question: "What warranty do your products carry?",
    answer: "Warranty varies by product and manufacturer, typically ranging from 5 to 25 years for structural products and lifetime for select hardware ranges. Specific warranty terms are provided with each quotation.",
    category: "Products",
  },
  {
    id: "11",
    question: "Can I download product catalogs?",
    answer: "Yes, each product category page includes a catalog download option. You can also request comprehensive brand catalogs through our contact form or at the showroom.",
    category: "Products",
  },
  {
    id: "12",
    question: "Do you support LEED and green building certifications?",
    answer: "Many of our products carry FSC, E0/E1 emission, and recycled content certifications that contribute to LEED and IGBC credits. Our team can provide documentation for green building submissions.",
    category: "Sustainability",
  },
];

export const faqCategories = ["All", "General", "Products", "Services", "Sustainability"];
