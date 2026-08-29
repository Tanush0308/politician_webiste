"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function ConstituencyVisual() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none"
           style={{
             backgroundImage: "radial-gradient(circle at 70% 30%, var(--color-accent) 0%, transparent 40%)",
           }}
      />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Map/Visual Side */}
          <motion.div
            initial={{ opacity: 0, rotateY: 10, x: -30 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-square max-w-md mx-auto bg-dark-secondary rounded-full border border-white/10 flex items-center justify-center p-8 shadow-[0_0_100px_rgba(255,119,34,0.1)]"
          >
            {/* Abstract visual representation of Dharashiv/Kalamb since actual GIS map is not available */}
            <div className="relative w-full h-full rounded-full border border-accent/20 flex items-center justify-center">
              <div className="absolute w-3/4 h-3/4 rounded-full border border-accent/30 animate-[spin_60s_linear_infinite]" />
              <div className="absolute w-1/2 h-1/2 rounded-full border border-accent/40 animate-[spin_40s_linear_infinite_reverse]" />
              
              <div className="absolute top-1/4 left-1/4 flex flex-col items-center">
                <div className="w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_rgba(255,119,34,1)] mb-2" />
                <span className="text-white font-semibold text-sm">कळंब</span>
              </div>
              
              <div className="absolute bottom-1/3 right-1/4 flex flex-col items-center">
                <div className="w-5 h-5 bg-accent rounded-full shadow-[0_0_20px_rgba(255,119,34,1)] mb-2" />
                <span className="text-white font-semibold text-base">धाराशिव</span>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start"
          >
            <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">
              माझा मतदारसंघ
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold font-serif leading-tight mb-6">
              धाराशिव आणि कळंबचा सर्वांगीण विकास
            </h2>
            <p className="text-light/70 text-lg leading-relaxed mb-8">
              उस्मानाबाद विधानसभा मतदारसंघ (AC-242) हा केवळ एक मतदारसंघ नसून हे माझे कुटुंब आहे. येथील प्रत्येक गावाला, प्रत्येक वाडीला विकासाच्या प्रवाहात आणण्यासाठी आम्ही कटिबद्ध आहोत.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10 w-full">
              <div className="border-l-2 border-accent/50 pl-4">
                <div className="text-2xl font-bold text-white mb-1">कळंब</div>
                <div className="text-sm text-light/60">संपूर्ण तालुका</div>
              </div>
              <div className="border-l-2 border-accent/50 pl-4">
                <div className="text-2xl font-bold text-white mb-1">धाराशिव</div>
                <div className="text-sm text-light/60">तालुक्याचा भाग</div>
              </div>
            </div>

            <Button asChild size="lg">
              <Link href="/constituency">मतदारसंघातील कामे पहा &rarr;</Link>
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
