"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { useTeam } from "@/components/team-context";

export default function Page() {
  const { activeTeam } = useTeam();
  const breadcrumbs = activeTeam ? [{ label: activeTeam.name, href: "#" }] : [];

  return (
    <PageWrapper breadcrumbs={breadcrumbs} currentPage="Dashboard">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
      </div>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </PageWrapper>
  );
}
