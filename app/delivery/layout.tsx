"use client";

import { SideNav } from "@/components/side-nav";
import { LayoutDashboardIcon, KanbanSquareIcon } from "lucide-react";

export default function DeliveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sideNavItems = [
    { title: "Dashboard", href: "/delivery", icon: <LayoutDashboardIcon className="h-4 w-4" /> },
    { title: "Boards", href: "/delivery/boards", icon: <KanbanSquareIcon className="h-4 w-4" /> },
  ];

  return (
    <>
      <SideNav items={sideNavItems} title="Delivery" />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </>
  );
}
