import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type TextVariant = "h1" | "h2" | "body" | "small";

type TextProps<T extends ElementType = "p"> = {
  as?: T;
  variant?: TextVariant;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const variantClasses: Record<TextVariant, string> = {
  h1: "text-h1 font-semibold tracking-tight",
  h2: "text-h2 font-semibold tracking-tight",
  body: "text-body",
  small: "text-small"
};

export function Text<T extends ElementType = "p">({
  as,
  variant = "body",
  className = "",
  children,
  ...props
}: TextProps<T>) {
  const Component = (as ?? "p") as ElementType;
  const classes = [variantClasses[variant], className].filter(Boolean).join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
