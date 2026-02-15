import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-background border border-accent hover:bg-accent/90 focus-visible:ring-accent/40",
  secondary:
    "bg-surface text-foreground border border-border hover:bg-surface/80 focus-visible:ring-border"
};

export function Button({ variant = "primary", className = "", type = "button", children, ...props }: ButtonProps) {
  // Semantic variant classes keep visual intent stable while token values can evolve by theme.
  const classes = [
    "inline-flex items-center justify-center rounded-radius-md px-spacing-md py-spacing-sm text-small font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
    variantClasses[variant],
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
