import type { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";
import { searchAll } from "@/lib/search";

export const metadata: Metadata = {
  title: "Search",
  description: "Search products, brands, projects, and articles on Aaren International Pro.",
};

interface Props {
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const results = searchAll(q);

  const typeLabels: Record<string, string> = {
    product: "Product",
    brand: "Brand",
    project: "Project",
    blog: "Article",
    page: "Page",
  };

  return (
    <section className="section-padding bg-white min-h-[60vh]">
      <div className="container-luxury max-w-3xl">
        <h1 className="font-serif text-4xl mb-8">Search Results</h1>

        <form action="/search" className="relative mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40" />
          <input
            type="search"
            name="q"
            defaultValue={q}
            placeholder="Search products, brands, projects..."
            className="w-full pl-12 pr-4 py-4 border border-beige bg-beige-light focus:outline-none focus:border-gold text-lg"
            aria-label="Search"
          />
        </form>

        {q && (
          <p className="text-charcoal/60 mb-8">
            {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{q}&rdquo;
          </p>
        )}

        <div className="space-y-4">
          {results.map((result) => (
            <Link
              key={`${result.type}-${result.href}-${result.title}`}
              href={result.href}
              className="block p-6 bg-beige-light hover:bg-beige transition-colors group"
            >
              <span className="text-xs tracking-wider uppercase text-gold-dark">{typeLabels[result.type]}</span>
              <h2 className="font-serif text-xl mt-1 group-hover:text-gold-dark transition-colors">{result.title}</h2>
              <p className="text-charcoal/60 text-sm mt-2">{result.description}</p>
            </Link>
          ))}
        </div>

        {q && results.length === 0 && (
          <p className="text-charcoal/60 text-center py-12">No results found. Try different keywords.</p>
        )}

        {!q && (
          <p className="text-charcoal/60 text-center py-12">Enter a search term to find products, brands, and more.</p>
        )}
      </div>
    </section>
  );
}
