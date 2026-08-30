"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { personData } from "@/data/person";
import { mediaRegistry } from "@/data/media";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { motion } from "framer-motion";

export function Hero() {
  const heroMedia = mediaRegistry.hero.main;

  return (
    <section className="relative min-h-[82vh] flex items-center pt-24 pb-16 overflow-hidden">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/videos/hero_video.mp4" type="video/mp4" />
        </video>
        {/* Beige/Warm White Overlay for text readability but keeping video visible */}
        <div className="absolute inset-0 bg-[#FAF9F6]/60 mix-blend-normal"></div>
        {/* Subtle gradient to anchor text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6]/90 via-[#FAF9F6]/50 to-transparent"></div>
      </div>

      <Container className="relative z-10 w-full h-full flex-1 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
          
          {/* Typography Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <div className="inline-flex items-center gap-3 px-2 py-2 bg-white/90 backdrop-blur-sm border border-[#EFE6DA] shadow-sm mb-6 self-start rounded-full pr-6">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 shadow-sm border border-black/5">
                <Image 
                  src="/images/real/party_logo.png" 
                  alt="Party Logo" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <span className="text-sm font-bold tracking-widest text-[#151515] uppercase font-sans mt-0.5">
                {personData.party}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-serif font-bold text-[#151515] leading-[1.1] mb-6 tracking-tight drop-shadow-sm">
              <span className="block mb-2">{personData.nameMr.split(' ')[0]} {personData.nameMr.split(' ')[1]}</span>
              <span className="text-primary">{personData.nameMr.split(' ')[2]}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#333333] font-medium leading-relaxed max-w-2xl mb-10 font-sans drop-shadow-sm">
              {personData.designation}
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link 
                href="/initiatives" 
                className="bg-primary text-white hover:bg-[#C85C32] px-7 py-3.5 text-[15px] font-bold transition-colors shadow-md"
              >
                माझी कामं पहा
              </Link>
              
              <Link 
                href="/journey" 
                className="bg-white/80 backdrop-blur-sm border border-[#151515] text-[#151515] hover:bg-[#151515] hover:text-white px-7 py-3.5 text-[15px] font-bold transition-all"
              >
                माझा प्रवास
              </Link>
            </div>
          </motion.div>
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative aspect-[4/5] md:aspect-square lg:aspect-[3/4] max-h-[600px]"
          >
            <div className="absolute inset-0 p-4 md:p-5 transform rotate-2">
              <div className="relative w-full h-full overflow-hidden border border-border shadow-sm">
                {heroMedia.status === "available" ? (
                  <Image 
                    src={heroMedia.src} 
                    alt={heroMedia.alt} 
                    fill 
                    className="object-cover object-[center_20%]"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <MediaPlaceholder 
                    category="HERO IMAGE" 
                    aspectRatio="auto" 
                    className="h-full w-full border-none"
                  />
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
