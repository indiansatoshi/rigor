"use client";

import { SideNav } from "@/components/side-nav";
import { appData } from "@/components/app-data";

export default function PlanningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sideNavItems = appData.planningNav.map(item => ({
    ...item,
    icon: <item.icon className="h-4 w-4" />
  }));

  return (
    <>
      <SideNav items={sideNavItems} title="Planning" />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </>
  );
}
