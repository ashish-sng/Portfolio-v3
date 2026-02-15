import { SectionHeading } from "@/components/ui/section-heading";

export function EngineeringApproachSection() {
  return (
    <section aria-labelledby="engineering-approach-heading" className="space-y-4 border-b border-border py-14 sm:py-16">
      <SectionHeading
        title="Engineering Approach"
        description="Pragmatic engineering principles applied to product execution."
      />
      <ul className="space-y-2 text-sm text-muted sm:text-base">
        <li>Design systems and shared primitives for consistency at scale.</li>
        <li>Performance-first implementation with measurable outcomes.</li>
        <li>Clear API contracts and backend collaboration from day one.</li>
      </ul>
    </section>
  );
}
