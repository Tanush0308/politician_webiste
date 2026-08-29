import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/typography/section-title";
import { Metadata } from "next";
import { MapPin, Users, Building, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "मतदारसंघ | Constituency | Kailas Dada Patil",
  description: "उस्मानाबाद-कळंब विधानसभा मतदारसंघाची माहिती आणि वैशिष्ट्ये.",
};

export default function ConstituencyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark">
      <Container>
        <SectionTitle 
          title="माझा मतदारसंघ"
          eyebrow="उस्मानाबाद - कळंब"
          subtitle="ऐतिहासिक आणि सांस्कृतिक वारसा लाभलेला माझा मतदारसंघ. येथील जनतेच्या सर्वांगीण विकासासाठी आम्ही कटिबद्ध आहोत."
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          <div className="aspect-square bg-dark-secondary rounded-full border-4 border-white/5 relative flex items-center justify-center p-12 overflow-hidden shadow-2xl">
             <div className="absolute inset-0 opacity-20"
                 style={{
                   backgroundImage: "radial-gradient(circle at center, var(--color-accent) 0%, transparent 60%)",
                 }}
             />
             <div className="text-center relative z-10">
               <h3 className="text-5xl font-bold font-serif text-white mb-2">२४२</h3>
               <p className="text-xl text-accent font-medium uppercase tracking-widest">विधानसभा मतदारसंघ</p>
               <p className="text-light/50 mt-6 text-sm max-w-xs mx-auto">
                 महाराष्ट्राच्या नकाशावरील एक महत्त्वाचा आणि ऐतिहासिक वारसा असलेला मतदारसंघ.
               </p>
             </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold font-serif mb-8 text-white">थोडक्यात माहिती</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-dark-secondary flex items-center justify-center text-accent shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">भौगोलिक विस्तार</h3>
                  <p className="text-light/70 text-base">संपूर्ण कळंब तालुका आणि उस्मानाबाद तालुक्याचा काही भाग.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-dark-secondary flex items-center justify-center text-accent shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">एकूण मतदार</h3>
                  <p className="text-light/70 text-base">सुमारे ३ लाख ६० हजार मतदार.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-dark-secondary flex items-center justify-center text-accent shrink-0">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">ग्रामपंचायती व गावे</h3>
                  <p className="text-light/70 text-base">१५० पेक्षा अधिक गावे आणि वाड्या-वस्त्या.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-dark-secondary flex items-center justify-center text-accent shrink-0">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">प्रमुख व्यवसाय</h3>
                  <p className="text-light/70 text-base">शेती हा प्रमुख व्यवसाय असून सोयाबीन, ऊस, हरभरा आणि ज्वारी ही मुख्य पिके आहेत.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
}
