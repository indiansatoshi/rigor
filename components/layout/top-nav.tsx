"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchIcon, BellIcon, HelpCircleIcon, SettingsIcon, ChevronDownIcon, CheckIcon, PlusIcon } from "lucide-react";
import { useWorkspace } from "@/components/providers/workspace-context";
import { cn } from "@/lib/utils";

export function TopNav() {
  const pathname = usePathname();
  const { selectedWorkspace, setSelectedWorkspace, workspaces } = useWorkspace();

  const navItems = [
    { title: "Strategy", href: "/strategy" },
    { title: "Discovery", href: "/discovery" },
    { title: "Planning", href: "/planning" },
    { title: "Delivery", href: "/delivery" },
    { title: "Governance", href: "/governance" },
  ];

  const isActive = (href: string) => {
    // Exact match for root path
    if (href === "/" && pathname === "/") return false;
    return pathname.startsWith(href);
  };

  return (
    <div className="border-b border-border bg-card sticky top-0 z-50">
      <div className="flex h-14 items-center px-4 gap-4">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-base font-semibold text-foreground">Outliv</span>
        </Link>

        {/* Workspace Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 px-2 gap-1 text-sm font-medium">
              {selectedWorkspace.name}
              <ChevronDownIcon className="h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-64">
            <DropdownMenuLabel className="text-xs text-muted-foreground font-normal">
              Workspaces
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {workspaces.map((workspace) => (
              <DropdownMenuItem
                key={workspace.id}
                onClick={() => setSelectedWorkspace(workspace)}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex flex-col">
                  <span className="font-medium">{workspace.name}</span>
                  <span className="text-xs text-muted-foreground">{workspace.role}</span>
                </div>
                {selectedWorkspace.id === workspace.id && (
                  <CheckIcon className="h-4 w-4 text-accent" />
                )}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <PlusIcon className="h-4 w-4 mr-2" />
              Create workspace
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Main Navigation */}
        <nav className="flex items-center gap-1 flex-1 h-full">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="h-full flex items-center">
              <div
                className={cn(
                  "h-full flex items-center px-3 text-sm font-medium transition-colors border-b-2",
                  isActive(item.href)
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-primary hover:border-primary"
                )}
              >
                {item.title}
              </div>
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-8 w-48 h-8 text-sm"
            />
          </div>

          {/* Settings */}
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <SettingsIcon className="h-4 w-4" />
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <BellIcon className="h-4 w-4" />
          </Button>

          {/* Help */}
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <HelpCircleIcon className="h-4 w-4" />
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
