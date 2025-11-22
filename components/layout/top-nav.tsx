"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  ChevronDownIcon,
  CheckIcon,
  PlusIcon,
  BellIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SearchInput } from "@/components/ui/search-input";
import { useWorkspace } from "@/components/providers/workspace-context";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function TopNav() {
  const router = useRouter();
  const {
    organizations, selectedOrg, setSelectedOrg,
    projects, selectedProject, setSelectedProject,
    getProjectHierarchy
  } = useWorkspace();

  return (
    <div className="border-b border-border bg-card sticky top-0 z-50">
      <div className="flex h-14 items-center px-4 gap-4">
        {/* Sidebar Trigger */}
        <SidebarTrigger className="-ml-2" />

        {/* Separator */}
        <div className="h-6 w-px bg-border mx-2" />

        {/* 1. Organization Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 px-2 gap-1 text-sm font-medium min-w-[120px] justify-between bg-accent/50 text-primary hover:bg-accent/80 border border-primary/20">
              <span className="truncate font-semibold">{selectedOrg?.name || "Select Org"}</span>
              <ChevronDownIcon className="h-4 w-4 flex-shrink-0" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-64">
            <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">
              Organizations
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {organizations.map((org) => (
              <DropdownMenuItem
                key={org.id}
                onClick={() => setSelectedOrg(org)}
                className="flex items-center justify-between cursor-pointer"
              >
                <span className="font-medium">{org.name}</span>
                {selectedOrg?.id === org.id && (
                  <CheckIcon className="h-4 w-4 text-accent" />
                )}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <PlusIcon className="h-4 w-4 mr-2" />
              Create Organization
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <span className="text-muted-foreground/40 text-lg font-light">/</span>

        {/* 2. Project Selector (Context Switcher) */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 px-2 gap-1 text-sm font-medium min-w-[200px] max-w-[300px] justify-between bg-accent/50 text-primary hover:bg-accent/80 border border-primary/20"
              disabled={!selectedOrg}
            >
              <div className="flex flex-col items-start text-left overflow-hidden">
                <span className="truncate font-semibold w-full">
                  {selectedProject?.name || "Select Project"}
                </span>
                {selectedProject && (
                  <span className="text-[10px] text-muted-foreground truncate w-full font-normal">
                    {getProjectHierarchy(selectedProject)}
                  </span>
                )}
              </div>
              <ChevronDownIcon className="h-4 w-4 flex-shrink-0 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-80 max-h-[400px] overflow-y-auto">
            <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">
              Projects in {selectedOrg?.name}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            {projects.length > 0 ? (
              projects.map((project) => (
                <DropdownMenuItem
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(project);
                    router.push(`/projects/${project.id}`);
                  }}
                  className="flex flex-col items-start py-2 cursor-pointer gap-0.5"
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium">{project.name}</span>
                    {selectedProject?.id === project.id && (
                      <CheckIcon className="h-4 w-4 text-accent flex-shrink-0" />
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {getProjectHierarchy(project)}
                  </span>
                </DropdownMenuItem>
              ))
            ) : (
              <div className="p-2 text-sm text-muted-foreground text-center">
                No projects found
              </div>
            )}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <SearchInput
            placeholder="Search..."
            className="w-48 h-8 text-sm"
          />

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <BellIcon className="h-4 w-4" />
          </Button>

          {/* User Avatar */}
          <Avatar className="h-7 w-7">
            <AvatarImage src="/avatars/user.png" />
            <AvatarFallback className="bg-accent text-accent-foreground text-xs">
              U
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
