"use client"

import { useTeam } from "@/components/providers/team-context";
import { PageBreadcrumbs } from "@/components/layout/page-breadcrumbs";

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
      <PageBreadcrumbs items={allBreadcrumbs} />
      <div className="p-6 space-y-6">
        {children}
      </div>
    </div>
  );
}
