"use client";

import { useEffect, useState } from "react";

export function HoverLabel({ title, isCollapsed }: { title: string; isCollapsed: boolean }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className={`absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md shadow-md border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 ${
        isCollapsed ? "" : "hidden"
      }`}
    >
      {title}
    </div>
  );
}
