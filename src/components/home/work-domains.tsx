"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/typography/section-title";
import { mediaRegistry } from "@/data/media";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

const domains = [
  {
    id: "01",
    title: "शेतकरी",
    description: "शेतकऱ्यांच्या प्रश्नांसाठी आणि त्यांच्या हक्कांसाठी सातत्याने पाठपुरावा.",
    href: "/initiatives?category=farmers",
    image: mediaRegistry.initiatives.farmerInsurance
  },
  {
    id: "02",
    title: "पाणी",
    description: "पिण्याच्या पाण्याचे आणि सिंचनाचे प्रश्न सोडवण्यासाठी धडक उपाययोजना.",
    href: "/initiatives?category=water",
    image: mediaRegistry.initiatives.waterSupply
  },
  {
    id: "03",
    title: "आरोग्य",
    description: "प्रत्येक नागरिकाला उत्तम वैद्यकीय सेवा मिळण्यासाठी प्रयत्न.",
    href: "/initiatives?category=healthcare",
    image: mediaRegistry.initiatives.medicalCamps
  },
  {
    id: "04",
    title: "शिक्षण",
    description: "गुणवत्तापूर्ण शिक्षण आणि विद्यार्थ्यांसाठी शैक्षणिक सुविधांची उभारणी.",
    href: "/initiatives?category=education",
    image: mediaRegistry.gallery.placeholder1
  },
  {
    id: "05",
    title: "पायाभूत सुविधा",
    description: "रस्ते, वीज आणि दळणवळणाच्या साधनांचे सक्षमीकरण.",
    href: "/initiatives?category=infrastructure",
    image: mediaRegistry.gallery.placeholder2
  },
  {
    id: "06",
    title: "युवक व रोजगार",
    description: "तरुणांसाठी रोजगार निर्मिती आणि क्रीडा सुविधांचा विकास.",
    href: "/initiatives?category=youth",
    image: mediaRegistry.gallery.placeholder3
  }
];

export function WorkDomains() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section className="py-24 bg-dark relative">
      <Container>
        <SectionTitle 
          title="कामं बोलतात."
          eyebrow="आमची कार्यक्षेत्रे"
          subtitle="जनतेच्या हितासाठी आणि मतदारसंघाच्या सर्वांगीण विकासासाठी राबवण्यात येणारे मुख्य उपक्रम व धोरणे."
          className="mb-16"
        />

        <div className="relative">
          <div className="border-t border-white/10">
            {domains.map((domain, index) => (
              <Link 
                key={domain.id} 
                href={domain.href}
                className="group flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 py-8 hover:bg-white/[0.02] transition-colors relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-start md:items-center gap-6 md:gap-12 w-full md:w-3/4">
                  <span className="text-[14px] md:text-[16px] font-sans tracking-widest text-light/40 group-hover:text-accent transition-colors">
                    {domain.id}
                  </span>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12 w-full">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white group-hover:text-accent transition-colors shrink-0">
                      {domain.title}
                    </h3>
                    <p className="text-[17px] md:text-[19px] text-light/60 font-sans group-hover:text-light/90 transition-colors">
                      {domain.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex items-center justify-end w-full md:w-1/4">
                  <span className="text-white/40 group-hover:text-white transition-colors">
                    <span className="hidden md:inline-block mr-4 h-[1px] w-0 group-hover:w-12 bg-accent transition-all duration-500 ease-out"></span>
                    <span className="text-[24px] group-hover:translate-x-2 inline-block transition-transform duration-300">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
