import { Hero } from "@/components/home/hero";
import { ImpactNumbers } from "@/components/home/impact-numbers";
import { BioSummary } from "@/components/home/bio-summary";
import { WorkDomains } from "@/components/home/work-domains";
import { FeaturedInitiatives } from "@/components/home/featured-initiatives";
import { PeopleSection } from "@/components/home/people-section";
import { ConstituencyVisual } from "@/components/home/constituency-visual";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ImpactNumbers />
      <BioSummary />
      <WorkDomains />
      <FeaturedInitiatives />
      <PeopleSection />
      <ConstituencyVisual />
    </div>
  );
}
