"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function CustomerSupportPage() {
  const supportMetrics = {
    totalTickets: 1247,
    open: 156,
    inProgress: 89,
    resolved: 1002,
    avgResponseTime: "2h 15m",
    satisfaction: 4.6,
  };

  const tickets = [
    {
      id: "TICK-1247",
      title: "Unable to login after password reset",
      customer: "Sarah Johnson",
      priority: "high",
      status: "in-progress",
      assignee: "JD",
      created: "2 hours ago",
      category: "Authentication",
    },
    {
      id: "TICK-1246",
      title: "Feature request: Dark mode",
      customer: "Mike Chen",
      priority: "low",
      status: "open",
      assignee: "SM",
      created: "4 hours ago",
      category: "Feature Request",
    },
    {
      id: "TICK-1245",
      title: "Payment processing error",
      customer: "Emma Wilson",
      priority: "critical",
      status: "in-progress",
      assignee: "AK",
      created: "1 hour ago",
      category: "Billing",
    },
    {
      id: "TICK-1244",
      title: "How to export data?",
      customer: "David Brown",
      priority: "medium",
      status: "open",
      assignee: "RJ",
      created: "3 hours ago",
      category: "How-to",
    },
    {
      id: "TICK-1243",
      title: "Dashboard not loading",
      customer: "Lisa Anderson",
      priority: "high",
      status: "resolved",
      assignee: "LP",
      created: "1 day ago",
      category: "Technical Issue",
    },
  ];

  const categoryStats = [
    { name: "Technical Issue", count: 45, trend: "+12%" },
    { name: "Billing", count: 23, trend: "-5%" },
    { name: "Feature Request", count: 34, trend: "+8%" },
    { name: "How-to", count: 28, trend: "+3%" },
    { name: "Authentication", count: 18, trend: "-2%" },
    { name: "Other", count: 8, trend: "0%" },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "critical":
        return "bg-destructive text-white";
      case "high":
        return "bg-chart-2 text-white";
      case "medium":
        return "bg-chart-3 text-white";
      case "low":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "resolved":
        return "bg-chart-1 text-white";
      case "in-progress":
        return "bg-chart-2 text-white";
      case "open":
        return "bg-chart-3 text-white";
      default:
        return "bg-muted";
    }
  };

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Governance", href: "/governance" },
      ]}
      currentPage="Customer Support"
    >
      <div className="space-y-6">
        {/* Support Metrics */}
        <div className="grid gap-4 md:grid-cols-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Total Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{supportMetrics.totalTickets}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Open</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-chart-3">{supportMetrics.open}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">In Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-chart-2">{supportMetrics.inProgress}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Resolved</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-chart-1">{supportMetrics.resolved}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Avg Response</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{supportMetrics.avgResponseTime}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Satisfaction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{supportMetrics.satisfaction}/5</p>
            </CardContent>
          </Card>
        </div>

        {/* Category Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Tickets by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-3">
              {categoryStats.map((category) => (
                <div key={category.name} className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div>
                    <p className="text-sm font-medium">{category.name}</p>
                    <p className="text-xs text-muted-foreground">{category.trend} this week</p>
                  </div>
                  <p className="text-2xl font-bold">{category.count}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Tickets */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Tickets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {tickets.map((ticket) => (
                <div key={ticket.id} className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{ticket.id}</span>
                      <Badge className={getPriorityColor(ticket.priority)} variant="outline">
                        {ticket.priority}
                      </Badge>
                      <Badge className={getStatusColor(ticket.status)}>
                        {ticket.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {ticket.category}
                      </Badge>
                    </div>
                    <p className="text-sm font-medium">{ticket.title}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>Customer: {ticket.customer}</span>
                      <span>Created: {ticket.created}</span>
                    </div>
                  </div>
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">{ticket.assignee}</AvatarFallback>
                  </Avatar>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  );
}
