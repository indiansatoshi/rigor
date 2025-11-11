"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { SearchIcon, BellIcon, HelpCircleIcon, SettingsIcon } from "lucide-react";

export function TopNav() {
  const pathname = usePathname();

  const navItems = [
    { title: "Strategy", href: "/strategy" },
    { title: "Discovery", href: "/discovery" },
    { title: "Planning", href: "/planning" },
    { title: "Delivery", href: "/delivery" },
    { title: "Governance", href: "/governance" },
  ];

  const isActive = (href: string) => {
    return pathname.startsWith(href);
  };

  return (
    <div className="border-b border-border bg-card sticky top-0 z-50">
      <div className="flex h-14 items-center px-4 gap-4">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-2 mr-2">
          <div className="flex items-center justify-center w-7 h-7 rounded bg-accent">
            <svg
              className="w-4 h-4 text-accent-foreground"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-base font-semibold text-foreground">Strate-Align</span>
        </Link>

        {/* Main Navigation */}
        <nav className="flex items-center gap-0 flex-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                size="sm"
                className={
                  isActive(item.href)
                    ? "bg-accent/10 text-accent font-medium hover:bg-accent/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }
              >
                {item.title}
              </Button>
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
              className="pl-8 w-48 h-8 bg-muted/50 border-border text-sm"
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
