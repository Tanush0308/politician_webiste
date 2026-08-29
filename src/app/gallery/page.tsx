import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/typography/section-title";
import { Metadata } from "next";
import Image from "next/image";
import { galleryData } from "@/data/gallery";

export const metadata: Metadata = {
  title: "गॅलरी | Photo & Video Gallery | Kailas Dada Patil",
  description: "फोटो गॅलरी, व्हिडिओज आणि विविध कार्यक्रमांची क्षणचित्रे.",
};

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-off-white">
      <Container>
        <div className="text-center mb-16">
          <span className="text-primary text-[14px] font-bold tracking-[0.1em] uppercase mb-4 block">
            क्षणचित्रे
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-6 tracking-tight drop-shadow-sm">
            फोटो गॅलरी
          </h1>
          <div className="w-16 h-1 bg-primary mb-6 mx-auto"></div>
          <p className="text-xl text-[#333333] max-w-2xl mx-auto leading-relaxed">
            विविध कार्यक्रम, विकासकामांचे उद्घाटन आणि जनसंवादातील काही खास क्षण.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryData.map((item) => {
            if (item.image.status !== "available") return null;

            return (
              <div 
                key={item.id} 
                className="break-inside-avoid relative overflow-hidden group cursor-pointer border border-border shadow-sm bg-white p-2"
              >
                <div className="relative w-full overflow-hidden">
                  <Image 
                    src={item.image.src} 
                    alt={item.image.alt || item.caption || ""}
                    width={800}
                    height={800}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#8F3F16]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-white font-bold font-serif text-xl mb-2">
                      {item.caption}
                    </span>
                    <span className="text-white/80 text-sm font-sans uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
