"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { personData } from "@/data/person";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      
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

      <Container className="relative z-10 w-full h-full">
        <div className="max-w-4xl h-full flex flex-col justify-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-[#EFE6DA] shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-bold tracking-widest text-[#151515] uppercase font-sans">
                {personData.party}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[#151515] leading-[1.1] mb-6 tracking-tight drop-shadow-sm">
              <span className="block mb-2">{personData.nameMr.split(' ')[0]} {personData.nameMr.split(' ')[1]}</span>
              <span className="text-primary">{personData.nameMr.split(' ')[2]}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#333333] font-medium leading-relaxed max-w-2xl mb-12 font-sans drop-shadow-sm">
              {personData.designation}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link 
                href="/initiatives" 
                className="bg-primary text-white hover:bg-[#C85C32] px-8 py-4 text-base font-bold transition-colors shadow-md"
              >
                माझी कामं पहा
              </Link>
              
              <Link 
                href="/journey" 
                className="bg-white/80 backdrop-blur-sm border border-[#151515] text-[#151515] hover:bg-[#151515] hover:text-white px-8 py-4 text-base font-bold transition-all"
              >
                माझा प्रवास
              </Link>
            </div>
          </motion.div>
          
        </div>
      </Container>
    </section>
  );
}
