import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

interface DashboardHeaderProps {
    title: string;
    description: string;
    children?: React.ReactNode;
}

export function DashboardHeader({ title, description, children }: DashboardHeaderProps) {
    return (
        <div className="flex items-start justify-between gap-4 py-2 px-1.5 border-b border-border bg-background">
            <div className="flex-1">
                <h1 className="text-[32px] font-semibold text-foreground tracking-tight leading-tight">{title}</h1>
                <p className="text-sm text-muted-foreground mt-2 max-w-3xl">
                    {description}
                </p>
            </div>
            {children && (
                <div className="flex items-center gap-2 flex-shrink-0">
                    {children}
                </div>
            )}
        </div>
    );
}
