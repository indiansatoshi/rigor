"use client";

import { SideNav } from "@/components/side-nav";
import { 
  LayoutDashboardIcon, 
  TrendingUpIcon, 
  BellIcon,
  CalendarIcon,
  UsersIcon
} from "lucide-react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sideNavItems = [
    { title: "Dashboard", href: "/home", icon: <LayoutDashboardIcon className="h-4 w-4" /> },
    { title: "Activity", href: "/home/activity", icon: <BellIcon className="h-4 w-4" /> },
    { title: "Calendar", href: "/home/calendar", icon: <CalendarIcon className="h-4 w-4" /> },
    { title: "Teams", href: "/home/teams", icon: <UsersIcon className="h-4 w-4" /> },
    { title: "Analytics", href: "/home/analytics", icon: <TrendingUpIcon className="h-4 w-4" /> },
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
