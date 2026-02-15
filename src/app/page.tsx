import { Footer } from "@/components/layout/Footer";
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
              Building performant, scalable UI systems with strong backend awareness.
            </Text>
            <Button>Download Resume</Button>
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
            <div className="grid grid-cols-1 gap-spacing-md sm:grid-cols-2 lg:grid-cols-3" aria-label="Project cards">
              {selectedProjects.map((project) => (
                <article key={project.name} className="rounded-radius-md border border-border bg-surface p-spacing-md">
                  <Text variant="h3">{project.name}</Text>
                  <Text variant="small" className="mt-spacing-xs text-muted">
                    {project.summary}
                  </Text>
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
                Pragmatic engineering principles applied to product execution.
              </Text>
            </header>
            <ul className="list-disc space-y-spacing-sm pl-spacing-lg text-small text-muted sm:text-base">
              <li>Design systems and shared primitives for consistency at scale.</li>
              <li>Performance-first implementation with measurable outcomes.</li>
              <li>Clear API contracts and backend collaboration from day one.</li>
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
            <Text variant="body" className="text-muted">
              Experience timeline and role details will be added.
            </Text>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
