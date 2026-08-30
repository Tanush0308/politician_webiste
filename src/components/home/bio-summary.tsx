"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { personData } from "@/data/person";
import { mediaRegistry } from "@/data/media";

export function BioSummary() {
  const bgImage = mediaRegistry.people.interaction1;

  return (
    <section className="relative py-24 bg-dark overflow-hidden border-b border-border">
      
      {/* Background Image Watermark */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image 
          src="/images/real/bio_bg.jpg" 
          alt="Background Image"
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-dark/70"></div>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 relative aspect-[3/4]"
          >
            <div className="relative w-full h-full overflow-hidden border border-white/10 shadow-sm bg-dark p-2">
              <div className="relative w-full h-full">
                <Image 
                  src="/images/real/media_1788016497502.jpg" 
                  alt={personData.nameMr} 
                  fill 
                  className="object-cover object-top grayscale-[20%]"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
            
            {/* Minimal Decorative Accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-primary"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12 flex flex-col"
          >
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight drop-shadow-sm">
                {personData.nameMr}
              </h2>
              <p className="text-xl text-primary font-bold">
                {personData.designation}
              </p>
              <div className="h-1 w-16 bg-primary mt-6 mb-8"></div>
            </div>

            <div className="space-y-6 text-[#D8D3CC] text-lg leading-relaxed font-sans font-medium">
              <p>
                {personData.shortBio}
              </p>
            </div>

            {/* Quick Stats/Metadata */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12 pt-10 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-4xl font-bold font-serif text-primary mb-1 drop-shadow-sm">१५+</span>
                <span className="text-[#D8D3CC] text-sm font-bold tracking-wide">वर्षे जनसेवा</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold font-serif text-primary mb-1 drop-shadow-sm">२</span>
                <span className="text-[#D8D3CC] text-sm font-bold tracking-wide">वेळा आमदार</span>
              </div>
            </div>
            
            <div className="mt-12">
              <Link 
                href="/journey" 
                className="inline-flex items-center text-[15px] font-bold text-white border border-white/30 px-6 py-3 hover:bg-white hover:text-dark transition-all bg-transparent"
              >
                संपूर्ण परिचय <span className="ml-2">&rarr;</span>
              </Link>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
