import { Hero } from "@/components/home/hero";
import { BioSummary } from "@/components/home/bio-summary";
import { ImpactNumbers } from "@/components/home/impact-numbers";
import { FeaturedInitiatives } from "@/components/home/featured-initiatives";
import { PeopleSection } from "@/components/home/people-section";
import { ConstituencyVisual } from "@/components/home/constituency-visual";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-off-white">
      <Hero />
      <BioSummary />
      <ImpactNumbers />
      <FeaturedInitiatives />
      <PeopleSection />
      <ConstituencyVisual />
    </div>
  );
}
