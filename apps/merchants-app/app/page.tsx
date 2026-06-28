"use client";

import { useBalance } from "@repo/store/balance";

export default function MerchantsPage() {
  const balance = useBalance((state) => state.balance);

  const stats = [
    {
      title: "Today's Sales",
      value: "₹12,450",
    },
    {
      title: "Transactions",
      value: "128",
    },
    {
      title: "Customers",
      value: "96",
    },
    {
      title: "Refunds",
      value: "5",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-lg">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h1 className="text-3xl font-bold">
                Merchant Dashboard 👋
              </h1>
              <p className="mt-2 text-sm text-blue-100">
                Welcome back! Here's an overview of your business.
              </p>
            </div>

            <span className="w-fit rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
              ✅ Verified Merchant
            </span>
          </div>
        </div>

        {/* Balance + Status */}
        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
            <p className="text-sm uppercase tracking-wider text-gray-500">
              Available Balance
            </p>

            <h2 className="mt-3 text-4xl font-bold text-blue-600">
              ₹ {balance}
            </h2>

            <p className="mt-2 text-sm text-green-600">
              ▲ 12% higher than last week
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
            <p className="text-sm uppercase tracking-wider text-gray-500">
              Account Status
            </p>

            <h2 className="mt-3 text-2xl font-bold text-green-600">
              Active
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Your merchant account is verified and ready to receive payments.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm text-gray-500">
                {item.title}
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                {item.value}
              </h3>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="mb-5 text-xl font-semibold">
            Quick Actions
          </h3>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
              View Payments
            </button>

            <button className="rounded-lg border px-5 py-2 transition hover:bg-gray-100">
              Download Report
            </button>

            <button className="rounded-lg border px-5 py-2 transition hover:bg-gray-100">
              Manage Profile
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-xl font-semibold">
            Recent Activity
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <p className="font-medium">Payment Received</p>
                <p className="text-sm text-gray-500">
                  Customer • 2 mins ago
                </p>
              </div>

              <span className="font-semibold text-green-600">
                + ₹1,250
              </span>
            </div>

            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <p className="font-medium">Refund Processed</p>
                <p className="text-sm text-gray-500">
                  Order #2045
                </p>
              </div>

              <span className="font-semibold text-red-500">
                - ₹350
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Settlement Completed</p>
                <p className="text-sm text-gray-500">
                  Today • 10:30 AM
                </p>
              </div>

              <span className="font-semibold text-blue-600">
                ₹8,900
              </span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}