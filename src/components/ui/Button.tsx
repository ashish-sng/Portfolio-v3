import { forwardRef, type ButtonHTMLAttributes, type MouseEventHandler, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className" | "onClick"> & {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border border-accent bg-accent text-background hover:bg-accent/90 focus-visible:ring-accent/40",
  secondary: "border border-border bg-surface text-foreground hover:bg-surface/80 focus-visible:ring-accent/30"
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", className = "", type = "button", children, ...props },
  ref
) {
  const classes = [
    "inline-flex items-center justify-center rounded-radius-md px-spacing-md py-spacing-sm text-small font-medium transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
    variantClasses[variant],
    className
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button ref={ref} type={type} className={classes} {...props}>
      {children}
    </button>
  );
});
