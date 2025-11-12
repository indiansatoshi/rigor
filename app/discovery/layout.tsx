"use client";

import { SideNav } from "@/components/side-nav";
import { NetworkIcon, FlaskConicalIcon, LayoutDashboardIcon, KanbanSquareIcon } from "lucide-react";

export default function DiscoveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sideNavItems = [
    { title: "Dashboard", href: "/discovery", icon: <LayoutDashboardIcon className="h-4 w-4" /> },
    { title: "Boards", href: "/discovery/boards", icon: <KanbanSquareIcon className="h-4 w-4" /> },
    { title: "OST", href: "/discovery/ost", icon: <NetworkIcon className="h-4 w-4" /> },
    { title: "Hypotheses", href: "/discovery/hypotheses", icon: <FlaskConicalIcon className="h-4 w-4" /> },
  ];

  return (
    <>
      <SideNav items={sideNavItems} title="Discovery" />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </>
  );
}
