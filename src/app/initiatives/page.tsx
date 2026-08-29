import { getInitiatives } from "@/data/initiatives";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/typography/section-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { mediaRegistry } from "@/data/media";

export const metadata = {
  title: "विकासकामे | Kailas Dada Patil",
  description: "आमदार कैलास दादा पाटील यांनी मतदारसंघाच्या विकासासाठी राबवलेले उपक्रम आणि योजना.",
};

const statusMap: Record<string, string> = {
  "Demand": "मागणी केली",
  "Follow-up": "पाठपुरावा सुरू",
  "Question Raised": "प्रश्न उपस्थित केला",
  "Representation Submitted": "निवेदन दिले",
  "Approved": "मंजुरी मिळाली",
  "In Progress": "काम प्रगतीपथावर आहे",
  "Partially Implemented": "अंशतः अंमलबजावणी",
  "Completed": "काम पूर्ण झाले",
  "Status Unclear": "सद्यस्थिती अस्पष्ट"
};

export default function InitiativesPage() {
  const initiatives = getInitiatives();

  return (
    <div className="min-h-screen bg-off-white">
      <div className="relative pt-32 pb-32 border-b border-border overflow-hidden bg-dark">
        {mediaRegistry.assembly.speaking.status === "available" && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image 
              src={mediaRegistry.assembly.speaking.src} 
              alt="Assembly Background"
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
              title="विकासकामे"
              eyebrow="एक काम. एक कथा."
              subtitle="मतदारसंघाच्या सर्वांगीण विकासासाठी आणि जनतेचे जीवनमान उंचावण्यासाठी राबवलेले मुख्य उपक्रम."
              className="mb-16 text-white"
            />
          </div>
        </Container>
      </div>

      <Container className="py-24">

        <div className="flex flex-col border-t border-border">
          {initiatives.map((initiative, index) => {
            const translatedStatus = initiative.status ? (statusMap[initiative.status] || initiative.status) : null;
            
            return (
              <Link 
                href={`/initiatives/${initiative.slug}`}
                key={initiative.slug} 
                className="group flex flex-col lg:flex-row lg:items-center justify-between border-b border-border py-10 hover:bg-white transition-colors px-4 -mx-4 rounded-lg"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-16 w-full lg:w-3/4">
                  <span className="text-[14px] font-sans font-bold tracking-[0.2em] text-muted w-12 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  <span className="text-[14px] uppercase tracking-widest text-primary font-bold w-32 shrink-0">
                    {initiative.category}
                  </span>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4 flex-wrap">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-dark group-hover:text-primary transition-colors">
                        {initiative.title}
                      </h3>
                      {translatedStatus && (
                        <span className="text-xs font-bold px-3 py-1 bg-dark text-white rounded-full whitespace-nowrap">
                          {translatedStatus}
                        </span>
                      )}
                    </div>
                    <p className="text-[17px] text-dark/70 font-sans mt-2 max-w-2xl hidden md:block group-hover:text-dark transition-colors">
                      {initiative.shortDescription}
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 lg:mt-0 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 w-full lg:w-1/4 justify-end">
                  {initiative.stats && initiative.stats.length > 0 && (
                    <div className="flex flex-col items-start lg:items-end">
                      <span className="text-2xl font-bold font-serif text-dark">{initiative.stats[0].value}</span>
                    </div>
                  )}
                  
                  <span className="text-muted group-hover:text-primary font-bold transition-colors flex items-center">
                    <span className="text-[14px] uppercase tracking-widest mr-4">सविस्तर वाचा</span>
                    <span className="text-[20px] group-hover:translate-x-2 inline-block transition-transform duration-300">&rarr;</span>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
