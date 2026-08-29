import { getInitiatives } from "@/data/initiatives";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/typography/section-title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";

export const metadata = {
  title: "विकासकामे | Kailas Dada Patil",
  description: "आमदार कैलास दादा पाटील यांनी मतदारसंघाच्या विकासासाठी राबवलेले उपक्रम आणि योजना.",
};

export default function InitiativesPage() {
  const initiatives = getInitiatives();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark">
      <Container>
        <SectionTitle 
          title="विकासकामे"
          eyebrow="एक काम. एक कथा."
          subtitle="मतदारसंघाच्या सर्वांगीण विकासासाठी आणि जनतेचे जीवनमान उंचावण्यासाठी राबवलेले मुख्य उपक्रम."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((initiative) => (
            <div 
              key={initiative.slug} 
              className="bg-dark-secondary rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all hover:-translate-y-2 flex flex-col"
            >
              <div className="w-full aspect-video relative overflow-hidden bg-dark/20">
                {initiative.heroImage?.status === "available" ? (
                  <Image
                    src={initiative.heroImage.src}
                    alt={initiative.heroImage.alt}
                    fill
                    className="object-cover object-center"
                  />
                ) : (
                  <MediaPlaceholder category={initiative.category.toUpperCase()} aspectRatio="auto" className="border-none" />
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className="text-accent text-xs font-bold tracking-wider uppercase mb-2">
                  {initiative.category}
                </span>
                <h3 className="text-xl font-bold font-serif mb-3 text-white">
                  {initiative.title}
                </h3>
                <p className="text-light/70 text-sm mb-6 flex-1">
                  {initiative.shortDescription}
                </p>
                
                {initiative.stats && initiative.stats.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-white/5">
                    {initiative.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="font-bold text-accent">{stat.value}</div>
                        <div className="text-[10px] text-light/50 uppercase">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <Button asChild variant="outline" className="w-full border-white/10">
                  <Link href={`/initiatives/${initiative.slug}`}>सविस्तर वाचा</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
