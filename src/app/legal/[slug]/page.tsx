import type { Metadata } from "next";
import Link from "next/link";

const legalContent: Record<string, { title: string; description: string; sections: { heading: string; content: string }[] }> = {
  "privacy-policy": {
    title: "Privacy Policy",
    description: "How Aaren International Pro collects, uses, and protects your personal information.",
    sections: [
      { heading: "Information We Collect", content: "We collect information you provide through contact forms, newsletter subscriptions, and showroom visits, including name, email, phone number, company type, and project details." },
      { heading: "How We Use Your Information", content: "Your information is used to respond to inquiries, provide quotes, schedule consultations, send relevant product updates, and improve our services. We do not sell your personal data to third parties." },
      { heading: "Data Security", content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or disclosure." },
      { heading: "Your Rights", content: "You may request access to, correction of, or deletion of your personal data by contacting us at info@aarenintpro.com." },
      { heading: "Contact", content: "For privacy-related inquiries, contact us at info@aarenintpro.com or +91 888 446 4444." },
    ],
  },
  "terms-and-conditions": {
    title: "Terms & Conditions",
    description: "Terms governing use of the Aaren International Pro website and services.",
    sections: [
      { heading: "Acceptance of Terms", content: "By accessing this website, you agree to these terms and conditions. If you disagree, please do not use our website." },
      { heading: "Products & Pricing", content: "Product descriptions, images, and specifications are for reference. Prices are subject to change and confirmed upon quotation. Availability may vary." },
      { heading: "Intellectual Property", content: "All content on this website, including text, images, logos, and design, is the property of Aaren International Pro or its licensors and is protected by copyright law." },
      { heading: "Limitation of Liability", content: "Aaren International Pro shall not be liable for any indirect, incidental, or consequential damages arising from use of this website or our products." },
      { heading: "Governing Law", content: "These terms are governed by the laws of India. Disputes shall be subject to the jurisdiction of courts in Bengaluru, Karnataka." },
    ],
  },
  "cookie-policy": {
    title: "Cookie Policy",
    description: "Information about cookies used on the Aaren International Pro website.",
    sections: [
      { heading: "What Are Cookies", content: "Cookies are small text files stored on your device when you visit our website. They help us provide a better browsing experience." },
      { heading: "Types of Cookies We Use", content: "We use essential cookies for website functionality, analytics cookies to understand visitor behavior, and preference cookies to remember your settings." },
      { heading: "Managing Cookies", content: "You can control cookies through your browser settings. Disabling cookies may affect website functionality." },
      { heading: "Third-Party Cookies", content: "We may use third-party services such as Google Analytics that set their own cookies. Please refer to their privacy policies for details." },
    ],
  },
  "return-refund": {
    title: "Return & Refund Policy",
    description: "Our policy on returns, exchanges, and refunds for building materials and products.",
    sections: [
      { heading: "General Policy", content: "Due to the custom and bulk nature of building materials, returns are handled on a case-by-case basis. Please contact us before initiating any return." },
      { heading: "Defective Products", content: "Products with manufacturing defects reported within 7 days of delivery will be replaced or refunded at our discretion, subject to inspection." },
      { heading: "Custom Orders", content: "Custom-cut, bespoke, or specially ordered items are generally non-returnable unless defective." },
      { heading: "Process", content: "To initiate a return, contact info@aarenintpro.com with your order details, photos of the issue, and reason for return." },
    ],
  },
  disclaimer: {
    title: "Disclaimer",
    description: "Important disclaimers regarding website content and product information.",
    sections: [
      { heading: "Website Content", content: "Information on this website is provided for general guidance. While we strive for accuracy, we make no warranties about completeness or suitability for any purpose." },
      { heading: "Product Images", content: "Product images are representative and may vary from actual products due to screen settings, natural material variation, and batch differences." },
      { heading: "Professional Advice", content: "Material specifications should be verified with our technical team for your specific application. Always consult qualified professionals for installation." },
      { heading: "External Links", content: "Our website may contain links to third-party sites. We are not responsible for their content or privacy practices." },
    ],
  },
  accessibility: {
    title: "Accessibility Statement",
    description: "Our commitment to digital accessibility for all users.",
    sections: [
      { heading: "Our Commitment", content: "Aaren International Pro is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone." },
      { heading: "Standards", content: "We aim to conform to WCAG 2.1 Level AA guidelines, including keyboard navigation, screen reader compatibility, sufficient color contrast, and descriptive alt text." },
      { heading: "Feedback", content: "If you encounter accessibility barriers on our website, please contact us at info@aarenintpro.com or +91 888 446 4444. We welcome your feedback." },
      { heading: "Ongoing Efforts", content: "We regularly review and update our website to maintain and improve accessibility standards." },
    ],
  },
  copyright: {
    title: "Copyright Policy",
    description: "Copyright and intellectual property information for Aaren International Pro.",
    sections: [
      { heading: "Ownership", content: "All content on www.aarenintpro.com, including text, graphics, logos, images, and software, is the property of Aaren International Pro and protected by Indian and international copyright laws." },
      { heading: "Permitted Use", content: "You may view and download content for personal, non-commercial use only. Reproduction, distribution, or modification without written permission is prohibited." },
      { heading: "Brand Logos", content: "Third-party brand logos displayed on our website are the property of their respective owners and used with authorization." },
      { heading: "Infringement", content: "To report copyright infringement, contact info@aarenintpro.com with details of the alleged violation." },
    ],
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(legalContent).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = legalContent[slug];
  if (!page) return { title: "Legal" };
  return { title: page.title, description: page.description };
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  const page = legalContent[slug];

  if (!page) {
    return (
      <section className="section-padding text-center">
        <h1 className="font-serif text-3xl">Page Not Found</h1>
        <Link href="/" className="text-gold-dark mt-4 inline-block">Return Home</Link>
      </section>
    );
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-luxury max-w-3xl">
        <nav className="text-sm text-charcoal/60 mb-8">
          <Link href="/" className="hover:text-gold-dark">Home</Link>
          <span className="mx-2">/</span>
          <span>{page.title}</span>
        </nav>
        <h1 className="font-serif text-4xl mb-4">{page.title}</h1>
        <p className="text-charcoal/60 mb-12">{page.description}</p>
        <div className="space-y-10">
          {page.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-serif text-2xl mb-4">{section.heading}</h2>
              <p className="text-charcoal/70 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
        <p className="text-charcoal/40 text-sm mt-12">Last updated: June 2025</p>
      </div>
    </section>
  );
}
