"use client";

import { SideNav } from "@/components/side-nav";
import { LayoutDashboardIcon, TargetIcon, LayoutGridIcon, KanbanSquareIcon } from "lucide-react";

export default function StrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sideNavItems = [
    { title: "Dashboard", href: "/strategy", icon: <LayoutDashboardIcon className="h-4 w-4" /> },
    { title: "Boards", href: "/strategy/boards", icon: <KanbanSquareIcon className="h-4 w-4" /> },
    { title: "Lean Canvas", href: "/strategy/lean-canvas", icon: <LayoutGridIcon className="h-4 w-4" /> },
    { title: "OKRs", href: "/strategy/okrs", icon: <TargetIcon className="h-4 w-4" /> },
  ];

  return (
    <>
      <SideNav items={sideNavItems} title="Strategy" />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </>
  );
}
