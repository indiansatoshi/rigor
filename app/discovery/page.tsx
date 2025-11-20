"use client";

import { PageWrapper } from "@/components/layout/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PlusIcon } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { PageSection } from "@/components/layout/page-section";
import { MetricCard } from "@/components/dashboard/metric-card";

export default function DiscoveryDashboard() {
  const metrics = [
    {
      title: "Active Hypotheses",
      value: "12",
      change: "+3",
      changeType: "positive" as const,
      period: "vs last month"
    },
    {
      title: "Validated",
      value: "8",
      change: "+2",
      changeType: "positive" as const,
      period: "this quarter"
    },
    {
      title: "In Testing",
      value: "4",
      change: "0",
      changeType: "neutral" as const,
      period: "currently"
    },
    {
      title: "Success Rate",
      value: "67%",
      change: "+5%",
      changeType: "positive" as const,
      period: "vs last quarter"
    }
  ];

  const recentHypotheses = [
    {
      id: "HYP-101",
      title: "Users prefer video tutorials over text documentation",
      status: "Testing",
      statusColor: "bg-chart-3",
      confidence: 75,
      owner: "Sarah Chen"
    },
    {
      id: "HYP-102",
      title: "Onboarding flow reduces time to first value",
      status: "Validated",
      statusColor: "bg-chart-1",
      confidence: 90,
      owner: "Mike Johnson"
    },
    {
      id: "HYP-103",
      title: "Pricing page redesign increases conversions",
      status: "Testing",
      statusColor: "bg-chart-3",
      confidence: 60,
      owner: "Lisa Wang"
    }
  ];

  const ostProgress = [
    {
      outcome: "Increase user engagement",
      progress: 65,
      opportunities: 3,
      solutions: 5
    },
    {
      outcome: "Reduce customer churn",
      progress: 45,
      opportunities: 2,
      solutions: 3
    },
    {
      outcome: "Improve product adoption",
      progress: 80,
      opportunities: 4,
      solutions: 7
    }
  ];

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Discovery", href: "/discovery" },
      ]}
      currentPage="Dashboard"
    >
      <DashboardHeader
        title="Discovery Dashboard"
        description="Track hypotheses validation and opportunity solution trees"
      >
        <Button variant="default">
          <PlusIcon className="h-4 w-4 mr-2" />
          New Hypothesis
        </Button>
      </DashboardHeader>

      <PageSection>
        {/* Metrics Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Recent Hypotheses */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold">Recent Hypotheses</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              {recentHypotheses.map((hypothesis) => (
                <div key={hypothesis.id} className="border-b border-border/50 pb-3 last:border-0 last:pb-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-muted-foreground">{hypothesis.id}</span>
                        <Badge className={`${hypothesis.statusColor} text-white text-xs`}>
                          {hypothesis.status}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium text-foreground leading-snug">{hypothesis.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-xs text-muted-foreground">Confidence:</span>
                      <Progress value={hypothesis.confidence} className="flex-1 max-w-[100px]" />
                      <span className="text-xs font-medium text-foreground">{hypothesis.confidence}%</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{hypothesis.owner}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* OST Progress */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold">OST Progress</CardTitle>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              {ostProgress.map((ost, index) => (
                <div key={index} className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{ost.outcome}</span>
                    <span className="text-sm font-semibold text-foreground">{ost.progress}%</span>
                  </div>
                  <Progress value={ost.progress} />
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{ost.opportunities} Opportunities</span>
                    <span>{ost.solutions} Solutions</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </PageSection>
    </PageWrapper>
  );
}