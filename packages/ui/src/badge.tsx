import React from "react";

const variantStyles = {
  success: "bg-success-muted text-success border-emerald-200",
  warning: "bg-warning-muted text-warning border-amber-200",
  danger: "bg-red-50 text-red-700 border-red-200",
  neutral: "bg-surface-muted text-text-secondary border-border",
};

export function Badge({
  children,
  variant = "neutral",
}: {
  children: React.ReactNode;
  variant?: "success" | "warning" | "danger" | "neutral";
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium capitalize ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
}

function getStatusVariant(
  status: string
): "success" | "warning" | "danger" | "neutral" {
  const normalized = status.toLowerCase();
  if (normalized.includes("success") || normalized.includes("complete")) {
    return "success";
  }
  if (normalized.includes("fail")) {
    return "danger";
  }
  if (normalized.includes("pending") || normalized.includes("processing")) {
    return "warning";
  }
  return "neutral";
}

export function StatusBadge({ status }: { status: string }) {
  return <Badge variant={getStatusVariant(status)}>{status}</Badge>;
}
