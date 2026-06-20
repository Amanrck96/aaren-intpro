"use client";

import { useState, useMemo } from "react";
import { Search, ChevronDown } from "lucide-react";
import { faqItems, faqCategories } from "@/data/faq";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";

function FAQAccordion({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-beige">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg pr-8 group-hover:text-gold-dark transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 shrink-0 text-gold transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-charcoal/70 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQClient() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [openId, setOpenId] = useState<string | null>("1");

  const filtered = useMemo(() => {
    return faqItems.filter((item) => {
      const matchSearch =
        search === "" ||
        item.question.toLowerCase().includes(search.toLowerCase()) ||
        item.answer.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === "All" || item.category === category;
      return matchSearch && matchCategory;
    });
  }, [search, category]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-charcoal section-padding pt-32">
        <div className="container-luxury">
          <SectionHeading subtitle="Support" title="Frequently Asked Questions" description="Find answers to common questions about our products, services, and processes." light />
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury max-w-4xl">
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal/40" />
              <input
                type="search"
                placeholder="Search FAQ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-beige bg-beige-light focus:outline-none focus:border-gold"
                aria-label="Search FAQ"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {faqCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 text-sm transition-colors ${
                    category === cat ? "bg-charcoal text-white" : "bg-beige-light text-charcoal hover:bg-beige"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            {filtered.map((item) => (
              <FAQAccordion
                key={item.id}
                question={item.question}
                answer={item.answer}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-charcoal/60 py-12">No questions found. Try a different search term.</p>
          )}
        </div>
      </section>
    </>
  );
}
