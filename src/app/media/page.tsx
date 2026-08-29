import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/typography/section-title";
import { Metadata } from "next";
import { newsArticles } from "@/data/news";
import Image from "next/image";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "मीडिया | Media & Press | Kailas Dada Patil",
  description: "बातम्या, प्रेस कव्हरेज आणि माध्यम संवाद.",
};

export default function MediaPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark">
      <Container>
        <SectionTitle 
          title="मीडिया आणि बातम्या"
          eyebrow="माध्यमांतून"
          subtitle="वृत्तपत्रे, न्यूज चॅनेल्स आणि डिजिटल माध्यमांमधील महत्त्वाचे कव्हरेज."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((news) => {
            const isClickable = news.verification === "verified" && !!news.originalUrl;
            
            const cardContent = (
              <>
                <div className="w-full aspect-video relative overflow-hidden bg-dark/20 border-b border-white/5">
                  {news.image?.status === "available" ? (
                    <Image
                      src={news.image.src}
                      alt={news.image.alt}
                      fill
                      className={`object-cover object-center ${isClickable ? 'group-hover:scale-105 transition-transform duration-700' : ''}`}
                    />
                  ) : (
                    <MediaPlaceholder category="NEWS" aspectRatio="auto" className="border-none" />
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-accent text-xs font-bold uppercase tracking-wider">{news.publisher}</span>
                    <span className="text-light/50 text-xs tracking-widest uppercase">{news.date}</span>
                  </div>
                  <h3 className={`text-xl font-bold font-serif mb-6 text-white ${isClickable ? 'group-hover:text-accent transition-colors' : ''}`}>
                    {news.title}
                  </h3>
                  
                  <div className="mt-auto">
                    {isClickable ? (
                      <div className="text-sm font-bold text-accent flex items-center tracking-wider uppercase group-hover:text-white transition-colors">
                        बातमी वाचा <ArrowUpRight className="ml-2 w-4 h-4" />
                      </div>
                    ) : (
                      <div className="text-xs text-light/40 flex items-center">
                        मूळ बातमीचा दुवा लवकरच उपलब्ध होईल
                      </div>
                    )}
                  </div>
                </div>
              </>
            );

            if (isClickable) {
              return (
                <a 
                  key={news.id} 
                  href={news.originalUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-dark-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all hover:-translate-y-2"
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <div 
                key={news.id} 
                className="flex flex-col bg-dark-secondary rounded-2xl overflow-hidden border border-white/5 opacity-80 grayscale hover:grayscale-0 transition-all"
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
