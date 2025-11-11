"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export default function OKRsPage() {
  const okrs = [
    {
      objective: "Become the leading product management platform",
      progress: 65,
      status: "on-track",
      keyResults: [
        { description: "Reach 10,000 active users", current: 6500, target: 10000, unit: "users" },
        { description: "Achieve 95% customer satisfaction", current: 92, target: 95, unit: "%" },
        { description: "Launch in 5 new markets", current: 3, target: 5, unit: "markets" },
      ],
    },
    {
      objective: "Build a world-class engineering team",
      progress: 80,
      status: "on-track",
      keyResults: [
        { description: "Hire 15 senior engineers", current: 12, target: 15, unit: "hires" },
        { description: "Reduce deployment time to 10 minutes", current: 12, target: 10, unit: "min" },
        { description: "Achieve 90% test coverage", current: 85, target: 90, unit: "%" },
      ],
    },
    {
      objective: "Establish product-market fit",
      progress: 45,
      status: "at-risk",
      keyResults: [
        { description: "Conduct 50 customer interviews", current: 28, target: 50, unit: "interviews" },
        { description: "Achieve $500K MRR", current: 185, target: 500, unit: "K" },
        { description: "Reduce churn to below 3%", current: 5.2, target: 3, unit: "%" },
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-track":
        return "bg-chart-1";
      case "at-risk":
        return "bg-chart-2";
      case "off-track":
        return "bg-destructive";
      default:
        return "bg-muted";
    }
  };

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Default Workspace", href: "#" },
        { label: "Strategy", href: "/strategy" },
      ]}
      currentPage="OKRs"
    >
      <div className="space-y-6">
        {okrs.map((okr, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1 flex-1">
                  <CardTitle className="text-lg">{okr.objective}</CardTitle>
                  <div className="flex items-center gap-4">
                    <Badge variant="outline" className={getStatusColor(okr.status)}>
                      {okr.status.replace("-", " ")}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      {okr.progress}% complete
                    </span>
                  </div>
                </div>
              </div>
              <Progress value={okr.progress} className="mt-4" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="text-sm font-semibold">Key Results</h4>
                {okr.keyResults.map((kr, krIndex) => {
                  const krProgress = (kr.current / kr.target) * 100;
                  return (
                    <div key={krIndex} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{kr.description}</span>
                        <span className="font-medium">
                          {kr.current} / {kr.target} {kr.unit}
                        </span>
                      </div>
                      <Progress value={krProgress} className="h-2" />
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageWrapper>
  );
}
