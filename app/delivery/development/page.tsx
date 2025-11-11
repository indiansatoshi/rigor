"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function DevelopmentPage() {
  const sprintData = {
    name: "Sprint 24",
    startDate: "Nov 4, 2024",
    endDate: "Nov 18, 2024",
    velocity: 42,
    committed: 45,
    completed: 28,
  };

  const tasks = [
    {
      id: "DEV-123",
      title: "Implement user authentication",
      assignee: "JD",
      priority: "high",
      status: "in-progress",
      points: 8,
    },
    {
      id: "DEV-124",
      title: "Fix payment gateway integration",
      assignee: "SM",
      priority: "critical",
      status: "in-progress",
      points: 5,
    },
    {
      id: "DEV-125",
      title: "Add dark mode support",
      assignee: "AK",
      priority: "medium",
      status: "completed",
      points: 3,
    },
    {
      id: "DEV-126",
      title: "Optimize database queries",
      assignee: "RJ",
      priority: "high",
      status: "completed",
      points: 5,
    },
    {
      id: "DEV-127",
      title: "Update API documentation",
      assignee: "LP",
      priority: "low",
      status: "todo",
      points: 2,
    },
    {
      id: "DEV-128",
      title: "Implement real-time notifications",
      assignee: "JD",
      priority: "medium",
      status: "todo",
      points: 8,
    },
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

  const groupedTasks = {
    todo: tasks.filter((t) => t.status === "todo"),
    "in-progress": tasks.filter((t) => t.status === "in-progress"),
    completed: tasks.filter((t) => t.status === "completed"),
  };

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Delivery", href: "/delivery" },
      ]}
      currentPage="Development"
    >
      <div className="space-y-6">
        {/* Sprint Header */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{sprintData.name}</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  {sprintData.startDate} - {sprintData.endDate}
                </p>
              </div>
              <div className="flex gap-6 text-sm">
                <div>
                  <p className="text-muted-foreground">Velocity</p>
                  <p className="text-2xl font-bold">{sprintData.velocity}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Committed</p>
                  <p className="text-2xl font-bold">{sprintData.committed}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold text-chart-1">{sprintData.completed}</p>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Sprint Board */}
        <div className="grid gap-4 md:grid-cols-3">
          {Object.entries(groupedTasks).map(([status, statusTasks]) => (
            <Card key={status}>
              <CardHeader>
                <CardTitle className="text-sm capitalize">
                  {status.replace("-", " ")} ({statusTasks.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {statusTasks.map((task) => (
                    <div key={task.id} className="p-3 rounded-md bg-muted/50 space-y-2">
                      <div className="flex items-start justify-between">
                        <span className="text-xs text-muted-foreground">{task.id}</span>
                        <Badge className={getPriorityColor(task.priority)} variant="outline">
                          {task.priority}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium">{task.title}</p>
                      <div className="flex items-center justify-between">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">{task.assignee}</AvatarFallback>
                        </Avatar>
                        <span className="text-xs text-muted-foreground">{task.points} pts</span>
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
