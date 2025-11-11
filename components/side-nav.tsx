"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import { useState } from "react";

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
  const [isCollapsed, setIsCollapsed] = useState(false);

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div
      className={`border-r border-border bg-card transition-all duration-200 ${
        isCollapsed ? "w-12" : "w-60"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        {title && !isCollapsed && (
          <div className="px-4 py-3 border-b border-border">
            <h2 className="text-sm font-semibold text-foreground">{title}</h2>
          </div>
        )}

        {/* Navigation Items */}
        <nav className="flex-1 py-2">
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
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
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {!isCollapsed && <span className="text-sm">{item.title}</span>}
                {isActive(item.href) && !isCollapsed && (
                  <div className="ml-auto w-1 h-4 bg-accent rounded-full" />
                )}
              </Button>
            </Link>
          ))}
        </nav>

        {/* Collapse Toggle */}
        <div className="border-t border-border p-2">
          <Button
            variant="ghost"
            size="icon"
            className="w-full h-8"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <ChevronRightIcon
              className={`h-4 w-4 transition-transform ${
                isCollapsed ? "" : "rotate-180"
              }`}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
