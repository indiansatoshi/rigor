"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function OperationsPage() {
  const metrics = [
    { label: "System Uptime", value: "99.98%", trend: "up", change: "+0.02%" },
    { label: "Response Time", value: "124ms", trend: "down", change: "-15ms" },
    { label: "Error Rate", value: "0.12%", trend: "down", change: "-0.03%" },
    { label: "Active Users", value: "8,547", trend: "up", change: "+234" },
  ];

  const incidents = [
    {
      id: "INC-001",
      title: "Database connection timeout",
      severity: "high",
      status: "resolved",
      time: "2 hours ago",
    },
    {
      id: "INC-002",
      title: "API rate limit exceeded",
      severity: "medium",
      status: "investigating",
      time: "30 minutes ago",
    },
    {
      id: "INC-003",
      title: "Slow page load times",
      severity: "low",
      status: "monitoring",
      time: "1 hour ago",
    },
  ];

  const services = [
    { name: "API Gateway", status: "operational", latency: "45ms" },
    { name: "Database", status: "operational", latency: "12ms" },
    { name: "Cache Layer", status: "operational", latency: "3ms" },
    { name: "Message Queue", status: "degraded", latency: "156ms" },
    { name: "Storage", status: "operational", latency: "28ms" },
    { name: "CDN", status: "operational", latency: "89ms" },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-destructive text-white";
      case "medium":
        return "bg-chart-2 text-white";
      case "low":
        return "bg-chart-3 text-white";
      default:
        return "bg-muted";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "bg-chart-1 text-white";
      case "degraded":
        return "bg-chart-2 text-white";
      case "down":
        return "bg-destructive text-white";
      default:
        return "bg-muted";
    }
  };

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Governance", href: "/governance" },
      ]}
      currentPage="Operations"
    >
      <div className="space-y-6">
        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-4">
          {metrics.map((metric, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">{metric.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-3xl font-bold">{metric.value}</p>
                  <p
                    className={`text-sm ${
                      metric.trend === "up" ? "text-chart-1" : "text-chart-2"
                    }`}
                  >
                    {metric.change}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Status */}
        <Card>
          <CardHeader>
            <CardTitle>Service Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-3">
              {services.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div>
                    <p className="text-sm font-medium">{service.name}</p>
                    <p className="text-xs text-muted-foreground">{service.latency}</p>
                  </div>
                  <Badge className={getStatusColor(service.status)} variant="outline">
                    {service.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Incidents */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Incidents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {incidents.map((incident) => (
                <div key={incident.id} className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{incident.id}</span>
                      <Badge className={getSeverityColor(incident.severity)} variant="outline">
                        {incident.severity}
                      </Badge>
                    </div>
                    <p className="text-sm font-medium">{incident.title}</p>
                    <p className="text-xs text-muted-foreground">{incident.time}</p>
                  </div>
                  <Badge variant="outline">{incident.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  );
}
