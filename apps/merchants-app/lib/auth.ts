import type { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import db from "@repo/db/client";

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!googleClientId || !googleClientSecret) {
  throw new Error(
    "Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET in apps/merchants-app/.env"
  );
}

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: googleClientId,
            clientSecret: googleClientSecret
        })
    ],
    callbacks: {
      async signIn({ user, account }) {
        console.log("hi signin")
        if (!user?.email || !account) {
          return false;
        }

        await db.merchant.upsert({
          select: {
            id: true
          },
          where: {
            email: user.email
          },
          create: {
            email: user.email,
            name: user.name,
            auth_type: account.provider === "google" ? "Google" : "Github"
          },
          update: {
            name: user.name,
            auth_type: account.provider === "google" ? "Google" : "Github"
          }
        });

        return true;
      }
    },
    secret: process.env.NEXTAUTH_SECRET || "secret"
  }