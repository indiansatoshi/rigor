"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CalendarIcon } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { MetricCard } from "@/components/dashboard/metric-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { planningMetrics, upcomingMilestones, piProgress, roadmapItems } from "@/lib/mock-data";

export default function PlanningDashboard() {
  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Planning", href: "/planning" },
      ]}
      currentPage="Dashboard"
    >
      <DashboardHeader
        title="Planning Dashboard"
        description="Track roadmaps, PI plans, and release schedules"
      />

      {/* Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-4 mb-6">
        {planningMetrics.map((metric, index) => (
          <MetricCard key={index} metric={metric} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 md:grid-cols-2 mb-6">
        {/* Upcoming Milestones */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Upcoming Milestones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingMilestones.map((milestone, index) => (
              <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground mb-1">{milestone.title}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CalendarIcon className="h-3 w-3" />
                      <span>{milestone.date}</span>
                      <span>•</span>
                      <span>{milestone.team}</span>
                    </div>
                  </div>
                  <StatusBadge status={milestone.status} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* PI Progress */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">PI Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {piProgress.map((pi, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{pi.name}</span>
                  <span className="text-sm font-semibold text-foreground">{pi.progress}%</span>
                </div>
                <Progress value={pi.progress} />
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{pi.completed} of {pi.features} features completed</span>
                </div>
                <div className="flex items-center gap-1 flex-wrap">
                  {pi.teams.map((team, teamIndex) => (
                    <Badge key={teamIndex} variant="outline" className="text-xs">
                      {team}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Roadmap Items */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Roadmap Highlights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {roadmapItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
              <div className="flex items-center gap-3 flex-1">
                <span className="text-xs font-semibold text-muted-foreground">{item.id}</span>
                <span className="text-sm font-medium text-foreground">{item.title}</span>
              </div>
              <div className="flex items-center gap-3">
                <StatusBadge status={item.status} />
                <span className="text-xs text-muted-foreground min-w-[60px]">{item.quarter}</span>
                <span className="text-xs text-muted-foreground min-w-[80px]">{item.team}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </PageWrapper>
  );
}