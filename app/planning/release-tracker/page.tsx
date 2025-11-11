"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ReleaseTrackerPage() {
  const releases = [
    {
      version: "v2.5.0",
      name: "Winter Release",
      status: "deployed",
      environment: "production",
      date: "Nov 10, 2024",
      features: 12,
      bugFixes: 8,
      deployedBy: "DevOps Team",
    },
    {
      version: "v2.5.1",
      name: "Hotfix Release",
      status: "in-staging",
      environment: "staging",
      date: "Nov 11, 2024",
      features: 0,
      bugFixes: 3,
      deployedBy: "Backend Team",
    },
    {
      version: "v2.6.0",
      name: "Holiday Feature Release",
      status: "in-progress",
      environment: "development",
      date: "Nov 25, 2024 (planned)",
      features: 15,
      bugFixes: 5,
      deployedBy: "TBD",
    },
    {
      version: "v2.4.0",
      name: "Autumn Release",
      status: "deployed",
      environment: "production",
      date: "Oct 15, 2024",
      features: 10,
      bugFixes: 12,
      deployedBy: "DevOps Team",
    },
  ];

  const deploymentPipeline = [
    {
      stage: "Development",
      version: "v2.6.0",
      status: "active",
      lastDeployed: "2 hours ago",
      health: "healthy",
    },
    {
      stage: "Staging",
      version: "v2.5.1",
      status: "active",
      lastDeployed: "4 hours ago",
      health: "healthy",
    },
    {
      stage: "Production",
      version: "v2.5.0",
      status: "active",
      lastDeployed: "1 day ago",
      health: "healthy",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "deployed":
        return "bg-chart-1 text-white";
      case "in-staging":
        return "bg-chart-2 text-white";
      case "in-progress":
        return "bg-chart-3 text-white";
      case "failed":
        return "bg-destructive text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getHealthColor = (health: string) => {
    switch (health) {
      case "healthy":
        return "bg-chart-1 text-white";
      case "warning":
        return "bg-chart-2 text-white";
      case "critical":
        return "bg-destructive text-white";
      default:
        return "bg-muted";
    }
  };

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Planning", href: "/planning" },
      ]}
      currentPage="Release Tracker"
    >
      <div className="space-y-6">
        {/* Deployment Pipeline */}
        <Card>
          <CardHeader>
            <CardTitle>Deployment Pipeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {deploymentPipeline.map((stage) => (
                <div key={stage.stage} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{stage.stage}</h4>
                    <Badge className={getHealthColor(stage.health)}>
                      {stage.health}
                    </Badge>
                  </div>
                  <div className="p-4 rounded-md bg-muted/50 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Version</span>
                      <span className="text-sm font-medium">{stage.version}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Status</span>
                      <Badge variant="outline">{stage.status}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Last Deploy</span>
                      <span className="text-xs text-muted-foreground">{stage.lastDeployed}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Release History */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Release History</h3>
          <div className="grid gap-4">
            {releases.map((release) => (
              <Card key={release.version}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{release.version}</CardTitle>
                        <Badge className={getStatusColor(release.status)}>
                          {release.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{release.name}</p>
                    </div>
                    <Badge variant="outline">{release.environment}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Release Date</p>
                      <p className="text-sm font-medium">{release.date}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Features</p>
                      <p className="text-sm font-medium">{release.features}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Bug Fixes</p>
                      <p className="text-sm font-medium">{release.bugFixes}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Deployed By</p>
                      <p className="text-sm font-medium">{release.deployedBy}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
