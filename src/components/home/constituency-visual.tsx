"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { mediaRegistry } from "@/data/media";

export function ConstituencyVisual() {
  const bgImage = mediaRegistry.people.interaction2;

  return (
    <section className="py-24 relative overflow-hidden text-white border-b border-white/10">
      {/* Background Image with Dark Overlay */}
      {bgImage.status === "available" && (
        <div className="absolute inset-0 z-0">
          <Image 
            src={bgImage.src} 
            alt="Background"
            fill
            className="object-cover object-center mix-blend-overlay opacity-30 grayscale"
          />
        </div>
      )}
      <div className="absolute inset-0 bg-[#8F3F16]/95 z-0"></div>
      
      <Container className="relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-[1.2] mb-8 text-white drop-shadow-sm">
                धाराशिव आणि कळंबचा<br />सर्वांगीण विकास
              </h2>
              <div className="w-16 h-1 bg-[#F36F21] mb-8"></div>
              <p className="text-[18px] md:text-[22px] text-white/90 leading-[1.8] mb-16 max-w-3xl font-sans">
                उस्मानाबाद विधानसभा मतदारसंघ (AC-242) हा केवळ एक मतदारसंघ नसून हे माझे कुटुंब आहे. येथील प्रत्येक गावाला, प्रत्येक वाडीला विकासाच्या प्रवाहात आणण्यासाठी आम्ही कटिबद्ध आहोत.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 mb-16 border-y border-white/20 py-12 w-full justify-center">
                <div>
                  <div className="text-[clamp(2.5rem,4vw,4rem)] font-bold text-[#F36F21] mb-2 font-serif leading-none drop-shadow-sm">कळंब</div>
                  <div className="text-[14px] md:text-[16px] text-white/70 tracking-widest font-bold">संपूर्ण तालुका</div>
                </div>
                <div className="hidden sm:block w-px bg-white/20"></div>
                <div>
                  <div className="text-[clamp(2.5rem,4vw,4rem)] font-bold text-[#F36F21] mb-2 font-serif leading-none drop-shadow-sm">धाराशिव</div>
                  <div className="text-[14px] md:text-[16px] text-white/70 tracking-widest font-bold">तालुक्याचा भाग</div>
                </div>
              </div>

              <Link 
                href="/constituency"
                className="group inline-flex items-center text-[15px] font-sans font-bold text-white hover:text-[#F36F21] transition-colors"
              >
                मतदारसंघातील कामे पहा <span className="ml-2 group-hover:translate-x-2 transition-transform">&rarr;</span>
              </Link>
            </motion.div>
          </div>
      </Container>
    </section>
  );
}
