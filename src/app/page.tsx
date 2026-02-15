import { EngineeringApproachSection } from "@/components/approach/engineering-approach-section";
import { Container } from "@/components/ui/Container";
import { ExperienceSection } from "@/components/experience/experience-section";
import { HeroSection } from "@/components/hero/hero-section";
import { SelectedWorkSection } from "@/components/projects/selected-work-section";

export default function HomePage() {
  return (
    <Container className="m-spacing-md bg-background p-spacing-md text-base text-foreground">
      <main>
        <HeroSection />
        <SelectedWorkSection />
        <EngineeringApproachSection />
        <ExperienceSection />
      </main>
    </Container>
  );
}
