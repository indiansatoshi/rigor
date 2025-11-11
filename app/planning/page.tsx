"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PlusIcon, CalendarIcon, AlertTriangleIcon } from "lucide-react";

export default function PlanningDashboard() {
  const metrics = [
    {
      title: "Active Initiatives",
      value: "18",
      change: "+4",
      period: "vs last quarter"
    },
    {
      title: "On Track",
      value: "14",
      change: "78%",
      period: "completion rate"
    },
    {
      title: "At Risk",
      value: "3",
      change: "-1",
      period: "vs last month"
    },
    {
      title: "Upcoming Releases",
      value: "5",
      change: "Next 30 days",
      period: ""
    }
  ];

  const upcomingMilestones = [
    {
      title: "Q1 2025 Planning Complete",
      date: "Dec 15, 2024",
      team: "Product",
      status: "On Track",
      statusColor: "bg-chart-1"
    },
    {
      title: "Mobile App v2.0 Release",
      date: "Dec 20, 2024",
      team: "Engineering",
      status: "At Risk",
      statusColor: "bg-destructive"
    },
    {
      title: "Marketing Campaign Launch",
      date: "Jan 5, 2025",
      team: "Marketing",
      status: "On Track",
      statusColor: "bg-chart-1"
    }
  ];

  const piProgress = [
    {
      name: "PI 2024.4",
      progress: 75,
      features: 24,
      completed: 18,
      teams: ["Platform", "Mobile", "Web"]
    },
    {
      name: "PI 2025.1",
      progress: 15,
      features: 32,
      completed: 5,
      teams: ["Platform", "Mobile", "Web", "Data"]
    }
  ];

  const roadmapItems = [
    {
      id: "INIT-101",
      title: "AI-Powered Search",
      quarter: "Q1 2025",
      status: "Planning",
      statusColor: "bg-chart-3",
      team: "Platform"
    },
    {
      id: "INIT-102",
      title: "Mobile Offline Mode",
      quarter: "Q1 2025",
      status: "In Progress",
      statusColor: "bg-accent",
      team: "Mobile"
    },
    {
      id: "INIT-103",
      title: "Advanced Analytics Dashboard",
      quarter: "Q2 2025",
      status: "Planning",
      statusColor: "bg-chart-3",
      team: "Data"
    }
  ];

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Planning", href: "/planning" },
      ]}
      currentPage="Dashboard"
    >
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Planning Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Track roadmaps, PI plans, and release schedules
          </p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <PlusIcon className="h-4 w-4 mr-2" />
          New Initiative
        </Button>
      </div>

      {/* Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-4 mb-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="bg-card border-border">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground mb-2">{metric.title}</p>
              <p className="text-3xl font-bold text-foreground mb-2">{metric.value}</p>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-muted-foreground">{metric.change}</span>
                {metric.period && <span className="text-muted-foreground ml-1">{metric.period}</span>}
              </div>
            </CardContent>
          </Card>
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
                  <Badge className={`${milestone.statusColor} text-white text-xs`}>
                    {milestone.status}
                  </Badge>
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
                <Badge className={`${item.statusColor} text-white text-xs`}>
                  {item.status}
                </Badge>
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