import { forwardRef, type HTMLAttributes } from "react";

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { className = "", children, ...props },
  ref
) {
  const classes = ["mx-auto w-full max-w-4xl px-6 sm:px-8", className].filter(Boolean).join(" ");

  return (
    <div ref={ref} className={classes} {...props}>
      {children}
    </div>
  );
});
