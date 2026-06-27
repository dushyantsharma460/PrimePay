"use client";

export const Select = ({
  options,
  onSelect,
  label,
}: {
  onSelect: (value: string) => void;
  options: {
    key: string;
    value: string;
  }[];
  label?: string;
}) => {
  const selectId = label
    ? label.toLowerCase().replace(/\s+/g, "-")
    : "select-field";

  return (
    <div>
      {label ? (
        <label
          htmlFor={selectId}
          className="mb-2 block text-sm font-medium text-text-primary"
        >
          {label}
        </label>
      ) : null}
      <select
        id={selectId}
        onChange={(e) => {
          onSelect(e.target.value);
        }}
        className="block w-full cursor-pointer rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-text-primary shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
        aria-label={label || "Select an option"}
      >
        {options.map((option) => (
          <option key={option.key} value={option.key}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};
