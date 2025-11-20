import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUpIcon, TrendingDownIcon } from "lucide-react";
import { Metric } from "@/types/domain";

interface MetricCardProps {
    metric: Metric;
}

export function MetricCard({ metric }: MetricCardProps) {
    const isPositive = metric.changeType === "positive";
    const isNegative = metric.changeType === "negative";
    const isNeutral = metric.changeType === "neutral";

    const changeColor = isPositive ? "text-chart-1" : isNegative ? "text-destructive" : "text-muted-foreground";
    const Icon = isPositive ? TrendingUpIcon : isNegative ? TrendingDownIcon : null;

    return (
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                <div className="flex items-center text-xs">
                    {Icon && <Icon className={`h-3.5 w-3.5 ${changeColor} mr-1`} />}
                    <span className={`font-medium ${changeColor}`}>
                        {metric.change}
                    </span>
                    {metric.period && <span className="text-muted-foreground ml-1.5">{metric.period}</span>}
                </div>
            </CardContent>
        </Card>
    );
}
