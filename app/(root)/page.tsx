"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ArrowRightIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  ClockIcon
} from "lucide-react";
import Link from "next/link";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { PageSection } from "@/components/layout/page-section";
import { MetricCard } from "@/components/dashboard/metric-card";
import {
  homeMetrics,
  sectionOverview,
  recentActivity,
  upcomingDeadlines
} from "@/lib/mock-data";

export default function HomePage() {

  return (
    <PageWrapper
      breadcrumbs={[]}
      currentPage="Dashboard"
    >
      <DashboardHeader
        title="Home Dashboard"
        description="Overview of all sections and recent activity"
      />

      <PageSection>
        {/* Overall Metrics */}
        <div className="grid gap-6 md:grid-cols-4">
          {homeMetrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} />
          ))}
        </div>

        {/* Section Overview */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Section Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {sectionOverview.map((section, index) => (
              <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Link href={section.href}>
                      <h3 className="text-base font-semibold text-foreground hover:text-accent transition-colors cursor-pointer">
                        {section.name}
                      </h3>
                    </Link>
                    <Badge className={`${section.statusColor} text-white text-xs`}>
                      {section.status}
                    </Badge>
                  </div>
                  <Link href={section.href}>
                    <Button variant="ghost" size="sm" className="text-accent">
                      View Details
                      <ArrowRightIcon className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-foreground">{section.progress}%</span>
                  </div>
                  <Progress value={section.progress} />
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{section.activeItems} active • {section.completedItems} completed</span>
                    <span>{section.recentActivity}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Bottom Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
                  <div className="mt-0.5">
                    {activity.iconType === "check" && <CheckCircleIcon className="h-4 w-4 text-chart-1" />}
                    {activity.iconType === "alert" && <AlertCircleIcon className="h-4 w-4 text-destructive" />}
                    {activity.iconType === "clock" && <ClockIcon className="h-4 w-4 text-chart-3" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="outline" className="text-xs">
                        {activity.section}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                    <p className="text-sm text-foreground font-medium truncate">
                      {activity.action}: {activity.item}
                    </p>
                    <p className="text-xs text-muted-foreground">by {activity.user}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Upcoming Deadlines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingDeadlines.map((deadline, index) => (
                <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground mb-1">{deadline.title}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {deadline.section}
                        </Badge>
                        <Badge
                          className={`text-xs ${deadline.priority === "Critical"
                            ? "bg-destructive text-white"
                            : deadline.priority === "High"
                              ? "bg-yellow-500 text-white"
                              : "bg-chart-1 text-white"
                            }`}
                        >
                          {deadline.priority}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">{deadline.dueDate}</p>
                      <p className="text-sm font-semibold text-foreground">{deadline.daysLeft} days</p>
                    </div>
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
