import { Footer } from "@/components/layout/Footer";
import { experience, heroSummary, skillsHighlight } from "@/content/portfolio";
import { selectedProjects } from "@/content/projects";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/ui/Header";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only rounded-radius-sm bg-surface px-spacing-sm py-spacing-xs text-small focus:not-sr-only focus:absolute focus:left-spacing-md focus:top-spacing-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
      >
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Section id="hero" aria-labelledby="hero-title">
          <Container className="space-y-spacing-md">
            <header className="space-y-spacing-xs">
              <Text id="hero-title" variant="h1">
                Ashish Singh
              </Text>
              <Text variant="h2" className="text-muted">
                Full-Stack Leaning Frontend Engineer
              </Text>
            </header>
            <Text variant="body" className="max-w-2xl text-muted">
              {heroSummary}
            </Text>
            <form action="/resume.pdf" method="get">
              <Button type="submit">Download Resume</Button>
            </form>
          </Container>
        </Section>

        <Section id="selected-work" aria-labelledby="work-title">
          <Container className="space-y-spacing-md">
            <header className="space-y-spacing-xs">
              <Text id="work-title" variant="h2">
                Selected Work
              </Text>
              <Text variant="body" className="text-muted">
                Representative product and platform work focused on quality and maintainability.
              </Text>
            </header>
            <div className="grid grid-cols-1 gap-spacing-md" aria-label="Project case studies">
              {selectedProjects.map((project) => (
                <article key={project.name} className="space-y-spacing-sm rounded-radius-md border border-border bg-surface p-spacing-md">
                  <Text variant="h3">{project.name}</Text>

                  <div className="space-y-spacing-xs">
                    <Text variant="small" className="font-semibold text-foreground">
                      Problem
                    </Text>
                    <Text variant="small" className="text-muted">
                      {project.problemStatement}
                    </Text>
                  </div>

                  <div className="space-y-spacing-xs">
                    <Text variant="small" className="font-semibold text-foreground">
                      Solution
                    </Text>
                    <Text variant="small" className="text-muted">
                      {project.technicalSolution}
                    </Text>
                  </div>

                  <div className="space-y-spacing-xs">
                    <Text variant="small" className="font-semibold text-foreground">
                      Architecture
                    </Text>
                    <ul className="list-disc space-y-spacing-xs pl-spacing-lg text-small text-muted">
                      {project.architecturalDecisions.map((decision) => (
                        <li key={decision}>{decision}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-spacing-xs">
                    <Text variant="small" className="font-semibold text-foreground">
                      Outcome
                    </Text>
                    <Text variant="small" className="text-muted">
                      {project.outcome}
                    </Text>
                  </div>

                  <div className="space-y-spacing-xs">
                    <Text variant="small" className="font-semibold text-foreground">
                      Tech Stack
                    </Text>
                    <ul className="flex flex-wrap gap-spacing-xs text-small text-muted">
                      {project.techStack.map((tech) => (
                        <li key={tech} className="rounded-radius-sm border border-border px-spacing-xs py-[0.15rem]">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={project.githubUrl}
                    className="inline-flex rounded-radius-sm text-small text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View source
                  </a>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        <Section id="engineering-approach" aria-labelledby="approach-title">
          <Container className="space-y-spacing-md">
            <header className="space-y-spacing-xs">
              <Text id="approach-title" variant="h2">
                Engineering Approach
              </Text>
              <Text variant="body" className="text-muted">
                Core strengths used to build maintainable, production-ready product systems.
              </Text>
            </header>
            <ul className="list-disc space-y-spacing-sm pl-spacing-lg text-small text-muted sm:text-base">
              {skillsHighlight.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Container>
        </Section>

        <Section id="experience" aria-labelledby="experience-title" bordered={false}>
          <Container className="space-y-spacing-md">
            <header className="space-y-spacing-xs">
              <Text id="experience-title" variant="h2">
                Experience
              </Text>
              <Text variant="body" className="text-muted">
                Highlights from roles where engineering execution improved product outcomes.
              </Text>
            </header>
            <div className="space-y-spacing-md">
              {experience.map((item) => (
                <article key={`${item.company}-${item.role}`} className="space-y-spacing-sm rounded-radius-md border border-border bg-surface p-spacing-md">
                  <header className="space-y-spacing-xs">
                    <Text variant="h3">{item.role}</Text>
                    <Text variant="small" className="text-muted">
                      {item.company} | {item.duration}
                    </Text>
                    <Text variant="small" className="text-muted">
                      {item.roleSummary}
                    </Text>
                  </header>
                  <ul className="list-disc space-y-spacing-xs pl-spacing-lg text-small text-muted">
                    {item.impact.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
