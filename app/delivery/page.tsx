"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PlusIcon, CheckCircleIcon, AlertCircleIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { PageSection } from "@/components/layout/page-section";
import { PageTabs, type PageTab } from "@/components/layout/page-tabs";

export default function DeliveryDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs: PageTab[] = [
    { id: "overview", label: "Overview" },
    { id: "deployment", label: "Deployment" },
    { id: "testing", label: "Testing" },
  ];

  // Overview data
  const overviewMetrics = [
    {
      title: "Active Tasks",
      value: "47",
      change: "+8",
      period: "vs last week"
    },
    {
      title: "Deployments Today",
      value: "5",
      change: "+2",
      period: "vs yesterday"
    },
    {
      title: "Test Pass Rate",
      value: "95.4%",
      change: "+1.2%",
      period: "vs last run"
    },
    {
      title: "Test Coverage",
      value: "87%",
      change: "+2%",
      period: "vs last sprint"
    }
  ];

  // Deployment data
  const deploymentStats = {
    totalDeployments: 342,
    successRate: 96.5,
    avgDuration: "8m 42s",
    lastDeployment: "2 hours ago",
  };

  const environments = [
    {
      name: "Production",
      version: "v2.5.0",
      status: "healthy",
      uptime: "99.98%",
      lastDeployed: "1 day ago",
      deployedBy: "DevOps Team",
    },
    {
      name: "Staging",
      version: "v2.5.1",
      status: "healthy",
      uptime: "99.95%",
      lastDeployed: "4 hours ago",
      deployedBy: "Backend Team",
    },
    {
      name: "Development",
      version: "v2.6.0-beta",
      status: "deploying",
      uptime: "99.92%",
      lastDeployed: "30 minutes ago",
      deployedBy: "Frontend Team",
    },
  ];

  const recentDeployments = [
    {
      id: "DEP-1247",
      version: "v2.5.1",
      environment: "Staging",
      status: "success",
      duration: "7m 23s",
      timestamp: "4 hours ago",
      deployedBy: "Backend Team",
      changes: 12,
    },
    {
      id: "DEP-1246",
      version: "v2.5.0",
      environment: "Production",
      status: "success",
      duration: "9m 15s",
      timestamp: "1 day ago",
      deployedBy: "DevOps Team",
      changes: 24,
    },
    {
      id: "DEP-1245",
      version: "v2.4.9",
      environment: "Production",
      status: "success",
      duration: "8m 42s",
      timestamp: "3 days ago",
      deployedBy: "DevOps Team",
      changes: 8,
    },
  ];

  const pipelineStages = [
    { name: "Build", status: "success", duration: "2m 15s" },
    { name: "Test", status: "success", duration: "4m 32s" },
    { name: "Security Scan", status: "success", duration: "1m 45s" },
    { name: "Deploy", status: "in-progress", duration: "--" },
    { name: "Smoke Tests", status: "pending", duration: "--" },
  ];

  // Testing data
  const testMetrics = {
    totalTests: 1247,
    passed: 1189,
    failed: 42,
    skipped: 16,
    coverage: 87,
    duration: "12m 34s",
  };

  const testSuites = [
    {
      name: "Authentication Tests",
      total: 45,
      passed: 43,
      failed: 2,
      status: "failed",
      coverage: 92,
      lastRun: "2 hours ago",
    },
    {
      name: "API Integration Tests",
      total: 128,
      passed: 128,
      failed: 0,
      status: "passed",
      coverage: 95,
      lastRun: "1 hour ago",
    },
    {
      name: "UI Component Tests",
      total: 234,
      passed: 230,
      failed: 4,
      status: "failed",
      coverage: 88,
      lastRun: "30 minutes ago",
    },
    {
      name: "E2E Tests",
      total: 67,
      passed: 65,
      failed: 2,
      status: "failed",
      coverage: 78,
      lastRun: "45 minutes ago",
    },
    {
      name: "Performance Tests",
      total: 32,
      passed: 32,
      failed: 0,
      status: "passed",
      coverage: 85,
      lastRun: "3 hours ago",
    },
    {
      name: "Security Tests",
      total: 56,
      passed: 56,
      failed: 0,
      status: "passed",
      coverage: 91,
      lastRun: "1 hour ago",
    },
  ];

  const recentFailures = [
    {
      test: "Login with invalid credentials",
      suite: "Authentication Tests",
      error: "Expected status 401, received 500",
      failedAt: "10 minutes ago",
    },
    {
      test: "Render user profile modal",
      suite: "UI Component Tests",
      error: "Cannot read property 'name' of undefined",
      failedAt: "25 minutes ago",
    },
    {
      test: "Complete checkout flow",
      suite: "E2E Tests",
      error: "Timeout waiting for payment confirmation",
      failedAt: "40 minutes ago",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
      case "healthy":
      case "passed":
        return "bg-chart-1 text-white";
      case "deploying":
      case "in-progress":
        return "bg-chart-2 text-white";
      case "failed":
        return "bg-destructive text-white";
      case "pending":
      case "skipped":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted";
    }
  };

  const passRate = (testMetrics.passed / testMetrics.totalTests) * 100;

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Delivery", href: "/delivery" },
      ]}
      currentPage="Dashboard"
    >
      <DashboardHeader
        title="Delivery Dashboard"
        description="Track deployment, testing, and delivery metrics"
      >
        <Button variant="default">
          <PlusIcon className="h-4 w-4 mr-2" />
          New Deployment
        </Button>
      </DashboardHeader>

      <PageTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <PageSection>
          {/* Metrics Cards */}
          <div className="grid gap-4 md:grid-cols-4">
            {overviewMetrics.map((metric, index) => (
              <Card key={index}>
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

          {/* Quick Stats Grid */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Deployment Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Deployment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Deployments</p>
                    <p className="text-2xl font-bold">{deploymentStats.totalDeployments}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                    <p className="text-2xl font-bold text-chart-1">{deploymentStats.successRate}%</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {environments.map((env) => (
                    <div key={env.name} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{env.name}</span>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(env.status)} variant="outline">
                          {env.status}
                        </Badge>
                        <span className="font-medium">{env.version}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Testing Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Testing Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="text-2xl font-bold">{testMetrics.totalTests}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Passed</p>
                    <p className="text-2xl font-bold text-chart-1">{testMetrics.passed}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Failed</p>
                    <p className="text-2xl font-bold text-destructive">{testMetrics.failed}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Pass Rate</span>
                    <span className="font-medium">{passRate.toFixed(1)}%</span>
                  </div>
                  <Progress value={passRate} />
                </div>
              </CardContent>
            </Card>
          </div>
        </PageSection>
      )}

      {/* Deployment Tab */}
      {activeTab === "deployment" && (
        <PageSection>
          {/* Deployment Stats */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Total Deployments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{deploymentStats.totalDeployments}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-chart-1">{deploymentStats.successRate}%</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Avg Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{deploymentStats.avgDuration}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Last Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{deploymentStats.lastDeployment}</p>
              </CardContent>
            </Card>
          </div>

          {/* Current Pipeline */}
          <Card>
            <CardHeader>
              <CardTitle>Current Deployment Pipeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                {pipelineStages.map((stage, index) => (
                  <div key={stage.name} className="flex items-center flex-1">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{stage.name}</span>
                        <Badge className={getStatusColor(stage.status)} variant="outline">
                          {stage.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{stage.duration}</p>
                    </div>
                    {index < pipelineStages.length - 1 && (
                      <div className="mx-2 text-muted-foreground">→</div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Environments */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Environments</h3>
            <div className="grid gap-4 md:grid-cols-3">
              {environments.map((env) => (
                <Card key={env.name}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{env.name}</CardTitle>
                      <Badge className={getStatusColor(env.status)}>
                        {env.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Version</span>
                        <span className="font-medium">{env.version}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Uptime</span>
                        <span className="font-medium">{env.uptime}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Last Deployed</span>
                        <span className="font-medium">{env.lastDeployed}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Deployed By</span>
                        <span className="font-medium">{env.deployedBy}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Deployments */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Deployments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentDeployments.map((deployment) => (
                  <div key={deployment.id} className="flex items-center justify-between p-3 rounded-md bg-muted">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{deployment.id}</span>
                        <Badge variant="outline">{deployment.version}</Badge>
                        <Badge className={getStatusColor(deployment.status)}>
                          {deployment.status}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium">{deployment.environment}</p>
                      <p className="text-xs text-muted-foreground">
                        {deployment.changes} changes • {deployment.duration} • {deployment.timestamp}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">{deployment.deployedBy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </PageSection>
      )}

      {/* Testing Tab */}
      {activeTab === "testing" && (
        <PageSection>
          {/* Test Metrics Overview */}
          <div className="grid gap-4 md:grid-cols-5">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Total Tests</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{testMetrics.totalTests}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Passed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-chart-1">{testMetrics.passed}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Failed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-destructive">{testMetrics.failed}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{testMetrics.coverage}%</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{testMetrics.duration}</p>
              </CardContent>
            </Card>
          </div>

          {/* Pass Rate */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Overall Pass Rate</CardTitle>
                <span className="text-2xl font-bold">{passRate.toFixed(1)}%</span>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={passRate} />
            </CardContent>
          </Card>

          {/* Test Suites */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Test Suites</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {testSuites.map((suite) => {
                const suitePassRate = (suite.passed / suite.total) * 100;
                return (
                  <Card key={suite.name}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">{suite.name}</CardTitle>
                        <Badge className={getStatusColor(suite.status)}>
                          {suite.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Total</p>
                          <p className="font-medium">{suite.total}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Passed</p>
                          <p className="font-medium text-chart-1">{suite.passed}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Failed</p>
                          <p className="font-medium text-destructive">{suite.failed}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Pass Rate</span>
                          <span className="font-medium">{suitePassRate.toFixed(1)}%</span>
                        </div>
                        <Progress value={suitePassRate} />
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Coverage: {suite.coverage}%</span>
                        <span>{suite.lastRun}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Recent Failures */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Failures</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentFailures.map((failure, index) => (
                  <div key={index} className="p-3 rounded-md bg-muted space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="space-y-1 flex-1">
                        <p className="text-sm font-medium">{failure.test}</p>
                        <p className="text-xs text-muted-foreground">{failure.suite}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{failure.failedAt}</span>
                    </div>
                    <p className="text-xs text-destructive font-mono">{failure.error}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </PageSection>
      )}
    </PageWrapper>
  );
}
