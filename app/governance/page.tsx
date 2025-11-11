"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PlusIcon, TrendingUpIcon, TrendingDownIcon, AlertTriangleIcon } from "lucide-react";

export default function GovernanceDashboard() {
  const metrics = [
    {
      title: "System Uptime",
      value: "99.8%",
      change: "+0.2%",
      changeType: "positive",
      period: "vs last month"
    },
    {
      title: "Open Support Tickets",
      value: "23",
      change: "-5",
      changeType: "positive",
      period: "vs last week"
    },
    {
      title: "Customer Satisfaction",
      value: "4.6/5",
      change: "+0.3",
      changeType: "positive",
      period: "vs last month"
    },
    {
      title: "Feedback Items",
      value: "47",
      change: "+12",
      changeType: "neutral",
      period: "this month"
    }
  ];

  const operationalMetrics = [
    {
      name: "API Response Time",
      value: 145,
      unit: "ms",
      status: "Good",
      statusColor: "bg-chart-1",
      threshold: 200
    },
    {
      name: "Error Rate",
      value: 0.3,
      unit: "%",
      status: "Good",
      statusColor: "bg-chart-1",
      threshold: 1
    },
    {
      name: "Database Load",
      value: 67,
      unit: "%",
      status: "Warning",
      statusColor: "bg-chart-3",
      threshold: 80
    }
  ];

  const supportTickets = [
    {
      id: "SUP-401",
      title: "Unable to export reports",
      priority: "High",
      priorityColor: "bg-destructive",
      status: "In Progress",
      assignee: "Sarah Chen",
      age: "2 hours"
    },
    {
      id: "SUP-402",
      title: "Feature request: Dark mode",
      priority: "Low",
      priorityColor: "bg-chart-1",
      status: "Planned",
      assignee: "Mike Johnson",
      age: "1 day"
    },
    {
      id: "SUP-403",
      title: "Login issues on mobile",
      priority: "Critical",
      priorityColor: "bg-destructive",
      status: "Resolved",
      assignee: "John Doe",
      age: "3 hours"
    }
  ];

  const feedbackTrends = [
    {
      category: "Feature Requests",
      count: 24,
      trend: "+8",
      trendType: "up"
    },
    {
      category: "Bug Reports",
      count: 12,
      trend: "-3",
      trendType: "down"
    },
    {
      category: "Usability Issues",
      count: 8,
      trend: "+2",
      trendType: "up"
    },
    {
      category: "Performance",
      count: 3,
      trend: "-1",
      trendType: "down"
    }
  ];

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Governance", href: "/governance" },
      ]}
      currentPage="Dashboard"
    >
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Governance Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Monitor operations, support, and customer feedback
          </p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <PlusIcon className="h-4 w-4 mr-2" />
          New Ticket
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
                {metric.changeType === "positive" && (
                  <TrendingUpIcon className="h-4 w-4 text-chart-1" />
                )}
                {metric.changeType === "negative" && (
                  <TrendingDownIcon className="h-4 w-4 text-destructive" />
                )}
                <span className={metric.changeType === "positive" ? "text-chart-1" : metric.changeType === "negative" ? "text-destructive" : "text-muted-foreground"}>
                  {metric.change}
                </span>
                <span className="text-muted-foreground ml-1">{metric.period}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 md:grid-cols-2 mb-6">
        {/* Operational Metrics */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Operational Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {operationalMetrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{metric.name}</span>
                  <div className="flex items-center gap-2">
                    <Badge className={`${metric.statusColor} text-white text-xs`}>
                      {metric.status}
                    </Badge>
                    <span className="text-sm font-semibold text-foreground">
                      {metric.value}{metric.unit}
                    </span>
                  </div>
                </div>
                <Progress value={(metric.value / metric.threshold) * 100} />
                <p className="text-xs text-muted-foreground">
                  Threshold: {metric.threshold}{metric.unit}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Feedback Trends */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Feedback Trends</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {feedbackTrends.map((feedback, index) => (
              <div key={index} className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0">
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{feedback.category}</p>
                  <p className="text-xs text-muted-foreground mt-1">{feedback.count} items</p>
                </div>
                <div className="flex items-center gap-1">
                  {feedback.trendType === "up" ? (
                    <TrendingUpIcon className="h-4 w-4 text-chart-1" />
                  ) : (
                    <TrendingDownIcon className="h-4 w-4 text-chart-1" />
                  )}
                  <span className="text-sm font-medium text-chart-1">{feedback.trend}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Support Tickets */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Recent Support Tickets</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {supportTickets.map((ticket) => (
            <div key={ticket.id} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
              <div className="flex items-center gap-3 flex-1">
                <span className="text-xs font-semibold text-muted-foreground">{ticket.id}</span>
                <span className="text-sm font-medium text-foreground">{ticket.title}</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className={`${ticket.priorityColor} text-white text-xs`}>
                  {ticket.priority}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {ticket.status}
                </Badge>
                <span className="text-xs text-muted-foreground min-w-[80px]">{ticket.assignee}</span>
                <span className="text-xs text-muted-foreground min-w-[60px]">{ticket.age}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </PageWrapper>
  );
}