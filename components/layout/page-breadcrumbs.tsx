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
    <nav
      className="sticky top-0 z-10 flex items-center gap-1 text-sm h-12 border-b border-border bg-card"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center gap-1 px-3">
        <li>
          <Link
            href="/"
            className="text-muted-foreground hover:text-primary transition-colors p-1 rounded hover:bg-accent"
            aria-label="Home"
          >
            <HomeIcon className="h-4 w-4" />
          </Link>
        </li>
        <li>
          <ChevronRightIcon className="h-4 w-4 text-muted-foreground mx-0.5" aria-hidden="true" />
        </li>
        <li>
          <span className="text-muted-foreground px-1">{selectedWorkspace.name}</span>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <ChevronRightIcon className="h-4 w-4 text-muted-foreground mx-0.5" aria-hidden="true" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors px-1 rounded hover:bg-accent"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-semibold px-1" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
