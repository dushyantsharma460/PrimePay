import { Button } from "./button";

interface AppbarProps {
  user?: {
    name?: string | null;
  };
  onSignin: () => void;
  onSignout: () => void;
}

export const Appbar = ({ user, onSignin, onSignout }: AppbarProps) => {
  return (
    <header className="border-b border-border bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-700 text-sm font-bold text-white shadow-sm"
            aria-hidden="true"
          >
            P
          </div>
          <div>
            <p className="text-lg font-bold tracking-tight text-text-primary">
              PrimePay
            </p>
            <p className="hidden text-xs text-text-secondary sm:block">
              Digital Wallet
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {user?.name ? (
            <span className="hidden text-sm text-text-secondary sm:inline">
              {user.name}
            </span>
          ) : null}
          <Button
            onClick={user ? onSignout : onSignin}
            variant={user ? "secondary" : "primary"}
          >
            {user ? "Logout" : "Login"}
          </Button>
        </div>
      </div>
    </header>
  );
};
