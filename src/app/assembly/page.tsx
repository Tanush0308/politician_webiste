import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/typography/section-title";
import { Metadata } from "next";
import { FileText, Users, Mic, CheckCircle } from "lucide-react";
import Image from "next/image";
import { mediaRegistry } from "@/data/media";
import { assemblyQuestions } from "@/data/assembly";

export const metadata: Metadata = {
  title: "विधानसभा कामकाज | Assembly Work | Kailas Dada Patil",
  description: "आमदार कैलास दादा पाटील यांचे महाराष्ट्र विधानसभेतील कामकाज आणि विचारलेले प्रश्न.",
};

const assemblyStats = [
  { icon: Mic, label: "विधानसभेत उपस्थित केलेले प्रश्न", value: "८९" },
  { icon: Users, label: "सभागृहातील उपस्थिती", value: "९४.५%" }
];

export default function AssemblyPage() {
  const bgImage = mediaRegistry.assembly.speaking;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-off-white relative overflow-hidden">
      
      {/* Background Image */}
      {bgImage?.status === "available" && (
        <>
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image 
              src={bgImage.src} 
              alt="Assembly Background"
              fill
              className="object-cover object-[center_30%]"
            />
          </div>
          {/* Light overlay to ensure readability without blurring the image */}
          <div className="absolute inset-0 z-0 bg-[#FAF9F6]/80"></div>
        </>
      )}

      <Container className="relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-[14px] font-bold tracking-[0.1em] uppercase mb-4 block">
            सभागृहातील आवाज
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-6 tracking-tight drop-shadow-sm">
            विधानसभा कामकाज
          </h1>
          <div className="w-16 h-1 bg-primary mb-6 mx-auto"></div>
          <p className="text-xl text-[#333333] max-w-2xl mx-auto leading-relaxed">
            मतदारसंघाचे आणि महाराष्ट्राच्या हिताचे प्रश्न सोडवण्यासाठी विधानसभेत सातत्याने उठवलेला आवाज.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-6 max-w-3xl mx-auto">
          {assemblyStats.map((stat, i) => (
            <div key={i} className="bg-white p-8 border border-border border-t-4 border-t-[#C85C32] shadow-sm text-center flex flex-col items-center hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-4xl md:text-5xl font-bold font-serif text-dark mb-2">{stat.value}</div>
              <div className="text-sm text-[#6B625C] font-bold tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center mb-24">
          <p className="text-sm text-muted-foreground">
            स्रोत: <a href="https://prsindia.org/mlatrack/kailas-balasaheb-ghadge-patil" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PRS Legislative Research (२०१९-२०२४)</a>
          </p>
        </div>

        {/* Recent Questions */}
        <div>
          <h2 className="text-3xl font-bold font-serif mb-12 text-center text-dark">महत्त्वाचे प्रश्न आणि लक्षवेधी</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {assemblyQuestions.map((q, i) => (
              <div key={q.id} className="bg-white p-6 md:p-8 border border-border shadow-sm group hover:border-primary/30 transition-colors">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-6 border-b border-border/50 gap-4">
                  <h3 className="font-bold text-xl md:text-2xl text-dark font-serif">{q.topic}</h3>
                  {q.date && (
                    <span className="inline-block bg-[#FAF9F6] border border-[#EFE6DA] text-[#333333] px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-sm whitespace-nowrap">
                      {q.date}
                    </span>
                  )}
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  
                  {/* Left Column: Issue & Action */}
                  <div className="md:col-span-7 space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">समस्या</span>
                      <p className="text-[#333333] leading-relaxed font-medium">{q.issue}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">विधानसभेतील भूमिका</span>
                      <p className="text-dark leading-relaxed font-bold">{q.action}</p>
                    </div>
                  </div>

                  {/* Right Column: Gov Response & Status */}
                  <div className="md:col-span-5 space-y-6 md:border-l md:border-border/50 md:pl-8">
                    {q.govResponse && (
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">शासनाची प्रतिक्रिया</span>
                        <p className="text-[#333333] text-sm leading-relaxed">{q.govResponse}</p>
                      </div>
                    )}
                    
                    {q.currentStatus && (
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">सध्याची स्थिती</span>
                        <div className="inline-flex items-center text-sm font-bold text-[#C85C32] bg-primary/5 px-3 py-1.5 rounded-full">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          {q.currentStatus}
                        </div>
                      </div>
                    )}

                    {q.sources && q.sources.length > 0 && (
                      <div className="pt-4 mt-4 border-t border-border/30">
                        <span className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground mr-2">स्रोत:</span>
                        <span className="text-xs text-muted-foreground">{q.sources.map(s => s.label).join(", ")}</span>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
