"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/typography/section-title";
import { journeyEvents } from "@/data/journey";
import { JourneyEvent } from "@/types/content";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

// Extracted component to manage individual intersection observers
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
    <div ref={ref} className="py-24 border-b border-white/10 last:border-b-0">
      {/* Mobile Year (Hidden on Desktop) */}
      <div className="lg:hidden text-accent font-bold text-4xl mb-4 font-serif">
        {event.year}
      </div>
      
      <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-serif leading-tight">
        {event.title}
      </h3>
      
      <div className="w-full aspect-[16/9] mb-8 relative overflow-hidden bg-dark/20 border border-white/5">
        {event.image?.status === "available" ? (
          <Image
            src={event.image.src}
            alt={event.image.alt}
            fill
            className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
          />
        ) : (
          <MediaPlaceholder category={`JOURNEY / ${event.year}`} aspectRatio="auto" className="border-none" />
        )}
      </div>

      <p className="text-light/70 text-lg leading-relaxed font-sans max-w-2xl">
        {event.description}
      </p>
    </div>
  );
}

export default function JourneyPage() {
  const [activeYear, setActiveYear] = React.useState(
    journeyEvents.length > 0 ? journeyEvents[0].year : ""
  );

  return (
    <div className="bg-dark min-h-screen">
      <div className="pt-32 pb-16 border-b border-white/10">
        <Container>
          <SectionTitle 
            title="माझा प्रवास"
            eyebrow="एक संघर्षशील नेतृत्व"
            subtitle="एका सामान्य शेतकरी कुटुंबातून आलेले नेतृत्व ते धाराशिवचे आमदार. जनतेच्या सेवेसाठी समर्पित असलेला हा प्रवास."
          />
        </Container>
      </div>

      <Container className="px-0 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row min-h-screen">
          
          {/* Left Column (Sticky Year - Desktop Only) */}
          <div className="hidden lg:block lg:w-[40%] relative border-r border-white/10">
            <div className="sticky top-1/2 -translate-y-1/2 p-12 lg:p-20 text-center">
              <motion.div
                key={activeYear}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-7xl xl:text-9xl font-bold font-serif text-accent tracking-tighter"
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
