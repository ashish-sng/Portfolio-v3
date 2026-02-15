import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";

const navItems = [
  { href: "#selected-work", label: "Selected Work" },
  { href: "#engineering-approach", label: "Approach" },
  { href: "#experience", label: "Experience" }
] as const;

export function Header() {
  return (
    <header className="border-b border-border bg-background" role="banner">
      <Container className="flex items-center justify-between gap-spacing-md py-spacing-md">
        <Text as="p" variant="small" className="font-medium uppercase tracking-wide text-muted">
          Ashish Singh
        </Text>
        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-spacing-md">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-radius-sm px-spacing-xs py-spacing-xs text-small text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center rounded-radius-md border border-accent bg-accent px-spacing-md py-spacing-sm text-small font-medium text-background transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
