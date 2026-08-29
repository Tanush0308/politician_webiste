"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { mediaRegistry } from "@/data/media";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export function PeopleSection() {
  const photo1 = mediaRegistry.people.interaction1;
  const photo2 = mediaRegistry.people.interaction2;

  return (
    <section className="py-24 md:py-32 bg-[#F5F1E8] text-dark relative overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Typography / Narrative Side */}
          <div className="w-full lg:w-1/3 z-10">
            <span className="text-accent text-[10px] tracking-[0.2em] font-bold uppercase mb-6 block">
              जनसंवाद
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[0.9] tracking-tighter mb-8 text-dark">
              लोकांमध्ये.<br/>लोकांसोबत.
            </h2>
            <p className="text-dark/70 text-lg leading-relaxed font-sans mb-10 max-w-sm">
              राजकारण हे केवळ सत्तेसाठी नाही, तर लोकांच्या अडीअडचणी सोडवण्यासाठी आहे. प्रत्येक घटकापर्यंत पोहोचून त्यांचे प्रश्न समजून घेणे आणि ते सोडवणे हेच आमचे उद्दिष्ट आहे.
            </p>
            <div className="flex items-center gap-6 text-[10px] uppercase tracking-widest text-dark/40 font-bold">
              <span>धाराशिव</span>
              <span>•</span>
              <span>कळंब</span>
            </div>
          </div>

          {/* Documentary Photo Composition */}
          <div className="w-full lg:w-2/3 relative h-[500px] md:h-[600px] lg:h-[700px]">
            {/* Main large photo */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="absolute right-0 top-0 w-[90%] md:w-[80%] h-[80%] border-4 border-[#F5F1E8] shadow-2xl z-10 overflow-hidden bg-dark/5"
            >
              {photo1.status === "available" ? (
                <>
                  <Image
                    src={photo1.src}
                    alt={photo1.alt}
                    fill
                    className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  {photo1.caption && (
                    <div className="absolute bottom-4 left-6 bg-[#F5F1E8] px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold">
                      {photo1.caption}
                    </div>
                  )}
                </>
              ) : (
                <MediaPlaceholder category="PEOPLE / PUBLIC INTERACTION" aspectRatio="auto" className="border-none" />
              )}
            </motion.div>

            {/* Overlapping secondary photo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute left-0 bottom-0 w-[50%] md:w-[45%] aspect-square border-8 border-[#F5F1E8] shadow-xl z-20 overflow-hidden bg-dark/10"
            >
              {photo2.status === "available" ? (
                <>
                  <Image
                    src={photo2.src}
                    alt={photo2.alt}
                    fill
                    className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  {photo2.caption && (
                    <div className="absolute bottom-4 left-4 bg-[#F5F1E8] px-3 py-1.5 text-[10px] uppercase tracking-widest font-bold z-10">
                      {photo2.caption}
                    </div>
                  )}
                </>
              ) : (
                <MediaPlaceholder category="PEOPLE / WOMEN" aspectRatio="auto" className="border-none" />
              )}
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
