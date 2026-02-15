import type { ComponentPropsWithoutRef } from "react";

type GridColumns = "two" | "three";

type GridProps = ComponentPropsWithoutRef<"div"> & {
  columns?: GridColumns;
};

const columnClasses: Record<GridColumns, string> = {
  two: "grid-cols-1 sm:grid-cols-2",
  three: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
};

export function Grid({ columns = "three", className = "", children, ...props }: GridProps) {
  const classes = ["grid gap-spacing-md", columnClasses[columns], className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
