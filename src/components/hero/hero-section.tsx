import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

export function HeroSection() {
  return (
    <Section aria-labelledby="hero-heading" spacing="lg">
      <div className="space-y-4">
        <Text variant="small" className="font-medium uppercase tracking-wide text-muted">
          Portfolio
        </Text>
        <Text as="h1" id="hero-heading" variant="h1">
          Ashish Singh
        </Text>
        <Text as="h2" variant="h2" className="text-muted">
          Full-Stack Leaning Frontend Engineer
        </Text>
        <Text variant="body" className="max-w-2xl leading-relaxed text-foreground/90">
          Building performant, scalable UI systems with strong backend awareness.
        </Text>
        <Button>Download Resume</Button>
      </div>
    </Section>
  );
}
