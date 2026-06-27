import { AppbarClient } from "../../ApplicationClient";
import { SidebarItem } from "../components/SidebarItem";

const NAV_ITEMS = [
  { href: "/dashboard", title: "Home", icon: <HomeIcon /> },
  { href: "/dashboard/transfer", title: "Transfer", icon: <TransferIcon /> },
  {
    href: "/dashboard/transactions",
    title: "Deposits",
    icon: <TransactionsIcon />,
  },
  { href: "/dashboard/p2p", title: "P2P Transfer", icon: <P2pIcon /> },
  {
    href: "/dashboard/p2p-transactions",
    title: "P2P History",
    icon: <P2pHistoryIcon />,
  },
] as const;

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <AppbarClient />
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col pt-16 md:flex-row">
        <aside className="hidden w-64 shrink-0 border-r border-border bg-surface px-4 py-6 md:block lg:w-72">
          <p className="mb-4 px-2 text-xs font-semibold uppercase tracking-wider text-text-secondary">
            Menu
          </p>
          <nav aria-label="Dashboard navigation">
            {NAV_ITEMS.map((item) => (
              <SidebarItem key={item.href} {...item} />
            ))}
          </nav>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <nav
            aria-label="Mobile dashboard navigation"
            className="flex gap-2 overflow-x-auto border-b border-border bg-surface px-4 py-3 md:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <SidebarItem key={item.href} {...item} variant="pill" />
            ))}
          </nav>

          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">{children}</main>
        </div>
      </div>
    </>
  );
}

function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}

function TransferIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
      />
    </svg>
  );
}

function TransactionsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

function P2pIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
      />
    </svg>
  );
}

function P2pHistoryIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm0 5.25h.007v.008H3.75V12Zm0 5.25h.007v.008H3.75v-.008Z"
      />
    </svg>
  );
}
