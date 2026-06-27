import prisma from "@repo/db/client";
import { OnRampTransactions } from "../../components/OnRampTransaction";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { PageHeader } from "@repo/ui/pageHeader";

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

export default async function TransactionsPage() {
  const transactions = await getOnRampTransactions();

  return (
    <div className="mx-auto w-full max-w-3xl">
      <PageHeader
        title="Transactions"
        description="Bank deposit history (Add Money)"
      />
      <OnRampTransactions transactions={transactions} />
    </div>
  );
}
