"use client";

import { SideNav } from "@/components/layout/side-nav";
import { appData } from "@/lib/app-data";

export default function StrategyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sideNavItems = appData.strategyNav.map(item => ({
    ...item,
    icon: <item.icon className="h-4 w-4" />
  }));

  return (
    <>
      <SideNav items={sideNavItems} title="Strategy" />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </>
  );
}
