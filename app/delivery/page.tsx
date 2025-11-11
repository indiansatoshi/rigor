"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PlusIcon, CheckCircleIcon, AlertCircleIcon, ClockIcon } from "lucide-react";

export default function DeliveryDashboard() {
  const metrics = [
    {
      title: "Active Tasks",
      value: "47",
      change: "+8",
      period: "vs last week"
    },
    {
      title: "Completed Today",
      value: "12",
      change: "+3",
      period: "vs yesterday"
    },
    {
      title: "Blocked",
      value: "3",
      change: "-1",
      period: "vs last week"
    },
    {
      title: "Test Coverage",
      value: "87%",
      change: "+2%",
      period: "vs last sprint"
    }
  ];

  const deploymentPipeline = [
    {
      stage: "Development",
      status: "Active",
      statusColor: "bg-accent",
      tasks: 24,
      progress: 65
    },
    {
      stage: "Testing",
      status: "Active",
      statusColor: "bg-chart-3",
      tasks: 12,
      progress: 45
    },
    {
      stage: "Staging",
      status: "Ready",
      statusColor: "bg-chart-1",
      tasks: 5,
      progress: 100
    },
    {
      stage: "Production",
      status: "Stable",
      statusColor: "bg-chart-1",
      tasks: 0,
      progress: 100
    }
  ];

  const recentTasks = [
    {
      id: "PHX-201",
      title: "Implement user authentication flow",
      status: "In Progress",
      statusColor: "bg-accent",
      assignee: "John Doe",
      priority: "High"
    },
    {
      id: "PHX-202",
      title: "Fix payment gateway integration",
      status: "In Review",
      statusColor: "bg-chart-3",
      assignee: "Sarah Chen",
      priority: "Critical"
    },
    {
      id: "PHX-203",
      title: "Update API documentation",
      status: "Done",
      statusColor: "bg-chart-1",
      assignee: "Mike Johnson",
      priority: "Medium"
    }
  ];

  const testResults = [
    {
      suite: "Unit Tests",
      passed: 1247,
      failed: 3,
      coverage: 92
    },
    {
      suite: "Integration Tests",
      passed: 342,
      failed: 1,
      coverage: 85
    },
    {
      suite: "E2E Tests",
      passed: 89,
      failed: 2,
      coverage: 78
    }
  ];

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Delivery", href: "/delivery" },
      ]}
      currentPage="Dashboard"
    >
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Delivery Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Track development, deployment, and testing progress
          </p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <PlusIcon className="h-4 w-4 mr-2" />
          New Task
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
                <span className="text-muted-foreground ml-1">{metric.period}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-4 md:grid-cols-2 mb-6">
        {/* Deployment Pipeline */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Deployment Pipeline</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {deploymentPipeline.map((stage, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{stage.stage}</span>
                    <Badge className={`${stage.statusColor} text-white text-xs`}>
                      {stage.status}
                    </Badge>
                  </div>
                  <span className="text-xs text-muted-foreground">{stage.tasks} tasks</span>
                </div>
                <Progress value={stage.progress} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Test Results */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Test Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {testResults.map((test, index) => (
              <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{test.suite}</span>
                  <span className="text-xs text-muted-foreground">{test.coverage}% coverage</span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <CheckCircleIcon className="h-3 w-3 text-chart-1" />
                    <span className="text-chart-1">{test.passed} passed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <AlertCircleIcon className="h-3 w-3 text-destructive" />
                    <span className="text-destructive">{test.failed} failed</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Tasks */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Recent Tasks</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentTasks.map((task) => (
            <div key={task.id} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
              <div className="flex items-center gap-3 flex-1">
                <span className="text-xs font-semibold text-muted-foreground">{task.id}</span>
                <span className="text-sm font-medium text-foreground">{task.title}</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className={`${task.statusColor} text-white text-xs`}>
                  {task.status}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {task.priority}
                </Badge>
                <span className="text-xs text-muted-foreground min-w-[80px]">{task.assignee}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </PageWrapper>
  );
}