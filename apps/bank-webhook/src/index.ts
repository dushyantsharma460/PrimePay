import "dotenv/config";
import express from "express";
import db from "@repo/db/client";
const app = express();

app.use(express.json())

app.post("/hdfcWebhook", async (req, res) => {
    const token = req.body.token as string | undefined;

    if (!token) {
        return res.status(400).json({
            message: "Missing token",
        });
    }

    try {
        await db.$transaction(async (tx) => {
            const txn = await tx.onRampTransaction.findFirst({
                where: {
                    token,
                    status: "Processing",
                },
            });

            if (!txn) {
                throw new Error("Transaction not found or already processed");
            }

            await tx.balance.upsert({
                where: {
                    userId: txn.userId,
                },
                create: {
                    userId: txn.userId,
                    amount: txn.amount,
                    locked: 0,
                },
                update: {
                    amount: {
                        increment: txn.amount,
                    },
                },
            });

            await tx.onRampTransaction.update({
                where: {
                    id: txn.id,
                },
                data: {
                    status: "Success",
                },
            });
        }, {
            maxWait: 15_000,
            timeout: 30_000,
        });

        res.json({
            message: "Captured"
        })
    } catch(e) {
        console.error(e);
        res.status(411).json({
            message: "Error while processing webhook"
        })
    }

})

app.listen(8800);
