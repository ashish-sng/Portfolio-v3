import { selectedProjects } from "@/content/projects";
import { SectionHeading } from "@/components/ui/section-heading";

export function SelectedWorkSection() {
  return (
    <section aria-labelledby="selected-work-heading" className="space-y-4 border-b border-border py-14 sm:py-16">
      <SectionHeading
        title="Selected Work"
        description="Representative product and platform work focused on quality, performance, and maintainability."
      />
      <ul className="space-y-spacing-sm">
        {selectedProjects.map((project) => (
          <li key={project.name} className="rounded-radius-md border border-border bg-surface p-spacing-md">
            <h3 className="font-medium">{project.name}</h3>
            <p className="mt-1 text-sm text-muted">{project.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
