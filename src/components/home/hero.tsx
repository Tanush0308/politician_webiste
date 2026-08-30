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
        <div className="absolute inset-0 bg-[#FAF9F6]/50 mix-blend-normal"></div>
        {/* Subtle gradient to anchor text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/85 to-transparent w-full md:w-[80%] lg:w-[60%]"></div>
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
            <div className="inline-flex items-center gap-4 px-3 py-3 bg-white/90 backdrop-blur-sm border border-[#EFE6DA] shadow-md mb-6 self-start rounded-full pr-8">
              <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 shadow-sm border border-black/10">
                <Image 
                  src="/images/real/party_logo.png" 
                  alt="Party Logo" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <span className="text-base md:text-lg font-bold tracking-widest text-dark uppercase font-sans mt-0.5">
                {personData.party}
              </span>
            </div>
            
            <h1 className="h1 mb-6 text-dark drop-shadow-sm">
              <span className="block mb-2">{personData.nameMr.split(' ')[0]} {personData.nameMr.split(' ')[1]}</span>
              <span className="text-primary">{personData.nameMr.split(' ')[2]}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#333333] font-medium leading-relaxed max-w-2xl mb-4 font-sans drop-shadow-sm">
              {personData.designation}
            </p>

            <p className="text-lg md:text-xl text-dark/80 leading-relaxed max-w-2xl mb-10 font-sans border-l-4 border-primary pl-4">
              धाराशिव-कळंब मतदारसंघातील जनतेच्या प्रश्नांसाठी सातत्याने विधानसभेत आवाज उठवणारे लोकप्रतिनिधी.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link 
                href="/initiatives" 
                className="bg-primary text-white hover:bg-[#C85C32] px-8 py-4 text-base font-bold transition-colors shadow-md rounded-sm"
              >
                माझी कामं पहा
              </Link>
              
              <Link 
                href="/journey" 
                className="bg-white/80 backdrop-blur-sm border border-dark text-dark hover:bg-dark hover:text-white px-8 py-4 text-base font-bold transition-all rounded-sm"
              >
                माझा प्रवास
              </Link>
            </div>
          </motion.div>
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative aspect-[4/5] md:aspect-square lg:aspect-[3/4] max-h-[600px] flex items-center justify-center"
          >
            {/* Atmospheric glow behind the portrait */}
            <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full transform scale-90"></div>
            
            <div className="absolute inset-0 p-2 md:p-4">
              <div className="relative w-full h-full">
                {heroMedia.status === "available" ? (
                  <Image 
                    src={heroMedia.src} 
                    alt={heroMedia.alt} 
                    fill 
                    className="object-cover object-[center_20%] drop-shadow-2xl"
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
