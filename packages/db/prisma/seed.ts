import "dotenv/config";
import db from "../src/index.js";
import bcrypt from "bcrypt";

const prisma = db;

async function seedUser(
  number: string,
  password: string,
  name: string,
  onRampAmount: number,
  onRampStatus: "Success" | "Failure",
  token: string
) {
  const balanceAmount = onRampStatus === "Success" ? onRampAmount : 0;

  const user = await prisma.user.upsert({
    where: { number },
    update: { name },
    create: {
      number,
      password: await bcrypt.hash(password, 10),
      name,
    },
  });

  await prisma.balance.upsert({
    where: { userId: user.id },
    update: { amount: balanceAmount, locked: 0 },
    create: {
      userId: user.id,
      amount: balanceAmount,
      locked: 0,
    },
  });

  await prisma.onRampTransaction.upsert({
    where: { token },
    update: {
      amount: onRampAmount,
      status: onRampStatus,
      provider: "HDFC Bank",
    },
    create: {
      userId: user.id,
      startTime: new Date(),
      status: onRampStatus,
      amount: onRampAmount,
      token,
      provider: "HDFC Bank",
    },
  });

  return user;
}

async function main() {
  const alice = await seedUser(
    "1111111111",
    "alice",
    "alice",
    2_000_000,
    "Success",
    "token__1"
  );
  const bob = await seedUser(
    "2222222222",
    "bob",
    "bob",
    200_000,
    "Failure",
    "token__2"
  );
  console.log({ alice, bob });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
