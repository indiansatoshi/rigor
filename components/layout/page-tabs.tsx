"use client";

import { cn } from "@/lib/utils";

export interface PageTab {
    id: string;
    label: string;
}

interface PageTabsProps {
    tabs: PageTab[];
    activeTab: string;
    onTabChange: (tabId: string) => void;
    className?: string;
}

/**
 * PageTabs - Standard tab navigation component
 * 
 * Provides consistent tab styling aligned with Atlassian Design System.
 * Uses bottom border to indicate active state.
 * 
 * @example
 * ```tsx
 * const tabs = [
 *   { id: 'overview', label: 'Overview' },
 *   { id: 'details', label: 'Details' },
 * ];
 * 
 * <PageTabs 
 *   tabs={tabs} 
 *   activeTab={activeTab} 
 *   onTabChange={setActiveTab}
 * />
 * ```
 */
export function PageTabs({ tabs, activeTab, onTabChange, className }: PageTabsProps) {
    return (
        <div className={cn("flex items-center gap-6 border-b border-border px-1", className)}>
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    className={cn(
                        "pb-3 text-sm font-medium transition-colors border-b-2 -mb-px",
                        activeTab === tab.id
                            ? "border-primary text-primary"
                            : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                    )}
                    onClick={() => onTabChange(tab.id)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
}
