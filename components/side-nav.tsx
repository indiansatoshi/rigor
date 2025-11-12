"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { useSidebar } from "@/components/sidebar-context";
import { HoverLabel } from "./hover-label";

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
      className={`border-r border-border bg-card transition-all duration-200 ${
        isCollapsed ? "w-12" : "w-60"
      }`}
      suppressHydrationWarning
    >
      <div className="flex flex-col h-full" suppressHydrationWarning>
        {/* Collapse Toggle - Moved to Top */}
        <div className="border-b border-border p-2 flex items-center justify-between" suppressHydrationWarning>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleToggle}
            suppressHydrationWarning
          >
            <ChevronRightIcon
              className={`h-4 w-4 transition-transform ${
                isCollapsed ? "" : "rotate-180"
              }`}
              suppressHydrationWarning
            />
          </Button>
          {title && (
            <h2 
              className={`text-sm font-semibold text-foreground flex-1 ml-2 ${
                isCollapsed ? "hidden" : ""
              }`}
              suppressHydrationWarning
            >
              {title}
            </h2>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 py-2" suppressHydrationWarning>
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              <div className="relative group">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`w-full justify-start px-3 h-9 ${
                    isCollapsed ? "px-2" : ""
                  } ${
                    isActive(item.href)
                      ? "bg-accent/10 text-accent font-medium hover:bg-accent/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  suppressHydrationWarning
                >
                  {item.icon && (
                    <span className={isCollapsed ? "" : "mr-2"} suppressHydrationWarning>
                      {item.icon}
                    </span>
                  )}
                  <span className={`text-sm ${isCollapsed ? "hidden" : ""}`} suppressHydrationWarning>
                    {item.title}
                  </span>
                  <div 
                    className={`ml-auto w-1 h-4 bg-accent rounded-full ${
                      isActive(item.href) && !isCollapsed ? "" : "hidden"
                    }`}
                    suppressHydrationWarning
                  />
                </Button>
                {/* Hover Label for Collapsed State */}
                <HoverLabel title={item.title} isCollapsed={isCollapsed} />
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
