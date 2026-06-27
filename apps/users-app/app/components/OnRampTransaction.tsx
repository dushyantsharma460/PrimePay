import { Card } from "@repo/ui/card";
import { EmptyState } from "@repo/ui/emptyState";
import { StatusBadge } from "@repo/ui/badge";

function getAmountDisplay(status: string, amount: number) {
  const formatted = `₹${(amount / 100).toLocaleString("en-IN")}`;
  const normalized = status.toLowerCase();

  if (normalized.includes("fail")) {
    return {
      label: formatted,
      className: "text-sm font-semibold tabular-nums text-red-600 line-through",
    };
  }

  if (normalized.includes("processing") || normalized.includes("pending")) {
    return {
      label: formatted,
      className: "text-sm font-semibold tabular-nums text-warning",
    };
  }

  return {
    label: `+ ${formatted}`,
    className: "text-sm font-semibold tabular-nums text-success",
  };
}

export const OnRampTransactions = ({
  transactions,
}: {
  transactions: {
    id: number;
    time: Date;
    amount: number;
    status: string;
    provider: string;
  }[];
}) => {
  if (!transactions.length) {
    return (
      <Card title="Deposit Transactions">
        <EmptyState
          title="No deposit transactions"
          description="Your bank deposit history will appear here once you add money."
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          }
        />
      </Card>
    );
  }

  return (
    <Card
      title="Deposit Transactions"
      description="Bank deposits via Add Money"
    >
      <div className="divide-y divide-border">
        {transactions.map((t) => {
          const amountDisplay = getAmountDisplay(t.status, t.amount);

          return (
            <div
              key={t.id}
              className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0 transition-colors hover:bg-surface-muted/50 -mx-2 px-2 rounded-lg"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-text-primary">
                  {t.status === "Failure"
                    ? `Failed deposit via ${t.provider}`
                    : `Deposit via ${t.provider}`}
                </p>
                <p className="mt-0.5 text-xs text-text-secondary">
                  {t.time.toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1.5">
                <p className={amountDisplay.className}>{amountDisplay.label}</p>
                <StatusBadge status={t.status} />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
