import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { P2pTransactions } from "../../components/P2pTransaction";
import { authOptions } from "../../lib/auth";
import { getP2pTransactions } from "../../lib/getP2pTransactions";
import { PageHeader } from "@repo/ui/pageHeader";

export default async function P2pTransactionsPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    redirect("/api/auth/signin");
  }

  const transactions = await getP2pTransactions(Number(session.user.id));

  return (
    <div className="mx-auto w-full max-w-3xl">
      <PageHeader
        title="P2P History"
        description="All peer-to-peer transfers sent and received"
      />
      <P2pTransactions transactions={transactions} />
    </div>
  );
}
