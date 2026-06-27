"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

export const SidebarItem = ({
  href,
  title,
  icon,
  variant = "sidebar",
}: {
  href: string;
  title: string;
  icon: React.ReactNode;
  variant?: "sidebar" | "pill";
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const selected = pathname === href;

  const handleNavigate = () => {
    router.push(href);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleNavigate();
    }
  };

  if (variant === "pill") {
    return (
      <button
        type="button"
        onClick={handleNavigate}
        onKeyDown={handleKeyDown}
        aria-current={selected ? "page" : undefined}
        aria-label={title}
        className={[
          "inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
          selected
            ? "bg-primary-700 text-white shadow-sm"
            : "bg-surface text-text-secondary hover:bg-primary-50 hover:text-primary-700",
        ].join(" ")}
      >
        <span className="h-4 w-4">{icon}</span>
        {title}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleNavigate}
      onKeyDown={handleKeyDown}
      aria-current={selected ? "page" : undefined}
      aria-label={title}
      className={[
        "group mb-1 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-200",
        selected
          ? "bg-primary-50 text-primary-700 shadow-sm"
          : "text-text-secondary hover:bg-surface-muted hover:text-text-primary",
      ].join(" ")}
    >
      <span
        className={[
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors",
          selected
            ? "bg-primary-700 text-white"
            : "bg-surface-muted text-text-secondary group-hover:bg-primary-100 group-hover:text-primary-700",
        ].join(" ")}
      >
        {icon}
      </span>
      <span>{title}</span>
    </button>
  );
};
