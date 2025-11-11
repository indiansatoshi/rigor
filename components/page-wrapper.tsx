"use client"

import { useTeam } from "@/components/team-context";
import { PageBreadcrumbs } from "@/components/page-breadcrumbs";

interface PageWrapperProps {
  children: React.ReactNode;
  breadcrumbs?: {
    label: string;
    href?: string;
  }[];
  currentPage: string;
}

export function PageWrapper({ children, breadcrumbs = [], currentPage }: PageWrapperProps) {
  const { activeTeam } = useTeam();

  const allBreadcrumbs = [...breadcrumbs, { label: currentPage }];

  return (
    <div className="flex flex-col flex-1 bg-background">
      <div className="p-6 space-y-6">
        <PageBreadcrumbs items={allBreadcrumbs} />
        {children}
      </div>
    </div>
  );
}
