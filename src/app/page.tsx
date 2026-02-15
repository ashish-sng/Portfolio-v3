import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/hero/hero-section";
import { Contact } from "@/components/sections/Contact";
import { Philosophy } from "@/components/sections/Philosophy";
import { experience, heroSummary, skillsHighlight } from "@/content/portfolio";
import { selectedProjects } from "@/content/projects";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

const sectionContainerClass = "space-y-spacing-md";
const sectionHeaderClass = "space-y-spacing-xs";
const projectCardClass = "space-y-spacing-md rounded-radius-md bg-surface/70 p-spacing-lg";
const contentCardClass = "space-y-spacing-sm rounded-radius-md border border-border bg-surface p-spacing-md";
const listClass = "list-disc space-y-spacing-sm pl-spacing-lg";
const tightListClass = "list-disc space-y-spacing-xs pl-spacing-lg";

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only rounded-radius-sm bg-surface px-spacing-sm py-spacing-xs focus:not-sr-only focus:absolute focus:left-spacing-md focus:top-spacing-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
      >
        <Text as="span" variant="small">
          Skip to content
        </Text>
      </a>
      <main id="main-content">
        <HeroSection summary={heroSummary} />

        <Section id="engineering-approach" aria-labelledby="approach-title">
          <Container className={sectionContainerClass}>
            <header className={sectionHeaderClass}>
              <Text id="approach-title" variant="h2">
                Engineering Approach
              </Text>
              <Text variant="body" className="text-muted">
                Core strengths used to build maintainable, production-ready product systems.
              </Text>
            </header>
            <ul className={listClass}>
              {skillsHighlight.map((skill) => (
                <li key={skill}>
                  <Text variant="body" className="text-muted">
                    {skill}
                  </Text>
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        <Philosophy />

        <Section id="work" aria-labelledby="work-title">
          <Container className={sectionContainerClass}>
            <header className={sectionHeaderClass}>
              <Text id="work-title" variant="h2">
                Selected Work
              </Text>
              <Text variant="body" className="text-muted">
                Representative product and platform work focused on quality and maintainability.
              </Text>
            </header>
            <div className="grid grid-cols-1 gap-spacing-md" aria-label="Project case studies">
              {selectedProjects.map((project) => (
                <article key={project.name} className={projectCardClass}>
                  <Text variant="h3">{project.name}</Text>

                  <div className="space-y-spacing-xs">
                    <Text as="h4" variant="small" className="text-foreground">
                      Problem
                    </Text>
                    <Text variant="small" className="text-muted">
                      {project.problemStatement}
                    </Text>
                  </div>

                  <div className="space-y-spacing-xs">
                    <Text as="h4" variant="small" className="text-foreground">
                      Solution
                    </Text>
                    <Text variant="small" className="text-muted">
                      {project.technicalSolution}
                    </Text>
                  </div>

                  <div className="space-y-spacing-xs">
                    <Text as="h4" variant="small" className="text-foreground">
                      Architecture
                    </Text>
                    <ul className={tightListClass}>
                      {project.architecturalDecisions.map((decision) => (
                        <li key={decision}>
                          <Text variant="small" className="text-muted">
                            {decision}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-spacing-xs">
                    <Text as="h4" variant="small" className="text-foreground">
                      Outcome
                    </Text>
                    <Text variant="small" className="text-muted">
                      {project.outcome}
                    </Text>
                  </div>

                  <div className="space-y-spacing-xs">
                    <Text as="h4" variant="small" className="text-foreground">
                      Tech Stack
                    </Text>
                    <ul className="flex flex-wrap gap-spacing-xs">
                      {project.techStack.map((tech) => (
                        <li key={tech} className="rounded-radius-sm bg-background/70 px-spacing-xs py-[0.15rem]">
                          <Text as="span" variant="small" className="text-muted">
                            {tech}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={project.githubUrl}
                    className="inline-flex rounded-radius-sm text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Text as="span" variant="small" className="text-accent">
                      View source
                    </Text>
                  </a>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        <Section id="experience" aria-labelledby="experience-title">
          <Container className={sectionContainerClass}>
            <header className={sectionHeaderClass}>
              <Text id="experience-title" variant="h2">
                Experience
              </Text>
              <Text variant="body" className="text-muted">
                Highlights from roles where engineering execution improved product outcomes.
              </Text>
            </header>
            <div className="space-y-spacing-md">
              {experience.map((item) => (
                <article key={`${item.company}-${item.role}`} className={contentCardClass}>
                  <header className={sectionHeaderClass}>
                    <Text variant="h3">{item.role}</Text>
                    <Text variant="small" className="text-muted">
                      {item.company} | {item.duration}
                    </Text>
                    <Text variant="small" className="text-muted">
                      {item.roleSummary}
                    </Text>
                  </header>
                  <ul className={tightListClass}>
                    {item.impact.map((point) => (
                      <li key={point}>
                        <Text variant="small" className="text-muted">
                          {point}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
