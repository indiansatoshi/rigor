"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useTeam } from "@/components/team-context";

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
  const resolvedBreadcrumbs = (() => {
    if (breadcrumbs.length === 0 && activeTeam) {
      return [{ label: activeTeam.name, href: "#" }];
    }
    return breadcrumbs.map((b) => ({
      ...b,
      label: b.label === "Default Workspace" && activeTeam ? activeTeam.name : b.label,
    }));
  })();

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              {resolvedBreadcrumbs.map((breadcrumb, index) => (
                <div key={index} className="contents">
                  <BreadcrumbItem className="hidden md:block">
                    {breadcrumb.href ? (
                      <BreadcrumbLink href={breadcrumb.href}>
                        {breadcrumb.label}
                      </BreadcrumbLink>
                    ) : (
                      <span>{breadcrumb.label}</span>
                    )}
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                </div>
              ))}
              <BreadcrumbItem>
                <BreadcrumbPage>{currentPage}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        {children}
      </div>
    </>
  );
}
