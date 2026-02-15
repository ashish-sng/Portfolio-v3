import { Footer } from "@/components/layout/Footer";
import { Grid } from "@/components/layout/Grid";
import { Header } from "@/components/layout/Header";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { selectedProjects } from "@/content/projects";
import { Button } from "@/components/ui/Button";
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
        <SectionWrapper
          id="hero"
          title="Ashish Singh"
          description="Full-Stack Leaning Frontend Engineer"
          aria-label="Hero"
        >
          <Text variant="body" className="max-w-2xl text-muted">
            Building performant, scalable UI systems with strong backend awareness.
          </Text>
          <Button>Download Resume</Button>
        </SectionWrapper>

        <SectionWrapper
          id="selected-work"
          title="Selected Work"
          description="Representative product and platform work focused on quality and maintainability."
        >
          <Grid aria-label="Project cards">
            {selectedProjects.map((project) => (
              <article key={project.name} className="rounded-radius-md border border-border bg-surface p-spacing-md">
                <Text as="h3" variant="body" className="font-semibold text-foreground">
                  {project.name}
                </Text>
                <Text variant="small" className="mt-spacing-xs text-muted">
                  {project.summary}
                </Text>
              </article>
            ))}
          </Grid>
        </SectionWrapper>

        <SectionWrapper
          id="engineering-approach"
          title="Engineering Approach"
          description="Pragmatic engineering principles applied to product execution."
        >
          <ul className="list-disc space-y-spacing-sm pl-spacing-lg text-small text-muted sm:text-base">
            <li>Design systems and shared primitives for consistency at scale.</li>
            <li>Performance-first implementation with measurable outcomes.</li>
            <li>Clear API contracts and backend collaboration from day one.</li>
          </ul>
        </SectionWrapper>

        <SectionWrapper
          id="experience"
          title="Experience"
          description="Highlights from roles where engineering execution improved product outcomes."
          bordered={false}
        >
          <Text variant="body" className="text-muted">
            Experience timeline and role details will be added.
          </Text>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}
