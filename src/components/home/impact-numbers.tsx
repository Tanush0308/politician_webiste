"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
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
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-8 border border-white/20 text-center group bg-black/5"
            >
              <div className="text-5xl md:text-6xl font-bold font-serif text-white mb-4 tracking-tight group-hover:scale-105 transition-transform drop-shadow-sm">
                {item.value}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 drop-shadow-sm">
                {item.label}
              </h3>
              
              <p className="text-white/90 text-sm leading-relaxed max-w-[200px] font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
