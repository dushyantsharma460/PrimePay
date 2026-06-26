interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void | Promise<void>;
  disabled?: boolean;
}

export const Button = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="rounded bg-black px-4 py-1 text-white hover:bg-gray-800 mb-1 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};