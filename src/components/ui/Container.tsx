import type { ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className = "", children, ...props }: ContainerProps) {
  // Centralized container constraints prevent one-off width/padding drift across pages.
  const classes = ["mx-auto w-full max-w-4xl px-6 sm:px-8", className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
