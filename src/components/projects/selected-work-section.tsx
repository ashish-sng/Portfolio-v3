import { selectedProjects } from "@/content/projects";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";
import { SectionHeading } from "@/components/ui/section-heading";

export function SelectedWorkSection() {
  return (
    <Section aria-labelledby="selected-work-heading">
      <SectionHeading
        title="Selected Work"
        description="Representative product and platform work focused on quality, performance, and maintainability."
      />
      <ul className="space-y-spacing-sm">
        {selectedProjects.map((project) => (
          <li key={project.name} className="rounded-radius-md border border-border bg-surface p-spacing-md">
            <Text variant="h3">{project.name}</Text>
            <Text variant="small" className="mt-spacing-xs text-muted">
              {project.problemStatement}
            </Text>
          </li>
        ))}
      </ul>
    </Section>
  );
}
