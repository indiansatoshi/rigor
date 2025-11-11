"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUpIcon, 
  TrendingDownIcon, 
  ArrowRightIcon,
  AlertCircleIcon,
  CheckCircleIcon,
  ClockIcon
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const overallMetrics = [
    {
      title: "Active Initiatives",
      value: "47",
      change: "+8",
      changeType: "positive",
      period: "vs last month",
      section: "All Sections"
    },
    {
      title: "Completion Rate",
      value: "78%",
      change: "+5%",
      changeType: "positive",
      period: "vs last quarter",
      section: "Overall"
    },
    {
      title: "At Risk Items",
      value: "12",
      change: "-3",
      changeType: "positive",
      period: "vs last week",
      section: "All Sections"
    },
    {
      title: "Team Velocity",
      value: "92",
      change: "+7",
      changeType: "positive",
      period: "story points/sprint",
      section: "Delivery"
    }
  ];

  const sectionOverview = [
    {
      name: "Strategy",
      href: "/",
      activeItems: 8,
      completedItems: 15,
      progress: 65,
      status: "On Track",
      statusColor: "bg-chart-1",
      recentActivity: "Q1 2025 OKRs defined"
    },
    {
      name: "Discovery",
      href: "/discovery",
      activeItems: 12,
      completedItems: 8,
      progress: 40,
      status: "In Progress",
      statusColor: "bg-chart-3",
      recentActivity: "3 hypotheses validated"
    },
    {
      name: "Planning",
      href: "/planning",
      activeItems: 18,
      completedItems: 14,
      progress: 78,
      status: "On Track",
      statusColor: "bg-chart-1",
      recentActivity: "Sprint 24 planning completed"
    },
    {
      name: "Delivery",
      href: "/delivery",
      activeItems: 47,
      completedItems: 32,
      progress: 68,
      status: "At Risk",
      statusColor: "bg-destructive",
      recentActivity: "3 tasks blocked"
    },
    {
      name: "Governance",
      href: "/governance",
      activeItems: 23,
      completedItems: 45,
      progress: 85,
      status: "On Track",
      statusColor: "bg-chart-1",
      recentActivity: "System uptime 99.8%"
    }
  ];

  const recentActivity = [
    {
      section: "Strategy",
      action: "OKR updated",
      item: "Achieve Product-Market Fit",
      user: "John Doe",
      time: "2 hours ago",
      icon: <CheckCircleIcon className="h-4 w-4 text-chart-1" />
    },
    {
      section: "Delivery",
      action: "Task blocked",
      item: "Fix payment gateway integration",
      user: "Sarah Chen",
      time: "3 hours ago",
      icon: <AlertCircleIcon className="h-4 w-4 text-destructive" />
    },
    {
      section: "Discovery",
      action: "Hypothesis validated",
      item: "Users prefer video tutorials",
      user: "Mike Johnson",
      time: "5 hours ago",
      icon: <CheckCircleIcon className="h-4 w-4 text-chart-1" />
    },
    {
      section: "Planning",
      action: "Release scheduled",
      item: "Mobile App v2.0",
      user: "Lisa Wang",
      time: "1 day ago",
      icon: <ClockIcon className="h-4 w-4 text-chart-3" />
    }
  ];

  const upcomingDeadlines = [
    {
      title: "Q1 2025 Planning Complete",
      section: "Strategy",
      dueDate: "Dec 15, 2024",
      daysLeft: 4,
      priority: "High"
    },
    {
      title: "Mobile App v2.0 Release",
      section: "Planning",
      dueDate: "Dec 20, 2024",
      daysLeft: 9,
      priority: "Critical"
    },
    {
      title: "Customer feedback analysis",
      section: "Discovery",
      dueDate: "Dec 22, 2024",
      daysLeft: 11,
      priority: "Medium"
    }
  ];

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Home" },
      ]}
      currentPage="Dashboard"
    >
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Home Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Overview of all sections and recent activity
          </p>
        </div>
      </div>

      {/* Overall Metrics */}
      <div className="grid gap-4 md:grid-cols-4 mb-6">
        {overallMetrics.map((metric, index) => (
          <Card key={index} className="bg-card border-border">
            <CardContent className="p-6">
              <p className="text-xs text-muted-foreground mb-1">{metric.section}</p>
              <p className="text-sm text-muted-foreground mb-2">{metric.title}</p>
              <p className="text-3xl font-bold text-foreground mb-2">{metric.value}</p>
              <div className="flex items-center gap-1 text-sm">
                {metric.changeType === "positive" && (
                  <TrendingUpIcon className="h-4 w-4 text-chart-1" />
                )}
                {metric.changeType === "negative" && (
                  <TrendingDownIcon className="h-4 w-4 text-destructive" />
                )}
                <span className={metric.changeType === "positive" ? "text-chart-1" : "text-destructive"}>
                  {metric.change}
                </span>
                <span className="text-muted-foreground ml-1">{metric.period}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Section Overview */}
      <Card className="bg-card border-border mb-6">
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
      <div className="grid gap-4 md:grid-cols-2">
        {/* Recent Activity */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
                <div className="mt-0.5">{activity.icon}</div>
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
        <Card className="bg-card border-border">
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
                        className={`text-xs ${
                          deadline.priority === "Critical" 
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
    </PageWrapper>
  );
}
