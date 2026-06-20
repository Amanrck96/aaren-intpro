import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section-padding bg-beige-light min-h-[60vh] flex items-center">
      <div className="container-luxury text-center">
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">404</p>
        <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Page Not Found</h1>
        <p className="text-charcoal/60 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/" variant="primary">Return Home</Button>
      </div>
    </section>
  );
}
