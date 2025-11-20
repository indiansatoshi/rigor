import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
    status?: string;
    priority?: "High" | "Medium" | "Low";
    variant?: "success" | "warning" | "error" | "info" | "neutral";
    className?: string;
}

export function StatusBadge({ status, priority, variant, className }: StatusBadgeProps) {
    let variantClass = "bg-chart-3 text-white"; // Default blue/info

    // Priority variants
    if (priority) {
        switch (priority) {
            case "High":
                variantClass = "bg-destructive text-destructive-foreground";
                break;
            case "Medium":
                variantClass = "bg-chart-4 text-white"; // Warning yellow
                break;
            case "Low":
                variantClass = "bg-chart-1 text-white"; // Success green
                break;
        }
        return (
            <Badge className={cn(variantClass, "text-xs", className)}>
                {priority}
            </Badge>
        );
    }

    // Variant-based
    if (variant) {
        switch (variant) {
            case "success":
                variantClass = "bg-chart-1 text-white";
                break;
            case "warning":
                variantClass = "bg-chart-4 text-white";
                break;
            case "error":
                variantClass = "bg-destructive text-destructive-foreground";
                break;
            case "info":
                variantClass = "bg-chart-3 text-white";
                break;
            case "neutral":
                variantClass = "bg-secondary text-secondary-foreground";
                break;
        }
    }
    // Status-based (legacy support)
    else if (status) {
        switch (status) {
            case "On Track":
            case "Defined":
            case "Validated":
            case "Done":
                variantClass = "bg-chart-1 text-white"; // Green
                break;
            case "At Risk":
            case "Delayed":
            case "Blocked":
                variantClass = "bg-destructive text-destructive-foreground"; // Red
                break;
            case "In Progress":
            case "Planning":
                variantClass = "bg-accent text-accent-foreground"; // Blue/Accent
                break;
            case "Completed":
                variantClass = "bg-chart-2 text-white"; // Purple
                break;
        }
    }

    return (
        <Badge className={cn(variantClass, "text-xs", className)}>
            {status || priority || "Status"}
        </Badge>
    );
}
