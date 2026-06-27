import { Card } from "@repo/ui/card";
import { EmptyState } from "@repo/ui/emptyState";

export const P2pTransactions = ({
  transactions,
}: {
  transactions: {
    id: number;
    time: Date;
    amount: number;
    direction: "sent" | "received";
    counterpartyName: string | null;
    counterpartyNumber: string;
  }[];
}) => {
  if (!transactions.length) {
    return (
      <Card title="P2P Transfers">
        <EmptyState
          title="No P2P transfers yet"
          description="Money you send or receive from other users will appear here."
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
                d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          }
        />
      </Card>
    );
  }

  return (
    <Card
      title="P2P Transfers"
      description="Peer-to-peer send and receive history"
    >
      <div className="divide-y divide-border">
        {transactions.map((t) => {
          const label =
            t.direction === "sent"
              ? `Sent to ${t.counterpartyName || t.counterpartyNumber}`
              : `Received from ${t.counterpartyName || t.counterpartyNumber}`;
          const amountLabel = `₹${(t.amount / 100).toLocaleString("en-IN")}`;

          return (
            <div
              key={t.id}
              className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0 transition-colors hover:bg-surface-muted/50 -mx-2 px-2 rounded-lg"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-text-primary">{label}</p>
                <p className="mt-0.5 text-xs text-text-secondary">
                  {t.counterpartyNumber}
                </p>
                <p className="mt-0.5 text-xs text-text-secondary">
                  {t.time.toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              <p
                className={[
                  "shrink-0 text-sm font-semibold tabular-nums",
                  t.direction === "sent" ? "text-red-600" : "text-success",
                ].join(" ")}
              >
                {t.direction === "sent" ? `- ${amountLabel}` : `+ ${amountLabel}`}
              </p>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
