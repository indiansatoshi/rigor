"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function DeploymentPage() {
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
    {
      id: "DEP-1244",
      version: "v2.4.8",
      environment: "Staging",
      status: "failed",
      duration: "3m 12s",
      timestamp: "4 days ago",
      deployedBy: "Backend Team",
      changes: 15,
    },
  ];

  const pipelineStages = [
    { name: "Build", status: "success", duration: "2m 15s" },
    { name: "Test", status: "success", duration: "4m 32s" },
    { name: "Security Scan", status: "success", duration: "1m 45s" },
    { name: "Deploy", status: "in-progress", duration: "--" },
    { name: "Smoke Tests", status: "pending", duration: "--" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
      case "healthy":
        return "bg-chart-1 text-white";
      case "deploying":
      case "in-progress":
        return "bg-chart-2 text-white";
      case "failed":
        return "bg-destructive text-white";
      case "pending":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted";
    }
  };

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Delivery", href: "/delivery" },
      ]}
      currentPage="Deployment"
    >
      <div className="space-y-6">
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
                <div key={deployment.id} className="flex items-center justify-between p-3 rounded-md bg-muted/50">
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
      </div>
    </PageWrapper>
  );
}
