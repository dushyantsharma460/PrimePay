import prisma from "@repo/db/client";
import { AddMoney } from "../../components/AddMoneyCard";
import { BalanceCard } from "../../components/BalanceCard";
import { OnRampTransactions } from "../../components/OnRampTransaction";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { PageHeader } from "@repo/ui/pageHeader";

async function getBalance() {
  const session = await getServerSession(authOptions);
  const balance = await prisma.balance.findFirst({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return {
    amount: balance?.amount || 0,
    locked: balance?.locked || 0,
  };
}

async function getOnRampTransactions() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return txns.map((t) => ({
    id: t.id,
    time: t.startTime,
    amount: t.amount,
    status: t.status,
    provider: t.provider,
  }));
}

export default async function TransferPage() {
  const balance = await getBalance();
  const transactions = await getOnRampTransactions();

  return (
    <div className="mx-auto w-full max-w-6xl">
      <PageHeader
        title="Transfer"
        description="Add money to your wallet and track recent deposits"
      />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AddMoney />
        <div className="space-y-6">
          <BalanceCard amount={balance.amount} locked={balance.locked} />
          <OnRampTransactions transactions={transactions} />
        </div>
      </div>
    </div>
  );
}
