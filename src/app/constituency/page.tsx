import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/typography/section-title";
import { Metadata } from "next";
import { mediaRegistry } from "@/data/media";
import Image from "next/image";
import { constituencyData } from "@/data/constituency";

export const metadata: Metadata = {
  title: "मतदारसंघ | Constituency | Kailas Dada Patil",
  description: "उस्मानाबाद-कळंब विधानसभा मतदारसंघाची माहिती आणि वैशिष्ट्ये.",
};

export default function ConstituencyPage() {
  return (
    <div className="min-h-screen bg-off-white">
      <div className="relative pt-32 pb-32 border-b border-border overflow-hidden bg-dark">
        {mediaRegistry.people.interaction2.status === "available" && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image 
              src={mediaRegistry.people.interaction2.src} 
              alt="Constituency Background"
              fill
              className="object-cover object-[center_30%]"
            />
            <div className="absolute inset-0 z-0 bg-dark/50"></div>
          </div>
        )}
        <Container className="relative z-10">
          <div className="text-white drop-shadow-md">
            <SectionTitle 
              title="माझा मतदारसंघ"
              eyebrow="उस्मानाबाद - कळंब"
              subtitle={constituencyData.description}
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
              <h3 className="text-6xl md:text-8xl font-bold font-serif text-dark">{constituencyData.assemblyNumber}</h3>
            </div>
            <div className="md:w-2/3">
              <p className="text-[18px] md:text-[22px] text-dark/80 leading-[1.8] font-sans max-w-3xl">
                {constituencyData.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col border-t-2 border-dark">
            {constituencyData.stats.map((stat, index) => (
              <div key={stat.id} className="flex flex-col md:flex-row md:items-start py-10 border-b border-border group hover:bg-white transition-colors gap-6 md:gap-24 px-4 -mx-4 rounded">
                <div className="md:w-1/3 flex flex-col gap-2">
                  <div className="flex items-center gap-6">
                    <span className="text-[12px] font-sans font-bold tracking-[0.2em] text-muted w-8 shrink-0">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <h4 className="text-2xl md:text-3xl font-serif font-bold text-dark">{stat.label}</h4>
                  </div>
                  {stat.sources && stat.sources.length > 0 && (
                    <div className="ml-14 mt-2">
                      <span className="text-xs text-muted-foreground">स्रोत: {stat.sources[0].label}</span>
                    </div>
                  )}
                </div>
                <div className="md:w-2/3">
                  <p className="text-[18px] md:text-[20px] text-dark/70 font-sans leading-relaxed group-hover:text-dark transition-colors mb-2">
                    {stat.value}
                  </p>
                  {stat.description && (
                    <p className="text-sm text-dark/50">
                      {stat.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
