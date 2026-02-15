import { SectionHeading } from "@/components/ui/section-heading";

export function ExperienceSection() {
  return (
    <section aria-labelledby="experience-heading" className="space-y-4 py-14 sm:py-16">
      <SectionHeading
        title="Experience"
        description="Highlights from roles where engineering execution directly improved product outcomes."
      />
      <p className="text-sm text-muted sm:text-base">Experience timeline and role details will be added.</p>
    </section>
  );
}
