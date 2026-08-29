"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/typography/section-title";
import { getInitiatives } from "@/data/initiatives";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export function FeaturedInitiatives() {
  const initiatives = getInitiatives().slice(0, 2);

  if (initiatives.length < 2) return null;

  const [first, second] = initiatives;

  return (
    <section className="py-24 bg-dark relative border-t border-white/10">
      <Container>
        <SectionTitle 
          title="महत्त्वाचे प्रकल्प"
          eyebrow="आमचे कार्य"
          className="mb-16"
        />

        <div className="flex flex-col space-y-24">
          
          {/* Composition 1: Massive Image (75%), Text (25%) */}
          <div className="flex flex-col lg:flex-row gap-0 border border-white/10">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:w-3/4 relative aspect-video lg:aspect-[16/9] border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden"
            >
              {first.heroImage?.status === "available" ? (
                <Image
                  src={first.heroImage.src}
                  alt={first.heroImage.alt}
                  fill
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                />
              ) : (
                <MediaPlaceholder category={first.category.toUpperCase()} aspectRatio="auto" className="border-none" />
              )}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:w-1/4 flex flex-col justify-between p-8 bg-dark"
            >
              <div>
                <span className="text-light/50 font-sans tracking-[0.2em] text-[10px] uppercase block mb-6">
                  01 — {first.category}
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold font-serif mb-4 leading-tight text-white">
                  {first.title}
                </h3>
                <p className="text-light/70 text-sm mb-12 leading-relaxed">
                  {first.shortDescription}
                </p>
              </div>
              
              <div>
                {first.stats && first.stats.length > 0 && (
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-accent mb-1 font-serif">{first.stats[0].value}</div>
                    <div className="text-[10px] text-light/50 uppercase tracking-[0.2em]">{first.stats[0].label}</div>
                  </div>
                )}

                <Link 
                  href={`/initiatives/${first.slug}`}
                  className="inline-flex items-center text-xs tracking-widest uppercase text-white hover:text-accent transition-colors"
                >
                  सविस्तर वाचा <span className="ml-2">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Composition 2: Text (33%), Image (66% - 4:3 aspect ratio) */}
          <div className="flex flex-col-reverse lg:flex-row gap-0 border border-white/10">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:w-1/3 flex flex-col justify-between p-8 bg-dark border-t lg:border-t-0 lg:border-r border-white/10"
            >
              <div>
                <span className="text-light/50 font-sans tracking-[0.2em] text-[10px] uppercase block mb-6">
                  02 — {second.category}
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold font-serif mb-4 leading-tight text-white">
                  {second.title}
                </h3>
                <p className="text-light/70 text-sm mb-12 leading-relaxed">
                  {second.shortDescription}
                </p>
              </div>
              
              <div>
                {second.stats && second.stats.length > 0 && (
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-accent mb-1 font-serif">{second.stats[0].value}</div>
                    <div className="text-[10px] text-light/50 uppercase tracking-[0.2em]">{second.stats[0].label}</div>
                  </div>
                )}

                <Link 
                  href={`/initiatives/${second.slug}`}
                  className="inline-flex items-center text-xs tracking-widest uppercase text-white hover:text-accent transition-colors"
                >
                  सविस्तर वाचा <span className="ml-2">&rarr;</span>
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:w-2/3 relative aspect-square lg:aspect-[4/3] overflow-hidden"
            >
              {second.heroImage?.status === "available" ? (
                <Image
                  src={second.heroImage.src}
                  alt={second.heroImage.alt}
                  fill
                  className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                />
              ) : (
                <MediaPlaceholder category={second.category.toUpperCase()} aspectRatio="auto" className="border-none" />
              )}
            </motion.div>
          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex justify-end">
          <Link 
            href="/initiatives"
            className="inline-flex items-center text-sm font-sans tracking-widest uppercase text-light/50 hover:text-white transition-colors"
          >
            सर्व विकासकामे पहा <span className="ml-2">&rarr;</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
