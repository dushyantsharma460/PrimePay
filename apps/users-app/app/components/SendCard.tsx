"use client";

import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textInput";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { p2pTransfer } from "../lib/actions/p2pTransfer";

export function SendCard() {
  const router = useRouter();
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (loading || !number || !amount) {
      return;
    }

    setLoading(true);
    try {
      await p2pTransfer(number, Number(amount) * 100);
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      title="Send Money"
      description="Transfer instantly to another user by phone number"
    >
      <div className="mx-auto max-w-md space-y-1">
        <TextInput
          placeholder="Enter phone number"
          label="Phone Number"
          onChange={(value) => {
            setNumber(value);
          }}
        />
        <TextInput
          placeholder="Enter amount in INR"
          label="Amount"
          onChange={(value) => {
            setAmount(value);
          }}
        />
        <div className="pt-4">
          <Button
            onClick={handleSend}
            disabled={loading || !number || !amount}
            fullWidth
          >
            {loading ? "Sending..." : "Send"}
          </Button>
        </div>
      </div>
    </Card>
  );
}
