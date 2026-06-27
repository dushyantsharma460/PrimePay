export function Center({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full items-center justify-center px-4 py-8">
      {children}
    </div>
  );
}
