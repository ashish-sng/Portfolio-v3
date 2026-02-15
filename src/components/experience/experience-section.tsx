import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <Section aria-labelledby="experience-heading" bordered={false}>
      <SectionHeading
        title="Experience"
        description="Highlights from roles where engineering execution directly improved product outcomes."
      />
      <p className="text-small text-muted sm:text-base">Experience timeline and role details will be added.</p>
    </Section>
  );
}
