// export * from '@prisma/client';
export { PrismaClient } from "./generated/prisma/client.js";

import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
  max: 10,
  connectionTimeoutMillis: 30_000,
});

const db = new PrismaClient({
  adapter,
});

export default db;