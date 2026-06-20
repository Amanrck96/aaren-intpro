"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface LightboxProps {
  images: string[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

export function Lightbox({ images, initialIndex = 0, isOpen, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(initialIndex);

  if (!isOpen) return null;

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center" role="dialog" aria-modal="true">
      <button onClick={onClose} className="absolute top-6 right-6 text-white hover:text-gold z-10" aria-label="Close">
        <X className="w-8 h-8" />
      </button>
      <button onClick={prev} className="absolute left-4 text-white hover:text-gold p-2" aria-label="Previous image">
        <ChevronLeft className="w-8 h-8" />
      </button>
      <div className="relative w-full max-w-5xl h-[70vh] mx-16">
        <Image src={images[current]} alt={`Gallery image ${current + 1}`} fill className="object-contain" />
      </div>
      <button onClick={next} className="absolute right-4 text-white hover:text-gold p-2" aria-label="Next image">
        <ChevronRight className="w-8 h-8" />
      </button>
      <p className="absolute bottom-6 text-white/60 text-sm">{current + 1} / {images.length}</p>
    </div>
  );
}

interface GalleryGridProps {
  images: string[];
  className?: string;
}

export function GalleryGrid({ images, className }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  return (
    <>
      <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-2", className)}>
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src={img}
              alt={`Gallery ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors" />
          </button>
        ))}
      </div>
      <Lightbox
        images={images}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
