"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";

const THEME_STORAGE_KEY = "theme";

type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function Navbar() {
  const [theme, setTheme] = useState<Theme>("light");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const resolvedTheme =
      storedTheme === "light" || storedTheme === "dark"
        ? (storedTheme as Theme)
        : getSystemTheme();

    setTheme(resolvedTheme);
    applyTheme(resolvedTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 4);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  };

  return (
    <header
      className={[
        "sticky top-0 z-40 h-14 bg-transparent backdrop-blur-sm",
        isScrolled ? "bg-background/70 shadow-[0_1px_0_0_rgb(var(--border)/0.6)]" : ""
      ]
        .filter(Boolean)
        .join(" ")}
      role="banner"
    >
      <Container className="flex h-full items-center justify-between">
        <Text as="p" variant="small" className="text-muted/70">
          AS
        </Text>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-spacing-sm">
            <li>
              <a
                href="#work"
                className="rounded-radius-sm px-spacing-xs py-spacing-xs text-muted/80 transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <Text as="span" variant="small" className="text-muted/80">
                  Work
                </Text>
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="rounded-radius-sm px-spacing-xs py-spacing-xs text-muted/80 transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <Text as="span" variant="small" className="text-muted/80">
                  Experience
                </Text>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="rounded-radius-sm px-spacing-xs py-spacing-xs text-muted/80 transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              >
                <Text as="span" variant="small" className="text-muted/80">
                  Contact
                </Text>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ashish-sng"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Ashish Singh GitHub profile"
                className="rounded-radius-sm p-spacing-xs text-muted/80 transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
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
                className="rounded-radius-sm p-spacing-xs text-muted/80 transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
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
                className="px-spacing-sm py-[0.4rem] border-accent/20 text-foreground hover:bg-accent/5"
              >
                Resume
              </Button>
            </li>
            <li>
              <Button
                type="button"
                variant="secondary"
                className="px-spacing-sm py-spacing-xs"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                onClick={toggleTheme}
              >
                {theme === "dark" ? (
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
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="M4.9 4.9l1.4 1.4" />
                    <path d="M17.7 17.7l1.4 1.4" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="M4.9 19.1l1.4-1.4" />
                    <path d="M17.7 6.3l1.4-1.4" />
                  </svg>
                ) : (
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
                    <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
                  </svg>
                )}
              </Button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
