"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { useState, useEffect } from "react";

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
  const [isCollapsed, setIsCollapsed] = useState(() => {
    // Initialize state from localStorage on first render
    if (typeof window !== "undefined") {
      const savedState = localStorage.getItem("sideNavCollapsed");
      return savedState !== null ? savedState === "true" : true;
    }
    return true;
  });
  const [isMounted, setIsMounted] = useState(false);

  // Mark component as mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Save collapsed state to localStorage whenever it changes
  const handleToggle = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    if (typeof window !== "undefined") {
      localStorage.setItem("sideNavCollapsed", String(newState));
    }
  };

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div
      className={`border-r border-border bg-card ${
        isMounted ? "transition-all duration-200" : ""
      } ${isCollapsed ? "w-12" : "w-60"}`}
    >
      <div className="flex flex-col h-full">
        {/* Collapse Toggle - Moved to Top */}
        <div className="border-b border-border p-2 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleToggle}
          >
            <ChevronRightIcon
              className={`h-4 w-4 transition-transform ${
                isCollapsed ? "" : "rotate-180"
              }`}
            />
          </Button>
          {title && !isCollapsed && (
            <h2 className="text-sm font-semibold text-foreground flex-1 ml-2">{title}</h2>
          )}
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 py-2">
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
                >
                  {item.icon && <span className={isCollapsed ? "" : "mr-2"}>{item.icon}</span>}
                  {!isCollapsed && <span className="text-sm">{item.title}</span>}
                  {isActive(item.href) && !isCollapsed && (
                    <div className="ml-auto w-1 h-4 bg-accent rounded-full" />
                  )}
                </Button>
                {/* Hover Label for Collapsed State */}
                {isCollapsed && (
                  <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md shadow-md border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                    {item.title}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
