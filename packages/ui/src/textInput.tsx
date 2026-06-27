"use client";

export const TextInput = ({
  placeholder,
  onChange,
  label,
}: {
  placeholder: string;
  onChange: (value: string) => void;
  label: string;
}) => {
  const inputId = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="pt-2">
      <label
        htmlFor={inputId}
        className="mb-2 block text-sm font-medium text-text-primary"
      >
        {label}
      </label>
      <input
        id={inputId}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        className="block w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-text-primary shadow-sm transition-colors placeholder:text-text-secondary/70 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
};
