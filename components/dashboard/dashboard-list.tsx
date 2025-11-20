import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { ReactNode } from "react";

interface DashboardListProps<T> {
    title: string;
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;
    viewAllLink?: string;
    action?: ReactNode;
    className?: string;
}

export function DashboardList<T>({
    title,
    items,
    renderItem,
    viewAllLink,
    action,
    className
}: DashboardListProps<T>) {
    return (
        <Card className={className}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-base font-semibold">{title}</CardTitle>
                {action}
                {viewAllLink && !action && (
                    <Button variant="ghost" size="sm" className="h-8 text-xs text-muted-foreground hover:text-foreground">
                        View All <ArrowRightIcon className="ml-1 h-3 w-3" />
                    </Button>
                )}
            </CardHeader>
            <CardContent>
                <div className="space-y-0 divide-y divide-border/50">
                    {items.map((item, index) => (
                        <div key={index} className="py-3 first:pt-0 last:pb-0">
                            {renderItem(item, index)}
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
