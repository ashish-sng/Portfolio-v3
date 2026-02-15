import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/hero/hero-section";
import { Contact } from "@/components/sections/Contact";
import { Philosophy } from "@/components/sections/Philosophy";
import { PerformanceSnapshot } from "@/components/sections/PerformanceSnapshot";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { selectedProjects } from "@/content/projects";
import { experience, heroSummary } from "@/content/portfolio";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

const sectionContainerClass = "space-y-spacing-md";
const sectionHeaderClass = "space-y-spacing-xs";
const contentCardClass =
  "space-y-spacing-sm rounded-radius-md border border-border bg-surface p-spacing-md";
const tightListClass = "list-disc space-y-spacing-xs pl-spacing-lg";

export const metadata: Metadata = {
  title: "Full-Stack Leaning Frontend Engineer",
  description:
    "Portfolio of Ashish Singh featuring selected product engineering work, experience highlights, architecture principles, and measurable performance outcomes.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Full-Stack Leaning Frontend Engineer | Ashish Singh",
    description:
      "Selected frontend and full-stack product engineering work focused on performance, scalability, and production readiness.",
    url: "/",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Ashish Singh portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Leaning Frontend Engineer | Ashish Singh",
    description:
      "Selected frontend and full-stack product engineering work focused on performance, scalability, and production readiness.",
    images: [siteConfig.ogImage]
  }
};

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

        <Section id="work" aria-labelledby="work-title">
          <Container className={sectionContainerClass}>
            <header className={sectionHeaderClass}>
              <Text id="work-title" variant="h2">
                Selected Work
              </Text>
              <Text variant="body" className="text-muted">
                Representative product and platform work focused on quality and
                maintainability.
              </Text>
            </header>
            <div
              className="grid grid-cols-1 gap-spacing-lg sm:gap-spacing-md"
              aria-label="Project case studies"
            >
              {selectedProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
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
                Highlights from roles where engineering execution improved
                product outcomes.
              </Text>
            </header>
            <div className="space-y-spacing-md">
              {experience.map((item) => (
                <article
                  key={`${item.company}-${item.role}`}
                  className={contentCardClass}
                >
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

        <Philosophy />
        <PerformanceSnapshot />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
