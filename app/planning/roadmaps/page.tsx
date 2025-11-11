"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function RoadmapsPage() {
  const quarters = [
    {
      name: "Q1 2024",
      initiatives: [
        { title: "Mobile App Launch", status: "completed", team: "Engineering" },
        { title: "API v2.0", status: "completed", team: "Platform" },
      ],
    },
    {
      name: "Q2 2024",
      initiatives: [
        { title: "Analytics Dashboard", status: "in-progress", team: "Product" },
        { title: "Enterprise SSO", status: "in-progress", team: "Security" },
        { title: "Marketplace Launch", status: "planned", team: "Business" },
      ],
    },
    {
      name: "Q3 2024",
      initiatives: [
        { title: "AI-Powered Insights", status: "planned", team: "Data Science" },
        { title: "White-label Solution", status: "planned", team: "Engineering" },
      ],
    },
    {
      name: "Q4 2024",
      initiatives: [
        { title: "Global Expansion", status: "planned", team: "Business" },
        { title: "Advanced Reporting", status: "planned", team: "Product" },
      ],
    },
  ];

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
        { label: "Planning", href: "/planning" },
      ]}
      currentPage="Roadmaps"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Product Roadmap 2024</h2>
          <div className="flex gap-2">
            <Badge className="bg-chart-1 text-white">Completed</Badge>
            <Badge className="bg-chart-2 text-white">In Progress</Badge>
            <Badge className="bg-muted text-muted-foreground">Planned</Badge>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {quarters.map((quarter, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{quarter.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {quarter.initiatives.map((initiative, iIndex) => (
                    <div key={iIndex} className="space-y-2">
                      <div className="p-3 rounded-md bg-muted/50 space-y-2">
                        <p className="text-sm font-medium">{initiative.title}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{initiative.team}</span>
                          <Badge className={getStatusColor(initiative.status)} variant="outline">
                            {initiative.status}
                          </Badge>
                        </div>
                      </div>
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
