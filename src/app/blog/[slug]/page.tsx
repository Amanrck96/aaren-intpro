import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, getBlogBySlug } from "@/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: "Aaren International Pro" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article>
        <section className="relative h-[50vh] min-h-[400px]">
          <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-charcoal/50" />
          <div className="absolute bottom-0 left-0 right-0 container-luxury pb-12">
            <span className="text-gold text-xs tracking-wider uppercase">{post.category}</span>
            <h1 className="font-serif text-3xl md:text-5xl text-white font-light mt-2 max-w-3xl">{post.title}</h1>
            <p className="text-white/70 mt-4 text-sm">{post.author} · {post.date} · {post.readTime}</p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-luxury max-w-3xl">
            <p className="text-xl text-charcoal/80 leading-relaxed mb-8 font-light">{post.excerpt}</p>
            <div className="prose prose-lg max-w-none text-charcoal/70 leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="section-padding bg-beige-light">
            <div className="container-luxury">
              <h2 className="font-serif text-2xl mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="group flex gap-6 bg-white p-4">
                    <div className="relative w-32 h-24 shrink-0 overflow-hidden">
                      <Image src={r.image} alt={r.title} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg group-hover:text-gold-dark transition-colors">{r.title}</h3>
                      <p className="text-charcoal/60 text-sm mt-1 line-clamp-2">{r.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </>
  );
}
