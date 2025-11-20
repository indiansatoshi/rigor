"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { useSidebar } from "@/components/layout/sidebar-context";
import { HoverLabel } from "./hover-label";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
}

interface SideNavProps {
  items: NavItem[];
  title?: string;
}

export function SideNav({ items, title }: SideNavProps) {
  const pathname = usePathname();
  const { isCollapsed, setIsCollapsed } = useSidebar();

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div
      className={`border-r border-border bg-card transition-all duration-200 ${isCollapsed ? "w-12" : "w-56"
        }`}
      suppressHydrationWarning
    >
      <div className="flex flex-col h-full" suppressHydrationWarning>
        {/* Collapse Toggle - Moved to Top */}
        <div className={cn("border-b border-border p-2 flex items-center", isCollapsed ? "justify-center" : "justify-between")} suppressHydrationWarning>
          {title && !isCollapsed && (
            <h2
              className="text-sm font-semibold text-foreground ml-2"
              suppressHydrationWarning
            >
              {title}
            </h2>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleToggle}
            suppressHydrationWarning
          >
            <ChevronRightIcon
              className={`h-4 w-4 transition-transform ${isCollapsed ? "" : "rotate-180"
                }`}
              suppressHydrationWarning
            />
          </Button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 py-2" suppressHydrationWarning>
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              <div className="relative group">
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "w-full h-8",
                    isCollapsed ? "justify-center px-0" : "justify-start px-3",
                    isActive(item.href)
                      ? "bg-accent text-primary hover:bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  suppressHydrationWarning
                >
                  {item.icon && (
                    <span className={isCollapsed ? "" : "mr-2"} suppressHydrationWarning>
                      {item.icon}
                    </span>
                  )}
                  <span className={cn("text-sm", isCollapsed ? "hidden" : "")} suppressHydrationWarning>
                    {item.title}
                  </span>
                  {/* Active indicator bar */}
                  <div
                    className={cn(
                      "ml-auto w-1 h-4 bg-primary rounded-full",
                      isActive(item.href) && !isCollapsed ? "" : "hidden"
                    )}
                  />
                </Button>
                {/* Hover Label for Collapsed State */}
                <HoverLabel title={item.title} isCollapsed={isCollapsed} />
              </div>
            </Link>
          ))}
        </nav>
      </div >
    </div >
  );
}
