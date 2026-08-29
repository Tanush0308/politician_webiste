import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/typography/section-title";
import { Metadata } from "next";
import { MapPin, Users, Building, Activity } from "lucide-react";
import { mediaRegistry } from "@/data/media";
import Image from "next/image";

export const metadata: Metadata = {
  title: "मतदारसंघ | Constituency | Kailas Dada Patil",
  description: "उस्मानाबाद-कळंब विधानसभा मतदारसंघाची माहिती आणि वैशिष्ट्ये.",
};

export default function ConstituencyPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <div className="relative pt-32 pb-32 border-b border-border overflow-hidden bg-dark">
        {mediaRegistry.constituency.flagHoisting.status === "available" && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image 
              src={mediaRegistry.constituency.flagHoisting.src} 
              alt="Constituency Background"
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
              title="माझा मतदारसंघ"
              eyebrow="उस्मानाबाद - कळंब"
              subtitle="ऐतिहासिक आणि सांस्कृतिक वारसा लाभलेला माझा मतदारसंघ. येथील जनतेच्या सर्वांगीण विकासासाठी आम्ही कटिबद्ध आहोत."
              className="mb-16 text-white"
            />
          </div>
        </Container>
      </div>

      <Container className="py-24">

        <div className="flex flex-col mb-24">
          <div className="border-t-2 border-dark pt-8 pb-16 flex flex-col md:flex-row md:items-start gap-8 md:gap-24">
            <div className="md:w-1/3">
              <span className="text-[12px] md:text-[14px] text-primary tracking-[0.2em] font-bold uppercase block mb-4">विधानसभा</span>
              <h3 className="text-6xl md:text-8xl font-bold font-serif text-dark">२४२</h3>
            </div>
            <div className="md:w-2/3">
              <p className="text-[18px] md:text-[22px] text-dark/80 leading-[1.8] font-sans max-w-3xl">
                महाराष्ट्राच्या नकाशावरील एक महत्त्वाचा आणि ऐतिहासिक वारसा असलेला उस्मानाबाद विधानसभा मतदारसंघ. येथील प्रत्येक गावाला विकासाच्या प्रवाहात आणण्यासाठी आम्ही कटिबद्ध आहोत.
              </p>
            </div>
          </div>

          <div className="flex flex-col border-t-2 border-dark">
            {/* ROW 1 */}
            <div className="flex flex-col md:flex-row md:items-start py-10 border-b border-border group hover:bg-white transition-colors gap-6 md:gap-24 px-4 -mx-4 rounded">
              <div className="md:w-1/3 flex items-center gap-6">
                <span className="text-[12px] font-sans font-bold tracking-[0.2em] text-muted w-8 shrink-0">01</span>
                <h4 className="text-2xl md:text-3xl font-serif font-bold text-dark">भौगोलिक विस्तार</h4>
              </div>
              <div className="md:w-2/3">
                <p className="text-[18px] md:text-[20px] text-dark/70 font-sans leading-relaxed group-hover:text-dark transition-colors">
                  संपूर्ण कळंब तालुका आणि उस्मानाबाद तालुक्याचा काही भाग.
                </p>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="flex flex-col md:flex-row md:items-start py-10 border-b border-border group hover:bg-white transition-colors gap-6 md:gap-24 px-4 -mx-4 rounded">
              <div className="md:w-1/3 flex items-center gap-6">
                <span className="text-[12px] font-sans font-bold tracking-[0.2em] text-muted w-8 shrink-0">02</span>
                <h4 className="text-2xl md:text-3xl font-serif font-bold text-dark">एकूण मतदार</h4>
              </div>
              <div className="md:w-2/3">
                <p className="text-[18px] md:text-[20px] text-dark/70 font-sans leading-relaxed group-hover:text-dark transition-colors">
                  सुमारे ३ लाख ६० हजार मतदार.
                </p>
              </div>
            </div>

            {/* ROW 3 */}
            <div className="flex flex-col md:flex-row md:items-start py-10 border-b border-border group hover:bg-white transition-colors gap-6 md:gap-24 px-4 -mx-4 rounded">
              <div className="md:w-1/3 flex items-center gap-6">
                <span className="text-[12px] font-sans font-bold tracking-[0.2em] text-muted w-8 shrink-0">03</span>
                <h4 className="text-2xl md:text-3xl font-serif font-bold text-dark">ग्रामपंचायती व गावे</h4>
              </div>
              <div className="md:w-2/3">
                <p className="text-[18px] md:text-[20px] text-dark/70 font-sans leading-relaxed group-hover:text-dark transition-colors">
                  १५० पेक्षा अधिक गावे आणि वाड्या-वस्त्या.
                </p>
              </div>
            </div>

            {/* ROW 4 */}
            <div className="flex flex-col md:flex-row md:items-start py-10 border-b border-border group hover:bg-white transition-colors gap-6 md:gap-24 px-4 -mx-4 rounded">
              <div className="md:w-1/3 flex items-center gap-6">
                <span className="text-[12px] font-sans font-bold tracking-[0.2em] text-muted w-8 shrink-0">04</span>
                <h4 className="text-2xl md:text-3xl font-serif font-bold text-dark">प्रमुख व्यवसाय</h4>
              </div>
              <div className="md:w-2/3">
                <p className="text-[18px] md:text-[20px] text-dark/70 font-sans leading-relaxed group-hover:text-dark transition-colors">
                  शेती हा प्रमुख व्यवसाय असून सोयाबीन, ऊस, हरभरा आणि ज्वारी ही मुख्य पिके आहेत.
                </p>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
}
