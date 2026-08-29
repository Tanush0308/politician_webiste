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
  const profileImage = mediaRegistry.profile.primary;

  return (
    <section className="py-24 bg-white text-dark border-b border-border">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-12 lg:gap-24"
        >
          {/* Left: Heading, Roles & Image */}
          <div className="w-full md:w-1/3 flex flex-col gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark tracking-tight">
                {personData.nameMr}
              </h2>
              <div className="flex flex-col gap-1 mt-2">
                <span className="text-[18px] md:text-[20px] font-sans font-medium text-dark/80">आमदार, धाराशिव</span>
              </div>
            </div>

            {/* Profile Image visible here */}
            <div className="relative w-full aspect-square md:aspect-[4/5] bg-off-white border border-border shadow-sm">
              {profileImage.status === "available" ? (
                <Image 
                  src={profileImage.src} 
                  alt={profileImage.alt} 
                  fill 
                  className="object-cover object-top p-2"
                />
              ) : (
                <MediaPlaceholder category="PROFILE" aspectRatio="auto" className="border-none" />
              )}
            </div>
            
            <Link 
              href="/journey" 
              className="group inline-flex items-center text-[15px] font-bold text-primary hover:text-accent-hover transition-colors"
            >
              संपूर्ण परिचय <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>

          {/* Right: Biography */}
          <div className="w-full md:w-2/3 flex flex-col gap-8">
            <p className="text-[18px] md:text-[22px] text-dark/90 font-serif leading-[1.6]">
              "{personData.shortBio}"
            </p>

            <div className="flex flex-col gap-5 bg-off-white/50 p-6 md:p-8 border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-[15px] font-sans">
                <div className="flex flex-col border-b border-border/50 pb-3 md:border-0 md:pb-0">
                  <span className="text-muted uppercase tracking-widest text-[11px] font-bold mb-1">पूर्ण नाव</span>
                  <span className="font-semibold text-dark">{personData.fullNameMr}</span>
                </div>
                <div className="flex flex-col border-b border-border/50 pb-3 md:border-0 md:pb-0">
                  <span className="text-muted uppercase tracking-widest text-[11px] font-bold mb-1">जन्मदिनांक</span>
                  <span className="font-semibold text-dark">{personData.dob}</span>
                </div>
                <div className="flex flex-col border-b border-border/50 pb-3 md:border-0 md:pb-0">
                  <span className="text-muted uppercase tracking-widest text-[11px] font-bold mb-1">पक्ष</span>
                  <span className="font-semibold text-dark">{personData.party}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-muted uppercase tracking-widest text-[11px] font-bold mb-1">शिक्षण</span>
                  <span className="font-semibold text-dark leading-snug">
                    {personData.education.map((edu, i) => (
                      <React.Fragment key={i}>
                        {edu}
                        {i < personData.education.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {personData.longBio.map((paragraph, index) => (
                <p key={index} className="text-[16px] md:text-[18px] text-dark/80 font-sans leading-[1.8]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
