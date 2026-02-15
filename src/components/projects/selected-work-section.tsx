import { selectedProjects } from "@/content/projects";
import { Section } from "@/components/ui/Section";
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
            <h3 className="font-medium">{project.name}</h3>
            <p className="mt-1 text-sm text-muted">{project.problemStatement}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
