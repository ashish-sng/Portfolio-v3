import { selectedProjects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
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
          <li key={project.title}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
