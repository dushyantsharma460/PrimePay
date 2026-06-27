import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PrimePay Merchants",
  description: "Merchant dashboard for PrimePay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-surface-muted antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
