"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { getInitiatives } from "@/data/initiatives";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { mediaRegistry } from "@/data/media";

export function FeaturedInitiatives() {
  const initiatives = getInitiatives().slice(0, 3);
  const electionMedia = mediaRegistry.journey?.election2024;
  const isElectionMediaAvailable = electionMedia?.status === "available";

  if (initiatives.length === 0) return null;

  return (
    <section className="relative py-24 bg-[#FDF8F5] overflow-hidden text-dark border-y border-border">
      
      {/* Light Theme Background Layer */}
      {isElectionMediaAvailable && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src={electionMedia.src}
            alt={electionMedia.alt || "Background"}
            fill
            className="object-cover opacity-[0.08] grayscale"
          />
        </div>
      )}

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-6">ठळक कामं</h2>
            <div className="w-16 h-1 bg-primary mb-6"></div>
            <p className="text-xl text-[#333333] leading-relaxed">
              मतदारसंघाच्या विकासासाठी आणि जनतेच्या कल्याणासाठी राबवलेले प्रमुख उपक्रम.
            </p>
          </div>
          
          <Link 
            href="/initiatives" 
            className="hidden md:inline-flex items-center text-[15px] font-bold text-primary hover:text-dark transition-colors"
          >
            सर्व कामं पहा <span className="ml-2">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, idx) => (
            <ScrollReveal
              key={initiative.slug}
              delay={idx * 0.1}
              direction="up"
              className="bg-white border border-border overflow-hidden shadow-sm group hover:border-primary/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden bg-black/5 shrink-0">
                {initiative.heroImage?.status === "available" ? (
                  <Image 
                    src={initiative.heroImage.src} 
                    alt={initiative.heroImage.alt || initiative.title} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                ) : (
                  <MediaPlaceholder category="INITIATIVE" aspectRatio="video" />
                )}
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 shadow-sm">
                  {initiative.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="h3 mb-4 group-hover:text-primary transition-colors">
                  {initiative.title}
                </h3>
                <p className="text-[#333333] leading-relaxed mb-6 font-medium flex-1">
                  {initiative.shortDescription}
                </p>
                <Link 
                  href={`/initiatives/${initiative.slug}`}
                  className="inline-flex items-center text-sm font-bold text-primary group-hover:text-dark transition-colors self-start"
                >
                  सविस्तर वाचा <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Link 
            href="/initiatives" 
            className="inline-flex items-center text-[15px] font-bold text-primary"
          >
            सर्व कामं पहा <span className="ml-2">&rarr;</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
