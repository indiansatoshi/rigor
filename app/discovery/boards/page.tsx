"use client";

import { PageWrapper } from "@/components/page-wrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  SearchIcon,
  PlusIcon,
  ChevronDownIcon,
  CalendarIcon,
  GridIcon,
  ListIcon
} from "lucide-react";

export default function DiscoveryBoardsPage() {
  const tasks = [
    {
      id: "DIS-101",
      title: "Validate pricing hypothesis with users",
      priority: "High Priority",
      priorityColor: "bg-destructive",
      labels: ["Hypothesis"],
      labelColors: ["bg-accent"],
      date: "Dec 12",
      assignee: { initials: "JD", avatar: "/avatars/01.png" },
      status: "backlog"
    },
    {
      id: "DIS-102",
      title: "User interview for feature discovery",
      priority: "Medium Priority",
      priorityColor: "bg-yellow-500",
      labels: ["Research"],
      labelColors: ["bg-purple-500"],
      date: "Dec 18",
      assignee: { initials: "SS", avatar: "/avatars/02.png" },
      status: "backlog"
    },
    {
      id: "DIS-103",
      title: "A/B test onboarding flow",
      priority: "High Priority",
      priorityColor: "bg-destructive",
      labels: ["Testing"],
      labelColors: ["bg-chart-3"],
      date: "Dec 8",
      assignee: { initials: "AB", avatar: "/avatars/03.png" },
      status: "testing"
    },
    {
      id: "DIS-104",
      title: "Analyze user behavior metrics",
      priority: "Medium Priority",
      priorityColor: "bg-yellow-500",
      labels: ["Analytics"],
      labelColors: ["bg-secondary"],
      date: "Dec 3",
      assignees: [
        { initials: "MJ", avatar: "/avatars/04.png" },
        { initials: "CD", avatar: "/avatars/05.png" }
      ],
      status: "testing"
    },
    {
      id: "DIS-105",
      title: "Customer feedback survey results",
      priority: "Low Priority",
      priorityColor: "bg-chart-1",
      labels: ["Research"],
      labelColors: ["bg-purple-500"],
      date: "Nov 25",
      completed: true,
      status: "validated"
    }
  ];

  const columns = [
    { id: "backlog", title: "Backlog", count: 2 },
    { id: "testing", title: "Testing", count: 2 },
    { id: "validated", title: "Validated", count: 1 }
  ];

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Discovery", href: "/discovery" },
      ]}
      currentPage="Boards"
    >
      {/* Page Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Discovery Boards</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Track hypothesis validation and research activities
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-9 w-64"
            />
          </div>
          <Button variant="default">
            <PlusIcon className="h-4 w-4 mr-2" />
            New Task
          </Button>
        </div>
      </div>

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
      <div className="grid grid-cols-3 gap-4">
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
                <div
                  key={task.id}
                  className="bg-card border border-border rounded-lg p-4 space-y-3 hover:border-accent transition-colors cursor-pointer"
                >
                  {/* Task ID */}
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-semibold text-muted-foreground">{task.id}</span>
                  </div>

                  {/* Task Title */}
                  <h4 className="text-sm font-medium text-foreground leading-snug">
                    {task.title}
                  </h4>

                  {/* Labels */}
                  {task.labels && task.labels.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {task.priority && (
                        <Badge className={`${task.priorityColor} text-white text-xs`}>
                          {task.priority}
                        </Badge>
                      )}
                      {task.labels.map((label, index) => (
                        <Badge
                          key={index}
                          className={`${task.labelColors[index]} text-white text-xs`}
                        >
                          {label}
                        </Badge>
                      ))}
                    </div>
                  )}

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
                      <span>{task.date}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Add Button */}
      <Button
        className="fixed bottom-8 right-8 rounded-full h-14 w-14 shadow-lg"
        variant="default"
        size="icon"
      >
        <PlusIcon className="h-6 w-6" />
      </Button>
    </PageWrapper>
  );
}
