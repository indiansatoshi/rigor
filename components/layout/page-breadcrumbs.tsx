"use client";

import Link from "next/link";
import { ChevronRightIcon, HomeIcon } from "lucide-react";
import { useWorkspace } from "@/components/providers/workspace-context";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function PageBreadcrumbs({ items }: PageBreadcrumbsProps) {
  const { selectedWorkspace } = useWorkspace();

  return (
    <nav className="flex items-center gap-2 text-sm mb-4">
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <HomeIcon className="h-4 w-4" />
      </Link>
      <ChevronRightIcon className="h-4 w-4 text-muted-foreground" />
      <span className="text-muted-foreground">{selectedWorkspace.name}</span>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRightIcon className="h-4 w-4 text-muted-foreground" />
          {item.href ? (
            <Link
              href={item.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
