import prisma from "@repo/db/client";
import { BalanceCard } from "../components/BalanceCard";
import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";
import { redirect } from "next/navigation";

async function getBalance(userId: number) {
    const balance = await prisma.balance.findFirst({
        where: {
            userId
        }
    });
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}

export default async function DashboardPage() {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
        redirect("/api/auth/signin");
    }

    const balance = await getBalance(Number(session.user.id));

    return <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
            Dashboard
        </div>
        <div className="p-4 max-w-md">
            <BalanceCard amount={balance.amount} locked={balance.locked} />
        </div>
    </div>
}
