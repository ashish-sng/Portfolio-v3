import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { SectionHeading } from "@/components/ui/section-heading";

export function EngineeringApproachSection() {
  return (
    <Section aria-labelledby="engineering-approach-heading">
      <SectionHeading
        title="Engineering Approach"
        description="Pragmatic engineering principles applied to product execution."
      />
      <ul className="space-y-spacing-sm">
        <li>
          <Text variant="body" className="text-muted">
            Design systems and shared primitives for consistency at scale.
          </Text>
        </li>
        <li>
          <Text variant="body" className="text-muted">
            Performance-first implementation with measurable outcomes.
          </Text>
        </li>
        <li>
          <Text variant="body" className="text-muted">
            Clear API contracts and backend collaboration from day one.
          </Text>
        </li>
      </ul>
    </Section>
  );
}
