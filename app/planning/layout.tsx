"use client";

import { SideNav } from "@/components/side-nav";
import { MapIcon, CalendarIcon, RocketIcon, LayoutDashboardIcon, KanbanSquareIcon } from "lucide-react";

export default function PlanningLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sideNavItems = [
    { title: "Dashboard", href: "/planning", icon: <LayoutDashboardIcon className="h-4 w-4" /> },
    { title: "Boards", href: "/planning/boards", icon: <KanbanSquareIcon className="h-4 w-4" /> },
    { title: "Roadmaps", href: "/planning/roadmaps", icon: <MapIcon className="h-4 w-4" /> },
    { title: "PI Plans", href: "/planning/pi-plans", icon: <CalendarIcon className="h-4 w-4" /> },
    { title: "Release Tracker", href: "/planning/release-tracker", icon: <RocketIcon className="h-4 w-4" /> },
  ];

  return (
    <>
      <SideNav items={sideNavItems} title="Planning" />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </>
  );
}
