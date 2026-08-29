"use client";

import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/typography/section-title";
import { motion } from "framer-motion";

const domains = [
  {
    id: "01",
    title: "शेतकरी",
    description: "शेतकऱ्यांच्या प्रश्नांसाठी आणि त्यांच्या हक्कांसाठी सातत्याने पाठपुरावा.",
    href: "/initiatives?category=farmers"
  },
  {
    id: "02",
    title: "पाणी",
    description: "पिण्याच्या पाण्याचे आणि सिंचनाचे प्रश्न सोडवण्यासाठी धडक उपाययोजना.",
    href: "/initiatives?category=water"
  },
  {
    id: "03",
    title: "आरोग्य",
    description: "प्रत्येक नागरिकाला उत्तम वैद्यकीय सेवा मिळण्यासाठी प्रयत्न.",
    href: "/initiatives?category=healthcare"
  },
  {
    id: "04",
    title: "शिक्षण",
    description: "गुणवत्तापूर्ण शिक्षण आणि विद्यार्थ्यांसाठी शैक्षणिक सुविधांची उभारणी.",
    href: "/initiatives?category=education"
  },
  {
    id: "05",
    title: "पायाभूत सुविधा",
    description: "रस्ते, वीज आणि दळणवळणाच्या साधनांचे सक्षमीकरण.",
    href: "/initiatives?category=infrastructure"
  },
  {
    id: "06",
    title: "युवक व रोजगार",
    description: "तरुणांसाठी रोजगार निर्मिती आणि क्रीडा सुविधांचा विकास.",
    href: "/initiatives?category=youth"
  }
];

export function WorkDomains() {
  return (
    <section className="py-24 bg-off-white relative border-b border-border">
      <Container>
        <div className="mb-16">
          <SectionTitle 
            title="कामं बोलतात."
            eyebrow="आमची कार्यक्षेत्रे"
            subtitle="जनतेच्या हितासाठी आणि मतदारसंघाच्या सर्वांगीण विकासासाठी राबवण्यात येणारे मुख्य उपक्रम व धोरणे."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link 
                href={domain.href}
                className="block bg-white p-8 h-full border border-border group hover:border-primary transition-colors"
              >
                <span className="text-sm font-sans font-bold text-muted group-hover:text-primary transition-colors mb-4 block">
                  {domain.id}
                </span>
                <h3 className="text-2xl font-bold font-serif text-dark mb-4">
                  {domain.title}
                </h3>
                <p className="text-[#333333] leading-relaxed">
                  {domain.description}
                </p>
                
                <div className="mt-8 flex items-center text-dark font-bold text-sm">
                  <span className="group-hover:text-primary transition-colors">सविस्तर पहा</span>
                  <span className="ml-2 transform group-hover:translate-x-1 group-hover:text-primary transition-all">&rarr;</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
