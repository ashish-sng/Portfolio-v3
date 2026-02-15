import Link from "next/link";
import type { Project } from "@/content/projects";
import { Text } from "@/components/ui/Text";

type ProjectCardProps = {
  project: Project;
};

const linkClass =
  "inline-flex rounded-radius-sm text-muted transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40";

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="w-full space-y-spacing-sm rounded-radius-md bg-surface/70 p-spacing-lg">
      <Text variant="h3">{project.title}</Text>
      <Text variant="body" className="text-muted">
        {project.description}
      </Text>
      <Text variant="small" className="text-muted">
        Tech: {project.tech.join(", ")}
      </Text>
      <div className="flex flex-wrap items-center gap-spacing-sm">
        {project.liveUrl ? (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className={linkClass}>
            <Text as="span" variant="small" className="text-inherit">
              Live
            </Text>
          </a>
        ) : null}
        <a href={project.sourceUrl} target="_blank" rel="noreferrer" className={linkClass}>
          <Text as="span" variant="small" className="text-inherit">
            Source
          </Text>
        </a>
        {project.caseStudySlug ? (
          <Link href={`/projects/${project.caseStudySlug}`} className={linkClass}>
            <Text as="span" variant="small" className="text-inherit">
              Case Study
            </Text>
          </Link>
        ) : null}
      </div>
    </article>
  );
}
