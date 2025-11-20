"use client";

import { SideNav } from "@/components/layout/side-nav";
import { LayoutDashboardIcon, KanbanSquareIcon } from "lucide-react";

export default function GovernanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sideNavItems = [
    { title: "Dashboard", href: "/governance", icon: <LayoutDashboardIcon className="h-4 w-4" /> },
    { title: "Boards", href: "/governance/boards", icon: <KanbanSquareIcon className="h-4 w-4" /> },
  ];

  return (
    <>
      <SideNav items={sideNavItems} title="Governance" />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </>
  );
}
