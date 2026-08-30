import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/typography/section-title";
import { Metadata } from "next";
import { galleryData } from "@/data/gallery";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

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

        <GalleryGrid items={galleryData} />
      </Container>
    </div>
  );
}
