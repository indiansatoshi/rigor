"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

interface SubNavProps {
  items: {
    title: string;
    href: string;
  }[];
}

export function SubNav({ items }: SubNavProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <div className="border-b border-border bg-background">
      <div className="flex h-12 items-center px-6 gap-1">
        {items.map((item) => (
          <Link key={item.href} href={item.href}>
            <Button
              variant="ghost"
              className={
                isActive(item.href)
                  ? "text-accent font-medium border-b-2 border-accent rounded-none"
                  : "text-muted-foreground"
              }
            >
              {item.title}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
