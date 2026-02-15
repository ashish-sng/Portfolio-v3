import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/section-heading";

export function EngineeringApproachSection() {
  return (
    <Section aria-labelledby="engineering-approach-heading">
      <SectionHeading
        title="Engineering Approach"
        description="Pragmatic engineering principles applied to product execution."
      />
      <ul className="space-y-spacing-sm text-small text-muted sm:text-base">
        <li>Design systems and shared primitives for consistency at scale.</li>
        <li>Performance-first implementation with measurable outcomes.</li>
        <li>Clear API contracts and backend collaboration from day one.</li>
      </ul>
    </Section>
  );
}
