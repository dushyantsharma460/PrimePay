"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Select } from "@repo/ui/select";
import { useState } from "react";
import { TextInput } from "@repo/ui/textInput";
import { createOnRampTransaction } from "../lib/actions/createOnRamptxn";

const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/"
}];

export const AddMoney = () => {
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
    const [amount, setAmount] = useState<number>(0);
    const [provider, setProvider] = useState<string>(SUPPORTED_BANKS[0]!.name);
    const [loading, setLoading] = useState(false);

    const handleAddMoney = async () => {
        if (loading || amount <= 0) {
            return;
        }

        setLoading(true);
        try {
            const result = await createOnRampTransaction(amount * 100, provider);
            if (result.message === "On ramp transaction added") {
                window.location.href = redirectUrl || "";
            }
        } finally {
            setLoading(false);
        }
    };

    return <Card title="Add Money">
        <div className="w-full">
            <TextInput
                label={"Amount"}
                placeholder={"Amount"}
                onChange={(value) => {
                    setAmount(Number(value));
                }}
            />
            <div className="py-4 text-left">
                Bank
            </div>
            <Select onSelect={(value) => {
                setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "")
                setProvider(SUPPORTED_BANKS.find(x => x.name === value)?.name || "")
            }} options={SUPPORTED_BANKS.map(x => ({
                key: x.name,
                value: x.name
            }))} />
            <div className="flex justify-center pt-4">
                <Button onClick={handleAddMoney} disabled={loading || amount <= 0}>
                    {loading ? "Processing..." : "Add Money"}
                </Button>
            </div>
        </div>
    </Card>
}