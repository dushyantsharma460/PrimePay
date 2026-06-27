import { Card } from "@repo/ui/card";

function BalanceRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        "flex items-center justify-between rounded-xl px-4 py-3 transition-colors",
        highlight ? "bg-primary-50" : "hover:bg-surface-muted",
      ].join(" ")}
    >
      <span className="text-sm text-text-secondary">{label}</span>
      <span
        className={[
          "text-sm font-semibold tabular-nums",
          highlight ? "text-primary-700" : "text-text-primary",
        ].join(" ")}
      >
        {value}
      </span>
    </div>
  );
}

export const BalanceCard = ({
  amount,
  locked,
}: {
  amount: number;
  locked: number;
}) => {
  const unlocked = amount / 100;
  const lockedAmount = locked / 100;
  const total = (locked + amount) / 100;

  return (
    <Card
      title="Balance"
      description="Your current wallet balance overview"
    >
      <div className="space-y-2">
        <BalanceRow
          label="Unlocked balance"
          value={`₹${unlocked.toLocaleString("en-IN")}`}
        />
        <BalanceRow
          label="Locked balance"
          value={`₹${lockedAmount.toLocaleString("en-IN")}`}
        />
        <BalanceRow
          label="Total balance"
          value={`₹${total.toLocaleString("en-IN")}`}
          highlight
        />
      </div>
    </Card>
  );
};
