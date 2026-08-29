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
    <section className="relative h-screen w-full bg-dark flex flex-col">
      {/* Background Image / Video Full Viewport */}
      <div className="absolute inset-0 z-0">
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
            category="HERO BACKGROUND" 
            aspectRatio="auto" 
            className="h-full w-full border-none"
          />
        )}
        
        {/* Subtle gradient only at bottom and left to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/20 to-transparent" />
      </div>

      <Container className="relative z-10 flex-1 flex flex-col justify-end pb-12 md:pb-24 pt-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 w-full">
          
          {/* Left Anchored Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="flex flex-col space-y-2 mb-6">
              <span className="text-accent text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
                {personData.location}
              </span>
              <span className="text-light/70 text-[10px] sm:text-xs font-medium tracking-widest uppercase">
                PUBLIC SERVICE / POLITICAL JOURNEY
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[120px] font-bold font-serif text-white tracking-tight leading-[0.85] mb-6">
              {/* Replace literal spaces with breaks for stylistic vertical layout or keep as is if we map it */}
              {personData.nameMr.split(' ').map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {i < personData.nameMr.split(' ').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>
            
            <p className="text-lg md:text-xl text-light/90 font-sans max-w-lg leading-relaxed border-l border-accent pl-4">
              {personData.shortBio}
            </p>
          </motion.div>

          {/* Right Anchored CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row md:flex-col gap-4"
          >
            <Link 
              href="/journey" 
              className="group flex items-center justify-between gap-6 bg-white text-dark px-6 py-4 border border-white hover:bg-transparent hover:text-white transition-colors duration-300"
            >
              <span className="text-sm font-semibold tracking-wide">माझा प्रवास</span>
              <ArrowDownRight className="w-4 h-4 group-hover:rotate-[-45deg] transition-transform duration-300" />
            </Link>
            
            <Link 
              href="/initiatives" 
              className="group flex items-center justify-between gap-6 bg-transparent text-white px-6 py-4 border border-white/20 hover:border-white transition-colors duration-300"
            >
              <span className="text-sm font-semibold tracking-wide">कामं पहा</span>
              <ArrowDownRight className="w-4 h-4 group-hover:rotate-[-45deg] transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
