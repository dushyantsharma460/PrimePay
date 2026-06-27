interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void | Promise<void>;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
}

const variantStyles = {
  primary:
    "bg-primary-700 text-white shadow-sm hover:bg-primary-800 active:bg-primary-800 focus-visible:ring-primary-600",
  secondary:
    "border border-border bg-surface text-text-primary shadow-sm hover:bg-surface-muted active:bg-surface-muted",
  ghost:
    "text-text-secondary hover:bg-primary-50 hover:text-primary-700 active:bg-primary-100",
};

export const Button = ({
  children,
  onClick,
  disabled,
  variant = "primary",
  fullWidth = false,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold",
        "transition-all duration-200 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none",
        variantStyles[variant],
        fullWidth ? "w-full" : "",
      ].join(" ")}
    >
      {children}
    </button>
  );
};
