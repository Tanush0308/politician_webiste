"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { impactMetrics } from "@/data/impact";
import { mediaRegistry } from "@/data/media";

export function ImpactNumbers() {
  const impactBg = mediaRegistry.journey?.campaign?.status === "available" 
    ? mediaRegistry.journey.campaign.src 
    : undefined;

  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      {/* Background with Primary Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {impactBg && (
          <Image 
            src={impactBg}
            alt=""
            fill
            className="object-cover opacity-30 mix-blend-multiply"
          />
        )}
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {impactMetrics.slice(0, 4).map((item, index) => (
            <ScrollReveal 
              key={index}
              delay={index * 0.1}
              direction="up"
              className="flex flex-col items-center justify-center p-10 border border-white/20 text-center group bg-black/5"
            >
              <div className="text-[5.5rem] md:text-[7rem] leading-none font-bold font-serif text-white mb-2 tracking-tight group-hover:scale-105 transition-transform drop-shadow-md">
                {item.value}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-sm">
                {item.label}
              </h3>
              
              <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-[240px] font-medium">
                {item.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
