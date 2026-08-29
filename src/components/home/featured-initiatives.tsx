"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { getInitiatives } from "@/data/initiatives";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { mediaRegistry } from "@/data/media";

export function FeaturedInitiatives() {
  const initiatives = getInitiatives().slice(0, 3);
  const electionMedia = mediaRegistry.journey?.election2024;
  const isElectionMediaAvailable = electionMedia?.status === "available";

  if (initiatives.length === 0) return null;

  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden text-white border-y border-white/5">
      
      {/* Deep Black Theme Background Layer */}
      {isElectionMediaAvailable && (
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-10">
          <Image 
            src={electionMedia.src}
            alt={electionMedia.alt || "Background"}
            fill
            className="object-cover grayscale"
          />
        </div>
      )}
      <div className="absolute inset-0 bg-[#0a0a0a]/95 z-0"></div>

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">ठळक कामं</h2>
            <div className="w-16 h-1 bg-primary mb-6"></div>
            <p className="text-xl text-[#A0A0A0] leading-relaxed">
              मतदारसंघाच्या विकासासाठी आणि जनतेच्या कल्याणासाठी राबवलेले प्रमुख उपक्रम.
            </p>
          </div>
          
          <Link 
            href="/initiatives" 
            className="hidden md:inline-flex items-center text-[15px] font-bold text-primary hover:text-white transition-colors"
          >
            सर्व कामं पहा <span className="ml-2">&rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative, idx) => (
            <motion.div
              key={initiative.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-[#111111] border border-white/5 overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="relative h-64 overflow-hidden bg-black/20">
                {initiative.heroImage?.status === "available" ? (
                  <Image 
                    src={initiative.heroImage.src} 
                    alt={initiative.heroImage.alt || initiative.title} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <MediaPlaceholder category="INITIATIVE" aspectRatio="video" />
                )}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1">
                  {initiative.category}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold font-serif text-white mb-4 group-hover:text-primary transition-colors">
                  {initiative.title}
                </h3>
                <p className="text-[#A0A0A0] leading-relaxed mb-6">
                  {initiative.shortDescription}
                </p>
                <Link 
                  href={`/initiatives/${initiative.slug}`}
                  className="inline-flex items-center text-sm font-bold text-white group-hover:text-primary transition-colors"
                >
                  सविस्तर वाचा <span className="ml-2">&rarr;</span>
                </Link>
              </div>
            </motion.div>
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
