import type { ComponentPropsWithoutRef } from "react";

type SectionSpacing = "md" | "lg";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  bordered?: boolean;
  spacing?: SectionSpacing;
};

const spacingClasses: Record<SectionSpacing, string> = {
  md: "py-spacing-lg sm:py-spacing-xl",
  lg: "py-spacing-xl sm:py-[2.5rem]"
};

export function Section({
  bordered = true,
  spacing = "md",
  className = "",
  children,
  ...props
}: SectionProps) {
  // Default section rhythm enforces predictable spacing and separators across the page.
  const classes = [
    "space-y-spacing-md",
    spacingClasses[spacing],
    bordered ? "border-b border-border" : "",
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
}
