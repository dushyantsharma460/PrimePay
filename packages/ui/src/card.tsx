import React from "react";

export function Card({
  title,
  children,
  description,
}: {
  title: string;
  children?: React.ReactNode;
  description?: string;
}): React.ReactElement {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="border-b border-border bg-surface-muted/50 px-6 py-4">
        <h2 className="text-lg font-semibold tracking-tight text-text-primary">
          {title}
        </h2>
        {description ? (
          <p className="mt-1 text-sm text-text-secondary">{description}</p>
        ) : null}
      </div>
      <div className="px-6 py-5">{children}</div>
    </div>
  );
}
