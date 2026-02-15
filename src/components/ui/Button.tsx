import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type MouseEventHandler,
  type ReactNode,
  type Ref
} from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type ButtonAsButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className" | "onClick"> & {
    as?: "button";
    onClick?: MouseEventHandler<HTMLButtonElement>;
  };

type ButtonAsAnchorProps = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "onClick"> & {
    as: "a";
    onClick?: MouseEventHandler<HTMLAnchorElement>;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

type ButtonRef = HTMLButtonElement | HTMLAnchorElement;

const baseClasses =
  "inline-flex items-center justify-center rounded-radius-md px-spacing-md py-spacing-sm text-small font-medium transition-colors";

const focusClasses =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border border-accent bg-accent text-background hover:bg-accent/90 focus-visible:ring-accent/40",
  secondary: "border border-border bg-surface text-foreground hover:bg-surface/80 focus-visible:ring-accent/30"
};

export const Button = forwardRef<ButtonRef, ButtonProps>(function Button(
  { as = "button", variant = "primary", className = "", children, ...props },
  ref
) {
  const classes = [baseClasses, focusClasses, variantClasses[variant], className].filter(Boolean).join(" ");

  if (as === "a") {
    const anchorProps = props as ButtonAsAnchorProps;
    return (
      <a ref={ref as Ref<HTMLAnchorElement>} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonAsButtonProps;
  return (
    <button ref={ref as Ref<HTMLButtonElement>} type={buttonProps.type ?? "button"} className={classes} {...buttonProps}>
      {children}
    </button>
  );
});
