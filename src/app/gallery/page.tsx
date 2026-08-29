import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/typography/section-title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "गॅलरी | Photo & Video Gallery | Kailas Dada Patil",
  description: "फोटो गॅलरी, व्हिडिओज आणि विविध कार्यक्रमांची क्षणचित्रे.",
};

const photos = [
  { src: "/images/placeholders/gallery-1.jpg", alt: "Photo 1" },
  { src: "/images/placeholders/gallery-2.jpg", alt: "Photo 2" },
  { src: "/images/placeholders/gallery-3.jpg", alt: "Photo 3" },
  { src: "/images/placeholders/gallery-4.jpg", alt: "Photo 4" },
  { src: "/images/placeholders/gallery-5.jpg", alt: "Photo 5" },
  { src: "/images/placeholders/gallery-6.jpg", alt: "Photo 6" },
];

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-dark">
      <Container>
        <SectionTitle 
          title="फोटो गॅलरी"
          eyebrow="क्षणचित्रे"
          subtitle="विविध कार्यक्रम, विकासकामांचे उद्घाटन आणि जनसंवादातील काही खास क्षण."
          className="mb-16"
        />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, i) => (
            <div 
              key={i} 
              className="break-inside-avoid relative rounded-xl overflow-hidden group cursor-pointer border border-white/5"
            >
              {/* Using a standard img tag here since it's a masonry layout, next/image with masonry requires specific setup */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium px-4 py-2 bg-accent/80 rounded-full text-sm">
                  पहा
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
