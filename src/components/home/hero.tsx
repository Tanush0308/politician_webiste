"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/container";
import { MediaPlaceholder } from "../ui/media-placeholder";
import { personData } from "@/data/person";
import { mediaRegistry } from "@/data/media";

export function Hero() {
  const heroMedia = mediaRegistry.hero.main;

  return (
    <section className="relative min-h-[90vh] w-full bg-dark flex flex-col justify-center overflow-hidden pt-24 md:pt-32 border-b border-white/10">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40 mix-blend-overlay">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute min-w-full min-h-full object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <source src="/videos/hero_video.mp4" type="video/mp4" />
        </video>
      </div>

      <Container className="relative z-10 flex-1 flex flex-col justify-center pb-12 md:pb-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full">
          
          {/* Typography Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col bg-dark-secondary/60 p-8 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl"
          >
            <div className="flex flex-col space-y-2 mb-6 md:mb-8">
              <span className="text-primary text-[14px] md:text-[16px] font-bold tracking-[0.1em] uppercase">
                आमदार
              </span>
            </div>

            <h1 className="font-bold font-serif text-white tracking-tight leading-[1] mb-8 text-[clamp(3.5rem,7vw,7rem)] drop-shadow-sm">
              {personData.nameMr}
            </h1>
            
            <p className="text-[20px] md:text-[24px] text-white/80 font-sans max-w-lg leading-[1.6] mb-12 font-medium drop-shadow-sm">
              धाराशिव आणि कळंबच्या विकासासाठी आणि नागरिकांच्या प्रश्नांसाठी सातत्याने कार्यरत.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/journey" 
                className="group flex items-center justify-center gap-4 bg-primary text-white px-8 py-4 font-bold tracking-wide hover:bg-accent-hover transition-colors rounded-xl shadow-lg"
              >
                <span>माझा प्रवास</span>
              </Link>
              
              <Link 
                href="/initiatives" 
                className="group flex items-center justify-center gap-4 bg-transparent text-white px-8 py-4 font-bold tracking-wide border border-white/20 hover:border-white transition-colors rounded-xl"
              >
                <span>माझी कामं</span>
              </Link>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative aspect-[4/5] md:aspect-square lg:aspect-[3/4] max-h-[800px]"
          >
            <div className="absolute inset-0 bg-dark-secondary shadow-2xl p-4 md:p-6 transform rotate-2 rounded-2xl border border-white/5">
              <div className="relative w-full h-full overflow-hidden rounded-xl">
                {heroMedia.status === "available" ? (
                  <Image 
                    src={heroMedia.src} 
                    alt={heroMedia.alt} 
                    fill 
                    className="object-cover object-[center_20%]"
                    priority
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
