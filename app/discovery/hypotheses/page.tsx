"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function HypothesesPage() {
  const hypotheses = [
    {
      id: "HYP-001",
      hypothesis: "If we add social proof on the pricing page, then conversion rate will increase by 15%",
      status: "validated",
      confidence: "High",
      results: "Conversion increased by 18% over 2 weeks",
    },
    {
      id: "HYP-002",
      hypothesis: "If we reduce form fields from 8 to 4, then signup completion will increase by 25%",
      status: "testing",
      confidence: "Medium",
      results: "Test in progress - 45% complete",
    },
    {
      id: "HYP-003",
      hypothesis: "If we implement dark mode, then user engagement will increase by 10%",
      status: "invalidated",
      confidence: "Low",
      results: "No significant change in engagement metrics",
    },
    {
      id: "HYP-004",
      hypothesis: "If we add video onboarding, then activation rate will increase by 30%",
      status: "draft",
      confidence: "High",
      results: "Not yet tested",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "validated":
        return "bg-chart-1 text-white";
      case "testing":
        return "bg-chart-2 text-white";
      case "invalidated":
        return "bg-destructive text-white";
      case "draft":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted";
    }
  };

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Default Workspace", href: "#" },
        { label: "Discovery", href: "/discovery" },
      ]}
      currentPage="Hypotheses"
    >
      <div className="grid gap-4 md:grid-cols-2">
        {hypotheses.map((hyp) => (
          <Card key={hyp.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm text-muted-foreground">{hyp.id}</CardTitle>
                <div className="flex gap-2">
                  <Badge variant="outline">{hyp.confidence}</Badge>
                  <Badge className={getStatusColor(hyp.status)}>{hyp.status}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm font-medium">{hyp.hypothesis}</p>
              <div className="pt-2 border-t">
                <p className="text-xs text-muted-foreground mb-1">Results</p>
                <p className="text-sm">{hyp.results}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageWrapper>
  );
}
