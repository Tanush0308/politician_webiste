import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/typography/section-title";
import { Metadata } from "next";
import { newsArticles } from "@/data/news";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { mediaRegistry } from "@/data/media";

export const metadata: Metadata = {
  title: "मीडिया | Media & Press | Kailas Dada Patil",
  description: "बातम्या, प्रेस कव्हरेज आणि माध्यम संवाद.",
};

export default function MediaPage() {
  const featuredNews = newsArticles[0];
  const regularNews = newsArticles.slice(1);
  const bgImage = mediaRegistry.journey?.interaction;

  return (
    <div className="relative pt-32 pb-24 min-h-screen bg-off-white overflow-hidden">
      
      {/* Background Image Watermark */}
      {bgImage?.status === "available" && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image 
            src={bgImage.src} 
            alt="Background" 
            fill 
            className="object-cover opacity-[0.08] grayscale" 
          />
        </div>
      )}

      <Container className="relative z-10">
        <SectionTitle 
          title="मीडिया आणि बातम्या"
          eyebrow="माध्यमांतून"
          subtitle="वृत्तपत्रे, न्यूज चॅनेल्स आणि डिजिटल माध्यमांमधील महत्त्वाचे कव्हरेज."
          className="mb-16 text-dark"
        />

        <div className="flex flex-col gap-16">
          
          {/* Featured Article */}
          {featuredNews && (
            <div className="border-t-2 border-dark pt-8">
              <span className="text-[12px] md:text-[14px] text-primary tracking-[0.2em] font-bold uppercase block mb-6">विशेष बातमी</span>
              <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
                <div className="md:w-2/3">
                  <div className="flex items-center gap-4 mb-4 text-[12px] md:text-[14px] font-sans">
                    <span className="text-dark/80 font-bold uppercase">{featuredNews.publisher}</span>
                    <span className="text-dark/30">•</span>
                    <span className="text-dark/60 uppercase tracking-widest font-bold">{featuredNews.date}</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-8 text-dark leading-tight">
                    {featuredNews.title}
                  </h3>
                  
                  {featuredNews.verification === "verified" && !!featuredNews.originalUrl ? (
                    <a 
                      href={featuredNews.originalUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex items-center text-[14px] md:text-[16px] tracking-widest uppercase text-primary font-bold hover:text-accent-hover transition-colors"
                    >
                      सविस्तर बातमी वाचा <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                  ) : (
                    <span className="text-[14px] text-muted uppercase tracking-widest font-bold block">
                      मूळ बातमीचा दुवा लवकरच उपलब्ध होईल
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Regular List */}
          <div className="flex flex-col border-t-2 border-dark pt-2">
            {regularNews.map((news) => {
              const isClickable = news.verification === "verified" && !!news.originalUrl;
              
              const rowContent = (
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 w-full md:w-3/4">
                    <div className="flex flex-col w-32 shrink-0">
                      <span className="text-dark/80 font-bold uppercase text-[12px]">{news.publisher}</span>
                      <span className="text-dark/50 uppercase font-bold tracking-widest text-[10px] mt-1">{news.date}</span>
                    </div>
                    <h4 className={`text-2xl md:text-3xl font-serif font-bold text-dark leading-tight ${isClickable ? 'group-hover:text-primary transition-colors' : ''}`}>
                      {news.title}
                    </h4>
                  </div>
                  
                  <div className="mt-2 md:mt-0 w-full md:w-1/4 flex justify-end">
                    {isClickable ? (
                      <span className="text-primary text-[12px] md:text-[14px] uppercase tracking-widest font-bold group-hover:text-accent-hover transition-colors flex items-center">
                        बातमी <ArrowUpRight className="ml-1 w-4 h-4" />
                      </span>
                    ) : (
                      <span className="text-muted text-[10px] md:text-[12px] uppercase font-bold tracking-widest">
                        दुवा नाही
                      </span>
                    )}
                  </div>
                </div>
              );

              if (isClickable) {
                return (
                  <a 
                    key={news.id} 
                    href={news.originalUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group border-b border-border py-8 hover:bg-white transition-colors block px-4 -mx-4 rounded"
                  >
                    {rowContent}
                  </a>
                );
              }

              return (
                <div key={news.id} className="border-b border-border py-8 block opacity-70 px-4 -mx-4">
                  {rowContent}
                </div>
              );
            })}
          </div>

        </div>
      </Container>
    </div>
  );
}
