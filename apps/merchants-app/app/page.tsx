"use client";

import { useBalance } from "@repo/store/balance";

export default function MerchantsPage() {
  const balance = useBalance((state) => state.balance);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-text-primary">
              Merchant Dashboard 👋
            </h1>
            <p className="mt-1 text-text-secondary">
              Welcome back to PrimePay.
            </p>
          </div>

          <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
            Active
          </span>
        </div>

        {/* Balance Card */}
        <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
          <p className="text-sm uppercase tracking-wider text-text-secondary">
            Current Balance
          </p>

          <h2 className="mt-3 text-4xl font-bold text-primary-700">
            ₹ {balance}
          </h2>

          <p className="mt-2 text-sm text-text-secondary">
            Available for settlement
          </p>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
            <p className="text-sm text-text-secondary">Today's Sales</p>
            <h3 className="mt-2 text-2xl font-bold">₹12,450</h3>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
            <p className="text-sm text-text-secondary">Transactions</p>
            <h3 className="mt-2 text-2xl font-bold">128</h3>
          </div>

          <div className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
            <p className="text-sm text-text-secondary">Settlement</p>
            <h3 className="mt-2 text-2xl font-bold text-green-600">
              Completed
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}