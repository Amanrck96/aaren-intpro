import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";
import { GalleryGrid } from "@/components/ui/Lightbox";
import { Button } from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title,
    description: project.description,
    openGraph: { images: [{ url: project.image }] },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <section className="relative h-[60vh] min-h-[400px]">
        <Image src={project.image} alt={project.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 container-luxury pb-12">
          <span className="text-gold text-xs tracking-wider uppercase">{project.category}</span>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-light mt-2">{project.title}</h1>
          <p className="text-white/70 mt-2">{project.location} · {project.year}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-charcoal/70 text-lg leading-relaxed mb-8">{project.description}</p>
              <GalleryGrid images={project.images} />

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="font-serif text-2xl mb-4">Challenges</h2>
                  <p className="text-charcoal/70 leading-relaxed">{project.challenges}</p>
                </div>
                <div>
                  <h2 className="font-serif text-2xl mb-4">Solutions</h2>
                  <p className="text-charcoal/70 leading-relaxed">{project.solutions}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-beige-light p-8 sticky top-32">
                <h2 className="font-serif text-2xl mb-6">Materials Used</h2>
                <ul className="space-y-3 mb-8">
                  {project.materials.map((m) => (
                    <li key={m} className="flex items-center gap-3 text-sm">
                      <span className="w-2 h-2 bg-gold rounded-full shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>

                <blockquote className="border-l-2 border-gold pl-4">
                  <p className="text-charcoal/80 italic text-sm leading-relaxed">&ldquo;{project.testimonial.quote}&rdquo;</p>
                  <footer className="mt-4">
                    <cite className="not-italic font-medium text-sm">{project.testimonial.author}</cite>
                    <p className="text-charcoal/60 text-xs">{project.testimonial.role}</p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal section-padding">
        <div className="container-luxury text-center">
          <h2 className="font-serif text-3xl text-white mb-4">Start Your Project</h2>
          <p className="text-white/70 mb-8">Let us help you achieve similar results for your next build.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="gold">Contact Us</Button>
            <Link href="/projects" className="btn-outline border-white text-white hover:bg-white hover:text-charcoal inline-flex items-center gap-2 px-8 py-3.5 text-sm tracking-wider uppercase">
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
