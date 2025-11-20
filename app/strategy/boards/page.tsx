"use client";

import { PageWrapper } from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { SearchInput } from "@/components/ui/search-input";
import { Card, CardContent } from "@/components/ui/card";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { StatusBadge } from "@/components/ui/status-badge";
import {
  SearchIcon,
  PlusIcon,
  ChevronDownIcon,
  CalendarIcon,
  GridIcon,
  ListIcon
} from "lucide-react";

export default function StrategyBoardsPage() {
  const tasks = [
    {
      id: "STR-101",
      title: "Define Q1 2025 OKRs",
      priority: "High" as const,
      labels: ["Strategy"],
      date: "Dec 15",
      assignee: { initials: "JD", avatar: "/avatars/01.png" },
      status: "planned"
    },
    {
      id: "STR-102",
      title: "Update Lean Canvas for new market",
      priority: "Medium" as const,
      labels: ["Planning"],
      date: "Dec 20",
      assignee: { initials: "SS", avatar: "/avatars/02.png" },
      status: "planned"
    },
    {
      id: "STR-103",
      title: "Competitive analysis report",
      priority: "High" as const,
      labels: ["Research"],
      date: "Dec 10",
      assignee: { initials: "AB", avatar: "/avatars/03.png" },
      status: "in-progress"
    },
    {
      id: "STR-104",
      title: "Strategic partnership review",
      priority: "Medium" as const,
      labels: ["Strategy"],
      date: "Dec 5",
      assignees: [
        { initials: "MJ", avatar: "/avatars/04.png" },
        { initials: "CD", avatar: "/avatars/05.png" }
      ],
      status: "in-progress"
    },
    {
      id: "STR-105",
      title: "Market segmentation analysis",
      priority: "Low" as const,
      labels: ["Research"],
      date: "Nov 28",
      completed: true,
      status: "done"
    }
  ];

  const columns = [
    { id: "planned", title: "Planned", count: 2 },
    { id: "in-progress", title: "In Progress", count: 2 },
    { id: "done", title: "Done", count: 1 }
  ];

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Strategy", href: "/strategy" },
      ]}
      currentPage="Boards"
    >
      <DashboardHeader
        title="Strategy Boards"
        description="Track strategic initiatives and planning activities"
      >
        <div className="flex items-center gap-2">
          <SearchInput
            placeholder="Search..."
            className="w-64"
          />
          <Button variant="default">
            <PlusIcon className="h-4 w-4 mr-2" />
            New Task
          </Button>
        </div>
      </DashboardHeader>

      {/* Filters */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Button variant="default" size="sm" className="bg-accent text-accent-foreground">
            All
          </Button>
          <Button variant="outline" size="sm">
            Assignee
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </Button>
          <Button variant="outline" size="sm">
            Priority
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </Button>
          <Button variant="outline" size="sm">
            Labels
            <ChevronDownIcon className="h-4 w-4 ml-1" />
          </Button>
          <Button variant="ghost" size="sm" className="text-accent">
            Clear filters
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <GridIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <ListIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-3 gap-6">
        {columns.map((column) => (
          <div key={column.id} className="space-y-4">
            {/* Column Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-foreground">
                {column.title} <span className="text-muted-foreground ml-1">{column.count}</span>
              </h3>
            </div>

            {/* Task Cards */}
            <div className="space-y-3">
              {getTasksByStatus(column.id).map((task) => (
                <Card
                  key={task.id}
                  className="hover:border-primary transition-colors cursor-pointer"
                >
                  <CardContent className="p-4 space-y-3">
                    {/* Task ID */}
                    <div className="flex items-start justify-between">
                      <span className="text-xs font-semibold text-muted-foreground">{task.id}</span>
                    </div>

                    {/* Task Title */}
                    <h4 className="text-sm font-medium text-foreground leading-snug line-clamp-2">
                      {task.title}
                    </h4>

                    {/* Labels */}
                    <div className="flex flex-wrap gap-2">
                      {task.priority && (
                        <StatusBadge priority={task.priority} />
                      )}
                      {task.labels && task.labels.map((label, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {label}
                        </Badge>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <CalendarIcon className="h-3 w-3" />
                        <span>{task.date}</span>
                      </div>
                      {task.assignees ? (
                        <div className="flex items-center -space-x-2">
                          {task.assignees.map((assignee, index) => (
                            <Avatar key={index} className="h-6 w-6 border-2 border-card">
                              <AvatarImage src={assignee.avatar} />
                              <AvatarFallback className="bg-accent text-accent-foreground text-[10px]">
                                {assignee.initials}
                              </AvatarFallback>
                            </Avatar>
                          ))}
                        </div>
                      ) : task.assignee ? (
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={task.assignee.avatar} />
                          <AvatarFallback className="bg-accent text-accent-foreground text-[10px]">
                            {task.assignee.initials}
                          </AvatarFallback>
                        </Avatar>
                      ) : null}
                    </div>

                    {/* Completed Checkmark */}
                    {task.completed && (
                      <div className="flex items-center gap-1 text-xs text-chart-1">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Completed</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}
