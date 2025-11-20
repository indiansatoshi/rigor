import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
    status: string;
    className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
    let variantClass = "bg-chart-3"; // Default blue/info

    switch (status) {
        case "On Track":
        case "Defined":
        case "Validated":
        case "Done":
            variantClass = "bg-chart-1"; // Green
            break;
        case "At Risk":
        case "Delayed":
        case "Blocked":
            variantClass = "bg-destructive"; // Red
            break;
        case "In Progress":
        case "Planning":
            variantClass = "bg-accent"; // Blue/Accent
            break;
        case "Completed":
            variantClass = "bg-chart-2"; // Purple
            break;
        default:
            variantClass = "bg-chart-3";
    }

    return (
        <Badge className={`${variantClass} text-white text-xs ${className || ""}`}>
            {status}
        </Badge>
    );
}
