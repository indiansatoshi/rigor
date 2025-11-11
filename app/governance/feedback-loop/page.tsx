"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FeedbackLoopPage() {
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
    {
      id: "FB-1244",
      user: "David L.",
      type: "feature-request",
      sentiment: "neutral",
      rating: 4,
      feedback: "Integration with Slack would be useful for team notifications.",
      category: "Integration",
      date: "1 day ago",
      status: "planned",
    },
    {
      id: "FB-1243",
      user: "Lisa K.",
      type: "general",
      sentiment: "positive",
      rating: 5,
      feedback: "The UI is intuitive and easy to navigate. Great job!",
      category: "UX",
      date: "2 days ago",
      status: "acknowledged",
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "resolved":
        return "bg-chart-1 text-white";
      case "in-progress":
        return "bg-chart-2 text-white";
      case "planned":
        return "bg-chart-3 text-white";
      case "under-review":
        return "bg-chart-4 text-white";
      case "acknowledged":
        return "bg-muted text-muted-foreground";
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
        { label: "Default Workspace", href: "#" },
        { label: "Governance", href: "/governance" },
      ]}
      currentPage="Feedback Loop"
    >
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
    </PageWrapper>
  );
}
