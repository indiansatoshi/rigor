"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Map,
    Lightbulb,
    Layers,
    Target,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
    { name: "Master View", href: "/", icon: LayoutDashboard },
    { name: "Strategy", href: "/strategy", icon: Target },
    { name: "Portfolio", href: "/portfolio", icon: Map },
    { name: "Product", href: "/product", icon: Lightbulb },
    { name: "Delivery", href: "/delivery", icon: Layers },
];

export function Sidebar() {
    const [isCollapsed, setIsCollapsed] = React.useState(false);
    const pathname = usePathname();

    return (
        <aside
            className={cn(
                "flex flex-col shrink-0 z-20 transition-all duration-300 relative m-2 rounded-2xl bg-white shadow-sm border border-gray-100",
                isCollapsed ? "w-16" : "w-64"
            )}
        >
            {/* Header */}
            <div className={cn(
                "h-16 flex items-center transition-all duration-300",
                isCollapsed ? "justify-center p-0" : "justify-between px-4"
            )}>
                {!isCollapsed && (
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center shrink-0 text-primary">
                            <Target className="h-5 w-5" />
                        </div>
                        <span className="font-semibold text-lg tracking-tight truncate text-gray-800">
                            StratAlign
                        </span>
                    </div>
                )}

                <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                        "h-8 w-8 text-gray-400 hover:bg-gray-100 hover:text-gray-900 transition-colors rounded-full",
                        isCollapsed && "h-10 w-10"
                    )}
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                >
                    {isCollapsed ? (
                        <ChevronRight className="h-5 w-5" />
                    ) : (
                        <ChevronLeft className="h-5 w-5" />
                    )}
                </Button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto overflow-x-hidden">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-4 px-4 py-3 text-sm font-medium rounded-full transition-all duration-200 group relative",
                                isActive
                                    ? "bg-primary/10 text-primary font-semibold"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                                isCollapsed && "justify-center px-0 w-10 h-10 mx-auto"
                            )}
                            title={isCollapsed ? item.name : undefined}
                        >
                            {isActive && !isCollapsed && (
                                <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-4 bg-primary rounded-full" />
                            )}
                            <item.icon className={cn("h-5 w-5 shrink-0 transition-colors", isActive ? "text-primary" : "text-gray-500 group-hover:text-gray-700")} />
                            <span
                                className={cn(
                                    "truncate transition-all duration-300",
                                    isCollapsed ? "opacity-0 w-0 hidden" : "opacity-100"
                                )}
                            >
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-gray-100">
                <div
                    className={cn(
                        "text-[10px] text-gray-400 text-center truncate transition-opacity duration-300",
                        isCollapsed ? "opacity-0 h-0" : "opacity-100"
                    )}
                >
                    Powered by StratAlign
                </div>
            </div>
        </aside>
    );
}
