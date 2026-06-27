import prisma from "@repo/db/client";

export async function getP2pTransactions(userId: number) {
  const txns = await prisma.p2pTransfer.findMany({
    where: {
      OR: [{ fromUserId: userId }, { toUserId: userId }],
    },
    include: {
      fromUser: { select: { name: true, number: true } },
      toUser: { select: { name: true, number: true } },
    },
    orderBy: { timestamp: "desc" },
  });

  return txns.map((t) => ({
    id: t.id,
    time: t.timestamp,
    amount: t.amount,
    direction:
      t.fromUserId === userId ? ("sent" as const) : ("received" as const),
    counterpartyName:
      t.fromUserId === userId ? t.toUser.name : t.fromUser.name,
    counterpartyNumber:
      t.fromUserId === userId ? t.toUser.number : t.fromUser.number,
  }));
}
