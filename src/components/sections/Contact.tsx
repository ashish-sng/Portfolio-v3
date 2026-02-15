import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Text } from "@/components/ui/Text";

export function Contact() {
  return (
    <Section id="contact" aria-labelledby="contact-title">
      <Container className="space-y-spacing-lg">
        <header>
          <Text as="h2" id="contact-title" variant="h2">
            Contact
          </Text>
        </header>
        <div className="space-y-spacing-md">
          <Text variant="body" className="text-muted">
            I&apos;m open to meaningful product and engineering conversations.
          </Text>
          <Text variant="body">
            <a
              href="mailto:ashishsingh.1899@gmail.com"
              className="break-all text-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 sm:break-words"
            >
              ashishsingh.1899@gmail.com
            </a>
          </Text>
          <Text variant="small" className="text-muted">
            Based in Hyderabad, India.
          </Text>
        </div>
      </Container>
    </Section>
  );
}
