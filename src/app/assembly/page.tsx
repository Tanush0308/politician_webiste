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

        {/* Recent Questions */}
        <div>
          <h2 className="text-3xl font-bold font-serif mb-12 text-center text-dark">महत्त्वाचे प्रश्न आणि लक्षवेधी</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {assemblyQuestions.map((q, i) => (
              <div key={q.id} className="bg-white p-6 md:p-8 border border-border shadow-sm flex flex-col md:flex-row gap-6 md:items-start group hover:border-primary/30 transition-colors">
                <div className="md:w-1/4 shrink-0">
                  {q.date && (
                    <span className="inline-block bg-[#FAF9F6] border border-[#EFE6DA] text-[#333333] px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
                      {q.date}
                    </span>
                  )}
                  <h3 className="font-bold text-lg text-dark group-hover:text-primary transition-colors">{q.topic}</h3>
                </div>
                <div className="md:w-3/4 flex flex-col justify-between">
                  <p className="text-[#333333] leading-relaxed mb-6 font-medium">{q.description}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="inline-flex items-center text-sm font-bold text-[#C85C32]">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {q.status}
                    </div>
                    {q.sources && q.sources.length > 0 && (
                      <span className="text-xs text-muted-foreground">स्रोत: {q.sources[0].label}</span>
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
