"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { personData } from "@/data/person";
import { mediaRegistry } from "@/data/media";

export function BioSummary() {
  const profileMedia = mediaRegistry.profile.primary;

  return (
    <section className="py-24 md:py-32 bg-[#F5F1E8] text-dark overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Portrait Side */}
          <div className="w-full lg:w-5/12">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] w-full border-4 border-[#F5F1E8] shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            >
              {profileMedia.status === "available" ? (
                <Image
                  src={profileMedia.src}
                  alt={profileMedia.alt}
                  fill
                  className="object-cover object-center"
                />
              ) : (
                <MediaPlaceholder 
                  category="PROFILE PORTRAIT"
                  aspectRatio="auto"
                  className="border-none"
                />
              )}
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center h-full pt-4 lg:pt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-serif font-bold text-dark tracking-tighter mb-8 leading-none">
                {personData.nameMr.split(' ').map((part, i) => (
                  <React.Fragment key={i}>
                    {part}
                    {i < personData.nameMr.split(' ').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h2>
              
              <div className="text-xl md:text-2xl text-dark/80 font-serif leading-relaxed mb-12 max-w-2xl border-l-2 border-dark/20 pl-6">
                &quot;{personData.shortBio}&quot;
              </div>

              <div className="grid grid-cols-2 gap-8 mb-16 border-t border-dark/10 pt-8">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-dark/50 font-bold block mb-2">लोकप्रतिनिधी</span>
                  <p className="text-sm font-medium">{personData.roles[0]}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-dark/50 font-bold block mb-2">स्थानिक स्वराज्य</span>
                  <p className="text-sm font-medium">{personData.roles[1]} व {personData.roles[2]}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-dark/50 font-bold block mb-2">शैक्षणिक पात्रता</span>
                  <p className="text-sm font-medium">{personData.education[0]}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-dark/50 font-bold block mb-2">कार्यक्षेत्र</span>
                  <p className="text-sm font-medium">कृषी, आरोग्य व पायाभूत सुविधा</p>
                </div>
              </div>

              <Link 
                href="/journey" 
                className="inline-flex items-center text-xs tracking-widest uppercase text-dark font-bold hover:text-accent transition-colors"
              >
                संपूर्ण प्रवास वाचा <span className="ml-2">&rarr;</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
