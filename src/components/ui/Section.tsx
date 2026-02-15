import { forwardRef, type HTMLAttributes } from "react";

type SectionSpacing = "md" | "lg";

export type SectionProps = Omit<HTMLAttributes<HTMLElement>, "id"> & {
  id?: string;
  bordered?: boolean;
  spacing?: SectionSpacing;
};

const spacingClasses: Record<SectionSpacing, string> = {
  md: "py-spacing-lg sm:py-spacing-xl",
  lg: "py-spacing-xl sm:py-[2.5rem]"
};

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { id, bordered = true, spacing = "md", className = "", children, ...props },
  ref
) {
  const classes = ["space-y-spacing-md", spacingClasses[spacing], bordered ? "border-b border-border" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section ref={ref as never} id={id} className={classes} {...props}>
      {children}
    </section>
  );
});
