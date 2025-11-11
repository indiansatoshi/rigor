"use client";

import { SideNav } from "@/components/side-nav";
import { PackageIcon, CodeIcon, TestTubeIcon } from "lucide-react";

export default function DeliveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sideNavItems = [
    { title: "Deployment", href: "/delivery/deployment", icon: <PackageIcon className="h-4 w-4" /> },
    { title: "Development", href: "/delivery/development", icon: <CodeIcon className="h-4 w-4" /> },
    { title: "Testing", href: "/delivery/testing", icon: <TestTubeIcon className="h-4 w-4" /> },
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
