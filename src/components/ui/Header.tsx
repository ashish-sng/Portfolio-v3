import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm" role="banner">
      <Container className="flex items-center justify-between py-spacing-sm">
        <Text as="p" variant="h3">
          Ashish Singh
        </Text>

        <nav aria-label="Profile links">
          <ul className="flex items-center gap-spacing-sm">
            <li>
              <a
                href="https://github.com/ashish-sng"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Ashish Singh GitHub profile"
                className="rounded-radius-sm p-spacing-xs text-muted transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 17c-3 1-4-1.5-4-1.5" />
                  <path d="M16 17v-2.3a3.5 3.5 0 0 0-.9-2.8c3-.3 6.2-1.5 6.2-6.6A5.2 5.2 0 0 0 20 2.8 4.8 4.8 0 0 0 19.9 0S18.8-.3 16 1.6a11 11 0 0 0-8 0C5.2-.3 4.1 0 4.1 0A4.8 4.8 0 0 0 4 2.8a5.2 5.2 0 0 0-1.3 3.5c0 5.1 3.2 6.3 6.2 6.6a3.5 3.5 0 0 0-.9 2.8V17" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ashish-sng/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Ashish Singh LinkedIn profile"
                className="rounded-radius-sm p-spacing-xs text-muted transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 10v7" />
                  <path d="M8 7h.01" />
                  <path d="M12 17v-4a2 2 0 0 1 4 0v4" />
                  <path d="M12 10v7" />
                </svg>
              </a>
            </li>
            <li>
              <Button
                as="a"
                href="/resume.pdf"
                variant="secondary"
                className="border-accent/30 text-accent hover:bg-accent/10"
              >
                Resume
              </Button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
