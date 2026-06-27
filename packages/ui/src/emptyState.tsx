import React from "react";

export function EmptyState({
  title,
  description,
  icon,
}: {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface-muted/50 px-6 py-12 text-center"
      role="status"
    >
      {icon ? (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-700">
          {icon}
        </div>
      ) : null}
      <p className="text-sm font-semibold text-text-primary">{title}</p>
      {description ? (
        <p className="mt-1 max-w-sm text-sm text-text-secondary">
          {description}
        </p>
      ) : null}
    </div>
  );
}
