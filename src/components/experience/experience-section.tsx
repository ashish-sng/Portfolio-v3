import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <Section aria-labelledby="experience-heading" bordered={false}>
      <SectionHeading
        title="Experience"
        description="Highlights from roles where engineering execution directly improved product outcomes."
      />
      <Text variant="body" className="text-muted">
        Experience timeline and role details will be added.
      </Text>
    </Section>
  );
}
