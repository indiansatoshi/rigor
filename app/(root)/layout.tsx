"use client";

import { SideNav } from "@/components/layout/side-nav";
import {
  LayoutDashboardIcon,
  TrendingUpIcon,
  BellIcon,
  CalendarIcon,
  UsersIcon
} from "lucide-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sideNavItems = [
    { title: "Dashboard", href: "/", icon: <LayoutDashboardIcon className="h-4 w-4" /> },
    { title: "Activity", href: "/activity", icon: <BellIcon className="h-4 w-4" /> },
    { title: "Calendar", href: "/calendar", icon: <CalendarIcon className="h-4 w-4" /> },
    { title: "Teams", href: "/teams", icon: <UsersIcon className="h-4 w-4" /> },
    { title: "Analytics", href: "/analytics", icon: <TrendingUpIcon className="h-4 w-4" /> },
  ];

  return (
    <>
      <SideNav items={sideNavItems} title="Home" />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </>
  );
}
