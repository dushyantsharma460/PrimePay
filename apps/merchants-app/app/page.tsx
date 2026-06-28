"use client";

import { useBalance } from "@repo/store/balance";

export default function MerchantsPage() {
  const balance = useBalance((state) => state.balance);

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-md rounded-2xl border border-border bg-surface p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-700 text-xl font-bold text-white">
          M
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-text-primary">
          Merchant Dashboard
        </h1>
        <p className="mt-2 text-sm text-text-secondary">
          Welcome to PrimePay Merchants
        </p>
        <div className="mt-6 rounded-xl bg-surface-muted px-4 py-3">
          <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
            Current Balance
          </p>
          <p className="mt-1 text-2xl font-bold tabular-nums text-primary-700">
            {balance}
          </p>
        </div>
      </div>
    </main>
  );
}
