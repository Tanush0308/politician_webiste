"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { impactMetrics } from "@/data/impact";
import { ImpactMetric } from "@/types/content";

function StatItem({ metric }: { metric: ImpactMetric }) {
  const isVerified = metric.verification === "verified";

  return (
    <div className="p-6 md:p-10 flex flex-col justify-between aspect-square md:aspect-[4/3] group hover:bg-white/[0.02] transition-colors relative">
      <div className="text-[10px] uppercase tracking-[0.2em] text-light/50 font-sans mb-8">
        {metric.label}
      </div>
      <div>
        {isVerified ? (
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white tracking-tighter">
            {metric.value}
          </div>
        ) : (
          <div className="text-sm md:text-base font-bold font-sans text-white/50 tracking-widest uppercase border border-white/10 p-2 inline-block">
            DATA PENDING
          </div>
        )}
        <div className="mt-4 text-xs text-light/70 font-sans leading-relaxed max-w-[80%]">
          {metric.description}
        </div>
      </div>
    </div>
  );
}

export function ImpactNumbers() {
  return (
    <section className="bg-dark border-t border-white/10">
      <Container className="px-0 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 border-x border-white/10 divide-x divide-y md:divide-y-0 divide-white/10">
          {impactMetrics.map((metric, idx) => (
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
