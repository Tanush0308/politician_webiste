"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/typography/section-title";
import { siteConfig } from "@/config/site.config";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, connect this to an API or service like Formspree
    alert("तुमचा संदेश प्राप्त झाला आहे. आम्ही लवकरच तुमच्याशी संपर्क साधू.");
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark">
      <Container>
        <SectionTitle 
          title="संपर्क साधा"
          eyebrow="आम्ही आपल्या सेवेत"
          subtitle="तुमचे प्रश्न, समस्या किंवा सूचना आमच्यापर्यंत पोहोचवा. प्रत्येक नागरिकाचे म्हणणे ऐकून घेणे हे आमचे कर्तव्य आहे."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold font-serif text-white mb-6">जनसंपर्क कार्यालय</h3>
              <div className="space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-dark-secondary flex items-center justify-center text-accent shrink-0 border border-white/5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">पत्ता</h4>
                    <p className="text-light/70">{siteConfig.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-dark-secondary flex items-center justify-center text-accent shrink-0 border border-white/5">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">फोन नंबर</h4>
                    <p className="text-light/70">{siteConfig.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-dark-secondary flex items-center justify-center text-accent shrink-0 border border-white/5">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">ई-मेल</h4>
                    <p className="text-light/70">{siteConfig.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-dark-secondary flex items-center justify-center text-accent shrink-0 border border-white/5">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">कार्यालयीन वेळ</h4>
                    <p className="text-light/70">सकाळी १०:०० ते सायंकाळी ०६:०० (रविवार बंद)</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="p-6 bg-accent/10 border border-accent/20 rounded-2xl">
              <h4 className="font-bold text-accent mb-2">महत्त्वाची सूचना:</h4>
              <p className="text-sm text-light/80 leading-relaxed">
                अत्यंत तातडीच्या कामांसाठी किंवा आपत्कालीन परिस्थितीत तुम्ही कधीही संपर्क करू शकता. जनसेवेसाठी आम्ही २४ तास तत्पर आहोत.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-secondary p-8 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold font-serif text-white mb-6">संदेश पाठवा / तक्रार नोंदवा</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-light/80">संपूर्ण नाव</label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="तुमचे नाव"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-light/80">मोबाईल नंबर</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required 
                    className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="मोबाईल नंबर"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="village" className="text-sm font-medium text-light/80">गाव / शहर</label>
                <input 
                  type="text" 
                  id="village" 
                  required 
                  className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="गाव किंवा शहराचे नाव"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-light/80">विषय</label>
                <input 
                  type="text" 
                  id="subject" 
                  required 
                  className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="संदेशाचा विषय"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-light/80">सविस्तर संदेश / तक्रार</label>
                <textarea 
                  id="message" 
                  required 
                  rows={4}
                  className="w-full bg-dark border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="तुमचा प्रश्न किंवा तक्रार सविस्तर लिहा..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                संदेश पाठवा
              </Button>
            </form>
          </div>

        </div>
      </Container>
    </div>
  );
}
