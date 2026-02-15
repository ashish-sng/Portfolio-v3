"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Text";

const navLinks = [
  { href: "#selected-work", label: "Work" },
  { href: "#engineering-approach", label: "Approach" },
  { href: "#experience", label: "Experience" }
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Sticky navigation keeps section links and resume access persistent while browsing long pages.
    <header
      className={[
        "sticky top-0 z-50 border-b border-border bg-background/95 text-foreground backdrop-blur",
        isScrolled ? "shadow-sm" : ""
      ]
        .filter(Boolean)
        .join(" ")}
      role="banner"
    >
      <Container className="py-spacing-sm">
        <div className="grid grid-cols-[1fr_auto] items-center gap-spacing-sm md:grid-cols-[1fr_auto_1fr]">
          <Link
            href="#hero"
            className="justify-self-start rounded-radius-sm px-spacing-xs py-spacing-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            onClick={() => setMenuOpen(false)}
          >
            <Text variant="small" className="font-medium uppercase tracking-wide text-muted">
              Ashish Singh
            </Text>
          </Link>

          <nav aria-label="Section navigation" className="hidden justify-self-center md:block">
            <ul className="flex items-center gap-spacing-md">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-radius-sm px-spacing-xs py-spacing-xs text-small text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden justify-self-end md:block">
            {/* Resume should be exposed as a clear button-like action so users and screen readers
               can find the primary hiring CTA immediately without hunting in the page body. */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center rounded-radius-md border border-accent bg-accent px-spacing-md py-spacing-sm text-small font-medium text-background transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
            >
              Download Resume
            </a>
          </div>

          <button
            type="button"
            className="justify-self-end rounded-radius-md border border-border bg-surface px-spacing-sm py-spacing-xs text-small text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            Menu
          </button>
        </div>

        {menuOpen ? (
          <nav
            id="mobile-nav"
            aria-label="Mobile section navigation"
            className="mt-spacing-sm space-y-spacing-sm border-t border-border pt-spacing-sm md:hidden"
          >
            <ul className="space-y-spacing-xs">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-radius-sm px-spacing-xs py-spacing-xs text-small text-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center rounded-radius-md border border-accent bg-accent px-spacing-md py-spacing-sm text-small font-medium text-background transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
              onClick={() => setMenuOpen(false)}
            >
              Download Resume
            </a>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
