"use client";

import { useState } from "react";
import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PlusIcon, TrendingUpIcon, TrendingDownIcon } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { MetricCard } from "@/components/dashboard/metric-card";
import { cn } from "@/lib/utils";
import {
  governanceMetrics,
  operationsMetrics,
  incidents,
  services,
  supportMetrics,
  tickets,
  categoryStats,
  feedbackMetrics,
  feedbackItems,
  sentimentBreakdown,
  topCategories
} from "@/lib/mock-data";

export default function GovernanceDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

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
      <DashboardHeader
        title="Governance Dashboard"
        description="Monitor operations, support, and customer feedback"
      >
        <Button variant="default">
          <PlusIcon className="h-4 w-4 mr-2" />
          New Ticket
        </Button>
      </DashboardHeader>

      {/* Tabs */}
      <div className="flex items-center gap-6 mb-6 border-b border-border px-1">
        <button
          className={cn(
            "pb-3 text-sm font-medium transition-colors border-b-2",
            activeTab === "overview"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
          )}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={cn(
            "pb-3 text-sm font-medium transition-colors border-b-2",
            activeTab === "operations"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
          )}
          onClick={() => setActiveTab("operations")}
        >
          Operations
        </button>
        <button
          className={cn(
            "pb-3 text-sm font-medium transition-colors border-b-2",
            activeTab === "support"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
          )}
          onClick={() => setActiveTab("support")}
        >
          Customer Support
        </button>
        <button
          className={cn(
            "pb-3 text-sm font-medium transition-colors border-b-2",
            activeTab === "feedback"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
          )}
          onClick={() => setActiveTab("feedback")}
        >
          Feedback Loop
        </button>
      </div>

      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Metrics Cards */}
          <div className="grid gap-6 md:grid-cols-4">
            {governanceMetrics.map((metric, index) => (
              <MetricCard key={index} metric={metric} />
            ))}
          </div>

          {/* Quick Stats Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {/* Operations Summary */}
            <Card>
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
            <Card>
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
            <Card>
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
          <div className="grid gap-6 md:grid-cols-4">
            {operationsMetrics.map((metric, index) => (
              <Card key={index}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm text-muted-foreground">{metric.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    <p className="text-3xl font-bold">{metric.value}</p>
                    <p
                      className={`text-sm ${metric.trend === "up" ? "text-chart-1" : "text-chart-2"
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
                  <div key={index} className="flex items-center justify-between p-3 rounded-md bg-muted">
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
                  <div key={incident.id} className="flex items-center justify-between p-3 rounded-md bg-muted">
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
          <div className="grid gap-6 md:grid-cols-6">
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
                  <div key={category.name} className="flex items-center justify-between p-3 rounded-md bg-muted">
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
                  <div key={ticket.id} className="flex items-center justify-between p-3 rounded-md bg-muted">
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
          <div className="grid gap-6 md:grid-cols-4">
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
                  <div key={category.name} className="flex items-center justify-between p-3 rounded-md bg-muted">
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
                  <div key={item.id} className="p-4 rounded-md bg-muted space-y-3">
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
                            className={`text-sm ${i < item.rating ? "text-chart-1" : "text-muted"
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
