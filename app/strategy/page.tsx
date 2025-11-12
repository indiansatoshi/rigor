"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowUpIcon, ArrowDownIcon, PlusIcon } from "lucide-react";

export default function StrategyDashboard() {
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

  const okrs = [
    {
      objective: "Achieve Product-Market Fit",
      progress: 75,
      keyResults: [
        { description: "Increase user activation rate from 20% to 40%", current: 30, target: 40 },
        { description: "Achieve a Net Promoter Score (NPS) of 50", current: 40, target: 50 },
        { description: "Reduce time to first value from 10 to 5 minutes", current: 7, target: 5 }
      ]
    },
    {
      objective: "Increase Brand Awareness",
      progress: 40,
      keyResults: [
        { description: "Grow social media following to 10K", current: 4000, target: 10000 },
        { description: "Publish 20 thought leadership articles", current: 8, target: 20 }
      ]
    }
  ];

  const leanCanvasSections = [
    { title: "Problem", items: 3, status: "Defined" },
    { title: "Solution", items: 3, status: "In Progress" },
    { title: "Unique Value Proposition", items: 1, status: "Defined" },
    { title: "Customer Segments", items: 2, status: "Validated" }
  ];

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Strategy", href: "/strategy" },
      ]}
      currentPage="Dashboard"
    >
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Strategy Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Track OKRs, Lean Canvas, and strategic metrics
          </p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <PlusIcon className="h-4 w-4 mr-2" />
          New Initiative
        </Button>
      </div>

      {/* Metrics Cards */}
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="bg-card border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
              <div className="flex items-center text-sm">
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
      <div className="grid gap-4 md:grid-cols-2 mb-6">
        {/* Company OKRs */}
        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">Company OKRs - Q4 2024</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {okrs.map((okr, index) => (
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
        <Card className="bg-card border-border">
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
                <Badge 
                  className={`text-xs ${
                    section.status === "Defined" 
                      ? "bg-chart-1 text-white" 
                      : section.status === "Validated"
                      ? "bg-chart-1 text-white"
                      : "bg-chart-3 text-white"
                  }`}
                >
                  {section.status}
                </Badge>
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
