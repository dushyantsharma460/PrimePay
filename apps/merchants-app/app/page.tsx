"use client";

import { useBalance } from "@repo/store/balance";

export default function () {
  const balance = useBalance((state) => state.balance);

  return (
    <div>
      hi there {balance}
    </div>
  );
}