"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { impactMetrics } from "@/data/impact";
import { ImpactMetric } from "@/types/content";
import { mediaRegistry } from "@/data/media";

function StatItem({ metric }: { metric: ImpactMetric }) {
  const isVerified = metric.verification === "verified";

  return (
    <div className="p-8 md:p-12 flex flex-col justify-between aspect-square md:aspect-auto md:h-full group hover:bg-white/5 transition-colors relative border-b border-white/10 md:border-b-0">
      <div className="text-[14px] uppercase tracking-[0.2em] text-white/50 font-sans font-bold mb-8">
        {metric.label}
      </div>
      <div>
        {isVerified ? (
          <div className="text-[clamp(3.5rem,5vw,6rem)] font-bold font-serif tracking-tighter leading-none mb-4 text-primary">
            {metric.value}
          </div>
        ) : (
          <div className="text-[14px] md:text-base font-bold font-sans text-white/50 tracking-widest uppercase border border-white/20 p-2 inline-block mb-4">
            DATA PENDING
          </div>
        )}
        <div className="text-[18px] text-white/80 font-sans leading-relaxed max-w-[90%] drop-shadow-md">
          {metric.description}
        </div>
      </div>
    </div>
  );
}

export function ImpactNumbers() {
  const displayMetrics = impactMetrics.slice(0, 4);
  
  return (
    <section className="bg-dark relative border-y border-border overflow-hidden">
      {/* Background Image Watermark */}
      {mediaRegistry.journey.campaign.status === "available" && (
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay">
          <Image 
            src={mediaRegistry.journey.campaign.src} 
            alt="Campaign Background"
            fill
            className="object-cover object-center opacity-30 grayscale"
          />
        </div>
      )}

      <Container className="relative z-10 px-0 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-2 md:grid-cols-${Math.min(displayMetrics.length, 4)} divide-x divide-y md:divide-y-0 divide-white/10`}>
          {displayMetrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <StatItem metric={metric} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
