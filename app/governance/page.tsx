"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PlusIcon, TrendingUpIcon, TrendingDownIcon } from "lucide-react";

export default function GovernanceDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Overview metrics
  const overviewMetrics = [
    {
      title: "System Uptime",
      value: "99.8%",
      change: "+0.2%",
      changeType: "positive",
      period: "vs last month"
    },
    {
      title: "Open Support Tickets",
      value: "23",
      change: "-5",
      changeType: "positive",
      period: "vs last week"
    },
    {
      title: "Customer Satisfaction",
      value: "4.6/5",
      change: "+0.3",
      changeType: "positive",
      period: "vs last month"
    },
    {
      title: "Feedback Items",
      value: "47",
      change: "+12",
      changeType: "neutral",
      period: "this month"
    }
  ];

  // Operations data
  const operationsMetrics = [
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

  // Customer Support data
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
  ];

  const categoryStats = [
    { name: "Technical Issue", count: 45, trend: "+12%" },
    { name: "Billing", count: 23, trend: "-5%" },
    { name: "Feature Request", count: 34, trend: "+8%" },
    { name: "How-to", count: 28, trend: "+3%" },
    { name: "Authentication", count: 18, trend: "-2%" },
    { name: "Other", count: 8, trend: "0%" },
  ];

  // Feedback Loop data
  const feedbackMetrics = {
    totalFeedback: 847,
    nps: 42,
    avgRating: 4.2,
    responseRate: 68,
  };

  const feedbackItems = [
    {
      id: "FB-1247",
      user: "Sarah M.",
      type: "feature-request",
      sentiment: "positive",
      rating: 5,
      feedback: "Love the new dashboard! Would be great to have export to PDF functionality.",
      category: "Product",
      date: "2 hours ago",
      status: "under-review",
    },
    {
      id: "FB-1246",
      user: "Mike T.",
      type: "bug-report",
      sentiment: "negative",
      rating: 2,
      feedback: "The mobile app crashes when trying to upload large files.",
      category: "Technical",
      date: "4 hours ago",
      status: "in-progress",
    },
    {
      id: "FB-1245",
      user: "Emma W.",
      type: "general",
      sentiment: "positive",
      rating: 5,
      feedback: "Excellent customer support! My issue was resolved within an hour.",
      category: "Support",
      date: "1 day ago",
      status: "resolved",
    },
  ];

  const sentimentBreakdown = [
    { label: "Positive", count: 542, percentage: 64, color: "bg-chart-1" },
    { label: "Neutral", count: 203, percentage: 24, color: "bg-chart-3" },
    { label: "Negative", count: 102, percentage: 12, color: "bg-destructive" },
  ];

  const topCategories = [
    { name: "Product", count: 234 },
    { name: "Technical", count: 189 },
    { name: "UX", count: 156 },
    { name: "Support", count: 123 },
    { name: "Integration", count: 89 },
    { name: "Other", count: 56 },
  ];

  // Helper functions
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
      case "resolved":
        return "bg-chart-1 text-white";
      case "degraded":
      case "in-progress":
      case "investigating":
        return "bg-chart-2 text-white";
      case "down":
      case "open":
      case "monitoring":
        return "bg-chart-3 text-white";
      case "under-review":
        return "bg-chart-4 text-white";
      case "acknowledged":
      case "planned":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted";
    }
  };

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

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-chart-1 text-white";
      case "neutral":
        return "bg-chart-3 text-white";
      case "negative":
        return "bg-destructive text-white";
      default:
        return "bg-muted";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "feature-request":
        return "bg-chart-2 text-white";
      case "bug-report":
        return "bg-destructive text-white";
      case "general":
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
      currentPage="Dashboard"
    >
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Governance Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Monitor operations, support, and customer feedback
          </p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <PlusIcon className="h-4 w-4 mr-2" />
          New Ticket
        </Button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-border">
        <Button
          variant="ghost"
          className={activeTab === "overview" ? "text-accent border-b-2 border-accent rounded-none" : "text-muted-foreground"}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </Button>
        <Button
          variant="ghost"
          className={activeTab === "operations" ? "text-accent border-b-2 border-accent rounded-none" : "text-muted-foreground"}
          onClick={() => setActiveTab("operations")}
        >
          Operations
        </Button>
        <Button
          variant="ghost"
          className={activeTab === "support" ? "text-accent border-b-2 border-accent rounded-none" : "text-muted-foreground"}
          onClick={() => setActiveTab("support")}
        >
          Customer Support
        </Button>
        <Button
          variant="ghost"
          className={activeTab === "feedback" ? "text-accent border-b-2 border-accent rounded-none" : "text-muted-foreground"}
          onClick={() => setActiveTab("feedback")}
        >
          Feedback Loop
        </Button>
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Metrics Cards */}
          <div className="grid gap-4 md:grid-cols-4">
            {overviewMetrics.map((metric, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{metric.title}</p>
                  <p className="text-3xl font-bold text-foreground mb-2">{metric.value}</p>
                  <div className="flex items-center gap-1 text-sm">
                    {metric.changeType === "positive" && (
                      <TrendingUpIcon className="h-4 w-4 text-chart-1" />
                    )}
                    {metric.changeType === "negative" && (
                      <TrendingDownIcon className="h-4 w-4 text-destructive" />
                    )}
                    <span className={metric.changeType === "positive" ? "text-chart-1" : metric.changeType === "negative" ? "text-destructive" : "text-muted-foreground"}>
                      {metric.change}
                    </span>
                    <span className="text-muted-foreground ml-1">{metric.period}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Stats Grid */}
          <div className="grid gap-4 md:grid-cols-3">
            {/* Operations Summary */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Operations Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">System Uptime</span>
                  <span className="font-medium text-chart-1">99.98%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="font-medium">124ms</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Active Incidents</span>
                  <span className="font-medium text-destructive">2</span>
                </div>
              </CardContent>
            </Card>

            {/* Support Summary */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Support Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Open Tickets</span>
                  <span className="font-medium text-chart-3">{supportMetrics.open}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">In Progress</span>
                  <span className="font-medium text-chart-2">{supportMetrics.inProgress}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Avg Response</span>
                  <span className="font-medium">{supportMetrics.avgResponseTime}</span>
                </div>
              </CardContent>
            </Card>

            {/* Feedback Summary */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Feedback Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">NPS Score</span>
                  <span className="font-medium text-chart-1">{feedbackMetrics.nps}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Avg Rating</span>
                  <span className="font-medium">{feedbackMetrics.avgRating}/5</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Total Feedback</span>
                  <span className="font-medium">{feedbackMetrics.totalFeedback}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Operations Tab */}
      {activeTab === "operations" && (
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid gap-4 md:grid-cols-4">
            {operationsMetrics.map((metric, index) => (
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
      )}

      {/* Customer Support Tab */}
      {activeTab === "support" && (
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
      )}

      {/* Feedback Loop Tab */}
      {activeTab === "feedback" && (
        <div className="space-y-6">
          {/* Feedback Metrics */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Total Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{feedbackMetrics.totalFeedback}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">NPS Score</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-chart-1">{feedbackMetrics.nps}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Avg Rating</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{feedbackMetrics.avgRating}/5</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-muted-foreground">Response Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">{feedbackMetrics.responseRate}%</p>
              </CardContent>
            </Card>
          </div>

          {/* Sentiment Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Sentiment Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sentimentBreakdown.map((sentiment) => (
                  <div key={sentiment.label} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{sentiment.label}</span>
                      <span className="text-muted-foreground">
                        {sentiment.count} ({sentiment.percentage}%)
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${sentiment.color}`}
                        style={{ width: `${sentiment.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Categories */}
          <Card>
            <CardHeader>
              <CardTitle>Feedback by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-3">
                {topCategories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className="text-2xl font-bold">{category.count}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Feedback */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {feedbackItems.map((item) => (
                  <div key={item.id} className="p-4 rounded-md bg-muted/50 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{item.id}</span>
                        <Badge className={getTypeColor(item.type)} variant="outline">
                          {item.type}
                        </Badge>
                        <Badge className={getSentimentColor(item.sentiment)}>
                          {item.sentiment}
                        </Badge>
                        <Badge className={getStatusColor(item.status)}>
                          {item.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${
                              i < item.rating ? "text-chart-1" : "text-muted"
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm">{item.feedback}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span>By: {item.user}</span>
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                      </div>
                      <span>{item.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </PageWrapper>
  );
}
