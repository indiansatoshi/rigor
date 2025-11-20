import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { Metric } from "@/types/domain";

interface MetricCardProps {
    metric: Metric;
}

export function MetricCard({ metric }: MetricCardProps) {
    const isPositive = metric.changeType === "positive";
    const isNegative = metric.changeType === "negative";

    // Determine color based on changeType. 
    // Note: In the original code, "positive" meant green (chart-1) and negative meant red (destructive).
    // We'll stick to that logic.
    const changeColor = isPositive ? "text-chart-1" : isNegative ? "text-destructive" : "text-muted-foreground";
    const Icon = isPositive ? ArrowUpIcon : isNegative ? ArrowDownIcon : null;

    return (
        <Card>
            <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
                <div className="flex items-center text-sm">
                    {Icon && <Icon className={`h-4 w-4 ${changeColor} mr-1`} />}
                    <span className={changeColor}>
                        {metric.change}
                    </span>
                    {metric.period && <span className="text-muted-foreground ml-1">{metric.period}</span>}
                </div>
            </CardContent>
        </Card>
    );
}
