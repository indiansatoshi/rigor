"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { MetricCard } from "@/components/dashboard/metric-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { strategyMetrics, companyOKRs, leanCanvasSections } from "@/lib/mock-data";

export default function StrategyDashboard() {
  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Strategy", href: "/strategy" },
      ]}
      currentPage="Dashboard"
    >
      <DashboardHeader
        title="Strategy Dashboard"
        description="Track OKRs, Lean Canvas, and strategic metrics"
      />

      {/* Metrics Cards */}
      <div className="grid gap-6 md:grid-cols-3 mb-6">
        {strategyMetrics.map((metric, index) => (
          <MetricCard key={index} metric={metric} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 mb-6">
        {/* Company OKRs */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Company OKRs - Q4 2024</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {companyOKRs.map((okr, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-foreground">{okr.objective}</h4>
                  <span className="text-sm font-semibold text-foreground">{okr.progress}%</span>
                </div>
                <Progress value={okr.progress} />
                <div className="space-y-2">
                  {okr.keyResults.map((kr, krIndex) => (
                    <div key={krIndex} className="text-xs text-muted-foreground pl-4 border-l-2 border-border">
                      <p>{kr.description}</p>
                      <p className="mt-1">
                        <span className="font-medium text-foreground">{kr.current}</span>
                        <span className="mx-1">/</span>
                        <span>{kr.target}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Lean Canvas Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Lean Canvas Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {leanCanvasSections.map((section, index) => (
              <div key={index} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                <div>
                  <p className="text-sm font-medium text-foreground">{section.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{section.items} items</p>
                </div>
                <StatusBadge status={section.status} />
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              View Full Canvas
            </Button>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  );
}

