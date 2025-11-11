"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function PIPlanPage() {
  const piData = {
    name: "PI 2024.4",
    startDate: "Nov 1, 2024",
    endDate: "Dec 20, 2024",
    objectives: [
      {
        id: "PI-OBJ-1",
        title: "Launch mobile app MVP",
        businessValue: 10,
        progress: 75,
        teams: ["Mobile", "Backend", "QA"],
        status: "on-track",
      },
      {
        id: "PI-OBJ-2",
        title: "Implement real-time collaboration",
        businessValue: 8,
        progress: 60,
        teams: ["Platform", "Frontend"],
        status: "on-track",
      },
      {
        id: "PI-OBJ-3",
        title: "Enhance security infrastructure",
        businessValue: 9,
        progress: 40,
        teams: ["Security", "DevOps"],
        status: "at-risk",
      },
      {
        id: "PI-OBJ-4",
        title: "Improve system performance by 30%",
        businessValue: 7,
        progress: 85,
        teams: ["Platform", "Backend"],
        status: "on-track",
      },
    ],
  };

  const teams = [
    {
      name: "Mobile Team",
      capacity: 120,
      allocated: 95,
      features: 8,
      status: "healthy",
    },
    {
      name: "Backend Team",
      capacity: 150,
      allocated: 145,
      features: 12,
      status: "at-capacity",
    },
    {
      name: "Frontend Team",
      capacity: 100,
      allocated: 75,
      features: 6,
      status: "healthy",
    },
    {
      name: "Platform Team",
      capacity: 130,
      allocated: 125,
      features: 10,
      status: "healthy",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-track":
        return "bg-chart-1 text-white";
      case "at-risk":
        return "bg-chart-2 text-white";
      case "blocked":
        return "bg-destructive text-white";
      default:
        return "bg-muted";
    }
  };

  const getTeamStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "bg-chart-1 text-white";
      case "at-capacity":
        return "bg-chart-2 text-white";
      case "over-capacity":
        return "bg-destructive text-white";
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
      currentPage="PI Plans"
    >
      <div className="space-y-6">
        {/* PI Header */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">{piData.name}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {piData.startDate} - {piData.endDate}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Overall Progress</p>
                <p className="text-3xl font-bold">
                  {Math.round(
                    piData.objectives.reduce((acc, obj) => acc + obj.progress, 0) /
                      piData.objectives.length
                  )}
                  %
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* PI Objectives */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">PI Objectives</h3>
          {piData.objectives.map((objective) => (
            <Card key={objective.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{objective.id}</span>
                      <Badge className={getStatusColor(objective.status)}>
                        {objective.status}
                      </Badge>
                      <Badge variant="outline">BV: {objective.businessValue}</Badge>
                    </div>
                    <CardTitle className="text-base">{objective.title}</CardTitle>
                    <div className="flex gap-2">
                      {objective.teams.map((team) => (
                        <Badge key={team} variant="outline" className="text-xs">
                          {team}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">{objective.progress}%</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Progress value={objective.progress} />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Capacity */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Team Capacity</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {teams.map((team) => {
              const utilizationPercent = (team.allocated / team.capacity) * 100;
              return (
                <Card key={team.name}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{team.name}</CardTitle>
                      <Badge className={getTeamStatusColor(team.status)}>
                        {team.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Capacity Utilization</span>
                        <span className="font-medium">
                          {team.allocated} / {team.capacity} pts
                        </span>
                      </div>
                      <Progress value={utilizationPercent} />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Features</span>
                      <span className="font-medium">{team.features}</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
