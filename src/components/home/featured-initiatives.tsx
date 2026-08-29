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
  const initiatives = getInitiatives().slice(0, 5); // 4 regular + 1 featured
  if (initiatives.length === 0) return null;

  const featured = initiatives[0];
  const list = initiatives.slice(1);

  return (
    <section className="py-24 bg-white relative border-y border-border">
      <Container>
        <SectionTitle 
          title="माझी कामं"
          eyebrow="कामं बोलतात"
          className="mb-16 text-dark"
        />

        <div className="flex flex-col space-y-24">
          
          {/* List of Initiatives (Clean Typographic Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {list.map((initiative, idx) => (
              <motion.div 
                key={initiative.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col border border-border p-8 hover:shadow-lg transition-shadow bg-white"
              >
                <span className="text-primary font-sans font-bold tracking-[0.1em] text-[12px] uppercase block mb-4">
                  {initiative.category}
                </span>
                <h3 className="text-2xl font-bold font-serif mb-4 leading-tight text-dark">
                  {initiative.title}
                </h3>
                <p className="text-[16px] text-dark/70 mb-8 leading-[1.6] flex-1">
                  {initiative.shortDescription}
                </p>
                <Link 
                  href={`/initiatives/${initiative.slug}`}
                  className="inline-flex items-center text-[14px] font-bold tracking-widest text-dark hover:text-accent transition-colors"
                >
                  सविस्तर वाचा <span className="ml-2">&rarr;</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Featured Initiative (Image + Text) */}
          <div className="flex flex-col lg:flex-row gap-0 border border-border overflow-hidden bg-off-white">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:w-3/5 relative aspect-video lg:aspect-[16/9] border-b lg:border-b-0 lg:border-r border-border overflow-hidden"
            >
              {featured.heroImage?.status === "available" ? (
                <Image
                  src={featured.heroImage.src}
                  alt={featured.heroImage.alt}
                  fill
                  className="object-cover object-center"
                />
              ) : (
                <MediaPlaceholder category={featured.category.toUpperCase()} aspectRatio="auto" className="border-none" />
              )}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:w-2/5 flex flex-col justify-center p-8 md:p-12"
            >
              <div>
                <span className="text-primary font-sans tracking-[0.1em] text-[14px] font-bold uppercase block mb-4">
                  महत्त्वाचे प्रकल्प — {featured.category}
                </span>
                <h3 className="text-3xl lg:text-4xl font-bold font-serif mb-6 leading-tight text-dark">
                  {featured.title}
                </h3>
                <p className="text-[17px] md:text-[19px] text-dark/80 mb-8 leading-[1.7]">
                  {featured.shortDescription}
                </p>
              </div>
              
              <div>
                {featured.stats && featured.stats.length > 0 && (
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-dark mb-1 font-serif leading-none">{featured.stats[0].value}</div>
                    <div className="text-[14px] text-muted uppercase font-bold tracking-[0.1em]">{featured.stats[0].label}</div>
                  </div>
                )}

                <Link 
                  href={`/initiatives/${featured.slug}`}
                  className="inline-flex items-center text-[15px] font-bold tracking-widest text-primary hover:text-accent-hover transition-colors"
                >
                  सविस्तर वाचा <span className="ml-2">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          </div>

        </div>

        <div className="mt-16 pt-8 flex justify-center">
          <Link 
            href="/initiatives"
            className="inline-flex items-center justify-center px-8 py-4 border border-dark text-[15px] font-bold font-sans text-dark hover:bg-dark hover:text-white transition-colors"
          >
            सर्व विकासकामे पहा
          </Link>
        </div>
      </Container>
    </section>
  );
}
