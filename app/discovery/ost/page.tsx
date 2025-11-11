"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function OSTPage() {
  const ostData = {
    outcome: "Increase user retention by 25% in Q2",
    opportunities: [
      {
        title: "Improve onboarding experience",
        solutions: [
          { name: "Interactive product tour", status: "in-progress" },
          { name: "Personalized setup wizard", status: "planned" },
          { name: "Video tutorials", status: "completed" },
        ],
      },
      {
        title: "Enhance product value perception",
        solutions: [
          { name: "Usage analytics dashboard", status: "in-progress" },
          { name: "ROI calculator", status: "planned" },
          { name: "Success stories showcase", status: "completed" },
        ],
      },
      {
        title: "Reduce friction in key workflows",
        solutions: [
          { name: "Keyboard shortcuts", status: "completed" },
          { name: "Bulk actions", status: "in-progress" },
          { name: "Smart suggestions", status: "planned" },
        ],
      },
    ],
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-chart-1 text-white";
      case "in-progress":
        return "bg-chart-2 text-white";
      case "planned":
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
      currentPage="OST"
    >
      <div className="space-y-6">
        {/* Outcome */}
        <Card className="border-2 border-primary">
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Desired Outcome</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">{ostData.outcome}</p>
          </CardContent>
        </Card>

        {/* Opportunities */}
        <div className="grid gap-4 md:grid-cols-3">
          {ostData.opportunities.map((opp, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-sm">Opportunity {index + 1}</CardTitle>
                <p className="text-base font-semibold mt-2">{opp.title}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground font-semibold">Solutions</p>
                  {opp.solutions.map((solution, sIndex) => (
                    <div
                      key={sIndex}
                      className="flex items-center justify-between p-2 rounded-md bg-muted/50"
                    >
                      <span className="text-sm">{solution.name}</span>
                      <Badge className={getStatusColor(solution.status)}>
                        {solution.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
