"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { PageBreadcrumbs } from "@/components/page-breadcrumbs";
import { SideNav } from "@/components/side-nav";
import { useTeam } from "@/components/team-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowUpIcon, ArrowDownIcon, PlusIcon, LayoutDashboardIcon, TargetIcon, LayoutGridIcon } from "lucide-react";

export default function Page() {
  const { activeTeam } = useTeam();
  const breadcrumbs = activeTeam ? [{ label: activeTeam.name, href: "#" }] : [];

  const sideNavItems = [
    { title: "Dashboard", href: "/", icon: <LayoutDashboardIcon className="h-4 w-4" /> },
    { title: "Lean Canvas", href: "/strategy/lean-canvas", icon: <LayoutGridIcon className="h-4 w-4" /> },
    { title: "OKRs", href: "/strategy/okrs", icon: <TargetIcon className="h-4 w-4" /> },
  ];

  // Mock data for metrics
  const metrics = [
    {
      title: "Monthly Recurring Revenue",
      value: "$42,380",
      change: "+12.5%",
      changeType: "positive",
      period: "vs last month"
    },
    {
      title: "Customer Churn Rate",
      value: "2.1%",
      change: "-0.3%",
      changeType: "positive",
      period: "vs last month"
    },
    {
      title: "New Signups",
      value: "1,204",
      change: "+8%",
      changeType: "positive",
      period: "vs last month"
    }
  ];

  // Mock data for OKRs
  const okrs = [
    {
      title: "Objective 1: Achieve Product-Market Fit",
      progress: 85,
      status: "On Track"
    },
    {
      title: "Objective 2: Increase MRR to $50k",
      progress: 60,
      status: "At Risk"
    },
    {
      title: "Objective 3: Reduce Customer Churn to <2%",
      progress: 90,
      status: "On Track"
    }
  ];

  // Mock data for Priority Key Results
  const priorityKeyResults = [
    {
      title: "Increase user activation rate to 40%",
      current: "32% of 40%",
      status: "On Track",
      statusColor: "bg-chart-1"
    },
    {
      title: "Conduct 50 customer interviews",
      current: "21 of 50",
      status: "At Risk",
      statusColor: "bg-yellow-500"
    },
    {
      title: "Secure 5 enterprise pilot programs",
      current: "1 of 5",
      status: "Off Track",
      statusColor: "bg-destructive"
    }
  ];

  // Mock data for Lean Canvas
  const leanCanvas = [
    {
      title: "PROBLEM",
      content: "Startups struggle with aligning their daily tasks to high-level strategic goals."
    },
    {
      title: "SOLUTION",
      content: "An integrated platform for OKR and Lean Canvas management."
    },
    {
      title: "KEY METRICS",
      content: "MRR, Churn Rate, User Activation, and Weekly Active Users."
    },
    {
      title: "UVP",
      content: "The simplest way for startups to stay focused and aligned on what truly matters."
    },
    {
      title: "CHANNELS",
      content: "Content Marketing, Direct Sales, Startup Incubators."
    }
  ];

  return (
    <>
      <SideNav items={sideNavItems} title="Strategy" />
      <div className="flex-1 overflow-auto bg-background">
        <div className="p-6 space-y-6">
          <PageBreadcrumbs items={[{ label: "Strategy", href: "/strategy" }, { label: "Dashboard" }]} />
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
              <p className="text-sm text-muted-foreground">
                An overview of key metrics, OKRs, and Lean Canvas progress.
              </p>
            </div>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <PlusIcon className="h-4 w-4 mr-2" />
          Create New OKR
        </Button>
      </div>

      {/* Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-3 mb-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">{metric.value}</div>
              <div className="flex items-center mt-2 text-sm">
                {metric.changeType === "positive" ? (
                  <ArrowUpIcon className="h-4 w-4 text-chart-1 mr-1" />
                ) : (
                  <ArrowDownIcon className="h-4 w-4 text-destructive mr-1" />
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

      {/* Main Content Grid */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Company OKRs */}
        <Card className="md:col-span-2 bg-card border-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Company OKRs - Q4 2024</CardTitle>
              <span className="text-sm text-muted-foreground">Overall: 75%</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {okrs.map((okr, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{okr.title}</span>
                  <span className="text-sm text-muted-foreground">{okr.progress}%</span>
                </div>
                <Progress 
                  value={okr.progress} 
                  className="h-2"
                  style={{
                    backgroundColor: "hsl(var(--muted))"
                  }}
                />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Priority Key Results */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Priority Key Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {priorityKeyResults.map((kr, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{kr.title}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{kr.current}</span>
                  <Badge 
                    className={`${
                      kr.status === "On Track" 
                        ? "bg-chart-1 text-white" 
                        : kr.status === "At Risk"
                        ? "bg-yellow-500 text-white"
                        : "bg-destructive text-white"
                    }`}
                  >
                    {kr.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Lean Canvas Summary */}
      <Card className="mt-4 bg-card border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg font-semibold">Lean Canvas Summary</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                A snapshot of your current business model canvas.
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              View Full Canvas
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-5">
            {leanCanvas.map((section, index) => (
              <div key={index} className="bg-muted/30 rounded-lg p-4 border border-border">
                <h3 className="text-xs font-semibold text-muted-foreground mb-2">
                  {section.title}
                </h3>
                <p className="text-sm text-foreground">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
        </div>
      </div>
    </>
  );
}
