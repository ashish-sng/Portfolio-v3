import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

type HeroSectionProps = {
  summary: string;
};

export function HeroSection({ summary }: HeroSectionProps) {
  return (
    <Section
      id="hero"
      aria-labelledby="hero-heading"
      spacing="lg"
      className="pb-[4.5rem] pt-[5rem] sm:pb-[5.5rem] sm:pt-[6rem]"
    >
      <Container className="px-5 sm:px-8">
        <div className="max-w-2xl space-y-spacing-md">
          <Text as="h1" id="hero-heading" variant="h1" className="leading-tight">
            Ashish Singh
          </Text>
          <Text
            as="h2"
            variant="h2"
            className="pt-spacing-xs font-normal leading-[1.35] text-muted/80"
          >
            Full-Stack Leaning Frontend Engineer
          </Text>
          <Text variant="body" className="leading-relaxed text-muted">
            {summary}
          </Text>
        </div>
      </Container>
    </Section>
  );
}
