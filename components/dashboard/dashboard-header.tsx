import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

interface DashboardHeaderProps {
    title: string;
    description: string;
    actionLabel?: string;
    onAction?: () => void;
}

export function DashboardHeader({ title, description, actionLabel = "New Initiative", onAction }: DashboardHeaderProps) {
    return (
        <div className="flex items-center justify-between mb-6">
            <div>
                <h1 className="text-2xl font-semibold text-foreground">{title}</h1>
                <p className="text-sm text-muted-foreground mt-1">
                    {description}
                </p>
            </div>
            <Button
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={onAction}
            >
                <PlusIcon className="h-4 w-4 mr-2" />
                {actionLabel}
            </Button>
        </div>
    );
}
