"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function TestingPage() {
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
      case "passed":
        return "bg-chart-1 text-white";
      case "failed":
        return "bg-destructive text-white";
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
      currentPage="Testing"
    >
      <div className="space-y-6">
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
                <div key={index} className="p-3 rounded-md bg-muted/50 space-y-2">
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
      </div>
    </PageWrapper>
  );
}
