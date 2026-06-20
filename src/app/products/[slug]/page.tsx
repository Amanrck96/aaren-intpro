import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { productCategories, getProductBySlug, getRelatedProducts } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { GalleryGrid } from "@/components/ui/Lightbox";
import { InquiryForm } from "@/components/forms/InquiryForm";
import { Button } from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productCategories.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.heroImage }],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product.relatedSlugs);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.heroImage,
    brand: { "@type": "Brand", name: "Aaren International Pro" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <section className="relative h-[50vh] min-h-[400px] flex items-end">
        <Image src={product.heroImage} alt={product.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent" />
        <div className="container-luxury relative z-10 pb-12">
          <nav className="text-white/60 text-sm mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products/plywood" className="hover:text-gold">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{product.shortName}</span>
          </nav>
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2">{product.tagline}</p>
          <h1 className="font-serif text-4xl md:text-6xl text-white font-light">{product.name}</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <SectionHeading subtitle="Overview" title={`Premium ${product.shortName} Solutions`} align="left" />
                <p className="text-charcoal/70 leading-relaxed text-lg">{product.overview}</p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <h3 className="font-serif text-2xl mt-12 mb-6">Product Gallery</h3>
                <GalleryGrid images={product.gallery} />
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <h3 className="font-serif text-2xl mt-12 mb-6">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.features.map((f) => (
                    <div key={f.title} className="p-6 bg-beige-light border-l-2 border-gold">
                      <h4 className="font-medium mb-2">{f.title}</h4>
                      <p className="text-charcoal/70 text-sm">{f.description}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <h3 className="font-serif text-2xl mt-12 mb-6">Specifications</h3>
                <table className="w-full text-sm">
                  <tbody>
                    {product.specifications.map((spec) => (
                      <tr key={spec.label} className="border-b border-beige">
                        <td className="py-4 font-medium text-charcoal/60 w-1/3">{spec.label}</td>
                        <td className="py-4 text-charcoal">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ScrollReveal>

              <div className="mt-8">
                <Link
                  href={`/contact?product=${product.slug}&type=catalog`}
                  className="inline-flex items-center gap-2 btn-outline"
                  aria-label={`Download ${product.name} catalog`}
                >
                  <Download className="w-4 h-4" />
                  Download Catalog PDF
                </Link>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-beige-light p-8">
                <h3 className="font-serif text-2xl mb-2">Request a Quote</h3>
                <p className="text-charcoal/60 text-sm mb-6">Get pricing and availability for your project.</p>
                <InquiryForm productName={product.name} variant="compact" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-padding bg-beige-light">
          <div className="container-luxury">
            <SectionHeading subtitle="Related" title="You May Also Like" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link key={rel.slug} href={`/products/${rel.slug}`} className="group block bg-white overflow-hidden">
                  <div className="relative aspect-[16/10]">
                    <Image src={rel.heroImage} alt={rel.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl group-hover:text-gold-dark transition-colors">{rel.shortName}</h3>
                    <span className="inline-flex items-center gap-1 text-sm text-gold-dark mt-2">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-charcoal section-padding">
        <div className="container-luxury text-center">
          <h2 className="font-serif text-3xl text-white mb-4">Need Expert Guidance?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">Our specialists can help you select the perfect {product.shortName.toLowerCase()} for your project.</p>
          <Button href="/contact?type=consultation" variant="gold">Book Consultation</Button>
        </div>
      </section>
    </>
  );
}
