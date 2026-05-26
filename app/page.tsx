import Hero from "@/components/sections/Hero";
import CompanyThesis from "@/components/sections/CompanyThesis";
import PathwisseSpotlight from "@/components/sections/PathwisseSpotlight";
import SectorsGrid from "@/components/sections/SectorsGrid";
import WhyShaQuantum from "@/components/sections/WhyShaQuantum";
import TeamPreview from "@/components/sections/TeamPreview";
import CtaBand from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyThesis />
      <PathwisseSpotlight />
      <SectorsGrid />
      <WhyShaQuantum />
      <TeamPreview />
      <CtaBand />
    </>
  );
}
