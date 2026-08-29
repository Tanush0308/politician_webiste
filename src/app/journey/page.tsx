"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/container";
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
    <div ref={ref} className="py-24 border-b border-border last:border-b-0">
      {/* Mobile Year (Hidden on Desktop) */}
      <div className="lg:hidden text-primary font-bold text-5xl mb-6 font-serif">
        {event.year}
      </div>
      
      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-8 font-serif leading-tight">
        {event.title}
      </h3>
      
      <p className="text-[18px] md:text-[20px] text-dark/80 leading-[1.8] font-sans max-w-3xl">
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
    <div className="bg-off-white min-h-screen">
      <div className="relative pt-32 pb-32 border-b border-border overflow-hidden bg-dark">
        {mediaRegistry.journey.campaign.status === "available" && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image 
              src={mediaRegistry.journey.campaign.src} 
              alt="Wari Background"
              fill
              className="object-cover object-[center_30%]"
            />
            {/* Professional dark overlay: keeps image visible and vibrant while ensuring white text readability */}
            <div className="absolute inset-0 z-0 bg-dark/50"></div>
          </div>
        )}
        <Container className="relative z-10">
          <div className="text-white drop-shadow-md">
            <SectionTitle 
              title="माझा प्रवास"
              eyebrow="एक संघर्षशील नेतृत्व"
              subtitle="एका सामान्य शेतकरी कुटुंबातून आलेले नेतृत्व ते धाराशिवचे आमदार. जनतेच्या सेवेसाठी समर्पित असलेला हा प्रवास."
              className="text-white"
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
                className="text-7xl xl:text-9xl font-bold font-serif text-primary tracking-tighter"
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
