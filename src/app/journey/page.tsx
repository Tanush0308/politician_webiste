"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SectionTitle } from "@/components/typography/section-title";
import { journeyEvents } from "@/data/journey";
import { JourneyEvent } from "@/types/content";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { mediaRegistry } from "@/data/media";

function TimelineItem({ 
  event, 
  setActiveYear 
}: { 
  event: JourneyEvent; 
  setActiveYear: (year: string) => void;
}) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  React.useEffect(() => {
    if (isInView) {
      setActiveYear(event.year);
    }
  }, [isInView, event.year, setActiveYear]);

  return (
    <div ref={ref} className="py-24 border-b border-border/50 last:border-b-0 relative">
      <ScrollReveal direction="up" delay={0.1}>
        {/* Mobile Year (Hidden on Desktop) */}
        <div className="lg:hidden text-primary font-bold text-5xl mb-6 font-serif">
          {event.year}
        </div>
        
        <h3 className="h3 text-dark mb-6">
          {event.title}
        </h3>
        
        <p className="text-lg md:text-[21px] text-[#333333] leading-relaxed font-sans max-w-3xl mb-8 font-medium">
          {event.description}
        </p>

        {event.sources && event.sources.length > 0 && (
          <div className="mt-8 pt-6 border-t border-border/50 inline-block">
            <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mr-2">स्रोत / Source:</span>
            <span className="text-sm text-dark/70 font-medium">
              {event.sources.map(s => s.label).join(", ")}
            </span>
          </div>
        )}
      </ScrollReveal>
    </div>
  );
}

export default function JourneyPage() {
  const [activeYear, setActiveYear] = React.useState(
    journeyEvents.length > 0 ? journeyEvents[0].year : ""
  );

  return (
    <div className="bg-off-white min-h-screen">
      <div className="relative pt-32 pb-32 md:pt-40 md:pb-40 border-b border-border overflow-hidden bg-gradient-to-r from-[#FAD2B4] to-[#FCE6D5]">
        
        {/* Right Side Image with Mask Fade */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[60%] lg:w-[50%] z-0">
          <div className="relative w-full h-full hidden md:block" style={{ maskImage: "linear-gradient(to right, transparent, black 25%)", WebkitMaskImage: "linear-gradient(to right, transparent, black 25%)" }}>
            <Image 
              src="/images/real/journey_hero_mic.jpg" 
              alt="Kailas Patil Speaking"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          
          <div className="relative w-full h-full md:hidden" style={{ maskImage: "linear-gradient(to top, transparent, black 40%, black 80%, transparent)", WebkitMaskImage: "linear-gradient(to top, transparent, black 40%, black 80%, transparent)" }}>
            <Image 
              src="/images/real/journey_hero_mic.jpg" 
              alt="Kailas Patil Speaking"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        <Container className="relative z-10 h-full flex flex-col justify-center">
          <div className="w-full md:w-1/2 lg:w-[55%]">
            <SectionTitle 
              title="माझा प्रवास"
              eyebrow="एक संघर्षशील नेतृत्व"
              subtitle="एका सामान्य शेतकरी कुटुंबातून आलेले नेतृत्व ते धाराशिवचे आमदार. जनतेच्या सेवेसाठी समर्पित असलेला हा प्रवास."
              align="left"
              className="text-dark [&>p]:text-dark/80 [&>span]:text-primary"
            />
          </div>
        </Container>
      </div>

      <Container className="px-0 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row min-h-screen">
          
          {/* Left Column (Sticky Year - Desktop Only) */}
          <div className="hidden lg:block lg:w-[40%] relative border-r border-border">
            <div className="sticky top-1/2 -translate-y-1/2 p-12 lg:p-20 text-center">
              <motion.div
                key={activeYear}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-7xl xl:text-9xl font-bold font-serif tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#FFE5D4]/40 via-primary to-primary drop-shadow-sm"
              >
                {activeYear}
              </motion.div>
            </div>
          </div>

          {/* Right Column (Scrolling Events) */}
          <div className="w-full lg:w-[60%] p-6 lg:p-20 xl:p-24">
            {journeyEvents.map((event, index) => (
              <TimelineItem 
                key={index} 
                event={event} 
                setActiveYear={setActiveYear} 
              />
            ))}
          </div>

        </div>
      </Container>
    </div>
  );
}
