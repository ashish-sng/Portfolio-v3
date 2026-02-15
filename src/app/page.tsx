import { EngineeringApproachSection } from "@/components/approach/engineering-approach-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { HeroSection } from "@/components/hero/hero-section";
import { SelectedWorkSection } from "@/components/projects/selected-work-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SelectedWorkSection />
      <EngineeringApproachSection />
      <ExperienceSection />
    </main>
  );
}
