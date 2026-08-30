"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { GalleryItem } from "@/types/content";

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const closeLightbox = () => setSelectedImage(null);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {items.map((item, idx) => {
          if (item.image.status !== "available") return null;

          return (
            <ScrollReveal 
              key={item.id} 
              direction="up" 
              delay={(idx % 5) * 0.1}
              className="break-inside-avoid relative overflow-hidden group cursor-pointer border border-border shadow-sm bg-white p-2"
            >
              <div 
                className="relative w-full overflow-hidden"
                onClick={() => setSelectedImage(item)}
              >
                <Image 
                  src={item.image.src} 
                  alt={item.image.alt || item.caption || ""}
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#8F3F16]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-white font-bold font-serif text-xl mb-2">
                    {item.caption}
                  </span>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-white/80 text-xs font-sans uppercase tracking-widest">
                      {item.category}
                    </span>
                    {item.date && (
                      <span className="text-white/60 text-[10px] uppercase tracking-widest">
                        {item.date}
                      </span>
                    )}
                    {item.location && (
                      <span className="text-white/60 text-[10px] uppercase tracking-widest mt-1">
                        {item.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-12 cursor-pointer"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div 
            className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={selectedImage.image.src}
              alt={selectedImage.image.alt || selectedImage.caption || ""}
              fill
              className="object-contain"
            />
            {(selectedImage.caption || selectedImage.date || selectedImage.location) && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h4 className="text-xl md:text-2xl font-serif font-bold mb-2">{selectedImage.caption}</h4>
                <div className="flex gap-4 text-xs tracking-widest uppercase text-white/60">
                  {selectedImage.date && <span>{selectedImage.date}</span>}
                  {selectedImage.location && <span>{selectedImage.location}</span>}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
