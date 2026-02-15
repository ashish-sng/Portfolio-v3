import { forwardRef, type ElementType, type HTMLAttributes, type ReactNode } from "react";

export type TextVariant = "h1" | "h2" | "h3" | "body" | "small";

export type TextProps = Omit<HTMLAttributes<HTMLElement>, "children" | "className"> & {
  as?: ElementType;
  variant?: TextVariant;
  className?: string;
  children: ReactNode;
};

const variantClasses: Record<TextVariant, string> = {
  h1: "text-h1 font-semibold tracking-tight",
  h2: "text-h2 font-semibold tracking-tight",
  h3: "text-body font-semibold tracking-tight",
  body: "text-body",
  small: "text-small"
};

const defaultElementByVariant: Record<TextVariant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  body: "p",
  small: "p"
};

export const Text = forwardRef<HTMLElement, TextProps>(function Text(
  { as, variant = "body", className = "", children, ...props },
  ref
) {
  const Component = (as ?? defaultElementByVariant[variant]) as ElementType;
  const classes = [variantClasses[variant], className].filter(Boolean).join(" ");

  return (
    <Component ref={ref as never} className={classes} {...props}>
      {children}
    </Component>
  );
});
