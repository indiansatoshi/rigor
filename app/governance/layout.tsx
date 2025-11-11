"use client";

import { SideNav } from "@/components/side-nav";
import { SettingsIcon, HeadphonesIcon, MessageSquareIcon } from "lucide-react";

export default function GovernanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sideNavItems = [
    { title: "Operations", href: "/governance/operations", icon: <SettingsIcon className="h-4 w-4" /> },
    { title: "Customer Support", href: "/governance/customer-support", icon: <HeadphonesIcon className="h-4 w-4" /> },
    { title: "Feedback Loop", href: "/governance/feedback-loop", icon: <MessageSquareIcon className="h-4 w-4" /> },
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
