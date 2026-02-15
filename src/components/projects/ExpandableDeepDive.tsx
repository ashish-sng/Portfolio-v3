"use client";

import { useId, useState } from "react";
import { Text } from "@/components/ui/Text";

export type DeepDiveItem = {
  title: string;
  points: string[];
};

type ExpandableDeepDiveProps = {
  items: DeepDiveItem[];
};

type ExpandableItemProps = {
  item: DeepDiveItem;
};

function ExpandableItem({ item }: ExpandableItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();

  return (
    <section className="rounded-radius-md bg-surface/60 px-spacing-md py-spacing-sm">
      <h3>
        <button
          type="button"
          className="inline-flex min-h-10 w-full items-center justify-between gap-spacing-sm rounded-radius-sm text-left text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <Text as="span" variant="body">
            {item.title}
          </Text>
          <Text as="span" variant="small" className="text-muted">
            {isOpen ? "Hide" : "Show"}
          </Text>
        </button>
      </h3>

      <div className={["grid transition-all duration-300 ease-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"].join(" ")}>
        <div id={panelId} className="overflow-hidden" role="region" aria-label={item.title}>
          <ul className="space-y-spacing-sm pb-spacing-xs pt-spacing-sm">
            {item.points.map((point) => (
              <li key={point} className="list-disc pl-spacing-sm marker:text-muted">
                <Text variant="small" className="text-muted">
                  {point}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ExpandableDeepDive({ items }: ExpandableDeepDiveProps) {
  return (
    <div className="space-y-spacing-sm">
      {items.map((item) => (
        <ExpandableItem key={item.title} item={item} />
      ))}
    </div>
  );
}
