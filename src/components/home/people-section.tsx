"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { mediaRegistry } from "@/data/media";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export function PeopleSection() {
  const photo1 = mediaRegistry.people.interaction1;

  return (
    <section className="py-24 md:py-32 bg-primary/5 text-dark relative border-y border-border overflow-hidden">
      {/* Background Image Watermark */}
      {mediaRegistry.journey.interaction.status === "available" && (
        <div className="absolute inset-0 z-0 pointer-events-none mix-blend-multiply">
          <Image 
            src={mediaRegistry.journey.interaction.src} 
            alt="Crowd Background"
            fill
            className="object-cover object-center opacity-10"
          />
        </div>
      )}
      
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Typography / Narrative Side */}
          <div className="w-full lg:w-1/3 z-10">
            <span className="text-primary text-[14px] tracking-[0.15em] font-bold uppercase mb-6 block">
              जनसंवाद
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.1] tracking-tight mb-8 text-dark">
              लोकांमध्ये.<br/>लोकांसोबत.
            </h2>
            <p className="text-dark/80 text-[18px] leading-[1.7] font-sans mb-10 max-w-sm">
              राजकारण हे केवळ सत्तेसाठी नाही, तर लोकांच्या अडीअडचणी सोडवण्यासाठी आहे. प्रत्येक घटकापर्यंत पोहोचून त्यांचे प्रश्न समजून घेणे आणि ते सोडवणे हेच आमचे उद्दिष्ट आहे.
            </p>
            <div className="flex items-center gap-6 text-[12px] md:text-[14px] uppercase tracking-[0.2em] text-muted font-bold">
              <span>धाराशिव</span>
              <span>•</span>
              <span>कळंब</span>
            </div>
          </div>

          {/* Documentary Photo Composition */}
          <div className="w-full lg:w-2/3 relative h-[500px] md:h-[600px] lg:h-[700px]">
            {/* Main single large photo */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 border border-border bg-white shadow-xl overflow-hidden rounded-2xl"
            >
              {photo1.status === "available" ? (
                <>
                  <Image
                    src={photo1.src}
                    alt={photo1.alt}
                    fill
                    className="object-cover object-center"
                  />
                  {photo1.caption && (
                    <div className="absolute bottom-0 left-0 bg-white/90 backdrop-blur-md px-6 py-4 border-t border-r border-border text-[12px] md:text-[14px] uppercase tracking-widest font-bold rounded-tr-2xl">
                      {photo1.caption}
                    </div>
                  )}
                </>
              ) : (
                <MediaPlaceholder category="PEOPLE / PUBLIC INTERACTION" aspectRatio="auto" className="border-none" />
              )}
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
